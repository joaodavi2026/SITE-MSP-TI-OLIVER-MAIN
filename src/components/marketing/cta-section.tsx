"use client";

import Container from "@/components/global/container";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import { CTA_LABEL } from "@/constants";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface CTASectionProps {
    title?: React.ReactNode;
    description?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
}

const CTASection = ({
    title,
    description,
    primaryCta = { label: CTA_LABEL, href: "/contato" },
    secondaryCta,
}: CTASectionProps) => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center py-20">
            <Container className="mx-auto max-w-6xl">
                <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-foreground/20 bg-background/20 px-6 py-14 text-center lg:rounded-3xl lg:py-20">
                    <Particles
                        refresh
                        ease={80}
                        quantity={80}
                        color="#d4d4d4"
                        className="absolute inset-0 z-0 hidden lg:block"
                    />
                    <Particles
                        refresh
                        ease={80}
                        quantity={35}
                        color="#d4d4d4"
                        className="absolute inset-0 z-0 block lg:hidden"
                    />
                    <motion.div
                        className="absolute -bottom-1/4 left-1/3 -z-10 h-32 w-44 -translate-x-1/2 rounded-full blur-[5rem] lg:h-52 lg:w-1/3 lg:blur-[10rem]"
                        style={{
                            background:
                                "conic-gradient(from 0deg at 50% 50%, #a855f7 0deg, #3b82f6 180deg, #06b6d4 360deg)",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />

                    <h2 className="font-heading text-3xl font-medium !leading-snug md:text-5xl">
                        {title ?? (
                            <>
                                A TI da sua empresa <br />{" "}
                                <span className="font-subheading italic">não pode parar</span>
                            </>
                        )}
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm text-accent-foreground/80 md:text-lg">
                        {description ??
                            "Converse com a Oliver sobre um diagnóstico do seu ambiente e o plano de operação ideal para o seu momento."}
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <Link href={primaryCta.href}>
                            <Button size="lg" className="group">
                                {primaryCta.label}
                                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        {secondaryCta && (
                            <Link href={secondaryCta.href}>
                                <Button size="lg" variant="subtle">
                                    {secondaryCta.label}
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CTASection;
