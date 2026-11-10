
import type { Project } from "./types";

export const clauselens: Project = {
    slug: "clauselens",
    name: "ClauseLens",
    featured: true,
    demoLength: "1:58",

    desc:
        "AI-powered Terms of Service analysis with hybrid retrieval, cited answers, and evidence-based abstention.",

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

    thumbnail:
        "/images/clauselens-scale.svg",


    overview:
        "ClauseLens helps users understand complex Terms of Service agreements through document analysis and clause-grounded question answering. It retrieves relevant passages, generates answers with inspectable source references, and abstains when sufficient supporting evidence is unavailable. The application uses a fine-tuned, quantized 7B language model with CPU-only inference support.",

    problem:
        "Terms of Service agreements are lengthy and difficult to interpret. Users often accept them without understanding important conditions. General-purpose LLMs can also generate unsupported answers without showing the clauses on which their responses are based.",

    highlights: [
        {
            value: "0.88",
            label: "Mean Q&A faithfulness across 15 evaluation questions",
        },
        {
            value: "Hybrid RAG",
            label: "BM25 + dense retrieval + cross-encoder reranking",
        },
        {
            value: "CPU-Only",
            label: "Fine-tuned, quantized Qwen 2.5 7B inference",
        },
    ],

    contribution:
        "Built an end-to-end Terms of Service analysis application, including PDF ingestion, hybrid retrieval, evidence-grounded question answering, quantized model inference, frontend and backend integration, cloud deployment, and evaluation.",

    architectureImage:
        "/images/clauselens-architecture.png",


    arch: [
        [
            "Document ingestion",
            "Extract text from uploaded PDFs, create structure-aware chunks, and preserve page and section metadata.",
        ],
        [
            "Hybrid retrieval",
            "Combine dense semantic search and BM25 using reciprocal rank fusion to retrieve relevant clauses.",
        ],
        [
            "Cross-encoder reranking",
            "Rerank candidate passages to prioritize the most relevant supporting context.",
        ],
        [
            "Evidence extraction",
            "Identify supporting passages and their source references before generating a response.",
        ],
        [
            "Quantized LLM inference",
            "Use a legal-task fine-tuned Qwen 2.5 7B model in GGUF format, with CPU-only inference support.",
        ],
        [
            "Cited answer or abstention",
            "Generate an answer with inspectable source references, or abstain when sufficient evidence is unavailable.",
        ],
    ],


    decisions: [
        {
            title: "Hybrid retrieval with reranking",
            rationale:
                "Combined dense semantic retrieval with BM25 using reciprocal rank fusion, followed by cross-encoder reranking, to capture both conceptual similarity and exact terminology in legal documents.",
            tradeoff:
                "Additional retrieval stages increase complexity and computation. Chunk boundaries can also separate related clauses and exceptions.",
        },
        {
            title: "Evidence extraction before generation",
            rationale:
                "Separated evidence extraction from answer synthesis to provide inspectable source references and support abstention when sufficient evidence is unavailable.",
            tradeoff:
                "Retrieval and evidence extraction errors can still produce incomplete or incorrect answers. Citations alone do not guarantee factual correctness.",
        },
        {
            title: "Quantized 7B model for CPU inference",
            rationale:
                "Used a legal-task fine-tuned Qwen 2.5 7B model in GGUF format with llama.cpp to support inference without requiring a dedicated GPU.",
            tradeoff:
                "CPU inference introduces latency, while quantization and the model's limited context window can affect answer quality.",
        },
    ],

    validation:
        "Evaluated 15 questions across 5 PDFs from 4 services. Recorded context recall was approximately 0.93, mean Q&A faithfulness 0.88, and answer relevance 0.60. A separate local benchmark recorded 17.2-second mean Q&A latency. These are small offline evaluations, not production accuracy guarantees.",

    limitations:
        "The model can miss clauses, misinterpret exceptions, or generate unsupported claims despite citations. CPU inference and cloud cold starts introduce latency. Citation accuracy and correct-abstention rates have not been independently measured, and experimental risk labels are not legal judgments.",

    learnings:
        "Explored hybrid retrieval, evidence-grounded generation, fine-tuning, and 4-bit quantization. Evaluated retrieval and answer quality while navigating CPU inference latency, cloud cold starts, and the limitations of citation-based grounding.",
};
