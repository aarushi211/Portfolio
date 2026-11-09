"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects, categories } from "@/data/site";

export default function ProjectList() {
  const [k, setK] = useState("All");
  return (
    <>
      <div className="tabs">{categories.map((c) => <button key={c} aria-selected={c === k} onClick={() => setK(c)}>{c}</button>)}</div>
      <div className="grid">{projects.filter((p) => k === "All" || p.cats.includes(k)).map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
    </>
  );
}
