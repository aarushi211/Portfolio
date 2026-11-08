import { interests } from "@/data/site";
export default function Beyond({ plain }: { plain?: boolean }) {
  return (
    <div className="beyond" style={plain ? { border: 0, padding: 0, margin: 0 } : { margin: 0 }}>
      <h3>Beyond the code</h3>
      {interests.map(([t, d]) => <div key={t}><b>{t}</b><span>{d}</span></div>)}
    </div>
  );
}
