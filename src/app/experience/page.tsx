
import { experience } from "@/data/site";

export const metadata = {
  title: "Experience",
  description:
    "Professional experience across AI engineering, machine learning, data analytics, and distributed computing.",
};

export default function ExperiencePage() {
  return (
    <main className="wrap">
      <div className="pg experience-page">
        <div className="experience-intro">
          <span className="experience-eyebrow">
            MY JOURNEY
          </span>

          <h1 className="t">Experience</h1>

          <p>
            From classical NLP and scientific computing to
            speech AI and intelligent agents, my experience
            spans different areas of software and AI
            engineering.
          </p>

          <p>
            Here is a closer look at the problems I have
            worked on, the approaches I explored, and the
            engineering skills I developed along the way.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((item, index) => {
            const [company, ...roleParts] =
              item.title.split(" — ");

            const role = roleParts.join(" — ");

            return (
              <article
                className="experience-entry"
                key={`${item.title}-${index}`}
              >
                <span
                  className="experience-dot"
                  aria-hidden="true"
                />

                <details
                  className="experience-details"
                  open={index === 0}
                >
                  <summary className="experience-heading">
                    <div className="experience-heading-text">
                      <span className="experience-date">
                        {item.when}
                      </span>

                      <h2>{company}</h2>

                      {role && (
                        <p className="experience-role">
                          {role}
                        </p>
                      )}

                      {item.summary && (
                        <p className="experience-summary">
                          {item.summary}
                        </p>
                      )}
                    </div>


                    <span className="experience-toggle" aria-hidden="true">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>

                  </summary>

                  <div className="experience-content">
                    <h3>What I worked on</h3>

                    <ul>
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>

                    {item.technologies &&
                      item.technologies.length > 0 && (
                        <div className="experience-tech">
                          <h3>Technologies & areas</h3>

                          <div className="experience-tags">
                            {item.technologies.map((tech) => (
                              <span key={tech}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                </details>
              </article>
            );
          })}
        </div>

        <div className="experience-footer">
          <p>
            Interested in what I have built along the way?
          </p>
          <a href="/projects" className="btn pri">
            Explore my projects
          </a>
        </div>
      </div>
    </main>
  );
}
