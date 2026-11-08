
import { projects } from "@/data/site";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="wrap projects-gallery-page">
      <div className="projects-gallery-header">
        <span className="project-case-eyebrow">
          SELECTED WORK
        </span>

        <h1>Projects</h1>

        <p>
          AI systems, developer tools, and applied machine
          learning — from prototypes to deployed applications.
        </p>
      </div>

      <div className="projects-gallery-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </main>
  );
}
