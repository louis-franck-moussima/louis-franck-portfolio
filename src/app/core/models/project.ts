import { ProjectSection } from "./project-detail";

export type ProjectType =
  | 'product'
  | 'open-source'
  | 'client'
  | 'experimental';

export interface Project {
  slug: string;
  name: string;
  eyebrow: string;

  description: string;
  summary: string;

  role: string;
  status: string;

  category?: string;
  year?: number;

  type: ProjectType;

  technologies: string[];
  highlights: string[];

  challenge?: string;
  solution?: string;
  result?: string;

  sections?: ProjectSection[];

  featured: boolean;

  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;

  coverImage?: string;
  screenshots?: string[];
  architectureImage?: string;
}