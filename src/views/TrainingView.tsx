import React, { useState } from 'react';
import { 
  GraduationCap, 
  Clock, 
  Award, 
  Users, 
  CheckCircle2, 
  BookOpen, 
  ArrowRight, 
  Building, 
  FileCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRAINING_COURSES, COMPANY_INFO } from '../data/mockData';

interface TrainingViewProps {
  onRequestProposal: (serviceId?: string) => void;
}

export const TrainingView: React.FC<TrainingViewProps> = ({ onRequestProposal }) => {
  const { t } = useLanguage();
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(TRAINING_COURSES[0].id);

  const toggleCourse = (id: string) => {
    setExpandedCourseId(prev => (prev === id ? null : id));
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-[#E8F8EE] text-[#00873E] border border-[#009639]/30 text-xs font-bold uppercase tracking-wider">
          {t('Academia Corporativa WORTI Safety', 'WORTI Safety Corporate Academy')}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#064E3B] tracking-tight">
          {t('Formação e Capacitação Prática em HST', 'Practical Occupational Safety & Health Training')}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {t(
            'Cursos certificados focados em competências reais para proteger vidas, evitar acidentes graves e cumprir as exigências da Inspeção do Trabalho em Moçambique.',
            'Certified courses engineered to instill life-saving reflexes, avoid catastrophic injuries, and satisfy Mozambican Labor Inspectorate mandates.'
          )}
        </p>
      </div>

      {/* 2. Key Pillars of Training Delivery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-2 hover:border-[#009639] transition-colors">
          <div className="w-10 h-10 rounded-xl bg-[#E8F8EE] text-[#009639] flex items-center justify-center font-bold">
            <Building className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#064E3B]">
            {t('Formação In-Company', 'In-Company Delivery')}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {t(
              'Ministramos a formação diretamente nas vossas fábricas, estaleiros de construção ou escritórios em Maputo, Matola, Tete e Beira.',
              'We conduct courses directly on your facility shopfloor, civil construction sites, or corporate offices nationwide.'
            )}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-2 hover:border-[#009639] transition-colors">
          <div className="w-10 h-10 rounded-xl bg-[#E8F8EE] text-[#009639] flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#064E3B]">
            {t('Certificados Verificáveis', 'Verifiable Credentials')}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {t(
              'Cada formando recebe certificado individual com código de autenticidade, acompanhado de relatório de aproveitamento para os Recursos Humanos.',
              'Every trainee receives an individual certificate bearing an authenticity verification code, paired with an HR assessment report.'
            )}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-2 hover:border-[#009639] transition-colors">
          <div className="w-10 h-10 rounded-xl bg-[#E8F8EE] text-[#009639] flex items-center justify-center font-bold">
            <FileCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#064E3B]">
            {t('Prática Intensiva (60% Prática)', 'Hands-on Drills (60% Practical)')}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {t(
              'Manequins de RCP, desfibrilhadores de treino, extintores reais, arneses de altura e detetores de 4 gases para experiência real.',
              'High-fidelity CPR manikins, AED trainers, live extinguisher drills, height harnesses, and 4-gas atmosphere detectors.'
            )}
          </p>
        </div>
      </div>

      {/* 3. Courses Catalog with Expandable Syllabuses */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#064E3B]">
              {t('Catálogo de Cursos Corporativos', 'Corporate Course Catalog')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {t('Selecione um curso para ver os módulos detalhados e solicitar turma.', 'Select a course to view modules and request a dedicated session.')}
            </p>
          </div>

          <button
            onClick={() => onRequestProposal('formacao-corporativa-geral')}
            className="px-5 py-2.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white font-bold text-xs shadow-sm active:scale-95 transition-all self-start sm:self-auto cursor-pointer border border-emerald-400/30"
          >
            {t('Pedir Cotação para Turma à Medida', 'Request Custom Cohort Quote')}
          </button>
        </div>

        <div className="space-y-4">
          {TRAINING_COURSES.map((course) => {
            const isExpanded = expandedCourseId === course.id;
            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:border-[#009639] transition-all"
              >
                {/* Course Bar Header */}
                <div
                  onClick={() => toggleCourse(course.id)}
                  className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-[#E8F8EE] text-[#00873E] border border-[#009639]/30">
                        {course.code}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {t(course.categoryPt, course.categoryEn)}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#064E3B] hover:text-[#009639] transition-colors">
                      {t(course.titlePt, course.titleEn)}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
                      {t(course.summaryPt, course.summaryEn)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between lg:justify-end gap-6 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs text-slate-800 font-bold shrink-0">
                      <Clock className="w-4 h-4 text-[#009639]" />
                      <span>{course.durationHours} horas</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onRequestProposal(course.id);
                        }}
                        className="px-3.5 py-1.5 rounded-lg bg-[#009639] hover:bg-[#007a2e] text-white text-xs font-bold transition-colors cursor-pointer border border-emerald-400/30"
                      >
                        {t('Solicitar Turma', 'Request Cohort')}
                      </button>

                      <div className="p-1 rounded-lg text-slate-400">
                        {isExpanded ? <ChevronUp className="w-5 h-5 text-[#009639]" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Detailed Syllabus */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 bg-slate-50/70 border-t border-slate-100 space-y-4 animate-in fade-in duration-150">
                    
                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 bg-white rounded-xl border border-slate-200/70">
                        <strong className="block text-[#064E3B] font-bold mb-0.5">{t('Formato:', 'Format:')}</strong>
                        <span>{t(course.formatPt, course.formatEn)}</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-slate-200/70">
                        <strong className="block text-[#064E3B] font-bold mb-0.5">{t('Certificação:', 'Certification:')}</strong>
                        <span>{t(course.certificationPt, course.certificationEn)}</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-slate-200/70">
                        <strong className="block text-[#064E3B] font-bold mb-0.5">{t('Público Recomendado:', 'Target Audience:')}</strong>
                        <span>{t(course.targetPt, course.targetEn)}</span>
                      </div>
                    </div>

                    {/* Modules Checklist */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#064E3B] mb-2">
                        {t('Conteúdo Programático e Módulos:', 'Syllabus & Core Modules:')}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(t(course.modulesPt.join('|||'), course.modulesEn.join('|||'))).split('|||').map((mod, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200/70">
                            <CheckCircle2 className="w-4 h-4 text-[#009639] shrink-0 mt-0.5" />
                            <span>{mod}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
