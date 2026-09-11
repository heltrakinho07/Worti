import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  CheckSquare, 
  Square, 
  AlertCircle, 
  ShieldCheck, 
  Download,
  Share2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ChecklistItem } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface ChecklistModalProps {
  checklist: ChecklistItem | null;
  onClose: () => void;
  onRequestProposal: () => void;
}

export const ChecklistModal: React.FC<ChecklistModalProps> = ({
  checklist,
  onClose,
  onRequestProposal
}) => {
  const { t } = useLanguage();
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  if (!checklist) return null;

  const toggleCheck = (id: string) => {
    setCheckedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = checklist.items.filter(it => checkedIds[it.id]).length;
  const totalCount = checklist.items.length;
  const isAllChecked = completedCount === totalCount;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#064E3B] via-[#053F24] to-[#042E1B] text-white p-6 relative border-b-4 border-[#009639]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="px-2.5 py-0.5 rounded-full bg-[#009639] text-white text-[11px] font-bold uppercase tracking-wider">
            {checklist.category}
          </span>
          <h3 className="text-xl font-bold tracking-tight text-white mt-1 pr-8">
            {t(checklist.titlePt, checklist.titleEn)}
          </h3>
          <p className="text-xs text-emerald-100/90 mt-1">
            WORTI Safety, Lda. — {t('Ferramenta Operacional de Inspeção em Campo', 'Field Operations Inspection Tool')}
          </p>
        </div>

        {/* Counter bar */}
        <div className="bg-[#E8F8EE] px-6 py-3 border-b border-[#009639]/20 flex items-center justify-between text-xs">
          <span className="text-[#064E3B] font-bold">
            {t('Progresso da Verificação:', 'Verification Progress:')} {completedCount} / {totalCount} ({Math.round((completedCount / totalCount) * 100)}%)
          </span>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 text-[#00873E] hover:text-[#009639] font-semibold cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{t('Imprimir Folha', 'Print Sheet')}</span>
          </button>
        </div>

        {/* Items */}
        <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
          {checklist.items.map((item) => {
            const isChecked = !!checkedIds[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                  isChecked 
                    ? 'bg-emerald-50/70 border-emerald-300' 
                    : item.critical 
                      ? 'bg-amber-50/40 border-amber-200 hover:border-[#009639]' 
                      : 'bg-white border-slate-200 hover:border-[#009639]'
                }`}
              >
                <div className="mt-0.5 text-slate-400">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-[#009639]" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400" />
                  )}
                </div>

                <div className="flex-1">
                  <p className={`text-xs sm:text-sm font-medium ${isChecked ? 'text-emerald-950 line-through opacity-80' : 'text-[#17313B]'}`}>
                    {t(item.textPt, item.textEn)}
                  </p>
                  {item.critical && (
                    <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">
                      <AlertCircle className="w-3 h-3" />
                      {t('Verificação Crítica Obrigatória', 'Mandatory Critical Check')}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            {t(
              'Necessita de apoio técnico para auditoria presencial nas suas instalações?',
              'Need on-site technical support for safety audits at your facilities?'
            )}
          </p>
          <button
            onClick={() => {
              onClose();
              onRequestProposal();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white text-xs font-bold transition-colors cursor-pointer border border-emerald-400/30"
          >
            {t('Agendar Auditoria Presencial', 'Schedule On-Site Audit')}
          </button>
        </div>
      </div>
    </div>
  );
};
