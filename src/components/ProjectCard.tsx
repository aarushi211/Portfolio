import Link from "next/link";
import DemoButton from "./DemoButton";
import type { Project } from "@/data/site";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card">
      <div className="shot">
        {p.image ? <img src={p.image} alt="" /> : p.name}
        {p.demoLength && <DemoButton name={p.name} length={p.demoLength} video={p.demoVideo} />}
      </div>
      <h3><Link href={`/projects/${p.slug}`}>{p.name}</Link><span>↗</span></h3>
      <p>{p.desc}</p>
      <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
    </article>
  );
}
