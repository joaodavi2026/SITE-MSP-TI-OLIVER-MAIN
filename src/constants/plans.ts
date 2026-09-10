export type PLAN = {
    id: string;
    title: string;
    desc: string;
    /** displayed price value */
    price: string;
    priceUnit: string;
    priceNote: string;
    badge?: string;
    buttonText: string;
    highlight?: boolean;
    features: string[];
    inheritsFrom?: string;
};

export const PLANS: PLAN[] = [
    {
        id: "essencial",
        title: "Essencial",
        desc: "Monitoramento e gestão contínuos para manter o ambiente sob controle, com atendimento sob demanda.",
        price: "R$ 300",
        priceUnit: "/mês",
        priceNote: "a partir de — atendimento cobrado por hora",
        buttonText: "Falar sobre o Essencial",
        features: [
            "Monitoramento contínuo 24/7",
            "Inventário automatizado de ativos",
            "Gestão de patches e atualizações",
            "Relatório mensal do ambiente",
            "Atendimento seg. a sex., 07h às 19h",
            "Atendimento cobrado por hora",
        ],
    },
    {
        id: "profissional",
        title: "Profissional",
        desc: "Para equipes que precisam de suporte ilimitado, presença em campo e detecção avançada nos servidores.",
        price: "R$ 75",
        priceUnit: "/usuário/mês",
        priceNote: "a partir de — inclui tudo do Essencial",
        badge: "Mais escolhido",
        highlight: true,
        buttonText: "Falar sobre o Profissional",
        inheritsFrom: "Essencial",
        features: [
            "Suporte remoto ilimitado",
            "Atendimento presencial ilimitado",
            "EDR em servidores",
            "Prioridade no atendimento",
        ],
    },
    {
        id: "premium",
        title: "Premium",
        desc: "Gestão de TI completa: um gestor dedicado, planejamento tecnológico e governança conduzindo o ambiente.",
        price: "R$ 109",
        priceUnit: "/usuário/mês",
        priceNote: "a partir de — inclui tudo do Profissional",
        buttonText: "Falar sobre o Premium",
        inheritsFrom: "Profissional",
        features: [
            "Visita mensal de Gestor de TI",
            "Planejamento tecnológico anual",
            "Infraestrutura programada",
            "Governança de TI",
            "Segurança avançada",
        ],
    },
];

export const PLANS_FAQ = [
    {
        id: 1,
        question: "Como é feita a cobrança por usuário?",
        answer:
            "Nos planos Profissional e Premium, o valor mensal é multiplicado pelo número de usuários ativos de TI da empresa — pessoas com estação de trabalho, e-mail e acesso aos sistemas. Servidores, links e dispositivos de rede entram no escopo do plano sem contagem por usuário.",
    },
    {
        id: 2,
        question: "O plano Essencial atende chamados?",
        answer:
            "Sim. O Essencial mantém o ambiente monitorado, inventariado e atualizado, e os chamados de suporte são atendidos sob demanda, cobrados por hora técnica. Empresas que abrem chamados com frequência costumam migrar para o Profissional, onde o suporte é ilimitado.",
    },
    {
        id: 3,
        question: "Existe fidelidade ou prazo mínimo de contrato?",
        answer:
            "Trabalhamos com contrato de 12 meses para viabilizar o planejamento e o investimento inicial de onboarding. As condições são apresentadas na proposta, após o diagnóstico do ambiente.",
    },
    {
        id: 4,
        question: "Como funciona a transição do meu suporte atual?",
        answer:
            "O onboarding começa com um diagnóstico completo: inventário, mapeamento de acessos, documentação e identificação de riscos. A partir dele, a Oliver assume a operação de forma gradual, sem interromper o dia a dia da empresa.",
    },
    {
        id: 5,
        question: "Os planos incluem licenças de software e hardware?",
        answer:
            "Os planos cobrem a gestão, o monitoramento e o suporte. Licenças (Microsoft 365, EDR, backup) e equipamentos são orçados à parte, com a Oliver conduzindo a compra, a padronização e o ciclo de vida no plano Premium.",
    },
    {
        id: 6,
        question: "Atendem empresas de qualquer porte?",
        answer:
            "Atendemos pequenas e médias empresas. O plano ideal depende do número de usuários, da criticidade da operação e da existência ou não de equipe de TI interna — algo que definimos juntos no diagnóstico.",
    },
];
