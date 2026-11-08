"use client";
import { useState } from "react";
import { toolkit } from "@/data/site";

export default function Toolkit() {
  const keys = Object.keys(toolkit);
  const [k, setK] = useState(keys[0]);
  return (
    <>
      <div className="tabs" role="tablist">{keys.map((x) => <button key={x} role="tab" aria-selected={x === k} onClick={() => setK(x)}>{x}</button>)}</div>
      <div className="tools">{toolkit[k].map(([n]) => <span key={n}>{n}</span>)}</div>
      <p className="used">Used in: {toolkit[k].map(([n, u]) => `${n} (${u})`).join(", ")}</p>
    </>
  );
}
