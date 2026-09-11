import { ServiceItem, TrainingCourse, SectorItem, ResourceArticle, ChecklistItem } from '../types';

export const COMPANY_INFO = {
  name: 'WORTI Safety, Lda.',
  shortName: 'WORTI Safety',
  taglinePt: 'Safety and Health for a Strong Work Environment',
  taglineEn: 'Safety and Health for a Strong Work Environment',
  submarkPt: 'Saúde, Segurança, Higiene Ocupacional e Ambiente de Trabalho em Moçambique',
  submarkEn: 'Occupational Health, Safety, Industrial Hygiene & Environment in Mozambique',
  headquarters: 'Maputo, Moçambique',
  address: 'Av. 24 de Julho, Edifício Platinum Offices, 4º Andar, Maputo, Moçambique',
  domain: 'worti.co.mz',
  emailPrimary: 'geral@worti.co.mz',
  emailSecondary: 'wortisafety@gmail.com',
  phonePrimary: '+258 84 312 9080',
  phoneSecondary: '+258 21 490 200',
  whatsappNumber: '+258843129080',
  whatsappDisplay: '+258 84 312 9080',
  teamSize: '11–50 colaboradores especializados',
  serviceCoverage: 'Atuação a nível nacional: Maputo, Matola, Tete, Beira, Nacala e Cabo Delgado',
  operatingHoursPt: 'Segunda a Sexta: 08:00 – 17:30 (Maputo CAT)',
  operatingHoursEn: 'Monday to Friday: 08:00 – 17:30 (Maputo CAT)',
  stats: [
    { value: '+140', labelPt: 'Empresas e Projetos Assistidos', labelEn: 'Companies & Projects Assisted' },
    { value: '+9.200', labelPt: 'Trabalhadores e Técnicos Formados', labelEn: 'Workers & Technicians Trained' },
    { value: '99.4%', labelPt: 'Conformidade em Auditorias Legais', labelEn: 'Legal Audit Compliance Rate' },
    { value: '11–50', labelPt: 'Especialistas e Engenheiros HSE', labelEn: 'HSE Specialists & Engineers' },
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  // 1. Segurança e Gestão de Riscos
  {
    id: 'auditoria-sso-riscos',
    category: 'seguranca-riscos',
    isPriority: true,
    titlePt: 'Auditorias de Segurança e Saúde Ocupacional (SSO)',
    titleEn: 'Occupational Health and Safety (OHS) Audits',
    shortDescPt: 'Diagnóstico aprofundado às condições de segurança industrial, processos operacionais e cumprimento regulamentar.',
    shortDescEn: 'Comprehensive diagnostics of industrial safety conditions, operational procedures, and regulatory compliance.',
    problemPt: 'Instalações com riscos operacionais não quantificados, falta de visibilidade sobre perigos iminentes e vulnerabilidade a autuações da Inspeção do Trabalho.',
    problemEn: 'Facilities with unquantified operational hazards, lack of visibility into imminent risks, and vulnerability to Labor Inspectorate fines.',
    scopePt: [
      'Vistoria técnica detalhada a postos de trabalho e instalações industriais',
      'Matriz de Avaliação e Classificação de Riscos (Probabilidade x Gravidade)',
      'Verificação do cumprimento do Regulamento de Segurança e Higiene de Moçambique',
      'Elaboração de Relatório Técnico com Plano de Ação Corretiva e Preventiva (CAPA)'
    ],
    scopeEn: [
      'Comprehensive on-site inspection of workplaces and industrial facilities',
      'Risk Assessment & Hazard Classification Matrix (Likelihood vs. Severity)',
      'Compliance check with Mozambique General Occupational Safety & Hygiene Regulations',
      'Technical Audit Report featuring Corrective and Preventive Action Plan (CAPA)'
    ],
    deliverablesPt: [
      'Relatório Técnico de Auditoria com evidências fotográficas e métricas',
      'Matriz de Riscos priorizada por nível de criticidade',
      'Plano de Ação Corretivo com responsáveis e prazos'
    ],
    deliverablesEn: [
      'Formal Technical Audit Report with photographic evidence and metrics',
      'Prioritized Risk Matrix ranked by criticality levels',
      'Corrective Action Roadmap with designated responsibilities and milestones'
    ],
    methodologyPt: 'Inspeção física no local → Entrevistas com operadores e lideranças → Verificação documental → Relatório e sessão executiva de encerramento.',
    methodologyEn: 'On-site physical inspection → Operator & leadership interviews → Document verification → Final technical report & executive debrief.',
    targetAudiencePt: 'Diretores de Operações, Gerentes Industriais, Gestores de Projeto, Diretores de RH e Coordenadores de HSE.',
    targetAudienceEn: 'Operations Directors, Plant Managers, Project Managers, HR Directors, and HSE Coordinators.',
    estimatedDurationPt: '3 a 7 dias úteis de trabalho de campo + 5 dias para entrega do relatório',
    estimatedDurationEn: '3 to 7 business days on-site + 5 days for final formal report',
    iconName: 'ShieldAlert'
  },
  {
    id: 'trabalho-altura-confinados',
    category: 'seguranca-riscos',
    isPriority: true,
    titlePt: 'Segurança em Trabalho em Altura e Espaços Confinados',
    titleEn: 'Working at Heights & Confined Spaces Safety',
    shortDescPt: 'Procedimentos operacionais normalizados, sistemas de ancoragem, medição de atmosferas e permissões de trabalho seguro (PTS).',
    shortDescEn: 'Standard operating procedures, fall arrest engineering, atmospheric testing, and Safe Work Permits (SWP).',
    problemPt: 'Trabalhos críticos com elevado potencial de fatalidade devido a quedas desprotegidas, asfixia ou intoxicação atmosférica em reservatórios, silos e galerias.',
    problemEn: 'High-risk operations carrying fatality potential due to unprotected falls, asphyxiation, or toxic atmospheres in tanks, silos, and underground ducts.',
    scopePt: [
      'Inspeção e certificação de linhas de vida, guarda-corpos e pontos de ancoragem',
      'Mapeamento e catalogação de todos os espaços confinados da instalação',
      'Protocolos de monitorização de gases (O2, LEL, CO, H2S)',
      'Desenvolvimento de Procedimento Operacional Padrão (POP) e Permissão de Trabalho (PTW)'
    ],
    scopeEn: [
      'Inspection and structural verification of lifelines, handrails, and anchor points',
      'Identification and classification catalog of all confined spaces on site',
      'Continuous multi-gas atmospheric testing protocols (O2, LEL, CO, H2S)',
      'Creation of Standard Operating Procedures (SOPs) and Permit-to-Work systems'
    ],
    deliverablesPt: [
      'Manual de Procedimentos de Trabalho Seguro para Atividades Críticas',
      'Fichas Técnicas de Acesso a Espaços Confinados com sinalética recomendada',
      'Plano de Resgate de Emergência em Altura e Confinamento'
    ],
    deliverablesEn: [
      'Safe Work Procedures Manual for Critical Operations',
      'Confined Space Entry Sheets with regulatory hazard signage',
      'Emergency Rescue Plan for Heights and Confined Space Incidents'
    ],
    methodologyPt: 'Mapeamento in-situ → Avaliação cinemática e atmosférica → Desenho de fluxos de PTW → Teste prático com simulação de resgate.',
    methodologyEn: 'In-situ hazard mapping → Physical and atmospheric assessment → PTW workflow development → Practical rescue drill validation.',
    targetAudiencePt: 'Encarregados de obra, equipas de manutenção industrial, técnicos de silos e reservatórios.',
    targetAudienceEn: 'Construction foremen, industrial maintenance teams, silo and vessel technicians.',
    estimatedDurationPt: 'Personalizado consoante o número de estruturas e complexidade',
    estimatedDurationEn: 'Customized based on facility volume and structural complexity',
    iconName: 'Compass'
  },
  {
    id: 'planos-emergencia-incendio',
    category: 'seguranca-riscos',
    isPriority: false,
    titlePt: 'Planos de Emergência e Evacuação contra Incêndios',
    titleEn: 'Emergency Response & Fire Evacuation Plans',
    shortDescPt: 'Elaboração e revisão técnica de planos de emergência interno (PEI), rotas de fuga, sinalização e exercícios de evacuação.',
    shortDescEn: 'Engineering and technical review of Internal Emergency Plans (IEP), egress routes, signage, and evacuation drills.',
    problemPt: 'Edifícios e estaleiros sem planos de evacuação claros, brigadas desarticuladas e falta de preparação perante cenários de incêndio ou vazamentos.',
    problemEn: 'Buildings and yards lacking defined evacuation routes, disorganized fire warden teams, and zero readiness for industrial fire emergencies.',
    scopePt: [
      'Cálculo de carga de incêndio e dimensionamento de meios de extinção',
      'Plantas de emergência e diagramas de rotas de evacuação normalizadas',
      'Organização e atribuição de papéis da Brigada de Emergência interna',
      'Planeamento, coordenação e avaliação crítica de simulacro de evacuação'
    ],
    scopeEn: [
      'Fire load calculation and sizing of primary extinguishing equipment',
      'Architectural emergency egress maps and standardized exit route blueprints',
      'Internal Emergency Brigade structuring and designated role assignments',
      'Full-scale evacuation drill simulation, coordination, and post-exercise debrief'
    ],
    deliverablesPt: [
      'Dossiê Completo do Plano de Emergência Interno (PEI)',
      'Plantas de Evacuação em alta definição para afixação',
      'Relatório de Avaliação do Exercício de Simulação'
    ],
    deliverablesEn: [
      'Complete Internal Emergency Response Dossier (IERD)',
      'High-resolution emergency evacuation diagrams ready for deployment',
      'Formal Evacuation Drill Assessment & Readiness Report'
    ],
    methodologyPt: 'Levantamento arquitetónico → Análise de risco de fogo → Redação do plano → Treino de brigadistas → Simulação real.',
    methodologyEn: 'Architectural walk-through → Fire risk calculation → Plan draft → Warden briefing → Live simulated drill.',
    targetAudiencePt: 'Gestores de edifícios, diretores de hotelaria, gestores de complexos logísticos e comerciais.',
    targetAudienceEn: 'Facility managers, hospitality directors, logistics hubs, and commercial complexes.',
    estimatedDurationPt: '2 a 4 semanas para dimensionamento e aprovação técnica',
    estimatedDurationEn: '2 to 4 weeks for engineering assessment and formal approval',
    iconName: 'Flame'
  },
  {
    id: 'conformidade-legal-mocambique',
    category: 'seguranca-riscos',
    isPriority: true,
    titlePt: 'Auditoria de Conformidade Legal em HST (Moçambique)',
    titleEn: 'Mozambique HSE Regulatory Legal Compliance Audit',
    shortDescPt: 'Verificação minuciosa do cumprimento da Lei do Trabalho nº 13/2023, Diploma nº 48/73 e regulamentos setoriais.',
    shortDescEn: 'Rigorous compliance evaluation against Mozambique Labor Law no. 13/2023, Diploma 48/73, and sector decrees.',
    problemPt: 'Empresas com exposição jurídica e multas severas por desconhecimento das alterações recentes na legislação laboral e de segurança em Moçambique.',
    problemEn: 'Companies facing legal liabilities and severe penalties due to unfamiliarity with recent amendments to Mozambican labor and safety legislation.',
    scopePt: [
      'Triagem de 100% das obrigações legais aplicáveis à atividade da empresa',
      'Avaliação documental: exames médicos, registos de acidentes, fichas de EPI, comissões de segurança (CSST)',
      'Verificação da constituição e funcionamento dos Comités de Segurança no Trabalho',
      'Elaboração de matriz de conformidade legal com gap-analysis'
    ],
    scopeEn: [
      'Screening of 100% of statutory legal mandates applicable to the business sector',
      'Records audit: occupational medical records, accident logs, PPE receipts, safety committee minutes',
      'Statutory compliance check for Workplace Health and Safety Committees (CSST)',
      'Full Legal Register matrix with comprehensive gap-analysis and risk rating'
    ],
    deliverablesPt: [
      'Matriz de Requisitos Legais de Moçambique comentada',
      'Relatório de Desvios Críticos com orientações de saneamento imediato',
      'Parecer técnico para preparação de inspeções estatais'
    ],
    deliverablesEn: [
      'Annotated Mozambique Legal HSE Compliance Register',
      'Critical Non-Compliance Gap Report with immediate mitigation pathways',
      'Technical advisory brief for state regulatory inspections'
    ],
    methodologyPt: 'Questionário preliminar → Auditoria documental e de campo → Benchmark jurídico → Plano de regularização.',
    methodologyEn: 'Preliminary statutory screening → Document & field audit → Legal benchmarking → Actionable rectification plan.',
    targetAudiencePt: 'Departamentos Jurídicos, Recursos Humanos, Administração e Direção de Operações.',
    targetAudienceEn: 'Legal Counsels, Human Resources, Executive Management, and Operations Directors.',
    estimatedDurationPt: '1 a 2 semanas',
    estimatedDurationEn: '1 to 2 weeks',
    iconName: 'Scale'
  },

  // 2. Saúde Ocupacional e Bem-estar
  {
    id: 'consultoria-saude-ocupacional',
    category: 'saude-ocupacional',
    isPriority: true,
    titlePt: 'Consultoria de Saúde Ocupacional e Gestão de Absentismo',
    titleEn: 'Occupational Health Consulting & Absenteeism Management',
    shortDescPt: 'Programas de controlo médico de saúde ocupacional, redução de baixas médicas e vigilância da saúde dos trabalhadores.',
    shortDescEn: 'Occupational medical surveillance programs, sick leave reduction strategies, and systematic worker health monitoring.',
    problemPt: 'Elevadas taxas de absentismo, doenças profissionais crónicas não identificadas precocemente e falta de histórico clínico ocupacional rastreável.',
    problemEn: 'Elevated absenteeism rates, undetected occupational chronic ailments, and missing auditable employee occupational health histories.',
    scopePt: [
      'Definição dos protocolos de exames médicos: Admissionais, Periódicos, de Retorno e Demissionais',
      'Análise epidemiológica de doenças relacionadas com o trabalho na empresa',
      'Estratégias de mitigação de absentismo e gestão de incapacidades parciais',
      'Protocolos de primeiros socorros clínicos e resposta médica no posto de trabalho'
    ],
    scopeEn: [
      'Design of medical exam protocols: Pre-employment, Periodic, Return-to-Work, and Exit exams',
      'Epidemiological workplace health assessment and occupational illness profiling',
      'Structured absenteeism reduction strategy and partial disability management',
      'On-site clinical first aid protocols and occupational nursing workflows'
    ],
    deliverablesPt: [
      'Programa de Vigilância da Saúde Ocupacional (PVSO)',
      'Relatório analítico de causas de absentismo com recomendações',
      'Guia para gestores de equipa sobre acompanhamento de colaboradores'
    ],
    deliverablesEn: [
      'Occupational Health Surveillance Program (OHSP)',
      'Analytical Absenteeism Diagnostic Report with medical recommendations',
      'Managerial Guidebook for employee wellness and health tracking'
    ],
    methodologyPt: 'Análise de dados de absentismo → Cruzamento com riscos dos postos → Definição do PVSO → Implementação de rotinas de vigilância.',
    methodologyEn: 'Historical data analysis → Cross-referencing workplace hazards → Designing OHSP → Rolling out medical surveillance routines.',
    targetAudiencePt: 'Recursos Humanos, Médicos do Trabalho, Gestores de Saúde Corporativa.',
    targetAudienceEn: 'Human Resources, Occupational Physicians, Corporate Health Managers.',
    estimatedDurationPt: 'Contratos contínuos de assessoria ou projetos pontuais de 3 a 6 semanas',
    estimatedDurationEn: 'Retained advisory agreements or standalone 3 to 6-week projects',
    iconName: 'HeartPulse'
  },
  {
    id: 'ergonomia-trabalho-remoto',
    category: 'saude-ocupacional',
    isPriority: false,
    titlePt: 'Análise Ergonómica dos Postos de Trabalho e Trabalho Remoto',
    titleEn: 'Workstation Ergonomic Assessment & Remote Work Wellness',
    shortDescPt: 'Avaliação ergonómica física e cognitiva, biomecânica da postura, adequação de mobiliário e prevenção de LER/DORT.',
    shortDescEn: 'Physical and cognitive ergonomic evaluations, posture biomechanics, workstation adjustments, and RSI prevention.',
    problemPt: 'Queixas músculo-esqueléticas frequentes, quebras de produtividade e fadiga postural em ambientes fabris, de escritório ou teletrabalho.',
    problemEn: 'Prevalent musculoskeletal complaints, productivity drops, and postural fatigue across industrial lines, offices, and telework setups.',
    scopePt: [
      'Avaliação postural por métodos normalizados (RULA, REBA, NIOSH)',
      'Análise de movimentação manual de cargas e repetitividade de membros superiores',
      'Recomendações técnicas para ajuste de estações de trabalho, cadeiras e iluminação',
      'Guia ergonómico específico para equipas em trabalho remoto ou híbrido'
    ],
    scopeEn: [
      'Postural analysis using internationally validated methods (RULA, REBA, NIOSH)',
      'Assessment of manual materials handling, lifting limits, and repetitive motion',
      'Technical specifications for workstation geometry, seating, and task lighting',
      'Tailored Ergonomic Guide for teleworking and hybrid teams'
    ],
    deliverablesPt: [
      'Laudo Ergonómico Completo com fotos comentadas e classificações',
      'Caderno de Especificações Técnicas para aquisição de mobiliário',
      'Cartilhas de pausas ativas e ginástica laboral'
    ],
    deliverablesEn: [
      'Comprehensive Ergonomic Study with annotated imagery and scorecards',
      'Technical Procurement Specification for ergonomic furniture and tools',
      'Desk exercise and active stretching micro-break handbook'
    ],
    methodologyPt: 'Gravação e observação de tarefas reais → Aplicação de métricas ergonómicas → Sessão com os trabalhadores → Recomendações práticas.',
    methodologyEn: 'Task observation and video recording → Application of metric tools → Operator feedback session → Actionable ergonomic adjustments.',
    targetAudiencePt: 'Empresas de serviços, escritórios bancários/seguradoras, linhas de montagem fabris e armazéns.',
    targetAudienceEn: 'Corporate service firms, banking/insurance offices, assembly plants, and warehouse facilities.',
    estimatedDurationPt: '1 a 3 semanas consoante número de postos analisados',
    estimatedDurationEn: '1 to 3 weeks depending on quantity of workstations evaluated',
    iconName: 'UserCheck'
  },

  // 3. Higiene Industrial
  {
    id: 'higiene-industrial-monitorizacao',
    category: 'higiene-industrial',
    isPriority: true,
    titlePt: 'Monitorização da Qualidade do Ar, Poeiras e Ruído Ocupacional',
    titleEn: 'Occupational Hygiene: Dust, Air Quality & Noise Dosimetry',
    shortDescPt: 'Medições instrumentais acreditadas: dosimetria de ruído contínuo/impacto, poeiras inaláveis/respiráveis, gases e iluminação.',
    shortDescEn: 'Calibrated instrumental assessments: personal noise dosimetry, inhalable/respirable particulate matter, toxic vapors, and lux levels.',
    problemPt: 'Exposição de trabalhadores a agentes físicos e químicos agressivos sem medição científica, gerando perda auditiva irreversível e pneumoconioses.',
    problemEn: 'Worker exposure to harsh physical and chemical hazards without quantitative data, leading to irreversible noise-induced hearing loss and silicosis.',
    scopePt: [
      'Dosimetria pessoal de ruído com cálculo de dose diária e curva de exposição',
      'Amostragem de poeiras (respirável, inalável e sílica livre cristalizada)',
      'Avaliação de conforto térmico (Índice IBUTG / WBGT) em ambientes quentes',
      'Medição de iluminância nos planos de trabalho conforme normas técnicas'
    ],
    scopeEn: [
      'Personal noise dosimetry calculating daily exposure doses and peak limits',
      'Air sampling for dusts (inhalable, respirable, and crystalline free silica)',
      'Thermal stress evaluation using WBGT index across hot operating areas',
      'Lux-level illumination surveys across task surfaces according to industrial standards'
    ],
    deliverablesPt: [
      'Relatório Técnico de Higiene Ocupacional com certificados de calibração',
      'Mapa de Ruído e Risco Ambiental das instalações',
      'Recomendações técnicas de enclausuramento e dimensionamento de proteção auricular/respiratória'
    ],
    deliverablesEn: [
      'Certified Occupational Hygiene Report complete with equipment calibration records',
      'Facility Noise & Environmental Exposure Heatmap',
      'Engineering control suggestions (enclosures, ventilation) and PPE attenuation sizing'
    ],
    methodologyPt: 'Planeamento da estratégia de amostragem → Calibração de equipamentos → Amostragem em jornada de trabalho real → Análise laboratorial e emissão de laudo.',
    methodologyEn: 'Sampling strategy plan → Calibrated device deployment → Full shift measurements → Certified laboratory analysis and formal report.',
    targetAudiencePt: 'Fábricas de cimento, pedreiras, minerações, metalurgias, moagens e estaleiros navais.',
    targetAudienceEn: 'Cement plants, quarries, mining operations, metal foundries, mills, and shipyards.',
    estimatedDurationPt: '1 a 2 semanas para medições de campo e emissão de laudos laboratoriais',
    estimatedDurationEn: '1 to 2 weeks for field sampling and accredited lab reporting',
    iconName: 'Wind'
  },
  {
    id: 'agentes-quimicos-biologicos',
    category: 'higiene-industrial',
    isPriority: false,
    titlePt: 'Gestão de Exposição a Agentes Químicos e Biológicos',
    titleEn: 'Chemical and Biological Hazard Exposure Management',
    shortDescPt: 'Inventário de substâncias perigosas, Fichas de Dados de Segurança (FDS/FISPQ), ventilação industrial e rotulagem GHS.',
    shortDescEn: 'Hazardous materials inventory, Safety Data Sheets (SDS), industrial local exhaust ventilation, and GHS chemical labeling.',
    problemPt: 'Armazenamento inadequado de produtos químicos, rotulagem deficitária e ausência de ventilação exaustora, pondo em risco a saúde das equipas.',
    problemEn: 'Substandard chemical storage, improper hazard labeling, and missing local exhaust ventilation, threatening worker health and plant safety.',
    scopePt: [
      'Auditoria de conformidade com o Sistema Globalmente Harmonizado (GHS)',
      'Elaboração de Fichas de Dados de Segurança (FDS) em língua portuguesa',
      'Avaliação da eficácia dos sistemas de ventilação e exaustão localizada',
      'Protocolos de manuseamento seguro de resíduos biológicos em clínicas e indústrias'
    ],
    scopeEn: [
      'Compliance audit according to the Globally Harmonized System (GHS)',
      'Drafting of comprehensive Safety Data Sheets (SDS) in Portuguese and English',
      'Efficiency evaluation of industrial ventilation and local exhaust systems',
      'Biohazard handling and sharps management protocols for healthcare and labs'
    ],
    deliverablesPt: [
      'Inventário Global de Produtos Químicos com classificação de risco',
      'Procedimento de Gestão de Substâncias Perigosas',
      'Matriz de compatibilidade química para armazenamento seguro'
    ],
    deliverablesEn: [
      'Global Chemical Substances Inventory with hazard ratings',
      'Hazardous Materials Safe Handling Operating Procedure',
      'Chemical Compatibility Storage Matrix to prevent violent reactions'
    ],
    methodologyPt: 'Levantamento no terreno → Triagem de reagentes → Verificação de exaustão → Reorganização de bacias de retenção e sinalização.',
    methodologyEn: 'On-site walkthrough → Reagent screening → Ventilation testing → Bunding and signage reorganization.',
    targetAudiencePt: 'Laboratórios de ensaios, indústrias químicas, agroquímicas, tintas e vernizes.',
    targetAudienceEn: 'Testing laboratories, chemical plants, agrochemical distributors, paint and coatings manufacturers.',
    estimatedDurationPt: '1 a 3 semanas',
    estimatedDurationEn: '1 to 3 weeks',
    iconName: 'FlaskConical'
  },

  // 4. Ambiente, Resíduos e Segurança Alimentar
  {
    id: 'impacto-ambiental-iso14001',
    category: 'ambiente-residuos',
    isPriority: true,
    titlePt: 'Avaliação de Impacto Ambiental e Apoio à ISO 14001',
    titleEn: 'Environmental Impact Assessment & ISO 14001 Support',
    shortDescPt: 'Identificação de aspetos e impactos ambientais, licenciamento ambiental, planos de gestão e auditorias preparatórias ISO 14001.',
    shortDescEn: 'Identification of environmental aspects and impacts, permitting support, Environmental Management Plans, and ISO 14001 readiness.',
    problemPt: 'Empreendimentos em risco de embargo por desconformidades ambientais ou exigências de financiadores internacionais (Padrões IFC).',
    problemEn: 'Projects at risk of shutdown due to environmental infractions or international development bank criteria (IFC Performance Standards).',
    scopePt: [
      'Levantamento de Aspetos e Impactos Ambientais (LAIA)',
      'Desenvolvimento do Plano de Gestão Ambiental (PGA) da operação',
      'Auditoria de conformidade legal ambiental em Moçambique (Decreto nº 54/2015)',
      'Preparação e suporte à certificação do Sistema de Gestão Ambiental ISO 14001:2015'
    ],
    scopeEn: [
      'Environmental Aspects and Impacts Register (EAIR)',
      'Operational Environmental Management Plan (EMP) development',
      'Environmental legal compliance audit under Mozambique Decree no. 54/2015',
      'Gap analysis and readiness roadmap for ISO 14001:2015 certification'
    ],
    deliverablesPt: [
      'Matriz de Aspetos e Impactos Ambientais quantificada',
      'Manual do Sistema de Gestão Ambiental ISO 14001',
      'Dossiê de conformidade para submissão às autoridades ambientais'
    ],
    deliverablesEn: [
      'Quantified Environmental Aspects and Impacts Matrix',
      'ISO 14001 Environmental Management System Manual',
      'Environmental Compliance Dossier ready for regulatory submission'
    ],
    methodologyPt: 'Diagnóstico ambiental preliminar → Mapeamento de fluxos de matérias e efluentes → Elaboração de procedimentos → Auditoria interna de pré-certificação.',
    methodologyEn: 'Preliminary environmental baseline → Material and effluent stream mapping → Procedure drafting → Internal pre-certification audit.',
    targetAudiencePt: 'Empresas de infraestruturas, mineração, agro-indústria, operadoras de energia e construção.',
    targetAudienceEn: 'Infrastructure contractors, mining concessions, agro-industrial plants, energy utilities.',
    estimatedDurationPt: '1 a 3 meses para implementação completa do SGA',
    estimatedDurationEn: '1 to 3 months for complete EMS implementation roadmap',
    iconName: 'Leaf'
  },
  {
    id: 'gestao-residuos-perigosos',
    category: 'ambiente-residuos',
    isPriority: false,
    titlePt: 'Gestão de Resíduos Industriais e Perigosos',
    titleEn: 'Industrial & Hazardous Waste Management',
    shortDescPt: 'Planos de Gestão de Resíduos (PGR), triagem na fonte, rotulagem, manifestos de transporte e destinação final ambientalmente correta.',
    shortDescEn: 'Waste Management Plans (WMP), source segregation, manifest tracking, hazardous labeling, and authorized disposal compliance.',
    problemPt: 'Depósito desordenado de sucatas contaminadas, óleos usados, solventes e resíduos perigosos sem rastreabilidade legal.',
    problemEn: 'Disorderly dumping of contaminated scrap, used motor lubricants, chemical solvents, and toxic waste without regulatory traceability.',
    scopePt: [
      'Caracterização qualitativa e quantitativa dos resíduos gerados',
      'Desenho de parques de resíduos com bacias de retenção para óleos e líquidos inflamáveis',
      'Protocolos de Manifesto de Transporte de Resíduos Perigosos',
      'Homologação de operadores de recolha e destino final licenciado em Moçambique'
    ],
    scopeEn: [
      'Qualitative and quantitative waste stream characterization and inventory',
      'Engineering design of waste staging yards and secondary spill containment',
      'Hazardous Waste Transportation Manifest and custody tracking protocols',
      'Due diligence auditing of licensed waste management contractors in Mozambique'
    ],
    deliverablesPt: [
      'Plano Integrado de Gestão de Resíduos Industriais (PGR)',
      'Instruções de Trabalho para segregação e acondicionamento de resíduos',
      'Tabela de Rastreabilidade e Indicadores de Reciclagem/Descarte'
    ],
    deliverablesEn: [
      'Integrated Industrial Waste Management Plan (WMP)',
      'Standard Work Instructions for on-site waste segregation and storage',
      'Traceability Dashboard and disposal compliance metric logs'
    ],
    methodologyPt: 'Inventariação de resíduos → Classificação de perigosidade → Dimensionamento das áreas de armazenagem → Treino operacional.',
    methodologyEn: 'Waste stream inventorying → Hazard categorization → Storage footprint engineering → Field staff instruction.',
    targetAudiencePt: 'Fábricas, oficinas mecânicas, armazéns logísticos, operações portuárias e minas.',
    targetAudienceEn: 'Manufacturing plants, mechanical depots, logistics terminals, port operations, and mines.',
    estimatedDurationPt: '2 a 4 semanas',
    estimatedDurationEn: '2 to 4 weeks',
    iconName: 'Recycle'
  },
  {
    id: 'seguranca-alimentar-haccp',
    category: 'ambiente-residuos',
    isPriority: false,
    titlePt: 'Avaliação de Higiene e Segurança Alimentar (HACCP / ISO 22000)',
    titleEn: 'Food Safety & Hygiene Assessment (HACCP / ISO 22000)',
    shortDescPt: 'Auditorias higiossanitárias a cantinas corporativas, cozinhas industriais e unidades de processamento de alimentos.',
    shortDescEn: 'Sanitary hygiene audits for corporate canteens, industrial camp kitchens, and food manufacturing units.',
    problemPt: 'Risco iminente de surtos de toxi-infeções alimentares em cantinas de trabalhadores, paralisando operações críticas.',
    problemEn: 'Imminent risk of collective foodborne outbreaks in remote worker camp canteens, paralyzing operations and compromising health.',
    scopePt: [
      'Verificação das Boas Práticas de Fabrico (BPF/GMP) e manipulação de alimentos',
      'Mapeamento de Pontos Críticos de Controlo (HACCP) na cadeia de frio e confeção',
      'Avaliação da potabilidade da água de consumo e higienização de instalações',
      'Planos de controlo integrado de pragas (CIP)'
    ],
    scopeEn: [
      'Good Manufacturing Practices (GMP) and culinary food handler hygiene audit',
      'HACCP critical control points mapping along the cold chain and cooking processes',
      'Potable water microbiological verification and kitchen facility sanitization reviews',
      'Integrated Pest Management (IPM) specifications and audit checks'
    ],
    deliverablesPt: [
      'Relatório de Auditoria Higiossanitária com score de conformidade',
      'Manual de Boas Práticas para Manipuladores de Alimentos',
      'Matriz de Monitorização de Temperaturas e Pontos Críticos'
    ],
    deliverablesEn: [
      'Hygienic-Sanitary Audit Report with percentage compliance score',
      'Good Hygiene Practices Handbook for Canteen and Catering Staff',
      'Critical Control Points and Cold-Chain Temperature Monitoring Logs'
    ],
    methodologyPt: 'Vistoria surpresa ou programada → Colheita de amostras se aplicável → Entrevistas com cozinheiros → Plano de ação.',
    methodologyEn: 'Scheduled or unannounced site audit → Swab/water sampling if required → Kitchen crew interviews → CAPA action plan.',
    targetAudiencePt: 'Empresas de catering industrial, acampamentos remotos (camps) de mineração e gás, hotéis e restaurantes.',
    targetAudienceEn: 'Industrial catering contractors, remote mining/energy camps, hotels, and institutional restaurants.',
    estimatedDurationPt: '1 a 2 semanas',
    estimatedDurationEn: '1 to 2 weeks',
    iconName: 'UtensilsCrossed'
  },

  // 5. Formação e Sistemas de Gestão
  {
    id: 'formacao-primeiros-socorros-incendio',
    category: 'formacao-sistemas',
    isPriority: true,
    titlePt: 'Capacitação em Primeiros Socorros e Combate a Incêndios',
    titleEn: 'First Aid & Industrial Firefighting Practical Training',
    shortDescPt: 'Cursos práticos e certificados ministrados por instrutores credenciados com manequins de simulação e extintores reais.',
    shortDescEn: 'Certified hands-on training instructed by accredited trainers utilizing CPR manikins, AED trainers, and live-fire props.',
    problemPt: 'Equipas sem competência prática para agir nos primeiros 5 minutos de uma emergência médica ou princípio de incêndio.',
    problemEn: 'Workforce lacking muscle memory and competence to react during the crucial first 5 minutes of a trauma incident or electrical fire.',
    scopePt: [
      'Primeiros Socorros no Trabalho (Suporte Básico de Vida, DAE, estancamento de hemorragias, queimaduras e imobilização)',
      'Prevenção e Combate a Incêndios (Classes de fogo, manuseamento de extintores CO2/Pó Químico, linhas de mangueira)',
      'Formação de Brigadas de Emergência com exercícios práticos',
      'Emissão de Certificado Individual e Declaração da Entidade com verificação'
    ],
    scopeEn: [
      'Workplace First Aid (Basic Life Support / BLS, AED, hemorrhage control, burn triage, and limb immobilization)',
      'Fire Prevention & Fighting (Fire classes, operation of CO2 and Dry Chemical Powder extinguishers, hose lines)',
      'Internal Fire Warden and Emergency Brigade coaching with realistic scenarios',
      'Issuance of Individual Verifiable Certificates and Corporate Training Accreditation'
    ],
    deliverablesPt: [
      'Certificados individuais com código de autenticidade para cada formando',
      'Relatório de Desempenho e Aproveitamento da Turma para os Recursos Humanos',
      'Manual Didático ilustrado de Primeiros Socorros e Combate a Incêndios'
    ],
    deliverablesEn: [
      'Individual certificates bearing verifiable security QR codes for each trainee',
      'Corporate Class Assessment & Readiness Report for Human Resources',
      'Illustrated First Aid & Fire Fighting Reference Handbook'
    ],
    methodologyPt: '40% Fundamentação Teórica Interativa + 60% Prática Intensiva em simuladores e campo.',
    methodologyEn: '40% Interactive Theoretical Instruction + 60% Intensive Hands-on drills on manikins and fire props.',
    targetAudiencePt: 'Trabalhadores designados, membros da CIPA/CSST, guardas de segurança, supervisores e motoristas.',
    targetAudienceEn: 'Designated workplace first aiders, CSST members, security personnel, floor supervisors, and fleet drivers.',
    estimatedDurationPt: '8h a 16h letivas (1 a 2 dias por turma)',
    estimatedDurationEn: '8 to 16 instructional hours (1 to 2 days per cohort)',
    iconName: 'GraduationCap'
  },
  {
    id: 'sistemas-iso45001',
    category: 'formacao-sistemas',
    isPriority: true,
    titlePt: 'Implementação e Auditorias ISO 45001 (Sistemas de Gestão de SSO)',
    titleEn: 'ISO 45001 Implementation & Occupational Health & Safety Auditing',
    shortDescPt: 'Estruturação completa de sistemas de gestão de SSO alinhados com o padrão internacional de excelência ISO 45001:2018.',
    shortDescEn: 'Turnkey structuring and audit preparation of OHS Management Systems aligned with ISO 45001:2018 international standards.',
    problemPt: 'Dificuldade em qualificar-se como fornecedor para multinacionais e operadores de Megaprojetos em Moçambique por falta de ISO 45001.',
    problemEn: 'Barriers to pre-qualifying as an approved tier-1 supplier for megaprojects and multinational operators without ISO 45001 credentials.',
    scopePt: [
      'Diagnóstico inicial (Gap Analysis) face aos requisitos da norma ISO 45001:2018',
      'Elaboração de procedimentos mandatários, política de SSO e manuais operacionais',
      'Capacitação de auditores internos da organização',
      'Acompanhamento presencial durante a auditoria de certificação oficial (Fase 1 e 2)'
    ],
    scopeEn: [
      'Baseline Gap Analysis against all ISO 45001:2018 standard clauses',
      'Drafting of mandatory policies, risk registers, operational controls, and procedures',
      'Internal auditor certification course for corporate personnel',
      'Full technical accompaniment during Stage 1 and Stage 2 certification audits'
    ],
    deliverablesPt: [
      'Sistema de Gestão de SSO documentalmente pronto para auditoria externa',
      'Relatório de Auditoria Interna com tratamento de não-conformidades',
      'Certificação da equipa de auditores internos da empresa'
    ],
    deliverablesEn: [
      'Audit-ready OHS Management System documentation library',
      'Formal Internal Audit Report with non-conformance remediation tracks',
      'Internal Auditor Credentials issued to key staff'
    ],
    methodologyPt: 'Diagnosticar o estado atual → Desenvolver documentação prática → Formar a liderança e operadores → Auditar internamente → Apoiar a certificação.',
    methodologyEn: 'Current state diagnostic → Lean procedure creation → Leadership coaching → Internal audit execution → Certification audit support.',
    targetAudiencePt: 'Diretores de Operações, Diretores Gerais, Gestores de Qualidade e HSE de médias e grandes empresas.',
    targetAudienceEn: 'Operations Directors, Managing Directors, QA/HSE Managers of medium to large enterprises.',
    estimatedDurationPt: '3 a 6 meses de consultoria estruturada',
    estimatedDurationEn: '3 to 6 months structured consulting program',
    iconName: 'Award'
  }
];

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    id: 'course-first-aid',
    code: 'WORTI-TR-01',
    titlePt: 'Primeiros Socorros no Local de Trabalho (Suporte Básico de Vida)',
    titleEn: 'Workplace First Aid & Basic Life Support (BLS)',
    durationHours: 16,
    categoryPt: 'Saúde e Emergência',
    categoryEn: 'Health & Emergency',
    formatPt: 'Presencial / Prático com simuladores',
    formatEn: 'In-person / Hands-on simulation',
    certificationPt: 'Certificado de Competência emitido pela WORTI Safety (Válido por 2 anos)',
    certificationEn: 'Competency Certificate issued by WORTI Safety (2-year validity)',
    targetPt: 'Socorristas designados da empresa, supervisores de turno, encarregados e motoristas.',
    targetEn: 'Designated company first aiders, shift supervisors, site foremen, and transport drivers.',
    summaryPt: 'Ensina a resposta imediata em situações de trauma, paragem cardiorrespiratória, hemorragias e desmaios antes da chegada de assistência médica especializada.',
    summaryEn: 'Covers urgent intervention in industrial trauma, cardiac arrest, severe bleeding, and fractures prior to emergency medical transfer.',
    modulesPt: [
      'Avaliação primária e secundária da vítima (Algoritmo ABCDE)',
      'Suporte Básico de Vida (SBV) com Ressuscitação Cardiopulmonar (RCP) em adultos',
      'Utilização prática de Desfibrilhador Automático Externo (DAE)',
      'Controlo e tamponamento de hemorragias graves e choque hipovolémico',
      'Queimaduras químicas, elétricas e térmicas: desfechos e primeiros cuidados',
      'Imobilização de membros e transporte de vítimas com colar cervical'
    ],
    modulesEn: [
      'Primary and secondary casualty assessment (ABCDE algorithm)',
      'Adult Basic Life Support (BLS) and high-quality cardiopulmonary resuscitation (CPR)',
      'Hands-on operation of Automated External Defibrillators (AED)',
      'Control of catastrophic hemorrhage and hypovolemic shock management',
      'Thermal, chemical, and electrical burn stabilization protocols',
      'Cervical spine stabilization and safe casualty transport'
    ]
  },
  {
    id: 'course-fire-fighting',
    code: 'WORTI-TR-02',
    titlePt: 'Prevenção e Combate a Incêndios (Básico e Avançado)',
    titleEn: 'Industrial Firefighting & Prevention (Basic & Advanced)',
    durationHours: 8,
    categoryPt: 'Emergência e Prevenção',
    categoryEn: 'Emergency & Fire Safety',
    formatPt: 'Teoria + Prática com Fogo Real controlado',
    formatEn: 'Classroom Theory + Live-Fire Field Drills',
    certificationPt: 'Certificado de Brigadista de Emergência WORTI Safety',
    certificationEn: 'WORTI Safety Emergency Fire Warden Certificate',
    targetPt: 'Membros da brigada de incêndio, pessoal de segurança patrimonial e operadores fabris.',
    targetEn: 'Fire brigade wardens, facility security officers, and manufacturing operators.',
    summaryPt: 'Capacita os formandos para intervir prontamente em focos de incêndio com extintores e bocas de incêndio, coordenando evacuações com segurança.',
    summaryEn: 'Equips trainees to extinguish incipient industrial fires safely using extinguishers and hose reels while executing orderly plant evacuations.',
    modulesPt: [
      'Triângulo e tetraedro do fogo: classes A, B, C, D e K',
      'Agentes extintores: água, espuma mecânica, pó químico e CO2',
      'Técnicas de aproximação e combate com extintores portáteis',
      'Operação de carretéis de mangueira armada e hidrantes industriais',
      'Procedimentos de evacuação de emergência e contagem em Ponto de Encontro'
    ],
    modulesEn: [
      'Chemistry of combustion: fire tetrahedron and classes A, B, C, D, and K',
      'Extinguishing agents: water, aqueous film-forming foams, dry chemicals, and CO2',
      'Safe tactical approach and suppression using portable extinguishers',
      'Industrial fire hose reel and hydrant deployment techniques',
      'Orderly evacuation leadership and assembly point muster roll control'
    ]
  },
  {
    id: 'course-working-heights',
    code: 'WORTI-TR-03',
    titlePt: 'Trabalho Seguro em Altura (Conformidade com Normas Internacionais)',
    titleEn: 'Safe Working at Heights (International Standards Compliant)',
    durationHours: 16,
    categoryPt: 'Segurança Operacional Crítica',
    categoryEn: 'Critical Operational Safety',
    formatPt: 'Presencial / Torres e andaimes de treino',
    formatEn: 'In-person / Training scaffolds and towers',
    certificationPt: 'Credencial Técnica de Trabalho em Altura WORTI Safety',
    certificationEn: 'WORTI Safety Heights Authorization Credential',
    targetPt: 'Trabalhadores da construção civil, montadores de andaimes, pintores e eletricistas industriais.',
    targetEn: 'Construction crews, scaffolders, industrial painters, and high-voltage electricians.',
    summaryPt: 'Fundamentos de retenção de quedas, inspeção rigorosa de arneses de segurança, ancoragens seguras e cálculo do fator de queda.',
    summaryEn: 'Core principles of fall arrest, meticulous harness inspection, structural anchor point calculations, and fall clearance factor math.',
    modulesPt: [
      'Legislação e responsabilidades no trabalho em altura (> 1,80 metros)',
      'Inspeção pré-uso de arnês de corpo inteiro, lingas e absorvedores de energia',
      'Linhas de vida horizontais e verticais: temporárias e definitivas',
      'Montagem, inspeção e etiquetagem segura de andaimes tubulares',
      'Noções de resgate de emergência em suspensão inerte'
    ],
    modulesEn: [
      'Statutory regulations and duties when working above 1.80 meters',
      'Pre-use inspection of full-body harnesses, lanyards, and energy absorbers',
      'Horizontal and vertical lifelines: temporary synthetic vs. permanent wire systems',
      'Safe tubular scaffold inspection, tagging, and handover checklists',
      'Suspension trauma fundamentals and emergency victim retrieval maneuvers'
    ]
  },
  {
    id: 'course-confined-spaces',
    code: 'WORTI-TR-04',
    titlePt: 'Segurança e Entrada em Espaços Confinados',
    titleEn: 'Safe Entry & Work in Confined Spaces',
    durationHours: 16,
    categoryPt: 'Segurança Operacional Crítica',
    categoryEn: 'Critical Operational Safety',
    formatPt: 'Presencial com simulador e detetor de 4 gases',
    formatEn: 'In-person with mock vessel and 4-gas detector',
    certificationPt: 'Certificado de Vigia e Trabalhador Autorizado em Espaço Confinado',
    certificationEn: 'Confined Space Authorized Entrant & Attendant Credential',
    targetPt: 'Técnicos de tanques, silos de cereais, estações de tratamento (ETAR) e canalizações.',
    targetEn: 'Storage tank cleaners, grain silo technicians, wastewater operators, and piping teams.',
    summaryPt: 'Controlo rigoroso de atmosferas perigosas, procedimentos de isolamento com bloqueio/etiquetagem (LOTO) e funções do vigia externo.',
    summaryEn: 'Precise atmospheric hazard testing, lockout/tagout (LOTO) energy isolation, and specialized duties of standby attendants.',
    modulesPt: [
      'Definição e caracterização de espaços confinados na indústria',
      'Atmosferas perigosas: asfixiantes, tóxicas (H2S, CO) e inflamáveis (LEL)',
      'Calibração e operação de detetores multigás portáteis',
      'Bloqueio de energias perigosas (LOTO) mecânicas, hidráulicas e elétricas',
      'Permissão de Entrada e Trabalho (PET) e funções do Vigia de Segurança'
    ],
    modulesEn: [
      'Industrial confined space criteria and hazard classification',
      'Atmospheric hazards: oxygen-deficient, toxic (H2S, CO), and combustible (LEL)',
      'Bump testing and operational use of portable 4-gas monitors',
      'Lockout/Tagout (LOTO) isolation of electrical, pneumatic, and fluid energies',
      'Confined Space Entry Permits and the non-negotiable role of Standby Attendants'
    ]
  },
  {
    id: 'course-csst-cipa',
    code: 'WORTI-TR-05',
    titlePt: 'Comités de Segurança e Saúde no Trabalho (CSST / CIPA)',
    titleEn: 'Workplace Safety & Health Committees (CSST) Leadership',
    durationHours: 12,
    categoryPt: 'Gestão e Conformidade',
    categoryEn: 'Management & Governance',
    formatPt: 'Presencial ou Sessão Híbrida',
    formatEn: 'In-person or Hybrid Interactive Workshop',
    certificationPt: 'Certificado de Membro Ativo de Comité de HST',
    certificationEn: 'Certified CSST Workplace Safety Committee Member',
    targetPt: 'Membros eleitos e designados do Comité de Segurança da empresa, representantes sindicais e RH.',
    targetEn: 'Elected and employer-appointed CSST committee members, labor union reps, and HR teams.',
    summaryPt: 'Capacita a comissão paritária para conduzir investigações de incidentes, realizar inspeções mensais e dinamizar a cultura de segurança na empresa.',
    summaryEn: 'Prepares the joint management-worker committee to investigate accidents, conduct monthly safety rounds, and elevate plant safety culture.',
    modulesPt: [
      'Legislação de Moçambique sobre a obrigatoriedade dos Comités de HST',
      'Metodologias de Investigação de Acidentes e Árvore de Causas (5 Porquês)',
      'Técnicas de inspeção de segurança nos postos de trabalho',
      'Elaboração e dinamização de Diálogos Diários de Segurança (DDS)',
      'Acompanhamento de planos de ação e reuniões ordinárias de segurança'
    ],
    modulesEn: [
      'Mozambican statutory requirements establishing Workplace Safety Committees',
      'Root Cause Accident Investigation methods (5 Whys and Cause Tree analysis)',
      'Workplace proactive safety walk and hazard spotting techniques',
      'Facilitating high-impact Tool Box Talks (TBT / DDS) on the shop floor',
      'Action item accountability and chairing productive safety committee meetings'
    ]
  },
  {
    id: 'course-iso-internal-auditor',
    code: 'WORTI-TR-06',
    titlePt: 'Auditor Interno de Sistemas de Gestão ISO 45001 e ISO 14001',
    titleEn: 'Internal Auditor: ISO 45001 & ISO 14001 Integrated Systems',
    durationHours: 24,
    categoryPt: 'Sistemas e Certificação',
    categoryEn: 'Management Systems & Audit',
    formatPt: 'Presencial Executivo ou Online Síncrono',
    formatEn: 'Executive In-person or Synchronous Online',
    certificationPt: 'Certificado de Auditor Interno WORTI Safety (Alinhado com ISO 19011)',
    certificationEn: 'WORTI Safety Certified Internal Auditor (ISO 19011 compliant)',
    targetPt: 'Engenheiros de processo, responsáveis de qualidade, coordenadores de ambiente e diretores técnicos.',
    targetEn: 'Process engineers, quality controllers, environmental officers, and technical managers.',
    summaryPt: 'Desenvolve competências práticas para planear, conduzir e relatar auditorias internas ao abrigo das normas internacionais de segurança e ambiente.',
    summaryEn: 'Develops practical auditing mastery to schedule, execute, and report internal audits under global safety and environmental benchmarks.',
    modulesPt: [
      'Estrutura de Alto Nível (HLS) das normas ISO 45001:2018 e ISO 14001:2015',
      'Diretrizes da ISO 19011 para auditorias de sistemas de gestão',
      'Elaboração de planos de auditoria e listas de verificação (checklists)',
      'Técnicas de amostragem, entrevista e recolha de evidências objetivas',
      'Redação técnica de constatações: Não-Conformidades, Observações e Oportunidades de Melhoria'
    ],
    modulesEn: [
      'High-Level Structure (HLS) shared by ISO 45001:2018 and ISO 14001:2015',
      'ISO 19011 standard principles for auditing management systems',
      'Formulating audit schedules, scopes, and customized verification checklists',
      'Sampling techniques, objective evidence collection, and professional interview tactics',
      'Drafting precise audit findings: Non-conformities, Observations, and Improvement Opportunities'
    ]
  }
];

