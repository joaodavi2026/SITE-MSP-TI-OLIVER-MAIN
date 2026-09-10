import Container from "@/components/global/container";
import CursorLight from "@/components/global/cursor-light";
import AnimatedGrid from "@/components/global/animated-grid";
import CTASection from "@/components/marketing/cta-section";
import PageHero from "@/components/marketing/page-hero";
import ServiceIndex from "@/components/marketing/service-index";
import { INFRASTRUCTURE, SITE } from "@/constants";
import { generateMetadata as buildMetadata } from "@/utils";
import { ArrowRightIcon, Building2Icon, FactoryIcon, ServerIcon, TruckIcon } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: "Infraestrutura de TI e Telecom",
    description:
        "A frente de Infraestrutura da Oliver Network: cabeamento estruturado, fibra óptica, racks, certificação, CFTV, elétrica de TI, moving e projetos turn-key para data center e ambientes corporativos e industriais.",
    path: "/infraestrutura",
});

const ENVIRONMENTS = [
    { icon: Building2Icon, title: "Corporativo", desc: "Escritórios e sedes: pontos de trabalho, salas de reunião, salas técnicas e recepção." },
    { icon: FactoryIcon, title: "Industrial", desc: "Chão de fábrica: ambientes com poeira, calor, vibração e interferência eletromagnética." },
    { icon: TruckIcon, title: "Logística", desc: "Armazéns e centros de distribuição: cobertura Wi-Fi de alto pé-direito, coletores e portarias." },
    { icon: ServerIcon, title: "Data center", desc: "Salas técnicas e data centers: energia, climatização, racks, contenção e monitoramento." },
];

const PROJECT_STEPS = [
    { label: "01", title: "Consultoria e projeto", desc: "Levantamento, memorial descritivo, plantas, especificação de materiais e cronograma." },
    { label: "02", title: "Execução turn-key", desc: "Obra conduzida do início ao fim: infraestrutura seca, cabeamento, elétrica e ativos." },
    { label: "03", title: "Certificação e as-built", desc: "Teste e certificação de cada enlace, documentação as-built e treinamento de operação." },
    { label: "04", title: "Sustentação", desc: "Opcionalmente, o ambiente entra na operação gerenciada da Oliver — monitorado e mantido." },
];

