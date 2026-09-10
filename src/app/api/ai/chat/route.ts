import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { SYSTEM_PROMPT } from "@/components/chatbot/system-prompt";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";
const MAX_MESSAGES = 24;
const MAX_CHARS_PER_MESSAGE = 4000;
const MAX_TOTAL_CHARS = 14000;
const REQUEST_TIMEOUT_MS = 30_000;

// Limitador simples por IP (best-effort, reinicia a cada cold start).
const WINDOW_MS = 60_000;
const MAX_REQ_PER_WINDOW = 20;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
    const now = Date.now();
    const arr = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
    arr.push(now);
    hits.set(ip, arr);
    if (hits.size > 5000) hits.clear();
    return arr.length > MAX_REQ_PER_WINDOW;
}

type InMessage = { role: "user" | "assistant"; content: string };

function json(body: unknown, status: number) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { "content-type": "application/json" },
    });
}

function validate(payload: unknown): { ok: true; messages: InMessage[] } | { ok: false; error: string } {
    if (typeof payload !== "object" || payload === null || !Array.isArray((payload as { messages?: unknown }).messages)) {
        return { ok: false, error: "Formato inválido: envie { messages: [...] }." };
    }
    const raw = (payload as { messages: unknown[] }).messages;
    if (raw.length === 0) return { ok: false, error: "Nenhuma mensagem recebida." };
    if (raw.length > MAX_MESSAGES) return { ok: false, error: "Conversa muito longa. Recomece o chat." };

    const messages: InMessage[] = [];
    let total = 0;
    for (const m of raw) {
        if (typeof m !== "object" || m === null) return { ok: false, error: "Mensagem inválida." };
        const { role, content } = m as { role?: unknown; content?: unknown };
        if (role !== "user" && role !== "assistant") return { ok: false, error: "Papel de mensagem inválido." };
        if (typeof content !== "string" || content.trim().length === 0) {
            return { ok: false, error: "Conteúdo de mensagem vazio." };
        }
        if (content.length > MAX_CHARS_PER_MESSAGE) {
            return { ok: false, error: "Mensagem muito longa. Resuma sua pergunta." };
        }
        total += content.length;
        messages.push({ role, content: content.slice(0, MAX_CHARS_PER_MESSAGE) });
    }
    if (total > MAX_TOTAL_CHARS) return { ok: false, error: "Conversa muito longa. Recomece o chat." };
    if (messages[messages.length - 1].role !== "user") {
        return { ok: false, error: "A última mensagem deve ser do usuário." };
    }
    return { ok: true, messages };
}

export async function POST(req: NextRequest) {
    if (!process.env.ANTHROPIC_API_KEY) {
        return json(
            { error: "O assistente não está configurado no momento. Fale com um especialista pelo formulário ou WhatsApp." },
            503,
        );
    }

    const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        req.headers.get("x-real-ip") ||
        "anon";
    if (rateLimited(ip)) {
        return json({ error: "Muitas mensagens em pouco tempo. Aguarde um instante e tente novamente." }, 429);
    }

    let payload: unknown;
    try {
        payload = await req.json();
    } catch {
        return json({ error: "Não foi possível ler a requisição." }, 400);
    }

    const result = validate(payload);
    if (!result.ok) return json({ error: result.error }, 400);

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY, maxRetries: 1 });
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    const encoder = new TextEncoder();

    try {
        const stream = client.messages.stream(
            {
                model: MODEL,
                max_tokens: 1024,
                system: SYSTEM_PROMPT,
                thinking: { type: "disabled" },
                output_config: { effort: "low" },
                messages: result.messages.map((m) => ({ role: m.role, content: m.content })),
            },
            { signal: controller.signal },
        );

        const body = new ReadableStream<Uint8Array>({
            async start(ctrl) {
                const send = (event: string, data: unknown) =>
                    ctrl.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
                try {
                    stream.on("text", (delta) => send("delta", { text: delta }));
                    await stream.finalMessage();
                    send("done", { ok: true });
                } catch (err) {
                    const aborted = err instanceof Error && err.name === "AbortError";
                    send("error", {
                        error: aborted
                            ? "A resposta demorou demais. Tente uma pergunta mais direta."
                            : "Tive um problema para responder agora. Tente novamente em instantes.",
                    });
                } finally {
                    clearTimeout(timeout);
                    ctrl.close();
                }
            },
            cancel() {
                controller.abort();
                clearTimeout(timeout);
            },
        });

        return new Response(body, {
            headers: {
                "content-type": "text/event-stream; charset=utf-8",
                "cache-control": "no-cache, no-transform",
                connection: "keep-alive",
            },
        });
    } catch (err) {
        clearTimeout(timeout);
        if (err instanceof Anthropic.AuthenticationError) {
            return json({ error: "O assistente está temporariamente indisponível." }, 503);
        }
        if (err instanceof Anthropic.RateLimitError) {
            return json({ error: "Estamos com muitas solicitações agora. Tente novamente em instantes." }, 429);
        }
        return json({ error: "Não consegui iniciar a resposta. Tente novamente." }, 500);
    }
}
