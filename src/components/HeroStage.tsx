"use client";
import Link from "next/link";
import { useRef } from "react";

const B: [string, string, string, string, React.CSSProperties][] = [
  ["🧠", "AI systems", "End-to-end systems that hold up in use.", "/projects", { left: "30%", top: 0, ["--d" as string]: 10 }],
  ["🧩", "AI agents", "Multi-agent workflows with tool calling.", "/projects", { left: 0, top: "28%", ["--d" as string]: 18 }],
  ["📊", "Evaluation", "Testing LLMs and agents for reliability.", "/projects/evaluation-lab", { right: 0, top: "26%", ["--d" as string]: 14 }],
  ["🔍", "Retrieval (RAG)", "Answers grounded in source documents.", "/projects/clauselens", { left: "16%", top: "58%", ["--d" as string]: 22 }],
  ["</>", "Backend & infra", "APIs, data pipelines, and deployment.", "/projects", { right: "2%", top: "60%", ["--d" as string]: 12 }],
];

export default function HeroStage() {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", String((e.clientX - r.left) / r.width - 0.5));
    el.style.setProperty("--my", String((e.clientY - r.top) / r.height - 0.5));
  };
  return (
    <div className="stage" ref={ref} onMouseMove={move} aria-label="Areas of work">
      {B.map(([i, t, d, h, s]) => <Link key={t} className="blk" style={s} href={h}><b>{i}</b>{t}<em>{d}</em></Link>)}
    </div>
  );
}
