import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO, SERVICES_DATA } from '../data/mockData';

interface ContactViewProps {
  onProposalSubmitted?: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onProposalSubmitted }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    location: 'Maputo',
    serviceCategory: 'seguranca-riscos',
    message: '',
    consent: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onProposalSubmitted) onProposalSubmitted();
    }, 800);
  };

  const faqs = [
    {
      qPt: 'Qual é o prazo de resposta para um pedido de proposta?',
      qEn: 'What is the turnaround time for quotation proposals?',
      aPt: 'A WORTI Safety responde a todos os pedidos de proposta técnico-comercial no prazo máximo de 24 horas úteis. Em casos urgentes de paragem fabril ou fiscalização iminente, temos canal prioritário no WhatsApp.',
      aEn: 'WORTI Safety issues formal technical and commercial proposals within a maximum of 24 business hours. For emergency stoppages or urgent inspectorate deadlines, use our prioritized WhatsApp channel.'
    },
    {
      qPt: 'A WORTI Safety atua fora da cidade de Maputo?',
      qEn: 'Does WORTI Safety operate outside Maputo city?',
      aPt: 'Sim. A nossa equipa realiza intervenções regulares em Matola, Beira, Tete, Nacala, Nampula, Inhambane e Cabo Delgado, mobilizando técnicos e equipamentos calibrados para qualquer província de Moçambique.',
      aEn: 'Yes. Our technical teams frequently mobilize to Matola, Beira, Tete, Nacala, Nampula, Inhambane, and Cabo Delgado with calibrated measurement tools across all Mozambican provinces.'
    },
    {
      qPt: 'Os laudos e relatórios emitidos são válidos perante a Inspeção Geral do Trabalho?',
      qEn: 'Are your technical reports recognized by the General Labor Inspectorate?',
      aPt: 'Sim. Todos os relatórios de auditoria, matrizes de risco, medições higiénicas e planos de emergência são rubricados por engenheiros e técnicos qualificados, em estrita conformidade com a Lei do Trabalho nº 13/2023.',
      aEn: 'Yes. All audit registers, risk matrices, industrial hygiene surveys, and emergency plans are authored and sealed by qualified engineers strictly adhering to Labor Law No. 13/2023.'
    },
    {
      qPt: 'As formações corporativas podem ser ministradas nas instalações do cliente?',
      qEn: 'Can corporate training sessions be conducted at client premises?',
      aPt: 'Sim, a modalidade in-company é a mais requisitada. Levamos os nossos manequins de RCP, simuladores de combate a incêndio e equipamentos de trabalho em altura diretamente para a vossa fábrica ou estaleiro.',
      aEn: 'Yes, on-site in-company delivery is our most requested format. We bring CPR manikins, live fire training gear, and fall arrest harnesses directly to your plant or job site.'
    }
  ];

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-[#E8F8EE] text-[#00873E] border border-[#009639]/30 text-xs font-bold uppercase tracking-wider">
          {t('Atendimento Técnico Comercial', 'Technical & Commercial Advisory')}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#064E3B] tracking-tight">
          {t('Fale com a WORTI Safety, Lda.', 'Connect with WORTI Safety, Lda.')}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {t(
            'Estamos prontos para analisar o seu desafio de Saúde, Segurança e Ambiente, esclarecer dúvidas normativas e agendar visitas técnicas às suas instalações.',
            'Ready to evaluate your Health, Safety, and Environmental requirements, clarify statutory standards, and schedule technical site assessments.'
          )}
        </p>
      </div>

      {/* 2. Contact Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Card 1: Phone */}
        <a
          href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
          className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#009639] shadow-2xs hover:shadow-md transition-all flex flex-col items-center text-center group"
        >
          <div className="w-12 h-12 rounded-xl bg-[#E8F8EE] text-[#009639] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Phone className="w-6 h-6 text-[#009639]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            {t('Chamada Telefónica', 'Telephone Call')}
          </span>
          <span className="text-sm font-bold text-[#064E3B]">{COMPANY_INFO.phonePrimary}</span>
          <span className="text-xs text-slate-500 mt-1">{COMPANY_INFO.phoneSecondary}</span>
        </a>

        {/* Card 2: WhatsApp */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Olá WORTI Safety, gostaria de falar com a vossa equipa técnica.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#009639] shadow-2xs hover:shadow-md transition-all flex flex-col items-center text-center group"
        >
          <div className="w-12 h-12 rounded-xl bg-[#E8F8EE] text-[#009639] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6 text-[#009639]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            {t('WhatsApp Técnico', 'Technical WhatsApp')}
          </span>
          <span className="text-sm font-bold text-[#009639]">{COMPANY_INFO.whatsappNumber}</span>
          <span className="text-xs text-slate-500 mt-1">{t('Atendimento ágil em horário laboral', 'Fast response in office hours')}</span>
        </a>

        {/* Card 3: Email */}
        <a
          href={`mailto:${COMPANY_INFO.emailPrimary}`}
          className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#009639] shadow-2xs hover:shadow-md transition-all flex flex-col items-center text-center group"
        >
          <div className="w-12 h-12 rounded-xl bg-[#E8F8EE] text-[#009639] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Mail className="w-6 h-6 text-[#009639]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            {t('Correio Eletrónico', 'Email Inquiries')}
          </span>
          <span className="text-sm font-bold text-[#064E3B]">{COMPANY_INFO.emailPrimary}</span>
          <span className="text-xs text-slate-500 mt-1">{COMPANY_INFO.emailSecondary}</span>
        </a>

        {/* Card 4: Location */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-xl bg-[#E8F8EE] text-[#009639] flex items-center justify-center mb-3">
            <MapPin className="w-6 h-6 text-[#009639]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            {t('Sede em Maputo', 'Maputo Office')}
          </span>
          <span className="text-sm font-bold text-[#064E3B]">{COMPANY_INFO.headquarters}</span>
          <span className="text-xs text-slate-500 mt-1">{COMPANY_INFO.address}</span>
        </div>

      </div>

      {/* 3. Main Form and Office Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Lead Proposal Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg">
          <div className="mb-6 space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-bold text-[#064E3B]">
              {t('Solicitar Proposta Técnico-Comercial', 'Request Formal Proposal')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {t(
                'Preencha os dados da sua empresa para receber uma proposta técnica detalhada.',
                'Complete your company details to receive a comprehensive proposal.'
              )}
            </p>
          </div>

          {isSuccess ? (
            <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200 animate-in zoom-in-95">
              <div className="w-14 h-14 bg-[#009639] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-emerald-900">
                {t('Pedido de Proposta Registado com Sucesso!', 'Proposal Request Successfully Logged!')}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800/90 leading-relaxed max-w-md mx-auto">
                {t(
                  'A equipa técnica da WORTI Safety, Lda. entrará em contacto nas próximas 24 horas úteis para validar o âmbito da sua organização.',
                  'WORTI Safety engineers will contact your corporate representative within 24 business hours to formalize the scope.'
                )}
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-5 py-2.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white text-xs font-bold cursor-pointer"
              >
                {t('Enviar Outro Pedido', 'Submit Another Request')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#064E3B] mb-1">
                    {t('Nome Completo', 'Full Name')} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Machava"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#064E3B] mb-1">
                    {t('Empresa / Organização', 'Company / Organization')} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Cimentos & Logística Moçambique, S.A."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#064E3B] mb-1">
                    {t('Cargo / Função', 'Role / Job Title')}
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Diretor de Operações / Gestor HSE"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#064E3B] mb-1">
                    {t('Localização das Instalações', 'Facility Location')}
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Matola, Maputo, Beira, Tete..."
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#064E3B] mb-1">
                    {t('Email Corporativo', 'Corporate Email')} *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="carlos@empresa.co.mz"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#064E3B] mb-1">
                    {t('Telefone / WhatsApp', 'Phone / WhatsApp')} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+258 84 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#064E3B] mb-1">
                  {t('Área de Serviço Pretendida', 'Service Area')} *
                </label>
                <select
                  value={formData.serviceCategory}
                  onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639] bg-white"
                >
                  <option value="seguranca-riscos">Segurança e Gestão de Riscos (Auditorias, APR, Altura)</option>
                  <option value="saude-ocupacional">Saúde Ocupacional e Ergonomia</option>
                  <option value="higiene-industrial">Higiene Industrial e Dosimetria (Ruído, Poeiras, Iluminação)</option>
                  <option value="ambiente-residuos">Ambiente, Resíduos e Licenciamento</option>
                  <option value="formacao-sistemas">Formação Corporativa e Sistemas ISO 45001 / 14001</option>
                  <option value="multiplos">Diagnóstico Integrado Multi-Área</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#064E3B] mb-1">
                  {t('Descreva o seu desafio ou necessidades operacionais', 'Describe your operational challenges')}
                </label>
                <textarea
                  rows={3}
                  placeholder={t('Ex: Precisamos de medições de ruído e poeiras na fábrica de ensacamento e formação de combate a incêndio...', 'E.g. We need noise & dust sampling in the bagging plant and fire brigade training...')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#009639] focus:border-[#009639]"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="contact-consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  required
                  className="mt-0.5 rounded text-[#009639] focus:ring-[#009639]"
                />
                <label htmlFor="contact-consent" className="text-[11px] text-slate-500 leading-tight">
                  {t(
                    'Autorizo o contacto técnico da WORTI Safety, Lda. com estrita garantia de confidencialidade e proteção de dados.',
                    'I authorize WORTI Safety technical contact under strict corporate non-disclosure.'
                  )}
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-emerald-400/30"
              >
                {isSubmitting ? (
                  <span>{t('A processar pedido...', 'Processing request...')}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t('Submeter Pedido de Proposta', 'Submit Proposal Request')}</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Office Schedule, Working Areas & FAQ Accordion */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Office Hours Card */}
          <div className="bg-gradient-to-br from-[#064E3B] via-[#053F24] to-[#042E1B] text-white rounded-3xl p-6 sm:p-7 space-y-4 shadow-md border-l-4 border-[#009639]">
            <h3 className="text-base font-bold flex items-center gap-2 text-white">
              <Clock className="w-5 h-5 text-[#34d399]" />
              <span>{t('Horário e Disponibilidade Técnica', 'Hours & Field Readiness')}</span>
            </h3>

            <div className="space-y-2 text-xs text-emerald-100/90">
              <div className="flex justify-between py-1 border-b border-white/10">
                <span>{t('Segunda a Sexta-feira:', 'Monday to Friday:')}</span>
                <span className="font-bold text-white">07:30 – 17:30</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span>{t('Sábados (Apenas Campo/Urgências):', 'Saturdays (Site / Emergencies only):')}</span>
                <span className="font-bold text-white">08:00 – 12:30</span>
              </div>
              <div className="flex justify-between py-1">
                <span>{t('Mobilização para Províncias:', 'Provincial Mobilization:')}</span>
                <span className="font-bold text-emerald-300">24h a 48h</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-emerald-200/80">
              <p>
                {t(
                  'A equipa de intervenção técnica está equipada com unidades móveis para deslocação rápida em Moçambique.',
                  'Technical intervention teams deploy mobile field units for fast dispatch nationwide.'
                )}
              </p>
            </div>
          </div>

          {/* Corporate FAQ Accordion */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#064E3B] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#009639]" />
              <span>{t('Perguntas Frequentes (FAQ)', 'Frequently Asked Questions')}</span>
            </h3>

            <div className="space-y-2.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="border border-slate-200/80 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-3.5 text-left bg-slate-50/70 hover:bg-slate-100 flex items-center justify-between gap-2 text-xs font-bold text-[#064E3B] transition-colors cursor-pointer"
                    >
                      <span>{t(faq.qPt, faq.qEn)}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-[#009639]" /> : <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />}
                    </button>
                    {isOpen && (
                      <div className="p-3.5 text-xs text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                        {t(faq.aPt, faq.aEn)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
