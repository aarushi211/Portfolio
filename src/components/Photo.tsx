import { SITE } from "@/data/site";
export default function Photo({ style }: { style?: React.CSSProperties }) {
  return <div className="photo" style={style} role="img" aria-label={`Photo of ${SITE.name}`}>{SITE.photo ? <img src={SITE.photo} alt={SITE.name} /> : SITE.name[0]}</div>;
}
