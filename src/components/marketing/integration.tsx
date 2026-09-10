import { cn } from "@/lib";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import ServiceIcon from "../global/service-icon";
import { Button } from "../ui/button";
import Ripple from "../ui/ripple";

const NODES = [
    { icon: "mail", position: "left-3", size: "small", className: "hidden lg:flex" },
    { icon: "network", position: "left-2", size: "medium" },
    { icon: "server", position: "left-1", size: "large" },
    { icon: "cloud", position: "right-1", size: "large" },
    { icon: "shield-check", position: "right-2", size: "medium" },
    { icon: "database-backup", position: "right-3", size: "small", className: "hidden lg:flex" },
];

const getPositionClasses = (position: string) => {
    switch (position) {
        case "left-3": return "-translate-x-[285px]";
        case "left-2": return "-translate-x-[210px]";
        case "left-1": return "-translate-x-[125px]";
        case "right-1": return "translate-x-[125px]";
        case "right-2": return "translate-x-[210px]";
        case "right-3": return "translate-x-[285px]";
        default: return "";
    }
};

const getSizeClasses = (size: string) => {
    switch (size) {
        case "large": return "size-20";
        case "medium": return "size-16";
        case "small": return "size-12";
        default: return "size-20";
    }
};

const getIconSizeClasses = (size: string) => {
    switch (size) {
        case "large": return "size-9";
        case "medium": return "size-6";
        case "small": return "size-5";
        default: return "size-9";
    }
};

const Integration = () => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center py-20">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center lg:absolute lg:top-1/4 inset-x-0 mt-12 lg:mt-0">
                <h2 className="font-heading text-2xl font-semibold !leading-snug md:text-4xl lg:text-6xl">
                    Uma stack, <span className="font-subheading italic">um só responsável</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
                    Microsoft 365, redes, servidores, nuvem, segurança e backup operados sob o mesmo
                    padrão de gestão — sem repassar a bola entre fornecedores.
                </p>
            </div>

            <div className="mt-8 flex flex-col items-center text-center lg:absolute lg:bottom-1/4 inset-x-0 z-20 lg:mt-0">
                <Link href="/solucoes">
                    <Button size="lg">
                        Ver as soluções
                        <ArrowRightIcon className="size-4" />
                    </Button>
                </Link>
            </div>

            <Container delay={0.3}>
                <div className="relative hidden items-center justify-center overflow-visible lg:flex">
                    <div className="absolute right-1/4 top-1/2 -z-10 h-14 w-3/5 -translate-y-1/2 -rotate-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 blur-[6.5rem] lg:h-20" />

                    <div className="relative flex h-dvh w-full flex-col items-center justify-center overflow-visible">
                        <Ripple />
                    </div>

                    <div className="group absolute z-20 flex items-center justify-center">
                        <div className="flex size-24 items-center justify-center rounded-3xl border border-border/60 bg-background/80 shadow-xl backdrop-blur-lg transition-all duration-500 group-hover:scale-110">
                            <Image
                                src="/images/oliver-logo.png"
                                alt="Oliver Network"
                                width={96}
                                height={108}
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                    </div>

                    {NODES.map((node, index) => (
                        <div
                            key={index}
                            className={cn(
                                "absolute z-20 flex items-center justify-center rounded-full bg-gradient-to-b from-foreground/5 to-transparent p-3 text-foreground shadow-xl shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:text-blue-400",
                                getPositionClasses(node.position),
                                getSizeClasses(node.size),
                                node.className,
                            )}
                        >
                            <ServiceIcon
                                name={node.icon}
                                className={cn("size-auto", getIconSizeClasses(node.size))}
                            />
                        </div>
                    ))}
                </div>
            </Container>

            {/* mobile */}
            <Container className="lg:hidden">
                <div className="mx-auto grid max-w-sm grid-cols-3 gap-3 pt-4">
                    {NODES.map((node, i) => (
                        <div
                            key={i}
                            className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-border/60 bg-card/40 text-blue-400"
                        >
                            <ServiceIcon name={node.icon} className="size-6" />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Integration;
