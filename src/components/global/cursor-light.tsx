"use client";

import { cn } from "@/lib";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useReducedMotion,
    useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface CursorLightProps {
    /** diameter of the light in pixels */
    size?: number;
    /** peak opacity of the light (0-1) — tune per section */
    intensity?: number;
    /** core color of the light */
    color?: string;
    /** secondary tint blended into the halo */
    tint?: string;
    /** keep a soft light visible even before the pointer enters */
    ambient?: boolean;
    className?: string;
}

/**
 * Reusable "lanterna" effect — a soft radial light that follows the cursor
 * inside its nearest positioned ancestor. Built on the same
 * useMotionValue + useMotionTemplate technique used across the site
 * (see MagicCard) so every page shares one visual system.
 *
 * A single rAF coalesces pointer events and an IntersectionObserver
 * pauses the work while the section is off-screen, so several instances
 * can live on one page without jank.
 */
const CursorLight = ({
    size = 560,
    intensity = 0.14,
    color = "rgba(56,189,248,0.9)",
    tint = "rgba(59,130,246,0.5)",
    ambient = false,
    className,
}: CursorLightProps) => {
    const reduceMotion = useReducedMotion();
    const ref = useRef<HTMLDivElement>(null);

    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const opacity = useMotionValue(ambient ? intensity * 0.35 : 0);

    const springCfg = { stiffness: 150, damping: 25, mass: 0.4 };
    const x = useSpring(rawX, springCfg);
    const y = useSpring(rawY, springCfg);
    const smoothOpacity = useSpring(opacity, { stiffness: 120, damping: 30 });

    const background = useMotionTemplate`radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, ${tint} 35%, transparent 70%)`;

    useEffect(() => {
        if (reduceMotion) return;
        const el = ref.current;
        if (!el) return;

        const idle = ambient ? intensity * 0.35 : 0;
        let visible = true;
        let frame = 0;
        let last: PointerEvent | null = null;

        const apply = () => {
            frame = 0;
            const e = last;
            if (!e || !visible) return;
            const rect = el.getBoundingClientRect();
            const px = e.clientX - rect.left;
            const py = e.clientY - rect.top;
            const inside =
                px > -size / 2 &&
                px < rect.width + size / 2 &&
                py > -size / 2 &&
                py < rect.height + size / 2;
            if (inside) {
                rawX.set(px);
                rawY.set(py);
                opacity.set(intensity);
            } else {
                opacity.set(idle);
            }
        };

        const onMove = (e: PointerEvent) => {
            last = e;
            if (!frame) frame = requestAnimationFrame(apply);
        };
        const onLeave = () => opacity.set(idle);

        const io = new IntersectionObserver(
            ([entry]) => {
                visible = entry.isIntersecting;
                if (!visible) opacity.set(idle);
            },
            { rootMargin: "200px" },
        );
        io.observe(el);

        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("pointerleave", onLeave);

        return () => {
            io.disconnect();
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerleave", onLeave);
            if (frame) cancelAnimationFrame(frame);
        };
    }, [ambient, intensity, opacity, rawX, rawY, reduceMotion, size]);

    if (reduceMotion) return null;

    return (
        <motion.div
            ref={ref}
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
                className,
            )}
        >
            <motion.div
                className="absolute inset-0 mix-blend-screen"
                style={{ background, opacity: smoothOpacity }}
            />
        </motion.div>
    );
};

export default CursorLight;
