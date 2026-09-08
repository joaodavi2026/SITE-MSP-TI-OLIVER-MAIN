import { CTA_INFRA_LABEL, FOOTER_NAV, SITE } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import Container from "../global/container";
import { WhatsAppButton } from "./whatsapp-button";

const Footer = () => {
    return (
        <footer className="footer relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center border-t border-foreground/5 px-6 pb-10 pt-16 lg:px-8 lg:pt-28">
            <div className="grid w-full gap-10 lg:grid-cols-[1.4fr_2.6fr] lg:gap-8">
                <Container>
                    <div className="flex flex-col items-start justify-start md:max-w-[280px]">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/images/oliver-logo.png"
                                alt="Oliver Network"
                                width={96}
                                height={108}
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="mt-4 text-start text-sm text-muted-foreground">
                            Integração tecnológica em infraestrutura de TI e Telecom — e gestão
                            contínua da operação — para ambientes corporativos, data center e
                            industrial.
                        </p>
                        <p className="mt-4 text-sm text-muted-foreground">
                            <a href={`mailto:${SITE.email}`} className="link hover:text-foreground">
                                {SITE.email}
                            </a>
                        </p>
                        <div className="mt-4">
                            <WhatsAppButton label={`WhatsApp · ${SITE.whatsappNumber}`} />
                        </div>
                    </div>
                </Container>

                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {FOOTER_NAV.map((column, idx) => (
                        <Container key={column.title} delay={0.08 + idx * 0.08} className="h-auto">
                            <h3 className="text-sm font-medium text-foreground">{column.title}</h3>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                {column.links.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="link transition-all duration-300 hover:text-foreground"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Container>
                    ))}
                </div>
            </div>

            <Container delay={0.4} className="mt-14 w-full">
                <a
                    href={SITE.infraUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-start justify-between gap-3 rounded-2xl border border-border/60 bg-card/30 p-6 transition-colors hover:border-border sm:flex-row sm:items-center"
                >
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                            Site institucional
                        </p>
                        <p className="mt-1 font-heading text-base font-semibold text-foreground">
                            {CTA_INFRA_LABEL}
                        </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                        {SITE.domain}
                        <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                </a>
            </Container>

            <Container delay={0.5} className="relative mt-12 w-full lg:mt-16">
                <div className="footer flex w-full flex-col items-center justify-between gap-3 border-t border-foreground/5 pt-8 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
                    </p>
                    <p className="text-sm text-muted-foreground">{SITE.hours}</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
