
import Photo from "@/components/Photo";
import { SITE } from "@/data/site";
import {
  awards,
  additionalRecognition,
  certifications,
  leadership,
} from "@/data/recognition";

export const metadata = {
  title: "About",
  description:
    "A little about my journey into AI, my interests, and life beyond code.",
};

const journey = [
  {
    step: "01",
    icon: "🐢",
    title: "Turtle Graphics",
    subtitle: "Where it began",
    description:
      "My first experience with programming was making a little turtle draw shapes on screen.",
  },
  {
    step: "02",
    icon: "🧠",
    title: "Machine Learning",
    subtitle: "The fascination",
    description:
      "I discovered how mathematics and data could help computers learn patterns and make predictions.",
  },
  {
    step: "03",
    icon: "💬",
    title: "NLP & LLMs",
    subtitle: "The curiosity continues",
    description:
      "My love for languages and curiosity about ChatGPT drew me toward NLP and language models.",
  },
];

const sports = [
  { icon: "🏊", title: "Swimming", detail: "Selected for states" },
  { icon: "🎾", title: "Tennis", detail: "Competitive player" },
  { icon: "🏀", title: "Basketball", detail: "Class team captain" },
];

const stories = [
  { title: "Attack on Titan", type: "Anime", icon: "⚔️" },
  { title: "Ascendance of a Bookworm", type: "Light novel", icon: "📖" },
  { title: "The Apothecary Diaries", type: "Anime & novel", icon: "🌿" },
  { title: "Naruto", type: "Anime", icon: "🍥" },
  { title: "Haikyu!!", type: "Anime", icon: "🏐" },
  { title: "MXTX novels", type: "Novels", icon: "🌸" },
];

const hobbies = [
  { icon: "🧶", title: "Crochet" },
  { icon: "🪡", title: "Embroidery" },
  { icon: "🧵", title: "Knitting" },
  { icon: "✏️", title: "Sketching" },
  { icon: "🎨", title: "Painting" },
];

export default function About() {
  return (
    <main className="wrap">
      <div className="pg visual-about">

        {/* Hero */}
        <section className="va-hero">
          <div className="va-hero-copy">
            <span className="va-eyebrow">
              BEYOND THE RESUME
            </span>

            <h1 className="t">A little about me.</h1>

            <p className="va-hello">
              Hi, I'm {SITE.name}! 👋
            </p>

            <p className="va-intro">
              CS graduate from USC, fascinated by AI,
              language, and how things work. I enjoy
              building things, questioning assumptions,
              and exploring new ideas.
            </p>

            <div className="va-meta">
              <span>📍 {SITE.location}</span>
              <span>🎓 MS in Computer Science</span>
            </div>
          </div>

          <div className="va-photo">
            <Photo
              style={{
                width: "100%",
                maxWidth: 310,
                height: 350,
              }}
            />
          </div>
        </section>

        {/* Journey */}
        <section className="va-section">
          <div className="va-section-heading">
            <span className="va-eyebrow">MY JOURNEY</span>
            <h2>From a little turtle to AI.</h2>
            <p>Three things that sparked my curiosity.</p>
          </div>

          <div className="va-journey">
            {journey.map((item) => (
              <article className="va-journey-card" key={item.step}>
                <span className="va-step">{item.step}</span>
                <div className="va-journey-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <span className="va-subtitle">{item.subtitle}</span>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

        </section>

        {/* Awards & Recognition */}
        <section className="va-section">
          <div className="va-section-heading">
            <span className="va-eyebrow">MILESTONES</span>
            <h2>A few moments worth celebrating.</h2>
            <p>
              From hackathon wins to academic recognition,
              each one represents something I learned along the way.
            </p>
          </div>

          <div className="recognition-grid">
            {awards.map((award) => (
              <article className="recognition-card" key={award.event}>
                <span className="recognition-icon">{award.icon}</span>
                <h3>{award.title}</h3>
                <strong>{award.event}</strong>
                <p>{award.detail}</p>

                {"href" in award && award.href && (
                  <a
                    href={award.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project ↗
                  </a>
                )}
              </article>
            ))}
          </div>

          <div className="recognition-additional">
            {additionalRecognition.map((item) => (
              <span key={item.event}>
                <strong>{item.title}</strong> · {item.event}
              </span>
            ))}
          </div>
        </section>



        {/* Certifications & Training */}
        <section className="va-section">
          <div className="va-section-heading">
            <span className="va-eyebrow">CONTINUOUS LEARNING</span>
            <h2>Certifications & Training.</h2>
            <p>
              Developer certifications and structured learning
              programs that strengthened my technical foundations.
            </p>
          </div>

          <div className="recognition-grid">
            {certifications.map((cert) => (
              <article
                className="recognition-card certification-card"
                key={cert.title}
              >
                <h3>{cert.title}</h3>
                <strong>{cert.issuer}</strong>

                <ul className="cert-topic-list">
                  {cert.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>

                {cert.href && (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify credential ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>


        {/* Leadership */}
        <section className="va-section">
          <div className="va-section-heading">
            <span className="va-eyebrow">LEADERSHIP & COMMUNITY</span>
            <h2>Growing beyond the code.</h2>
            <p>
              Leadership, collaboration, and community involvement
              have been an important part of my journey.
            </p>
          </div>

          <div className="recognition-grid">
            {leadership.map((entry) => (
              <article
                className="recognition-card"
                key={entry.organization}
              >
                <h3>{entry.organization}</h3>
                <p>{entry.period}</p>

                <div className="leadership-timeline">
                  {entry.roles.map((role) => (
                    <div className="leadership-role" key={role.title}>
                      <strong>{role.title}</strong>
                      <span>{role.period}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>



        {/* Sports */}
        <section className="va-section">
          <div className="va-section-heading">
            <span className="va-eyebrow">BEYOND THE CODE</span>
            <h2>I'd rather play than watch.</h2>
            <p>Sports have always been part of my life.</p>
          </div>

          <div className="va-sports">
            {sports.map((sport) => (
              <div className="va-sport" key={sport.title}>
                <span className="va-sport-icon">{sport.icon}</span>
                <strong>{sport.title}</strong>
                <small>{sport.detail}</small>
              </div>
            ))}
          </div>

          <p className="va-small-note">
            Also always up for badminton, volleyball,
            cricket, soccer, or trying something new.
          </p>
        </section>

        {/* Stories */}
        <section className="va-section">
          <div className="va-section-heading">
            <span className="va-eyebrow">FICTIONAL WORLDS</span>
            <h2>Usually lost in a story.</h2>
            <p>Some anime and novels I keep coming back to.</p>
          </div>

          <div className="va-story-grid">
            {stories.map((story) => (
              <div className="va-story" key={story.title}>
                <span className="va-story-icon">{story.icon}</span>
                <strong>{story.title}</strong>
                <small>{story.type}</small>
              </div>
            ))}
          </div>
        </section>

        {/* Creative hobbies */}
        <section className="va-section va-last">
          <div className="va-section-heading">
            <span className="va-eyebrow">ALWAYS EXPERIMENTING</span>
            <h2>A little bit of everything.</h2>
            <p>My creative side likes exploring new hobbies.</p>
          </div>

          <div className="va-hobbies">
            {hobbies.map((hobby) => (
              <div className="va-hobby" key={hobby.title}>
                <span>{hobby.icon}</span>
                <strong>{hobby.title}</strong>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
