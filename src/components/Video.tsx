export default function Video({ url, label }: { url?: string; label: string }) {
  return <div className="vid">{url ? <iframe src={url} title={label} allowFullScreen /> : `${label} video goes here.`}</div>;
}
