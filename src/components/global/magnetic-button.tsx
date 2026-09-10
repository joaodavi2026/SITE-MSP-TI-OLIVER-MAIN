"use client";

import { cn } from "@/lib";
import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
    /** força do deslocamento magnético (px máx.) */
    strength?: number;
}

/**
 * Envolve um CTA e o desloca sutilmente na direção do cursor no hover.
 * Desativa com prefers-reduced-motion. Não interfere no clique/foco do filho.
 */
const MagneticButton = ({ children, className, strength = 6 }: Props) => {
    const reduce = useReducedMotion();
    const ref = useRef<HTMLSpanElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.3 });
    const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.3 });

    const onMove = (e: React.MouseEvent) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        x.set(Math.max(-1, Math.min(1, dx / (r.width / 2))) * strength);
        y.set(Math.max(-1, Math.min(1, dy / (r.height / 2))) * strength);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    if (reduce) {
        return <span className={cn("inline-flex", className)}>{children}</span>;
    }

    return (
        <motion.span
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={reset}
            style={{ x: sx, y: sy }}
            className={cn("inline-flex", className)}
        >
            {children}
        </motion.span>
    );
};

export default MagneticButton;
