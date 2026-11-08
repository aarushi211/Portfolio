import { experience } from "@/data/site";
export const metadata = { title: "Experience" };
export default function Experience() {
  return (
    <div className="wrap"><div className="pg tl">
      <h2 className="t">Experience</h2>
      <p style={{ marginBottom: 28 }}>My work and hands-on experience building and testing AI systems in real-world settings.</p>
      {experience.map((e) => (
        <div className="card" key={e.title}><small>{e.when}</small><h3>{e.title}</h3><ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul></div>
      ))}
    </div></div>
  );
}
