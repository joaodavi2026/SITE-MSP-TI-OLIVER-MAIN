import { Metadata } from "next";
import { SITE } from "@/constants/site";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    path?: string;
    type?: "website" | "article" | "profile";
}

const DEFAULT_TITLE = `${SITE.name} | Serviços Gerenciados de TI e Infraestrutura`;
const DEFAULT_DESCRIPTION = SITE.description;

const DEFAULT_KEYWORDS = [
    "MSP de TI",
    "serviços gerenciados de TI",
    "Service Desk",
    "suporte técnico empresarial",
    "monitoramento de TI",
    "infraestrutura de TI",
    "cabeamento estruturado",
    "data center",
    "field service",
    "terceirização de TI",
];

export const generateMetadata = ({
    title,
    description = DEFAULT_DESCRIPTION,
    icons = [
        { rel: "icon", url: "/icons/icon-dark.png", media: "(prefers-color-scheme: light)" },
        { rel: "icon", url: "/icons/icon.png", media: "(prefers-color-scheme: dark)" },
    ],
    noIndex = false,
    keywords = DEFAULT_KEYWORDS,
    path = "/",
    type = "website",
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(SITE.url);
    const resolvedTitle = title ? `${title} | ${SITE.name}` : DEFAULT_TITLE;
    const url = new URL(path, SITE.url).toString();

    return {
        metadataBase,
        title: resolvedTitle,
        description,
        keywords,
        applicationName: SITE.name,
        authors: [{ name: SITE.name }],
        creator: SITE.name,
        publisher: SITE.name,
        alternates: { canonical: url },
        formatDetection: { email: false, address: false, telephone: false },
        icons,
        robots: noIndex
            ? { index: false, follow: false }
            : { index: true, follow: true },
        openGraph: {
            type,
            locale: "pt_BR",
            url,
            siteName: SITE.name,
            title: resolvedTitle,
            description,
        },
        twitter: {
            card: "summary_large_image",
            title: resolvedTitle,
            description,
        },
    };
};
