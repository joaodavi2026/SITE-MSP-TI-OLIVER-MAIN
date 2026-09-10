import Container from "@/components/global/container";
import CTASection from "@/components/marketing/cta-section";
import PageHero from "@/components/marketing/page-hero";
import ServiceIndex from "@/components/marketing/service-index";
import { SERVICES } from "@/constants";
import { generateMetadata as buildMetadata } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: "Serviços Gerenciados de TI",
    description:
        "Os serviços gerenciados da Oliver Network: suporte, gestão, monitoramento, segurança, backup, infraestrutura, field service e gestão de ativos — com SLA.",
    path: "/servicos",
});

const LAYERS = [
    {
        title: "Atender",
        desc: "Suporte Técnico, Service Desk e Field Service resolvem a demanda do dia a dia, com SLA.",
        items: ["Suporte Técnico", "Service Desk", "Field Service"],
    },
    {
        title: "Vigiar e proteger",
        desc: "Monitoramento 24/7, Segurança e Backup e Recovery blindam a operação contra o pior dia.",
        items: ["Monitoramento", "Segurança", "Backup e Recovery"],
    },
    {
        title: "Gerir e evoluir",
        desc: "Gestão de TI e Gestão de Ativos transformam o ambiente em plano de médio prazo.",
        items: ["Gestão de TI", "Gestão de Ativos"],
    },
];

const ServicosPage = () => {
    return (
        <>
            <PageHero
                eyebrow="Serviços gerenciados"
                title={
                    <>
                        A TI da sua empresa{" "}
                        <span className="font-subheading italic">não pode parar</span>
                    </>
                }
                description="Cada serviço da Oliver cobre uma frente da operação de TI — do primeiro chamado à governança — com escopo, SLA e relatório. Juntos, eles formam um MSP completo."
                primaryCta={{ label: "Ver planos", href: "/planos" }}
                secondaryCta={{ label: "Como funciona", href: "/como-funciona" }}
            />

            <ServiceIndex
                items={SERVICES}
                basePath="/servicos"
                intro="Oito frentes de trabalho que operam de forma integrada. Você contrata o conjunto pelo plano ou combina o escopo conforme o momento da empresa."
            />

            <section className="relative w-full border-y border-border/40 bg-card/20 py-20 lg:py-28">
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-blue-500" />Como se conectam
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            Três camadas,{" "}
                            <span className="font-subheading italic">uma operação</span>
                        </h2>
                        <p className="mt-4 text-base text-muted-foreground">
                            Os serviços não são módulos avulsos. Eles se empilham: sem sustentação
                            não há proteção; sem proteção não faz sentido evoluir.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 md:grid-cols-3">
                        {LAYERS.map((layer, i) => (
                            <Container key={layer.title} delay={0.08 * i} className="h-full">
                                <div className="flex h-full flex-col gap-3 bg-background p-8">
                                    <span className="font-heading text-sm font-semibold text-blue-300">
                                        Camada {i + 1}
                                    </span>
                                    <h3 className="font-heading text-lg font-semibold text-foreground">
                                        {layer.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {layer.desc}
                                    </p>
                                    <ul className="mt-2 space-y-1.5 border-t border-border/50 pt-4 text-sm text-muted-foreground">
                                        {layer.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Container>
                        ))}
                    </div>

                    <Container delay={0.24}>
                        <Link
                            href="/msp"
                            className="link mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                            Entenda o modelo MSP por trás dos serviços
                            <ArrowRightIcon className="size-4" />
                        </Link>
                    </Container>
                </Container>
            </section>

            <CTASection
                title={
                    <>
                        Não sabe por onde{" "}
                        <span className="font-subheading italic">começar</span>?
                    </>
                }
                description="No diagnóstico inicial, a Oliver mapeia o seu ambiente e indica quais serviços priorizar — sem compromisso."
                secondaryCta={{ label: "Conhecer o MSP", href: "/msp" }}
            />
        </>
    );
};

export default ServicosPage;
