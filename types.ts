export interface MediaItem {
  type: 'image' | 'video';
  url?: string; // Optional, user will fill later
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  techStack: string[];
  media: MediaItem[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  techStack: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa?: string;
  achievements?: string[];
}

export interface Patent {
  title: string;
  number: string;
  date: string;
  description: string;
}

export interface PortfolioData {
  hero: {
    name: string;
    role: string;
    bio: string;
    location: string;
    status: string;
  };
  sectionTitles: {
    projects: string;
    experience: string;
    education: string;
    skills: string;
    patents: string;
  };
  projects: Project[];
  experience: Experience[];
  education: Education[];
  patents: Patent[];
  skills: {
    category: string;
    items: string[];
  }[];
}