import Container from "@/components/global/container";
import AnimatedGrid from "@/components/global/animated-grid";
import { CTA_INFRA_LABEL, SITE } from "@/constants";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

/**
 * Ponte entre os dois ecossistemas da Oliver Network:
 * Infraestrutura (constrói a base) + Serviços Gerenciados (operam o ambiente).
 */
const InfraBridge = () => {
    return (
        <div className="relative flex w-full flex-col items-center py-20 lg:py-24">
            <Container className="mx-auto w-full max-w-6xl">
                <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/30 p-8 lg:p-12">
                    <AnimatedGrid fade="center" cell={44} />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-cyan-500/15 blur-[6rem]"
                    />
                    <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                                <span className="h-px w-8 bg-cyan-500" />Infraestrutura + Gestão
                            </span>
                            <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                                Você não precisa de dois fornecedores para{" "}
                                <span className="font-subheading italic">construir e operar</span>
                            </h2>
                            <p className="mt-4 max-w-xl text-base text-muted-foreground">
                                A Oliver Network projeta e executa a infraestrutura física — cabeamento,
                                fibra, racks, elétrica de TI, CFTV, data center — e também assume a
                                operação contínua do ambiente. Um só interlocutor, da obra ao dia a dia.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href="/infraestrutura"
                                    className="group inline-flex items-center gap-2 rounded-md border border-border/60 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-cyan-500/40"
                                >
                                    Ver Infraestrutura
                                    <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                                <a
                                    href={SITE.infraUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {CTA_INFRA_LABEL}
                                    <ArrowUpRightIcon className="size-3.5" />
                                </a>
                            </div>
                        </div>

                        <div className="relative grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60">
                            {[
                                { k: "Constrói", v: "Cabeamento, fibra, racks, elétrica, data center" },
                                { k: "Certifica", v: "Laudo por enlace e documentação as-built" },
                                { k: "Opera", v: "Monitoramento 24/7, Service Desk, segurança" },
                                { k: "Evolui", v: "Gestão de TI, planejamento e governança" },
                            ].map((item) => (
                                <div key={item.k} className="bg-background p-5">
                                    <p className="font-heading text-sm font-semibold text-foreground">
                                        {item.k}
                                    </p>
                                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                        {item.v}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default InfraBridge;
