"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/data/site";

const LINKS = [["/", "Home"], ["/projects", "Projects"], ["/experience", "Experience"], ["/writing", "Writing"], ["/about", "About"]];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const on = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <header><div className="wrap">
      <Link className="logo" href="/">{SITE.name}<span>.</span></Link>
      <nav className={open ? "open" : ""} aria-label="Main">
        {LINKS.map(([h, t]) => <Link key={h} href={h} className={on(h) ? "on" : ""} onClick={() => setOpen(false)}>{t}</Link>)}
      </nav>
      <a className="rlink" href={SITE.resume || "#"}>Resume ↗</a>
      <button className="menu" aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>
    </div></header>
  );
}
