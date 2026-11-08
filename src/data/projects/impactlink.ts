
import type { Project } from "./types";

export const impactlink: Project = {
  slug: "impactlink",
  name: "ImpactLink",
  featured: true,
  demoLength: "2:37",

  desc:
    "Multi-agent system for grant matching and proposal generation for nonprofits.",

  tags: ["Multi-agent", "RAG", "Full stack"],
  cats: ["LLM & Agents", "RAG"],

  github:
    "https://github.com/aarushi211/ImpactLink",

  // Add your YouTube URL once uploaded
  demoVideo: "https://youtu.be/sJPHl2RzuEE?si=arjfHAnZIsXi8Pkl",

  overview:
    "ImpactLink helps nonprofits discover relevant funding opportunities and prepare grant proposals. It combines retrieval, grant matching, AI-assisted proposal generation, and human review.",

  arch: [
    [
      "Grant discovery",
      "Search funding opportunities using keyword and semantic retrieval.",
    ],
    [
      "Ranking",
      "Combine retrieval signals and refine grant relevance.",
    ],
    [
      "Proposal generation",
      "Generate proposal sections using an AI-assisted workflow.",
    ],
    [
      "Human review",
      "Review, revise, and export proposal drafts.",
    ],
  ],

  results:
    "Won first place at the USC × Techstars Startup Weekend. The prototype can generate multi-section proposal drafts in minutes.",

  learnings:
    "Explored the trade-offs between retrieval relevance, ranking, automated drafting, and keeping users involved in the review process.",
};
