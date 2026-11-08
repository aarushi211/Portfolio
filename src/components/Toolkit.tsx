import { toolkit } from "@/data/site";

export default function Toolkit() {
  return (
    <div className="toolkit-grid">
      {Object.entries(toolkit).map(([category, skills]) => (
        <div className="toolkit-card" key={category}>
          <h3>{category}</h3>

          <div className="toolkit-skills">
            {skills.map(([name, description]) => (
              <span
                key={name}
                className="toolkit-skill"
                title={description}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}