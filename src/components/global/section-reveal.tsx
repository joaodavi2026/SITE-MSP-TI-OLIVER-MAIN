"use client";

import { cn } from "@/lib";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import React from "react";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    /** delay before the reveal starts */
    delay?: number;
    /** vertical travel distance in px */
    y?: number;
    /** stagger children rendered via <RevealItem> */
    stagger?: boolean;
    staggerGap?: number;
    once?: boolean;
    as?: "div" | "section" | "ul" | "ol";
}

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Scroll-triggered reveal built on the same framer-motion whileInView
 * pattern as <Container>. Use `stagger` + <RevealItem> for lists.
 */
const SectionReveal = ({
    children,
    className,
    delay = 0,
    y = 24,
    stagger = false,
    staggerGap = 0.08,
    once = true,
    as = "div",
}: RevealProps) => {
    const reduce = useReducedMotion();
    const MotionTag = motion[as] as typeof motion.div;

    if (reduce) {
        const Tag = as as React.ElementType;
        return <Tag className={className}>{children}</Tag>;
    }

    const container: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: staggerGap, delayChildren: delay },
        },
    };

    const single: Variants = {
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease, delay } },
    };

    return (
        <MotionTag
            className={cn(className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-80px" }}
            variants={stagger ? container : single}
        >
            {children}
        </MotionTag>
    );
};

interface ItemProps {
    children: React.ReactNode;
    className?: string;
    y?: number;
}

export const RevealItem = ({ children, className, y = 20 }: ItemProps) => {
    const reduce = useReducedMotion();
    if (reduce) return <div className={className}>{children}</div>;

    const variants: Variants = {
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
    };

    return (
        <motion.div className={className} variants={variants}>
            {children}
        </motion.div>
    );
};

export default SectionReveal;
