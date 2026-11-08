import Link from "next/link";
import HeroStage from "@/components/HeroStage";
import ProjectCard from "@/components/ProjectCard";
import Photo from "@/components/Photo";
import Beyond from "@/components/Beyond";
import Toolkit from "@/components/Toolkit";
import { SITE, projects } from "@/data/site";

export default function Home() {
  return (
    <div className="wrap">
      <div className="hero">
        <div>
          <span className="pill"><i></i>AI Engineer · Software Engineer</span>
          <h1>Hi, I’m {SITE.name}.</h1>
          <h2>I build AI systems that work beyond the demo.</h2>
          <p>MS in Computer Science from USC. I design, build, test, and deploy AI systems — from LLM applications and agents to retrieval, evaluation, and scalable backend engineering.</p>
          <div className="cta"><Link className="btn pri" href="/projects">Explore projects ↗</Link><a className="btn" href={`mailto:${SITE.email}`}>Get in touch ✉</a></div>
          <div className="social"><a href={SITE.github || "#"}>GitHub</a><a href={SITE.linkedin || "#"}>LinkedIn</a><a href={SITE.youtube || "#"}>YouTube</a><span>{SITE.location}</span></div>
        </div>
        <HeroStage />
      </div>
      <section>
        <div className="row"><div><div className="lab">FEATURED PROJECTS</div><h2 className="t">Selected work</h2></div><Link href="/projects">View all projects ↗</Link></div>
        <div className="grid">{projects.filter((p) => p.featured).map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
      </section>
      <section className="about" style={{ borderTop: "1px solid var(--line)" }}>
        <Photo />
        <div><div className="lab">ABOUT ME</div><h2 className="t" style={{ marginBottom: 12 }}>A builder, explorer, and team player.</h2>
          <p>I love turning ideas into real systems, understanding how they work, and making them reliable in practice. Outside of code, you’ll find me in the pool, on a tennis court, or cheering on a team sport.</p>
          <Link href="/about" style={{ color: "var(--pu2)" }}>More about me ↗</Link></div>
        <Beyond />
      </section>
      <section style={{ borderTop: "1px solid var(--line)" }}>
        <div className="lab">TECHNOLOGIES</div><h2 className="t">My toolkit</h2><Toolkit />
      </section>
    </div>
  );
}
