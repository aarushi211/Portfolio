import { articles } from "@/data/site";
export const metadata = { title: "Writing" };
export default function Writing() {
  return (
    <div className="wrap"><div className="pg">
      <h2 className="t">Writing</h2>
      <p style={{ marginBottom: 28 }}>Notes, learnings, and explorations in AI, systems, and product building.</p>
      <div className="grid">{articles.map((a) => (
        <article className="card" key={a.title}><div className="shot">{a.meta.split(" · ")[1]}</div><h3><a href={a.href}>{a.title}</a></h3><p>{a.meta}</p></article>
      ))}</div>
    </div></div>
  );
}
