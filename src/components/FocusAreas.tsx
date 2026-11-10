"use client";

import Link from "next/link";
import { useState } from "react";

const AREAS = [
  {
    title: "AI systems",
    description:
      "I enjoy building applications that combine language models with traditional software engineering — exploring everything from initial prototypes to testing, evaluation, and deployment.",
    href: "/projects",
    project: "Explore projects",
  },
  {
    title: "AI agents",
    description:
      "Exploring how agents use tools, coordinate multi-step workflows, and handle complex tasks — including the challenges of reliability, unexpected inputs, and failure recovery.",
    href: "/projects/impactlink",
    project: "ImpactLink",
  },
  {
    title: "Evaluation",
    description:
      "Investigating model behavior beyond headline benchmark scores, testing assumptions, identifying failure cases, and understanding how small changes can affect model performance.",
    href: "/projects/evaluation-lab",
    project: "Evaluation Lab",
  },
  {
    title: "Retrieval (RAG)",
    description:
      "Building retrieval pipelines using semantic search, hybrid retrieval, and reranking to find relevant information and provide better context for language models.",
    href: "/projects/clauselens",
    project: "ClauseLens",
  },
  {
    title: "Backend & infra",
    description:
      "Working with APIs, data processing pipelines, service integrations, and deployment — understanding the software infrastructure needed to support AI applications.",
    href: "/projects/safegamesla",
    project: "Safe Games LA",
  },
];

export default function FocusAreas() {
  const [active, setActive] = useState(0);
  const area = AREAS[active];

  return (
    <div className="focus-areas">
      <div className="focus">
        {AREAS.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={index === active ? "on" : ""}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            aria-pressed={index === active}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="focus-details" aria-live="polite">
        <p>{area.description}</p>

        <Link href={area.href}>
          {area.project === "Explore projects"
            ? "Explore projects →"
            : `See ${area.project} →`}
        </Link>
      </div>
    </div>
  );
}