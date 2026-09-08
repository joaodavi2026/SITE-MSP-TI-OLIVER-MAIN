import Container from "@/components/global/container";
import CursorLight from "@/components/global/cursor-light";
import AnimatedGrid from "@/components/global/animated-grid";
import CTASection from "@/components/marketing/cta-section";
import PageHero from "@/components/marketing/page-hero";
import { COMPANY, CTA_LABEL, INFRASTRUCTURE, SITE } from "@/constants";
import { generateMetadata as buildMetadata } from "@/utils";
import { ArrowRightIcon, Building2Icon, FactoryIcon, ServerIcon, TruckIcon } from "lucide-react";
import Link from "next/link";

const ACCENT_FROM = "#818cf8";
const ACCENT_TO = "#4f46e5";

export const metadata = buildMetadata({
    title: "Projetos Turn-Key de Infraestrutura",
    description:
        "A Oliver Network conduz projetos completos de infraestrutura de TI e Telecom — consultoria, planejamento, integração, execução e entrega — para data center e ambientes corporativos, industriais e logísticos.",
    path: "/infraestrutura/projetos-turn-key",
});

const PHASES = [
    { label: "01", title: "Consultoria e projeto", desc: "Levantamento em campo, memorial descritivo, plantas, especificação técnica de materiais e cronograma. O escopo fica no claro antes de qualquer compra." },
    { label: "02", title: "Planejamento", desc: "Cronograma reverso a partir da data-alvo, definição de janelas, plano de compras, logística de materiais e plano de segurança da obra." },
    { label: "03", title: "Integração", desc: "Coordenação entre as disciplinas — infraestrutura seca, cabeamento, elétrica de TI, climatização, ativos e fornecedores — sob um único responsável." },
    { label: "04", title: "Execução", desc: "Obra conduzida com equipe própria e parceiros homologados, com acompanhamento, medição de avanço e controle de qualidade em cada etapa." },
    { label: "05", title: "Certificação e as-built", desc: "Teste e certificação de cada enlace, ajustes finais e documentação as-built — o que foi projetado versus o que foi entregue." },
    { label: "06", title: "Comissionamento e entrega", desc: "Testes de carga, validação com o cliente, treinamento de operação e transição — o ambiente entregue pronto para operar." },
];

const INTEGRATIONS = [
    "Infraestrutura seca — eletrocalhas, leitos, eletrodutos e caixas",
    "Cabeamento estruturado de dados, voz e imagem",
    "Backbone e enlaces em fibra óptica",
    "Montagem e organização de racks e salas técnicas",
    "Elétrica de TI — circuitos dedicados, quadros, aterramento e nobreak",
    "CFTV e controle de acesso",
    "Ativos de rede — switches, firewall e Wi-Fi",
    "Certificação de rede e documentação as-built",
];

const ENVIRONMENTS = [
    { icon: Building2Icon, title: "Ambientes corporativos", desc: "Sedes e escritórios: postos de trabalho, salas de reunião, recepção e sala técnica." },
    { icon: ServerIcon, title: "Data center e salas técnicas", desc: "Energia, climatização, racks, contenção e monitoramento — projeto dedicado." },
    { icon: TruckIcon, title: "Armazéns e logística", desc: "Cobertura Wi-Fi de alto pé-direito, coletores, portarias e docas." },
    { icon: FactoryIcon, title: "Chão de fábrica", desc: "Ambientes com poeira, calor, vibração e interferência — infraestrutura reforçada." },
];

const RELATED = INFRASTRUCTURE;

