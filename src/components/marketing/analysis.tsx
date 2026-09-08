import { ArrowUpRightIcon, CheckCircle2Icon, TrendingDownIcon } from "lucide-react";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const ASSETS = [
    { name: "Servidor ERP", status: "Saudável", metric: "CPU 34%", trend: "estável" },
    { name: "Backup diário", status: "Concluído", metric: "02h14", trend: "verificado" },
    { name: "Link principal", status: "Ativo", metric: "12 ms", trend: "estável" },
    { name: "Firewall", status: "Atualizado", metric: "0 pend.", trend: "ok" },
];

const TICKETS = [
    { area: "Estações", vol: "18", sla: "100%", first: "6 min" },
    { area: "E-mail / M365", vol: "7", sla: "100%", first: "9 min" },
    { area: "Servidores", vol: "3", sla: "100%", first: "4 min" },
];

const Analysis = () => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center py-20">
            <Container>
                <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
                    <h2 className="font-heading text-2xl font-medium !leading-snug md:text-4xl lg:text-5xl">
                        O que você recebe <br />
                        <span className="font-subheading italic">todo mês</span>
                    </h2>
                    <p className="mt-4 text-base text-accent-foreground/80 md:text-lg">
                        Disponibilidade dos ativos, volume e SLA de chamados, capacidade e riscos —
                        em linguagem de negócio, não em jargão.
                    </p>
                </div>
            </Container>

            <div className="relative grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                <Container delay={0.2}>
                    <div className="relative rounded-2xl border border-border/50 bg-background/40">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="w-full overflow-hidden p-4 lg:p-8"
                        >
                            <div className="absolute bottom-0 right-0 z-20 h-1/4 w-1/4 bg-blue-500 blur-[8rem]" />
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Painel de monitoramento</h3>
                                <p className="text-sm text-muted-foreground">
                                    Estado em tempo real dos ativos críticos do ambiente.
                                </p>

                                <div className="flex items-baseline justify-between">
                                    <div>
                                        <div className="text-3xl font-semibold">99,98%</div>
                                        <div className="mt-2 flex items-center gap-1 text-sm text-green-500">
                                            <CheckCircle2Icon className="h-4 w-4" />
                                            disponibilidade no mês
                                        </div>
                                    </div>
                                    <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-1 text-xs text-green-400">
                                        0 incidentes
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <div className="grid grid-cols-3 py-2 text-sm text-muted-foreground">
                                        <div>Ativo</div>
                                        <div>Estado</div>
                                        <div>Métrica</div>
                                    </div>
                                    {ASSETS.map((a) => (
                                        <div
                                            key={a.name}
                                            className="grid grid-cols-3 border-t border-border/50 py-2 text-sm"
                                        >
                                            <div>{a.name}</div>
                                            <div className="text-green-400">{a.status}</div>
                                            <div className="font-semibold">{a.metric}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="relative rounded-2xl border border-border/50 bg-background/40">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="w-full overflow-hidden p-4 lg:p-8"
                        >
                            <div className="absolute bottom-0 right-0 z-20 h-1/4 w-1/4 bg-sky-500 blur-[8rem]" />
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Chamados &amp; SLA</h3>
                                <p className="text-sm text-muted-foreground">
                                    Volume, tempo de primeira resposta e cumprimento de SLA por área.
                                </p>

                                <div className="flex items-baseline justify-between">
                                    <div>
                                        <div className="text-3xl font-semibold">28</div>
                                        <div className="mt-2 flex items-center gap-1 text-sm text-green-500">
                                            <TrendingDownIcon className="h-4 w-4" />
                                            -19% vs. mês anterior
                                        </div>
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                                        relatório completo
                                        <ArrowUpRightIcon className="h-4 w-4" />
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <div className="grid grid-cols-4 py-2 text-sm text-muted-foreground">
                                        <div>Área</div>
                                        <div>Vol.</div>
                                        <div>SLA</div>
                                        <div>1ª resp.</div>
                                    </div>
                                    {TICKETS.map((t) => (
                                        <div
                                            key={t.area}
                                            className="grid grid-cols-4 border-t border-border/50 py-2 text-sm"
                                        >
                                            <div>{t.area}</div>
                                            <div>{t.vol}</div>
                                            <div className="text-green-400">{t.sla}</div>
                                            <div className="font-semibold">{t.first}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Analysis;
