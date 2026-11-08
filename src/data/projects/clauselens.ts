
import type { Project } from "./types";

export const clauselens: Project = {
    slug: "clauselens",
    name: "ClauseLens",
    featured: true,
    demoLength: "1:58",

    desc:
        "Fine-tuned LLM with retrieval for Terms of Service understanding and Q&A.",

    tags: ["LoRA", "FAISS", "Cloud Run"],
    cats: ["RAG", "LLM & Agents"],

    github:
        "https://github.com/aarushi211/ClauseLens",
    live:
        "https://tos-summarization.vercel.app/",

    demoVideo: "https://youtu.be/eazhCX62HJ8?si=3VGlTZdEcJmnP1ab",

    overview:
        "ClauseLens helps users understand lengthy Terms of Service agreements through concise summaries and document-grounded questions and answers.",

    arch: [
        [
            "Document ingestion",
            "Extract and prepare text from Terms of Service documents.",
        ],
        [
            "Retrieval",
            "Retrieve relevant passages using FAISS-based semantic search and reranking.",
        ],
        [
            "Language model",
            "Use a fine-tuned, quantized language model to generate responses from relevant context.",
        ],
        [
            "Deployment",
            "Run the application using a CPU-friendly model on Google Cloud Run.",
        ],
    ],

    learnings:
        "Explored retrieval quality, fine-tuning, quantization, and the practical constraints of CPU-based LLM deployment.",
};
