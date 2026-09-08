"use client";

import Container from "@/components/global/container";
import { cn } from "@/lib";
import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangleIcon, CheckCircle2Icon } from "lucide-react";

const REACTIVE = [
    "Problema",
    "Paralisação da operação",
    "Chamado é aberto",
    "Diagnóstico começa do zero",
    "Correção",
    "Prejuízo",
];

const PROACTIVE = [
    "Monitoramento",
    "Detecção do sinal",
    "Análise e priorização",
    "Ação da Oliver",
    "Prevenção",
    "Continuidade",
];

const Column = ({
    title,
    subtitle,
    steps,
    tone,
}: {
    title: string;
    subtitle: string;
    steps: string[];
    tone: "reactive" | "proactive";
}) => {
    const reduce = useReducedMotion();
    const proactive = tone === "proactive";

    return (
        <div
            className={cn(
                "relative flex flex-col overflow-hidden rounded-3xl border p-8 lg:p-10",
                proactive
                    ? "border-blue-500/40 bg-blue-500/[0.04]"
                    : "border-border/60 bg-card/30",
            )}
        >
            {proactive && (
                <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-blue-600/20 blur-[5rem]"
                />
            )}
            <div className="relative">
                <span
                    className={cn(
                        "text-xs font-medium uppercase tracking-[0.2em]",
                        proactive ? "text-blue-400" : "text-muted-foreground",
                    )}
                >
                    {title}
                </span>
                <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
            </div>

            <ol className="relative mt-8 space-y-0">
                {steps.map((step, i) => {
                    const last = i === steps.length - 1;
                    return (
                        <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
                            {/* connector */}
                            {!last && (
                                <span
                                    aria-hidden
                                    className={cn(
                                        "absolute left-[11px] top-6 h-full w-px",
                                        proactive ? "bg-blue-500/30" : "bg-border",
                                    )}
                                />
                            )}
                            <span className="relative mt-0.5 shrink-0">
                                {last ? (
                                    proactive ? (
                                        <CheckCircle2Icon className="size-6 text-blue-400" />
                                    ) : (
                                        <AlertTriangleIcon className="size-6 text-red-400" />
                                    )
                                ) : (
                                    <motion.span
                                        className={cn(
                                            "flex size-6 items-center justify-center rounded-full border text-[10px] font-semibold",
                                            proactive
                                                ? "border-blue-500/40 text-blue-300"
                                                : "border-border text-muted-foreground",
                                        )}
                                        {...(!reduce && proactive
                                            ? {
                                                  animate: { boxShadow: [
                                                      "0 0 0 0 rgba(59,130,246,0.0)",
                                                      "0 0 0 4px rgba(59,130,246,0.12)",
                                                      "0 0 0 0 rgba(59,130,246,0.0)",
                                                  ] },
                                                  transition: {
                                                      duration: 2.4,
                                                      repeat: Infinity,
                                                      delay: i * 0.3,
                                                  },
                                              }
                                            : {})}
                                    >
                                        {i + 1}
                                    </motion.span>
                                )}
                            </span>
                            <span
                                className={cn(
                                    "pt-0.5 text-sm",
                                    last
                                        ? "font-medium text-foreground"
                                        : "text-muted-foreground",
                                )}
                            >
                                {step}
                            </span>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

const ReactiveVsProactive = () => {
    return (
        <section className="relative w-full py-20 lg:py-28">
            <Container className="mx-auto max-w-6xl px-6">
                <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        <span className="h-px w-8 bg-blue-500" />Antes do problema
                    </span>
                    <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                        <span className="font-subheading italic">Break-Fix</span> conserta.{" "}
                        O MSP evita.
                    </h2>
                    <p className="mt-4 text-base text-muted-foreground">
                        No modelo break-fix, o relógio só começa a correr quando a operação já parou.
                        No modelo MSP, a Oliver age no sinal — antes de virar chamado.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    <Container delay={0.1}>
                        <Column
                            title="Break-Fix"
                            subtitle="O problema conduz a operação."
                            steps={REACTIVE}
                            tone="reactive"
                        />
                    </Container>
                    <Container delay={0.2}>
                        <Column
                            title="Oliver MSP"
                            subtitle="O monitoramento conduz a operação."
                            steps={PROACTIVE}
                            tone="proactive"
                        />
                    </Container>
                </div>
            </Container>
        </section>
    );
};

export default ReactiveVsProactive;
