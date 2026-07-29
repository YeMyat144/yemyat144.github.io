import type { SvgIconComponent } from '@mui/icons-material';

export type ProjectCategory = 'Full-Stack' | 'AI & Automation' | 'AR' | 'Game' | 'UX/UI';

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
  screenshots?: string[];
  liveLink2?: string;
}

export interface NavItem {
  title: string;
  path: string;
  icon: SvgIconComponent;
}

export interface SocialLink {
  name: string;
  icon: SvgIconComponent;
  url: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}