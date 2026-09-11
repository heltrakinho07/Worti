import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/mockData';

interface MobileQuickBarProps {
  onRequestProposal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onRequestProposal }) => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] lg:hidden">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Phone Call */}
        <a
          id="mobile-quick-call"
          href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 text-[#064E3B] hover:bg-slate-200 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#00873E] mb-0.5" />
          <span className="text-[10px] font-bold">{t('Ligar', 'Call')}</span>
        </a>

        {/* WhatsApp */}
        <a
          id="mobile-quick-whatsapp"
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Olá WORTI Safety, gostaria de falar com a vossa equipa técnica.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#E8F8EE] text-[#009639] border border-[#009639]/30 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-[#009639] mb-0.5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* Proposal */}
        <button
          id="mobile-quick-proposal"
          onClick={onRequestProposal}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white shadow-sm transition-all cursor-pointer border border-emerald-400/30"
        >
          <FileText className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">{t('Proposta', 'Proposal')}</span>
        </button>
      </div>
    </div>
  );
};
