"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

/**
 * Transição sutil ao trocar de rota — fade + leve deslocamento.
 * O usuário sente que navega dentro de um único sistema.
 */
const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const reduce = useReducedMotion();

    if (reduce) return <>{children}</>;

    // opacity-only — não cria `transform`, então não interfere em sticky/fixed nas páginas.
    return (
        <motion.div
            key={pathname}
            initial={{ opacity: 0.35 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
