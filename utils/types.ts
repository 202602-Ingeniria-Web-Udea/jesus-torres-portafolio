export interface Skill {
  name: string;
  value: number;
  icon?: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface NavLink {
  title: string;
  icon: string;
  link: string;
}

export interface Knowledge {
  icon: string;
  title: string;
  description: string;
}

export interface Education {
  institution: string;
  title: string;
  dates: string;
  description: string;
  type: "Formal" | "Complementaria";
}

export type ProjectCategory = "Web" | "Datos e IA" | "Calidad" | "Videojuegos";

export interface Project {
  id: string;
  title: string;
  image: string;
  category: ProjectCategory;
  summary: string;
  details: string;
  highlights: string[];
  technologies: string[];
  links: { label: string; url: string }[];
}