export const SECTORS_DATA: SectorItem[] = [
  {
    id: 'industria-manufatura',
    titlePt: 'Indústria e Manufatura',
    titleEn: 'Industrial Manufacturing',
    descriptionPt: 'Unidades fabris de bebidas, cimento, metalurgia, química e plásticos com processos mecânicos intensivos.',
    descriptionEn: 'Beverage plants, cement works, metallurgy, plastics, and chemicals with intensive mechanical handling.',
    iconName: 'Factory',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    keyHazardsPt: ['Aprisionamento em partes móveis de máquinas', 'Ruído industrial contínuo (>85 dBA)', 'Exposição a vapores e poeiras', 'Manuseamento de cargas pesadas'],
    keyHazardsEn: ['Pinch points in moving machinery', 'Continuous industrial noise (>85 dBA)', 'Dust and toxic fume exposure', 'Heavy manual materials handling'],
    solutionsPt: ['Proteção mecânica e bloqueio de energias LOTO', 'Dosimetria e enclausuramento de compressores', 'Auditoria de conformidade legal de Moçambique', 'Formação da CSST'],
    solutionsEn: ['Machine guarding and LOTO energy isolation', 'Dosimetry surveys and acoustic baffling', 'Mozambique statutory compliance audit', 'Workplace safety committee coaching'],
    caseStudy: {
      titlePt: 'Redução de 72% nos desvios de segurança numa fábrica de bebidas na Matola',
      titleEn: '72% reduction in safety deviations at a Matola beverage manufacturing facility',
      challengePt: 'A empresa registava paragens frequentes devido a quase-acidentes em linhas de enchimento rápido e queixas de ruído.',
      challengeEn: 'The plant suffered recurrent near-miss shutdowns on high-speed bottling lines alongside severe auditory fatigue complaints.',
      solutionPt: 'A WORTI Safety implementou um programa de auditoria mensal, mapas de ruído com cálculo de atenuação de protetores auriculares e treino LOTO para 84 operadores.',
      solutionEn: 'WORTI Safety rolled out a monthly audit cadence, noise contour maps with acoustic PPE sizing, and targeted LOTO drills for 84 line workers.',
      resultPt: 'Zero acidentes com baixa durante 18 meses consecutivos e qualificação plena na auditoria corporativa do grupo.',
      resultEn: 'Zero lost-time injuries over 18 consecutive months and flawless score on the international group corporate audit.'
    }
  },
  {
    id: 'construcao-infraestruturas',
    titlePt: 'Construção Civil e Infraestruturas',
    titleEn: 'Construction & Civil Engineering',
    descriptionPt: 'Obras viárias, pontes, edifícios comerciais e obras públicas de grande porte em todo o país.',
    descriptionEn: 'Highway corridors, bridges, commercial skyscrapers, and large-scale public civil works across Mozambique.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    keyHazardsPt: ['Quedas em altura', 'Soterramento em escavações profundas', 'Atropelamento por maquinaria pesada', 'Eletrocussão em redes temporárias'],
    keyHazardsEn: ['Falls from elevated structures', 'Trench collapse and soil instability', 'Plant vehicle and pedestrian collision', 'Electrocution on temporary site grids'],
    solutionsPt: ['Certificação de linhas de vida e andaimes', 'Planos de Segurança e Saúde (PSS) de obra', 'Controlo de acessos e PTW para trabalhos críticos', 'Simulacros de evacuação de estaleiro'],
    solutionsEn: ['Scaffold inspection and certified lifelines', 'Site Health and Safety Plans (HSP)', 'Strict Permit-to-Work gatekeeping', 'Site-wide emergency evacuation drills'],
    caseStudy: {
      titlePt: 'Gestão de HST num projeto de infraestrutura logística de 14 meses',
      titleEn: 'Full-spectrum HSE oversight on a 14-month logistical infrastructure project',
      challengePt: 'Estaleiro com mais de 250 trabalhadores de múltiplos subempreiteiros com baixa cultura de prevenção e prazos curtos.',
      challengeEn: 'Jobsite with 250+ workers from multiple subcontractors with disparate safety mindsets and tight milestone penalties.',
      solutionPt: 'Coordenação de segurança diária pela WORTI Safety, induções obrigatórias para 100% dos operários e inspeção diária de andaimes e escavações.',
      solutionEn: 'Resident HSE supervisory coordination, mandatory entry inductions for 100% of subcontractors, and daily pre-task trench checks.',
      resultPt: 'Conclusão da obra sem ocorrência de acidentes graves ou fatalidades, com elogio formal da entidade fiscalizadora.',
      resultEn: 'Successful project completion with zero critical injuries or fatalities, earning official commendation from the public oversight board.'
    }
  },
  {
    id: 'energia-gas',
    titlePt: 'Energia, Petróleo e Gás',
    titleEn: 'Energy, Oil & Gas Operations',
    descriptionPt: 'Operações de exploração, refino, transporte e distribuição de gás natural liquefeito (GNL) e energia elétrica.',
    descriptionEn: 'Natural gas (LNG) exploration, liquefaction, pipeline logistics, distribution, and high-voltage electricity grids.',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80',
    keyHazardsPt: ['Atmosferas inflamáveis e risco de explosão (ATEX)', 'Trabalhos em alta tensão', 'Vazamentos de H2S e hidrocarbonetos', 'Operações remotas offshore/onshore'],
    keyHazardsEn: ['Flammable atmospheres and explosion hazards (ATEX)', 'High-voltage electric flashovers', 'H2S and hydrocarbon leakage', 'Remote offshore/onshore logistics'],
    solutionsPt: ['Auditorias de segurança de processo e conformidade ISO 45001', 'Treino de espaços confinados e deteção de gases', 'Planos de Emergência Médica e Evacuação Remota', 'Procedimentos de isolamento de energia LOTO'],
    solutionsEn: ['Process safety management and ISO 45001 audits', 'Confined space entry and multi-gas monitor certification', 'Remote Medical Emergency and Medevac protocols', 'Robust Lockout/Tagout energy isolation'],
  },
  {
    id: 'mineracao-extracao',
    titlePt: 'Mineração e Extração Mineral',
    titleEn: 'Mining & Mineral Extraction',
    descriptionPt: 'Concessões de carvão, areias pesadas, grafite, pedras preciosas e rochas ornamentais.',
    descriptionEn: 'Coal mines, heavy mineral sands, graphite, gemstones, and ornamental rock concessions across Tete and Cabo Delgado.',
    iconName: 'Pickaxe',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    keyHazardsPt: ['Inalação de poeira de sílica livre cristalizada', 'Vibração de corpo inteiro e ruído de pás carregadoras', 'Tráfego intenso de camiões dumper', 'Estabilidade de taludes e desmoronamentos'],
    keyHazardsEn: ['Inhalation of crystalline respirable silica dust', 'Whole-body vibration and haul truck acoustic load', 'Heavy dump truck vehicle interactions', 'Pit wall instability and slope failures'],
    solutionsPt: ['Amostragem gravimétrica de poeiras respiráveis', 'Avaliação ergonómica de operadores de frota pesada', 'Planos de Gestão de Resíduos e Efluentes Mineiros', 'Capacitação contínua em Primeiros Socorros em Trauma'],
    solutionsEn: ['Gravimetric respirable silica air sampling', 'Ergonomic assessments for heavy equipment operators', 'Mine Tailings and Chemical Waste Management Plans', 'Trauma-focused Emergency First Aid certification'],
  },
  {
    id: 'logistica-portos',
    titlePt: 'Logística, Portos e Transportes',
    titleEn: 'Ports, Logistics & Transportation',
    descriptionPt: 'Terminais de contentores, armazéns alfandegados, frotas rodoviárias e operações marítimo-portuárias.',
    descriptionEn: 'Container terminals, bonded logistics hubs, bulk freight fleets, and port handling berths in Maputo and Beira.',
    iconName: 'Truck',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    keyHazardsPt: ['Interação entre empilhadores e peões', 'Queda de contentores e cargas suspensas', 'Fadiga de motoristas de longo curso', 'Derrames de substâncias químicas em trânsito'],
    keyHazardsEn: ['Forklift and pedestrian corridor interactions', 'Suspended load drops and container handling risks', 'Long-haul freight driver fatigue and sleep apnea', 'Hazardous material chemical transit leaks'],
    solutionsPt: ['Planos de circulação e segregação física de tráfego', 'Auditoria de amarração e elevação de cargas', 'Programas de saúde do motorista e combate ao cansaço', 'Fichas de emergência e kits de derramamento'],
    solutionsEn: ['Site traffic management and physical pedestrian segregation', 'Rigging gear inspections and lifting tackle audits', 'Driver health surveillance and alertness monitoring', 'Hazmat transit emergency guides and spill response kits'],
  },
  {
    id: 'hotelaria-turismo',
    titlePt: 'Hotelaria, Restauração e Serviços',
    titleEn: 'Hospitality, Catering & Commercial Services',
    descriptionPt: 'Resorts turísticos, cadeias hoteleiras executivas, restaurantes e centros de convenções.',
    descriptionEn: 'Coastal safari resorts, executive business hotels, food service chains, and Maputo convention centers.',
    iconName: 'Hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    keyHazardsPt: ['Contaminações alimentares em cozinhas centrais', 'Incêndios em zonas de caldeiras e lavandaria', 'Ergonomia em limpeza e camareiras', 'Segurança química de piscinas e saneamento'],
    keyHazardsEn: ['Food contamination risks in central kitchens', 'Fire hazards in boilers and laundry plants', 'Housekeeping repetitive ergonomic strains', 'Pool chemical sanitization hazards'],
    solutionsPt: ['Auditorias HACCP e higiene alimentar', 'Planos de emergência e treino de evacuação de hóspedes', 'Laudos ergonómicos para equipas de governança', 'Fichas de segurança para químicos de limpeza'],
    solutionsEn: ['HACCP food safety hygiene audits', 'Emergency egress plans and guest evacuation training', 'Ergonomic reviews for housekeeping staff', 'Chemical safety protocols for sanitation products'],
  }
];

