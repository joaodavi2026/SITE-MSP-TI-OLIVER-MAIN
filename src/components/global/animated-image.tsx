"use client";

import { cn } from "@/lib";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface Props {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    /** classe de máscara/recorte aplicada ao container (border-radius, clip-path via arbitrary) */
    frameClassName?: string;
    priority?: boolean;
    /** leve parallax vertical no scroll */
    parallax?: boolean;
}

/**
 * next/image com fade/scale de entrada e parallax sutil no scroll.
 * Preserva proporção e comportamento; troque o `src` sem mexer no design.
 */
const AnimatedImage = ({
    src,
    alt,
    width,
    height,
    className,
    frameClassName,
    priority,
    parallax = true,
}: Props) => {
    const reduce = useReducedMotion();
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], parallax && !reduce ? [18, -18] : [0, 0]);

    return (
        <motion.div
            ref={ref}
            className={cn("relative overflow-hidden", frameClassName)}
            initial={reduce ? undefined : { opacity: 0, scale: 1.04 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div style={{ y }}>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    priority={priority}
                    className={cn("h-full w-full object-cover", className)}
                />
            </motion.div>
        </motion.div>
    );
};

export default AnimatedImage;
