import Photo from "@/components/Photo";
import Beyond from "@/components/Beyond";
import { SITE } from "@/data/site";
export const metadata = { title: "About" };
export default function About() {
  return (
    <div className="wrap"><div className="pg cols">
      <div>
        <h2 className="t" style={{ marginBottom: 16 }}>About me</h2>
        <p>I’m {SITE.name}, a computer science graduate from USC, interested in building reliable and useful AI systems. I enjoy working across the stack — from model applications and agentic workflows to evaluation and real-world testing.</p>
        <p>📍 {SITE.location} · 🎓 MS in CS, USC · 💼 Open to new grad and early-career roles</p>
        <div style={{ marginTop: 28 }}><Beyond plain /></div>
      </div>
      <Photo style={{ width: "100%", maxWidth: 300, height: 340 }} />
    </div></div>
  );
}
