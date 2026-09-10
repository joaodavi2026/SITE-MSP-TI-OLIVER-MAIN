"use client";

import { cn } from "@/lib";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedGridProps {
    className?: string;
    /** grid cell size in px */
    cell?: number;
    /** line color (rgba/hsla) */
    lineColor?: string;
    /** mask shape */
    fade?: "top" | "center" | "bottom" | "none";
    /** animated light beam sweeping across the grid */
    beam?: boolean;
    beamColor?: string;
}

const maskFor = (fade: AnimatedGridProps["fade"]) => {
    switch (fade) {
        case "center":
            return "radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 80%)";
        case "bottom":
            return "linear-gradient(to top, black, transparent 75%)";
        case "none":
            return "none";
        case "top":
        default:
            return "linear-gradient(to bottom, black 5%, transparent 80%)";
    }
};

/**
 * Infrastructure-style grid backdrop with an optional sweeping beam.
 * Sits behind content; pointer-events none; respects reduced motion.
 */
const AnimatedGrid = ({
    className,
    cell = 56,
    lineColor = "hsl(0 0% 100% / 0.05)",
    fade = "top",
    beam = false,
    beamColor = "hsl(207 90% 61% / 0.35)",
}: AnimatedGridProps) => {
    const reduce = useReducedMotion();
    const mask = maskFor(fade);

    return (
        <div
            aria-hidden="true"
            className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
        >
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(to right, ${lineColor} 1px, transparent 1px), linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)`,
                    backgroundSize: `${cell}px ${cell}px`,
                    WebkitMaskImage: mask === "none" ? undefined : mask,
                    maskImage: mask === "none" ? undefined : mask,
                }}
            />
            {beam && !reduce && (
                <motion.div
                    className="absolute -inset-y-10 w-1/3"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${beamColor}, transparent)`,
                        filter: "blur(28px)",
                    }}
                    initial={{ x: "-40%" }}
                    animate={{ x: "160%" }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
                />
            )}
        </div>
    );
};

export default AnimatedGrid;
