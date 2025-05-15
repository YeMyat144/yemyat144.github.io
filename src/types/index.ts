export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  repoLink: string;
  liveLink?: string;
  slug: string;
  longDescription?: string;
  features?: string[];
  youtubeLink?: string;
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