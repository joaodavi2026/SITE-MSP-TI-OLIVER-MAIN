"use client";

import Container from "@/components/global/container";
import { cn } from "@/lib";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import type { FlowNode } from "@/constants/services";

interface Props {
    title?: string;
    nodes: FlowNode[];
    accentFrom?: string;
    accentTo?: string;
    /** rótulo pequeno acima do título */
    eyebrow?: string;
    className?: string;
}

/**
 * Fluxo conectado e animado — nós numerados ligados por uma linha,
 * com um pulso percorrendo o caminho. Horizontal no desktop, vertical no mobile.
 */
const FlowStrip = ({ title, nodes, accentFrom = "#38bdf8", accentTo = "#3b82f6", eyebrow, className }: Props) => {
    const reduce = useReducedMotion();

    return (
        <div className={cn("relative w-full", className)}>
            {(eyebrow || title) && (
                <div className="mb-8">
                    {eyebrow && (
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8" style={{ background: accentFrom }} />
                            {eyebrow}
                        </span>
                    )}
                    {title && (
                        <h3 className="mt-3 font-heading text-lg font-semibold text-foreground lg:text-xl">
                            {title}
                        </h3>
                    )}
                </div>
            )}

            <div className="relative grid gap-4 md:grid-cols-[repeat(auto-fit,minmax(0,1fr))] md:gap-3">
                {/* trilho + pulso (desktop) */}
                <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-5 hidden md:block">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
                    {!reduce && (
                        <motion.div
                            className="absolute top-0 h-px w-24 -translate-y-1/2"
                            style={{ background: `linear-gradient(90deg, transparent, ${accentFrom}, transparent)` }}
                            initial={{ left: "-10%" }}
                            animate={{ left: "100%" }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                        />
                    )}
                </div>

                {nodes.map((node, i) => {
                    const last = i === nodes.length - 1;
                    return (
                        <Container key={node.label} delay={0.08 * i} className="relative">
                            <div className="flex items-start gap-3 md:block">
                                <div className="relative flex flex-col items-center md:items-start">
                                    <span
                                        className={cn(
                                            "relative z-10 flex size-10 items-center justify-center rounded-full border bg-background font-heading text-sm font-semibold",
                                            last ? "text-background" : "",
                                        )}
                                        style={
                                            last
                                                ? { background: accentFrom, borderColor: accentFrom }
                                                : { borderColor: "hsl(0 0% 100% / 0.14)", color: accentFrom }
                                        }
                                    >
                                        {i + 1}
                                    </span>
                                    {/* conector vertical (mobile) */}
                                    {!last && (
                                        <span
                                            aria-hidden
                                            className="mt-1 h-10 w-px bg-border md:hidden"
                                        />
                                    )}
                                </div>
                                <div className="md:mt-4">
                                    <p className="flex items-center gap-1.5 font-heading text-sm font-semibold text-foreground">
                                        {node.label}
                                        {!last && <ArrowRightIcon className="hidden size-3 text-muted-foreground md:inline" />}
                                    </p>
                                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                        {node.caption}
                                    </p>
                                </div>
                            </div>
                        </Container>
                    );
                })}
            </div>
        </div>
    );
};

export default FlowStrip;