const InfraestruturaPage = () => {
    return (
        <>
            <PageHero
                eyebrow="Infraestrutura"
                title={
                    <>
                        A base física da TI,{" "}
                        <span className="font-subheading italic">feita para sustentar a operação</span>
                    </>
                }
                description="Infraestrutura tecnológica preparada para sustentar operações corporativas, industriais e ambientes críticos — do caminho do cabo à certificação, com projeto, execução e documentação."
                primaryCta={{ label: "Falar com um especialista", href: "/contato" }}
                secondaryCta={{ label: "Ver serviços gerenciados", href: "/msp" }}
                accentFrom="#22d3ee"
                accentTo="#0891b2"
            />

            <ServiceIndex
                items={INFRASTRUCTURE}
                basePath="/infraestrutura"
                intro="Oito frentes de infraestrutura física de TI e Telecom. Cada obra é projetada segundo norma, executada com padrão e entregue com documentação — pronta para operar e para crescer."
            />

            {/* Ambientes */}
            <section id="ambientes" className="relative w-full scroll-mt-24 border-y border-border/40 bg-card/20 py-20 lg:py-28">
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-cyan-500" />Ambientes
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            Do escritório ao{" "}
                            <span className="font-subheading italic">chão de fábrica</span>
                        </h2>
                        <p className="mt-4 text-base text-muted-foreground">
                            Ambientes corporativos, data center, armazéns logísticos e chão de fábrica —
                            cada um com sua exigência de norma, proteção e desempenho.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
                        {ENVIRONMENTS.map((env, i) => (
                            <Container key={env.title} delay={0.06 * i} className="h-full">
                                <div className="flex h-full flex-col gap-3 bg-background p-7">
                                    <env.icon className="size-5 text-cyan-400" />
                                    <h3 className="font-heading text-base font-semibold text-foreground">
                                        {env.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {env.desc}
                                    </p>
                                </div>
                            </Container>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Data center */}
            <section id="data-center" className="relative w-full scroll-mt-24 overflow-hidden py-20 lg:py-28">
                <CursorLight intensity={0.09} color="#22d3eecc" tint="#0891b266" />
                <Container className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-cyan-500" />Data center
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            Salas técnicas e data centers{" "}
                            <span className="font-subheading italic">turn-key</span>
                        </h2>
                        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                            Projetos de sala de data center entregues prontos para operar:
                            infraestrutura de dados, voz e imagem, energia com redundância, racks e
                            contenção, climatização e monitoramento ambiental. Da consultoria ao
                            comissionamento, com documentação completa.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/infraestrutura/data-center"
                                className="group inline-flex items-center gap-2 rounded-md border border-border/60 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-cyan-500/40"
                            >
                                Ver a página de Data Center
                                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                            <Link href="/contato" className="inline-flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Falar sobre um projeto
                            </Link>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8">
                        <AnimatedGrid fade="center" cell={38} beam />
                        <ul className="relative space-y-4 text-sm text-foreground/90">
                            {[
                                "Infraestrutura de dados, voz e imagem",
                                "Energia: quadros, DPS, aterramento e nobreak/UPS",
                                "Racks, organização, contenção quente/frio",
                                "Climatização e monitoramento ambiental",
                                "Certificação, as-built e comissionamento",
                            ].map((item, i, arr) => (
                                <li
                                    key={item}
                                    className={i < arr.length - 1 ? "border-b border-border/50 pb-4" : ""}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </section>

            {/* Projetos e Consultoria */}
            <section id="projetos" className="relative w-full scroll-mt-24 border-t border-border/40 bg-card/20 py-20 lg:py-28">
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-cyan-500" />Projetos e consultoria
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            Um único responsável,{" "}
                            <span className="font-subheading italic">do projeto à operação</span>
                        </h2>
                    </div>

                    <div className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
                        <div
                            aria-hidden
                            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
                        />
                        {PROJECT_STEPS.map((step, i) => (
                            <Container key={step.label} delay={0.09 * i} className="relative">
                                <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-cyan-500/40 bg-background font-heading text-sm font-semibold text-cyan-300">
                                    {step.label}
                                </div>
                                <h3 className="mt-5 font-heading text-base font-semibold text-foreground">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {step.desc}
                                </p>
                            </Container>
                        ))}
                    </div>

                    <Container delay={0.28}>
                        <Link
                            href="/infraestrutura/projetos-turn-key"
                            className="group mt-10 inline-flex items-center gap-2 rounded-md border border-border/60 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-cyan-500/40"
                        >
                            Ver a página de Projetos Turn-Key
                            <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </Container>
                </Container>
            </section>

            {/* Ponte para o MSP */}
            <section className="relative w-full py-20 lg:py-24">
                <Container className="mx-auto max-w-5xl px-6">
                    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/30 p-8 lg:p-12">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full bg-blue-600/15 blur-[5rem]"
                        />
                        <p className="relative text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                            Infraestrutura + Gestão
                        </p>
                        <h2 className="relative mt-3 font-heading text-2xl font-medium !leading-snug lg:text-3xl">
                            Construímos a base.{" "}
                            <span className="font-subheading italic">E também operamos.</span>
                        </h2>
                        <p className="relative mt-4 max-w-2xl text-base text-muted-foreground">
                            Depois da obra, a Oliver Network pode assumir a operação contínua do
                            ambiente — monitoramento 24/7, suporte, Service Desk, segurança e gestão —
                            com o mesmo interlocutor que entregou a infraestrutura.
                        </p>
                        <Link
                            href="/msp"
                            className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                            Conhecer os Serviços Gerenciados
                            <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </Container>
            </section>

            <CTASection
                title={
                    <>
                        Tem um projeto de{" "}
                        <span className="font-subheading italic">infraestrutura</span>?
                    </>
                }
                description={`Conte o escopo e o prazo. A Oliver Network faz o levantamento, o projeto e a execução — e você fala com um só responsável. Também pelo WhatsApp ${SITE.whatsappNumber}.`}
                secondaryCta={{ label: "Ver serviços gerenciados", href: "/servicos" }}
            />
        </>
    );
};

export default InfraestruturaPage;
