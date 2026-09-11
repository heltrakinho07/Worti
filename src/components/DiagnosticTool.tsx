import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  ArrowRight, 
  RotateCcw, 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle,
  FileSpreadsheet,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DIAGNOSTIC_QUESTIONS } from '../data/mockData';

interface DiagnosticToolProps {
  onRequestProposal: (serviceId?: string) => void;
}

export const DiagnosticTool: React.FC<DiagnosticToolProps> = ({ onRequestProposal }) => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (points: number) => {
    const nextAnswers = [...answers, points];
    setAnswers(nextAnswers);

    if (currentStep + 1 < DIAGNOSTIC_QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
  const maxScore = DIAGNOSTIC_QUESTIONS.length * 3;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const getResultFeedback = () => {
    if (totalScore <= 5) {
      return {
        levelPt: 'Nível Crítico de Risco Ocupacional',
        levelEn: 'Critical Occupational Hazard Level',
        badgeColor: 'bg-red-100 text-red-800 border-red-200',
        icon: ShieldAlert,
        summaryPt: 'A sua empresa apresenta vulnerabilidades severas perante a Lei do Trabalho e inspeções estatais. Há risco elevado de acidentes graves e penalizações financeiras.',
        summaryEn: 'Your facility exhibits severe compliance vulnerabilities regarding Mozambican labor laws. High probability of incidents and statutory penalties.',
        actionPt: 'Recomendação urgente: Realizar Auditoria de Conformidade Legal e Mapeamento Imediato de Riscos.',
        actionEn: 'Urgent recommendation: Commission an immediate Statutory HSE Compliance Audit & Hazard Register.',
        suggestedService: 'auditoria-sso-riscos'
      };
    } else if (totalScore <= 10) {
      return {
        levelPt: 'Maturidade Intermédia com Lacunas Críticas',
        levelEn: 'Intermediate Maturity with Critical Gaps',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
        icon: AlertTriangle,
        summaryPt: 'A organização tem iniciativas básicas de segurança, mas carece de medições científicas de higiene industrial (ruído, poeiras) e planos de emergência testados.',
        summaryEn: 'The organization has basic safety measures in place, but lacks quantitative industrial hygiene monitoring and certified emergency drills.',
        actionPt: 'Recomendação: Implementar monitorizações instrumentais de higiene e formação prática para a brigada de emergência.',
        actionEn: 'Recommendation: Deploy quantitative hygiene dosimetry and practical emergency brigade training.',
        suggestedService: 'higiene-industrial-monitorizacao'
      };
    } else {
      return {
        levelPt: 'Maturidade Avançada em Segurança & Higiene',
        levelEn: 'Advanced Safety & Hygiene Maturity',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        icon: ShieldCheck,
        summaryPt: 'A organização possui uma base sólida de gestão de riscos e procedimentos formais. O próximo passo estratégico é a certificação internacional ISO 45001 e ISO 14001.',
        summaryEn: 'Your organization maintains a robust risk management foundation. The strategic next step is formal international ISO 45001 & ISO 14001 certification.',
        actionPt: 'Recomendação: Auditoria de gap-analysis para integração e certificação ISO 45001 / ISO 14001.',
        actionEn: 'Recommendation: Gap analysis audit for integrated ISO 45001 / ISO 14001 certification.',
        suggestedService: 'sistemas-iso45001'
      };
    }
  };

  const result = isCompleted ? getResultFeedback() : null;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden">
      {/* Header banner */}
      <div className="bg-gradient-to-r from-[#064E3B] via-[#053F24] to-[#042E1B] p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-4 border-[#009639]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#009639] flex items-center justify-center shrink-0 shadow-sm">
            <ClipboardCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#34d399]">
              {t('Ferramenta Interativa de Auto-Diagnóstico', 'Interactive Self-Assessment Tool')}
            </span>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              {t('Simulador de Maturidade em HST & Conformidade', 'HSE Maturity & Compliance Simulator')}
            </h3>
          </div>
        </div>

        {!isCompleted && (
          <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">
            {t(`Questão ${currentStep + 1} de ${DIAGNOSTIC_QUESTIONS.length}`, `Question ${currentStep + 1} of ${DIAGNOSTIC_QUESTIONS.length}`)}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {!isCompleted ? (
          <div className="space-y-6">
            {/* Progress bar */}
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-[#009639] h-2 transition-all duration-300 rounded-full"
                style={{ width: `${((currentStep) / DIAGNOSTIC_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Current Question */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#00873E] mb-1">
                {t('Diagnóstico Rápido da Instalação', 'Quick Facility Diagnostic')}
              </p>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                {t(DIAGNOSTIC_QUESTIONS[currentStep].questionPt, DIAGNOSTIC_QUESTIONS[currentStep].questionEn)}
              </h4>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {DIAGNOSTIC_QUESTIONS[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.points)}
                  className="w-full p-4 rounded-xl text-left border border-slate-200 hover:border-[#009639] hover:bg-[#E8F8EE]/50 transition-all duration-150 flex items-center justify-between group active:scale-[0.99] cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-[#064E3B]">
                    {t(opt.textPt, opt.textEn)}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#009639] shrink-0 ml-3 transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          result && (
            <div className="space-y-6 animate-in zoom-in-95">
              <div className="text-center max-w-lg mx-auto space-y-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${result.badgeColor}`}>
                  <result.icon className="w-4 h-4" />
                  {t(result.levelPt, result.levelEn)}
                </span>

                <div className="text-4xl sm:text-5xl font-extrabold text-[#064E3B]">
                  {percentage}%
                  <span className="text-base font-normal text-slate-500 ml-2">
                    ({totalScore} / {maxScore} pts)
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t(result.summaryPt, result.summaryEn)}
                </p>
              </div>

              {/* Action Box */}
              <div className="bg-[#E8F8EE] border border-[#009639]/30 rounded-xl p-4.5 max-w-xl mx-auto space-y-2">
                <div className="flex items-center gap-2 text-[#064E3B] font-bold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#009639]" />
                  <span>{t('Próximo Passo Estratégico Recomendado:', 'Recommended Strategic Next Step:')}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-medium">
                  {t(result.actionPt, result.actionEn)}
                </p>
              </div>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t('Repetir Diagnóstico', 'Repeat Assessment')}</span>
                </button>

                <button
                  onClick={() => onRequestProposal(result.suggestedService)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#009639] hover:bg-[#007a2e] text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-700/20 active:scale-95 flex items-center justify-center gap-2 cursor-pointer border border-emerald-400/30"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>{t('Solicitar Plano de Ação Oficial', 'Request Formal Action Plan')}</span>
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
