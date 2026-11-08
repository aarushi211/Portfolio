"use client";
import { useState } from "react";
import Video from "./Video";

export function VideoTabs({ demo, overview }: { demo?: string; overview?: string }) {
  const [t, setT] = useState<"Product demo" | "Technical overview">("Product demo");
  return (
    <>
      <div className="vids">
        {(["Product demo", "Technical overview"] as const).map((x) => <button key={x} className={x === t ? "btn pri" : "btn"} onClick={() => setT(x)}>{x}</button>)}
      </div>
      <Video url={t === "Product demo" ? demo : overview} label={t} />
    </>
  );
}

export function Arch({ items }: { items: [string, string][] }) {
  const [i, setI] = useState(0);
  return (
    <>
      <div className="arch">{items.map(([n], k) => <button key={n} aria-pressed={k === i} onClick={() => setI(k)}>{n}</button>)}</div>
      <p>{items[i][1]}</p>
    </>
  );
}
