import Container from "@/components/global/container";
import CursorLight from "@/components/global/cursor-light";
import AnimatedGrid from "@/components/global/animated-grid";
import CTASection from "@/components/marketing/cta-section";
import PageHero from "@/components/marketing/page-hero";
import ReactiveVsProactive from "@/components/marketing/reactive-vs-proactive";
import { generateMetadata as buildMetadata } from "@/utils";
import {
    ActivityIcon,
    ArrowRightIcon,
    BarChart3Icon,
    BellRingIcon,
    BoxesIcon,
    ClipboardListIcon,
    DownloadIcon,
    HeadsetIcon,
    RefreshCwIcon,
    ShieldCheckIcon,
    WrenchIcon,
} from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: "MSP de TI",
    description:
        "O que é um MSP e como a Oliver Network opera: monitoramento proativo, suporte, gestão, segurança e prevenção para que a TI da sua empresa não pare.",
    path: "/msp",
});

const PILLARS = [
    { icon: ActivityIcon, title: "Monitoramento proativo", desc: "Servidores, rede e serviços observados 24/7. O alerta chega para a Oliver, não para o usuário." },
    { icon: HeadsetIcon, title: "Suporte", desc: "Central com SLA, atendimento remoto e presencial, histórico completo de cada chamado." },
    { icon: ClipboardListIcon, title: "Gestão", desc: "Roadmap, orçamento, fornecedores e políticas conduzidos por um gestor dedicado." },
    { icon: ShieldCheckIcon, title: "Segurança", desc: "EDR, MFA, hardening e um plano de resposta a incidentes testado antes do incidente." },
    { icon: BellRingIcon, title: "Prevenção", desc: "Sinais de risco tratados na origem: capacidade, atualização e configuração." },
    { icon: WrenchIcon, title: "Manutenção", desc: "Janelas planejadas para firmware, patches e verificação de redundância." },
    { icon: BoxesIcon, title: "Inventário", desc: "Cadastro vivo de hardware, software e licenças, vinculado a usuário e garantia." },
    { icon: DownloadIcon, title: "Atualizações", desc: "Gestão de patches de sistema e aplicações, com validação e controle de versão." },
    { icon: RefreshCwIcon, title: "Acompanhamento", desc: "Reuniões periódicas de status, riscos e próximos passos com o responsável na Oliver." },
    { icon: BarChart3Icon, title: "Relatórios", desc: "Disponibilidade, chamados, SLA e capacidade em linguagem de negócio, todo mês." },
];

const CYCLE = [
    { label: "Monitoramento", desc: "Coleta contínua de centenas de indicadores." },
    { label: "Detecção", desc: "Regra de alerta identifica o desvio." },
    { label: "Prevenção", desc: "Análise de causa e priorização por impacto." },
    { label: "Ação", desc: "Correção automática ou pela equipe da Oliver." },
    { label: "Problema evitado", desc: "A operação segue sem perceber." },
];

