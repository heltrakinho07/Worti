import React from 'react';
import { 
  Shield, 
  ShieldCheck, 
  ShieldAlert,
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Factory, 
  Search,
  SlidersHorizontal,
  Flame,
  Wind,
  HeartPulse,
  Recycle,
  GraduationCap,
  Sparkles,
  ChevronRight,
  ClipboardCheck,
  HardHat,
  TrendingUp,
  Award,
  Users,
  Building,
  Phone,
  Mail
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO, SERVICES_DATA, SECTORS_DATA, TECHNICAL_ARTICLES } from '../data/mockData';
import { DiagnosticTool } from '../components/DiagnosticTool';
import { WortiLogo } from '../components/WortiLogo';
import { ServiceItem } from '../types';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onRequestProposal: (serviceId?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onRequestProposal,
  onSelectService
}) => {
  const { t } = useLanguage();

  // 5 Stages of PGRO directly from Official Poster 1
  const pgroStages = [
    {
      step: '01',
      titlePt: 'IDENTIFICAÇÃO DE RISCOS',
      titleEn: 'HAZARD IDENTIFICATION',
      descPt: 'Mapeamento visual e técnico de perigos físicos, químicos, biológicos e ergonómicos no local de trabalho.',
      descEn: 'On-site technical walk-through identifying physical, chemical, biological, and ergonomic hazards.',
      icon: Search
    },
    {
      step: '02',
      titlePt: 'AVALIAÇÃO DE RISCOS',
      titleEn: 'RISK ASSESSMENT',
      descPt: 'Matriz de probabilidade e severidade (APR/IPERC) quantificando o grau de periculosidade de cada atividade.',
      descEn: 'Severity and probability matrix assessing risk exposure levels across all operational tasks.',
      icon: ClipboardCheck
    },
    {
      step: '03',
      titlePt: 'CONTROLO DOS RISCOS',
      titleEn: 'RISK CONTROL',
      descPt: 'Implementação da hierarquia de controlo: eliminação, salvaguardas de engenharia, procedimentos e EPIs.',
      descEn: 'Hierarchy of control implementation: engineering safeguards, administrative protocols, and certified PPE.',
      icon: ShieldCheck
    },
    {
      step: '04',
      titlePt: 'CAPACITAÇÃO & CONSCIENTIZAÇÃO',
      titleEn: 'TRAINING & AWARENESS',
      descPt: 'Treino prático contínuo, integração de novos colaboradores e desenvolvimento de líderes de segurança.',
      descEn: 'Hands-on safety induction, specialized workforce drill certifications, and supervisory awareness.',
      icon: HardHat
    },
    {
      step: '05',
      titlePt: 'MONITORAMENTO E REVISÃO',
      titleEn: 'MONITORING & REVIEW',
      descPt: 'Auditorias periódicas, reavaliação anual do PGRO e vigilância da saúde ocupacional dos colaboradores.',
      descEn: 'Periodic compliance re-audits, occupational health checkups, and annual program revisions.',
      icon: TrendingUp
    }
  ];

  // 4 Core Practical Drills directly from Official Poster 2
  const coreTrainings = [
    {
      titlePt: 'PRIMEIROS SOCORROS',
      titleEn: 'FIRST AID & CPR',
      descPt: 'Suporte Básico de Vida (SBV), controlo de hemorragias, imobilização e atuação rápida com manequins de treino.',
      descEn: 'Basic Life Support (BLS), trauma bleeding control, stabilization, and hands-on CPR drills.',
      image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80',
      courseId: 'curso-primeiros-socorros'
    },
    {
      titlePt: 'COMBATE AO INCÊNDIO',
      titleEn: 'FIREFIGHTING DRILLS',
      descPt: 'Classes de fogo, manuseio seguro de extintores pressurizados, mangueiras, evacuação e brigada de emergência.',
      descEn: 'Fire classes, pressurized extinguisher handling, fire hoses, safe evacuation, and emergency brigade readiness.',
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
      courseId: 'curso-combate-incendios'
    },
    {
      titlePt: 'TRABALHO EM ALTURA',
      titleEn: 'WORKING AT HEIGHTS',
      descPt: 'Inspeção e ajuste de arnês tipo paraquedista, linhas de vida, andaimes, escadas e técnicas de retenção de quedas.',
      descEn: 'Full-body safety harness fitting, lifelines, scaffold inspection, ladder safety, and fall arrest protocols.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=600&q=80',
      courseId: 'curso-trabalho-altura'
    },
    {
      titlePt: 'ESPAÇO CONFINADO',
      titleEn: 'CONFINED SPACES',
      descPt: 'Deteção de gases com multidetetores calibrados, tripé de resgate, ventilação forçada e procedimentos de vigia.',
      descEn: 'Multi-gas detector calibration, rescue tripod systems, forced ventilation, and certified entry watcher duties.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      courseId: 'curso-espacos-confinados'
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION: Official WORTI Primary Green & Forest Identity */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0FDF4] via-white to-white pt-10 sm:pt-16 pb-16 border-b border-emerald-100">
        
        {/* Dual Diagonal Accents inspired by Poster 1 Top Corner */}
        <div className="absolute top-0 right-0 pointer-events-none hidden md:block overflow-hidden w-96 h-96">
          <div className="absolute -top-12 -right-12 w-64 h-20 bg-[#009639] rounded-full rotate-[-35deg] opacity-80 shadow-md" />
          <div className="absolute -top-20 -right-28 w-72 h-20 bg-[#064E3B] rounded-full rotate-[-35deg] opacity-90 shadow-md" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F8EE] border border-[#009639]/30 shadow-xs text-xs font-bold text-[#00873E]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#009639] animate-pulse" />
                <span>{t('Saúde, Segurança e Ambiente em Moçambique', 'Occupational Health, Safety & Environment in Mozambique')}</span>
              </div>

              {/* Strategic Heading with two-tone green hierarchy */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#064E3B] leading-[1.15]">
                {t('Transforme riscos em', 'Transform hazards into')}{' '}
                <span className="text-[#009639]">{t('controlo e conformidade.', 'control and compliance.')}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {t(
                  'Soluções integradas de Saúde, Segurança e Ambiente para organizações que procuram proteger vidas humanas, eliminar perigos operacionais e garantir a conformidade legal com a Lei do Trabalho de Moçambique.',
                  'Integrated Health, Safety, and Environmental solutions for organizations seeking to safeguard lives, eliminate operational hazards, and secure statutory compliance with Mozambican labor legislation.'
                )}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  id="btn-hero-quote"
                  onClick={() => onRequestProposal()}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#009639]/25 hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-emerald-400/30"
                >
                  <span>{t('Solicitar Proposta Comercial', 'Request Commercial Proposal')}</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <button
                  id="btn-hero-services"
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border-2 border-[#009639] hover:bg-[#009639] hover:text-white text-[#00873E] font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>{t('Conhecer os Serviços', 'Explore Services')}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Key Trust Highlights */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-2 sm:gap-4 text-left">
                <div className="p-2 sm:p-2.5">
                  <p className="text-xs font-bold text-[#064E3B]">Lei nº 13/2023</p>
                  <p className="text-[11px] text-slate-500">{t('Conformidade Laboral', 'Labor Compliance')}</p>
                </div>
                <div className="p-2 sm:p-2.5">
                  <p className="text-xs font-bold text-[#064E3B]">ISO 45001 & 14001</p>
                  <p className="text-[11px] text-slate-500">{t('Padrão Internacional', 'Global Standards')}</p>
                </div>
                <div className="p-2 sm:p-2.5">
                  <p className="text-xs font-bold text-[#064E3B]">Sede em Maputo</p>
                  <p className="text-[11px] text-slate-500">{t('Atuação Nacional', 'Nationwide Reach')}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual & Verified Metrics */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Card Image with Executive Forest Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#064E3B]">
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85" 
                    alt="WORTI Safety - Engenharia e Inspeção no Terreno" 
                    className="w-full h-80 sm:h-96 object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042E1B]/95 via-[#064E3B]/40 to-transparent" />
                  
                  {/* Overlay Brand Mark */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="bg-white/95 rounded-xl p-2.5 inline-block shadow-md mb-2">
                      <WortiLogo size="sm" variant="horizontal" theme="light" />
                    </div>
                    <p className="text-sm font-semibold text-white leading-snug">
                      "{t(COMPANY_INFO.taglinePt, COMPANY_INFO.taglineEn)}"
                    </p>
                    <p className="text-xs text-emerald-300 mt-1 font-medium">
                      {COMPANY_INFO.headquarters} • {COMPANY_INFO.serviceCoverage}
                    </p>
                  </div>
                </div>

                {/* Floating Stat Box 1 */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-emerald-100 flex items-center gap-3.5 max-w-[240px]">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#009639] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-lg font-extrabold text-[#064E3B] leading-none block">
                      +140 Empresas
                    </span>
                    <span className="text-[11px] text-slate-600 font-medium leading-tight block mt-0.5">
                      {t('Apoiadas em auditorias e formações', 'Supported across audits & training')}
                    </span>
                  </div>
                </div>

                {/* Floating Stat Box 2 */}
                <div className="absolute -top-4 -right-2 sm:-right-4 bg-white rounded-2xl p-3.5 shadow-xl border border-emerald-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#009639] text-white flex items-center justify-center shrink-0 font-bold text-xs">
                    HST
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#064E3B] block">
                      {COMPANY_INFO.teamSize}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      {t('Engenheiros & Técnicos', 'Engineers & Officers')}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EXCLUSIVE PGRO SECTION: Directly inspired by Official Poster 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#009639] text-white text-xs font-bold uppercase tracking-wider shadow-xs">
            <Shield className="w-3.5 h-3.5" />
            <span>{t('Destaque Técnico Oficial', 'Official Technical Focus')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight">
            PGRO — <span className="text-[#009639]">{t('Programa de Gerenciamento de Riscos Ocupacionais', 'Occupational Risk Management Program')}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t(
              'O PGRO é o instrumento central para prevenir acidentes, garantir a salubridade dos postos de trabalho e assegurar plena conformidade legal. A nossa abordagem técnica estrutura-se em 5 etapas fundamentais:',
              'The PGRO is the operational backbone for hazard mitigation and statutory compliance. Our field methodology executes across 5 core stages:'
            )}
          </p>
        </div>

        {/* 5 Circular Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pgroStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-[#009639] shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between text-center group relative overflow-hidden"
              >
                {/* Top Step Number */}
                <div className="absolute top-3 right-3 text-xs font-mono font-bold text-slate-300 group-hover:text-[#009639] transition-colors">
                  {stage.step}
                </div>

                <div>
                  {/* Circular Icon with Green Focus */}
                  <div className="w-16 h-16 rounded-full bg-[#009639] group-hover:bg-[#064E3B] text-white flex items-center justify-center mx-auto mb-4 border-4 border-emerald-100 group-hover:border-[#009639]/40 transition-all duration-300 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xs font-extrabold text-[#064E3B] uppercase tracking-wide leading-tight mb-2">
                    {t(stage.titlePt, stage.titleEn)}
                  </h3>

                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {t(stage.descPt, stage.descEn)}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-center text-[11px] font-semibold text-[#009639]">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  <span>{t('Etapa Auditada', 'Audited Phase')}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Organic Green Wave Banner from Poster 1 */}
        <div className="bg-gradient-to-r from-[#064E3B] via-[#00873E] to-[#009639] text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden border border-emerald-400/30">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="bg-white p-3 rounded-2xl shadow-sm shrink-0">
              <WortiLogo size="sm" variant="full" theme="light" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {t('Mais segurança, saúde e produtividade para a sua empresa.', 'More safety, health and productivity for your organization.')}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 mt-1">
                {t('Diagnóstico inicial sem compromisso com visita técnica de campo em Maputo e províncias.', 'Initial diagnostic walkthrough with our senior engineers across Mozambique.')}
              </p>
            </div>
          </div>

          <button
            onClick={() => onRequestProposal('pgro-avaliacao-riscos')}
            className="px-6 py-3 rounded-xl bg-white hover:bg-emerald-50 text-[#064E3B] font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95 shrink-0 cursor-pointer border border-white/40"
          >
            {t('Solicitar Estruturação do PGRO', 'Request PGRO Structuring')}
          </button>
        </div>

      </section>

      {/* 3. PRACTICAL TRAINING SHOWCASE: Directly inspired by Official Poster 2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-[#E8F8EE] text-[#00873E] border border-[#009639]/30 text-xs font-bold uppercase tracking-wider">
              {t('Capacitação Operacional Prática', 'Practical Workforce Training')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#064E3B] tracking-tight">
              {t('Os 4 Treinos de Alta Criticidade em Campo', 'The 4 High-Criticality Field Drills')}
            </h2>
            <p className="text-sm text-slate-600">
              {t(
                'Formações certificadas com 60% de carga horária em simulações reais com manequins de RCP, fogo real, arneses e detetores de gases.',
                'Certified trainings with 60% hands-on drills using CPR manikins, live fire pits, height harnesses, and multi-gas atmospheric sensors.'
              )}
            </p>
          </div>

          <button
            onClick={() => onNavigate('training')}
            className="px-5 py-2.5 rounded-xl border-2 border-[#009639] text-[#00873E] hover:bg-[#009639] hover:text-white font-bold text-xs transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>{t('Ver Catálogo Completo de Cursos', 'View Full Courses Catalog')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Quadrants Grid with Iconic Diagonal Sheared Green Tags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreTrainings.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#009639]"
            >
              <div>
                {/* Image Box */}
                <div className="h-48 w-full overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={t(item.titlePt, item.titleEn)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  {/* The Iconic Sheared Diagonal Green Ribbon from Poster 2 */}
                  <div className="absolute bottom-3 left-3">
                    <div className="inline-block bg-[#009639] text-white italic font-black uppercase text-xs sm:text-[13px] px-3.5 py-1.5 -skew-x-12 shadow-lg tracking-wide border-l-2 border-white">
                      <span className="inline-block skew-x-12">
                        {t(item.titlePt, item.titleEn)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t(item.descPt, item.descEn)}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onRequestProposal(item.courseId)}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#009639] hover:bg-[#007a2e] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>{t('Solicitar Turma In-Company', 'Request In-Company Cohort')}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CORPORATE TRUST & AUDIT STATS - Deep Forest Green */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#064E3B] via-[#053F24] to-[#042E1B] rounded-3xl text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden border-b-4 border-[#009639]">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#009639]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y-2 sm:divide-y-0 sm:divide-x divide-emerald-800/60">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6' : ''}`}>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#34d399] tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-emerald-100 mt-1 font-medium leading-snug">
                  {t(stat.labelPt, stat.labelEn)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#34d399]" />
              {t('Alinhamento rigoroso com a Lei nº 13/2023 e Normas ISO 45001 / ISO 14001', 'Strict compliance with Law no. 13/2023 & ISO 45001 / 14001 Standards')}
            </span>
            <span className="text-[#34d399] font-semibold">
              {COMPANY_INFO.serviceCoverage}
            </span>
          </div>
        </div>
      </section>

      {/* 5. BLOCO "COMO PODEMOS AJUDAR" - 5 ÁREAS COMERCIAIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-[#E8F8EE] text-[#00873E] text-xs font-bold uppercase tracking-wider border border-[#009639]/30">
            {t('Catálogo Estruturado de Soluções', 'Structured Solutions Catalog')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight">
            {t('Como podemos ajudar a sua organização', 'How we can empower your organization')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t(
              'A nossa oferta técnica está organizada por desafios empresariais reais, facilitando a identificação imediata da solução para a sua empresa.',
              'Our service portfolio is engineered around authentic operational challenges, enabling fast decision-making and decisive action.'
            )}
          </p>
        </div>

        {/* 5 Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Segurança e Riscos */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#009639] shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E8F8EE] text-[#00873E] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <ShieldAlert className="w-6 h-6 text-[#00873E]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#009639]">
                {t('Área 1', 'Pillar 1')}
              </span>
              <h3 className="text-lg font-bold text-[#064E3B] mt-1 mb-2">
                {t('Segurança e Gestão de Riscos (PGRO)', 'Safety & Risk Management (PGRO)')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {t(
                  'Auditorias SSO, identificação de perigos (APR), planos de emergência, trabalho em altura e espaços confinados.',
                  'OHS audits, hazard identification (JSA), emergency plans, heights and confined space entry safety.'
                )}
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009639] shrink-0" />
                  <span>{t('Auditoria de Conformidade Legal de Moçambique', 'Mozambique Regulatory Audit')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009639] shrink-0" />
                  <span>{t('Procedimentos de Trabalho Crítico e PTW', 'Permit to Work & Critical SOPs')}</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-[#00873E] hover:text-[#009639] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>{t('Ver serviços nesta área', 'View services in this pillar')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Saúde Ocupacional */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#009639] shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <HeartPulse className="w-6 h-6 text-rose-500" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600">
                {t('Área 2', 'Pillar 2')}
              </span>
              <h3 className="text-lg font-bold text-[#064E3B] mt-1 mb-2">
                {t('Saúde Ocupacional e Bem-estar', 'Occupational Health & Wellness')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {t(
                  'Programas de vigilância médica, prevenção de doenças profissionais, laudos ergonómicos e gestão de absentismo.',
                  'Medical surveillance programs, occupational illness prevention, ergonomic studies, and absenteeism control.'
                )}
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009639] shrink-0" />
                  <span>{t('Protocolos de Exames Admissionais e Periódicos', 'Periodic Medical Exam Protocols')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009639] shrink-0" />
                  <span>{t('Análise Ergonómica dos Postos de Trabalho', 'Workstation Ergonomic Assessments')}</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-[#00873E] hover:text-[#009639] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>{t('Ver serviços nesta área', 'View services in this pillar')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Higiene Industrial */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#009639] shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Wind className="w-6 h-6 text-teal-700" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#009639]">
                {t('Área 3', 'Pillar 3')}
              </span>
              <h3 className="text-lg font-bold text-[#064E3B] mt-1 mb-2">
                {t('Higiene Industrial e Dosimetria', 'Industrial Hygiene & Dosimetry')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {t(
                  'Monitorização científica acreditada de ruído, poeiras (respiráveis e sílica), vapores tóxicos, estresse térmico e iluminação.',
                  'Calibrated quantitative monitoring of noise, particulate dust, silica, toxic fumes, heat stress, and lux levels.'
                )}
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009639] shrink-0" />
                  <span>{t('Mapas de Ruído e Dosimetrias Pessoais', 'Noise Contour Maps & Personal Dosimetry')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009639] shrink-0" />
                  <span>{t('Inventário Químico e Fichas FDS / GHS', 'Chemical Inventory & GHS Safety Data')}</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-[#00873E] hover:text-[#009639] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>{t('Ver serviços nesta área', 'View services in this pillar')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Ambiente e Sustentabilidade (Inspired by Poster 3) */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#009639] shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#009639] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Recycle className="w-6 h-6 text-[#009639]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#009639]">
                {t('Área 4', 'Pillar 4')}
              </span>
              <h3 className="text-lg font-bold text-[#064E3B] mt-1 mb-2">
                {t('Ambiente, Resíduos e Sustentabilidade', 'Environment, Waste & Sustainability')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {t(
                  'Avaliação de impacto ambiental, planos de gestão de resíduos industriais perigosos, licenciamento e sistemas ISO 14001.',
                  'Environmental impact studies, licensing, hazardous waste containment, and ISO 14001 EMS.'
                )}
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009639] shrink-0" />
                  <span>{t('Plano de Gestão de Resíduos Perigosos', 'Hazardous Waste Management Plans')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009639] shrink-0" />
                  <span>{t('Licenciamento Ambiental com a AQUA', 'Environmental Statutory Permitting')}</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-[#00873E] hover:text-[#009639] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>{t('Ver serviços nesta área', 'View services in this pillar')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 5: Formação e Sistemas */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#009639] shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group md:col-span-2 lg:col-span-2">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00873E] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-[#00873E]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#009639]">
                {t('Área 5', 'Pillar 5')}
              </span>
              <h3 className="text-lg font-bold text-[#064E3B] mt-1 mb-2">
                {t('Formação Prática Certificada e Sistemas ISO', 'Certified Practical Training & ISO Systems')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {t(
                  'Capacitação prática em Primeiros Socorros, Combate a Incêndios, Trabalho em Altura, Espaços Confinados e consultoria para auditorias de certificação ISO 45001 / ISO 14001.',
                  'Certified practical training in First Aid, Firefighting, Heights, Confined Spaces, and turnkey ISO management systems implementation.'
                )}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009639] shrink-0" />
                  {t('Certificados Verificáveis individuais', 'Verifiable Individual Certificates')}
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009639] shrink-0" />
                  {t('Formação in-company nas vossas instalações', 'Custom in-company delivery on-site')}
                </span>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('training')}
                className="text-xs font-bold text-[#00873E] hover:text-[#009639] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>{t('Explorar Cursos de Formação', 'Explore Training Courses')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onRequestProposal('formacao-corporativa-geral')}
                className="px-4 py-2 rounded-lg bg-[#009639] hover:bg-[#007a2e] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                {t('Formação à Medida', 'Custom Training')}
              </button>
            </div>
          </div>

        </div>

        {/* Commercial Prompt Box */}
        <div className="bg-[#E8F8EE] rounded-2xl p-6 border border-[#009639]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#064E3B]">
              {t('Precisa de avaliar um risco específico na sua organização?', 'Need to assess a specific hazard in your organization?')}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              {t('A nossa equipa técnica pode realizar uma visita diagnóstica preliminar sem compromisso.', 'Our technical team can conduct a preliminary on-site diagnostic visit.')}
            </p>
          </div>
          <button
            onClick={() => onRequestProposal()}
            className="px-5 py-2.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white text-xs sm:text-sm font-bold shadow-sm transition-colors shrink-0 cursor-pointer"
          >
            {t('Falar com um Especialista', 'Speak with a Specialist')}
          </button>
        </div>
      </section>

      {/* 6. WORKERS & VALUES RECOGNITION: Inspired by Poster 4 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#064E3B] via-[#053F24] to-[#042E1B] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border-t-4 border-[#009639]">
          
          {/* Circular framing arc inspired by Poster 4 */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border-8 border-[#009639]/20 pointer-events-none" />
          <div className="absolute right-10 bottom-0 w-64 h-64 rounded-full border-2 border-white/10 pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#009639] text-white text-xs font-bold uppercase tracking-wider">
              <span>{t('Compromisso Humano', 'Human Commitment')}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              "{t('O vosso trabalho é o nosso maior valor.', 'Your work is our greatest value.')}"
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-normal">
              {t(
                'Na WORTI Safety, acreditamos que a segurança não é um mero requisito legal — é um compromisso ético com as pessoas que constroem a economia de Moçambique todos os dias.',
                'At WORTI Safety, we believe occupational health is an ethical commitment to the individuals who build Mozambique’s economy every single day.'
              )}
            </p>

            {/* 4 Core Pillars from Poster 4 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {['RESPEITO', 'SEGURANÇA', 'SUSTENTABILIDADE', 'COMPROMISSO'].map((val, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/10 border border-white/15 text-center">
                  <span className="text-xs sm:text-sm font-extrabold text-[#34d399] tracking-wider block">
                    {val}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onRequestProposal()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white font-bold text-sm shadow-xl transition-all cursor-pointer"
              >
                {t('Agendar Visita Técnica à Instalação', 'Schedule On-Site Technical Visit')}
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/30 hover:bg-white/10 text-white font-semibold text-sm transition-colors text-center cursor-pointer"
              >
                {t('Conhecer a Equipa & Missão', 'Learn About Team & Mission')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE DIAGNOSTIC TOOL */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <DiagnosticTool onRequestProposal={onRequestProposal} />
      </section>

      {/* 8. SECTORS IN MOZAMBIQUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-[#E8F8EE] text-[#00873E] text-xs font-bold uppercase tracking-wider border border-[#009639]/30">
              {t('Experiência Setorial em Moçambique', 'Sector Expertise in Mozambique')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#064E3B] tracking-tight">
              {t('Soluções adaptadas a cada setor de atividade', 'Solutions tailored to each industry sector')}
            </h2>
            <p className="text-sm text-slate-600">
              {t(
                'Cada indústria enfrenta matrizes de perigo distintas. Conheça as abordagens técnicas desenvolvidas para a realidade económica nacional.',
                'Each industry has unique hazard matrices. Explore our specialized approaches designed for Mozambique’s economic realities.'
              )}
            </p>
          </div>

          <button
            onClick={() => onNavigate('sectors')}
            className="px-5 py-2.5 rounded-xl border-2 border-[#009639] text-[#00873E] hover:bg-[#009639] hover:text-white font-bold text-xs transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>{t('Ver todos os setores & casos', 'View all sectors & cases')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS_DATA.slice(0, 6).map((sector) => (
            <div
              key={sector.id}
              onClick={() => onNavigate('sectors')}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#009639] shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 w-full overflow-hidden relative">
                  <img
                    src={sector.image}
                    alt={t(sector.titlePt, sector.titleEn)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white font-bold text-sm">
                    {t(sector.titlePt, sector.titleEn)}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {t(sector.descriptionPt, sector.descriptionEn)}
                  </p>

                  <div className="space-y-1">
                    <p className="text-[11px] font-bold text-[#064E3B] uppercase tracking-wider">
                      {t('Perigos Principais:', 'Key Hazards:')}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {sector.keyHazardsPt.slice(0, 2).map((h, i) => (
                        <span key={i} className="text-[10px] bg-[#E8F8EE] text-[#00873E] px-2 py-0.5 rounded-md font-semibold">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-[#00873E] font-bold group-hover:text-[#009639] transition-colors">
                <span>{t('Ver Soluções Técnicas', 'View Technical Solutions')}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TECHNICAL ARTICLES & GUIDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="px-3 py-1 rounded-full bg-[#E8F8EE] text-[#00873E] text-xs font-bold uppercase tracking-wider border border-[#009639]/30">
              {t('Biblioteca Técnica & Guias', 'Technical Library & Guides')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#064E3B] tracking-tight mt-1">
              {t('Conhecimento Prático sobre HST em Moçambique', 'Practical HSE Guidance in Mozambique')}
            </h2>
          </div>

          <button
            onClick={() => onNavigate('resources')}
            className="text-xs font-bold text-[#00873E] hover:text-[#009639] flex items-center gap-1.5 cursor-pointer"
          >
            <span>{t('Explorar todos os artigos & checklists', 'Explore all articles & checklists')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TECHNICAL_ARTICLES.map((art) => (
            <div
              key={art.id}
              onClick={() => onNavigate('resources')}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#009639] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                  <span className="font-semibold text-[#00873E] bg-[#E8F8EE] px-2 py-0.5 rounded">
                    {t(art.categoryPt, art.categoryEn)}
                  </span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="text-base font-bold text-[#064E3B] group-hover:text-[#009639] transition-colors leading-snug mb-2">
                  {t(art.titlePt, art.titleEn)}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {t(art.summaryPt, art.summaryEn)}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00873E] group-hover:text-[#009639]">
                <span>{t('Ler Artigo Completo', 'Read Full Guide')}</span>
                <ChevronRight className="w-4 h-4 text-[#009639] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

