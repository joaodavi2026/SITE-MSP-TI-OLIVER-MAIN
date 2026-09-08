"use client";

import ServiceIcon from "@/components/global/service-icon";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { CTA_LABEL, NAV_LINKS } from "@/constants";
import { cn } from "@/lib";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MobileMenu = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full overflow-y-auto pt-12 sm:w-[360px]">
                <SheetHeader className="mb-6">
                    <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col">
                    <Accordion type="multiple" className="w-full">
                        {NAV_LINKS.map((link) => {
                            if (link.megaMenu) {
                                return (
                                    <AccordionItem key={link.name} value={link.name} className="border-border/60">
                                        <AccordionTrigger className="py-3.5 text-base font-medium hover:no-underline">
                                            {link.name}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col gap-1 pb-2">
                                                <Link
                                                    href={link.megaMenu.overviewHref}
                                                    className="px-1 py-2 text-sm font-medium text-blue-400"
                                                >
                                                    {link.megaMenu.overviewLabel}
                                                </Link>
                                                {link.megaMenu.columns
                                                    .flatMap((c) => c.items)
                                                    .map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className="flex items-center gap-3 rounded-md px-1 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                                        >
                                                            <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background text-muted-foreground">
                                                                <ServiceIcon name={child.icon} className="size-3.5" />
                                                            </span>
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            }

                            if (link.solutionsMenu) {
                                return (
                                    <AccordionItem key={link.name} value={link.name} className="border-border/60">
                                        <AccordionTrigger className="py-3.5 text-base font-medium hover:no-underline">
                                            {link.name}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <Link
                                                href={link.solutionsMenu.overviewHref}
                                                className="block px-1 py-2 text-sm font-medium text-blue-400"
                                            >
                                                {link.solutionsMenu.overviewLabel}
                                            </Link>
                                            <div className="mt-1 flex flex-col gap-4 pb-2">
                                                {link.solutionsMenu.groups.map((g) => (
                                                    <div key={g.id}>
                                                        <p className="px-1 pb-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground/70">
                                                            {g.label}
                                                        </p>
                                                        <div className="flex flex-col">
                                                            {g.items.map((item) => (
                                                                <Link
                                                                    key={item.href}
                                                                    href={item.href}
                                                                    className="flex items-center gap-3 rounded-md px-1 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                                                >
                                                                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background">
                                                                        <ServiceIcon name={item.icon} className="size-3.5" />
                                                                    </span>
                                                                    {item.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "flex border-b border-border/60 py-3.5 text-base font-medium transition-colors",
                                        pathname.startsWith(link.href) && link.href !== "/"
                                            ? "text-foreground"
                                            : "text-muted-foreground hover:text-foreground",
                                    )}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </Accordion>

                    <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                        <Link href="/contato" className="w-full">
                            <Button className="w-full" variant="blue">
                                {CTA_LABEL}
                            </Button>
                        </Link>
                        <WhatsAppButton className="w-full" size="lg" />
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileMenu;
