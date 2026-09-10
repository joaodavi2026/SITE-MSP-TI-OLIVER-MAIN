"use client";

import AnimatedGrid from "@/components/global/animated-grid";
import ServiceIcon from "@/components/global/service-icon";
import type { NavItem } from "@/constants/links";
import { cn } from "@/lib";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Props {
    menu: NonNullable<NavItem["solutionsMenu"]>;
    pathname: string;
    onNavigate: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

const SolutionsMegaMenu = ({ menu, pathname, onNavigate, onMouseEnter, onMouseLeave }: Props) => {
    const [active, setActive] = useState(0);
    const group = menu.groups[active];

    return (
        <motion.div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            transition={{ duration: 0.24, ease }}
            className="absolute left-1/2 top-full z-50 w-[min(96vw,68rem)] -translate-x-1/2 px-4 pt-3"
        >
            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/95 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-28 left-1/3 h-52 w-2/3 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[7rem]"
                />
                <div className="relative grid md:grid-cols-[16rem_1fr]">
                    {/* coluna de grupos */}
                    <div className="border-b border-border/60 p-3 md:border-b-0 md:border-r">
                        <p className="px-3 pb-2 pt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground/70">
                            Soluções
                        </p>
                        <ul>
                            {menu.groups.map((g, i) => {
                                const isActive = i === active;
                                return (
                                    <li key={g.id}>
                                        <button
                                            type="button"
                                            onMouseEnter={() => setActive(i)}
                                            onFocus={() => setActive(i)}
                                            onClick={() => setActive(i)}
                                            className={cn(
                                                "group flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-200",
                                                isActive ? "bg-white/[0.05]" : "hover:bg-white/[0.03]",
                                            )}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span
                                                    className={cn(
                                                        "flex size-8 shrink-0 items-center justify-center rounded-md border transition-colors",
                                                        isActive
                                                            ? "border-blue-500/40 text-blue-400"
                                                            : "border-border/60 text-muted-foreground",
                                                    )}
                                                >
                                                    <ServiceIcon name={g.icon} className="size-4" />
                                                </span>
                                                <span>
                                                    <span className="block text-sm font-medium text-foreground">
                                                        {g.label}
                                                    </span>
                                                    <span className="block text-[11px] text-muted-foreground">
                                                        {g.eyebrow}
                                                    </span>
                                                </span>
                                            </span>
                                            <ArrowRightIcon
                                                className={cn(
                                                    "size-3.5 transition-all duration-200",
                                                    isActive
                                                        ? "translate-x-0 text-foreground opacity-100"
                                                        : "-translate-x-1 opacity-0",
                                                )}
                                            />
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                        <Link
                            href={menu.overviewHref}
                            onClick={onNavigate}
                            className="group mt-2 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground"
                        >
                            {menu.overviewLabel}
                            <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* painel dinâmico */}
                    <div className="relative p-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={group.id}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.2, ease }}
                                className="grid gap-6 lg:grid-cols-[1fr_1.1fr]"
                            >
                                {/* visual do grupo */}
                                <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/60 bg-card/40 p-5">
                                    <AnimatedGrid fade="center" cell={34} />
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute -right-8 -top-8 size-36 rounded-full opacity-40 blur-[3.5rem]"
                                        style={{ background: `radial-gradient(circle, ${group.accentTo}, transparent 70%)` }}
                                    />
                                    <span
                                        className="relative flex size-12 items-center justify-center rounded-xl border border-border/60 bg-background"
                                        style={{ color: group.accentFrom }}
                                    >
                                        <ServiceIcon name={group.icon} className="size-6" />
                                    </span>
                                    <div className="relative mt-6">
                                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
                                            {group.eyebrow}
                                        </p>
                                        <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                                            {group.label}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                            {group.description}
                                        </p>
                                        <Link
                                            href={group.overviewHref}
                                            onClick={onNavigate}
                                            className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                                        >
                                            {group.overviewLabel}
                                            <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>

                                {/* subitens */}
                                <div className="grid gap-1 sm:grid-cols-2">
                                    {group.items.map((item) => {
                                        const isActive = pathname === item.href;
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={onNavigate}
                                                className={cn(
                                                    "group flex items-center gap-2.5 rounded-lg border border-transparent px-3 py-2.5 text-sm transition-colors duration-200",
                                                    "hover:border-border/60 hover:bg-white/[0.04]",
                                                    isActive && "border-border/60 bg-white/[0.04]",
                                                )}
                                            >
                                                <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background text-muted-foreground transition-colors group-hover:border-blue-500/40 group-hover:text-blue-400">
                                                    <ServiceIcon name={item.icon} className="size-3.5" />
                                                </span>
                                                <span className="font-medium text-foreground">{item.name}</span>
                                                <ArrowRightIcon className="ml-auto size-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SolutionsMegaMenu;
