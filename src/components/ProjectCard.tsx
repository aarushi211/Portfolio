
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects/types";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-gallery-card"
      aria-label={`View ${project.name} case study`}
    >
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

        <span className="project-gallery-link">
          View case study <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