export const TECHNICAL_ARTICLES: ResourceArticle[] = [
  {
    id: 'guia-avaliacao-riscos-mocambique',
    titlePt: 'Como preparar uma Avaliação de Riscos Ocupacionais segundo a Lei de Moçambique',
    titleEn: 'How to Build an Occupational Risk Assessment under Mozambique Labor Laws',
    categoryPt: 'Legislação e Conformidade',
    categoryEn: 'Legislation & Compliance',
    readTime: '6 min de leitura',
    date: 'Setembro 2026',
    tags: ['Lei do Trabalho', 'HST', 'Matriz de Risco', 'Moçambique'],
    summaryPt: 'Passo a passo prático para estruturar o levantamento de perigos e a matriz de riscos da sua empresa, garantindo conformidade com a Lei nº 13/2023.',
    summaryEn: 'Step-by-step methodology to map hazards and build an auditable workplace risk matrix in full compliance with Mozambique Law no. 13/2023.',
    contentPt: `A avaliação de riscos é o alicerce de qualquer sistema eficaz de Saúde e Segurança no Trabalho (HST). Em Moçambique, a Lei do Trabalho nº 13/2023 reforça o dever inalienável da entidade empregadora de assegurar condições adequadas de higiene, segurança e saúde para todos os colaboradores.

### 1. Levantamento exaustivo de perigos por posto de trabalho
Não avalie apenas os riscos óbvios. Deve incluir:
- Perigos Físicos (ruído de compressores, iluminação insuficiente, vibração);
- Perigos Químicos (solventes, vapores, poeiras de cimento ou sílica);
- Perigos Ergonómicos (levantamento manual de sacos, postura sentada prolongada);
- Perigos de Acidente (trabalho em altura, circuitos elétricos desprotegidos).

### 2. A metodologia da Matriz Probabilidade x Severidade
Para cada perigo identificado, atribua uma nota de 1 a 5 para a Probabilidade de ocorrência e de 1 a 5 para a Gravidade do dano. O produto determina o nível de risco:
- Baixo (1-5): Manter controlos existentes;
- Médio (6-12): Implementar melhorias planeadas em 30 a 60 dias;
- Alto / Crítico (15-25): Paragem imediata ou implementação urgente de salvaguardas.

### 3. A Hierarquia dos Controlos de Engenharia
Sempre que possível, priorize:
1. Eliminar o perigo;
2. Substituir por alternativa segura;
3. Controlos de Engenharia (enclausuramento, exaustão localizada);
4. Controlos Administrativos (procedimentos, rotação de turnos, sinalização);
5. Equipamentos de Proteção Individual (EPI) como última linha de defesa.`,
    contentEn: `Workplace risk assessment is the cornerstone of any occupational safety system. In Mozambique, Labor Law no. 13/2023 reinforces the employer's fundamental obligation to provide safe, sanitary, and healthy work environments.

### 1. Exhaustive Hazard Identification per Workstation
Include physical, chemical, biological, ergonomic, and accident hazards.

### 2. Likelihood vs. Severity Matrix
Score probability (1-5) multiplied by severity (1-5) to rank hazards from low to intolerable.

### 3. Hierarchy of Controls
Always prioritize engineering measures over personal protective equipment.`
  },
  {
    id: 'checklist-seguranca-espacos-confinados',
    titlePt: 'Checklist Crítica para Entrada Segura em Espaços Confinados',
    titleEn: 'Critical Checklist for Safe Entry into Industrial Confined Spaces',
    categoryPt: 'Procedimentos Críticos',
    categoryEn: 'Critical Procedures',
    readTime: '4 min de leitura',
    date: 'Agosto 2026',
    tags: ['Espaços Confinados', 'Gases Tóxicos', 'LOTO', 'PTW'],
    summaryPt: 'Os 7 pontos vitais que nunca podem ser ignorados antes de autorizar a entrada de qualquer operador em tanques, poços ou reservatórios.',
    summaryEn: 'The 7 vital checkpoints that must never be bypassed prior to permitting any worker into tanks, vaults, or underground sumps.',
    contentPt: `Os acidentes em espaços confinados são responsáveis por um número desproporcional de fatalidades na indústria e construção civil. Na maioria dos casos trágicos, as vítimas secundárias são os próprios colegas que tentam um resgate sem equipamento autónomo de respiração.

### Os 7 Passos Obrigatórios da WORTI Safety:
1. **Emissão da Permissão de Trabalho Seguro (PTS / PTW)** assinada pelo gestor técnico responsável da área;
2. **Bloqueio e Etiquetagem (LOTO)** de todas as tubagens de alimentação, misturadores mecânicos e fontes elétricas;
3. **Monitorização Atmosférica Contínua** com detetor portátil de 4 gases calibrado nos últimos 30 dias (Oxigénio 19.5%-23.5%, LEL < 10%, CO < 25 ppm, H2S < 10 ppm);
4. **Ventilação Mecânica Forçada** com insuflador de ar limpo antes da entrada e durante todo o período de trabalho;
5. **Presença Permanente do Vigia Externo** munido de rádio e apito, com instrução estrita de JAMAIS entrar no espaço confinado;
6. **Arneses de Resgate e Tripé com Guincho** instalados e prontos sobre a boca de visita;
7. **Equipamento de Respiração Autónomo de Escape** disponível para a equipa de intervenção imediata.`,
    contentEn: `Confined space incidents cause disproportionate fatalities across industry. Secondary victims are frequently untrained coworkers attempting heroic rescues without breathing apparatus. Follow the 7 non-negotiable checks.`
  },
  {
    id: 'primeiros-passos-iso45001',
    titlePt: 'Primeiros Passos para Implementar a ISO 45001 na sua Organização',
    titleEn: 'First Strategic Steps to Implement ISO 45001 in Your Organization',
    categoryPt: 'Sistemas de Gestão',
    categoryEn: 'Management Systems',
    readTime: '7 min de leitura',
    date: 'Julho 2026',
    tags: ['ISO 45001', 'Gestão SSO', 'Certificação', 'Liderança'],
    summaryPt: 'Como sair do papel e criar um Sistema de Gestão de Segurança robusto que valoriza a empresa perante investidores e clientes exigentes.',
    summaryEn: 'How to transition from paper policies to a living Occupational Health and Safety Management System that wins tier-1 corporate contracts.',
    contentPt: `A norma ISO 45001:2018 substituiu definitivamente a antiga OHSAS 18001, trazendo uma mudança fundamental: a segurança no trabalho deixa de ser um anexo burocrático e passa a ser parte integrante da liderança estratégica da organização.

### 1. O Papel Decisivo da Alta Direção
Na ISO 45001, a liderança não pode simplesmente delegar a segurança ao técnico de HST. A administração é auditada diretamente sobre a sua alocação de recursos, a sua presença no chão de fábrica e a promoção de uma cultura em que os trabalhadores podem recusar tarefas perigosas sem retaliação.

### 2. A Consulta e Participação dos Trabalhadores (Cláusula 5.4)
Um sistema de gestão construído apenas por consultores dentro de um gabinete está condenado ao insucesso. A norma exige que os operadores sejam ativamente consultados no desenho dos procedimentos operacionais e na seleção de EPIs.

### 3. Da Avaliação à Melhoria Contínua (Ciclo PDCA)
- **Plan (Planear):** Identificar perigos, requisitos legais e definir objetivos mensuráveis;
- **Do (Fazer):** Desenvolver competências, controlar fornecedores e gerir mudanças;
- **Check (Verificar):** Medir desempenho através de auditorias internas e monitorizações higiénicas;
- **Act (Agir):** Tratar não-conformidades na raiz e atualizar os planos na Revisão pela Gestão.`,
    contentEn: `ISO 45001:2018 transformed occupational safety from administrative compliance into executive leadership accountability.`
  }
];

