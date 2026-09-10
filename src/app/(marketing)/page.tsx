import Container from "@/components/global/container";
import CursorLight from "@/components/global/cursor-light";
import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import Companies from "@/components/marketing/companies";
import CTASection from "@/components/marketing/cta-section";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import InfraBridge from "@/components/marketing/infra-bridge";
import Integration from "@/components/marketing/integration";
import LanguageSupport from "@/components/marketing/lang-support";
import Pricing from "@/components/marketing/pricing";
import ReactiveVsProactive from "@/components/marketing/reactive-vs-proactive";
import { generateMetadata as buildMetadata } from "@/utils";

export const metadata = buildMetadata({ path: "/" });

const PROBLEM_POINTS = [
    "O primeiro a descobrir a falha é o usuário — quando o sistema já parou.",
    "Cada incidente começa do zero: sem histórico, sem contexto, sob pressão.",
    "O custo é imprevisível: hora emergencial, projeto que estoura, dado que não volta.",
    "Ninguém consegue dizer se o problema vai se repetir na semana que vem.",
];

const HomePage = () => {
    return (
        <Wrapper className="relative pb-20">
            <Hero />

            {/* O problema — quando a TI é só reativa */}
            <section className="relative flex w-full flex-col items-center py-20 lg:py-28">
                <CursorLight intensity={0.08} />
                <Container className="w-full max-w-6xl">
                    <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
                        <div>
                            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                                <span className="h-px w-8 bg-blue-500" />O problema
                            </span>
                            <h2 className="mt-4 font-heading text-2xl font-medium !leading-snug lg:text-4xl">
                                Quando a TI só aparece{" "}
                                <span className="font-subheading italic">depois que quebra</span>
                            </h2>
                            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                                O modelo de contratar alguém apenas quando algo dá errado tem um
                                preço escondido: o tempo parado, o retrabalho e a decisão tomada no
                                escuro. Sua empresa não precisa de um socorro. Precisa de continuidade.
                            </p>
                        </div>
                        <ul className="flex flex-col divide-y divide-border/50 self-start overflow-hidden rounded-2xl border border-border/50">
                            {PROBLEM_POINTS.map((point) => (
                                <li
                                    key={point}
                                    className="flex items-start gap-3 bg-background/40 px-5 py-4 text-sm text-muted-foreground"
                                >
                                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-red-500/30 text-xs text-red-400">
                                        —
                                    </span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </section>

            <ReactiveVsProactive />
            <Features />
            <Analysis />
            <Integration />
            <InfraBridge />
            <LanguageSupport />
            <Companies />
            <Pricing />
            <CTASection />
        </Wrapper>
    );
};

export default HomePage;
