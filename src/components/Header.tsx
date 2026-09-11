import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Menu, 
  X, 
  ArrowRight,
  MessageCircle,
  FileText
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/mockData';
import { WortiLogo } from './WortiLogo';

interface HeaderProps {
  currentView?: string;
  activeView?: string;
  onNavigate: (view: string) => void;
  onRequestProposal: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentView,
  activeView, 
  onNavigate, 
  onRequestProposal 
}) => {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeTab = currentView || activeView || 'home';

  const navItems = [
    { id: 'home', labelPt: 'Início', labelEn: 'Home' },
    { id: 'about', labelPt: 'Sobre a WORTI', labelEn: 'About Us' },
    { id: 'services', labelPt: 'Serviços', labelEn: 'Services' },
    { id: 'training', labelPt: 'Formação', labelEn: 'Training' },
    { id: 'sectors', labelPt: 'Projetos e Setores', labelEn: 'Sectors & Projects' },
    { id: 'resources', labelPt: 'Recursos', labelEn: 'Resources' },
    { id: 'contact', labelPt: 'Contactos', labelEn: 'Contact' },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs">
      {/* Top Corporate Strip - Executive Forest Green */}
      <div className="bg-[#064E3B] text-white text-xs border-b border-[#009639]/30 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-100">
              <MapPin className="w-3.5 h-3.5 text-[#34d399]" />
              {COMPANY_INFO.headquarters}
            </span>
            <a 
              href={`mailto:${COMPANY_INFO.emailSecondary}`}
              className="flex items-center gap-1.5 text-emerald-100 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#34d399]" />
              {COMPANY_INFO.emailSecondary}
            </a>
            <a 
              href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-emerald-100 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#34d399]" />
              {COMPANY_INFO.phonePrimary}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-emerald-200/90 font-medium italic hidden lg:inline">
              "{t(COMPANY_INFO.taglinePt, COMPANY_INFO.taglineEn)}"
            </span>
            <div className="h-3 w-px bg-white/20 hidden lg:block" />
            
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-black/25 rounded-md p-0.5 border border-white/15">
              <Globe className="w-3.5 h-3.5 ml-1 text-emerald-300" />
              <button
                id="btn-lang-pt"
                onClick={() => setLang('pt')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                  lang === 'pt' ? 'bg-[#009639] text-white' : 'text-slate-300 hover:text-white'
                }`}
                title="Mudar para Português"
              >
                PT
              </button>
              <button
                id="btn-lang-en"
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                  lang === 'en' ? 'bg-[#009639] text-white' : 'text-slate-300 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official WORTI Logo */}
          <button 
            id="btn-logo-home"
            onClick={() => handleNavClick('home')}
            className="flex items-center focus:outline-none group cursor-pointer"
            aria-label="WORTI Safety - Página Inicial"
          >
            <WortiLogo size="md" variant="full" />
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 relative cursor-pointer ${
                    isActive 
                      ? 'text-[#00873E] font-bold bg-[#E8F8EE]' 
                      : 'text-slate-700 hover:text-[#00873E] hover:bg-[#E8F8EE]/60'
                  }`}
                >
                  {t(item.labelPt, item.labelEn)}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#009639] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="btn-whatsapp-header"
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Olá WORTI, gostaria de obter informações sobre os vossos serviços de Saúde e Segurança no Trabalho.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-emerald-300 text-[#009639] hover:bg-emerald-50 transition-colors"
              title="Falar no WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              id="btn-request-proposal-header"
              onClick={() => onRequestProposal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white font-bold text-sm shadow-md shadow-[#009639]/25 hover:shadow-lg active:scale-95 transition-all duration-150 border border-emerald-400/40 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-100" />
              <span>{t('Solicitar proposta', 'Request Proposal')}</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-100" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Lang Switch */}
            <button
              id="btn-lang-toggle-mobile"
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="px-2 py-1 text-xs font-semibold rounded border border-[#009639] text-[#00873E]"
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>

            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#00873E] hover:bg-emerald-50 focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-mobile-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                    isActive 
                      ? 'bg-[#E8F8EE] text-[#00873E] font-bold border-l-4 border-[#009639]' 
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{t(item.labelPt, item.labelEn)}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#009639]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-2">
            <button
              id="btn-request-proposal-mobile-drawer"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestProposal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white font-bold shadow-md cursor-pointer border border-emerald-400/30"
            >
              <FileText className="w-4 h-4 text-emerald-100" />
              <span>{t('Solicitar Proposta Comercial', 'Request Commercial Proposal')}</span>
            </button>

            <a
              id="btn-whatsapp-mobile-drawer"
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#009639] text-[#009639] font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('Conversar no WhatsApp (+258)', 'Chat on WhatsApp (+258)')}</span>
            </a>

            <div className="text-center pt-2 text-xs text-slate-500">
              <p>{COMPANY_INFO.headquarters} • {COMPANY_INFO.emailSecondary}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

