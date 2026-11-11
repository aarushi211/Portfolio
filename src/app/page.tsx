import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Photo from "@/components/Photo";
import Beyond from "@/components/Beyond";
import Toolkit from "@/components/Toolkit";
import FocusAreas from "@/components/FocusAreas";
import { SITE, projects } from "@/data/site";

export default function Home() {
  // Use the following function if you want to control the order of featured projects manually.
  // const FEATURED_SLUGS = [
  //   "clauselens",
  //   "impactlink",
  //   "evaluation-lab",
  // ];

  // const featured = FEATURED_SLUGS
  //   .map((slug) => projects.find((p) => p.slug === slug))
  //   .filter((p): p is (typeof projects)[number] => Boolean(p));

  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => {
      if (a.slug === "clauselens") return -1;
      if (b.slug === "clauselens") return 1;
      return 0;
    })
    .slice(0, 2);

  return (
    <div className="wrap home-page">

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-content">
          <span className="home-eyebrow">
            AI ENGINEERING · SOFTWARE ENGINEERING
          </span>

          <h1>
            Hi, I'm <span>{SITE.name}.</span>
          </h1>

          <h2>
            From ideas to
            <em> working AI systems</em>
          </h2>

          <p className="home-hero-description">
            MS in Computer Science from USC. I design,
            build, test, and deploy AI systems — from
            LLM applications and agents to retrieval,
            evaluation, and backend engineering.
          </p>

          <div className="home-hero-actions">
            <Link className="btn pri" href="/projects">
              Explore my work ↗
            </Link>

            <a className="btn" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="home-hero-social">
            {SITE.github && (
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            )}

            {SITE.linkedin && (
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            )}

            {SITE.youtube && (
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube ↗
              </a>
            )}

            {SITE.location && (
              <span>{SITE.location}</span>
            )}
          </div>
        </div>

        <div className="home-hero-photo">
          <Photo />
        </div>
      </section>

      {/* SELECTED WORK */}
      {featured.length > 0 && (
        <section className="home-section home-featured">
          <div className="home-section-heading">
            <div>
              <span className="home-eyebrow">
                FEATURED PROJECTS
              </span>
              <h2>Selected work</h2>
              <p>
                A closer look at the systems I've built,
                the problems they solve, and the engineering behind them.
              </p>
            </div>

            <Link href="/projects" className="home-section-link">
              All projects →
            </Link>
          </div>

          <div className="projects-gallery-grid">
            {featured.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </section>
      )}

      {/* FOCUS AREAS */}
      <section className="home-section">
        <div className="home-section-heading">
          <div>
            <span className="home-eyebrow">
              WHAT I DO
            </span>
            <h2>What I work on</h2>
            <p>
              I enjoy working across the AI development lifecycle,
              building applications, experimenting with models,
              evaluating their behavior, and understanding the
              systems that support them.
            </p>
          </div>
        </div>

        <FocusAreas />
      </section>

      {/* ABOUT */}
      <section className="home-section home-about">
        <div className="home-about-content">
          <span className="home-eyebrow">
            BEYOND THE CODE
          </span>

          <h2>
            Curious by nature, even away from the keyboard.
          </h2>

          <p>
            Outside of coding, I enjoy getting lost in a good
            book, going on long walks, and watching anime.
          </p>

          <p>
            I love stories that introduce different perspectives,
            explore complex characters, or simply leave me with
            something to think about.
          </p>

          <Link href="/about" className="home-section-link">
            More about me →
          </Link>
        </div>

        <div className="home-about-visual">
          <Beyond />
        </div>
      </section>

      {/* TOOLKIT */}
      <section className="home-section home-toolkit">
        <div className="home-section-heading">
          <div>
            <span className="home-eyebrow">
              TECHNOLOGIES
            </span>
            <h2>Toolkit</h2>
            <p>
              Tools and technologies I use to build,
              experiment, and ship software.
            </p>
          </div>
        </div>

        <Toolkit />
      </section>


      {/* CONTACT */}
      <section id="contact" className="home-contact">
        <span className="home-eyebrow">
          LET'S CONNECT
        </span>

        <h2>Let's build something useful.</h2>

        <p>
          I'm exploring opportunities in AI and software
          engineering, particularly with teams building
          real-world products. If you're working on
          something interesting, I'd love to connect.
        </p>

        {/* CONTACT ACTIONS */}
        <div className="home-hero-actions home-contact-actions">
          <a
            href={SITE.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn pri"
          >
            Schedule a 30-Min Chat ↗
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="btn"
          >
            Send an Email ↗
          </a>

          <a
            href={SITE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View resume ↗
          </a>
        </div>
      </section>


    </div>
  );
}