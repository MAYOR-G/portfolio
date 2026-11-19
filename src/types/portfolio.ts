export type ProjectCategory =
  | 'ALL'
  | 'LLMS & FINE-TUNING'
  | 'RAG & MULTIMODAL'
  | 'CORE ML & MLOPS';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectSubItem {
  title: string;
  description: string;
  url?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: 'PRODUCTION' | 'OPEN_SOURCE' | 'RESEARCH' | 'SYSTEM_CORE';
  summary: string;
  description: string;
  subProjects?: ProjectSubItem[];
  architectureNotes?: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  articleUrl?: string;
  extraLinks?: ProjectLink[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  badge?: string;
  description?: string;
}

export interface SkillGroup {
  category: string;
  tag: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  workMode: string;
  bullets: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period?: string;
  mode?: string;
  details: string;
  courses: string[];
}

export interface PublicationItem {
  title: string;
  authors: string;
  venue: string;
  doi: string;
  doiUrl: string;
  abstract: string;
  tags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  credentialUrl?: string;
  imageUrl?: string;
  status: string;
  issueDate?: string;
  credentialId?: string;
  description?: string;
}

export interface SystemTelemetry {
  kernelVersion: string;
  uptime: string;
  workMode: string;
  nodeStatus: string;
  experienceYears: string;
  coreFocus: string;
}

export type TerminalTheme = 'green' | 'amber' | 'cyan';
