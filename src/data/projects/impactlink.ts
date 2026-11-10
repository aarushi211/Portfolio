
import type { Project } from "./types";

export const impactlink: Project = {
    slug: "impactlink",
    name: "ImpactLink",
    featured: true,
    demoLength: "2:37",

    desc:
        "Multi-agent platform for nonprofit grant discovery, proposal generation, funder-specific revisions, and budgeting.",

    tags: [
        "LangGraph",
        "Multi-Agent",
        "pgvector",
        "FastAPI",
        "React",
    ],

    cats: ["LLM & Agents", "RAG"],

    github: "https://github.com/aarushi211/ImpactLink",
    live: "https://impactlink-cbfc5.web.app/",
    demoVideo: "https://youtu.be/sJPHl2RzuEE",
    thumbnail: "/images/impactlink-mark.svg",

    overview:
        "ImpactLink is an AI-powered grant preparation platform that helps nonprofits move from an initial project idea toward a grant application. It combines funding opportunity discovery, guided proposal drafting, funder-specific gap analysis, targeted revisions, and structured budget preparation. Human review is integrated throughout the workflow.",

    problem:
        "Nonprofits often face a fragmented grant application process: finding relevant funding opportunities, interpreting eligibility requirements, writing detailed proposals, and preparing budgets. These tasks require significant manual research, coordination, and repeated revisions.",

    highlights: [
        {
            value: "Award Winner",
            label: "Trojan Hacks — Social category",
        },
        {
            value: "207",
            label: "Passing frontend and backend tests",
        },
        {
            value: "Multi-Agent",
            label: "Stateful proposal workflows with human review",
        },
    ],

    contribution:
        "Co-developed the original hackathon prototype, then independently rebuilt and expanded most of the frontend and backend. Implemented grant retrieval and ranking, stateful AI proposal workflows, funder-specific revisions, human review, and structured budget preparation.",

    architectureImage:
        "/images/impactlink-architecture.png",

    arch: [
        [
            "Grant discovery & ranking",
            "Use semantic retrieval with PostgreSQL pgvector, AI reranking, and recorded eligibility checks to identify potentially relevant funding opportunities.",
        ],
        [
            "Multi-agent proposal workflows",
            "Orchestrate guided information collection, section-by-section drafting, evaluation, and revision through LangGraph workflows.",
        ],
        [
            "Funder-specific improvements",
            "Analyze uploaded proposals against funder requirements, identify gaps, and generate targeted revisions with tracked comparisons.",
        ],
        [
            "Budget preparation",
            "Calculate staffing, direct costs, indirect costs, and budget constraints using structured inputs and deterministic Python arithmetic.",
        ],
        [
            "Human review & consistency",
            "Provide review checkpoints, editable drafts, consistency checks, persistent sessions, and PDF export.",
        ],
        [
            "Full-stack infrastructure",
            "Connect a React frontend to FastAPI services, with Neon PostgreSQL for grant data and workflow persistence and Firebase for authentication and file storage.",
        ],
    ],

    decisions: [
        {
            title: "Stateful workflows with human review",
            rationale:
                "Used LangGraph to coordinate multi-step proposal drafting and revision while preserving session state and allowing users to inspect and revise generated content.",
            tradeoff:
                "Stateful workflows introduce complexity around checkpoints, session recovery, and keeping user edits synchronized with AI-generated content.",
        },
        {
            title: "Semantic retrieval with AI reranking",
            rationale:
                "Used embedding-based retrieval with PostgreSQL pgvector to identify relevant grants, followed by AI reranking and eligibility checks to refine the results.",
            tradeoff:
                "Semantic relevance does not guarantee eligibility. Missing, outdated, or funder-specific requirements still require verification.",
        },
        {
            title: "Deterministic budget calculations",
            rationale:
                "Separated AI-assisted interpretation and drafting from financial arithmetic. Python calculates budgets using explicit cost assumptions, making calculations reproducible.",
            tradeoff:
                "The application requires structured financial inputs and additional validation rather than relying on free-form AI-generated estimates.",
        },
    ],

    results:
        "Won the Social category at Trojan Hacks. Independently expanded the original hackathon project into a full-stack prototype supporting grant discovery, proposal development, funder-specific revisions, and budget preparation.",

    validation:
        "The repository documents 144 passing backend tests, 63 passing frontend tests, and a successful frontend production build as of November 5, 2026. Earlier retrieval and drafting evaluations used a small set of synthetic scenarios and are not production-quality benchmarks.",

    limitations:
        "ImpactLink is a prototype, not a submission-ready grant application service. Eligibility checks cover only recorded requirements, AI-generated proposals require human verification, and database-level tenant isolation and broader real-world evaluation remain future improvements.",

    learnings:
        "Explored multi-agent orchestration, retrieval and ranking quality, stateful workflows, and human-in-the-loop design. Learned to separate probabilistic AI tasks from deterministic financial calculations while balancing automation, traceability, and user control.",
};
