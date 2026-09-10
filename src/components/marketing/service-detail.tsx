import Container from "@/components/global/container";
import CursorLight from "@/components/global/cursor-light";
import AnimatedGrid from "@/components/global/animated-grid";
import ServiceIcon from "@/components/global/service-icon";
import CTASection from "@/components/marketing/cta-section";
import FlowStrip from "@/components/marketing/flow-strip";
import PageHero from "@/components/marketing/page-hero";
import ServiceNavigation from "@/components/marketing/service-navigation";
import { CTA_LABEL } from "@/constants";
import type { Service } from "@/constants/services";
import { cn } from "@/lib";
import { ArrowRightIcon, CheckIcon, MinusIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
    service: Service;
    allItems: Service[];
    basePath: string;
    categoryLabel: string;
    overviewHref: string;
    overviewLabel: string;
    navLabel: string;
}

const ServiceDetail = ({
    service,
    allItems,
    basePath,
    categoryLabel,
    overviewHref,
    overviewLabel,
    navLabel,
}: Props) => {
    const { accentFrom, accentTo } = service;

    return (
        <>
            <PageHero
                eyebrow={categoryLabel}
                breadcrumb={[
                    { label: "Início", href: "/" },
                    { label: overviewLabel, href: overviewHref },
                    { label: service.shortName, href: `${basePath}/${service.slug}` },
                ]}
                title={
                    <>
                        {service.name}
                        <span className="mt-3 block font-subheading text-2xl italic text-muted-foreground lg:text-3xl">
                            {service.tagline}
                        </span>
                    </>
                }
                description={service.heroDescription}
                primaryCta={{ label: CTA_LABEL, href: "/contato" }}
                secondaryCta={{ label: "Ver planos", href: "/planos" }}
                metrics={service.metrics}
                accentFrom={accentFrom}
                accentTo={accentTo}
            />

            {/* O que é + Para quem serve */}
            <section className="relative w-full overflow-hidden py-20 lg:py-28">
                <CursorLight intensity={0.08} color={`${accentFrom}cc`} tint={`${accentTo}66`} />
                <Container className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                    <div>
                        <SectionLabel accent={accentFrom}>O que é</SectionLabel>
                        <p className="mt-6 font-heading text-2xl font-medium !leading-snug text-foreground lg:text-[2rem]">
                            {service.what}
                        </p>
                    </div>

                    <div className="relative">
                        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8">
                            <AnimatedGrid fade="center" cell={40} />
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-40 blur-[4rem]"
                                style={{ background: `radial-gradient(circle, ${accentTo}, transparent 70%)` }}
                            />
                            <span
                                className="relative flex size-14 items-center justify-center rounded-2xl border border-border/60 bg-background"
                                style={{ color: accentFrom }}
                            >
                                <ServiceIcon name={service.icon} className="size-7" />
                            </span>
                            <p className="relative mt-6 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                                Para quem serve
                            </p>
                            <ul className="relative mt-4 space-y-3">
                                {service.whoFor.map((who) => (
                                    <li key={who} className="flex items-start gap-3 text-sm text-foreground/90">
                                        <CheckIcon
                                            className="mt-0.5 size-4 shrink-0"
                                            style={{ color: accentFrom }}
                                        />
                                        {who}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Problema que resolve */}
            <section className="relative w-full border-y border-border/40 bg-card/20 py-20 lg:py-28">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px"
                    style={{
                        background:
                            "radial-gradient(50% 100% at 50% 0%, hsl(0 0% 100% / 0.15), transparent)",
                    }}
                />
                <Container className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <SectionLabel accent="#f87171">O problema que resolve</SectionLabel>
                        <p className="mt-6 font-subheading text-2xl italic !leading-snug text-foreground lg:text-3xl">
                            &ldquo;{service.problem}&rdquo;
                        </p>
                    </div>
                    <ul className="flex flex-col divide-y divide-border/50 self-start overflow-hidden rounded-2xl border border-border/50">
                        {service.problemPoints.map((point) => (
                            <li key={point} className="flex items-start gap-3 bg-background/40 px-5 py-4 text-sm text-muted-foreground">
                                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-red-500/30 text-red-400">
                                    <MinusIcon className="size-3" />
                                </span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>

            {/* Exemplo de fluxo (opcional) */}
            {service.flow && (
                <section className="relative w-full overflow-hidden py-20 lg:py-24">
                    <CursorLight intensity={0.07} color={`${accentFrom}cc`} tint={`${accentTo}66`} />
                    <Container className="mx-auto max-w-6xl px-6">
                        <FlowStrip
                            eyebrow="Exemplo de fluxo"
                            title={service.flow.title}
                            nodes={service.flow.nodes}
                            accentFrom={accentFrom}
                            accentTo={accentTo}
                        />
                    </Container>
                </section>
            )}

            {/* Como a Oliver atua — processo conectado */}
            <section className="relative w-full overflow-hidden py-20 lg:py-28">
                <CursorLight intensity={0.09} color={`${accentFrom}cc`} tint={`${accentTo}66`} />
                <Container className="mx-auto max-w-6xl px-6">
                    <SectionLabel accent={accentFrom}>Como a Oliver atua</SectionLabel>
                    <div className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
                        <div
                            aria-hidden
                            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
                        />
                        {service.approach.map((step, i) => (
                            <Container key={step.title} delay={0.1 + i * 0.1} className="relative">
                                <div
                                    className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border/70 bg-background font-heading text-sm font-semibold"
                                    style={{ color: accentFrom }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {step.description}
                                </p>
                            </Container>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Níveis de atendimento (opcional) */}
            {service.levels && (
                <section className="relative w-full border-t border-border/40 bg-card/20 py-20 lg:py-28">
                    <Container className="mx-auto max-w-6xl px-6">
                        <div className="max-w-2xl">
                            <SectionLabel accent={accentFrom}>Níveis de atendimento</SectionLabel>
                            <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                                N1, N2 e N3 —{" "}
                                <span className="font-subheading italic">cada caso no lugar certo</span>
                            </h2>
                        </div>
                        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 md:grid-cols-3">
                            {service.levels.map((level) => (
                                <div key={level.tier} className="flex flex-col gap-4 bg-background p-7">
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="flex size-10 items-center justify-center rounded-lg border border-border/60 bg-card/60 font-heading text-sm font-bold"
                                            style={{ color: accentFrom }}
                                        >
                                            {level.tier}
                                        </span>
                                        <h3 className="font-heading text-base font-semibold text-foreground">
                                            {level.title}
                                        </h3>
                                    </div>
                                    <ul className="space-y-2 border-t border-border/50 pt-4 text-sm text-muted-foreground">
                                        {level.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2">
                                                <span
                                                    className="mt-2 size-1 shrink-0 rounded-full"
                                                    style={{ background: accentFrom }}
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* Benefícios — grade editorial com hairlines */}
            <section className="relative w-full py-20 lg:py-28">
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <SectionLabel accent={accentFrom}>Benefícios</SectionLabel>
                            <h2 className="mt-4 max-w-xl font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                                O que muda na operação{" "}
                                <span className="font-subheading italic">com a Oliver</span>
                            </h2>
                        </div>
                        <Link
                            href="/contato"
                            className="link inline-flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                            {CTA_LABEL}
                            <ArrowRightIcon className="size-4" />
                        </Link>
                    </div>

                    <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2">
                        {service.benefits.map((benefit) => (
                            <div
                                key={benefit.title}
                                className="group relative bg-background p-7 transition-colors hover:bg-card/50"
                            >
                                <div
                                    className="absolute left-0 top-7 h-8 w-0.5 origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                                    style={{ background: accentFrom }}
                                />
                                <h3 className="font-heading text-lg font-semibold text-foreground">
                                    {benefit.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Como funciona — timeline vertical */}
            <section className="relative w-full border-t border-border/40 bg-card/20 py-20 lg:py-28">
                <Container className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    <div className="lg:sticky lg:top-28 lg:h-fit">
                        <SectionLabel accent={accentFrom}>Como funciona</SectionLabel>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            Do primeiro contato à rotina, um fluxo previsível e documentado —
                            sem depender de quem atendeu da última vez.
                        </p>
                        <Link href="/como-funciona" className="link mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                            Entenda o modelo completo
                            <ArrowRightIcon className="size-4" />
                        </Link>
                    </div>

                    <ol className="relative border-l border-border/60 pl-8">
                        {service.howItWorks.map((phase, i) => (
                            <Container
                                key={phase.label}
                                delay={0.08 * i}
                                as="li"
                                className="relative pb-10 last:pb-0"
                            >
                                <span
                                    className="absolute -left-8 flex size-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-background"
                                    style={{ background: accentFrom }}
                                />
                                <span className="font-mono text-xs tracking-widest text-muted-foreground">
                                    {phase.label}
                                </span>
                                <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                                    {phase.title}
                                </h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                                    {phase.description}
                                </p>
                            </Container>
                        ))}
                    </ol>
                </Container>
            </section>

            {/* Aplicações típicas (opcional) */}
            {service.applications && (
                <section className="relative w-full py-16 lg:py-20">
                    <Container className="mx-auto max-w-6xl px-6">
                        <SectionLabel accent={accentFrom}>Aplicações típicas</SectionLabel>
                        <div className="mt-6 flex flex-wrap gap-2.5">
                            {service.applications.map((app) => (
                                <span
                                    key={app}
                                    className="rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm text-muted-foreground"
                                >
                                    {app}
                                </span>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            <ServiceNavigation
                items={allItems}
                currentSlug={service.slug}
                basePath={basePath}
                label={navLabel}
            />

            <CTASection
                title={
                    <>
                        {service.name} <span className="font-subheading italic">sob controle</span>
                    </>
                }
                description="Agende um diagnóstico do seu ambiente. A Oliver mapeia riscos, define o escopo e apresenta o plano de operação."
                secondaryCta={{ label: overviewLabel, href: overviewHref }}
            />
        </>
    );
};

const SectionLabel = ({
    children,
    accent,
}: {
    children: ReactNode;
    accent: string;
}) => (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-px w-8" style={{ background: accent }} />
        {children}
    </span>
);

export default ServiceDetail;
