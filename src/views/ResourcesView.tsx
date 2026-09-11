import React, { useState } from 'react';
import { 
  BookOpen, 
  FileCheck2, 
  Download, 
  FileText, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Printer, 
  ExternalLink,
  Search
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TECHNICAL_ARTICLES, CHECKLISTS_DATA } from '../data/mockData';
import { ArticleItem, ChecklistItem } from '../types';

interface ResourcesViewProps {
  onOpenChecklist: (checklist: ChecklistItem) => void;
  onRequestProposal: (serviceId?: string) => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({
  onOpenChecklist,
  onRequestProposal
}) => {
  const { t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'articles' | 'checklists'>('all');

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-[#E8F8EE] text-[#00873E] border border-[#009639]/30 text-xs font-bold uppercase tracking-wider">
          {t('Biblioteca Técnica e Conformidade', 'Technical Knowledge & Compliance Hub')}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#064E3B] tracking-tight">
          {t('Recursos Práticos e Legislação de HST', 'Practical Resources & HSE Legislation')}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {t(
            'Guias operacionais, novidades da Lei do Trabalho de Moçambique e checklists interativas desenvolvidas por especialistas para uso em campo.',
            'Operational field guides, Mozambican labor law analysis, and interactive safety checklists developed by senior engineers for immediate field use.'
          )}
        </p>

        {/* Tab Selector */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              activeTab === 'all' ? 'bg-[#009639] text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {t('Ver Tudo', 'View All')}
          </button>
          <button
            onClick={() => setActiveTab('checklists')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'checklists' ? 'bg-[#009639] text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <FileCheck2 className="w-3.5 h-3.5 text-[#009639]" />
            <span>{t('Checklists de Campo', 'Field Checklists')}</span>
          </button>
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'articles' ? 'bg-[#009639] text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-[#009639]" />
            <span>{t('Artigos & Guias Técnicos', 'Technical Articles & Guides')}</span>
          </button>
        </div>
      </div>

      {/* 2. Checklists Library Section */}
      {(activeTab === 'all' || activeTab === 'checklists') && (
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8F8EE] text-[#009639] flex items-center justify-center">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#064E3B]">
                {t('Checklists Práticas Prontas para Inspeção', 'Inspection-Ready Field Checklists')}
              </h2>
              <p className="text-xs text-slate-600">
                {t('Abra diretamente no navegador para conferir itens ou imprimir em formato folha de obra.', 'Open directly to check off items or print as job-site inspection sheets.')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CHECKLISTS_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#009639] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#009639] bg-[#E8F8EE] px-2.5 py-0.5 rounded">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-[#064E3B] leading-snug">
                    {t(item.titlePt, item.titleEn)}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t(
                      `Contém ${item.items.length} pontos de verificação técnica incluindo requisitos críticos de segurança.`,
                      `Contains ${item.items.length} technical verification points including high-risk critical checks.`
                    )}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500">
                    {item.items.length} {t('itens verificáveis', 'items')}
                  </span>
                  <button
                    onClick={() => onOpenChecklist(item)}
                    className="px-4 py-2 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer border border-emerald-400/30"
                  >
                    <FileCheck2 className="w-3.5 h-3.5" />
                    <span>{t('Abrir Checklist', 'Open Checklist')}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Technical Articles & Legislation */}
      {(activeTab === 'all' || activeTab === 'articles') && (
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8F8EE] text-[#009639] flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#064E3B]">
                {t('Guias e Artigos Técnicos de HST', 'HSE Technical Guides & Legislation')}
              </h2>
              <p className="text-xs text-slate-600">
                {t('Artigos fundamentados na Lei nº 13/2023 e nas melhores práticas internacionais.', 'Grounded in Mozambican Labor Law 13/2023 and global standards.')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNICAL_ARTICLES.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#009639] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-semibold text-[#009639] bg-[#E8F8EE] px-2 py-0.5 rounded">
                      {t(article.categoryPt, article.categoryEn)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#064E3B] leading-snug">
                    {t(article.titlePt, article.titleEn)}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t(article.summaryPt, article.summaryEn)}
                  </p>

                  {/* Highlights / Tags */}
                  <div className="pt-2 space-y-1">
                    <p className="text-[11px] font-bold text-[#064E3B]">
                      {t('Tópicos Abordados:', 'Topics Covered:')}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {article.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    {article.date}
                  </span>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="text-xs font-bold text-[#00873E] hover:text-[#009639] flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t('Ler Artigo Completo', 'Read Full Guide')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Article Detail View Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div 
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-[#064E3B] via-[#053F24] to-[#042E1B] text-white p-6 relative border-b-4 border-[#009639]">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
              >
                ✕
              </button>
              <span className="px-2.5 py-0.5 rounded-full bg-[#009639] text-white text-[11px] font-bold uppercase tracking-wider">
                {t(selectedArticle.categoryPt, selectedArticle.categoryEn)}
              </span>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mt-1 pr-8">
                {t(selectedArticle.titlePt, selectedArticle.titleEn)}
              </h3>
              <p className="text-xs text-emerald-100/90 mt-1">
                WORTI Safety, Lda. — {selectedArticle.date} • {selectedArticle.readTime}
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-4 overflow-y-auto text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="bg-[#E8F8EE] p-4 rounded-xl border border-[#009639]/20 font-medium text-[#064E3B]">
                {t(selectedArticle.summaryPt, selectedArticle.summaryEn)}
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-[#064E3B] text-sm">
                  {t('Conteúdo Técnico e Diretrizes Operacionais:', 'Technical Content & Operational Guidelines:')}
                </h4>
                <div className="text-xs sm:text-sm text-slate-700 whitespace-pre-line leading-relaxed bg-white p-4 rounded-xl border border-slate-200">
                  {t(selectedArticle.contentPt, selectedArticle.contentEn)}
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500">
                <p>
                  {t(
                    'Para obter uma auditoria especializada ou implementar procedimentos em conformidade com este tema, entre em contacto com a equipa técnica da WORTI Safety, Lda. em Maputo.',
                    'To commission a formal compliance audit or draft procedures aligned with this topic, contact the WORTI Safety technical team in Maputo.'
                  )}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border-t border-slate-200 p-4 flex items-center justify-between">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                {t('Fechar Artigo', 'Close Article')}
              </button>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onRequestProposal();
                }}
                className="px-5 py-2.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white text-xs font-bold transition-colors cursor-pointer border border-emerald-400/30"
              >
                {t('Solicitar Auditoria deste Tema', 'Request Audit on this Topic')}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
