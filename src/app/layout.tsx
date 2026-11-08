import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: { default: `${SITE.name} · AI Engineer`, template: `%s · ${SITE.name}` },
  description: "AI engineer building LLM applications, agents, retrieval and evaluation systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:wght@400;500;600&family=Inter:wght@400;500&display=swap" /></head>
      <body>
        <Header />
        <main>{children}</main>
        <footer><div className="wrap">
          <span>Want to work together? <a href={`mailto:${SITE.email}`} style={{ color: "var(--cy)" }}>{SITE.email}</a></span>
          <span><a href={SITE.github || "#"}>GitHub</a> · <a href={SITE.linkedin || "#"}>LinkedIn</a> · <a href={SITE.resume || "#"}>Resume</a></span>
        </div></footer>
      </body>
    </html>
  );
}
