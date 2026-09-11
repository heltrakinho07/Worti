import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Building
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/mockData';
import { WortiLogo } from './WortiLogo';

interface FooterProps {
  onNavigate: (view: string) => void;
  onRequestProposal: (serviceId?: string) => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigate, 
  onRequestProposal,
  onOpenPrivacy
}) => {
  const { t } = useLanguage();

  const handleNav = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#042513] text-emerald-100/80 border-t border-emerald-900/50">
      {/* Top Banner: Pre-Footer CTA with WORTI Executive Green */}
      <div className="bg-gradient-to-r from-[#064E3B] via-[#053F24] to-[#042E1B] text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-[#009639]">
        {/* Decorative Green Arc inspired by official WORTI posters */}
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border-8 border-[#009639]/20 pointer-events-none" />
        <div className="absolute left-1/3 -bottom-20 w-80 h-80 rounded-full border-4 border-white/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#009639] text-white text-xs font-bold tracking-wide uppercase mb-3 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              {t('Parceria Estratégica em Moçambique', 'Strategic Partnership in Mozambique')}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {t('Transforme riscos em', 'Transform hazards into')}{' '}
              <span className="text-[#34d399]">{t('controlo e conformidade.', 'control and compliance.')}</span>
            </h3>
            <p className="mt-2 text-emerald-100/90 text-sm sm:text-base opacity-95">
              {t(
                'Mais segurança, saúde e produtividade para a sua empresa. Fale com a nossa equipa técnica em Maputo e receba uma proposta estruturada com cronograma e entregáveis claros.',
                'More safety, health and productivity for your organization. Connect with our technical team in Maputo for a clear proposal and timeline.'
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              id="btn-footer-cta-proposal"
              onClick={() => onRequestProposal()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white font-bold text-sm shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer border border-emerald-300/40"
            >
              <span>{t('Solicitar Proposta Comercial', 'Request Commercial Proposal')}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <button
              id="btn-footer-cta-contact"
              onClick={() => handleNav('contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/40 hover:bg-white/10 text-white font-semibold text-sm transition-colors text-center cursor-pointer"
            >
              {t('Falar com um Especialista', 'Speak with a Specialist')}
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Official WORTI Brand Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/95 rounded-2xl p-3 inline-block shadow-sm">
              <WortiLogo size="md" variant="full" theme="light" />
            </div>

            <p className="text-sm text-emerald-100/80 leading-relaxed max-w-sm">
              {t(
                'Parceira técnica e estratégica para organizações que pretendem reduzir riscos operacionais, proteger vidas humanas, cumprir requisitos legais e fortalecer o ambiente de trabalho em Moçambique.',
                'A trusted technical partner helping organizations mitigate workplace risks, protect human life, comply with Mozambican labor laws, and cultivate safety excellence.'
              )}
            </p>

            <div className="p-3.5 rounded-xl bg-[#031B0E]/80 border border-emerald-900/60 text-xs text-emerald-100/90 space-y-1">
              <p className="font-semibold text-white flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#34d399]" />
                {t('Sede Principal', 'Headquarters')}:
              </p>
              <p>{COMPANY_INFO.address}</p>
              <p className="text-[11px] text-[#34d399] pt-1 font-medium">{COMPANY_INFO.serviceCoverage}</p>
            </div>
          </div>

          {/* Col 3: Soluções Técnicas */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300 border-b border-[#009639]/40 pb-2">
              {t('Áreas Técnicas', 'Technical Pillars')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-[#34d399] transition-colors text-left cursor-pointer"
                >
                  {t('Segurança e Gestão de Riscos (PGRO)', 'Safety & Risk Management (PGRO)')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-[#34d399] transition-colors text-left cursor-pointer"
                >
                  {t('Saúde Ocupacional e Bem-estar', 'Occupational Health & Wellness')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-[#34d399] transition-colors text-left cursor-pointer"
                >
                  {t('Higiene Industrial e Dosimetria', 'Industrial Hygiene & Monitoring')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-[#34d399] transition-colors text-left cursor-pointer"
                >
                  {t('Ambiente, Resíduos e Sustentabilidade', 'Environment, Waste & Sustainability')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('training')} 
                  className="hover:text-[#34d399] transition-colors text-left cursor-pointer"
                >
                  {t('Formação Prática e Sistemas ISO', 'Practical Training & ISO Systems')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Acesso Rápido & Recursos */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300 border-b border-[#009639]/40 pb-2">
              {t('Navegação & Apoio', 'Navigation & Tools')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#34d399] transition-colors cursor-pointer">
                  {t('Sobre a WORTI', 'About WORTI')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('training')} className="hover:text-[#34d399] transition-colors cursor-pointer">
                  {t('Catálogo de Treinos Operacionais', 'Operational Training Catalog')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sectors')} className="hover:text-[#34d399] transition-colors cursor-pointer">
                  {t('Setores Económicos e Casos', 'Economic Sectors & Cases')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('resources')} className="hover:text-[#34d399] transition-colors cursor-pointer">
                  {t('Checklists Interativas de Campo', 'Field Interactive Checklists')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#34d399] transition-colors cursor-pointer">
                  {t('Contactos em Maputo', 'Maputo Contacts')}
                </button>
              </li>
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-[#34d399] transition-colors text-emerald-200/60 cursor-pointer">
                  {t('Política de Privacidade e Cookies', 'Privacy Policy & Cookies')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Canais Oficiais de Contacto */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300 border-b border-[#009639]/40 pb-2">
              {t('Canais Oficiais', 'Official Channels')}
            </h4>
            <div className="space-y-2.5 text-xs">
              <a 
                href={`mailto:${COMPANY_INFO.emailSecondary}`}
                className="flex items-center gap-2 text-emerald-100 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#34d399] shrink-0" />
                <span className="truncate font-semibold text-emerald-300">{COMPANY_INFO.emailSecondary}</span>
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.emailPrimary}`}
                className="flex items-center gap-2 text-emerald-100/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400/60 shrink-0" />
                <span className="truncate">{COMPANY_INFO.emailPrimary}</span>
              </a>
              <a 
                href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-emerald-100 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#34d399] shrink-0" />
                <span>{COMPANY_INFO.phonePrimary}</span>
              </a>
              <div className="flex items-center gap-2 text-emerald-200/60 pt-1">
                <Clock className="w-4 h-4 text-emerald-400/60 shrink-0" />
                <span>{t(COMPANY_INFO.operatingHoursPt, COMPANY_INFO.operatingHoursEn)}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-200/60">
                <Globe className="w-4 h-4 text-emerald-400/60 shrink-0" />
                <span>{COMPANY_INFO.domain}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Dedicated Official Contact Banner */}
        <div className="mt-10 p-4 rounded-xl bg-[#031B0E] border border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#009639] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-emerald-200/70">{t('Canal direto para envio de RFPs e solicitações:', 'Direct channel for RFPs and inquiries:')}</p>
              <p className="text-sm font-bold text-white tracking-wide">{COMPANY_INFO.emailSecondary}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-emerald-200/70">
            <span className="inline-block w-2 h-2 rounded-full bg-[#009639]" />
            <span>Maputo, Moçambique • Atuação a nível nacional</span>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-8 pt-6 border-t border-emerald-900/60 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-200/60 gap-4">
          <p>
            © {new Date().getFullYear()} WORTI Safety, Lda. {t('Todos os direitos reservados.', 'All rights reserved.')}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-emerald-200/70">
              {t('Conformidade com a Lei do Trabalho nº 13/2023 e Normas ISO 45001 / ISO 14001', 'Compliant with Mozambique Labor Law no. 13/2023 & ISO 45001 / 14001')}
            </span>
            <button 
              onClick={onOpenPrivacy}
              className="text-emerald-300 hover:text-white underline underline-offset-2 cursor-pointer"
            >
              {t('Privacidade & Termos', 'Privacy & Terms')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