export const CHECKLISTS_DATA: ChecklistItem[] = [
  {
    id: 'chk-espacos-confinados',
    titlePt: 'Checklist de Verificação Pré-Entrada em Espaço Confinado',
    titleEn: 'Pre-Entry Verification Checklist for Confined Spaces',
    category: 'Procedimentos Críticos',
    items: [
      { id: 'ec-1', textPt: 'A Permissão de Trabalho (PTW) foi preenchida e assinada pelo responsável técnico?', textEn: 'Has the Safe Work Permit (PTW) been completed and authorized?', critical: true },
      { id: 'ec-2', textPt: 'O teste atmosférico registou níveis seguros de O2 (entre 19.5% e 23.5%) e ausência de LEL/gases tóxicos?', textEn: 'Did the calibrated atmospheric test record safe O2 (19.5%-23.5%) and safe LEL/toxic gas levels?', critical: true },
      { id: 'ec-3', textPt: 'Todas as linhas de fluidos e fontes de energia mecânica/elétrica foram bloqueadas (LOTO)?', textEn: 'Have all fluid lines and mechanical/electrical power sources been isolated (LOTO)?', critical: true },
      { id: 'ec-4', textPt: 'O sistema de ventilação mecânica forçada está em funcionamento contínuo?', textEn: 'Is forced mechanical air ventilation operating continuously?', critical: true },
      { id: 'ec-5', textPt: 'Existe um Vigia Externo posicionado em permanência à entrada do espaço?', textEn: 'Is a designated standby safety attendant permanently stationed outside the access hatch?', critical: true },
      { id: 'ec-6', textPt: 'O tripé de resgate com guincho mecânico e arnês de segurança estão prontos e inspecionados?', textEn: 'Are the retrieval tripod, winch, and rescue harness inspected and secured over the entry?', critical: false },
      { id: 'ec-7', textPt: 'Os operadores possuem comunicação rádio ou sinalização visual confirmada com o exterior?', textEn: 'Do entrants have functional two-way radio or verified visual communication with the attendant?', critical: false }
    ]
  },
  {
    id: 'chk-inspecao-rapida-hst',
    titlePt: 'Checklist de Inspeção Rápida de Segurança nas Instalações',
    titleEn: 'Rapid Workplace Safety & Hygiene Walkthrough Checklist',
    category: 'Auditoria Interna',
    items: [
      { id: 'ir-1', textPt: 'Os extintores de incêndio estão dentro da validade, pressurizados e com acesso desobstruído?', textEn: 'Are fire extinguishers within service date, pressurized, and free of physical obstruction?', critical: true },
      { id: 'ir-2', textPt: 'As vias de evacuação e saídas de emergência estão sinalizadas e totalmente desimpedidas?', textEn: 'Are emergency egress pathways and exits clearly illuminated and unblocked?', critical: true },
      { id: 'ir-3', textPt: 'Todos os colaboradores no posto utilizam os EPIs obrigatórios (calçado de segurança, capacete, óculos)?', textEn: 'Are all personnel on the floor wearing mandatory PPE (safety boots, hard hat, eye protection)?', critical: true },
      { id: 'ir-4', textPt: 'Os quadros elétricos estão fechados, sinalizados com perigo e sem fios expostos?', textEn: 'Are electrical distribution panels locked, signposted with danger warnings, and free of exposed wires?', critical: true },
      { id: 'ir-5', textPt: 'Os produtos químicos perigosos possuem rótulo em português e estão sobre bacias de retenção?', textEn: 'Are hazardous chemicals labeled in Portuguese and staged over secondary containment spill bunds?', critical: false },
      { id: 'ir-6', textPt: 'O estojo de primeiros socorros está abastecido e sob responsabilidade de socorrista identificado?', textEn: 'Is the workplace first aid kit replenished and under the custody of a trained first aider?', critical: false },
      { id: 'ir-7', textPt: 'As instalações sanitárias e pontos de água potável cumprem os requisitos de higiene?', textEn: 'Do washroom facilities and potable drinking water points meet sanitary regulatory hygiene criteria?', critical: false }
    ]
  }
];

