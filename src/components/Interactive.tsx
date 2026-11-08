"use client";
import { useState } from "react";
import Video from "./Video";


export function VideoTabs({
  demo,
  overview,
}: {
  demo?: string;
  overview?: string;
}) {
  const [t, setT] = useState<
    "Product demo" | "Technical overview"
  >("Product demo");

  const active =
    t === "Technical overview" && overview
      ? overview
      : demo || overview;

  return (
    <>
      {demo && overview && (
        <div className="vids">
          <button
            className={t === "Product demo" ? "btn pri" : "btn"}
            onClick={() => setT("Product demo")}
          >
            Product demo
          </button>

          <button
            className={
              t === "Technical overview" ? "btn pri" : "btn"
            }
            onClick={() => setT("Technical overview")}
          >
            Technical overview
          </button>
        </div>
      )}

      <Video
        url={active}
        label={
          !demo
            ? "Technical overview"
            : t
        }
      />
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
