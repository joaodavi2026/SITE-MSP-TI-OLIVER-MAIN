import Container from "@/components/global/container";
import CursorLight from "@/components/global/cursor-light";
import AnimatedGrid from "@/components/global/animated-grid";
import CTASection from "@/components/marketing/cta-section";
import PageHero from "@/components/marketing/page-hero";
import { COMPANY, DIFFERENTIALS, VALUES } from "@/constants";
import { generateMetadata as buildMetadata } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: "A Oliver Network",
    description:
        "A Oliver Network é uma provedora de integração tecnológica em infraestrutura de TI e Telecom para ambientes corporativos, data center e industrial — com gestão completa ou parcial da operação.",
    path: "/empresa",
});

const EmpresaPage = () => {
    return (
        <>
            <PageHero
                eyebrow="A Oliver"
                title={
                    <>
                        Integração tecnológica para{" "}
                        <span className="font-subheading italic">ambientes críticos</span>
                    </>
                }
                description={COMPANY.intro}
                primaryCta={{ label: "Falar com um especialista", href: "/contato" }}
                secondaryCta={{ label: "Como funciona", href: "/como-funciona" }}
            />

            {/* Quem somos + visão */}
            <section className="relative w-full overflow-hidden py-20 lg:py-28">
                <CursorLight intensity={0.1} />
                <Container className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-blue-500" />Quem somos
                        </span>
                        <p className="mt-6 font-heading text-2xl font-medium !leading-snug text-foreground lg:text-[2rem]">
                            {COMPANY.relationship}
                        </p>
                        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                            {COMPANY.belief}
                        </p>
                    </div>
                    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8">
                        <AnimatedGrid fade="center" cell={40} beam />
                        <p className="relative text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            Como trabalhamos
                        </p>
                        <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                            {COMPANY.differentialsIntro}
                        </p>
                        <p className="relative mt-4 border-t border-border/50 pt-4 text-sm leading-relaxed text-muted-foreground">
                            {COMPANY.turnkey}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Dois ecossistemas */}
            <section className="relative w-full border-y border-border/40 bg-card/20 py-20 lg:py-28">
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-blue-500" />Infraestrutura + Gestão
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            Uma empresa,{" "}
                            <span className="font-subheading italic">dois ecossistemas</span>
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 md:grid-cols-2">
                        <div className="flex flex-col gap-3 bg-background p-8">
                            <span className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-400">
                                Infraestrutura
                            </span>
                            <h3 className="font-heading text-lg font-semibold text-foreground">
                                Construir a base
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Projetos e execução de cabeamento estruturado, fibra óptica, racks,
                                elétrica de TI, CFTV e salas de data center — turn-key, para ambientes
                                corporativos, industriais e logísticos.
                            </p>
                            <Link href="/infraestrutura" className="link mt-2 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                                Ver Infraestrutura
                                <ArrowRightIcon className="size-4" />
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3 bg-background p-8">
                            <span className="text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
                                Serviços Gerenciados
                            </span>
                            <h3 className="font-heading text-lg font-semibold text-foreground">
                                Operar o ambiente
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Monitoramento 24/7, Suporte, Service Desk, Segurança, Backup, Field
                                Service e Gestão de TI — gestão completa ou parcial da operação, com
                                SLA e relatório.
                            </p>
                            <Link href="/msp" className="link mt-2 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                                Conhecer o MSP
                                <ArrowRightIcon className="size-4" />
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Diferenciais */}
            <section className="relative w-full py-20 lg:py-28">
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-blue-500" />Diferenciais
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            O que sustenta a{" "}
                            <span className="font-subheading italic">excelência na entrega</span>
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
                        {DIFFERENTIALS.map((d, i) => (
                            <Container key={d.title} delay={0.05 * i} className="h-full">
                                <div className="flex h-full flex-col gap-2 bg-background p-7">
                                    <span className="font-heading text-sm font-semibold text-blue-300">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="font-heading text-base font-semibold text-foreground">
                                        {d.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {d.description}
                                    </p>
                                </div>
                            </Container>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Valores */}
            <section className="relative w-full border-t border-border/40 bg-card/20 py-20 lg:py-28">
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-blue-500" />Valores
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            O que não{" "}
                            <span className="font-subheading italic">negociamos</span>
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                        {VALUES.map((v, i) => (
                            <Container key={v.title} delay={0.04 * i}>
                                <div className="flex gap-4">
                                    <span
                                        className="mt-1.5 h-8 w-0.5 shrink-0 rounded-full bg-blue-500"
                                        aria-hidden
                                    />
                                    <div>
                                        <h3 className="font-heading text-base font-semibold text-foreground">
                                            {v.title}
                                        </h3>
                                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                                            {v.description}
                                        </p>
                                    </div>
                                </div>
                            </Container>
                        ))}
                    </div>
                </Container>
            </section>

            <CTASection
                title={
                    <>
                        Vamos falar sobre a{" "}
                        <span className="font-subheading italic">sua operação</span>
                    </>
                }
                description="Um diagnóstico gratuito do ambiente mostra onde a Oliver Network pode entrar — na infraestrutura, na gestão, ou nas duas frentes."
                secondaryCta={{ label: "Ver planos", href: "/planos" }}
            />
        </>
    );
};

export default EmpresaPage;
