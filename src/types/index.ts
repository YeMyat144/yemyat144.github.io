export type ProjectCategory = 'Full-Stack' | 'AR' | 'Game';

export type ProjectStatus = 'Live' | 'Completed' | 'In Development';

export interface Project {
  id: number;
  title: string;
  contributors?: string[];
  description: string;
  impact?: string;
  image: string;
  techStack: string[];
  repoLink: string;
  liveLink?: string;
  slug: string;
  longDescription?: string;
  features?: string[];
  youtubeLink?: string;
  featured?: boolean;
  category: ProjectCategory;
  client?: string;
  role?: string;
  private?: boolean;
  year?: string;
  status?: ProjectStatus;
}

export interface NavItem {
  title: string;
  path: string;
  icon: React.ElementType;
}

export interface SocialLink {
  name: string;
  icon: React.ElementType;
  url: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}