const TurnKeyPage = () => {
    return (
        <>
            <PageHero
                eyebrow="Infraestrutura · Projetos"
                breadcrumb={[
                    { label: "Início", href: "/" },
                    { label: "Infraestrutura", href: "/infraestrutura" },
                    { label: "Projetos Turn-Key", href: "/infraestrutura/projetos-turn-key" },
                ]}
                title={
                    <>
                        Projetos turn-key,{" "}
                        <span className="font-subheading italic">da consultoria à entrega</span>
                    </>
                }
                description="A Oliver Network conduz o projeto completo de infraestrutura — consultoria, planejamento, integração, execução e entrega — com um único responsável e o ambiente pronto para operar."
                primaryCta={{ label: CTA_LABEL, href: "/contato" }}
                secondaryCta={{ label: "Ver Infraestrutura", href: "/infraestrutura" }}
                accentFrom={ACCENT_FROM}
                accentTo={ACCENT_TO}
                metrics={[
                    { value: "1", label: "responsável do escopo à entrega" },
                    { value: "as-built", label: "documentação entregue ao final" },
                    { value: "opcional", label: "transição para operação gerenciada" },
                ]}
            />

            {/* O que é turn-key */}
            <section className="relative w-full overflow-hidden py-20 lg:py-28">
                <CursorLight intensity={0.09} color={`${ACCENT_FROM}cc`} tint={`${ACCENT_TO}66`} />
                <Container className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-indigo-500" />O que é turn-key
                        </span>
                        <p className="mt-6 font-heading text-2xl font-medium !leading-snug text-foreground lg:text-[2rem]">
                            {COMPANY.turnkey}
                        </p>
                        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                            {COMPANY.differentialsIntro}
                        </p>
                    </div>
                    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8">
                        <AnimatedGrid fade="center" cell={38} />
                        <p className="relative text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            Um projeto, sem repassar a bola
                        </p>
                        <ul className="relative mt-4 space-y-3 text-sm text-foreground/90">
                            {[
                                "Um contrato e um cronograma, não vários fornecedores desalinhados",
                                "Compras, logística e execução coordenadas pela Oliver",
                                "Padrão de execução e identificação em toda a obra",
                                "Certificação e as-built como parte da entrega",
                                "Opção de a Oliver assumir a operação depois de pronto",
                            ].map((item, i, arr) => (
                                <li
                                    key={item}
                                    className={i < arr.length - 1 ? "border-b border-border/50 pb-3" : ""}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </section>

            {/* Onde aplicamos */}
            <section className="relative w-full border-y border-border/40 bg-card/20 py-20 lg:py-28">
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-indigo-500" />Onde aplicamos
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            Ambientes únicos,{" "}
                            <span className="font-subheading italic">exigências diferentes</span>
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
                        {ENVIRONMENTS.map((env, i) => (
                            <Container key={env.title} delay={0.06 * i} className="h-full">
                                <div className="flex h-full flex-col gap-3 bg-background p-7">
                                    <env.icon className="size-5 text-indigo-400" />
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

            {/* Como conduzimos — 6 fases */}
            <section className="relative w-full overflow-hidden py-20 lg:py-28">
                <CursorLight intensity={0.07} color={`${ACCENT_FROM}cc`} tint={`${ACCENT_TO}66`} />
                <Container className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    <div className="lg:sticky lg:top-28 lg:h-fit">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-indigo-500" />Como conduzimos
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            Seis fases,{" "}
                            <span className="font-subheading italic">um responsável</span>
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            Planejamento e execução caminham juntos: cada fase tem entregável,
                            responsável e critério de aceite antes de a seguinte começar.
                        </p>
                    </div>
                    <ol className="relative border-l border-border/60 pl-8">
                        {PHASES.map((phase, i) => (
                            <Container key={phase.label} delay={0.06 * i} as="li" className="relative pb-10 last:pb-0">
                                <span
                                    className="absolute -left-8 flex size-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-background"
                                    style={{ background: ACCENT_FROM }}
                                />
                                <span className="font-mono text-xs tracking-widest text-muted-foreground">
                                    {phase.label}
                                </span>
                                <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                                    {phase.title}
                                </h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                                    {phase.desc}
                                </p>
                            </Container>
                        ))}
                    </ol>
                </Container>
            </section>

            {/* O que integramos */}
            <section className="relative w-full border-t border-border/40 bg-card/20 py-20 lg:py-28">
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                                <span className="h-px w-8 bg-indigo-500" />O que integramos
                            </span>
                            <h2 className="mt-4 max-w-xl font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                                As disciplinas que entram{" "}
                                <span className="font-subheading italic">em um projeto</span>
                            </h2>
                        </div>
                        <Link
                            href="/infraestrutura"
                            className="link inline-flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                            Ver cada serviço em detalhe
                            <ArrowRightIcon className="size-4" />
                        </Link>
                    </div>
                    <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2">
                        {INTEGRATIONS.map((item) => (
                            <div key={item} className="bg-background p-6 text-sm text-foreground/90">
                                {item}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Entrega + ponte MSP */}
            <section className="relative w-full py-20 lg:py-24">
                <Container className="mx-auto max-w-5xl px-6">
                    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/30 p-8 lg:p-12">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full bg-blue-600/15 blur-[5rem]"
                        />
                        <p className="relative text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                            Entrega e continuidade
                        </p>
                        <h2 className="relative mt-3 font-heading text-2xl font-medium !leading-snug lg:text-3xl">
                            O projeto termina.{" "}
                            <span className="font-subheading italic">A operação continua.</span>
                        </h2>
                        <p className="relative mt-4 max-w-2xl text-base text-muted-foreground">
                            Na entrega você recebe as-built, certificação e treinamento. E, se fizer
                            sentido, a Oliver Network assume a operação contínua do ambiente —
                            monitoramento, suporte, Service Desk e gestão — com o mesmo time que
                            entregou a infraestrutura.
                        </p>
                        <div className="relative mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/msp"
                                className="group inline-flex items-center gap-2 rounded-md border border-border/60 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-blue-500/40"
                            >
                                Conhecer os Serviços Gerenciados
                                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="/infraestrutura/data-center"
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Ver projetos de Data Center
                                <ArrowRightIcon className="size-4" />
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Serviços do projeto */}
            <section className="relative w-full py-16 lg:py-20">
                <Container className="mx-auto max-w-6xl px-6">
                    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        <span className="h-px w-8 bg-indigo-500" />Serviços de infraestrutura
                    </span>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                        {RELATED.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/infraestrutura/${s.slug}`}
                                className="rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-indigo-500/40 hover:text-foreground"
                            >
                                {s.name}
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            <CTASection
                title={
                    <>
                        Tem um projeto de{" "}
                        <span className="font-subheading italic">infraestrutura</span> em vista?
                    </>
                }
                description={`Conte o escopo, o ambiente e o prazo. A Oliver Network faz o levantamento, o projeto e a execução — com um só responsável. Também pelo WhatsApp ${SITE.whatsappNumber}.`}
                secondaryCta={{ label: "Ver Data Center", href: "/infraestrutura/data-center" }}
            />
        </>
    );
};

export default TurnKeyPage;
