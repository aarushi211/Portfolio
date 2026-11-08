
import type { Project } from "./types";

export const clauselens: Project = {
    slug: "clauselens",
    name: "ClauseLens",
    featured: true,
    demoLength: "1:58", // Verify against the uploaded YouTube video

    desc:
        "AI-powered Terms of Service analysis with hybrid RAG, cited answers, and evidence-based abstention.",

    tags: [
        "Hybrid RAG",
        "Qwen 2.5 7B",
        "FastAPI",
        "Cloud Run",
    ],

    cats: ["RAG", "LLM & Agents"],

    github:
        "https://github.com/aarushi211/ClauseLens",

    live:
        "https://tos-summarization.vercel.app/",

    demoVideo:
        "https://youtu.be/eazhCX62HJ8",

    overview:
        "ClauseLens helps users understand complex Terms of Service agreements through clause analysis and document-grounded Q&A. It retrieves relevant passages, generates answers with inspectable source references, and abstains when sufficient supporting evidence is unavailable. The application uses a fine-tuned, quantized 7B language model designed to support CPU-only inference.",

    arch: [
        [
            "Document ingestion",
            "Extract text from uploaded PDFs and prepare structure-aware chunks with source metadata.",
        ],
        [
            "Hybrid retrieval",
            "Combine dense vector search and BM25 using reciprocal rank fusion, followed by cross-encoder reranking.",
        ],
        [
            "Evidence-grounded generation",
            "Extract supporting evidence before generating cited answers, with an abstention path for insufficient context.",
        ],
        [
            "Quantized LLM inference",
            "Run a legal-task fine-tuned Qwen 2.5 7B model in GGUF format using llama.cpp, with CPU-only execution support.",
        ],
        [
            "Application & deployment",
            "Connect a Next.js frontend to a FastAPI backend with streaming responses, authentication, document processing, and Google Cloud Run deployment.",
        ],
    ],

    learnings:
        "Explored hybrid retrieval, evidence-grounded generation, fine-tuning, and 4-bit quantization. Evaluated retrieval and answer quality while navigating CPU inference latency, cloud cold starts, and the limitations of citation-based grounding.",
};
