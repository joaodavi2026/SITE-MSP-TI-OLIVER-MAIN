import Container from "@/components/global/container";
import ContactForm from "@/components/marketing/contact-form";
import PageHero from "@/components/marketing/page-hero";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { SITE } from "@/constants";
import { generateMetadata as buildMetadata } from "@/utils";
import { ClockIcon, MailIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";

export const metadata = buildMetadata({
    title: "Contato",
    description:
        "Fale com a Oliver Network. Agende um diagnóstico gratuito do ambiente de TI da sua empresa e receba uma proposta de operação sob medida.",
    path: "/contato",
});

const STEPS = [
    "A Oliver responde em até 1 dia útil para agendar uma conversa.",
    "Fazemos um diagnóstico do ambiente: inventário, riscos e pontos críticos.",
    "Você recebe uma proposta com escopo, plano e caminho de transição.",
];

const ContatoPage = () => {
    return (
        <>
            <PageHero
                eyebrow="Contato"
                align="left"
                title={
                    <>
                        Fale com um{" "}
                        <span className="font-subheading italic">especialista</span>
                    </>
                }
                description="Conte como está o cenário hoje — infraestrutura, gestão, ou as duas frentes. O primeiro passo é um diagnóstico gratuito, sem compromisso de contratação."
            />

            <section className="relative w-full py-16 lg:py-24">
                <Container className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
                    <div className="flex flex-col gap-8">
                        <div>
                            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                                <span className="h-px w-8 bg-blue-500" />Canais
                            </span>
                            <ul className="mt-5 space-y-4 text-sm">
                                <li className="flex items-start gap-3">
                                    <MailIcon className="mt-0.5 size-4 shrink-0 text-blue-400" />
                                    <span>
                                        <span className="block text-muted-foreground">E-mail</span>
                                        <a href={`mailto:${SITE.email}`} className="link text-foreground">
                                            {SITE.email}
                                        </a>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MessageCircleIcon className="mt-0.5 size-4 shrink-0 text-blue-400" />
                                    <span>
                                        <span className="block text-muted-foreground">WhatsApp</span>
                                        <a
                                            href={SITE.whatsapp}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link text-foreground"
                                        >
                                            {SITE.whatsappNumber}
                                        </a>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <PhoneIcon className="mt-0.5 size-4 shrink-0 text-blue-400" />
                                    <span>
                                        <span className="block text-muted-foreground">Telefone</span>
                                        <a href={SITE.phoneHref} className="link text-foreground">
                                            {SITE.phone}
                                        </a>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ClockIcon className="mt-0.5 size-4 shrink-0 text-blue-400" />
                                    <span>
                                        <span className="block text-muted-foreground">Atendimento</span>
                                        <span className="text-foreground">{SITE.hours}</span>
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <WhatsAppButton size="lg" className="w-full sm:w-auto" />
                            </div>
                        </div>

                        <div className="rounded-2xl border border-border/60 bg-card/30 p-6">
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                                O que acontece depois
                            </p>
                            <ol className="mt-4 space-y-4">
                                {STEPS.map((step, i) => (
                                    <li key={step} className="flex gap-3 text-sm text-muted-foreground">
                                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-blue-500/40 text-xs font-semibold text-blue-300">
                                            {i + 1}
                                        </span>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    <Container delay={0.1}>
                        <ContactForm />
                    </Container>
                </Container>
            </section>
        </>
    );
};

export default ContatoPage;
