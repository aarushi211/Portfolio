
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/site";
import { VideoTabs, Arch } from "@/components/Interactive";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((item) => item.slug === slug);

  return {
    title: p?.name ?? "Project",
    description: p?.desc ?? "",
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((item) => item.slug === slug);

  if (!p) notFound();

  const hasDetails = Boolean(p.overview || p.arch?.length);

  return (
    <div className="wrap">
      <main className="project-case">

        <Link href="/projects" className="project-back">
          ← All projects
        </Link>

        <header className="project-case-header">
          <h1>{p.name}</h1>
          <p>{p.desc}</p>

          <div className="tags">
            {p.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="project-case-actions">
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
                Live App ↗
              </a>
            )}
          </div>
        </header>

        {(p.demoVideo || p.overviewVideo) && (
          <div className="project-case-video">
            <VideoTabs
              demo={p.demoVideo}
              overview={p.overviewVideo}
            />
          </div>
        )}

        {hasDetails && (
          <div className="project-case-grid">
            {p.overview && (
              <section className="project-case-panel">
                <h2>Overview</h2>
                <p>{p.overview}</p>
              </section>
            )}

            {p.arch && p.arch.length > 0 && (
              <section className="project-case-panel">
                <h2>How it works</h2>
                <Arch items={p.arch} />
              </section>
            )}
          </div>
        )}

        {(p.results || p.learnings) && (
          <div className="project-case-grid">
            {p.results && (
              <section className="project-case-panel">
                <h2>Results & impact</h2>
                <p>{p.results}</p>
              </section>
            )}

            {p.learnings && (
              <section className="project-case-panel">
                <h2>Learnings & limitations</h2>
                <p>{p.learnings}</p>
              </section>
            )}
          </div>
        )}

        <div className="project-case-bottom">
          <Link href="/projects">← Back to projects</Link>
        </div>

      </main>
    </div>
  );
}
