import { PLANS } from "@/constants";
import { cn } from "@/lib";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";

const Pricing = () => {
    return (
        <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center py-20">
            <Container>
                <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                    <h2 className="mt-6 font-heading text-2xl font-medium !leading-snug md:text-4xl lg:text-5xl">
                        Planos que acompanham{" "}
                        <span className="font-subheading italic">o seu momento</span>
                    </h2>
                    <p className="mt-6 text-center text-base text-accent-foreground/80 md:text-lg">
                        Do monitoramento essencial à gestão de TI completa. Um valor mensal, escopo
                        no claro, sem surpresa na fatura.
                    </p>
                </div>
            </Container>

            <div className="mx-auto grid w-full grid-cols-1 gap-4 pt-8 lg:grid-cols-3 lg:gap-6 lg:pt-12">
                {PLANS.map((plan, idx) => (
                    <Container key={plan.id} delay={0.1 * idx + 0.2}>
                        <div
                            className={cn(
                                "relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 lg:rounded-3xl",
                                plan.highlight ? "border-blue-500/60" : "border-foreground/10",
                            )}
                        >
                            {plan.highlight && (
                                <div className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-12 w-full -rotate-45 rounded-2xl bg-blue-600 blur-[8rem] lg:rounded-3xl" />
                            )}
                            <div className="flex items-center justify-between">
                                <h3 className="pt-2 text-lg font-medium text-foreground">
                                    {plan.title}
                                </h3>
                                {plan.badge && (
                                    <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-2.5 py-1 text-[11px] font-medium text-blue-300">
                                        {plan.badge}
                                    </span>
                                )}
                            </div>
                            <div className="mt-3">
                                <span className="text-3xl font-medium md:text-4xl">{plan.price}</span>
                                <span className="ml-1 text-sm text-muted-foreground">
                                    {plan.priceUnit}
                                </span>
                            </div>
                            <p className="mt-3 text-sm text-muted-foreground">{plan.desc}</p>

                            <div className="mt-6 flex flex-col gap-y-2">
                                {plan.inheritsFrom && (
                                    <span className="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-blue-300">
                                        Tudo do {plan.inheritsFrom}, mais:
                                    </span>
                                )}
                                {plan.features.slice(0, 5).map((feature) => (
                                    <div key={feature} className="flex items-start gap-2 text-sm">
                                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-blue-400" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-8">
                                <Link href="/planos">
                                    <Button
                                        className="w-full"
                                        variant={plan.highlight ? "blue" : "white"}
                                    >
                                        Ver detalhes
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Container>
                ))}
            </div>

            <Container delay={0.4}>
                <Link
                    href="/planos"
                    className="link mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                    Comparar planos em detalhe
                    <ArrowRightIcon className="size-4" />
                </Link>
            </Container>
        </div>
    );
};

export default Pricing;
