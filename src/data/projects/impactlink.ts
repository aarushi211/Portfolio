
import type { Project } from "./types";

export const impactlink: Project = {
    slug: "impactlink",
    name: "ImpactLink",
    featured: true,
    demoLength: "2:37",

    desc:
        "Multi-agent platform for nonprofit grant discovery, proposal generation, funder-specific revisions, and budgeting.",

    tags: [
        "Multi-Agent",
        "LangGraph",
        "Hybrid Retrieval",
        "Full Stack",
    ],

    cats: ["LLM & Agents", "RAG"],

    github:
        "https://github.com/aarushi211/ImpactLink",

    live:
        "https://impactlink-cbfc5.web.app/",

    demoVideo:
        "https://youtu.be/sJPHl2RzuEE",

    overview:
        "ImpactLink is an AI-powered grant preparation platform that helps nonprofits move from an initial project idea toward a grant application. It combines grant discovery, guided multi-agent proposal drafting, funder-specific gap analysis, targeted revisions, and budget preparation. Human review is integrated throughout the workflow, allowing users to refine and approve AI-generated content.",

    arch: [
        [
            "Grant discovery & ranking",
            "Retrieve funding opportunities using semantic search with PostgreSQL pgvector, followed by AI-based relevance reranking and eligibility checks.",
        ],
        [
            "Multi-agent proposal generation",
            "Orchestrate guided information collection, section-by-section drafting, evaluation, and revision using LangGraph workflows.",
        ],
        [
            "Funder-specific improvements",
            "Analyze uploaded proposals against grant requirements, identify gaps, and generate targeted revisions with side-by-side comparisons.",
        ],
        [
            "Budget preparation",
            "Translate user-provided cost assumptions into structured budgets using deterministic Python calculations, with AI-assisted adjustments.",
        ],
        [
            "Human review & consistency",
            "Support proposal editing, consistency checks, review checkpoints, saved drafts, and PDF export.",
        ],
        [
            "Full-stack application",
            "Connect a React frontend to FastAPI services, with PostgreSQL for persistent workflows and Firebase for authentication and file storage.",
        ],
    ],

    results:
        "Won the Social category at Trojan Hacks. Independently expanded the original hackathon project into a full-stack prototype supporting grant discovery, proposal development, funder-specific revisions, and budget preparation.",

    learnings:
        "Explored multi-agent orchestration, retrieval and ranking quality, stateful workflows, and human-in-the-loop review. Designed deterministic budget calculations alongside AI-assisted drafting, balancing automation with user control, consistency, and traceability.",
};
