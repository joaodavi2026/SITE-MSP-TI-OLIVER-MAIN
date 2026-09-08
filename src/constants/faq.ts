export type FaqItem = {
    id: string;
    question: string;
    answer: string;
    group: "MSP" | "Operação" | "Infraestrutura" | "Contato";
};

export const FAQ: FaqItem[] = [
    {
        id: "o-que-e-msp",
        group: "MSP",
        question: "O que é MSP?",
        answer:
            "MSP (Managed Service Provider) é o modelo em que uma empresa terceirizada assume a operação contínua da sua TI — monitoramento, suporte, segurança, gestão e planejamento — em vez de aparecer só quando algo quebra. A Oliver Network atua como o MSP da sua empresa, com processo, ferramenta, indicador e SLA.",
    },
    {
        id: "msp-vs-suporte-tradicional",
        group: "MSP",
        question: "Qual a diferença entre MSP e suporte tradicional?",
        answer:
            "O suporte tradicional é reativo: você aciona quando o problema já aconteceu e a operação já parou. O MSP é proativo: o ambiente é monitorado 24/7, os sinais de risco são tratados antes de virar incidente e o atendimento tem prazo acordado. Você troca a hora emergencial imprevisível por um valor mensal com escopo claro.",
    },
    {
        id: "atendimento-remoto",
        group: "Operação",
        question: "A Oliver atende remotamente?",
        answer:
            "Sim. A maior parte dos chamados é resolvida remotamente, em minutos, pelo primeiro nível de atendimento. O acesso remoto é seguro, registrado e sempre autorizado pelo usuário.",
    },
    {
        id: "atendimento-presencial",
        group: "Operação",
        question: "A Oliver faz atendimento presencial?",
        answer:
            "Sim, através do Field Service. Quando o problema exige mão na infraestrutura — hardware, cabeamento, um novo ponto de rede, mudança de endereço — um técnico vai até o local com escopo definido, checklist e reporte no mesmo sistema de chamados.",
    },
    {
        id: "como-funciona-monitoramento",
        group: "Operação",
        question: "Como funciona o monitoramento?",
        answer:
            "Uma plataforma instalada em todo o parque coleta centenas de indicadores em tempo real: servidores, estações, rede, serviços, disco, memória, backups. Regras de alerta acionam a equipe da Oliver automaticamente, e boa parte das correções é feita por automação, sem abrir chamado. Você recebe o resumo mensal de disponibilidade.",
    },
    {
        id: "o-que-e-service-desk",
        group: "Operação",
        question: "O que é Service Desk?",
        answer:
            "O Service Desk é o ponto único de contato entre os usuários e a TI. Toda solicitação entra por um só canal, é registrada, classificada por prioridade e SLA, e conduzida por um fluxo definido com escalonamento entre os níveis N1, N2 e N3. Ele garante que nenhum chamado fique sem dono.",
    },
    {
        id: "como-funciona-sla",
        group: "Operação",
        question: "Como funciona o SLA?",
        answer:
            "O SLA (acordo de nível de serviço) define, por prioridade de chamado, o prazo máximo para a primeira resposta e para a solução. Ele é acordado no início do contrato, medido em todo atendimento e reportado no relatório mensal. Chamados críticos têm os prazos mais curtos.",
    },
    {
        id: "varias-unidades",
        group: "Operação",
        question: "A Oliver atende empresas com várias unidades?",
        answer:
            "Sim. A operação foi desenhada para ambientes distribuídos: usuários remotos, filiais, lojas, centros logísticos e indústrias. O Field Service leva o mesmo padrão de execução a todas as unidades, e o inventário e os chamados ficam centralizados.",
    },
    {
        id: "field-service",
        group: "Operação",
        question: "Vocês trabalham com Field Service?",
        answer:
            "Sim. O Field Service cobre instalação, troca de equipamento, IMAC (instalar, mover, adicionar, alterar), cabeamento, Wi-Fi, CFTV, Service Request e apoio a eventos — sempre com escopo, checklist, laudo e registro no sistema de chamados.",
    },
    {
        id: "infraestrutura",
        group: "Infraestrutura",
        question: "A Oliver também cuida de infraestrutura?",
        answer:
            "Sim. Além dos serviços gerenciados, a Oliver Network tem uma frente dedicada de Infraestrutura: cabeamento estruturado, fibra óptica, infraestrutura seca, organização de racks, certificação de rede, CFTV, elétrica de TI e projetos turn-key para data center e ambientes corporativos e industriais.",
    },
    {
        id: "diferenca-msp-infra",
        group: "Infraestrutura",
        question: "Qual a relação entre o MSP e a Infraestrutura da Oliver?",
        answer:
            "São dois ecossistemas da mesma empresa. A Infraestrutura constrói e certifica a base física — cabeamento, energia, racks, redes. O MSP opera o ambiente no dia a dia — monitora, atende, protege e planeja. Uma empresa pode contratar as duas frentes ou apenas uma, com o mesmo interlocutor.",
    },
    {
        id: "falar-com-especialista",
        group: "Contato",
        question: "Como falar com um especialista?",
        answer:
            "Você pode preencher o formulário na página de Contato, escrever para contato@olivernetwork.com.br ou falar diretamente pelo WhatsApp. O primeiro passo é um diagnóstico gratuito do seu ambiente, sem compromisso de contratação.",
    },
];

export const FAQ_GROUPS: FaqItem["group"][] = ["MSP", "Operação", "Infraestrutura", "Contato"];
