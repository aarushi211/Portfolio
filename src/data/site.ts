// ===== EDIT THIS FILE: all your content lives here =====
export const SITE = {
  name: "Aarushi",
  email: "you@example.com",
  github: "", linkedin: "", youtube: "", resume: "",
  photo: "", // e.g. "/photo.jpg" (file in the /public folder)
  location: "Seattle, WA",
};

export type Project = {
  slug: string; name: string; desc: string; tags: string[]; cats: string[];
  featured?: boolean; demoLength?: string;
  image?: string;          // screenshot, e.g. "/clauselens.png" (in /public)
  demoVideo?: string;      // embed URL, e.g. https://www.youtube.com/embed/VIDEO_ID
  overviewVideo?: string;
  github?: string; live?: string;
  overview?: string; results?: string; learnings?: string;
  arch?: [string, string][];
};

export const projects: Project[] = [
  { slug: "impactlink", name: "ImpactLink", featured: true, demoLength: "2:37",
    desc: "Multi-agent system for grant matching and proposal generation for nonprofits.",
    tags: ["Multi-agent", "RAG", "Full stack"], cats: ["LLM & Agents", "RAG"] },
  { slug: "clauselens", name: "ClauseLens", featured: true, demoLength: "1:58",
    desc: "Fine-tuned LLM with retrieval for Terms of Service understanding and Q&A.",
    tags: ["LoRA", "FAISS", "Cloud Run"], cats: ["RAG", "LLM & Agents"],
    arch: [
      ["Document ingestion", "Terms of Service text is cleaned and split into clauses."],
      ["Retrieval index", "Clauses are embedded and stored in a FAISS index."],
      ["Fine-tuned model", "A LoRA fine-tuned, CPU-friendly LLM answers using retrieved clauses."],
      ["Deployment", "The service runs on Google Cloud Run."]] },
  { slug: "safe-games-la", name: "Safe Games LA", featured: true, demoLength: "2:10",
    desc: "AI-assisted public safety analytics and verified data queries for LA.",
    tags: ["Tool calling", "DuckDB", "Data analysis"], cats: ["LLM & Agents", "Systems"] },
  { slug: "evaluation-lab", name: "Evaluation Lab", desc: "Model evaluation experiments for testing LLM reliability.",
    tags: ["Model evaluation"], cats: ["Evaluation"] },
  { slug: "code-summarization", name: "Code Summarization", desc: "Summarizing source code using AST and NLP techniques.",
    tags: ["AST", "NLP"], cats: ["LLM & Agents"] },
  { slug: "multi-agent-debate", name: "Multi-Agent Debate", desc: "Agents reasoning against each other to improve answers.",
    tags: ["Agents", "Reasoning"], cats: ["LLM & Agents", "Evaluation"] },
];
export const categories = ["All", "LLM & Agents", "RAG", "Evaluation", "Systems"];
export const defaultArch: [string, string][] = [["Inputs", "Describe how data enters the system."], ["Core logic", "Describe the model or agent logic."], ["Outputs", "Describe what the user sees."]];
export const placeholders = {
  overview: "Describe the problem, who it is for, and what you built.",
  results: "Add your evaluation numbers and what they show.",
  learnings: "Add the key engineering decisions, challenges, and what you would change.",
};

export const experience = [
  { when: "Sep 2026 – Present · Remote", title: "ANCI AI — Intern (Scheduling Agent Testing)", points: [
    "Designed an end-to-end test suite for a scheduling agent, covering intent parsing, approvals, time zones, external participants, and isolation.",
    "Identified edge cases, security risks (PII), and logging issues, and proposed fixes for safe execution.",
    "Created demo documentation, bug reports, and product recommendations."] },
  { when: "Prior experience", title: "Rezo.ai — Research / Engineering (TTS)", points: [
    "Worked on Hindi TTS latency optimization, investigated the ODE solver bottleneck, and proposed a fine-tuning approach."] },
];

export const articles = [
  { title: "Testing Scheduling Agents: Hidden Failures After Unit Testing", meta: "Oct 2026 · Engineering", href: "#" },
  { title: "Can Models Answer Without the Question?", meta: "Sep 2026 · LLM evaluation", href: "#" },
];

export const interests = [
  ["Competitive swimming", "Discipline, resilience, and a love for the water."],
  ["Tennis", "A great way to stay active and clear my mind."],
  ["Team sports", "I enjoy the teamwork, strategy, and energy of playing together."],
];

export const toolkit: Record<string, [string, string][]> = {
  "AI / ML": [["Python", "ImpactLink, ClauseLens"], ["PyTorch", "ClauseLens"], ["OpenAI", "ImpactLink"], ["LoRA", "ClauseLens"], ["FAISS", "ClauseLens"]],
  "Backend": [["Python", "All projects"], ["DuckDB", "Safe Games LA"]],
  "Cloud": [["Docker", "ClauseLens"], ["Google Cloud Run", "ClauseLens"]],
  "Frontend & tools": [["React", "ImpactLink"], ["TypeScript", "ImpactLink"]],
};
