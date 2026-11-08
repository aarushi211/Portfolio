import { interests } from "@/data/site";

export default function Beyond({
  plain,
}: {
  plain?: boolean;
}) {
  return (
    <div
      className="beyond"
      style={
        plain
          ? { border: 0, padding: 0, margin: 0 }
          : { margin: 0 }
      }
    >

      {interests.map(([title, description]) => (
        <div key={title}>
          <b>{title}</b>
          <span>{description}</span>
        </div>
      ))}
    </div>
  );
}