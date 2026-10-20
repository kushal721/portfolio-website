// Types for content/portfolio.json. The `const content: Portfolio = data` line below makes
// `npm run build` fail with a clear error if the JSON has a typo or a missing field.
import data from '../content/portfolio.json';

export interface ProjectImage {
  src: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  meta?: string;
  featured?: boolean;
  tags?: string[];
  cover?: string;
  // "contain" shows the whole cover image (good for charts); default "cover" fills the card.
  coverFit?: string;
  description?: string;
  features?: string[];
  stack?: string[];
  stats?: { label: string; value: string }[];
  links?: { live?: string; github?: string; demo?: string };
  // Either a YouTube video id (the part after "watch?v=") or a video file in public/.
  video?: { youtube?: string; src?: string; poster?: string };
  images?: ProjectImage[];
}

export interface Role {
  title: string;
  team?: string;
  period: string;
  points: string[];
}

export interface Job {
  company: string;
  location?: string;
  current?: boolean;
  roles: Role[];
}

export interface Education {
  degree: string;
  school: string;
  location?: string;
  period?: string;
  details?: string;
}

export interface Portfolio {
  site: { url?: string; title: string; description?: string; accent?: string };
  profile: {
    name: string;
    firstName: string;
    initials: string;
    handle: string;
    role: string;
    location: string;
    photo?: string;
    resume?: string;
    intro: string;
    available?: string;
  };
  contact: {
    email: string;
    phone?: string;
    github?: string;
    linkedin?: string;
    title: string;
    text: string;
  };
  highlights: { icon: string; title: string; subtitle: string; text: string }[];
  projects: Project[];
  experience: Job[];
  education: Education[];
  skills: { title: string; items: string[] }[];
  interests?: string[];
}

const content: Portfolio = data;

export const { site, profile, contact, highlights, projects, experience, education, skills, interests } = content;
