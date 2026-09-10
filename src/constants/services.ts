export type ServiceStep = {
    title: string;
    description: string;
};

export type ServiceBenefit = {
    title: string;
    description: string;
};

export type ServicePhase = {
    label: string;
    title: string;
    description: string;
};

export type ServiceLevel = {
    tier: string;
    title: string;
    items: string[];
};

export type FlowNode = {
    label: string;
    caption: string;
};

export type Service = {
    slug: string;
    name: string;
    shortName: string;
    menuDescription: string;
    tagline: string;
    /** lucide-react icon name, resolved in the icon map */
    icon: string;
    /** tailwind color stops used for accents / gradients */
    accentFrom: string;
    accentTo: string;
    heroDescription: string;
    what: string;
    whoFor: string[];
    problem: string;
    problemPoints: string[];
    approach: ServiceStep[];
    benefits: ServiceBenefit[];
    howItWorks: ServicePhase[];
    metrics: { value: string; label: string }[];
    /** opcional — níveis de atendimento (Service Desk) */
    levels?: ServiceLevel[];
    /** opcional — exemplo de fluxo animado (Service Desk, Field Service) */
    flow?: { title: string; nodes: FlowNode[] };
    /** opcional — aplicações típicas */
    applications?: string[];
};

export const SERVICES: Service[] = [
    {
        slug: "suporte-tecnico",
        name: "Suporte Técnico",
        shortName: "Suporte Técnico",
        menuDescription: "Atendimento remoto e presencial para manter as pessoas produtivas.",
        tagline: "Quando algo trava, alguém já está resolvendo.",
        icon: "headset",
        accentFrom: "#38bdf8",
        accentTo: "#3b82f6",
        heroDescription:
            "Central de atendimento com SLA definido, técnicos dedicados e histórico completo de cada chamado. O usuário abre o pedido e volta a trabalhar.",
        what: "Um ponto único de contato para toda a demanda de TI da sua empresa. Cada solicitação entra em uma fila priorizada, é tratada dentro de um prazo acordado e fica registrada com solução, responsável e tempo de resposta. Nada se perde em conversa de corredor ou grupo de mensagens.",
        whoFor: [
            "Empresas sem equipe de TI interna",
            "Times de TI que precisam de um primeiro nível de atendimento",
            "Operações com filiais e usuários remotos",
            "Negócios em que a parada de um usuário custa caro",
        ],
        problem:
            "Sem um canal formal, o chamado vira mensagem solta, o técnico é interrompido a todo momento e ninguém sabe quanto tempo um problema levou para ser resolvido — nem se ele vai voltar.",
        problemPoints: [
            "Solicitações perdidas entre e-mails e mensagens",
            "Nenhuma prioridade: tudo é urgente ao mesmo tempo",
            "Falta de histórico para identificar problemas recorrentes",
            "Usuário parado esperando resposta sem previsão",
        ],
        approach: [
            {
                title: "Canal único e triagem",
                description:
                    "Portal, e-mail e telefone conectados a uma fila só. Cada chamado recebe categoria, prioridade e prazo no momento da abertura.",
            },
            {
                title: "Resolução com SLA",
                description:
                    "O primeiro nível resolve a maioria dos casos remotamente em minutos. O que exige especialista é escalado sem o usuário precisar reabrir nada.",
            },
            {
                title: "Registro e causa raiz",
                description:
                    "Toda solução vira base de conhecimento. Chamados repetidos viram projeto de correção definitiva, não novo atendimento.",
            },
        ],
        benefits: [
            { title: "Previsibilidade", description: "Prazo acordado por prioridade e relatório mensal de cumprimento de SLA." },
            { title: "Menos interrupção", description: "A equipe interna deixa de ser parada no corredor e foca no que é estratégico." },
            { title: "Memória da operação", description: "Histórico por usuário, equipamento e setor para decisões baseadas em fato." },
            { title: "Escala sem contratar", description: "Picos de demanda absorvidos pela estrutura da Oliver, sem headcount novo." },
        ],
        howItWorks: [
            { label: "01", title: "Abertura", description: "O usuário registra o pedido pelo portal, e-mail ou telefone em segundos." },
            { label: "02", title: "Triagem", description: "Chamado classificado por impacto e urgência, com prazo visível para quem abriu." },
            { label: "03", title: "Atendimento", description: "Técnico assume, resolve remotamente ou aciona o campo e mantém o usuário informado." },
            { label: "04", title: "Encerramento", description: "Solução documentada, validação com o usuário e análise de recorrência." },
        ],
        metrics: [
            { value: "< 15 min", label: "1ª resposta em chamados críticos" },
            { value: "80%+", label: "resolvido no 1º nível" },
            { value: "100%", label: "chamados com histórico e SLA" },
        ],
    },
    {
        slug: "service-desk",
        name: "Service Desk",
        shortName: "Service Desk",
        menuDescription: "Ponto único de contato estruturado em ITIL, com N1, N2 e N3.",
        tagline: "Um chamado nunca fica sem dono.",
        icon: "life-buoy",
        accentFrom: "#60a5fa",
        accentTo: "#2563eb",
        heroDescription:
            "Central de serviços de TI organizada por processo: abertura, categorização, priorização, SLA, escalonamento por níveis, base de conhecimento e relatórios de satisfação.",
        what: "O Service Desk é o ponto único de contato entre os usuários e a TI. Toda solicitação — incidente, dúvida, acesso, requisição — entra por um só canal, é registrada, classificada e conduzida por um fluxo definido, com SLA acordado e escalonamento automático entre os níveis N1, N2 e N3. Enquanto o Suporte Técnico resolve, o Service Desk garante que o processo não dependa de quem atendeu.",
        whoFor: [
            "Empresas que já têm volume de chamados e precisam de organização",
            "Operações com auditoria, LGPD ou exigência de SLA em contrato",
            "Negócios com várias unidades e usuários distribuídos",
            "Times de TI que querem indicadores e previsibilidade de atendimento",
        ],
        problem:
            "Sem um Service Desk, o atendimento depende de memória e boa vontade: não há categorização, o SLA é informal, o escalonamento é um telefonema e ninguém consegue dizer quantos chamados houve no mês nem por quê.",
        problemPoints: [
            "Chamados sem categoria, prioridade ou prazo",
            "Escalonamento por relacionamento, não por processo",
            "Sem base de conhecimento: o mesmo problema é resolvido do zero toda vez",
            "Nenhum relatório de volume, SLA ou satisfação",
        ],
        approach: [
            {
                title: "Processo antes da ferramenta",
                description:
                    "Catálogo de serviços, matriz de prioridade, SLAs por categoria e regras de escalonamento definidos com a sua operação.",
            },
            {
                title: "Operação em níveis",
                description:
                    "N1 recebe e resolve o previsível; N2 assume o troubleshooting; N3 trata infraestrutura e projetos. A passagem entre níveis é registrada, não improvisada.",
            },
            {
                title: "Conhecimento e melhoria",
                description:
                    "Cada solução alimenta a base de conhecimento. Indicadores de volume, SLA e satisfação orientam automações e correções definitivas.",
            },
        ],
        benefits: [
            { title: "Chamado com dono", description: "Todo registro tem responsável, prazo e status visível — nada fica no limbo." },
            { title: "SLA medido", description: "Cumprimento de SLA por categoria e prioridade no relatório mensal." },
            { title: "Menos retrabalho", description: "Base de conhecimento e automações reduzem o tempo dos casos repetidos." },
            { title: "Visão gerencial", description: "Volume, tipos, reincidência e satisfação para planejar a operação de TI." },
        ],
        howItWorks: [
            { label: "01", title: "Registro", description: "Solicitação entra pelo portal, e-mail ou telefone e vira um chamado rastreável." },
            { label: "02", title: "Classificação", description: "Categoria, impacto, urgência e SLA definidos automaticamente pela regra do catálogo." },
            { label: "03", title: "Tratamento", description: "N1 resolve ou escala para N2/N3, sempre com o histórico anexo ao chamado." },
            { label: "04", title: "Fechamento", description: "Validação com o usuário, pesquisa de satisfação e registro na base de conhecimento." },
        ],
        metrics: [
            { value: "1", label: "ponto único de contato para toda a TI" },
            { value: "N1·N2·N3", label: "escalonamento estruturado e registrado" },
            { value: "mensal", label: "relatório de volume, SLA e satisfação" },
        ],
        levels: [
            {
                tier: "N1",
                title: "Atendimento inicial",
                items: [
                    "Dúvidas e uso de aplicações",
                    "Acessos, logins e senhas",
                    "Impressão e periféricos",
                    "Diagnóstico inicial e triagem",
                    "Backup e restauração de arquivos",
                    "Orientação pela base de conhecimento",
                ],
            },
            {
                tier: "N2",
                title: "Especialistas",
                items: [
                    "Troubleshooting de estações e servidores",
                    "Switches, firewall e storage",
                    "Redes cabeadas e sem fio",
                    "Acionamento e gestão de fornecedores",
                    "CFTV e sistemas de apoio",
                    "Correções que exigem mão técnica",
                ],
            },
            {
                tier: "N3",
                title: "Infraestrutura avançada",
                items: [
                    "Planejamento e projetos",
                    "Servidores, virtualização e Active Directory",
                    "Arquitetura de rede e firewall",
                    "Ambientes complexos e integrações",
                    "Mudanças de alto impacto em janela",
                    "Consultoria técnica para a diretoria",
                ],
            },
        ],
        flow: {
            title: "Um chamado, do início ao fim",
            nodes: [
                { label: "Novo chamado", caption: "\"Usuário sem acesso ao sistema\"" },
                { label: "N1", caption: "Triagem, diagnóstico inicial e tentativa de solução" },
                { label: "Escalonamento", caption: "N1 aciona N2 com todo o histórico anexo" },
                { label: "N2", caption: "Especialista identifica a causa e aplica a correção" },
                { label: "Resolução", caption: "Usuário validado e de volta à operação" },
                { label: "SLA cumprido", caption: "Registro na base de conhecimento e satisfação" },
            ],
        },
    },
    {
        slug: "monitoramento",
        name: "Monitoramento",
        shortName: "Monitoramento",
        menuDescription: "Observação 24/7 de servidores, rede e serviços — o alerta chega para a Oliver.",
        tagline: "Não espere sua equipe descobrir o problema.",
        icon: "activity",
        accentFrom: "#34d399",
        accentTo: "#10b981",
        heroDescription:
            "Monitoramento proativo de disponibilidade, performance e capacidade. Disco enchendo, serviço caído, backup falhando — tratado antes de virar parada.",
        what: "Uma plataforma de monitoramento instalada em todo o parque coleta centenas de indicadores em tempo real: servidores, estações, links, serviços, sites, espaço em disco, memória, processamento. Regras de alerta acionam a equipe da Oliver automaticamente e boa parte das correções é feita por automação, sem abrir chamado. Você recebe o resumo, não o susto.",
        whoFor: [
            "Empresas com servidores e serviços que não podem cair",
            "Operações 24/7 ou com turnos fora do horário comercial",
            "Ambientes com histórico de paradas inesperadas",
            "Quem quer trocar suporte reativo por prevenção",
        ],
        problem:
            "Sem monitoramento, o primeiro a detectar a falha é o usuário — quando o sistema já parou. O diagnóstico começa do zero e a pressão é máxima.",
        problemPoints: [
            "Falhas descobertas só quando o serviço já caiu",
            "Backups que falham silenciosamente por semanas",
            "Sem visão de capacidade: disco e memória estouram sem aviso",
            "Nenhuma métrica de disponibilidade para cobrar resultado",
        ],
        approach: [
            {
                title: "Instrumentação total",
                description:
                    "Agentes em servidores e estações, sensores de rede e checagem de serviços e sites externos. Tudo em um painel único.",
            },
            {
                title: "Alerta e automação",
                description:
                    "Limiares calibrados por ambiente. Eventos comuns — limpeza de disco, reinício de serviço, fila de atualização — resolvidos por rotina automática.",
            },
            {
                title: "Resposta proativa",
                description:
                    "O que a automação não cobre é assumido pela equipe da Oliver, muitas vezes antes de qualquer usuário perceber.",
            },
        ],
        benefits: [
            { title: "Parada evitada", description: "Incidentes tratados na origem, enquanto ainda são um alerta e não uma crise." },
            { title: "Visão de capacidade", description: "Tendência de disco, memória e processamento para planejar upgrade com antecedência." },
            { title: "Disponibilidade medida", description: "Relatório mensal de uptime dos ativos e serviços críticos." },
            { title: "Noites tranquilas", description: "Cobertura fora do horário comercial sem depender de alguém de plantão na sua empresa." },
        ],
        howItWorks: [
            { label: "01", title: "Descoberta", description: "Inventário automático do parque e definição do que é crítico para o negócio." },
            { label: "02", title: "Baseline", description: "Coleta de métricas por período para calibrar limiares reais, sem falso alarme." },
            { label: "03", title: "Operação", description: "Monitoramento 24/7, automações de correção e acionamento da equipe por severidade." },
            { label: "04", title: "Relatório", description: "Resumo mensal de eventos, disponibilidade e recomendações de capacidade." },
        ],
        metrics: [
            { value: "24/7", label: "olhando o seu ambiente" },
            { value: "300+", label: "pontos de verificação por ativo" },
            { value: "1 min", label: "intervalo de coleta em serviços críticos" },
        ],
        flow: {
            title: "Do normal ao resolvido",
            nodes: [
                { label: "Normal", caption: "Indicadores dentro do baseline" },
                { label: "Atenção", caption: "Métrica se aproxima do limiar" },
                { label: "Alerta", caption: "Regra dispara e aciona a Oliver" },
                { label: "Ação", caption: "Automação ou técnico intervém" },
                { label: "Resolvido", caption: "Ambiente estabilizado, sem parada" },
            ],
        },
    },
    {
        slug: "gestao-de-ti",
        name: "Gestão de TI",
        shortName: "Gestão de TI",
        menuDescription: "Um gestor de TI dedicado, planejamento e governança para o seu ambiente.",
        tagline: "Alguém pensando na sua TI o mês inteiro, não só quando quebra.",
        icon: "clipboard-check",
        accentFrom: "#818cf8",
        accentTo: "#6366f1",
        heroDescription:
            "Direção técnica contínua: roadmap tecnológico, orçamento, fornecedores, políticas e indicadores. A TI passa a ter dono e plano.",
        what: "A camada de decisão da sua TI, conduzida por um gestor da Oliver que conhece o seu negócio. Ele define prioridades, acompanha projetos, negocia com fornecedores, mantém as políticas atualizadas e traduz tecnologia em decisão para a diretoria — com reuniões e relatórios recorrentes.",
        whoFor: [
            "Empresas que cresceram e a TI virou colcha de retalhos",
            "Diretorias sem interlocutor técnico de confiança",
            "Operações com auditoria, LGPD ou exigência de clientes",
            "Negócios que investem em TI mas não enxergam retorno",
        ],
        problem:
            "Sem gestão, cada compra é reativa, cada fornecedor puxa para um lado e não existe plano de médio prazo. A TI consome orçamento sem que ninguém consiga explicar o porquê.",
        problemPoints: [
            "Decisões tomadas no susto, sem orçamento anual",
            "Fornecedores desalinhados e contratos sem revisão",
            "Políticas de acesso e segurança desatualizadas",
            "Falta de indicadores para levar à diretoria",
        ],
        approach: [
            {
                title: "Diagnóstico e roadmap",
                description:
                    "Levantamento completo do ambiente, riscos e maturidade. Dele sai um plano de 12 meses com prioridades e orçamento.",
            },
            {
                title: "Rotina de governança",
                description:
                    "Gestor dedicado, reuniões periódicas, gestão de fornecedores e políticas revisadas. Projetos acompanhados do início ao fim.",
            },
            {
                title: "Decisão com dado",
                description:
                    "Relatórios de indicadores, custos e riscos apresentados em linguagem de negócio para sustentar cada investimento.",
            },
        ],
        benefits: [
            { title: "TI com plano", description: "Roadmap anual revisado trimestralmente, alinhado à estratégia da empresa." },
            { title: "Custo sob controle", description: "Orçamento previsto, contratos renegociados e fim das compras emergenciais." },
            { title: "Risco mapeado", description: "Matriz de risco tecnológico atualizada, com plano de tratamento priorizado." },
            { title: "Interlocutor único", description: "Uma pessoa responde pela TI para a diretoria, os fornecedores e as auditorias." },
        ],
        howItWorks: [
            { label: "01", title: "Assessment", description: "Mapeamento de ativos, processos, contratos e riscos do ambiente atual." },
            { label: "02", title: "Plano diretor", description: "Roadmap de 12 meses com prioridades, investimentos e metas de maturidade." },
            { label: "03", title: "Execução", description: "O gestor conduz projetos, fornecedores e políticas na rotina acordada." },
            { label: "04", title: "Revisão", description: "Comitê periódico revisa indicadores, ajusta o plano e reporta à diretoria." },
        ],
        metrics: [
            { value: "12 meses", label: "de roadmap sempre à frente" },
            { value: "1", label: "gestor dedicado ao seu negócio" },
            { value: "trimestral", label: "revisão de plano e orçamento" },
        ],
    },
    {
        slug: "seguranca",
        name: "Segurança",
        shortName: "Segurança",
        menuDescription: "Camadas de proteção: EDR, patches, firewall, acesso e resposta a incidentes.",
        tagline: "A pergunta não é se vão tentar. É se você vai perceber.",
        icon: "shield-check",
        accentFrom: "#f472b6",
        accentTo: "#ec4899",
        heroDescription:
            "Segurança como camadas: endpoint, identidade, rede e e-mail protegidos, com detecção ativa, atualização contínua e um plano de resposta que existe antes do incidente.",
        what: "Segurança tratada como processo, não como antivírus. A Oliver implanta EDR nos endpoints e servidores, mantém patches em dia, endurece configurações, protege e-mail e identidade, aplica MFA, controla acesso e mantém um plano de resposta a incidentes testado. Ameaças são detectadas e contidas, não descobertas no resgate.",
        whoFor: [
            "Empresas que lidam com dados de clientes e LGPD",
            "Operações que já sofreram phishing, fraude ou ransomware",
            "Negócios com exigência de segurança em contratos e auditorias",
            "Quem depende de e-mail e sistemas para faturar",
        ],
        problem:
            "Antivírus tradicional não vê ataque sem arquivo, patches atrasam, ninguém revisa permissão e não há plano para a primeira hora de um incidente. Quando o ataque acontece, a empresa improvisa.",
        problemPoints: [
            "Endpoints sem detecção de comportamento, só assinatura",
            "Sistemas sem os patches de segurança mais recentes",
            "Contas sem MFA e com permissões acumuladas há anos",
            "Nenhum plano de resposta: cada incidente começa do zero",
        ],
        approach: [
            {
                title: "Reduzir a superfície",
                description:
                    "Hardening de servidores e estações, gestão de patches, revisão de acessos, MFA obrigatório e desativação do que não é usado.",
            },
            {
                title: "Detectar e conter",
                description:
                    "EDR com análise de comportamento em todo o parque, alertas investigados pela Oliver e isolamento imediato de máquina comprometida.",
            },
            {
                title: "Responder com plano",
                description:
                    "Plano de resposta a incidentes definido, com papéis, comunicação e passos de contenção e recuperação já acordados e testados.",
            },
        ],
        benefits: [
            { title: "Detecção real", description: "Comportamento suspeito identificado mesmo sem malware conhecido envolvido." },
            { title: "Superfície menor", description: "Menos portas abertas, patches em dia, menos privilégio — menos chance de um erro virar incidente." },
            { title: "Resposta ensaiada", description: "Plano escrito e testado: a primeira hora do incidente não é improviso." },
            { title: "Evidência para auditoria", description: "Políticas, logs e relatórios que sustentam LGPD e exigências de clientes." },
        ],
        howItWorks: [
            { label: "01", title: "Avaliação", description: "Levantamento de exposição, acessos, e-mail e configuração dos endpoints." },
            { label: "02", title: "Blindagem", description: "Hardening, patches, MFA, revisão de permissões e proteção de e-mail e identidade." },
            { label: "03", title: "Vigilância", description: "EDR ativo, alertas investigados e contenção automática de máquinas comprometidas." },
            { label: "04", title: "Prontidão", description: "Plano de resposta testado e revisão periódica de postura de segurança." },
        ],
        metrics: [
            { value: "MFA", label: "em 100% dos acessos críticos" },
            { value: "24/7", label: "de detecção e contenção" },
            { value: "1 plano", label: "de resposta testado, não improviso" },
        ],
    },
    {
        slug: "backup",
        name: "Backup e Recovery",
        shortName: "Backup e Recovery",
        menuDescription: "Cópias validadas, monitoradas e testadas — com recuperação que funciona.",
        tagline: "Backup não é ter uma cópia. É conseguir recuperar.",
        icon: "database-backup",
        accentFrom: "#fbbf24",
        accentTo: "#f59e0b",
        heroDescription:
            "Rotina de backup com regra 3-2-1, cópia imutável fora do site, monitoramento diário e testes de restauração periódicos com tempo de recuperação medido.",
        what: "Proteção de dados desenhada para o pior dia: falha de hardware, exclusão acidental ou ransomware. A Oliver define o que copiar, com que frequência e por quanto tempo guardar, mantém uma cópia imutável fora do ambiente e testa a restauração de forma recorrente — para que o tempo de recuperação seja um número conhecido, não uma esperança.",
        whoFor: [
            "Empresas cujos dados são o próprio negócio",
            "Operações com ERP, banco de dados e arquivos críticos",
            "Quem precisa de retenção para fins fiscais ou contratuais",
            "Ambientes expostos a ransomware — ou seja, todos",
        ],
        problem:
            "Muitos backups rodam sem ninguém conferir, guardam só a última cópia e ficam na mesma rede que o servidor. No incidente, a cópia está corrompida, criptografada ou incompleta.",
        problemPoints: [
            "Ninguém verifica se o job terminou com sucesso",
            "Cópia única, na mesma rede, alcançável pelo ransomware",
            "Retenção curta demais para voltar semanas atrás",
            "Restauração nunca foi testada de verdade",
        ],
        approach: [
            {
                title: "Desenho da política",
                description:
                    "Definição de escopo, frequência, retenção e destino seguindo a regra 3-2-1, com cópia imutável e fora do site.",
            },
            {
                title: "Operação monitorada",
                description:
                    "Verificação diária de cada job, tratamento imediato de falha e alertas integrados ao monitoramento.",
            },
            {
                title: "Teste de recuperação",
                description:
                    "Restauração periódica em ambiente isolado, com medição do tempo real de recuperação e relatório de evidência.",
            },
        ],
        benefits: [
            { title: "Cópia à prova de ransomware", description: "Backup imutável e fora do ambiente, fora do alcance de um ataque." },
            { title: "Recuperação conhecida", description: "Você sabe, em número, quanto tempo leva para voltar e o quanto perde." },
            { title: "Falha tratada no dia", description: "Job que não completa gera alerta e correção no mesmo dia, não no incidente." },
            { title: "Retenção sob medida", description: "Janela de retenção alinhada a exigência fiscal, contratual e operacional." },
        ],
        howItWorks: [
            { label: "01", title: "Mapeamento", description: "Identificação dos dados críticos e definição de objetivos de recuperação por sistema." },
            { label: "02", title: "Implantação", description: "Configuração da rotina 3-2-1, cópia imutável e destino fora do site." },
            { label: "03", title: "Monitoramento", description: "Conferência diária de jobs e tratamento imediato de qualquer falha." },
            { label: "04", title: "Teste", description: "Restauração periódica com medição real e relatório de resultado." },
        ],
        metrics: [
            { value: "3-2-1", label: "regra aplicada a todo dado crítico" },
            { value: "diária", label: "verificação de cada job de backup" },
            { value: "periódico", label: "teste real de restauração" },
        ],
        flow: {
            title: "Do backup à recuperação",
            nodes: [
                { label: "Backup", caption: "Cópia executada conforme a política 3-2-1" },
                { label: "Validação", caption: "Integridade da cópia verificada" },
                { label: "Monitoramento", caption: "Job conferido diariamente" },
                { label: "Proteção", caption: "Cópia imutável, fora do alcance do ataque" },
                { label: "Recuperação", caption: "Restauração testada, tempo medido" },
            ],
        },
    },
    {
        slug: "field-service",
        name: "Field Service",
        shortName: "Field Service",
        menuDescription: "Técnico no local quando o problema exige mão na infraestrutura.",
        tagline: "Nem tudo se resolve por acesso remoto.",
        icon: "wrench",
        accentFrom: "#a78bfa",
        accentTo: "#8b5cf6",
        heroDescription:
            "Atendimento presencial planejado e sob demanda: instalação, troca de equipamento, IMAC, cabeamento, CFTV, Wi-Fi, mudança de endereço e apoio a evento — com o mesmo registro e SLA do remoto.",
        what: "A extensão física da operação da Oliver. Quando o problema é hardware, cabeamento, um novo ponto de rede ou a montagem de um escritório inteiro, um técnico vai até o local com escopo definido, checklist e reporte no mesmo sistema de chamados — sem perder o histórico nem a padronização. Inclui tarefas preventivas, IMAC (instalar, mover, adicionar, alterar) e Service Request.",
        whoFor: [
            "Empresas com uma ou várias unidades físicas",
            "Operações distribuídas: lojas, centros logísticos, indústrias",
            "Negócios em expansão, mudança ou reforma",
            "Datas críticas e eventos que exigem apoio no local",
        ],
        problem:
            "Quando é preciso alguém no local, começa a busca por um técnico avulso: sem contexto do ambiente, sem padrão de execução e sem registrar o que foi feito para a próxima vez.",
        problemPoints: [
            "Técnico avulso sem conhecimento do ambiente",
            "Serviço presencial sem checklist nem evidência",
            "Nada volta para o histórico da empresa",
            "Sem previsibilidade de prazo para deslocamento",
        ],
        approach: [
            {
                title: "Escopo antes de sair",
                description:
                    "O chamado presencial abre com objetivo, materiais e checklist definidos junto ao time remoto sênior que conhece o ambiente.",
            },
            {
                title: "Execução padronizada",
                description:
                    "O técnico segue o procedimento da Oliver, com identificação, organização de cabeamento e etiquetagem padrão.",
            },
            {
                title: "Laudo e registro",
                description:
                    "Fotos, itens trocados, laudo técnico e configuração final registrados no chamado e no inventário do cliente.",
            },
        ],
        benefits: [
            { title: "Contexto preservado", description: "Quem vai ao local age com o histórico e os diagramas do ambiente em mãos." },
            { title: "Padrão em toda unidade", description: "Mesma qualidade de execução no escritório, na filial e no galpão." },
            { title: "Evidência do serviço", description: "Registro fotográfico, laudo e itens trocados anexos ao chamado." },
            { title: "Projetos sem dor", description: "Moves, expansão e montagem de escritório conduzidos com cronograma e responsável." },
        ],
        howItWorks: [
            { label: "01", title: "Solicitação", description: "Demanda presencial registrada e avaliada pelo time que conhece o ambiente." },
            { label: "02", title: "Planejamento", description: "Escopo, materiais, janela e checklist definidos antes do deslocamento." },
            { label: "03", title: "Atendimento", description: "Técnico executa no local seguindo o procedimento padrão da Oliver." },
            { label: "04", title: "Registro", description: "Laudo, evidências e mudanças lançados no chamado e no inventário do cliente." },
        ],
        metrics: [
            { value: "checklist", label: "em todo atendimento presencial" },
            { value: "1 sistema", label: "para remoto e campo, sem lacuna" },
            { value: "SLA", label: "de deslocamento acordado por região" },
        ],
        applications: [
            "Desktop, notebook e hardware em geral",
            "IMAC — instalar, mover, adicionar, alterar",
            "Cabeamento, pontos de rede e certificação",
            "Wi-Fi, internet e conectividade local",
            "CFTV e sistemas de apoio",
            "Moves e montagem de novas unidades",
        ],
    },
    {
        slug: "ativos",
        name: "Gestão de Ativos",
        shortName: "Gestão de Ativos",
        menuDescription: "Inventário vivo de hardware, software e licenças com ciclo de vida.",
        tagline: "Você não protege, atualiza ou substitui o que não sabe que tem.",
        icon: "boxes",
        accentFrom: "#4ade80",
        accentTo: "#22c55e",
        heroDescription:
            "Inventário automatizado de todo equipamento e software, vinculado a usuário, contrato e garantia, com controle de ciclo de vida, obsolescência e licenças.",
        what: "Um cadastro sempre atualizado de tudo que a empresa tem em TI: máquinas, servidores, periféricos, licenças e contratos. Cada item é vinculado a um responsável, uma data de compra, uma garantia, um status e um fim de vida planejado — base para segurança, orçamento e auditoria.",
        whoFor: [
            "Empresas que não sabem quantas máquinas têm em uso",
            "Operações com auditoria de licenciamento de software",
            "Times que planejam orçamento de renovação de parque",
            "Negócios com entrada e saída frequente de pessoas",
        ],
        problem:
            "Sem inventário confiável, máquinas somem, licenças são pagas em dobro ou de menos, equipamento fora de garantia quebra sem plano e o desligamento de um funcionário deixa acesso e ativo soltos.",
        problemPoints: [
            "Planilha de inventário desatualizada ou inexistente",
            "Licenças pagas sem uso — ou uso sem licença",
            "Equipamento obsoleto e fora de garantia sem plano de troca",
            "Ativo e acesso não recolhidos no desligamento",
        ],
        approach: [
            {
                title: "Descoberta automática",
                description:
                    "Agentes e varredura de rede montam o inventário de hardware e software e o mantêm vivo a cada mudança.",
            },
            {
                title: "Ciclo de vida",
                description:
                    "Cada ativo recebe responsável, custo, garantia, status e data de substituição, alimentando o plano de renovação.",
            },
            {
                title: "Conformidade",
                description:
                    "Conciliação de licenças contratadas versus instaladas e trilha para auditoria e LGPD.",
            },
        ],
        benefits: [
            { title: "Orçamento previsível", description: "Plano plurianual de renovação de parque baseado em garantia e obsolescência." },
            { title: "Licença no ponto certo", description: "Fim do pagamento em dobro e do risco de uso sem licença na auditoria." },
            { title: "Entrada e saída limpa", description: "Processo de admissão e desligamento com ativo e acesso rastreados." },
            { title: "Base para decisão", description: "Dados de parque que sustentam segurança, compras e planejamento." },
        ],
        howItWorks: [
            { label: "01", title: "Coleta", description: "Inventário automático de hardware e software em todo o ambiente." },
            { label: "02", title: "Enriquecimento", description: "Vínculo de cada item a usuário, contrato, garantia e custo." },
            { label: "03", title: "Ciclo de vida", description: "Definição de obsolescência e plano de renovação por período." },
            { label: "04", title: "Governança", description: "Conciliação de licenças e atualização contínua a cada movimentação." },
        ],
        metrics: [
            { value: "tempo real", label: "inventário atualizado a cada mudança" },
            { value: "0", label: "licença paga sem uso identificado" },
            { value: "plurianual", label: "plano de renovação de parque" },
        ],
    },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
