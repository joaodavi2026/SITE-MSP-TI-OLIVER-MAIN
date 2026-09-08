import ServiceDetail from "@/components/marketing/service-detail";
import { INFRASTRUCTURE, getInfrastructure } from "@/constants";
import { generateMetadata as buildMetadata } from "@/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Params {
    params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
    return INFRASTRUCTURE.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const item = getInfrastructure(slug);
    if (!item) return buildMetadata({ title: "Página não encontrada", noIndex: true });
    return buildMetadata({
        title: `${item.name} — Infraestrutura de TI`,
        description: item.heroDescription,
        path: `/infraestrutura/${item.slug}`,
    });
}

const InfraPage = async ({ params }: Params) => {
    const { slug } = await params;
    const item = getInfrastructure(slug);
    if (!item) notFound();

    return (
        <ServiceDetail
            service={item}
            allItems={INFRASTRUCTURE}
            basePath="/infraestrutura"
            categoryLabel="Infraestrutura"
            overviewHref="/infraestrutura"
            overviewLabel="Infraestrutura"
            navLabel="Outros serviços de infraestrutura"
        />
    );
};

export default InfraPage;
