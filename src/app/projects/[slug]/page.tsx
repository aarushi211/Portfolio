
import Image from "next/image";
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
  const project = projects.find((p) => p.slug === slug);

  return {
    title: project?.name ?? "Project",
    description: project?.desc ?? "",
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) notFound();

  const project = projects[index];

  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1
    ? projects[index + 1]
    : null;

  const hasVideo = Boolean(
    project.demoVideo || project.overviewVideo
  );

  const hasArchitecture = Boolean(
    project.architectureImage || project.arch?.length
  );

  const hasEngineeringDetails = Boolean(
    project.decisions?.length ||
    project.validation ||
    project.results ||
    project.limitations ||
    project.learnings
  );

  return (
    <div className="wrap">
      <main className="project-case">

        {/* HERO */}
        <div className="project-case-hero">
          <Link href="/projects" className="project-back">
            ← All projects
          </Link>

          <h1>{project.name}</h1>
          <p className="project-case-description">
            {project.desc}
          </p>

          <div className="tags project-case-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          {(project.github || project.live) && (
            <div className="project-case-actions">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Source code ↗
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn pri"
                >
                  Live application ↗
                </a>
              )}
            </div>
          )}
        </div>

        {/* VIDEO */}
        {hasVideo && (
          <section className="project-case-block">
            <div className="project-case-heading">
              <div>
                <span className="project-case-eyebrow">
                  PRODUCT WALKTHROUGH
                </span>
                <h2>See it in action</h2>
              </div>
            </div>

            <div className="project-case-media">
              <VideoTabs
                demo={project.demoVideo}
                overview={project.overviewVideo}
              />
            </div>
          </section>
        )}

        {/* PROBLEM / CONTRIBUTION */}
        {(project.problem || project.contribution) && (
          <div className="project-case-summary">
            {project.problem && (
              <section className="project-case-summary-card">
                <span className="project-case-card-label">
                  01 / THE PROBLEM
                </span>
                <h2>What needed solving?</h2>
                <p>{project.problem}</p>
              </section>
            )}

            {project.contribution && (
              <section className="project-case-summary-card">
                <span className="project-case-card-label">
                  02 / MY CONTRIBUTION
                </span>
                <h2>What I built</h2>
                <p>{project.contribution}</p>
              </section>
            )}
          </div>
        )}

        {/* OPTIONAL OVERVIEW */}
        {project.overview && (
          <section className="project-case-block">
            <div className="project-case-heading">
              <div>
                <span className="project-case-eyebrow">
                  PROJECT CONTEXT
                </span>
                <h2>Overview</h2>
              </div>
            </div>
            <p className="project-case-prose">
              {project.overview}
            </p>
          </section>
        )}

        {/* ARCHITECTURE */}
        {hasArchitecture && (
          <section className="project-case-block">
            <div className="project-case-heading">
              <div>
                <span className="project-case-eyebrow">
                  UNDER THE HOOD
                </span>
                <h2>System architecture</h2>
              </div>
            </div>

            <div className="project-case-architecture">
              {project.architectureImage && (
                <div className="project-case-diagram">
                  <Image
                    src={project.architectureImage}
                    alt={`${project.name} architecture diagram`}
                    width={1400}
                    height={800}
                    className="project-case-diagram-image"
                  />
                </div>
              )}

              {project.arch && project.arch.length > 0 && (
                <div className="project-case-architecture-details">
                  <h3>Explore the workflow</h3>
                  <Arch items={project.arch} />
                </div>
              )}
            </div>
          </section>
        )}

        {/* EXPANDABLE TECHNICAL DETAILS */}
        {hasEngineeringDetails && (
          <section className="project-case-block">
            <div className="project-case-heading">
              <div>
                <span className="project-case-eyebrow">
                  ENGINEERING DEEP DIVE
                </span>
                <h2>Decisions, validation & lessons</h2>
              </div>
            </div>

            <div className="project-case-accordions">

              {project.decisions &&
                project.decisions.length > 0 && (
                  <details className="project-case-accordion">
                    <summary>
                      Engineering decisions & tradeoffs
                      <span className="project-case-chevron">+</span>
                    </summary>

                    <div className="project-case-accordion-content">
                      {project.decisions.map((decision, i) => (
                        <div
                          className="project-case-decision"
                          key={i}
                        >
                          <h3>{decision.title}</h3>
                          <p>{decision.rationale}</p>

                          {decision.tradeoff && (
                            <p>
                              <strong>Tradeoff:</strong>{" "}
                              {decision.tradeoff}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </details>
                )}

              {(project.validation || project.results) && (
                <details className="project-case-accordion">
                  <summary>
                    Validation & results
                    <span className="project-case-chevron">+</span>
                  </summary>

                  <div className="project-case-accordion-content">
                    {project.validation && (
                      <p>{project.validation}</p>
                    )}
                    {project.results && (
                      <p>{project.results}</p>
                    )}
                  </div>
                </details>
              )}

              {(project.limitations || project.learnings) && (
                <details className="project-case-accordion">
                  <summary>
                    Limitations & learnings
                    <span className="project-case-chevron">+</span>
                  </summary>

                  <div className="project-case-accordion-content">
                    {project.limitations && (
                      <p>{project.limitations}</p>
                    )}
                    {project.learnings && (
                      <p>{project.learnings}</p>
                    )}
                  </div>
                </details>
              )}

            </div>
          </section>
        )}

        {/* PROJECT NAVIGATION */}
        <nav
          className="project-case-navigation"
          aria-label="Project navigation"
        >
          {previous ? (
            <Link href={`/projects/${previous.slug}`}>
              <span>← Previous project</span>
              <strong>{previous.name}</strong>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link href={`/projects/${next.slug}`}>
              <span>Next project →</span>
              <strong>{next.name}</strong>
            </Link>
          ) : (
            <Link href="/projects">
              <span>Back to</span>
              <strong>All projects →</strong>
            </Link>
          )}
        </nav>

      </main>
    </div>
  );
}
