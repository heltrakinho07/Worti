import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ChecklistModal } from './components/ChecklistModal';
import { PrivacyModal } from './components/PrivacyModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { TrainingView } from './views/TrainingView';
import { SectorsView } from './views/SectorsView';
import { ResourcesView } from './views/ResourcesView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { ServiceItem, ChecklistItem } from './types';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from './data/mockData';

function MainApp() {
  const { t } = useLanguage();
  const [activeView, setActiveView] = useState<string>('home');
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [activeDetailService, setActiveDetailService] = useState<ServiceItem | null>(null);
  const [activeChecklist, setActiveChecklist] = useState<ChecklistItem | null>(null);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scroll to top smoothly when changing views
  const handleNavigate = (view: string) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProposal = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setIsProposalModalOpen(true);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-[#17313B] font-sans antialiased selection:bg-[#009639]/20 selection:text-[#064E3B]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-5 z-50 bg-[#064E3B] text-white px-5 py-3 rounded-2xl shadow-2xl border border-[#009639] flex items-center gap-3 animate-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="w-5 h-5 text-[#34d399]" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Global Header */}
      <Header
        activeView={activeView}
        onNavigate={handleNavigate}
        onRequestProposal={() => handleOpenProposal()}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {activeView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onRequestProposal={handleOpenProposal}
            onSelectService={(service) => setActiveDetailService(service)}
          />
        )}

        {activeView === 'services' && (
          <ServicesView
            onSelectService={(service) => setActiveDetailService(service)}
            onRequestProposal={handleOpenProposal}
          />
        )}

        {activeView === 'training' && (
          <TrainingView
            onRequestProposal={handleOpenProposal}
          />
        )}

        {activeView === 'sectors' && (
          <SectorsView
            onRequestProposal={handleOpenProposal}
          />
        )}

        {activeView === 'resources' && (
          <ResourcesView
            onOpenChecklist={(checklist) => setActiveChecklist(checklist)}
            onRequestProposal={handleOpenProposal}
          />
        )}

        {activeView === 'about' && (
          <AboutView
            onRequestProposal={handleOpenProposal}
            onNavigate={handleNavigate}
          />
        )}

        {activeView === 'contact' && (
          <ContactView
            onProposalSubmitted={() => {
              showToast(t('Pedido de proposta registado com sucesso!', 'Proposal request logged successfully!'));
            }}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestProposal={() => handleOpenProposal()}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar
        onRequestProposal={() => handleOpenProposal()}
      />

      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Olá WORTI Safety, gostaria de falar com a vossa equipa técnica em Maputo.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#009639] hover:bg-[#007a2e] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 border border-emerald-400/30"
          title="Falar no WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold whitespace-nowrap pr-1">
            {t('Falar com Especialista', 'Chat with Specialist')}
          </span>
        </a>
      </div>

      {/* Modals */}
      <ProposalModal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
        preselectedServiceId={preselectedServiceId}
        onSubmitted={() => {
          showToast(t('Proposta solicitada com sucesso! Entraremos em contacto em até 24h.', 'Proposal successfully requested! We will reach out within 24h.'));
        }}
      />

      <ServiceDetailModal
        service={activeDetailService}
        onClose={() => setActiveDetailService(null)}
        onRequestProposal={(serviceId) => {
          setActiveDetailService(null);
          handleOpenProposal(serviceId);
        }}
      />

      <ChecklistModal
        checklist={activeChecklist}
        onClose={() => setActiveChecklist(null)}
        onRequestProposal={() => {
          setActiveChecklist(null);
          handleOpenProposal('auditoria-sso-riscos');
        }}
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
