import { SERVICES } from "./services";
import { SOLUTIONS } from "./solutions";
import { INFRASTRUCTURE } from "./infrastructure";

export type NavChild = {
    name: string;
    href: string;
    description: string;
    icon: string;
};

/** grupo do mega menu dinâmico de Soluções */
export type SolutionGroup = {
    id: string;
    label: string;
    eyebrow: string;
    description: string;
    /** ícone lucide para o painel dinâmico */
    icon: string;
    accentFrom: string;
    accentTo: string;
    overviewHref: string;
    overviewLabel: string;
    items: { name: string; href: string; icon: string }[];
};

export type NavItem = {
    name: string;
    href: string;
    /** mega menu simples (colunas de itens) */
    megaMenu?: {
        heading: string;
        blurb: string;
        overviewHref: string;
        overviewLabel: string;
        columns: { title: string; items: NavChild[] }[];
    };
    /** mega menu dinâmico (grupos + painel que troca no hover) */
    solutionsMenu?: {
        overviewHref: string;
        overviewLabel: string;
        groups: SolutionGroup[];
    };
};

const servicesChildren: NavChild[] = SERVICES.map((s) => ({
    name: s.name,
    href: `/servicos/${s.slug}`,
    description: s.menuDescription,
    icon: s.icon,
}));

const asItems = (list: typeof SERVICES, base: string) =>
    list.map((s) => ({ name: s.name, href: `${base}/${s.slug}`, icon: s.icon }));

export const SOLUTION_GROUPS: SolutionGroup[] = [
    {
        id: "servicos-gerenciados",
        label: "Serviços Gerenciados",
        eyebrow: "TI operada",
        description:
            "A Oliver assume o dia a dia da sua TI: monitora, atende, protege e planeja — com SLA e relatório.",
        icon: "gauge",
        accentFrom: "#38bdf8",
        accentTo: "#3b82f6",
        overviewHref: "/msp",
        overviewLabel: "Conhecer o MSP",
        items: [
            { name: "MSP · Serviços Gerenciados", href: "/msp", icon: "gauge" },
            ...asItems(SERVICES, "/servicos"),
        ],
    },
    {
        id: "infraestrutura",
        label: "Infraestrutura",
        eyebrow: "Base física",
        description:
            "Infraestrutura tecnológica para ambientes corporativos, industriais e críticos — do caminho do cabo à certificação.",
        icon: "cable",
        accentFrom: "#22d3ee",
        accentTo: "#0891b2",
        overviewHref: "/infraestrutura",
        overviewLabel: "Ver Infraestrutura",
        items: asItems(INFRASTRUCTURE, "/infraestrutura"),
    },
    {
        id: "ambientes-projetos",
        label: "Ambientes e Projetos",
        eyebrow: "Turn-key",
        description:
            "Projetos completos de infraestrutura — consultoria, integração, execução e entrega — para data center e ambientes corporativos, industriais e logísticos.",
        icon: "building-2",
        accentFrom: "#818cf8",
        accentTo: "#4f46e5",
        overviewHref: "/infraestrutura",
        overviewLabel: "Ver Infraestrutura",
        items: [
            { name: "Data Center", href: "/infraestrutura/data-center", icon: "server" },
            { name: "Projetos Turn-Key", href: "/infraestrutura/projetos-turn-key", icon: "route" },
            { name: "Consultoria e Projetos", href: "/infraestrutura/projetos-turn-key", icon: "clipboard-check" },
            { name: "Ambientes atendidos", href: "/infraestrutura", icon: "building-2" },
        ],
    },
    {
        id: "tecnologia",
        label: "Tecnologia",
        eyebrow: "Plataformas",
        description:
            "Redes, servidores, nuvem, segurança e telecom projetados, implantados e sustentados sob o mesmo padrão de gestão.",
        icon: "network",
        accentFrom: "#f472b6",
        accentTo: "#db2777",
        overviewHref: "/solucoes",
        overviewLabel: "Ver soluções de tecnologia",
        items: asItems(SOLUTIONS, "/solucoes"),
    },
];

export const NAV_LINKS: NavItem[] = [
    { name: "MSP", href: "/msp" },
    {
        name: "Serviços",
        href: "/servicos",
        megaMenu: {
            heading: "Serviços Gerenciados",
            blurb: "Operação de TI contínua, com SLA, do primeiro chamado à governança.",
            overviewHref: "/servicos",
            overviewLabel: "Ver todos os serviços",
            columns: [
                { title: "Central de serviços", items: servicesChildren.slice(0, 4) },
                { title: "Proteção e campo", items: servicesChildren.slice(4) },
            ],
        },
    },
    {
        name: "Soluções",
        href: "/solucoes",
        solutionsMenu: {
            overviewHref: "/solucoes",
            overviewLabel: "Conheça todas as soluções",
            groups: SOLUTION_GROUPS,
        },
    },
    { name: "Planos", href: "/planos" },
    { name: "Como funciona", href: "/como-funciona" },
    { name: "A Oliver", href: "/empresa" },
    { name: "Contato", href: "/contato" },
];

export const FOOTER_NAV = [
    {
        title: "Serviços Gerenciados",
        links: [
            { name: "MSP", href: "/msp" },
            ...SERVICES.map((s) => ({ name: s.name, href: `/servicos/${s.slug}` })),
        ],
    },
    {
        title: "Infraestrutura",
        links: [
            { name: "Infraestrutura", href: "/infraestrutura" },
            ...INFRASTRUCTURE.map((s) => ({ name: s.name, href: `/infraestrutura/${s.slug}` })),
            { name: "Data Center", href: "/infraestrutura/data-center" },
            { name: "Projetos Turn-Key", href: "/infraestrutura/projetos-turn-key" },
        ],
    },
    {
        title: "Soluções de Tecnologia",
        links: SOLUTIONS.map((s) => ({ name: s.name, href: `/solucoes/${s.slug}` })),
    },
    {
        title: "Empresa",
        links: [
            { name: "Planos", href: "/planos" },
            { name: "Como funciona", href: "/como-funciona" },
            { name: "A Oliver", href: "/empresa" },
            { name: "FAQ", href: "/faq" },
            { name: "Contato", href: "/contato" },
        ],
    },
];
