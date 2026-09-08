import type { Service } from "./services";

/** Soluções de tecnologia — reutilizam o shape de Service para compartilhar o template. */
export const SOLUTIONS: Service[] = [
    {
        slug: "redes",
        name: "Redes",
        shortName: "Redes",
        menuDescription: "LAN, Wi-Fi, firewall e links projetados, segmentados e monitorados.",
        tagline: "Rede boa é a que ninguém percebe.",
        icon: "network",
        accentFrom: "#22d3ee",
        accentTo: "#0891b2",
        heroDescription:
            "Projeto e operação de rede corporativa: segmentação, Wi-Fi de cobertura real, firewall com regras revisadas, VPN e redundância de link — tudo monitorado.",
        what: "A Oliver projeta e sustenta a rede local e de perímetro: VLANs por função, Wi-Fi dimensionado por planta, firewall com política revisada, acesso remoto seguro e failover de link. O comportamento da rede entra no monitoramento 24/7.",
        whoFor: [
            "Empresas com Wi-Fi instável ou pontos cegos",
            "Operações com uma rede plana, sem segmentação",
            "Negócios com filiais que precisam de link e VPN confiáveis",
            "Ambientes com firewall sem revisão de regras há anos",
        ],
        problem:
            "Rede plana, Wi-Fi doméstico reaproveitado e firewall com regras acumuladas: lentidão intermitente, difícil de diagnosticar e com um dispositivo infectado alcançando tudo.",
        problemPoints: [
            "Rede sem segmentação: tudo enxerga tudo",
            "Wi-Fi com cobertura e capacidade insuficientes",
            "Regras de firewall antigas e sem dono",
            "Queda de link sem caminho alternativo",
        ],
        approach: [
            { title: "Projeto", description: "Levantamento de planta e demanda, plano de VLANs, endereçamento e cobertura Wi-Fi." },
            { title: "Implantação", description: "Segmentação, ajuste de firewall, VPN, QoS e redundância de link com janela planejada." },
            { title: "Operação", description: "Monitoramento de disponibilidade e desempenho, revisão periódica de regras e capacidade." },
        ],
        benefits: [
            { title: "Estabilidade", description: "Menos queda e lentidão, com causa identificada por monitoramento, não por tentativa." },
            { title: "Contenção", description: "Segmentação limita o alcance de um dispositivo comprometido." },
            { title: "Cobertura real", description: "Wi-Fi dimensionado para a planta e para o número de dispositivos." },
            { title: "Continuidade", description: "Failover de link mantém a operação quando a operadora cai." },
        ],
        howItWorks: [
            { label: "01", title: "Diagnóstico", description: "Mapa da rede atual, medição de Wi-Fi e revisão de regras de firewall." },
            { label: "02", title: "Projeto", description: "Desenho de segmentação, endereçamento, cobertura e redundância." },
            { label: "03", title: "Execução", description: "Implantação em janela, com validação de cada segmento e ponto de acesso." },
            { label: "04", title: "Sustentação", description: "Monitoramento contínuo e revisão periódica de regras e capacidade." },
        ],
        metrics: [
            { value: "VLANs", label: "por função, não rede plana" },
            { value: "24/7", label: "monitoramento de link e Wi-Fi" },
            { value: "failover", label: "de link para operação contínua" },
        ],
    },
    {
        slug: "servidores",
        name: "Servidores",
        shortName: "Servidores",
        menuDescription: "Provisionamento, hardening, atualização e monitoramento de servidores.",
        tagline: "O servidor que sustenta o ERP merece mais que 'está ligado'.",
        icon: "server",
        accentFrom: "#818cf8",
        accentTo: "#4f46e5",
        heroDescription:
            "Ciclo de vida de servidores físicos e virtuais: build padronizado, hardening, patch em janela, monitoramento e plano de recuperação testado.",
        what: "A Oliver provisiona, endurece e mantém os servidores que rodam ERP, banco de dados, arquivos e aplicações. Cada servidor segue um build de referência, recebe patch em janela controlada, é monitorado em tempo real e tem procedimento de recuperação documentado e testado.",
        whoFor: [
            "Empresas com servidores locais ou em nuvem privada",
            "Operações com ERP e banco de dados críticos",
            "Ambientes com servidores em versões fora de suporte",
            "Quem sofre com patch aplicado sem planejamento",
        ],
        problem:
            "Servidores configurados de formas diferentes, sem patch por medo de quebrar, sem monitoramento de capacidade e sem procedimento de recuperação. A manutenção é sempre um risco calculado no escuro.",
        problemPoints: [
            "Builds divergentes, sem configuração de referência",
            "Patches atrasados por falta de janela e de teste",
            "Sem alerta de disco, memória ou serviço parado",
            "Recuperação sem procedimento — e nunca testada",
        ],
        approach: [
            { title: "Padronizar o build", description: "Configuração de referência, hardening e documentação para cada papel de servidor." },
            { title: "Manter em dia", description: "Patch em janela acordada, com validação pós-atualização e rollback previsto." },
            { title: "Vigiar e recuperar", description: "Monitoramento 24/7 de recursos e serviços, com plano de recuperação testado." },
        ],
        benefits: [
            { title: "Atualização sem medo", description: "Patch em janela, testado, com caminho de volta definido." },
            { title: "Falha antecipada", description: "Alerta de capacidade e de serviço antes de virar indisponibilidade." },
            { title: "Recuperação real", description: "Procedimento documentado e testado, com tempo de retorno conhecido." },
            { title: "Padrão de operação", description: "Qualquer técnico da Oliver assume o servidor sem depender de quem instalou." },
        ],
        howItWorks: [
            { label: "01", title: "Inventário", description: "Estado, versão e papel de cada servidor do ambiente." },
            { label: "02", title: "Padronização", description: "Build de referência, hardening e documentação aplicados." },
            { label: "03", title: "Manutenção", description: "Ciclo de patch em janela e monitoramento contínuo." },
            { label: "04", title: "Continuidade", description: "Plano de recuperação testado por servidor crítico." },
        ],
        metrics: [
            { value: "build", label: "de referência por papel de servidor" },
            { value: "janela", label: "planejada para todo patch" },
            { value: "24/7", label: "monitoramento de recurso e serviço" },
        ],
    },
    {
        slug: "cloud",
        name: "Cloud",
        shortName: "Cloud",
        menuDescription: "Migração, gestão de custo e operação de ambientes em nuvem.",
        tagline: "Nuvem sem gestão é a mesma conta, com fatura pior.",
        icon: "cloud",
        accentFrom: "#60a5fa",
        accentTo: "#3b82f6",
        heroDescription:
            "Avaliação, migração e operação de cargas em nuvem pública ou híbrida, com controle de custo, identidade, backup e monitoramento desde o primeiro dia.",
        what: "A Oliver conduz o que faz sentido levar para a nuvem — e o que não faz — com plano de migração, arquitetura de identidade e rede, política de custo, backup e monitoramento. O ambiente nasce governado, não improvisado.",
        whoFor: [
            "Empresas avaliando sair do servidor local",
            "Operações com nuvem já contratada e custo fora de controle",
            "Quem precisa de ambiente híbrido durante a transição",
            "Negócios que querem elasticidade sem perder governança",
        ],
        problem:
            "Migrações feitas às pressas levam o problema junto: máquinas superdimensionadas, sem controle de custo, identidade frouxa e sem backup. A fatura cresce e a governança não acompanha.",
        problemPoints: [
            "Recursos superdimensionados e ligados sem uso",
            "Sem controle de custo por área ou projeto",
            "Identidade e rede replicando as falhas do ambiente local",
            "Ausência de backup e de monitoramento nativo",
        ],
        approach: [
            { title: "Avaliar e planejar", description: "Análise de cargas, custo total e risco. Plano de migração por ondas, com o que permanece local." },
            { title: "Migrar com arquitetura", description: "Identidade, rede, controle de custo, backup e monitoramento definidos antes de mover a primeira carga." },
            { title: "Operar e otimizar", description: "Acompanhamento de custo, revisão de dimensionamento, patch e segurança na rotina do MSP." },
        ],
        benefits: [
            { title: "Custo visível", description: "Rateio por área e projeto, com alerta de desvio e revisão mensal." },
            { title: "Migração sem sobressalto", description: "Ondas planejadas, com validação e rollback a cada etapa." },
            { title: "Governança nativa", description: "Identidade, backup e monitoramento configurados desde o início." },
            { title: "Elasticidade útil", description: "Capacidade que acompanha a demanda sem desperdício permanente." },
        ],
        howItWorks: [
            { label: "01", title: "Avaliação", description: "Inventário de cargas, custo atual e critérios de migração." },
            { label: "02", title: "Base na nuvem", description: "Fundação de identidade, rede, custo e segurança." },
            { label: "03", title: "Migração", description: "Movimentação por ondas, com teste e validação de cada carga." },
            { label: "04", title: "Otimização", description: "Revisão contínua de custo e dimensionamento." },
        ],
        metrics: [
            { value: "por ondas", label: "migração validada etapa a etapa" },
            { value: "mensal", label: "revisão de custo e dimensionamento" },
            { value: "dia 1", label: "backup e monitoramento ativos" },
        ],
    },
    {
        slug: "ciberseguranca",
        name: "Cibersegurança",
        shortName: "Cibersegurança",
        menuDescription: "Programa de segurança: prevenção, detecção e resposta contínuas.",
        tagline: "Segurança é programa, não produto.",
        icon: "lock",
        accentFrom: "#f472b6",
        accentTo: "#db2777",
        heroDescription:
            "Programa contínuo alinhado a boas práticas de mercado: avaliação de risco, hardening, EDR, gestão de vulnerabilidade, conscientização e resposta a incidentes.",
        what: "A visão de segurança que amarra os serviços da Oliver em um programa: inventário e classificação, gestão de vulnerabilidades com prazo de correção, EDR e monitoramento, política e conscientização de usuários, testes e um plano de resposta a incidentes exercitado. Segurança medida por indicador, revisada em ciclo.",
        whoFor: [
            "Empresas que precisam demonstrar segurança a clientes",
            "Operações sujeitas a LGPD e a auditorias recorrentes",
            "Negócios que já tiveram incidente e não querem repetir",
            "Quem tem ferramentas de segurança soltas, sem programa",
        ],
        problem:
            "Ferramentas compradas de forma avulsa não formam defesa: ninguém prioriza vulnerabilidade, o usuário não é treinado e o plano de resposta não existe ou nunca foi testado.",
        problemPoints: [
            "Vulnerabilidades conhecidas sem prazo de correção",
            "Usuários sem treino: phishing entra pela porta da frente",
            "Ferramentas sem integração nem responsável",
            "Plano de resposta inexistente ou só no papel",
        ],
        approach: [
            { title: "Conhecer o risco", description: "Inventário, classificação de dados e avaliação de risco para priorizar o esforço onde dói." },
            { title: "Reduzir e detectar", description: "Hardening, gestão de vulnerabilidade com prazo de correção, EDR e monitoramento contínuo." },
            { title: "Preparar a resposta", description: "Política, conscientização, testes e um plano de incidentes exercitado periodicamente." },
        ],
        benefits: [
            { title: "Esforço priorizado", description: "Correção guiada por risco real, não por lista infinita sem ordem." },
            { title: "Usuário como defesa", description: "Programa de conscientização com simulação de phishing e métrica de evolução." },
            { title: "Resposta ensaiada", description: "Plano testado: papéis, comunicação e contenção definidos antes do incidente." },
            { title: "Evidência de maturidade", description: "Indicadores e relatórios que sustentam contratos e auditorias." },
        ],
        howItWorks: [
            { label: "01", title: "Avaliação", description: "Risco, superfície de exposição e maturidade atual do ambiente." },
            { label: "02", title: "Plano", description: "Roadmap de segurança priorizado por risco e por esforço." },
            { label: "03", title: "Operação", description: "Vulnerabilidade, EDR, conscientização e monitoramento em ciclo." },
            { label: "04", title: "Exercício", description: "Testes e simulação de incidente com revisão do plano de resposta." },
        ],
        metrics: [
            { value: "prazo", label: "de correção por severidade de vulnerabilidade" },
            { value: "trimestral", label: "simulação de phishing e revisão de risco" },
            { value: "1 plano", label: "de resposta testado, não só escrito" },
        ],
    },
    {
        slug: "telefonia-ip",
        name: "Telefonia IP",
        shortName: "Telefonia IP",
        menuDescription: "PABX em nuvem, ramais, filas e integração com a operação.",
        tagline: "A ligação também é infraestrutura.",
        icon: "phone",
        accentFrom: "#2dd4bf",
        accentTo: "#0d9488",
        heroDescription:
            "Implantação e gestão de telefonia IP: PABX em nuvem ou local, ramais, filas de atendimento, gravação, portabilidade e QoS na rede.",
        what: "A Oliver projeta e opera a telefonia IP da empresa integrada à rede de dados: dimensionamento de links e QoS, plano de ramais e filas, URA, gravação de chamadas quando exigido, e continuidade com rota alternativa. A telefonia deixa de ser um contrato solto e entra na mesma gestão da TI.",
        whoFor: [
            "Empresas migrando de linhas analógicas ou PABX legado",
            "Operações com call center, recepção ou filas de atendimento",
            "Negócios com várias unidades que precisam de ramais integrados",
            "Quem sofre com qualidade de voz ruim na rede atual",
        ],
        problem:
            "Telefonia tratada à parte da TI gera qualidade de voz instável, ramais que não conversam entre unidades e nenhum plano para quando a operadora ou o link cai.",
        problemPoints: [
            "Voz concorrendo com dados na rede, sem QoS",
            "PABX legado sem suporte e sem integração",
            "Unidades com numeração e ramais isolados",
            "Sem rota alternativa em caso de queda",
        ],
        approach: [
            { title: "Dimensionar", description: "Análise de tráfego de voz, link, QoS e plano de numeração e filas." },
            { title: "Implantar", description: "PABX em nuvem ou local, ramais, URA, gravação e portabilidade com janela planejada." },
            { title: "Sustentar", description: "Monitoramento de qualidade de chamada e rota de contingência para queda de link." },
        ],
        benefits: [
            { title: "Voz estável", description: "QoS na rede prioriza a chamada e reduz falha e cortes." },
            { title: "Unidades integradas", description: "Ramais e transferências entre filiais como se fossem um só andar." },
            { title: "Continuidade", description: "Rota alternativa mantém o atendimento quando o link principal cai." },
            { title: "Gestão única", description: "Telefonia na mesma governança e no mesmo chamado da TI." },
        ],
        howItWorks: [
            { label: "01", title: "Levantamento", description: "Tráfego de voz, links, numeração e requisitos de gravação." },
            { label: "02", title: "Projeto", description: "Plano de ramais, filas, URA e QoS na rede." },
            { label: "03", title: "Migração", description: "Portabilidade e ativação em janela, com teste por unidade." },
            { label: "04", title: "Operação", description: "Monitoramento de qualidade e ajuste contínuo." },
        ],
        metrics: [
            { value: "QoS", label: "priorizando voz na rede de dados" },
            { value: "multiunidade", label: "ramais integrados entre filiais" },
            { value: "rota alt.", label: "de contingência para queda de link" },
        ],
    },
    {
        slug: "conectividade",
        name: "Conectividade",
        shortName: "Conectividade",
        menuDescription: "Links, redundância, SD-WAN e gestão de operadoras.",
        tagline: "Internet é utilidade. Trate como energia.",
        icon: "wifi",
        accentFrom: "#38bdf8",
        accentTo: "#2563eb",
        heroDescription:
            "Projeto e gestão de conectividade: contratação e homologação de links, redundância com operadoras distintas, SD-WAN, e monitoramento de disponibilidade e latência.",
        what: "A Oliver intermedia e gerencia a conectividade da empresa: especifica e homologa links, monta redundância com operadoras diferentes, configura balanceamento ou SD-WAN e monitora disponibilidade, latência e perda de pacote — acionando a operadora quando o problema é dela, com histórico para cobrar SLA.",
        whoFor: [
            "Empresas onde a queda de internet para a operação",
            "Unidades remotas dependentes de um único link",
            "Negócios que dependem de sistemas em nuvem e VPN",
            "Quem perde tempo abrindo chamado com operadora sem histórico",
        ],
        problem:
            "Um único link, de uma única operadora, sem monitoramento: quando cai, a empresa para e o chamado com a operadora começa do zero, sem evidência de indisponibilidade.",
        problemPoints: [
            "Link único como ponto de falha da operação",
            "Sem medição de disponibilidade e latência",
            "Chamado com operadora sem histórico para cobrar SLA",
            "Reconfiguração manual e demorada quando o link cai",
        ],
        approach: [
            { title: "Especificar", description: "Requisitos de banda, latência e SLA por unidade; escolha de operadoras e tecnologias." },
            { title: "Redundar", description: "Dois caminhos por operadoras distintas, com balanceamento ou SD-WAN e failover automático." },
            { title: "Monitorar", description: "Disponibilidade, latência e perda de pacote medidas 24/7, com acionamento e histórico." },
        ],
        benefits: [
            { title: "Sem ponto único", description: "Queda de um link não para a operação — o tráfego migra sozinho." },
            { title: "SLA cobrável", description: "Histórico de indisponibilidade para exigir da operadora o que está em contrato." },
            { title: "Falha na origem", description: "A Oliver aciona a operadora antes de o usuário reclamar." },
            { title: "Filiais no padrão", description: "Mesma política de conectividade e redundância em toda unidade." },
        ],
        howItWorks: [
            { label: "01", title: "Requisitos", description: "Banda, latência e criticidade por unidade e por sistema." },
            { label: "02", title: "Contratação", description: "Escolha e homologação de links e operadoras." },
            { label: "03", title: "Redundância", description: "Balanceamento ou SD-WAN com failover automático." },
            { label: "04", title: "Operação", description: "Monitoramento 24/7 e gestão de incidentes com a operadora." },
        ],
        metrics: [
            { value: "2 caminhos", label: "por operadoras distintas" },
            { value: "24/7", label: "medição de disponibilidade e latência" },
            { value: "automático", label: "failover entre links" },
        ],
    },
];

export const getSolution = (slug: string) => SOLUTIONS.find((s) => s.slug === slug);
