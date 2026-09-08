"use client";

import ServiceIcon from "@/components/global/service-icon";
import { cn } from "@/lib";
import type { NavItem } from "@/constants/links";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

interface Props {
    item: NavItem;
    pathname: string;
    onNavigate: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const MegaMenuPanel = ({ item, pathname, onNavigate, onMouseEnter, onMouseLeave }: Props) => {
    if (!item.megaMenu) return null;
    const { megaMenu } = item;

    return (
        <motion.div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 w-[min(94vw,60rem)] -translate-x-1/2 px-4 pt-3"
        >
            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/95 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[6rem]"
                />
                <div className="relative grid gap-6 p-6 md:grid-cols-[15rem_1fr]">
                    <div className="flex flex-col justify-between rounded-xl border border-border/60 bg-card/40 p-5">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                                {item.name}
                            </p>
                            <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">
                                {megaMenu.heading}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">{megaMenu.blurb}</p>
                        </div>
                        <Link
                            href={megaMenu.overviewHref}
                            onClick={onNavigate}
                            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                            {megaMenu.overviewLabel}
                            <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="grid gap-x-4 gap-y-1 sm:grid-cols-2">
                        {megaMenu.columns.map((column) => (
                            <div key={column.title} className="p-1">
                                <p className="px-3 pb-1 pt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
                                    {column.title}
                                </p>
                                {column.items.map((child) => {
                                    const active = pathname === child.href;
                                    return (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            onClick={onNavigate}
                                            className={cn(
                                                "group flex items-start gap-3 rounded-lg border border-transparent px-3 py-2.5 transition-colors duration-200",
                                                "hover:border-border/60 hover:bg-white/[0.04]",
                                                active && "border-border/60 bg-white/[0.04]",
                                            )}
                                        >
                                            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background text-muted-foreground transition-colors duration-200 group-hover:border-blue-500/40 group-hover:text-blue-400">
                                                <ServiceIcon name={child.icon} className="size-4" />
                                            </span>
                                            <span className="min-w-0">
                                                <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                                                    {child.name}
                                                    <ArrowRightIcon className="size-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                                                </span>
                                                <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                                                    {child.description}
                                                </span>
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MegaMenuPanel;
