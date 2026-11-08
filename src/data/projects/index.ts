
import type { Project } from "./types";

import { impactlink } from "./impactlink";
import { clauselens } from "./clauselens";
// import { safeGamesLA } from "./safe-games-la";
// import { evaluationLab } from "./evaluation-lab";
// import { codeSummarization } from "./code-summarization";
// import { multiAgentDebate } from "./multi-agent-debate";

export type { Project } from "./types";

export const projects: Project[] = [
    impactlink,
    clauselens,
    //   safeGamesLA,
    //   evaluationLab,
    //   codeSummarization,
    //   multiAgentDebate,
];

export const categories = [
    "All",
    "LLM & Agents",
    "RAG",
    "Evaluation",
    "Systems",
];
