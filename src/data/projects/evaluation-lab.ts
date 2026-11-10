
import type { Project } from "./types";

export const evaluationLab: Project = {
    slug: "evaluation-lab",
    name: "Evaluation Lab",
    featured: true,

    desc:
        "LLM evaluation research exploring benchmark biases, model robustness, and the limitations of accuracy-based comparisons.",

    tags: [
        "LLM Evaluation",
        "Python",
        "MMLU",
        "Statistical Testing",
        "Benchmark Analysis",
    ],

    cats: ["LLM & Agents", "Data Science"],

    github: "https://github.com/aarushi211/evaluation_lab",

    // Add your YouTube URL once the video is uploaded.
    demoVideo: "https://youtu.be/WAHkrea-5_w?si=riWXpclqQCxkcd2B.",
    // demoLength: "1:55",

    // Add your project assets when ready.
    thumbnail: "/images/Evaluation Lab Logo.png",
    architectureImage: "/images/Evaluation Lab Pipeline.png",

    overview:
        "Evaluation Lab is a research and engineering project investigating how dataset structure and controlled input perturbations influence large language model benchmark performance. Starting with MMLU, the project combines dataset forensics, model evaluation, and statistical analysis to examine whether benchmark accuracy reliably reflects the capabilities being measured. It also provides reusable infrastructure for evaluating models across different providers and experimental conditions.",

    problem:
        "LLM benchmarks are widely used to compare model capabilities, but aggregate accuracy can hide dataset artifacts, answer-selection biases, and sensitivity to seemingly irrelevant input changes. Without additional analysis, it is difficult to distinguish improvements in task performance from behaviors influenced by benchmark structure.",

    highlights: [
        {
            value: "14,042",
            label: "MMLU questions evaluated",
        },
        {
            value: "39.70%",
            label: "GPT-5 Nano accuracy without questions",
        },
        {
            value: "4.43 pp",
            label: "Accuracy drop after option shuffling",
        },
    ],
    contribution:
        "Designed and implemented MMLU dataset-forensics analyses and controlled evaluation experiments across Llama 3.2 3B and GPT-5 Nano. Investigated answer-position and length biases, duplicate questions, options-only performance, answer shuffling, lexical negation, and typo robustness. Built reusable Python evaluation utilities supporting multiple model providers, consistent experiment execution, hashed question identifiers, checkpointing, and resumable CSV-based result collection.",

    arch: [
        [
            "Benchmark ingestion",
            "Load MMLU evaluation splits and organize questions, answer options, labels, and subject metadata for analysis.",
        ],
        [
            "Dataset forensics",
            "Analyze answer-position distributions, option-length patterns, duplicate items, cross-split overlap, and other structural characteristics.",
        ],
        [
            "Controlled interventions",
            "Construct evaluation variants by removing question stems, shuffling answer options, and introducing small textual perturbations.",
        ],
        [
            "Multi-provider evaluation",
            "Execute model evaluations using a shared Python interface supporting Ollama, Groq, OpenAI, Anthropic, and Gemini.",
        ],
        [
            "Checkpointing & result collection",
            "Use hashed question and row identifiers, consistent configurations, and append-only CSV outputs to track results and resume interrupted evaluations.",
        ],
        [
            "Statistical analysis",
            "Compare baseline and intervention results using accuracy differences, answer-selection patterns, and statistical significance tests.",
        ],
    ],

    decisions: [
        {
            title: "Controlled interventions instead of accuracy alone",
            rationale:
                "Evaluated models under modified input conditions to investigate whether answer-option ordering, question context, and minor textual changes affect benchmark performance.",
            tradeoff:
                "Observed performance differences do not automatically identify their underlying causes. Additional experiments are needed to distinguish positional biases, dataset artifacts, and model-specific behaviors.",
        },
        {
            title: "Dataset forensics before model experiments",
            rationale:
                "Analyzed structural characteristics of MMLU, including option-length bias, answer-position imbalance, duplicates, and cross-split overlap, to identify hypotheses worth testing experimentally.",
            tradeoff:
                "Dataset-level patterns alone do not establish that models exploit those patterns or that benchmark scores are inflated.",
        },
        {
            title: "Reusable multi-provider evaluation infrastructure",
            rationale:
                "Developed shared evaluation utilities to run experiments across different model providers with consistent configurations, prompting interfaces, and result collection.",
            tradeoff:
                "Different providers expose different model behavior, APIs, and execution constraints. Matching evaluation settings improves comparability but does not eliminate every source of variation.",
        },
        {
            title: "Resumable and traceable experiments",
            rationale:
                "Used content-derived identifiers, append-only CSV results, and checkpointing to preserve experiment progress and support comparisons across runs.",
            tradeoff:
                "Reproducibility still depends on preserving model versions, configurations, dataset versions, and provider-specific behavior.",
        },
    ],

    results:
        "On the 14,042-question MMLU test set, Llama 3.2 3B achieved 61.88% baseline accuracy and GPT-5 Nano achieved 69.75%. In options-only evaluations, both models exceeded the 25% chance baseline, reaching 36.16% and 39.70%, respectively. Shuffling answer choices reduced overall accuracy by 2.26 and 4.43 percentage points. Dataset analysis also identified answer-length bias, positional imbalance, duplicate items, and cross-split overlap.",

    validation:
        "Evaluated Llama 3.2 3B and GPT-5 Nano across baseline and controlled MMLU experiments. Used statistical tests to assess options-only performance, typo robustness, and lexical negation. Minor typos produced statistically significant accuracy reductions in both models, while the overall negation analysis did not find statistically significant differences. Findings are documented alongside experimental scripts and results in the repository.",

    limitations:
        "The completed investigation focuses on MMLU and two evaluated models; findings should not be generalized to all benchmarks or model families. Options-only performance and sensitivity to perturbations do not independently establish memorization or contamination. Some analyses are observational, and provider-specific behavior, prompt formatting, and experimental configuration can influence results. Additional benchmarks and interventions remain planned work.",

    learnings:
        "Strengthened my understanding of benchmark validity, dataset artifacts, controlled experimental design, statistical hypothesis testing, and reproducible LLM evaluation. Learned that higher benchmark accuracy does not necessarily imply greater robustness, and that subject-level analysis can reveal behavioral differences hidden by aggregate scores.",
};
