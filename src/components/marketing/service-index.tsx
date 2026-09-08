import Container from "@/components/global/container";
import CursorLight from "@/components/global/cursor-light";
import ServiceIcon from "@/components/global/service-icon";
import type { Service } from "@/constants/services";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

interface Props {
    items: Service[];
    basePath: string;
    intro: string;
}

const ServiceIndex = ({ items, basePath, intro }: Props) => {
    return (
        <section className="relative w-full overflow-hidden py-20 lg:py-24">
            <CursorLight intensity={0.08} />
            <Container className="mx-auto max-w-6xl px-6">
                <p className="max-w-2xl text-base text-muted-foreground lg:text-lg">{intro}</p>

                <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 md:grid-cols-2">
                    {items.map((item, i) => (
                        <Container key={item.slug} delay={0.05 * i} className="h-full">
                            <Link
                                href={`${basePath}/${item.slug}`}
                                className="group relative flex h-full flex-col gap-4 bg-background p-8 transition-colors hover:bg-card/50"
                            >
                                <div className="flex items-center justify-between">
                                    <span
                                        className="flex size-11 items-center justify-center rounded-xl border border-border/60 bg-card/60 transition-colors group-hover:border-blue-500/40"
                                        style={{ color: item.accentFrom }}
                                    >
                                        <ServiceIcon name={item.icon} className="size-5" />
                                    </span>
                                    <ArrowRightIcon className="size-4 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-semibold text-foreground">
                                        {item.name}
                                    </h3>
                                    <p className="mt-1 text-sm font-medium text-muted-foreground/80">
                                        {item.tagline}
                                    </p>
                                </div>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {item.menuDescription}
                                </p>
                            </Link>
                        </Container>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ServiceIndex;
