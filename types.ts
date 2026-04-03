
export interface SkillItem {
  name: string;
  description?: string;
  url?: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Experience {
  title: string;
  subtitle: string;
  duration?: string;
  period?: string;
  tag?: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  status: 'In Progress' | 'Completed';
  period?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  icon: string;
  color: string;
}

export interface KaggleCertification {
  name: string;
  category: 'python' | 'ml' | 'data' | 'sql' | 'ai' | 'other';
}

export interface VolunteerEvent {
  title: string;
  organizer: string;
  venue: string;
  description: string;
  highlights: string[];
  certificateLabel?: string;
  certificateUrl?: string;
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface CVData {
  name: string;
  role: string;
  phone: string;
  email: string;
  location: string;
  profileSummary: string;
  skills: SkillCategory[];
  languages: Language[];
  experience: Experience[];
  education: Education[];
  socials: SocialLink[];
  projects: Project[];
  kaggleCertifications: KaggleCertification[];
  kaggleDriveLink: string;
  volunteerEvents: VolunteerEvent[];
}
