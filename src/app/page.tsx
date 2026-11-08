import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Photo from "@/components/Photo";
import Beyond from "@/components/Beyond";
import Toolkit from "@/components/Toolkit";
import FocusAreas from "@/components/FocusAreas";
import { SITE, projects } from "@/data/site";

export default function Home() {
  const featured = projects.filter((p) => p.featured).sort((a) => (a.slug === "clauselens" ? -1 : 1));
  return (
    <div className="wrap">
      <div className="hero">
        <div>
          <h1>Hi, I’m {SITE.name}.</h1>
          <h2>I build AI systems that work beyond the demo.</h2>
          <p>MS in Computer Science from USC. I design, build, test, and deploy AI systems — from LLM applications and agents to retrieval, evaluation, and scalable backend engineering.</p>
          <div className="cta"><Link className="btn pri" href="/projects">Explore projects</Link><a className="tlink" href={`mailto:${SITE.email}`}>Get in touch</a></div>
          <div className="social"><a href={SITE.github || "#"}>GitHub</a><a href={SITE.linkedin || "#"}>LinkedIn</a><a href={SITE.youtube || "#"}>YouTube</a><span>{SITE.location}</span></div>
        </div>
        <Photo />
      </div>
      <section style={{ paddingTop: 8 }}>
        <div className="row"><h2 className="t">Selected work</h2><Link href="/projects">All projects</Link></div>
        <div className="grid">{featured.map((p, i) => <ProjectCard key={p.slug} p={p} large={i === 0} />)}</div>
      </section>
      <section style={{ borderTop: "1px solid var(--line)", paddingBottom: 24 }}>
        <h3 style={{ fontSize: 18, marginBottom: 20 }}>What I work on</h3>
        <FocusAreas />
      </section>
      <section className="about">
        <div><h2 className="t">A builder, explorer, and team player.</h2>
          <p>I love turning ideas into real systems, understanding how they work, and making them reliable in practice. Outside of code, you’ll find me in the pool, on a tennis court, or cheering on a team sport.</p>
          <Link href="/about" className="tlink">More about me</Link></div>
        <Beyond />
      </section>
      <section style={{ borderTop: "1px solid var(--line)", paddingTop: 40 }}>
        <h3 style={{ fontSize: 18 }}>Toolkit</h3><Toolkit />
      </section>
    </div>
  );
}
