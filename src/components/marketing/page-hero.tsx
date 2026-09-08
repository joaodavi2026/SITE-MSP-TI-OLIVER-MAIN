import Container from "@/components/global/container";
import CursorLight from "@/components/global/cursor-light";
import AnimatedGrid from "@/components/global/animated-grid";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface PageHeroProps {
    eyebrow?: string;
    title: React.ReactNode;
    description?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    breadcrumb?: { label: string; href: string }[];
    metrics?: { value: string; label: string }[];
    align?: "center" | "left";
    accentFrom?: string;
    accentTo?: string;
    /** cursor light intensity for this hero */
    lightIntensity?: number;
    children?: React.ReactNode;
}

const PageHero = ({
    eyebrow,
    title,
    description,
    primaryCta,
    secondaryCta,
    breadcrumb,
    metrics,
    align = "center",
    accentFrom = "#38bdf8",
    accentTo = "#3b82f6",
    lightIntensity = 0.16,
    children,
}: PageHeroProps) => {
    const centered = align === "center";

    return (
        <section className="relative w-full overflow-hidden border-b border-border/40 py-20 lg:py-28">
            <AnimatedGrid fade="center" beam cell={64} />
            <CursorLight
                intensity={lightIntensity}
                color={`${accentFrom}e6`}
                tint={`${accentTo}80`}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 -z-[1] size-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-30 blur-[8rem]"
                style={{ background: `radial-gradient(circle, ${accentTo}, transparent 70%)` }}
            />

            <div
                className={cn(
                    "relative mx-auto flex w-full max-w-4xl flex-col gap-6 px-6",
                    centered ? "items-center text-center" : "items-start text-left",
                )}
            >
                {breadcrumb && (
                    <Container simple className="w-auto">
                        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                            {breadcrumb.map((crumb, i) => (
                                <span key={crumb.href} className="flex items-center gap-1.5">
                                    {i > 0 && <span className="text-border">/</span>}
                                    <Link href={crumb.href} className="transition-colors hover:text-foreground">
                                        {crumb.label}
                                    </Link>
                                </span>
                            ))}
                        </nav>
                    </Container>
                )}

                {eyebrow && (
                    <Container simple className="w-auto">
                        <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            <span
                                className="size-1.5 rounded-full"
                                style={{ background: accentFrom }}
                            />
                            {eyebrow}
                        </span>
                    </Container>
                )}

                <Container delay={0.1}>
                    <h1
                        className={cn(
                            "font-heading text-4xl font-bold !leading-[1.1] lg:text-6xl",
                            centered ? "mx-auto max-w-3xl" : "max-w-3xl",
                        )}
                    >
                        {title}
                    </h1>
                </Container>

                {description && (
                    <Container delay={0.18}>
                        <p
                            className={cn(
                                "text-base text-muted-foreground lg:text-lg",
                                centered ? "mx-auto max-w-2xl" : "max-w-2xl",
                            )}
                        >
                            {description}
                        </p>
                    </Container>
                )}

                {(primaryCta || secondaryCta) && (
                    <Container delay={0.24}>
                        <div
                            className={cn(
                                "mt-2 flex flex-wrap gap-3",
                                centered && "justify-center",
                            )}
                        >
                            {primaryCta && (
                                <Link href={primaryCta.href}>
                                    <Button size="lg" className="group">
                                        {primaryCta.label}
                                        <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            )}
                            {secondaryCta && (
                                <Link href={secondaryCta.href}>
                                    <Button size="lg" variant="subtle">
                                        {secondaryCta.label}
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </Container>
                )}

                {children && (
                    <Container delay={0.3} className="w-full">
                        {children}
                    </Container>
                )}

                {metrics && metrics.length > 0 && (
                    <Container delay={0.34} className="w-full">
                        <dl
                            className={cn(
                                "mt-6 grid w-full gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-3",
                                centered ? "mx-auto max-w-2xl" : "max-w-2xl",
                            )}
                        >
                            {metrics.map((m) => (
                                <div key={m.label} className="bg-background p-5 text-left">
                                    <dt className="font-heading text-2xl font-semibold text-foreground">
                                        {m.value}
                                    </dt>
                                    <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                        {m.label}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </Container>
                )}
            </div>
        </section>
    );
};

export default PageHero;
