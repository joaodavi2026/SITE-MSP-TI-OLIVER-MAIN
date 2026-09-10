import Container from "@/components/global/container";
import ServiceIcon from "@/components/global/service-icon";
import type { Service } from "@/constants/services";
import { cn } from "@/lib";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

interface Props {
    items: Service[];
    currentSlug: string;
    basePath: string;
    label: string;
}

const ServiceNavigation = ({ items, currentSlug, basePath, label }: Props) => {
    const index = items.findIndex((s) => s.slug === currentSlug);
    const prev = index > 0 ? items[index - 1] : items[items.length - 1];
    const next = index < items.length - 1 ? items[index + 1] : items[0];

    return (
        <section className="relative w-full py-16">
            <Container className="mx-auto max-w-5xl px-6">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="font-heading text-lg font-semibold text-foreground">{label}</h2>
                    <Link
                        href={basePath}
                        className="link text-sm text-muted-foreground hover:text-foreground"
                    >
                        Ver todos
                    </Link>
                </div>

                <div className="mt-6 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {items.map((s) => {
                        const active = s.slug === currentSlug;
                        return (
                            <Link
                                key={s.slug}
                                href={`${basePath}/${s.slug}`}
                                className={cn(
                                    "flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition-colors",
                                    active
                                        ? "border-blue-500/50 bg-blue-500/10 text-foreground"
                                        : "border-border/60 text-muted-foreground hover:border-border hover:text-foreground",
                                )}
                            >
                                <ServiceIcon name={s.icon} className="size-4" />
                                {s.shortName}
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <Link
                        href={`${basePath}/${prev.slug}`}
                        className="group flex flex-col gap-2 rounded-2xl border border-border/60 bg-card/40 p-6 transition-colors hover:border-border"
                    >
                        <span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            <ArrowLeftIcon className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                            Anterior
                        </span>
                        <span className="font-heading text-lg font-semibold text-foreground">
                            {prev.name}
                        </span>
                        <span className="text-sm text-muted-foreground">{prev.menuDescription}</span>
                    </Link>
                    <Link
                        href={`${basePath}/${next.slug}`}
                        className="group flex flex-col gap-2 rounded-2xl border border-border/60 bg-card/40 p-6 text-right transition-colors hover:border-border"
                    >
                        <span className="flex items-center justify-end gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            Próximo
                            <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <span className="font-heading text-lg font-semibold text-foreground">
                            {next.name}
                        </span>
                        <span className="text-sm text-muted-foreground">{next.menuDescription}</span>
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default ServiceNavigation;
