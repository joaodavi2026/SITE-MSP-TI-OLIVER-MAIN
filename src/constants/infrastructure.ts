import type { Service } from "./services";

/**
 * Frente de Infraestrutura da Oliver Network — projetos e execução física de TI e Telecom.
 * Reutiliza o shape de Service para compartilhar o template de detalhe.
 */
export const INFRASTRUCTURE: Service[] = [
    {
        slug: "cabeamento-estruturado",
        name: "Cabeamento Estruturado",
        shortName: "Cabeamento Estruturado",
        menuDescription: "Projeto e execução de cabeamento de dados e voz padronizado.",
        tagline: "A base física da rede, feita para durar e crescer.",
        icon: "cable",
        accentFrom: "#38bdf8",
        accentTo: "#2563eb",
        heroDescription:
            "Projeto e execução de cabeamento estruturado de dados e voz para ambientes corporativos, com padronização, identificação e documentação completas.",
        what: "Infraestrutura de cabeamento metálico e óptico projetada segundo norma: caminhos, pontos de rede, patch panels, racks, identificação e certificação. A Oliver executa a obra, documenta cada ponto e entrega um ambiente organizado, expansível e pronto para operar com desempenho previsível.",
        whoFor: [
            "Empresas montando ou reformando escritório",
            "Ambientes com cabeamento antigo, sem identificação",
            "Armazéns logísticos e chão de fábrica",
            "Operações que vão expandir postos de trabalho",
        ],
        problem:
            "Cabeamento improvisado ao longo dos anos — sem caminho, sem identificação, sem certificação — gera lentidão intermitente, manutenção lenta e nenhuma margem para crescer.",
        problemPoints: [
            "Pontos sem identificação: cada manutenção é caça ao cabo",
            "Cabos fora de padrão e sem certificação de desempenho",
            "Racks desorganizados, sem gestão de calor e acesso",
            "Nenhuma documentação de o que vai para onde",
        ],
        approach: [
            { title: "Projeto", description: "Levantamento de planta, definição de caminhos, pontos, racks e padrão de identificação." },
            { title: "Execução", description: "Lançamento de cabos, montagem de racks, conectorização e organização conforme norma." },
            { title: "Certificação e entrega", description: "Teste e certificação de cada enlace, etiquetagem e documentação as-built." },
        ],
        benefits: [
            { title: "Desempenho previsível", description: "Enlaces certificados garantem a categoria contratada, ponta a ponta." },
            { title: "Manutenção rápida", description: "Identificação e documentação transformam horas de diagnóstico em minutos." },
            { title: "Pronto para crescer", description: "Caminhos e racks dimensionados para a expansão planejada." },
            { title: "Ambiente organizado", description: "Racks limpos, com gestão de cabos, calor e acesso." },
        ],
        howItWorks: [
            { label: "01", title: "Projeto", description: "Planta, pontos, caminhos, racks e padrão de identificação." },
            { label: "02", title: "Infraestrutura", description: "Eletrocalhas, leitos e caixas — a infraestrutura seca que recebe os cabos." },
            { label: "03", title: "Lançamento", description: "Cabos, conectorização, patch panels e organização de racks." },
            { label: "04", title: "Certificação", description: "Teste de cada enlace, etiquetagem e documentação as-built." },
        ],
        metrics: [
            { value: "100%", label: "dos enlaces certificados e documentados" },
            { value: "as-built", label: "entregue ao final da obra" },
            { value: "norma", label: "de cabeamento estruturado seguida" },
        ],
        applications: [
            "Escritórios corporativos",
            "Armazéns e centros logísticos",
            "Chão de fábrica",
            "Salas técnicas e data center",
        ],
    },
    {
        slug: "fibra-optica",
        name: "Fibra Óptica",
        shortName: "Fibra Óptica",
        menuDescription: "Backbone óptico, fusão, certificação e interligação de prédios.",
        tagline: "Distância e banda sem comprometer o sinal.",
        icon: "spline",
        accentFrom: "#22d3ee",
        accentTo: "#0891b2",
        heroDescription:
            "Projetos de backbone óptico: lançamento, fusão, conectorização e certificação de enlaces de fibra para interligar prédios, pavimentos e salas técnicas.",
        what: "Infraestrutura óptica para distâncias e capacidades que o cabo metálico não alcança: backbone entre racks e pavimentos, interligação de prédios, links para data center. A Oliver executa lançamento, fusão, montagem de DIOs e certificação com OTDR, entregando enlaces documentados e dentro de margem.",
        whoFor: [
            "Empresas com mais de um prédio ou pavimento",
            "Backbone metálico no limite de distância ou banda",
            "Interligação campus, galpão e prédio administrativo",
            "Ambientes industriais com eletromagnetismo alto",
        ],
        problem:
            "Backbone em cabo metálico esticado além do limite, sem certificação óptica e sem reserva técnica: perda de sinal, instabilidade sob carga e nenhuma margem para novos serviços.",
        problemPoints: [
            "Enlaces no limite de distância do cabo metálico",
            "Fusões e conectores sem medição de perda",
            "Sem reserva de fibras para expansão",
            "Documentação óptica inexistente",
        ],
        approach: [
            { title: "Projeto óptico", description: "Rotas, tipo de fibra, quantidade de vias, DIOs e orçamento de potência do enlace." },
            { title: "Execução", description: "Lançamento, fusão, conectorização e montagem de distribuidores ópticos." },
            { title: "Certificação", description: "Medição com power meter e OTDR, laudo por enlace e documentação as-built." },
        ],
        benefits: [
            { title: "Banda com folga", description: "Enlaces ópticos suportam a demanda atual e a expansão planejada." },
            { title: "Sinal dentro de margem", description: "Certificação garante perda abaixo do limite do projeto." },
            { title: "Imune a interferência", description: "Fibra não sofre com eletromagnetismo do ambiente industrial." },
            { title: "Reserva técnica", description: "Vias extras já lançadas para novos serviços sem obra nova." },
        ],
        howItWorks: [
            { label: "01", title: "Projeto", description: "Rotas, tipo de fibra, vias e orçamento de potência." },
            { label: "02", title: "Lançamento", description: "Passagem do cabo óptico pelos caminhos e proteção mecânica." },
            { label: "03", title: "Fusão", description: "Emendas, conectorização e montagem de DIOs." },
            { label: "04", title: "Certificação", description: "Medição óptica, laudo por enlace e as-built." },
        ],
        metrics: [
            { value: "OTDR", label: "certificação de cada enlace óptico" },
            { value: "reserva", label: "de vias para expansão" },
            { value: "laudo", label: "de potência por enlace" },
        ],
    },
    {
        slug: "infraestrutura-seca",
        name: "Infraestrutura Seca",
        shortName: "Infraestrutura Seca",
        menuDescription: "Eletrocalhas, leitos, eletrodutos e caixas para dados e voz.",
        tagline: "Antes do cabo, o caminho.",
        icon: "route",
        accentFrom: "#818cf8",
        accentTo: "#4f46e5",
        heroDescription:
            "Execução da infraestrutura seca — eletrocalhas, leitos, perfilados, eletrodutos e caixas — que sustenta e protege o cabeamento de dados e voz.",
        what: "A estrutura física que recebe e protege o cabeamento: eletrocalhas, leitos, perfilados, eletrodutos, caixas de passagem e suportes, com separação adequada da rede elétrica e capacidade para a expansão. É a etapa que define se, amanhã, passar um cabo novo é um chamado de trinta minutos ou uma obra.",
        whoFor: [
            "Obras de escritório, galpão e indústria",
            "Ambientes onde o cabo hoje corre solto ou pelo forro",
            "Operações que crescem e precisam adicionar pontos com frequência",
            "Locais com norma de separação entre elétrica e dados",
        ],
        problem:
            "Cabo passado sem infraestrutura — pelo forro, junto da elétrica, sem caixa de passagem — vira risco elétrico, interferência e uma obra a cada ponto novo.",
        problemPoints: [
            "Cabo de dados correndo junto da rede elétrica",
            "Sem caminho definido: cada expansão é improviso",
            "Caixas e pontos sem padronização",
            "Capacidade esgotada, sem espaço para crescer",
        ],
        approach: [
            { title: "Dimensionamento", description: "Cálculo de ocupação, rotas, separação da elétrica e reserva para expansão." },
            { title: "Montagem", description: "Eletrocalhas, leitos, perfilados, eletrodutos e caixas instalados conforme norma." },
            { title: "Preparação", description: "Caminhos identificados e liberados para o lançamento do cabeamento." },
        ],
        benefits: [
            { title: "Expansão barata", description: "Ponto novo passa a ser lançamento de cabo, não obra." },
            { title: "Sem interferência", description: "Separação correta entre elétrica e dados protege o sinal." },
            { title: "Segurança", description: "Infraestrutura dentro de norma reduz risco elétrico e de incêndio." },
            { title: "Capacidade planejada", description: "Ocupação calculada com folga para a demanda futura." },
        ],
        howItWorks: [
            { label: "01", title: "Projeto", description: "Rotas, ocupação, separação e pontos de acesso." },
            { label: "02", title: "Suportação", description: "Fixação de suportes, mãos-francesas e tirantes." },
            { label: "03", title: "Montagem", description: "Eletrocalhas, leitos, eletrodutos e caixas." },
            { label: "04", title: "Liberação", description: "Caminhos identificados e prontos para o cabeamento." },
        ],
        metrics: [
            { value: "norma", label: "de separação elétrica × dados" },
            { value: "reserva", label: "de ocupação para expansão" },
            { value: "identificado", label: "cada caminho e caixa" },
        ],
    },
    {
        slug: "racks",
        name: "Organização de Racks",
        shortName: "Racks",
        menuDescription: "Montagem, cable management e padronização de racks e salas técnicas.",
        tagline: "O rack conta como a operação é gerida.",
        icon: "server-cog",
        accentFrom: "#a78bfa",
        accentTo: "#8b5cf6",
        heroDescription:
            "Montagem e reorganização de racks: layout de equipamentos, gestão de cabos, identificação, patch panels, réguas de energia e controle de calor e acesso.",
        what: "Reorganização e padronização de racks e salas técnicas: definição de layout, guias e gestão de cabos, patch panels, identificação de cada porta e patch cord, réguas de energia, e cuidado com fluxo de ar e acesso. Um rack organizado reduz o tempo de manutenção, o risco de erro e o superaquecimento.",
        whoFor: [
            "Salas técnicas com racks 'ninho de rato'",
            "Ambientes que cresceram sem padrão de montagem",
            "Operações que sofrem com queda por cabo solto ou calor",
            "Empresas antes de uma auditoria ou expansão",
        ],
        problem:
            "Rack sem padrão: patch cords atravessados, portas sem identificação, equipamento empilhado sem fluxo de ar. Qualquer mudança é arriscada e o diagnóstico de falha é lento.",
        problemPoints: [
            "Cabos sem organização nem folga de manobra",
            "Portas e patch cords sem identificação",
            "Equipamentos sem espaçamento — calor acumulado",
            "Energia sem régua adequada nem redundância",
        ],
        approach: [
            { title: "Planejamento", description: "Layout de U, agrupamento por função, plano de cabeamento e energia." },
            { title: "Reorganização", description: "Remanejamento em janela, com patch cords no comprimento certo e guias horizontais e verticais." },
            { title: "Documentação", description: "Mapa do rack, identificação de cada porta e foto as-built." },
        ],
        benefits: [
            { title: "Manutenção sem risco", description: "Mexer em um cabo não derruba outro serviço." },
            { title: "Diagnóstico rápido", description: "Identificação e mapa levam direto ao ponto." },
            { title: "Menos calor", description: "Espaçamento e fluxo de ar reduzem falha por temperatura." },
            { title: "Pronto para auditoria", description: "Rack documentado e organizado passa em qualquer inspeção." },
        ],
        howItWorks: [
            { label: "01", title: "Diagnóstico", description: "Inventário do rack atual, funções e pontos de risco." },
            { label: "02", title: "Layout", description: "Novo posicionamento de U, cabos e energia." },
            { label: "03", title: "Execução", description: "Reorganização em janela, com patch cords sob medida." },
            { label: "04", title: "Entrega", description: "Mapa do rack, identificação e as-built fotográfico." },
        ],
        metrics: [
            { value: "mapa", label: "de rack entregue e mantido" },
            { value: "janela", label: "planejada para o remanejamento" },
            { value: "identificado", label: "cada porta e patch cord" },
        ],
    },
    {
        slug: "certificacao-de-rede",
        name: "Certificação de Rede",
        shortName: "Certificação de Rede",
        menuDescription: "Teste e laudo de desempenho de enlaces metálicos e ópticos.",
        tagline: "Rede não se confia — se mede.",
        icon: "badge-check",
        accentFrom: "#34d399",
        accentTo: "#10b981",
        heroDescription:
            "Certificação de cabeamento metálico e óptico com equipamento de campo, laudo por enlace e documentação — para aceitar uma obra ou diagnosticar um problema.",
        what: "Medição e laudo de cada enlace da rede física com certificadora de campo: perda de inserção, NEXT, return loss, comprimento e mapa de fios no metálico; potência e OTDR no óptico. Serve para aceitar uma obra de terceiros, homologar uma expansão ou encontrar a causa de uma lentidão que ninguém explica.",
        whoFor: [
            "Empresas recebendo uma obra de cabeamento de terceiros",
            "Operações com lentidão intermitente sem causa achada",
            "Ambientes que vão expandir e querem base documentada",
            "Contratos que exigem certificação como entrega",
        ],
        problem:
            "Sem certificação, um cabo mal crimpado, longo demais ou fora de categoria passa despercebido — até virar lentidão sob carga, queda de link ou pacote perdido meses depois.",
        problemPoints: [
            "Obra aceita sem laudo — defeito aparece depois",
            "Lentidão intermitente sem ponto de partida para o diagnóstico",
            "Enlaces fora de categoria ou de comprimento",
            "Nenhuma base documentada para comparar no futuro",
        ],
        approach: [
            { title: "Escopo", description: "Definição dos enlaces, categoria alvo e norma de aceitação." },
            { title: "Medição", description: "Certificação com equipamento calibrado, enlace por enlace, metálico e óptico." },
            { title: "Laudo", description: "Relatório de aprovação/reprovação por ponto, com causa e recomendação de correção." },
        ],
        benefits: [
            { title: "Obra aceita com prova", description: "Laudo por enlace antes de pagar o fornecedor." },
            { title: "Causa encontrada", description: "A certificação aponta o ponto e o defeito exato." },
            { title: "Base para o futuro", description: "Documentação de referência para comparar após mudanças." },
            { title: "Contrato cumprido", description: "Entrega de certificação como exigido em edital ou contrato." },
        ],
        howItWorks: [
            { label: "01", title: "Planejamento", description: "Lista de enlaces, categoria e norma de aceitação." },
            { label: "02", title: "Campo", description: "Medição de cada enlace metálico e óptico." },
            { label: "03", title: "Análise", description: "Classificação de aprovados e reprovados, com causa." },
            { label: "04", title: "Relatório", description: "Laudo completo e recomendações de correção." },
        ],
        metrics: [
            { value: "por enlace", label: "laudo individual de desempenho" },
            { value: "metálico + óptico", label: "cobertura completa" },
            { value: "calibrado", label: "equipamento de certificação" },
        ],
    },
    {
        slug: "cftv",
        name: "CFTV",
        shortName: "CFTV",
        menuDescription: "Projeto e instalação de circuito fechado de TV sobre IP.",
        tagline: "Imagem só serve se estiver gravando e acessível.",
        icon: "cctv",
        accentFrom: "#f472b6",
        accentTo: "#db2777",
        heroDescription:
            "Projeto e instalação de CFTV IP: posicionamento de câmeras, infraestrutura PoE, gravador dimensionado, retenção definida e acesso remoto seguro.",
        what: "Circuito fechado de TV sobre rede IP: estudo de cobertura e posicionamento, câmeras adequadas a cada cena, switches PoE, gravador (NVR) dimensionado para a retenção exigida e acesso remoto com credencial. Integra-se à mesma infraestrutura de rede, com segmentação para não expor o resto do ambiente.",
        whoFor: [
            "Escritórios, lojas, galpões e indústrias",
            "Operações com exigência de retenção de imagem",
            "Ambientes com CFTV analógico legado a modernizar",
            "Locais com várias unidades e necessidade de acesso central",
        ],
        problem:
            "CFTV instalado sem projeto: câmeras mal posicionadas, gravação que não cobre a retenção necessária, sistema na mesma rede dos dados e sem controle de quem acessa.",
        problemPoints: [
            "Ângulos e lentes errados — cenas sem detalhe útil",
            "Gravador subdimensionado: retenção menor que a exigida",
            "CFTV na mesma rede da operação, sem isolamento",
            "Acesso sem controle de credencial nem registro",
        ],
        approach: [
            { title: "Projeto", description: "Estudo de cobertura, tipo de câmera por cena, infraestrutura PoE e dimensionamento do NVR." },
            { title: "Instalação", description: "Câmeras, cabeamento, switches PoE e gravador, com VLAN dedicada." },
            { title: "Configuração", description: "Retenção, qualidade, acesso com credencial e integração ao monitoramento." },
        ],
        benefits: [
            { title: "Imagem útil", description: "Câmera e lente certas para cada cena — detalhe onde importa." },
            { title: "Retenção garantida", description: "Gravador dimensionado para o período exigido." },
            { title: "Rede isolada", description: "VLAN dedicada mantém o CFTV longe da operação." },
            { title: "Acesso controlado", description: "Credencial por usuário e registro de quem viu o quê." },
        ],
        howItWorks: [
            { label: "01", title: "Estudo", description: "Cobertura, pontos críticos e tipo de câmera por local." },
            { label: "02", title: "Infraestrutura", description: "Cabeamento, PoE e ponto de gravação." },
            { label: "03", title: "Instalação", description: "Câmeras, NVR e VLAN dedicada." },
            { label: "04", title: "Ajuste", description: "Retenção, qualidade, acesso e testes finais." },
        ],
        metrics: [
            { value: "VLAN", label: "dedicada e isolada da operação" },
            { value: "retenção", label: "dimensionada conforme exigência" },
            { value: "credencial", label: "de acesso por usuário" },
        ],
    },
    {
        slug: "eletrica",
        name: "Elétrica de TI",
        shortName: "Elétrica",
        menuDescription: "Circuitos dedicados, aterramento, quadros e nobreak para TI.",
        tagline: "Energia suja derruba servidor sem deixar rastro.",
        icon: "plug-zap",
        accentFrom: "#fbbf24",
        accentTo: "#f59e0b",
        heroDescription:
            "Infraestrutura elétrica dedicada à TI: circuitos exclusivos, aterramento adequado, quadros identificados e proteção com nobreak dimensionado para racks e salas técnicas.",
        what: "A rede elétrica que alimenta racks, servidores e ativos de rede não pode ser a mesma da tomada da copa. A Oliver projeta e executa circuitos dedicados, aterramento dentro de norma, quadros identificados, DPS e nobreak (UPS) dimensionado para a carga e a autonomia necessárias — com pontos de medição.",
        whoFor: [
            "Salas técnicas alimentadas por circuito compartilhado",
            "Ambientes com queda de equipamento sem causa aparente",
            "Operações sem nobreak ou com bateria vencida",
            "Obras novas que precisam prever a elétrica de TI",
        ],
        problem:
            "Rack ligado no mesmo circuito de ar-condicionado e cafeteira, sem aterramento adequado e sem nobreak: reinícios inexplicáveis, corrupção de dados e queima de fonte.",
        problemPoints: [
            "Circuito de TI compartilhado com cargas pesadas",
            "Aterramento inexistente ou fora de norma",
            "Sem nobreak, ou com autonomia insuficiente",
            "Quadro sem identificação — manutenção às cegas",
        ],
        approach: [
            { title: "Levantamento", description: "Carga atual e futura, qualidade da energia e situação do aterramento." },
            { title: "Projeto", description: "Circuitos dedicados, quadro exclusivo, DPS, aterramento e dimensionamento do nobreak." },
            { title: "Execução", description: "Instalação, identificação, testes de carga e pontos de medição." },
        ],
        benefits: [
            { title: "Fim dos reinícios", description: "Circuito limpo e estável elimina a queda sem causa." },
            { title: "Proteção real", description: "DPS e aterramento defendem os equipamentos de surto." },
            { title: "Autonomia certa", description: "Nobreak dimensionado para desligar com segurança ou atravessar a falta." },
            { title: "Manutenção segura", description: "Quadro identificado e documentado." },
        ],
        howItWorks: [
            { label: "01", title: "Diagnóstico", description: "Medição de qualidade de energia e checagem de aterramento." },
            { label: "02", title: "Projeto", description: "Circuitos, quadro, proteções e nobreak." },
            { label: "03", title: "Execução", description: "Instalação, identificação e testes de carga." },
            { label: "04", title: "Medição", description: "Pontos de medição e acompanhamento no monitoramento." },
        ],
        metrics: [
            { value: "dedicado", label: "circuito exclusivo para a TI" },
            { value: "norma", label: "de aterramento seguida" },
            { value: "UPS", label: "dimensionado para carga e autonomia" },
        ],
    },
    {
        slug: "moving",
        name: "Moving",
        shortName: "Moving",
        menuDescription: "Mudança de TI entre endereços com plano, janela e contingência.",
        tagline: "Mudar de endereço sem parar a operação.",
        icon: "truck",
        accentFrom: "#2dd4bf",
        accentTo: "#0d9488",
        heroDescription:
            "Planejamento e execução da mudança de infraestrutura de TI entre endereços: desmontagem, transporte, remontagem e virada, com cronograma e plano de contingência.",
        what: "A operação de TI de uma mudança de endereço: inventário do que vai, preparação da infraestrutura no destino (cabeamento, elétrica, racks, links), desmontagem etiquetada, transporte, remontagem e virada em janela — com plano de contingência para cada sistema crítico e time de prontidão no primeiro dia útil.",
        whoFor: [
            "Empresas trocando de sede ou abrindo nova unidade",
            "Operações que não podem ficar dias sem sistema",
            "Mudanças com data fixa e sem margem para erro",
            "Consolidação de unidades em um único endereço",
        ],
        problem:
            "Mudança de TI tratada como 'levar os computadores': o link novo não está pronto, o rack não cabe, faltam cabos e a operação fica dias parada — descobrindo os problemas no dia da virada.",
        problemPoints: [
            "Infraestrutura do destino não preparada a tempo",
            "Sem inventário: equipamento e cabo somem na mudança",
            "Virada sem janela nem plano de contingência",
            "Link e telefonia novos não ativados antes da data",
        ],
        approach: [
            { title: "Planejamento", description: "Inventário, cronograma reverso a partir da data, contratação antecipada de links e checklist por sistema." },
            { title: "Preparação do destino", description: "Cabeamento, elétrica, racks e conectividade prontos e testados antes da mudança." },
            { title: "Virada", description: "Desmontagem etiquetada, transporte, remontagem e virada em janela, com contingência e prontidão no dia seguinte." },
        ],
        benefits: [
            { title: "Downtime controlado", description: "A virada acontece em janela planejada, não durante o expediente." },
            { title: "Nada se perde", description: "Inventário e etiquetagem garantem que tudo chega e volta ao lugar." },
            { title: "Destino pronto", description: "Infraestrutura testada antes de o primeiro equipamento chegar." },
            { title: "Primeiro dia coberto", description: "Time de prontidão no local resolve o imprevisto na hora." },
        ],
        howItWorks: [
            { label: "01", title: "Plano", description: "Inventário, cronograma reverso e contratação de links." },
            { label: "02", title: "Destino", description: "Cabeamento, elétrica, racks e conectividade prontos e testados." },
            { label: "03", title: "Mudança", description: "Desmontagem etiquetada, transporte e remontagem." },
            { label: "04", title: "Virada", description: "Ativação em janela, testes e prontidão no primeiro dia útil." },
        ],
        metrics: [
            { value: "janela", label: "planejada para a virada" },
            { value: "inventário", label: "de todo item transportado" },
            { value: "prontidão", label: "no local no primeiro dia útil" },
        ],
    },
];

export const getInfrastructure = (slug: string) => INFRASTRUCTURE.find((s) => s.slug === slug);
