import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/constants";
import Container from "../global/container";
import CursorLight from "../global/cursor-light";
import MagneticButton from "../global/magnetic-button";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import { WhatsAppButton } from "./whatsapp-button";
import { OrbitingCircles } from "../ui/orbiting-circles";

const Hero = () => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center pt-8 pb-16 lg:pt-14 lg:pb-24">
            <CursorLight intensity={0.16} />

            <div className="absolute left-1/2 top-0 -z-10 flex size-40 -translate-x-1/2 rounded-full bg-blue-500 blur-[10rem] lg:hidden" />

            <div className="relative flex flex-col items-center justify-center gap-y-8">
                <Container className="absolute inset-0 top-0 mb-auto hidden min-h-screen w-full flex-col items-center justify-center -z-10 lg:flex">
                    <OrbitingCircles speed={0.5} radius={300}>
                        <Icons.circle1 className="size-4 text-foreground/70" />
                        <Icons.circle2 className="size-1 text-foreground/80" />
                    </OrbitingCircles>
                    <OrbitingCircles speed={0.25} radius={400}>
                        <Icons.circle2 className="size-1 text-foreground/50" />
                        <Icons.circle1 className="size-4 text-foreground/60" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                    </OrbitingCircles>
                    <OrbitingCircles speed={0.1} radius={500}>
                        <Icons.circle2 className="size-1 text-foreground/50" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                        <Icons.circle1 className="size-4 text-foreground/60" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                    </OrbitingCircles>
                </Container>

                <div className="flex flex-col items-center justify-center gap-y-4 bg-background/0 text-center">
                    <Container className="relative hidden overflow-hidden lg:block">
                        <Link
                            href="/msp"
                            className="group relative mx-auto grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200"
                        >
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-neutral-800" />
                            <span className="z-10 flex items-center py-0.5 text-sm text-neutral-100">
                                <span className="mr-2 flex h-[18px] items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-2 py-[0.5px] text-[9px] font-medium tracking-wide text-white">
                                    MSP
                                </span>
                                Operação de TI gerenciada, com SLA
                            </span>
                        </Link>
                    </Container>

                    <Container delay={0.15}>
                        <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold !leading-tight md:text-4xl lg:text-7xl">
                            A TI da sua empresa{" "}
                            <span className="font-subheading italic">não pode parar</span>
                        </h1>
                    </Container>
                    <Container delay={0.2}>
                        <p className="mx-auto mt-2 max-w-xl text-center text-base text-muted-foreground lg:text-lg">
                            Monitoramento, suporte e gestão contínua para manter sua operação
                            funcionando com segurança, previsibilidade e eficiência.
                        </p>
                    </Container>
                    <Container delay={0.25} className="z-20">
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                            <MagneticButton>
                                <Link href="/contato" className="group flex items-center gap-2">
                                    <Button size="lg">
                                        Falar com um especialista
                                        <ArrowRightIcon className="size-4 transition-all duration-300 group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </MagneticButton>
                            <Link href="/msp">
                                <Button size="lg" variant="subtle">
                                    Conhecer o MSP
                                </Button>
                            </Link>
                            <WhatsAppButton size="lg" />
                        </div>
                        <div className="mt-4 flex justify-center">
                            <a
                                href={SITE.infraUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Conheça a Oliver Network Infraestrutura
                                <ArrowUpRightIcon className="size-3.5" />
                            </a>
                        </div>
                    </Container>
                    <Container delay={0.3} className="relative">
                        <div className="relative mx-auto mt-10 max-w-6xl rounded-xl border border-border p-2 backdrop-blur-lg lg:rounded-[32px]">
                            <div className="absolute inset-0 left-1/2 top-1/8 -z-10 h-1/4 w-1/2 -translate-x-1/2 -translate-y-1/2 animate-image-glow bg-gradient-to-r from-sky-500 to-blue-600 blur-[4rem] lg:w-3/4 lg:blur-[10rem]" />
                            <div className="absolute inset-0 left-1/2 -top-1/8 -z-20 hidden h-1/4 w-1/4 -translate-x-1/2 -translate-y-1/2 animate-image-glow bg-blue-600 blur-[10rem] lg:block" />

                            <div className="rounded-lg border border-border bg-background lg:rounded-[22px]">
                                <Image
                                    src="/images/dashboard.png"
                                    alt="Painel de monitoramento da Oliver Network"
                                    width={1920}
                                    height={1080}
                                    className="rounded-lg lg:rounded-[20px]"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 w-full bg-gradient-to-t from-background to-transparent" />
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Hero;
