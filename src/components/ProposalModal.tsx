import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle, 
  ShieldCheck, 
  Building, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  MapPin, 
  FileText,
  MessageSquare,
  Clock,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ProposalRequest } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/mockData';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
  onOpenPrivacy: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  selectedServiceId,
  onOpenPrivacy
}) => {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState<ProposalRequest>({
    fullName: '',
    companyName: '',
    role: '',
    email: '',
    phone: '',
    sector: 'Indústria e Manufatura',
    serviceInterest: selectedServiceId || 'auditoria-sso-riscos',
    location: 'Maputo',
    employeesRange: '11–50 colaboradores',
    projectTimeline: 'Imediato (menos de 30 dias)',
    description: '',
    acceptedPrivacy: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  useEffect(() => {
    if (selectedServiceId) {
      setFormData(prev => ({ ...prev, serviceInterest: selectedServiceId }));
    }
  }, [selectedServiceId]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, acceptedPrivacy: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptedPrivacy) return;

    setIsSubmitting(true);
    // Simulate submission to corporate lead engine
    setTimeout(() => {
      const generatedCode = `WORTI-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedCode(generatedCode);
      setIsSubmitting(false);
    }, 900);
  };

  const resetAndClose = () => {
    setSubmittedCode(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#064E3B] via-[#053F24] to-[#042E1B] px-6 py-5 text-white flex items-center justify-between border-b-4 border-[#009639]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#009639] flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight text-white">
                {t('Solicitação de Proposta Comercial', 'Request Commercial Proposal')}
              </h3>
              <p className="text-xs text-emerald-100/90">
                {t('WORTI Safety, Lda. — Resposta técnica em até 24 horas úteis', 'WORTI Safety, Lda. — Technical response within 24 business hours')}
              </p>
            </div>
          </div>
          <button
            id="btn-close-proposal-modal"
            onClick={resetAndClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
          {submittedCode ? (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-[#E8F8EE] text-[#009639] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#064E3B]">
                  {t('Pedido de Proposta Submetido com Sucesso!', 'Proposal Request Successfully Submitted!')}
                </h4>
                <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  {t(
                    'Obrigado pelo seu contacto. A nossa equipa de engenharia e consultoria de HST em Maputo irá analisar as especificações da sua organização.',
                    'Thank you for reaching out. Our HSE engineering and advisory team in Maputo will review your organization’s specifications.'
                  )}
                </p>
              </div>

              {/* Reference Ticket Box */}
              <div className="bg-[#E8F8EE] border border-[#009639]/30 rounded-xl p-4 max-w-md mx-auto text-left">
                <div className="flex justify-between items-center text-xs text-[#064E3B] font-semibold pb-2 border-b border-[#009639]/20">
                  <span>{t('Código de Referência:', 'Reference Code:')}</span>
                  <span className="font-mono font-bold text-sm bg-white px-2 py-0.5 rounded border border-[#009639]/40 text-[#064E3B]">
                    {submittedCode}
                  </span>
                </div>
                <div className="pt-2 text-xs space-y-1 text-slate-700">
                  <p><strong>{t('Organização:', 'Company:')}</strong> {formData.companyName}</p>
                  <p><strong>{t('Contacto:', 'Contact:')}</strong> {formData.fullName} ({formData.email})</p>
                  <p><strong>{t('Prazo Indicado:', 'Target Timeline:')}</strong> {formData.projectTimeline}</p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(`Olá WORTI Safety, acabei de submeter o pedido de proposta com o código ${submittedCode} para a empresa ${formData.companyName}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t('Acelerar via WhatsApp', 'Fast-track via WhatsApp')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  {t('Fechar', 'Close')}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#E8F8EE] border-l-4 border-[#009639] p-3 rounded-r-lg text-xs text-[#064E3B] font-medium">
                {t(
                  'Preencha as informações da sua organização para receber uma proposta adaptada à escala e aos riscos específicos do seu setor.',
                  'Fill in your organization details to receive a customized commercial proposal tailored to your industry scale and risk matrix.'
                )}
              </div>

              {/* Grid: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1">
                    {t('Nome Completo *', 'Full Name *')}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Ex: João Tembe"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1">
                    {t('Nome da Empresa / Organização *', 'Company / Organization Name *')}
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="Ex: Indústria Moçambicana, S.A."
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639]"
                    />
                  </div>
                </div>
              </div>

              {/* Grid: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1">
                    {t('Email Corporativo *', 'Corporate Email *')}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="j.tembe@empresa.co.mz"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1">
                    {t('Telefone / WhatsApp *', 'Phone / WhatsApp *')}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+258 84 / 82 ..."
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639]"
                    />
                  </div>
                </div>
              </div>

              {/* Grid: Role & Sector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1">
                    {t('Cargo / Função', 'Role / Position')}
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      name="role"
                      placeholder="Ex: Diretor de Operações / HSE Manager"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1">
                    {t('Setor de Atuação', 'Industry Sector')}
                  </label>
                  <select
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639] bg-white"
                  >
                    <option value="Indústria e Manufatura">Indústria e Manufatura</option>
                    <option value="Construção Civil e Infraestruturas">Construção Civil e Infraestruturas</option>
                    <option value="Energia, Petróleo e Gás">Energia, Petróleo e Gás</option>
                    <option value="Mineração e Extração">Mineração e Extração</option>
                    <option value="Logística, Portos e Transportes">Logística, Portos e Transportes</option>
                    <option value="Hotelaria e Restauração">Hotelaria e Restauração</option>
                    <option value="Agricultura e Agro-indústria">Agricultura e Agro-indústria</option>
                    <option value="Saúde e Farmacêutica">Saúde e Farmacêutica</option>
                    <option value="ONG e Setor Público">ONG e Setor Público</option>
                    <option value="Outro Setor">Outro Setor</option>
                  </select>
                </div>
              </div>

              {/* Service Interest & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1">
                    {t('Serviço de Interesse Principal *', 'Primary Service of Interest *')}
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639] bg-white font-semibold text-[#064E3B]"
                  >
                    {SERVICES_DATA.map(s => (
                      <option key={s.id} value={s.id}>
                        {t(s.titlePt, s.titleEn)}
                      </option>
                    ))}
                    <option value="formacao-corporativa-geral">
                      {t('Formação Corporativa à Medida', 'Custom In-Company Training')}
                    </option>
                    <option value="pacote-completo-gestao">
                      {t('Assessoria Completa Continuada de HST', 'Retained Comprehensive HSE Advisory')}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1">
                    {t('Localização / Província em Moçambique', 'Location / Province in Mozambique')}
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      name="location"
                      placeholder="Ex: Maputo Cidade / Matola / Tete"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639]"
                    />
                  </div>
                </div>
              </div>

              {/* Employees Range & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1">
                    {t('Dimensão da Equipa / Trabalhadores', 'Workforce Size')}
                  </label>
                  <select
                    name="employeesRange"
                    value={formData.employeesRange}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639] bg-white"
                  >
                    <option value="1–10 colaboradores">1–10 colaboradores</option>
                    <option value="11–50 colaboradores">11–50 colaboradores</option>
                    <option value="51–200 colaboradores">51–200 colaboradores</option>
                    <option value="Mais de 200 colaboradores">Mais de 200 colaboradores</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1">
                    {t('Prazo Desejado para Início', 'Target Timeline to Start')}
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <select
                      name="projectTimeline"
                      value={formData.projectTimeline}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639] bg-white"
                    >
                      <option value="Imediato (menos de 30 dias)">Imediato (menos de 30 dias)</option>
                      <option value="1 a 3 meses">1 a 3 meses</option>
                      <option value="Planeamento para próximo trimestre">Planeamento para próximo trimestre</option>
                      <option value="Apenas orçamentação preliminar">Apenas orçamentação preliminar</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Description of Challenge */}
              <div>
                <label className="block text-xs font-semibold text-slate-900 mb-1">
                  {t('Descreva o desafio ou necessidades específicas da sua empresa', 'Describe your company’s challenge or specific requirements')}
                </label>
                <textarea
                  name="description"
                  rows={3}
                  placeholder={t(
                    'Ex: Necessitamos de avaliar ruído e poeiras na fábrica da Matola e formar a brigada de emergência...',
                    'E.g. We need to evaluate noise and dust levels in our Matola plant and train the emergency brigade...'
                  )}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639]"
                />
              </div>

              {/* Privacy Consent */}
              <div className="pt-2">
                <label className="flex items-start gap-2 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.acceptedPrivacy}
                    onChange={handleCheckbox}
                    className="mt-0.5 rounded text-[#009639] focus:ring-[#009639]"
                  />
                  <span>
                    {t(
                      'Concordo com o tratamento dos dados fornecidos para efeitos de receção da proposta comercial pela WORTI Safety, Lda., conforme a ',
                      'I consent to the processing of the provided data for the purpose of receiving a commercial proposal from WORTI Safety, Lda., pursuant to the '
                    )}
                    <button
                      type="button"
                      onClick={onOpenPrivacy}
                      className="text-[#00873E] font-semibold underline hover:text-[#009639]"
                    >
                      {t('Política de Privacidade', 'Privacy Policy')}
                    </button>.
                  </span>
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  {t('Cancelar', 'Cancel')}
                </button>

                <button
                  id="btn-submit-proposal"
                  type="submit"
                  disabled={isSubmitting || !formData.acceptedPrivacy}
                  className="px-6 py-2.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg active:scale-95 transition-all disabled:opacity-60 flex items-center gap-2 cursor-pointer border border-emerald-400/30"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting 
                      ? t('A enviar pedido...', 'Submitting request...') 
                      : t('Submeter Pedido de Proposta', 'Submit Proposal Request')}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
