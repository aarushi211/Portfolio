
import Image from "next/image";
import { articles } from "@/data/site";

export const metadata = { title: "Writing" };

export default function Writing() {
  return (
    <div className="wrap">
      <div className="pg">
        <h2 className="t">Writing</h2>

        <p style={{ marginBottom: 28 }}>
          Notes, learnings, and explorations in AI,
          systems, and product building.
        </p>

        <div className="articles-grid">
          {articles.map((a) => (
            <article className="card article-card" key={a.title}>
              <a
                href={a.href}
                className="article-image-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {a.image ? (
                  <Image
                    src={a.image}
                    alt={a.title}
                    width={640}
                    height={360}
                    className="article-image"
                  />
                ) : (
                  <div className="shot">
                    {a.meta.split(" · ")[1]}
                  </div>
                )}
              </a>

              <div className="article-content">
                <h3>
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {a.title}
                  </a>
                </h3>

                <p>{a.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
