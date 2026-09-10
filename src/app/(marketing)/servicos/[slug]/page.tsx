import ServiceDetail from "@/components/marketing/service-detail";
import { SERVICES, getService } from "@/constants";
import { generateMetadata as buildMetadata } from "@/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Params {
    params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
    return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const service = getService(slug);
    if (!service) return buildMetadata({ title: "Serviço não encontrado", noIndex: true });
    return buildMetadata({
        title: `${service.name} — Serviços Gerenciados de TI`,
        description: service.heroDescription,
        path: `/servicos/${service.slug}`,
    });
}

const ServicePage = async ({ params }: Params) => {
    const { slug } = await params;
    const service = getService(slug);
    if (!service) notFound();

    return (
        <ServiceDetail
            service={service}
            allItems={SERVICES}
            basePath="/servicos"
            categoryLabel="Serviço gerenciado"
            overviewHref="/servicos"
            overviewLabel="Serviços"
            navLabel="Outros serviços"
        />
    );
};

export default ServicePage;
