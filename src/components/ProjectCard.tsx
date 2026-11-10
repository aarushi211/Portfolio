
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects/types";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const caseStudyUrl = `/projects/${project.slug}`;
  const demoUrl = project.demoVideo || project.overviewVideo;

  return (
    <article className="project-gallery-card">
      <div className="project-gallery-image">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.name} logo`}
            width={140}
            height={140}
            unoptimized
            className="project-gallery-logo"
          />
        ) : (
          <div className="project-gallery-placeholder">
            <span>{project.name}</span>
          </div>
        )}
      </div>

      <div className="project-gallery-content">
        <div className="project-gallery-title">
          <h2>{project.name}</h2>
          <span aria-hidden="true">↗</span>
        </div>

        <p>{project.desc}</p>

        <div className="project-gallery-tags">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-gallery-actions">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-gallery-demo"
              aria-label={`Watch ${project.name} demo (opens in a new tab)`}
            >
              <span aria-hidden="true">▶</span>
              Watch demo
              <span aria-hidden="true"> ↗</span>
            </a>
          )}

          <Link
            href={caseStudyUrl}
            className="project-gallery-link project-gallery-stretched-link"
            aria-label={`View ${project.name} case study`}
          >
            View case study
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
