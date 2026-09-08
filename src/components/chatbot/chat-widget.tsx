"use client";

import { cn } from "@/lib";
import { SITE } from "@/constants/site";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpIcon, RotateCcwIcon, SparklesIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useChat } from "./use-chat";

const SUGGESTIONS = [
    "Como funciona o MSP?",
    "Quais serviços vocês oferecem?",
    "O que é Service Desk?",
    "Vocês cuidam de infraestrutura?",
    "Como funciona o suporte?",
    "Quero falar com um especialista.",
];

const ease = [0.22, 1, 0.36, 1] as const;

const TypingDots = () => (
    <span className="flex items-center gap-1 py-1">
        {[0, 1, 2].map((i) => (
            <motion.span
                key={i}
                className="size-1.5 rounded-full bg-muted-foreground/70"
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
            />
        ))}
    </span>
);

const ChatWidget = () => {
    const reduce = useReducedMotion();
    const [open, setOpen] = useState(false);
    const { messages, status, error, send, retry, reset } = useChat();
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [draft, setDraft] = useState("");

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, status]);

    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 250);
    }, [open]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && open) setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    const submit = () => {
        if (!draft.trim() || status === "streaming") return;
        send(draft);
        setDraft("");
    };

    const streaming = status === "streaming";
    const lastIsEmptyAssistant =
        messages.length > 0 &&
        messages[messages.length - 1].role === "assistant" &&
        messages[messages.length - 1].content === "";

    return (
        <>
            {/* launcher */}
            <AnimatePresence>
                {!open && (
                    <motion.button
                        type="button"
                        onClick={() => setOpen(true)}
                        aria-label="Abrir o assistente Oliver IA"
                        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.7, y: 16 }}
                        animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
                        exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.7, y: 16 }}
                        transition={{ duration: 0.28, ease }}
                        className="group fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full border border-border/70 bg-background/90 py-2.5 pl-3 pr-4 shadow-xl shadow-black/30 backdrop-blur-md transition-colors hover:border-blue-500/50"
                    >
                        <span className="relative flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white">
                            <SparklesIcon className="size-4" />
                            <span className="absolute inset-0 rounded-full bg-blue-500/40 blur-md" />
                        </span>
                        <span className="text-sm font-medium text-foreground">Fale com a Oliver</span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        role="dialog"
                        aria-label="Assistente Oliver IA"
                        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
                        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
                        transition={{ duration: 0.3, ease }}
                        className="fixed inset-x-3 bottom-3 z-50 flex h-[min(78dvh,620px)] flex-col overflow-hidden rounded-2xl border border-border/70 bg-background/95 shadow-2xl shadow-black/50 backdrop-blur-xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[400px]"
                    >
                        {/* header */}
                        <div className="relative flex items-center justify-between border-b border-border/60 px-4 py-3">
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -top-16 left-1/2 h-28 w-2/3 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[4rem]"
                            />
                            <div className="relative flex items-center gap-2.5">
                                <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white">
                                    <SparklesIcon className="size-4" />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Oliver IA</p>
                                    <p className="text-xs text-muted-foreground">Como posso ajudar?</p>
                                </div>
                            </div>
                            <div className="relative flex items-center gap-1">
                                {messages.length > 0 && (
                                    <button
                                        type="button"
                                        onClick={reset}
                                        aria-label="Recomeçar a conversa"
                                        className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                                    >
                                        <RotateCcwIcon className="size-4" />
                                    </button>
                                )}
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    aria-label="Fechar o assistente"
                                    className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                                >
                                    <XIcon className="size-4" />
                                </button>
                            </div>
                        </div>

                        {/* messages */}
                        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
                            {messages.length === 0 && (
                                <div className="space-y-3">
                                    <p className="text-sm text-muted-foreground">
                                        Sou o assistente da Oliver Network. Posso explicar os serviços
                                        gerenciados, o Service Desk, a infraestrutura e como falar com um
                                        especialista.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {SUGGESTIONS.map((s) => (
                                            <button
                                                key={s}
                                                type="button"
                                                onClick={() => send(s)}
                                                className="rounded-full border border-border/60 bg-card/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-blue-500/40 hover:text-foreground"
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {messages.map((m) => (
                                <motion.div
                                    key={m.id}
                                    initial={reduce ? undefined : { opacity: 0, y: 8 }}
                                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25, ease }}
                                    className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
                                >
                                    <div
                                        className={cn(
                                            "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                                            m.role === "user"
                                                ? "bg-blue-500 text-white"
                                                : "border border-border/60 bg-card/50 text-foreground",
                                        )}
                                    >
                                        {m.content || (streaming ? <TypingDots /> : null)}
                                    </div>
                                </motion.div>
                            ))}

                            {streaming && !lastIsEmptyAssistant && (
                                <div className="flex justify-start">
                                    <div className="rounded-2xl border border-border/60 bg-card/50 px-3.5 py-2.5">
                                        <TypingDots />
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 text-sm text-red-300">
                                    <p>{error}</p>
                                    <button
                                        type="button"
                                        onClick={retry}
                                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-red-200 hover:text-white"
                                    >
                                        <RotateCcwIcon className="size-3" />
                                        Tentar novamente
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* input */}
                        <div className="border-t border-border/60 p-3">
                            <div className="flex items-end gap-2 rounded-xl border border-border/60 bg-card/40 p-2 focus-within:border-blue-500/50">
                                <textarea
                                    ref={inputRef}
                                    value={draft}
                                    onChange={(e) => setDraft(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && !e.shiftKey) {
                                            e.preventDefault();
                                            submit();
                                        }
                                    }}
                                    rows={1}
                                    maxLength={2000}
                                    placeholder="Escreva sua pergunta…"
                                    aria-label="Escreva sua pergunta"
                                    className="max-h-28 flex-1 resize-none bg-transparent px-1.5 py-1 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                                />
                                <button
                                    type="button"
                                    onClick={submit}
                                    disabled={!draft.trim() || streaming}
                                    aria-label="Enviar mensagem"
                                    className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white transition-opacity disabled:opacity-40"
                                >
                                    <ArrowUpIcon className="size-4" />
                                </button>
                            </div>
                            <p className="mt-2 px-1 text-[11px] text-muted-foreground">
                                Respostas geradas por IA podem conter imprecisões. Para dados oficiais,{" "}
                                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                                    fale com um especialista
                                </a>
                                .
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;
