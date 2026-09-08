"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Barra fina de progresso de scroll no topo — segue a linguagem sutil do site. */
const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            aria-hidden
            style={{ scaleX }}
            className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600"
        />
    );
};

export default ScrollProgress;
