
export type Project = {
    slug: string;
    name: string;
    featured?: boolean;
    demoLength?: string;

    desc: string;
    tags: string[];
    cats: string[];

    github?: string;
    live?: string;
    demoVideo?: string;
    overviewVideo?: string;

    // Project story
    overview?: string;
    problem?: string;
    contribution?: string;

    // Architecture
    arch?: [string, string][];
    architectureImage?: string;

    // Engineering details
    decisions?: {
        title: string;
        rationale: string;
        tradeoff?: string;
    }[];

    results?: string;
    validation?: string;
    limitations?: string;
    learnings?: string;

    // Existing optional data
    challenges?: {
        title: string;
        description: string;
    }[];

    thumbnail?: string;
};
