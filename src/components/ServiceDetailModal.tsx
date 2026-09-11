import React from 'react';
import { 
  X, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Clock, 
  Users, 
  ArrowRight, 
  Workflow,
  MessageCircle,
  ShieldAlert
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestProposal: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestProposal
}) => {
  const { t } = useLanguage();

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#064E3B] via-[#053F24] to-[#042E1B] text-white p-6 sm:p-7 relative border-b-4 border-[#009639]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-bold uppercase tracking-wider">
              {service.category.replace('-', ' ')}
            </span>
            {service.isPriority && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#009639] text-white text-[11px] font-bold uppercase tracking-wider">
                {t('Serviço Prioritário', 'Core Service')}
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white pr-8">
            {t(service.titlePt, service.titleEn)}
          </h3>
          <p className="text-sm text-emerald-100/90 mt-2 max-w-2xl leading-relaxed">
            {t(service.shortDescPt, service.shortDescEn)}
          </p>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Section: The Business Problem */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4.5">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>{t('O Desafio Empresarial que Resolve:', 'The Business Challenge It Solves:')}</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
              {t(service.problemPt, service.problemEn)}
            </p>
          </div>

          {/* Section: Scope */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#064E3B] flex items-center gap-2 mb-3">
              <ShieldAlert className="w-4 h-4 text-[#009639]" />
              <span>{t('Âmbito e Atividades Técnicas', 'Technical Scope & Activities')}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(t(service.scopePt.join('|||'), service.scopeEn.join('|||'))).split('|||').map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#009639] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Deliverables */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#064E3B] flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-[#009639]" />
              <span>{t('Entregáveis Formais e Documentação', 'Formal Deliverables & Reports')}</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {(t(service.deliverablesPt.join('|||'), service.deliverablesEn.join('|||'))).split('|||').map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#009639] mt-2 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4-Step Methodology */}
          <div className="bg-[#E8F8EE]/70 border border-[#009639]/30 rounded-xl p-4 sm:p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#064E3B] flex items-center gap-2 mb-2">
              <Workflow className="w-4 h-4 text-[#009639]" />
              <span>{t('Metodologia de Execução WORTI Safety', 'WORTI Safety Execution Methodology')}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {t(service.methodologyPt, service.methodologyEn)}
            </p>
          </div>

          {/* Metadata Grid: Audience & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200 text-xs">
            <div className="flex items-start gap-2.5 text-slate-700">
              <Users className="w-4 h-4 text-[#00873E] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#064E3B] font-bold">{t('Público-Alvo / Decisores:', 'Target Audience:')}</strong>
                <span>{t(service.targetAudiencePt, service.targetAudienceEn)}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-slate-700">
              <Clock className="w-4 h-4 text-[#00873E] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#064E3B] font-bold">{t('Duração Típica:', 'Estimated Duration:')}</strong>
                <span>{t(service.estimatedDurationPt, service.estimatedDurationEn)}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer CTAs */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(`Olá WORTI Safety, gostaria de tirar dúvidas sobre o serviço: ${t(service.titlePt, service.titleEn)}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#009639] text-[#009639] text-xs font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('Falar com Especialista no WhatsApp', 'Chat with Specialist on WhatsApp')}</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onRequestProposal(service.id);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white text-xs sm:text-sm font-bold shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-emerald-400/30"
          >
            <span>{t('Solicitar Proposta para este Serviço', 'Request Proposal for this Service')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
