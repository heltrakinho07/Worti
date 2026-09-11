export type Language = 'pt' | 'en';

export type ServiceCategory = 
  | 'seguranca-riscos'
  | 'saude-ocupacional'
  | 'higiene-industrial'
  | 'ambiente-residuos'
  | 'formacao-sistemas';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  titlePt: string;
  titleEn: string;
  shortDescPt: string;
  shortDescEn: string;
  problemPt: string;
  problemEn: string;
  scopePt: string[];
  scopeEn: string[];
  deliverablesPt: string[];
  deliverablesEn: string[];
  methodologyPt: string;
  methodologyEn: string;
  targetAudiencePt: string;
  targetAudienceEn: string;
  estimatedDurationPt: string;
  estimatedDurationEn: string;
  iconName: string;
  isPriority?: boolean;
}

export interface TrainingCourse {
  id: string;
  code: string;
  titlePt: string;
  titleEn: string;
  durationHours: number;
  categoryPt: string;
  categoryEn: string;
  formatPt: string;
  formatEn: string;
  certificationPt: string;
  certificationEn: string;
  targetPt: string;
  targetEn: string;
  modulesPt: string[];
  modulesEn: string[];
  summaryPt: string;
  summaryEn: string;
}

export interface SectorItem {
  id: string;
  titlePt: string;
  titleEn: string;
  descriptionPt: string;
  descriptionEn: string;
  keyHazardsPt: string[];
  keyHazardsEn: string[];
  solutionsPt: string[];
  solutionsEn: string[];
  caseStudy?: {
    titlePt: string;
    titleEn: string;
    challengePt: string;
    challengeEn: string;
    solutionPt: string;
    solutionEn: string;
    resultPt: string;
    resultEn: string;
  };
  iconName: string;
  image: string;
}

export interface ResourceArticle {
  id: string;
  titlePt: string;
  titleEn: string;
  categoryPt: string;
  categoryEn: string;
  readTime: string;
  date: string;
  summaryPt: string;
  summaryEn: string;
  contentPt: string;
  contentEn: string;
  tags: string[];
  highlightsPt?: string[];
  highlightsEn?: string[];
}

export type ArticleItem = ResourceArticle;

export interface ChecklistItem {
  id: string;
  titlePt: string;
  titleEn: string;
  category: string;
  items: {
    id: string;
    textPt: string;
    textEn: string;
    critical: boolean;
  }[];
}

export interface ProposalRequest {
  fullName: string;
  companyName: string;
  role: string;
  email: string;
  phone: string;
  sector: string;
  serviceInterest: string;
  location: string;
  employeesRange: string;
  projectTimeline: string;
  description: string;
  acceptedPrivacy: boolean;
}
