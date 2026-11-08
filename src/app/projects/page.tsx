import ProjectList from "@/components/ProjectList";
export const metadata = { title: "Projects" };
export default function Projects() {
  return (
    <div className="wrap"><div className="pg">
      <h2 className="t">Projects</h2>
      <p>A collection of AI and software systems I’ve built, from prototypes to deployable applications.</p>
      <ProjectList />
    </div></div>
  );
}
