import Container from "@/components/global/container";
import CTASection from "@/components/marketing/cta-section";
import PageHero from "@/components/marketing/page-hero";
import ServiceIndex from "@/components/marketing/service-index";
import { SOLUTIONS } from "@/constants";
import { generateMetadata as buildMetadata } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: "Soluções de TI",
    description:
        "As soluções por tecnologia da Oliver Network: Microsoft 365, Redes, Servidores, Cloud e Cibersegurança — projetadas, implantadas e sustentadas.",
    path: "/solucoes",
});

const PHASES = [
    { label: "01", title: "Projeto", desc: "Levantamento, arquitetura e plano de implantação com escopo, prazo e critérios de aceite." },
    { label: "02", title: "Implantação", desc: "Execução em janela planejada, com validação a cada etapa e rollback previsto." },
    { label: "03", title: "Sustentação", desc: "A plataforma entra no monitoramento, no patch e na governança do MSP — sem 'entregou e sumiu'." },
];

const SolucoesPage = () => {
    return (
        <>
            <PageHero
                eyebrow="Soluções por tecnologia"
                title={
                    <>
                        A tecnologia certa,{" "}
                        <span className="font-subheading italic">bem implantada</span>
                    </>
                }
                description="Enquanto os serviços cuidam da operação, as soluções cuidam das plataformas: cada uma é projetada, implantada e mantida dentro do mesmo padrão de gestão da Oliver."
                primaryCta={{ label: "Ver serviços", href: "/servicos" }}
                secondaryCta={{ label: "Falar com a Oliver", href: "/contato" }}
                accentFrom="#22d3ee"
                accentTo="#0891b2"
            />

            <ServiceIndex
                items={SOLUTIONS}
                basePath="/solucoes"
                intro="As plataformas de tecnologia que sustentam o dia a dia da empresa — redes, servidores, nuvem, segurança e telecom. A Oliver conduz do projeto à operação contínua, sem entregar e sumir. Para infraestrutura física, veja a página de Infraestrutura."
            />

            <section className="relative w-full border-y border-border/40 bg-card/20 py-20 lg:py-28">
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-cyan-500" />O método
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            Toda solução passa pelas{" "}
                            <span className="font-subheading italic">mesmas três fases</span>
                        </h2>
                    </div>

                    <div className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
                        <div
                            aria-hidden
                            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
                        />
                        {PHASES.map((phase, i) => (
                            <Container key={phase.label} delay={0.1 * i} className="relative">
                                <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-cyan-500/40 bg-background font-heading text-sm font-semibold text-cyan-300">
                                    {phase.label}
                                </div>
                                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                                    {phase.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {phase.desc}
                                </p>
                            </Container>
                        ))}
                    </div>

                    <Container delay={0.28}>
                        <Link
                            href="/como-funciona"
                            className="link mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                            Ver como a Oliver opera no dia a dia
                            <ArrowRightIcon className="size-4" />
                        </Link>
                    </Container>
                </Container>
            </section>

            <CTASection
                title={
                    <>
                        Uma plataforma,{" "}
                        <span className="font-subheading italic">um responsável</span>
                    </>
                }
                description="A Oliver assume o projeto, a implantação e a sustentação — com a mesma governança dos serviços gerenciados."
                secondaryCta={{ label: "Ver planos", href: "/planos" }}
            />
        </>
    );
};

export default SolucoesPage;
