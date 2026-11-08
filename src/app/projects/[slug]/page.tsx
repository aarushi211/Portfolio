
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/site";
import { VideoTabs, Arch } from "@/components/Interactive";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return {
    title: project?.name ?? "Project Not Found",
    description: project?.desc ?? "",
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const p = projects.find((project) => project.slug === slug);

  if (!p) {
    notFound();
  }

  return (
    <main className="wrap">
      <div className="pg project-detail">

        <Link className="back" href="/projects">
          ← All projects
        </Link>

        {/* Project introduction */}
        <header className="project-detail-hero">
          <span className="project-detail-eyebrow">
            PROJECT CASE STUDY
          </span>

          <h1 className="t">{p.name}</h1>
          <p>{p.desc}</p>

          <div className="tags" style={{ marginTop: 20 }}>
            {p.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="project-detail-links">
            {p.github && (
              <a
                className="btn"
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            )}

            {p.live && (
              <a
                className="btn pri"
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Live App ↗
              </a>
            )}
          </div>
        </header>

        {/* Videos */}
        {(p.demoVideo || p.overviewVideo) && (
          <section className="project-detail-media">
            <VideoTabs
              demo={p.demoVideo}
              overview={p.overviewVideo}
            />
          </section>
        )}

        {/* Overview */}
        {p.overview && (
          <section className="sec project-detail-section">
            <h2>Overview</h2>
            <p>{p.overview}</p>
          </section>
        )}

        {/* Architecture */}
        {p.arch && p.arch.length > 0 && (
          <section className="sec project-detail-section">
            <h2>How it works</h2>
            <Arch items={p.arch} />
          </section>
        )}

        {/* Tech stack */}
        <section className="sec project-detail-section">
          <h2>Tech stack</h2>

          <div className="tags">
            {p.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </section>

        {/* Results */}
        {p.results && (
          <section className="sec project-detail-section">
            <h2>Results & impact</h2>
            <p>{p.results}</p>
          </section>
        )}

        {/* Learnings */}
        {p.learnings && (
          <section className="sec project-detail-section">
            <h2>Learnings & limitations</h2>
            <p>{p.learnings}</p>
          </section>
        )}

        <div className="project-detail-footer">
          <Link href="/projects">
            ← Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}
