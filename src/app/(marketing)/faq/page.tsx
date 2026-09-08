import Container from "@/components/global/container";
import CursorLight from "@/components/global/cursor-light";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import CTASection from "@/components/marketing/cta-section";
import PageHero from "@/components/marketing/page-hero";
import { FAQ, FAQ_GROUPS } from "@/constants";
import { generateMetadata as buildMetadata } from "@/utils";

export const metadata = buildMetadata({
    title: "Perguntas Frequentes",
    description:
        "Dúvidas frequentes sobre o modelo MSP, serviços gerenciados, Service Desk, monitoramento, Field Service e a frente de Infraestrutura da Oliver Network.",
    path: "/faq",
});

const FaqPage = () => {
    return (
        <>
            <PageHero
                eyebrow="FAQ"
                align="left"
                title={
                    <>
                        Perguntas{" "}
                        <span className="font-subheading italic">frequentes</span>
                    </>
                }
                description="As dúvidas mais comuns de quem está avaliando a Oliver Network. Não achou a sua? Fale com um especialista."
                primaryCta={{ label: "Falar com um especialista", href: "/contato" }}
            />

            <section className="relative w-full overflow-hidden py-16 lg:py-24">
                <CursorLight intensity={0.08} />
                <Container className="mx-auto max-w-3xl px-6">
                    <div className="space-y-14">
                        {FAQ_GROUPS.map((groupName) => {
                            const items = FAQ.filter((f) => f.group === groupName);
                            if (items.length === 0) return null;
                            return (
                                <div key={groupName}>
                                    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                                        <span className="h-px w-8 bg-blue-500" />
                                        {groupName}
                                    </span>
                                    <Accordion type="single" collapsible className="mt-5 w-full">
                                        {items.map((faq) => (
                                            <AccordionItem key={faq.id} value={faq.id} className="border-border/60">
                                                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            <CTASection
                title={
                    <>
                        Ainda com{" "}
                        <span className="font-subheading italic">dúvidas</span>?
                    </>
                }
                description="Um diagnóstico gratuito do seu ambiente responde o que um FAQ não alcança."
                secondaryCta={{ label: "Ver planos", href: "/planos" }}
            />
        </>
    );
};

export default FaqPage;
