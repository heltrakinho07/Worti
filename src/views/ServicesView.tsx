import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  ShieldAlert, 
  HeartPulse, 
  Wind, 
  Recycle, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Users, 
  AlertTriangle,
  HelpCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES_DATA, COMPANY_INFO } from '../data/mockData';
import { ServiceCategory, ServiceItem } from '../types';

interface ServicesViewProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestProposal: (serviceId?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onSelectService,
  onRequestProposal
}) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: string; labelPt: string; labelEn: string; icon: any }[] = [
    { id: 'all', labelPt: 'Todos os Serviços', labelEn: 'All Services', icon: Filter },
    { id: 'seguranca-riscos', labelPt: 'Segurança e Riscos', labelEn: 'Safety & Risks', icon: ShieldAlert },
    { id: 'saude-ocupacional', labelPt: 'Saúde Ocupacional', labelEn: 'Occupational Health', icon: HeartPulse },
    { id: 'higiene-industrial', labelPt: 'Higiene Industrial', labelEn: 'Industrial Hygiene', icon: Wind },
    { id: 'ambiente-residuos', labelPt: 'Ambiente e Resíduos', labelEn: 'Environment & Waste', icon: Recycle },
    { id: 'formacao-sistemas', labelPt: 'Formação e ISO', labelEn: 'Training & ISO', icon: GraduationCap },
  ];

  const filteredServices = SERVICES_DATA.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = 
      service.titlePt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescPt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.problemPt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-[#E8F8EE] text-[#00873E] border border-[#009639]/30 text-xs font-bold uppercase tracking-wider">
          {t('Portfólio Técnico de Soluções B2B', 'B2B Technical Solutions Portfolio')}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#064E3B] tracking-tight">
          {t('Serviços de Saúde, Segurança e Ambiente', 'Health, Safety & Environmental Services')}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {t(
            'Soluções estruturadas para mitigar riscos, proteger vidas e garantir que a sua empresa opere em total conformidade com a Lei do Trabalho de Moçambique e normas ISO.',
            'Structured solutions to eliminate hazards, protect lives, and ensure your operations comply fully with Mozambique labor statutes and ISO benchmarks.'
          )}
        </p>
      </div>

      {/* 2. Filter Tabs & Search Bar */}
      <div className="space-y-4">
        
        {/* Search input */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder={t('Pesquisar por serviço, risco ou norma (ex: ruído, ISO, altura)...', 'Search service, risk or standard (e.g. noise, ISO, height)...')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639] bg-white shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap shadow-2xs cursor-pointer ${
                  isSelected
                    ? 'bg-[#009639] text-white shadow-sm border border-[#009639]'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <cat.icon className="w-3.5 h-3.5" />
                <span>{t(cat.labelPt, cat.labelEn)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Services Grid */}
      {filteredServices.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
          <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-[#064E3B]">
            {t('Nenhum serviço encontrado com esse termo', 'No services found for your search term')}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {t('Tente pesquisar por outro termo ou limpar os filtros.', 'Try searching for another keyword or clear filters.')}
          </p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 rounded-lg bg-[#E8F8EE] text-[#009639] text-xs font-bold hover:bg-[#d8f3e1] cursor-pointer"
          >
            {t('Ver Todos os Serviços', 'View All Services')}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#009639] shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div className="p-6 space-y-4">
                
                {/* Category badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00873E] bg-[#E8F8EE] px-2.5 py-1 rounded-md">
                    {service.category.replace('-', ' ')}
                  </span>
                  {service.isPriority && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#009639] bg-[#E8F8EE] border border-[#009639]/30 px-2 py-0.5 rounded">
                      {t('Essencial', 'Essential')}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 
                  onClick={() => onSelectService(service)}
                  className="text-base sm:text-lg font-bold text-[#064E3B] group-hover:text-[#009639] transition-colors leading-snug cursor-pointer"
                >
                  {t(service.titlePt, service.titleEn)}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t(service.shortDescPt, service.shortDescEn)}
                </p>

                {/* Business Challenge Box */}
                <div className="bg-amber-50/70 border-l-2 border-amber-400 p-2.5 rounded-r-md text-[11px] text-amber-950/80">
                  <strong className="block text-amber-900 font-semibold mb-0.5">
                    {t('Desafio que resolve:', 'Resolves challenge:')}
                  </strong>
                  <span className="line-clamp-2">{t(service.problemPt, service.problemEn)}</span>
                </div>

                {/* Scope Preview */}
                <div className="space-y-1.5 pt-1">
                  <p className="text-[11px] font-bold text-[#064E3B] uppercase tracking-wider">
                    {t('Entregáveis Principais:', 'Key Deliverables:')}
                  </p>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {(t(service.deliverablesPt.slice(0, 2).join('|||'), service.deliverablesEn.slice(0, 2).join('|||'))).split('|||').map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#009639] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-bold text-[#00873E] hover:text-[#009639] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>{t('Ver Detalhes Técnicos', 'View Technical Scope')}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  onClick={() => onRequestProposal(service.id)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#009639] hover:bg-[#007a2e] text-white text-xs font-semibold transition-colors shadow-2xs cursor-pointer border border-emerald-400/30"
                >
                  {t('Pedir Proposta', 'Get Quote')}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. Strategic Commercial Prompt */}
      <div className="bg-gradient-to-r from-[#064E3B] via-[#053F24] to-[#042E1B] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border-l-8 border-[#009639]">
        <div className="space-y-2 max-w-2xl text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {t('Precisa de avaliar este risco na sua organização?', 'Need to evaluate this risk in your organization?')}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            {t(
              'A WORTI Safety elabora propostas detalhadas com cronogramas e entregáveis claros em até 24 horas úteis para todo o país.',
              'WORTI Safety generates thorough proposals complete with timelines and deliverables within 24 business hours nationwide.'
            )}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
          <button
            onClick={() => onRequestProposal()}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer border border-emerald-400/30"
          >
            {t('Falar com um especialista', 'Speak with a specialist')}
          </button>
        </div>
      </div>

    </div>
  );
};
