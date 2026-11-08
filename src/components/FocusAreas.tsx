"use client";
import Link from "next/link";
import { useState } from "react";

const AREAS = [
  ["AI systems", "End-to-end systems that hold up in use.", "/projects", "All projects"],
  ["AI agents", "Multi-agent workflows with tool calling.", "/projects/impactlink", "ImpactLink"],
  ["Evaluation", "Testing LLMs and agents for reliability.", "/projects/evaluation-lab", "Evaluation Lab"],
  ["Retrieval (RAG)", "Answers grounded in source documents.", "/projects/clauselens", "ClauseLens"],
  ["Backend & infra", "APIs, data pipelines, and deployment.", "/projects/safe-games-la", "Safe Games LA"],
];

export default function FocusAreas() {
  const [i, setI] = useState(0);
  const [, d, h, p] = AREAS[i];
  return (
    <>
      <div className="focus">
        {AREAS.map(([t], k) => (
          <button key={t} className={k === i ? "on" : ""} onMouseEnter={() => setI(k)} onFocus={() => setI(k)} onClick={() => setI(k)}>{t}</button>
        ))}
      </div>
      <p className="focus-cap">{d}<Link href={h}>See {p} →</Link></p>
    </>
  );
}
