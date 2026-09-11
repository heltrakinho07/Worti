import React, { useState } from 'react';
import { 
  Building2, 
  Factory, 
  Zap, 
  Pickaxe, 
  Truck, 
  Hotel, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SECTORS_DATA } from '../data/mockData';

interface SectorsViewProps {
  onRequestProposal: (serviceId?: string) => void;
}

export const SectorsView: React.FC<SectorsViewProps> = ({ onRequestProposal }) => {
  const { t } = useLanguage();
  const [activeSectorId, setActiveSectorId] = useState<string>(SECTORS_DATA[0].id);

  const activeSector = SECTORS_DATA.find(s => s.id === activeSectorId) || SECTORS_DATA[0];

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-[#E8F8EE] text-[#00873E] border border-[#009639]/30 text-xs font-bold uppercase tracking-wider">
          {t('Experiência Prática no Terreno', 'Practical Field Experience')}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#064E3B] tracking-tight">
          {t('Projetos e Setores em Moçambique', 'Sectors & Case Studies in Mozambique')}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {t(
            'Compreendemos as particularidades operacionais e os riscos específicos dos setores económicos prioritários no país, mantendo rigorosa confidencialidade corporativa.',
            'We understand the operational intricacies and sector-specific risk profiles across Mozambique’s priority industries, operating under strict client confidentiality.'
          )}
        </p>
      </div>

      {/* 2. Sector Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {SECTORS_DATA.map((sector) => {
          const isActive = sector.id === activeSectorId;
          return (
            <button
              key={sector.id}
              onClick={() => setActiveSectorId(sector.id)}
              className={`p-3.5 rounded-xl border text-center transition-all flex flex-col items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-[#009639] text-white border-[#009639] shadow-md scale-105'
                  : 'bg-white text-[#17313B] border-slate-200 hover:border-[#009639] hover:bg-slate-50'
              }`}
            >
              <span className="text-xs font-bold leading-tight">
                {t(sector.titlePt, sector.titleEn)}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. Deep Dive into Selected Sector */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Image side */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[500px]">
            <img
              src={activeSector.image}
              alt={t(activeSector.titlePt, activeSector.titleEn)}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/95 via-[#064E3B]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#064E3B] bg-emerald-100 px-2.5 py-0.5 rounded shadow-xs">
                {t('Setor em Foco', 'Spotlight Sector')}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {t(activeSector.titlePt, activeSector.titleEn)}
              </h3>
              <p className="text-xs text-emerald-100/90 leading-relaxed">
                {t(activeSector.descriptionPt, activeSector.descriptionEn)}
              </p>
            </div>
          </div>

          {/* Details side */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 flex flex-col justify-between">
            
            {/* Hazards vs Solutions */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5 mb-3">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>{t('Principais Perigos Operacionais do Setor:', 'Primary Sector Hazards:')}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(t(activeSector.keyHazardsPt.join('|||'), activeSector.keyHazardsEn.join('|||'))).split('|||').map((h, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-rose-50/70 border border-rose-100 text-xs text-rose-950 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#064E3B] flex items-center gap-1.5 mb-3">
                  <ShieldCheck className="w-4 h-4 text-[#009639]" />
                  <span>{t('Soluções Técnicas WORTI Safety:', 'WORTI Safety Engineering Solutions:')}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(t(activeSector.solutionsPt.join('|||'), activeSector.solutionsEn.join('|||'))).split('|||').map((s, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-950 font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#009639] shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study if present */}
              {activeSector.caseStudy && (
                <div className="bg-[#E8F8EE]/60 border border-[#009639]/30 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#064E3B] flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-[#009639]" />
                      {t('Caso de Estudo Real (Dados Confidenciais Protegidos)', 'Real Case Study (Confidential Data Anonymized)')}
                    </span>
                  </div>

                  <h5 className="text-sm font-bold text-[#064E3B]">
                    {t(activeSector.caseStudy.titlePt, activeSector.caseStudy.titleEn)}
                  </h5>

                  <div className="text-xs space-y-2 text-[#17313B]/85 leading-relaxed">
                    <p>
                      <strong className="text-[#064E3B]">{t('Desafio:', 'Challenge:')}</strong>{' '}
                      {t(activeSector.caseStudy.challengePt, activeSector.caseStudy.challengeEn)}
                    </p>
                    <p>
                      <strong className="text-[#064E3B]">{t('Intervenção WORTI:', 'WORTI Solution:')}</strong>{' '}
                      {t(activeSector.caseStudy.solutionPt, activeSector.caseStudy.solutionEn)}
                    </p>
                    <p className="font-semibold text-emerald-900 bg-emerald-100/70 p-2 rounded-lg">
                      <strong>{t('Resultado:', 'Result:')}</strong>{' '}
                      {t(activeSector.caseStudy.resultPt, activeSector.caseStudy.resultEn)}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Button */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {t('Apoio técnico disponível em todo o território nacional', 'Technical support available across all provinces')}
              </span>
              <button
                onClick={() => onRequestProposal()}
                className="px-6 py-2.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer border border-emerald-400/30"
              >
                <span>{t('Solicitar Proposta para este Setor', 'Request Proposal for this Sector')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
