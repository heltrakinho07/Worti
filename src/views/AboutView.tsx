import React from 'react';
import { 
  Shield, 
  Target, 
  Compass, 
  CheckCircle2, 
  Users, 
  Building, 
  Award, 
  MapPin, 
  ArrowRight,
  Scale,
  Sparkles,
  Briefcase
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/mockData';

interface AboutViewProps {
  onRequestProposal: (serviceId?: string) => void;
  onNavigate: (view: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onRequestProposal, onNavigate }) => {
  const { t } = useLanguage();

  const values = [
    {
      titlePt: 'Rigor Científico e Técnico',
      titleEn: 'Scientific & Technical Rigor',
      descPt: 'Baseamos diagnósticos e laudos em medições instrumentais calibradas e normas internacionais acreditadas.',
      descEn: 'We ground diagnostics in calibrated instrumental measurements and accredited international standards.'
    },
    {
      titlePt: 'Proteção da Vida Humana',
      titleEn: 'Protection of Human Life',
      descPt: 'A integridade física e o bem-estar dos colaboradores são o centro inegociável de cada recomendação.',
      descEn: 'Worker physical integrity and well-being represent the non-negotiable core of every recommendation.'
    },
    {
      titlePt: 'Conformidade e Ética Legal',
      titleEn: 'Compliance & Statutory Ethics',
      descPt: 'Domínio exaustivo da legislação de Moçambique, assegurando que os clientes operem protegidos contra passivos.',
      descEn: 'Exhaustive mastery of Mozambican regulations, ensuring client operations remain insulated from legal exposure.'
    },
    {
      titlePt: 'Confidencialidade Corporativa',
      titleEn: 'Corporate Confidentiality',
      descPt: 'Tratamento rigoroso de informações de processos fabris, dados médicos e investigações de incidentes com NDA.',
      descEn: 'Discreet handling of manufacturing proprietary data, medical records, and incident reports under NDAs.'
    }
  ];

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-[#E8F8EE] text-[#00873E] border border-[#009639]/30 text-xs font-bold uppercase tracking-wider">
          {t('Sobre a WORTI Safety, Lda.', 'About WORTI Safety, Lda.')}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#064E3B] tracking-tight">
          {t('Parceiros Técnicos em Saúde, Segurança e Ambiente em Moçambique', 'Technical Partners in Occupational Health, Safety & Environment in Mozambique')}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {t(
            'Com sede em Maputo e uma equipa multidisciplinar de 11 a 50 especialistas em higiene ocupacional, engenharia de segurança e sistemas de gestão, a WORTI Safety capacita empresas a operar com os mais elevados padrões de excelência operacional.',
            'Headquartered in Maputo with a multidisciplinary team of 11–50 specialists across occupational hygiene, safety engineering, and management systems, WORTI Safety enables businesses to operate with uncompromising operational standards.'
          )}
        </p>
      </div>

      {/* 2. Brand Positioning Quote */}
      <div className="bg-gradient-to-r from-[#064E3B] via-[#053F24] to-[#042E1B] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden border-l-8 border-[#009639]">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#34d399] bg-white/10 px-3 py-1 rounded-full inline-block">
            {t('A Nossa Assinatura e Posicionamento', 'Our Slogan & Positioning')}
          </p>
          <blockquote className="text-2xl sm:text-3xl font-bold italic text-white leading-snug">
            "{t(COMPANY_INFO.taglinePt, COMPANY_INFO.taglineEn)}"
          </blockquote>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed pt-2">
            {t(
              'Acreditamos que um ambiente de trabalho forte não é aquele que ignora os perigos, mas aquele que possui sistemas metódicos para antecipar, controlar e monitorizar continuamente os riscos operacionais.',
              'We believe a strong work environment is not one that ignores hazards, but one that institutes methodical systems to anticipate, control, and continuously monitor operational risks.'
            )}
          </p>
        </div>
      </div>

      {/* 3. Mission, Vision, Compromise */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Missão */}
        <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs space-y-3 hover:border-[#009639] transition-colors">
          <div className="w-12 h-12 rounded-xl bg-[#E8F8EE] text-[#009639] flex items-center justify-center">
            <Target className="w-6 h-6 text-[#009639]" />
          </div>
          <h3 className="text-lg font-bold text-[#064E3B]">
            {t('A Nossa Missão', 'Our Mission')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t(
              'Ajudar organizações em Moçambique a antecipar riscos, desenvolver competências e criar ambientes de trabalho seguros, saudáveis e conformes com a lei.',
              'Help organizations in Mozambique anticipate risks, develop employee skills, and build safe, healthy, and statutory-compliant work environments.'
            )}
          </p>
        </div>

        {/* Visão */}
        <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs space-y-3 hover:border-[#009639] transition-colors">
          <div className="w-12 h-12 rounded-xl bg-[#E8F8EE] text-[#009639] flex items-center justify-center">
            <Compass className="w-6 h-6 text-[#009639]" />
          </div>
          <h3 className="text-lg font-bold text-[#064E3B]">
            {t('A Nossa Visão', 'Our Vision')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t(
              'Ser a referência de confiança em Moçambique na engenharia de segurança ocupacional, higiene industrial e sistemas integrados ISO 45001 e ISO 14001.',
              'Be Mozambique’s most trusted authority in occupational safety engineering, industrial hygiene, and integrated ISO 45001 / ISO 14001 systems.'
            )}
          </p>
        </div>

        {/* Compromisso com Moçambique */}
        <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs space-y-3 hover:border-[#009639] transition-colors">
          <div className="w-12 h-12 rounded-xl bg-[#E8F8EE] text-[#009639] flex items-center justify-center">
            <Building className="w-6 h-6 text-[#009639]" />
          </div>
          <h3 className="text-lg font-bold text-[#064E3B]">
            {t('Compromisso Nacional', 'Mozambique Commitment')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t(
              'Contribuir ativamente para o desenvolvimento sustentável de Moçambique, valorizando o capital humano e apoiando a industrialização responsável.',
              'Actively advance Mozambique’s sustainable growth by safeguarding human capital and championing responsible industrial development.'
            )}
          </p>
        </div>

      </div>

      {/* 4. Values */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#064E3B]">
            {t('Princípios e Valores Operacionais', 'Operational Principles & Values')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {t('Como trabalhamos todos os dias em cada cliente e estaleiro.', 'How we conduct our work daily on every site and project.')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 space-y-2 hover:border-[#009639] transition-colors shadow-xs">
              <span className="w-8 h-8 rounded-lg bg-[#E8F8EE] border border-[#009639]/30 text-[#009639] font-bold text-xs flex items-center justify-center">
                0{idx + 1}
              </span>
              <h4 className="text-sm font-bold text-[#064E3B] pt-1">
                {t(v.titlePt, v.titleEn)}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t(v.descPt, v.descEn)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Team & Capabilities */}
      <div className="bg-[#F4FAF6] rounded-3xl p-8 sm:p-10 border border-[#009639]/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#E8F8EE] text-[#00873E] border border-[#009639]/30 text-xs font-bold uppercase tracking-wider">
              {t('Corpo Técnico Qualificado', 'Qualified Technical Team')}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#064E3B]">
              {t('Engenheiros, Higienistas e Médicos do Trabalho em Maputo', 'Safety Engineers, Hygienists & Occupational Doctors in Maputo')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {t(
                'A WORTI Safety conta com uma estrutura de 11 a 50 colaboradores empenhados na resolução prática de problemas. Dispomos de equipamento calibrado para dosimetria de ruído, amostragem de poeiras gravimétricas, detetores de 4 gases e simuladores avançados de primeiros socorros e combate a incêndios.',
                'WORTI Safety maintains a dedicated team of 11–50 professionals resolving real-world operational challenges. We utilize calibrated instrumentation for personal noise dosimetry, gravimetric particulate sampling, 4-gas monitors, and advanced trauma simulation gear.'
              )}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-[#064E3B]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#009639]" />
                {t('Engenharia de Segurança', 'Safety Engineering')}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#009639]" />
                {t('Higiene Ocupacional', 'Occupational Hygiene')}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#009639]" />
                {t('Medicina do Trabalho', 'Occupational Medicine')}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#009639]" />
                {t('Gestão Ambiental (ISO 14001)', 'Environmental Mgmt (ISO 14001)')}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#009639]" />
                {t('Formadores Certificados', 'Certified Instructors')}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#009639]" />
                {t('Auditores Líderes ISO 45001', 'ISO 45001 Lead Auditors')}
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 text-center space-y-2">
              <span className="text-3xl font-black text-[#064E3B] block">Maputo</span>
              <span className="text-xs text-slate-500 block">{COMPANY_INFO.address}</span>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-[#009639] font-bold">
                <MapPin className="w-4 h-4 text-[#009639]" />
                <span>{t('Atuação Nacional', 'Nationwide Coverage')}</span>
              </div>
            </div>

            <button
              onClick={() => onRequestProposal()}
              className="w-full py-3.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all text-center cursor-pointer border border-emerald-400/30"
            >
              {t('Solicitar Reunião de Apresentação', 'Request Intro Meeting')}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
