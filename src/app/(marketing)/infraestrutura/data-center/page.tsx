import Container from "@/components/global/container";
import CursorLight from "@/components/global/cursor-light";
import AnimatedGrid from "@/components/global/animated-grid";
import CTASection from "@/components/marketing/cta-section";
import FlowStrip from "@/components/marketing/flow-strip";
import PageHero from "@/components/marketing/page-hero";
import { CTA_LABEL, INFRASTRUCTURE, SITE } from "@/constants";
import { generateMetadata as buildMetadata } from "@/utils";
import {
    ArrowRightIcon,
    DoorClosedIcon,
    FlameIcon,
    GaugeIcon,
    NetworkIcon,
    RouteIcon,
    SnowflakeIcon,
    ThermometerIcon,
    ZapIcon,
} from "lucide-react";
import Link from "next/link";

const ACCENT_FROM = "#22d3ee";
const ACCENT_TO = "#0891b2";

export const metadata = buildMetadata({
    title: "Data Center e Salas Técnicas",
    description:
        "Projetos turn-key de data center e salas técnicas: energia com redundância, climatização, racks e contenção, cabeamento de dados/voz/imagem, detecção de incêndio, controle de acesso e monitoramento ambiental.",
    path: "/infraestrutura/data-center",
});

const LAYERS = [
    { icon: ZapIcon, title: "Energia", desc: "Quadros dedicados, DPS, aterramento dentro de norma e nobreak (UPS) dimensionado para a carga e a autonomia. Preparado para gerador quando o projeto exige." },
    { icon: SnowflakeIcon, title: "Climatização", desc: "Ar de precisão dimensionado para a carga térmica dos equipamentos, com redundância proporcional à criticidade do ambiente." },
    { icon: RouteIcon, title: "Racks e contenção", desc: "Layout de racks, corredor quente/frio, gestão de cabos e organização — para dissipação de calor e manutenção segura." },
    { icon: NetworkIcon, title: "Cabeamento estruturado", desc: "Infraestrutura de dados, voz e imagem: backbone óptico, cabeamento metálico, DIOs e patch panels, tudo certificado e documentado." },
    { icon: FlameIcon, title: "Detecção e combate a incêndio", desc: "Detecção precoce e, conforme o projeto, sistema de supressão adequado a sala técnica — coordenado com a parte elétrica." },
    { icon: ThermometerIcon, title: "Monitoramento ambiental", desc: "Temperatura, umidade, energia, presença de água e acesso — integrados ao monitoramento 24/7 da Oliver." },
    { icon: DoorClosedIcon, title: "Controle de acesso e CFTV", desc: "Acesso físico controlado por credencial, com registro, e CFTV cobrindo os pontos críticos da sala." },
    { icon: GaugeIcon, title: "Documentação e comissionamento", desc: "As-built, memoriais, testes de carga e comissionamento — o ambiente entregue com registro completo do que foi feito." },
];

const ENVIRONMENTS = [
    { title: "Sala técnica / CPD corporativo", desc: "Poucos racks concentrando servidores, storage e ativos de rede da empresa. O foco é energia limpa, climatização adequada e organização." },
    { title: "Data center de médio porte", desc: "Múltiplas fileiras de racks, redundância nos sistemas críticos, contenção de corredor e monitoramento ambiental completo." },
    { title: "Edge / sala remota", desc: "Ambiente compacto em unidade remota ou industrial, com proteção elétrica e climatização robustas para operar sem equipe local." },
];

const CONTINUITY = [
    { label: "Redundância", caption: "Sistemas críticos com caminho alternativo, proporcional à criticidade" },
    { label: "Monitoramento", caption: "Energia, temperatura, umidade e acesso observados 24/7" },
    { label: "Manutenção preventiva", caption: "Janelas planejadas para elétrica, climatização e baterias" },
    { label: "Plano de contingência", caption: "Procedimento definido para falha de energia, clima ou acesso" },
    { label: "Continuidade", caption: "A operação segue mesmo quando um componente falha" },
];

