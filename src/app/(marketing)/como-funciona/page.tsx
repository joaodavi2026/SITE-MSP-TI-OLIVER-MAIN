import Container from "@/components/global/container";
import CursorLight from "@/components/global/cursor-light";
import AnimatedGrid from "@/components/global/animated-grid";
import CTASection from "@/components/marketing/cta-section";
import PageHero from "@/components/marketing/page-hero";
import { generateMetadata as buildMetadata } from "@/utils";
import { CalendarClockIcon, GaugeIcon, LifeBuoyIcon, RadarIcon } from "lucide-react";

export const metadata = buildMetadata({
    title: "Como funciona",
    description:
        "Como a Oliver Network assume a TI da sua empresa: diagnóstico, documentação, transição sem parada e uma rotina previsível de operação, relatórios e planejamento.",
    path: "/como-funciona",
});

const ONBOARDING = [
    {
        label: "Semana 1",
        title: "Diagnóstico",
        desc: "Levantamento de ativos, acessos, contratos, backups e riscos. Você recebe um retrato honesto do ambiente atual.",
    },
    {
        label: "Semana 2",
        title: "Documentação",
        desc: "Diagramas de rede, inventário, credenciais em cofre e procedimentos escritos. A TI deixa de ser conhecimento na cabeça de alguém.",
    },
    {
        label: "Semanas 3–4",
        title: "Transição",
        desc: "Instalação dos agentes de monitoramento e EDR, ajuste de backup e abertura do portal de chamados — sem interromper a operação.",
    },
    {
        label: "A partir do go-live",
        title: "Operação assistida",
        desc: "Acompanhamento próximo nas primeiras semanas, calibragem de alertas e prioridades definidas com a sua equipe.",
    },
];

const RHYTHM = [
    { icon: RadarIcon, title: "Contínuo", desc: "Monitoramento 24/7, automações de correção e tratamento de alertas antes do impacto." },
    { icon: LifeBuoyIcon, title: "Diário", desc: "Atendimento de chamados com SLA, verificação de backups e fila de atualizações." },
    { icon: CalendarClockIcon, title: "Mensal", desc: "Relatório de disponibilidade, chamados e SLA, com reunião de status e próximos passos." },
    { icon: GaugeIcon, title: "Trimestral e anual", desc: "Revisão de capacidade e riscos a cada trimestre; planejamento tecnológico e orçamento no ciclo anual." },
];

const ComoFuncionaPage = () => {
    return (
        <>
            <PageHero
                eyebrow="Como funciona"
                title={
                    <>
                        Assumir a sua TI{" "}
                        <span className="font-subheading italic">sem parar a empresa</span>
                    </>
                }
                description="A entrada da Oliver segue um roteiro. Primeiro entendemos e documentamos o ambiente, depois assumimos a operação de forma gradual — e a partir daí a rotina é previsível."
                primaryCta={{ label: "Falar com a Oliver", href: "/contato" }}
                secondaryCta={{ label: "Ver planos", href: "/planos" }}
            />

            {/* Onboarding */}
            <section className="relative w-full overflow-hidden py-20 lg:py-28">
                <CursorLight intensity={0.09} />
                <Container className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    <div className="lg:sticky lg:top-28 lg:h-fit">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-blue-500" />Onboarding
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            As primeiras{" "}
                            <span className="font-subheading italic">quatro semanas</span>
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            Um período de transição estruturado evita o cenário clássico da troca de
                            fornecedor: senha que ninguém tem, servidor que ninguém conhece, backup
                            que ninguém testou.
                        </p>
                    </div>

                    <ol className="relative border-l border-border/60 pl-8">
                        {ONBOARDING.map((phase, i) => (
                            <Container key={phase.title} delay={0.08 * i} as="li" className="relative pb-10 last:pb-0">
                                <span className="absolute -left-8 flex size-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-background bg-blue-500" />
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

            {/* Ritmo da operação */}
            <section className="relative w-full border-y border-border/40 bg-card/20 py-20 lg:py-28">
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-blue-500" />A rotina
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            Uma cadência que você{" "}
                            <span className="font-subheading italic">pode prever</span>
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
                        {RHYTHM.map((r, i) => (
                            <Container key={r.title} delay={0.06 * i} className="h-full">
                                <div className="flex h-full flex-col gap-3 bg-background p-7">
                                    <r.icon className="size-5 text-blue-400" />
                                    <h3 className="font-heading text-base font-semibold text-foreground">
                                        {r.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {r.desc}
                                    </p>
                                </div>
                            </Container>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Estrutura */}
            <section className="relative w-full py-20 lg:py-28">
                <Container className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-blue-500" />A estrutura
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            Ferramenta, processo{" "}
                            <span className="font-subheading italic">e gente</span>
                        </h2>
                        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                            A operação da Oliver roda sobre uma plataforma de monitoramento e gestão
                            remota (RMM), EDR de mercado nos endpoints e servidores, backup com cópia
                            imutável e um portal de chamados onde tudo fica registrado. Por trás das
                            ferramentas, procedimentos escritos e um responsável que conhece o seu
                            ambiente.
                        </p>
                    </div>
                    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8">
                        <AnimatedGrid fade="center" cell={40} beam />
                        <ul className="relative space-y-4 text-sm text-foreground/90">
                            <li className="border-b border-border/50 pb-4">
                                <span className="font-medium text-foreground">RMM</span> — inventário,
                                monitoramento, automação e patch em um só console.
                            </li>
                            <li className="border-b border-border/50 pb-4">
                                <span className="font-medium text-foreground">EDR</span> — detecção por
                                comportamento e contenção de endpoint comprometido.
                            </li>
                            <li className="border-b border-border/50 pb-4">
                                <span className="font-medium text-foreground">Backup</span> — regra 3-2-1,
                                cópia imutável e teste de restauração.
                            </li>
                            <li>
                                <span className="font-medium text-foreground">Portal de chamados</span> —
                                histórico, SLA e base de conhecimento por cliente.
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>

            <CTASection
                title={
                    <>
                        Pronto para a{" "}
                        <span className="font-subheading italic">transição</span>?
                    </>
                }
                description="Começa com uma conversa e um diagnóstico. Sem custo e sem compromisso de contratação."
                secondaryCta={{ label: "Conhecer o MSP", href: "/msp" }}
            />
        </>
    );
};

export default ComoFuncionaPage;
