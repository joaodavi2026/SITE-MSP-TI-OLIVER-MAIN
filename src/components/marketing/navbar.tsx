"use client";

import { CTA_LABEL, NAV_LINKS, SITE } from "@/constants";
import { cn } from "@/lib";
import { AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MegaMenuPanel from "./mega-menu";
import MobileMenu from "./mobile-menu";
import SolutionsMegaMenu from "./solutions-mega-menu";

const WhatsAppGlyph = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24.044 12.045.044 5.463.044.104 5.4.101 11.986c0 2.096.549 4.14 1.595 5.945L0 24l6.304-1.654a11.881 11.881 0 005.71 1.454h.006c6.585 0 11.946-5.36 11.949-11.945a11.9 11.9 0 00-3.44-8.407" />
    </svg>
);

const Navbar = () => {
    const pathname = usePathname();
    const [openKey, setOpenKey] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        setOpenKey(null);
    }, [pathname]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenKey(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const open = (key: string) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setOpenKey(key);
    };

    const scheduleClose = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setOpenKey(null), 150);
    };

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    const hasPanel = (item: (typeof NAV_LINKS)[number]) => item.megaMenu || item.solutionsMenu;
    const activePanel = NAV_LINKS.find((l) => hasPanel(l) && openKey === l.name);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full border-b transition-colors duration-300",
                scrolled || openKey
                    ? "border-border/60 bg-background/90 backdrop-blur-md"
                    : "border-transparent bg-background/70 backdrop-blur-sm",
            )}
        >
            <Wrapper className="h-16">
                <nav
                    className="relative flex h-full items-center justify-between"
                    onMouseLeave={scheduleClose}
                >
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                        aria-label="Oliver Network — início"
                    >
                        <Image
                            src="/images/oliver-logo.png"
                            alt="Oliver Network"
                            width={96}
                            height={108}
                            className="h-14 w-auto object-contain"
                            priority
                        />
                    </Link>

                    <ul className="hidden items-center gap-1 lg:flex">
                        {NAV_LINKS.map((link) => {
                            const active = isActive(link.href);
                            if (!hasPanel(link)) {
                                return (
                                    <li key={link.name} onMouseEnter={() => setOpenKey(null)}>
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                                active
                                                    ? "text-foreground"
                                                    : "text-muted-foreground hover:text-foreground",
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            }
                            return (
                                <li key={link.name} onMouseEnter={() => open(link.name)}>
                                    <Link
                                        href={link.href}
                                        aria-expanded={openKey === link.name}
                                        className={cn(
                                            "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                            active || openKey === link.name
                                                ? "text-foreground"
                                                : "text-muted-foreground hover:text-foreground",
                                        )}
                                    >
                                        {link.name}
                                        <ChevronDownIcon
                                            className={cn(
                                                "size-3.5 transition-transform duration-300",
                                                openKey === link.name && "rotate-180",
                                            )}
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="flex items-center gap-2">
                        <a
                            href={SITE.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Falar pelo WhatsApp"
                            className="hidden size-9 items-center justify-center rounded-md border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 transition-colors hover:bg-emerald-500/20 lg:flex"
                        >
                            <WhatsAppGlyph className="size-4" />
                        </a>
                        <Link href="/contato" className="hidden lg:block">
                            <Button variant="blue">{CTA_LABEL}</Button>
                        </Link>
                        <MobileMenu />
                    </div>

                    <AnimatePresence>
                        {activePanel?.megaMenu && (
                            <MegaMenuPanel
                                key={activePanel.name}
                                item={activePanel}
                                pathname={pathname}
                                onNavigate={() => setOpenKey(null)}
                                onMouseEnter={() => open(activePanel.name)}
                                onMouseLeave={scheduleClose}
                            />
                        )}
                        {activePanel?.solutionsMenu && (
                            <SolutionsMegaMenu
                                key={activePanel.name}
                                menu={activePanel.solutionsMenu}
                                pathname={pathname}
                                onNavigate={() => setOpenKey(null)}
                                onMouseEnter={() => open(activePanel.name)}
                                onMouseLeave={scheduleClose}
                            />
                        )}
                    </AnimatePresence>
                </nav>
            </Wrapper>
        </header>
    );
};

export default Navbar;
