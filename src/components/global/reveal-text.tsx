"use client";

import { cn } from "@/lib";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import React from "react";

interface Props {
    children: string;
    className?: string;
    /** elemento renderizado */
    as?: "h1" | "h2" | "h3" | "p" | "span";
    delay?: number;
    /** anima por palavra (true) ou o bloco inteiro (false) */
    perWord?: boolean;
    once?: boolean;
}

const ease = [0.22, 1, 0.36, 1] as const;

/** Revela um texto por palavras conforme entra na viewport. */
const RevealText = ({
    children,
    className,
    as = "span",
    delay = 0,
    perWord = true,
    once = true,
}: Props) => {
    const reduce = useReducedMotion();
    const Tag = as as React.ElementType;

    if (reduce || !perWord) {
        const MotionTag = motion[as] as typeof motion.span;
        return (
            <MotionTag
                className={className}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once, margin: "-60px" }}
                transition={{ duration: 0.6, ease, delay }}
            >
                {children}
            </MotionTag>
        );
    }

    const words = children.split(" ");
    const container: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.045, delayChildren: delay } },
    };
    const word: Variants = {
        hidden: { opacity: 0, y: "0.6em" },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
    };

    return (
        <Tag className={cn(className)}>
            <motion.span
                style={{ display: "inline" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once, margin: "-60px" }}
                variants={container}
            >
                {words.map((w, i) => (
                    <span key={i} className="inline-block overflow-hidden align-bottom">
                        <motion.span className="inline-block" variants={word}>
                            {w}
                            {i < words.length - 1 ? " " : ""}
                        </motion.span>
                    </span>
                ))}
            </motion.span>
        </Tag>
    );
};

export default RevealText;
