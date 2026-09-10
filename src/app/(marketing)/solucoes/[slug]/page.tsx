import ServiceDetail from "@/components/marketing/service-detail";
import { SOLUTIONS, getSolution } from "@/constants";
import { generateMetadata as buildMetadata } from "@/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Params {
    params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
    return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const solution = getSolution(slug);
    if (!solution) return buildMetadata({ title: "Solução não encontrada", noIndex: true });
    return buildMetadata({
        title: `${solution.name} — Soluções de TI`,
        description: solution.heroDescription,
        path: `/solucoes/${solution.slug}`,
    });
}

const SolutionPage = async ({ params }: Params) => {
    const { slug } = await params;
    const solution = getSolution(slug);
    if (!solution) notFound();

    return (
        <ServiceDetail
            service={solution}
            allItems={SOLUTIONS}
            basePath="/solucoes"
            categoryLabel="Solução por tecnologia"
            overviewHref="/solucoes"
            overviewLabel="Soluções"
            navLabel="Outras soluções"
        />
    );
};

export default SolutionPage;
