// ===== EDIT THIS FILE: all your content lives here =====
export const SITE = {
  name: "Aarushi Jain",
  email: "aarushij.dev@gmail.com",
  github: "https://github.com/aarushi211", linkedin: "https://www.linkedin.com/in/aarushi-jain-01413a207/", youtube: "", resume: "",
  photo: "images/AarushiPhoto.jpeg",
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
  {
    when: "Sep 2026 – Present · Remote",
    title: "ANCI AI — AI Engineer Intern",
    summary:
      "Improving the reliability, security, and usability of an AI-powered scheduling platform.",
    technologies: [
      "AI Agents",
      "Security Testing",
      "API Testing",
      "Workflow Testing",
      "Jira"
    ],
    points: [
      "Designed 293 security test cases across 3 priority tiers (222 critical, 50 high-priority, 21 hardening) to systematically evaluate authorization, user/team isolation, and scheduling workflow risks.",
      "Executed and documented security tests across authenticated and unauthenticated scenarios, comparing expected and observed behavior to identify access-control and data-isolation defects.",
      "Developed multi-turn scheduling scenarios involving time zones, external participants, approvals, conflicting availability, and email interactions to evaluate agent behavior beyond simple successful bookings.",
      "Documented reproducible failures, partial outcomes, and unresolved cases with supporting evidence and follow-up actions, helping engineering teams prioritize investigation and remediation.",
      "Contributed to scheduling UI improvements, persona-driven email-response testing, and product recommendations while coordinating engineering work through Jira."
    ]
  },
  {
    when: "May 2025 – Aug 2025 · Noida, India",
    title: "Rezo.ai — Data Science Intern",
    summary:
      "Investigating and optimizing Hindi text-to-speech inference using F5-TTS.",
    technologies: [
      "Python",
      "PyTorch",
      "F5-TTS",
      "Whisper",
      "Weights & Biases",
      "Audio Processing"
    ],
    points: [
      "Adapted the open-source F5-TTS inference pipeline for Hindi by integrating a Hindi-trained checkpoint and vocabulary with the F5TTS_Small architecture.",
      "Profiled inference performance and traced computational overhead to the conditional flow-matching pipeline; evaluated local asset loading and caching, identifying why caching did not improve generation for changing input text.",
      "Built a Hindi speech-data preparation pipeline covering audio extraction, enhancement, speaker cleanup, silence trimming, segmentation, normalization, Whisper transcription, and language filtering.",
      "Adapted the fine-tuning workflow for F5TTS_Small, prepared training artifacts, and ran fine-tuning experiments with loss tracking through Weights & Biases.",
      "Experimented with reducing ODE inference steps from 32 to 8, evaluating the trade-off between generation speed and speech quality; further reductions noticeably degraded quality."
    ]
  },
  {
    when: "Feb 2024 – Jul 2024 · Bengaluru, India",
    title: "PwC Acceleration Centers — Data Analytics & AI Intern",
    summary:
      "Analyzing regional sales drivers and improving regression-based modeling for an FMCG client.",
    technologies: [
      "Regression Analysis",
      "Feature Selection",
      "Statistical Modeling",
      "Excel",
      "Data Cleaning"
    ],
    points: [
      "Analyzed SKU-level sales drivers across markets in Africa, the Middle East, and South Asia, investigating how pricing, promotions, weather, holidays, competition, and product cannibalization influenced demand.",
      "Adapted variable selection to individual markets after identifying that no single predictor combination consistently explained sales behavior across regions.",
      "Evaluated regression models using R², adjusted R², MAPE, elasticity, and statistical significance, refining predictor sets to balance model performance with interpretability.",
      "Investigated missing competitor and cannibalization data, handled outliers, and applied base-price smoothing to improve data quality before model evaluation.",
      "Incorporated region-specific demand events, including local festivals, holidays, and major cricket matches, when evaluating potential sales drivers.",
      "Prepared SKU-level Excel reports with model results and visualizations, supporting analysis, review, and discussion with the project team."
    ]
  },
  {
    when: "Mar 2023 – Jul 2024 · Tsukuba, Japan (Remote)",
    title: "KEK (Belle II Experiment) — Distributed Computing R&D Intern",
    summary:
      "Improving error diagnostics and functional testing for distributed scientific computing tools.",
    technologies: [
      "Python",
      "pytest",
      "Grid Computing",
      "Error Handling",
      "Jira"
    ],
    points: [
      "Contributed to the Belle II experiment's Grid Computing (gb2) toolset, used to support distributed computing workflows across collaborating research institutions.",
      "Implemented standardized error-code handling across gb2 tools, replacing ambiguous failure states with more structured and diagnosable errors.",
      "Designed and executed disk-quota boundary experiments to examine system behavior before and after storage thresholds were reached.",
      "Built a pytest-based functional test suite for the gb2_job toolset to validate expected behavior and improve repeatability of testing."
    ]
  },
  {
    when: "Jun 2022 – Aug 2022 · India",
    title: "National Technical Research Organisation (NTRO) — NLP & Machine Learning Intern",
    summary:
      "Developing multilingual language identification and interpretable document topic-modeling pipelines.",
    technologies: [
      "Python",
      "scikit-learn",
      "NLP",
      "SVM",
      "Naive Bayes",
      "TF-IDF",
      "CorEx"
    ],
    points: [
      "Developed multilingual language-identification experiments using 2 vectorization methods (CountVectorizer and TF-IDF) and 2 classifiers (Multinomial Naive Bayes and SVM).",
      "Applied preprocessing, train/validation/test splitting, k-fold cross-validation, and grid-search hyperparameter tuning to compare classification performance.",
      "Investigated classification difficulties between related languages and tested resampling, class priors, class weighting, and sample weighting to address class imbalance.",
      "Reported F1 scores of 0.98 for weighted Multinomial Naive Bayes with CountVectorizer and 0.99 for weighted SVM with TF-IDF in the internship experiments.",
      "Developed an Anchored CorEx topic-modeling workflow to organize documents into interpretable topics, exploring hierarchical representations and total correlation.",
      "Experimented with domain-guided topic discovery using anchor words and anchor strengths, documenting a configuration with 5 anchor words and an anchor strength of 5."
    ]
  }
];



export const articles = [
  // { title: "Testing Scheduling Agents: Hidden Failures After Unit Testing", meta: "Oct 2026 · Engineering", href: "#" },
  { title: "Can Models Answer Without the Question?", meta: "Sep 2026 · LLM evaluation", href: "https://aarushijain750597.substack.com/p/how-much-of-an-mmlu-score-comes-from?r=90nqwv&utm_campaign=post&utm_medium=web" },
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
