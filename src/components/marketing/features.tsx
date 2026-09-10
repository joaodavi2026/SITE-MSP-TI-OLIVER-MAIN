import { SERVICES } from "@/constants";
import { cn } from "@/lib";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import ServiceIcon from "../global/service-icon";
import { MagicCard } from "../ui/magic-card";

const HOME_ORDER = ["monitoramento", "suporte-tecnico", "seguranca", "gestao-de-ti", "backup"];
const HOME_SERVICES = HOME_ORDER.map((slug) => SERVICES.find((s) => s.slug === slug)!);

const Features = () => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center py-20">
            <Container>
                <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                    <h2 className="mt-6 font-heading text-2xl font-medium !leading-snug md:text-4xl lg:text-5xl">
                        TI sob controle, <br /> antes que o{" "}
                        <span className="font-subheading italic">problema aconteça</span>
                    </h2>
                    <p className="mt-6 text-center text-base text-accent-foreground/80 md:text-lg">
                        Cada frente da sua TI operada por quem faz disso o próprio negócio — com
                        processo, ferramenta e indicador.
                    </p>
                </div>
            </Container>

            <div className="relative mt-8 grid grid-cols-1 gap-6 overflow-visible md:grid-cols-2 lg:grid-cols-3">
                {HOME_SERVICES.map((service, index) => (
                    <Container
                        key={service.slug}
                        delay={0.1 + index * 0.1}
                        className={cn(
                            "relative flex flex-col rounded-2xl border border-border/50 bg-card transition-colors hover:border-border/100 lg:rounded-3xl",
                            index === 3 && "lg:col-span-2",
                            index === 2 && "md:col-span-2 lg:col-span-1",
                        )}
                    >
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="p-4 lg:rounded-3xl lg:p-6"
                            gradientColor="rgba(59,130,246,0.1)"
                        >
                            <Link href={`/servicos/${service.slug}`} className="group flex h-full flex-col">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="flex size-9 items-center justify-center rounded-lg border border-border/60 bg-background text-blue-400">
                                        <ServiceIcon name={service.icon} className="size-4" />
                                    </span>
                                    <h3 className="text-lg font-semibold">{service.name}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {service.menuDescription}
                                </p>
                                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                                    Ver serviço
                                    <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </MagicCard>
                    </Container>
                ))}
            </div>

            <Container delay={0.3}>
                <Link
                    href="/servicos"
                    className="link mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                    Ver todos os oito serviços
                    <ArrowRightIcon className="size-4" />
                </Link>
            </Container>
        </div>
    );
};

export default Features;
