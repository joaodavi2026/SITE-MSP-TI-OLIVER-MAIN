import Container from "@/components/global/container";
import CursorLight from "@/components/global/cursor-light";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/marketing/cta-section";
import PageHero from "@/components/marketing/page-hero";
import { PLANS, PLANS_FAQ } from "@/constants";
import { cn } from "@/lib";
import { generateMetadata as buildMetadata } from "@/utils";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: "Planos",
    description:
        "Planos de TI gerenciada da Oliver Network: Essencial, Profissional e Premium. Monitoramento, suporte, segurança e gestão com escopo e valor mensal claros.",
    path: "/planos",
});

const INCLUDED_ALL = [
    "Onboarding com diagnóstico e documentação do ambiente",
    "Monitoramento 24/7 e inventário automatizado",
    "Gestão de patches e atualizações",
    "Portal de chamados com histórico e SLA",
    "Relatório mensal e reunião de acompanhamento",
];

const PlanosPage = () => {
    return (
        <>
            <PageHero
                eyebrow="Planos"
                title={
                    <>
                        Um valor mensal.{" "}
                        <span className="font-subheading italic">Escopo no claro.</span>
                    </>
                }
                description="Três níveis de operação, do monitoramento essencial à gestão de TI completa. Cada plano incorpora o anterior — você sobe de nível conforme a empresa cresce."
                primaryCta={{ label: "Falar com a Oliver", href: "/contato" }}
                secondaryCta={{ label: "Como funciona", href: "/como-funciona" }}
            />

            <section className="relative w-full overflow-hidden py-16 lg:py-20">
                <CursorLight intensity={0.09} />
                <Container className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-5 lg:grid-cols-3">
                        {PLANS.map((plan, i) => (
                            <Container key={plan.id} delay={0.1 * i} className="h-full">
                                <div
                                    className={cn(
                                        "relative flex h-full flex-col overflow-hidden rounded-3xl border p-8",
                                        plan.highlight
                                            ? "border-blue-500/60 bg-blue-500/[0.04]"
                                            : "border-border/60 bg-card/30",
                                    )}
                                >
                                    {plan.highlight && (
                                        <div
                                            aria-hidden
                                            className="pointer-events-none absolute -top-24 left-1/2 h-40 w-2/3 -translate-x-1/2 rounded-full bg-blue-600/25 blur-[6rem]"
                                        />
                                    )}
                                    <div className="relative flex items-center justify-between">
                                        <h2 className="font-heading text-xl font-semibold text-foreground">
                                            {plan.title}
                                        </h2>
                                        {plan.badge && (
                                            <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-2.5 py-1 text-[11px] font-medium text-blue-300">
                                                {plan.badge}
                                            </span>
                                        )}
                                    </div>

                                    <div className="relative mt-5">
                                        <span className="font-heading text-4xl font-semibold text-foreground">
                                            {plan.price}
                                        </span>
                                        <span className="ml-1 text-sm text-muted-foreground">
                                            {plan.priceUnit}
                                        </span>
                                        <p className="mt-2 text-xs text-muted-foreground">
                                            {plan.priceNote}
                                        </p>
                                    </div>

                                    <p className="relative mt-5 text-sm leading-relaxed text-muted-foreground">
                                        {plan.desc}
                                    </p>

                                    <Link href="/contato" className="relative mt-6 block">
                                        <Button
                                            className="w-full"
                                            variant={plan.highlight ? "blue" : "white"}
                                        >
                                            {plan.buttonText}
                                        </Button>
                                    </Link>

                                    <div className="relative mt-8 border-t border-border/60 pt-6">
                                        {plan.inheritsFrom && (
                                            <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-blue-300">
                                                Tudo do {plan.inheritsFrom}, mais:
                                            </p>
                                        )}
                                        <ul className="space-y-3">
                                            {plan.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/90">
                                                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-blue-400" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Container>
                        ))}
                    </div>

                    <Container delay={0.2}>
                        <div className="mt-8 rounded-2xl border border-border/60 bg-card/20 p-6 lg:p-8">
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                                Todo plano inclui
                            </p>
                            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {INCLUDED_ALL.map((item) => (
                                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-blue-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-xs text-muted-foreground">
                                Valores &ldquo;a partir de&rdquo;. A proposta final é definida após o
                                diagnóstico, conforme número de usuários, servidores e criticidade da
                                operação. Licenças e equipamentos são orçados à parte.
                            </p>
                        </div>
                    </Container>
                </Container>
            </section>

            <section className="relative w-full border-t border-border/40 bg-card/20 py-20 lg:py-28">
                <Container className="mx-auto max-w-3xl px-6">
                    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        <span className="h-px w-8 bg-blue-500" />Dúvidas frequentes
                    </span>
                    <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                        Antes de <span className="font-subheading italic">falar com a gente</span>
                    </h2>
                    <Accordion type="single" collapsible className="mt-8 w-full">
                        {PLANS_FAQ.map((faq) => (
                            <AccordionItem key={faq.id} value={String(faq.id)} className="border-border/60">
                                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Container>
            </section>

            <CTASection
                title={
                    <>
                        Qual plano é o{" "}
                        <span className="font-subheading italic">seu</span>?
                    </>
                }
                description="Conte o tamanho da equipe e o momento da empresa. A Oliver indica o plano certo e mostra o caminho de transição."
                secondaryCta={{ label: "Ver serviços", href: "/servicos" }}
            />
        </>
    );
};

export default PlanosPage;
