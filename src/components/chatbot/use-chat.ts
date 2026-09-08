"use client";

import { useCallback, useRef, useState } from "react";

export type ChatRole = "user" | "assistant";
export type ChatMessage = { id: string; role: ChatRole; content: string };

type Status = "idle" | "streaming" | "error";

const uid = () => Math.random().toString(36).slice(2);

export function useChat() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState<string | null>(null);
    const abortRef = useRef<AbortController | null>(null);
    const lastUserRef = useRef<string>("");

    const run = useCallback(async (history: ChatMessage[]) => {
        setStatus("streaming");
        setError(null);
        const assistantId = uid();
        setMessages((m) => [...m, { id: assistantId, role: "assistant", content: "" }]);

        const controller = new AbortController();
        abortRef.current = controller;

        try {
            const res = await fetch("/api/ai/chat", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    messages: history.map(({ role, content }) => ({ role, content })),
                }),
                signal: controller.signal,
            });

            if (!res.ok || !res.body) {
                let msg = "Não consegui responder agora. Tente novamente.";
                try {
                    const j = await res.json();
                    if (j?.error) msg = j.error;
                } catch {
                    /* ignore */
                }
                throw new Error(msg);
            }

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let buffer = "";
            let streamError: string | null = null;

            // eslint-disable-next-line no-constant-condition
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, { stream: true });
                const chunks = buffer.split("\n\n");
                buffer = chunks.pop() ?? "";
                for (const chunk of chunks) {
                    const evLine = chunk.split("\n").find((l) => l.startsWith("event:"));
                    const dataLine = chunk.split("\n").find((l) => l.startsWith("data:"));
                    if (!dataLine) continue;
                    const event = evLine?.slice(6).trim();
                    let data: { text?: string; error?: string } = {};
                    try {
                        data = JSON.parse(dataLine.slice(5).trim());
                    } catch {
                        continue;
                    }
                    if (event === "delta" && data.text) {
                        setMessages((m) =>
                            m.map((msg) =>
                                msg.id === assistantId ? { ...msg, content: msg.content + data.text } : msg,
                            ),
                        );
                    } else if (event === "error") {
                        streamError = data.error ?? "Tive um problema para responder.";
                    }
                }
            }

            if (streamError) {
                setMessages((m) => m.filter((msg) => !(msg.id === assistantId && msg.content === "")));
                setError(streamError);
                setStatus("error");
                return;
            }

            setMessages((m) =>
                m.map((msg) =>
                    msg.id === assistantId && msg.content === ""
                        ? { ...msg, content: "Desculpe, não consegui formular uma resposta. Tente reformular a pergunta." }
                        : msg,
                ),
            );
            setStatus("idle");
        } catch (err) {
            if (err instanceof DOMException && err.name === "AbortError") {
                setMessages((m) => m.filter((msg) => !(msg.id === assistantId && msg.content === "")));
                setStatus("idle");
                return;
            }
            setMessages((m) => m.filter((msg) => !(msg.id === assistantId && msg.content === "")));
            setError(err instanceof Error ? err.message : "Erro inesperado.");
            setStatus("error");
        } finally {
            abortRef.current = null;
        }
    }, []);

    const send = useCallback(
        (text: string) => {
            const trimmed = text.trim();
            if (!trimmed || status === "streaming") return;
            lastUserRef.current = trimmed;
            const next: ChatMessage[] = [...messages, { id: uid(), role: "user", content: trimmed }];
            setMessages(next);
            void run(next);
        },
        [messages, run, status],
    );

    const retry = useCallback(() => {
        if (status === "streaming") return;
        const history = [...messages];
        while (history.length && history[history.length - 1].role !== "user") history.pop();
        if (!history.length) return;
        setMessages(history);
        setError(null);
        void run(history);
    }, [messages, run, status]);

    const stop = useCallback(() => abortRef.current?.abort(), []);

    const reset = useCallback(() => {
        abortRef.current?.abort();
        setMessages([]);
        setStatus("idle");
        setError(null);
    }, []);

    return { messages, status, error, send, retry, stop, reset };
}