const MspPage = () => {
    return (
        <>
            <PageHero
                eyebrow="MSP · Managed Service Provider"
                title={
                    <>
                        TI sob controle.{" "}
                        <span className="font-subheading italic">
                            Antes que o problema aconteça.
                        </span>
                    </>
                }
                description="Um MSP é o parceiro que assume a operação de TI da sua empresa como um todo — monitorando, prevenindo, atendendo e planejando — em vez de aparecer só quando algo quebra."
                primaryCta={{ label: "Ver planos", href: "/planos" }}
                secondaryCta={{ label: "Como funciona", href: "/como-funciona" }}
                metrics={[
                    { value: "24/7", label: "monitoramento do ambiente" },
                    { value: "SLA", label: "em todo chamado, com relatório mensal" },
                    { value: "1", label: "responsável pela sua TI de ponta a ponta" },
                ]}
            />

            {/* O que é */}
            <section className="relative w-full overflow-hidden py-20 lg:py-28">
                <CursorLight intensity={0.09} />
                <Container className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-blue-500" />O conceito
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            Terceirizar a TI não é{" "}
                            <span className="font-subheading italic">abrir mão do controle</span>
                        </h2>
                        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                            No modelo MSP, a Oliver opera a sua TI com processo, ferramenta e
                            indicador — e você ganha visibilidade que a maioria das equipes internas
                            não tem. Não é um técnico de plantão: é uma operação inteira, com
                            monitoramento, segurança, gestão e planejamento trabalhando junto.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            O custo deixa de ser imprevisível — a hora emergencial, o projeto que
                            estoura, o incidente que ninguém sabe dimensionar — e passa a ser um valor
                            mensal com escopo claro.
                        </p>
                    </div>

                    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8">
                        <AnimatedGrid fade="center" cell={40} />
                        <p className="relative text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            O que a Oliver assume
                        </p>
                        <ul className="relative mt-5 grid gap-3 sm:grid-cols-2">
                            {PILLARS.slice(0, 10).map((p) => (
                                <li key={p.title} className="flex items-center gap-2.5 text-sm text-foreground/90">
                                    <p.icon className="size-4 shrink-0 text-blue-400" />
                                    {p.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </section>

            {/* Pilares */}
            <section className="relative w-full border-y border-border/40 bg-card/20 py-20 lg:py-28">
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-blue-500" />Os pilares
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            Dez frentes que operam{" "}
                            <span className="font-subheading italic">ao mesmo tempo</span>
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
                        {PILLARS.map((p, i) => (
                            <Container key={p.title} delay={0.04 * i} className="h-full">
                                <div className="group flex h-full flex-col gap-3 bg-background p-7 transition-colors hover:bg-card/50">
                                    <p.icon className="size-5 text-blue-400" />
                                    <h3 className="font-heading text-base font-semibold text-foreground">
                                        {p.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {p.desc}
                                    </p>
                                </div>
                            </Container>
                        ))}
                    </div>
                </Container>
            </section>

            <ReactiveVsProactive />

            {/* O ciclo Oliver */}
            <section className="relative w-full border-t border-border/40 py-20 lg:py-28">
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="h-px w-8 bg-blue-500" />O ciclo
                        </span>
                        <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                            Do sinal à{" "}
                            <span className="font-subheading italic">não-ocorrência</span>
                        </h2>
                        <p className="mt-4 text-base text-muted-foreground">
                            O mesmo ciclo roda o dia inteiro, para cada ativo do seu ambiente.
                        </p>
                    </div>

                    <div className="relative mt-12 grid gap-6 md:grid-cols-5 md:gap-4">
                        <div
                            aria-hidden
                            className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent md:block"
                        />
                        {CYCLE.map((c, i) => (
                            <Container key={c.label} delay={0.08 * i} className="relative">
                                <div className="relative z-10 flex size-10 items-center justify-center rounded-full border border-blue-500/40 bg-background font-heading text-sm font-semibold text-blue-300">
                                    {i + 1}
                                </div>
                                <h3 className="mt-4 font-heading text-sm font-semibold text-foreground">
                                    {c.label}
                                </h3>
                                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                                    {c.desc}
                                </p>
                            </Container>
                        ))}
                    </div>

                    <Container delay={0.2}>
                        <Link
                            href="/servicos/monitoramento"
                            className="link mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                            Ver o serviço de Monitoramento
                            <ArrowRightIcon className="size-4" />
                        </Link>
                    </Container>
                </Container>
            </section>

            <CTASection
                title={
                    <>
                        Troque o improviso{" "}
                        <span className="font-subheading italic">pela previsão</span>
                    </>
                }
                description="Um diagnóstico do seu ambiente mostra onde está o risco hoje e como o modelo MSP da Oliver elimina cada ponto."
                secondaryCta={{ label: "Ver planos", href: "/planos" }}
            />
        </>
    );
};

export default MspPage;
