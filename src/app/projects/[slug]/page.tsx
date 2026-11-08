import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, defaultArch, placeholders } from "@/data/site";
import { VideoTabs, Arch } from "@/components/Interactive";

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p?.name, description: p?.desc };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <div className="wrap"><div className="pg">
      <Link className="back" href="/projects">← All projects</Link>
      <h2 className="t">{p.name}</h2>
      <p>{p.desc}</p>
      <div className="tags" style={{ marginTop: 16 }}>{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
      <VideoTabs demo={p.demoVideo} overview={p.overviewVideo} />
      <div className="sec"><h3>Overview</h3><p>{p.overview || placeholders.overview}</p></div>
      <div className="sec"><h3>Architecture</h3><Arch items={p.arch || defaultArch} /></div>
      <div className="sec"><h3>Tech stack</h3><div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div></div>
      <div className="sec"><h3>Results</h3><p>{p.results || placeholders.results}</p></div>
      <div className="sec"><h3>Learnings and limitations</h3><p>{p.learnings || placeholders.learnings}</p></div>
      <div className="cta">
        <a className="btn pri" target="_blank" rel="noopener" href={p.github || "#"}>GitHub ↗</a>
        <a className="btn" target="_blank" rel="noopener" href={p.live || "#"}>Live demo ↗</a>
      </div>
    </div></div>
  );
}
