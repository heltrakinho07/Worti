import React from 'react';
import { X, ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/mockData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-[#064E3B] via-[#053F24] to-[#042E1B] text-white p-6 flex items-center justify-between border-b-4 border-[#009639]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#34d399]" />
            <div>
              <h3 className="text-lg font-bold text-white">
                {t('Política de Privacidade e Proteção de Dados', 'Privacy & Data Protection Policy')}
              </h3>
              <p className="text-xs text-emerald-100/90">
                WORTI Safety, Lda. — Maputo, Moçambique
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-600 max-h-[70vh] overflow-y-auto leading-relaxed">
          <div>
            <h4 className="font-bold text-[#064E3B] text-sm mb-1">
              1. {t('Compromisso de Confidencialidade Corporativa', 'Corporate Confidentiality Commitment')}
            </h4>
            <p>
              {t(
                'A WORTI Safety, Lda. compreende que os dados de auditoria de segurança, mapas de risco e informações de processos industriais dos seus clientes são estritamente confidenciais. Todos os colaboradores e consultores da WORTI Safety estão vinculados por acordos de confidencialidade (NDA).',
                'WORTI Safety, Lda. understands that safety audit data, risk registers, and industrial process information provided by our clients are strictly confidential. All our engineers and consultants are bound by non-disclosure agreements (NDAs).'
              )}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#064E3B] text-sm mb-1">
              2. {t('Finalidade da Recolha de Dados nos Formulários', 'Purpose of Form Data Collection')}
            </h4>
            <p>
              {t(
                'Os dados recolhidos através dos formulários de pedido de proposta e contacto (nome, empresa, cargo, email, telefone e descrição do projeto) destinam-se exclusivamente à elaboração de propostas técnico-comerciais e ao agendamento de reuniões técnicas. Jamais comercializamos ou partilhamos dados com terceiros.',
                'The information collected via our quotation request forms (full name, company name, corporate email, phone, and project scope) is used solely to prepare commercial proposals and schedule technical advisory sessions. We never sell or transfer data to third parties.'
              )}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#064E3B] text-sm mb-1">
              3. {t('Cookies e Métricas de Navegação', 'Cookies & Analytics Metrics')}
            </h4>
            <p>
              {t(
                'Este website utiliza cookies técnicos essenciais para assegurar a seleção de idioma (Português / Inglês) e métricas analíticas anónimas para otimização da experiência do utilizador.',
                'This website uses essential technical cookies to remember language preferences (Portuguese / English) and anonymous aggregate metrics to enhance navigation performance.'
              )}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#064E3B] text-sm mb-1">
              4. {t('Direitos do Titular dos Dados e Contactos Oficiais', 'Data Subject Rights & Contact')}
            </h4>
            <p>
              {t(
                `Para solicitar a retificação ou eliminação dos dados da sua empresa das nossas comunicações, basta enviar um pedido formal para ${COMPANY_INFO.emailPrimary} com a referência "Privacidade de Dados".`,
                `To request access, rectification, or deletion of your corporate contact data, please send an inquiry to ${COMPANY_INFO.emailPrimary} with the subject "Data Privacy Inquiry".`
              )}
            </p>
          </div>
        </div>

        <div className="bg-slate-50 border-t border-slate-200 p-4 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white text-xs font-bold transition-colors cursor-pointer border border-emerald-400/30"
          >
            {t('Compreendi e Aceito', 'Understood & Accepted')}
          </button>
        </div>
      </div>
    </div>
  );
};