const RELATED = INFRASTRUCTURE.filter((s) =>
    ["cabeamento-estruturado", "fibra-optica", "racks", "eletrica", "certificacao-de-rede", "cftv"].includes(s.slug),
);

const DataCenterPage = () => {
    return (
        <>
            <PageHero
                eyebrow="Infraestrutura · Data Center"
                breadcrumb={[
                    { label: "Início", href: "/" },
                    { label: "Infraestrutura", href: "/infraestrutura" },
                    { label: "Data Center", href: "/infraestrutura/data-center" },
                ]}
                title={
                    <>
                        Data center e salas técnicas{" "}
                        <span className="font-subheading italic">prontos para operar</span>
                    </>
                }
                description="Uma sala técnica não é uma sala com racks. É um sistema de energia, clima, cabeamento e proteção trabalhando junto — projetado, executado e documentado pela Oliver Network."
                primaryCta={{ label: CTA_LABEL, href: "/contato" }}
                secondaryCta={{ label: "Ver Infraestrutura", href: "/infraestrutura" }}
                accentFrom={ACCENT_FROM}
                accentTo={ACCENT_TO}
                metrics={[
                    { value: "turn-key", label: "da consultoria ao comissionamento" },
                    { value: "as-built", label: "documentação completa na entrega" },
                    { value: "24/7", label: "monitoramento ambiental opcional" },
                ]}
            />

            {/* Contexto */}
            <section className="relative w-full overflow-hidden py-20 lg:py-28">
                <CursorLight intensity={0.09} color={`${ACCENT_FROM}cc`} tint={`${ACCENT_TO}66`} />
                <Container className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-cyan-500" />O contexto
                        </span>
                        <p className="mt-6 font-heading text-2xl font-medium !leading-snug text-foreground lg:text-[2rem]">
                            Quando os sistemas da empresa passam a depender de um ponto físico, esse
                            ponto precisa ter energia estável, calor dissipado e acesso controlado —
                            ou ele vira o maior risco da operação.
                        </p>
                        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                            A Oliver Network projeta e executa esse ambiente do zero ou moderniza uma
                            sala existente, tratando cada camada — elétrica, climatização, racks,
                            cabeamento, incêndio, acesso e monitoramento — como parte de um mesmo
                            sistema, com dimensionamento conforme norma e sem improviso.
                        </p>
                    </div>
                    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8">
                        <AnimatedGrid fade="center" cell={38} beam />
                        <p className="relative text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            O que costuma dar errado
                        </p>
                        <ul className="relative mt-4 space-y-3 text-sm text-muted-foreground">
                            {[
                                "Rack no mesmo circuito de ar-condicionado e copa",
                                "Climatização subdimensionada — equipamento desliga por calor",
                                "Cabeamento sem certificação e sem documentação",
                                "Acesso sem controle e sem registro",
                                "Nenhum monitoramento de temperatura, energia ou água",
                            ].map((item, i, arr) => (
                                <li
                                    key={item}
                                    className={`flex items-start gap-2.5 ${i < arr.length - 1 ? "border-b border-border/50 pb-3" : ""}`}
                                >
                                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-red-500/30 text-xs text-red-400">
                                        —
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </section>

            {/* Infraestrutura — camadas */}
            <section className="relative w-full border-y border-border/40 bg-card/20 py-20 lg:py-28">
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-cyan-500" />A infraestrutura
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            Oito camadas,{" "}
                            <span className="font-subheading italic">um sistema só</span>
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
                        {LAYERS.map((layer, i) => (
                            <Container key={layer.title} delay={0.04 * i} className="h-full">
                                <div className="flex h-full flex-col gap-3 bg-background p-7">
                                    <layer.icon className="size-5 text-cyan-400" />
                                    <h3 className="font-heading text-base font-semibold text-foreground">
                                        {layer.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {layer.desc}
                                    </p>
                                </div>
                            </Container>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Ambientes */}
            <section className="relative w-full py-20 lg:py-28">
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-cyan-500" />Os ambientes
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            Do CPD de dois racks ao{" "}
                            <span className="font-subheading italic">data center de fileiras</span>
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 md:grid-cols-3">
                        {ENVIRONMENTS.map((env, i) => (
                            <Container key={env.title} delay={0.08 * i} className="h-full">
                                <div className="flex h-full flex-col gap-3 bg-background p-8">
                                    <span className="font-heading text-sm font-semibold text-cyan-300">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="font-heading text-lg font-semibold text-foreground">
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

            {/* Operação e Continuidade */}
            <section className="relative w-full overflow-hidden border-t border-border/40 bg-card/20 py-20 lg:py-28">
                <CursorLight intensity={0.07} color={`${ACCENT_FROM}cc`} tint={`${ACCENT_TO}66`} />
                <Container className="mx-auto max-w-6xl px-6">
                    <FlowStrip
                        eyebrow="Operação e continuidade"
                        title="Depois de pronto, o data center precisa continuar de pé"
                        nodes={CONTINUITY}
                        accentFrom={ACCENT_FROM}
                        accentTo={ACCENT_TO}
                    />
                    <Container delay={0.2}>
                        <p className="mt-10 max-w-2xl text-base text-muted-foreground">
                            A Oliver pode assumir a sustentação do ambiente na operação gerenciada:
                            monitoramento ambiental 24/7, manutenção preventiva de elétrica e
                            climatização, gestão de baterias e um plano de contingência escrito e
                            revisado.
                        </p>
                        <Link
                            href="/msp"
                            className="link mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                            Ver os Serviços Gerenciados
                            <ArrowRightIcon className="size-4" />
                        </Link>
                    </Container>
                </Container>
            </section>

            {/* Serviços que compõem o projeto */}
            <section className="relative w-full py-20 lg:py-24">
                <Container className="mx-auto max-w-6xl px-6">
                    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        <span className="h-px w-8 bg-cyan-500" />Serviços relacionados
                    </span>
                    <h2 className="mt-4 max-w-xl font-heading text-2xl font-medium !leading-snug lg:text-3xl">
                        O que entra em um projeto de{" "}
                        <span className="font-subheading italic">data center</span>
                    </h2>
                    <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
                        {RELATED.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/infraestrutura/${s.slug}`}
                                className="group flex flex-col gap-2 bg-background p-6 transition-colors hover:bg-card/50"
                            >
                                <span className="flex items-center justify-between">
                                    <span className="font-heading text-base font-semibold text-foreground">
                                        {s.name}
                                    </span>
                                    <ArrowRightIcon className="size-4 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                                </span>
                                <span className="text-sm text-muted-foreground">{s.menuDescription}</span>
                            </Link>
                        ))}
                        <Link
                            href="/infraestrutura/projetos-turn-key"
                            className="group flex flex-col gap-2 bg-background p-6 transition-colors hover:bg-card/50"
                        >
                            <span className="flex items-center justify-between">
                                <span className="font-heading text-base font-semibold text-foreground">
                                    Projetos Turn-Key
                                </span>
                                <ArrowRightIcon className="size-4 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            </span>
                            <span className="text-sm text-muted-foreground">
                                A Oliver conduz o projeto completo, do escopo à entrega.
                            </span>
                        </Link>
                    </div>
                </Container>
            </section>

            <CTASection
                title={
                    <>
                        Vai montar ou modernizar uma{" "}
                        <span className="font-subheading italic">sala técnica</span>?
                    </>
                }
                description={`Conte o porte e o prazo. A Oliver Network faz o levantamento, o projeto e a execução — e você fala com um só responsável. Também pelo WhatsApp ${SITE.whatsappNumber}.`}
                secondaryCta={{ label: "Ver Projetos Turn-Key", href: "/infraestrutura/projetos-turn-key" }}
            />
        </>
    );
};

export default DataCenterPage;