export const DIAGNOSTIC_QUESTIONS = [
  {
    id: 'q1',
    questionPt: 'A sua empresa já realizou uma avaliação formal de riscos nos últimos 12 meses?',
    questionEn: 'Has your company conducted a formal workplace risk assessment in the past 12 months?',
    options: [
      { textPt: 'Sim, atualizada com matriz detalhada e plano de ação', textEn: 'Yes, fully updated with risk matrix and action plan', points: 3 },
      { textPt: 'Temos um documento antigo que carece de revisão', textEn: 'We have an older document that needs review', points: 1 },
      { textPt: 'Não dispomos de avaliação formal de riscos', textEn: 'We do not have a formal risk assessment document', points: 0 }
    ]
  },
  {
    id: 'q2',
    questionPt: 'Como é gerida a conformidade com a legislação laboral de Moçambique (Lei nº 13/2023 e Diploma 48/73)?',
    questionEn: 'How is statutory compliance with Mozambique Labor legislation managed in your business?',
    options: [
      { textPt: 'Temos auditoria periódica com plano formal de conformidade', textEn: 'We have periodic audits with a formal compliance register', points: 3 },
      { textPt: 'Tentamos cumprir, mas temos dúvidas sobre novas exigências', textEn: 'We try to comply but have gaps regarding new decrees', points: 1 },
      { textPt: 'Não temos controlo sistemático das obrigações legais', textEn: 'We lack systematic tracking of our statutory safety duties', points: 0 }
    ]
  },
  {
    id: 'q3',
    questionPt: 'Os colaboradores realizam exames médicos de saúde ocupacional (Admissão, Periódicos e Saída)?',
    questionEn: 'Do your employees undergo occupational medical exams (Pre-employment, Periodic, Exit)?',
    options: [
      { textPt: 'Sim, 100% dos exames em dia com fichas de aptidão válidas', textEn: 'Yes, 100% up to date with valid fitness certificates', points: 3 },
      { textPt: 'Apenas exames admissionais para alguns colaboradores', textEn: 'Only pre-employment exams for a few roles', points: 1 },
      { textPt: 'Não realizamos exames médicos ocupacionais regulares', textEn: 'We do not conduct regular occupational health checks', points: 0 }
    ]
  },
  {
    id: 'q4',
    questionPt: 'Dispõe de plano de emergência contra incêndios com brigada treinada e simulacros anuais?',
    questionEn: 'Do you have an active fire emergency response plan with trained wardens and annual drills?',
    options: [
      { textPt: 'Sim, brigada treinada, rotas afixadas e simulacro realizado', textEn: 'Yes, trained brigade, posted maps, and drill conducted', points: 3 },
      { textPt: 'Temos extintores, mas sem plano formal ou brigada treinada', textEn: 'We have extinguishers, but no formal plan or trained wardens', points: 1 },
      { textPt: 'Não dispomos de procedimentos de emergência estruturados', textEn: 'We do not have structured emergency procedures', points: 0 }
    ]
  },
  {
    id: 'q5',
    questionPt: 'A organização monitoriza agentes físicos ou químicos (ruído industrial, poeiras, vapores)?',
    questionEn: 'Does your facility monitor physical or chemical agents (industrial noise, dust, vapors)?',
    options: [
      { textPt: 'Sim, com medições acreditadas e mapas de ruído/poeira', textEn: 'Yes, calibrated measurements and noise/dust exposure maps', points: 3 },
      { textPt: 'Fornecemos EPIs, mas sem medição instrumental prévia', textEn: 'We supply PPE, but have no prior quantitative measurements', points: 1 },
      { textPt: 'Ainda não realizámos estudos de higiene industrial', textEn: 'We have not yet carried out industrial hygiene surveys', points: 0 }
    ]
  }
];
