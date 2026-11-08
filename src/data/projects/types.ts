
export type Project = {
  slug: string;
  name: string;
  featured?: boolean;
  demoLength?: string;

  desc: string;
  tags: string[];
  cats: string[];

  // Links
  github?: string;
  live?: string;
  demoVideo?: string;
  overviewVideo?: string;

  // Case study
  overview?: string;
  arch?: [string, string][];
  results?: string;
  learnings?: string;

  // Optional additions for richer pages
  challenges?: {
    title: string;
    description: string;
  }[];

  thumbnail?: string;
};
