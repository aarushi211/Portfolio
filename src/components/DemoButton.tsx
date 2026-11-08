"use client";
import { useRef } from "react";
import Video from "./Video";

export default function DemoButton({ name, length, video }: { name: string; length: string; video?: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button className="demo" onClick={() => ref.current?.showModal()}>▶ Demo · {length}</button>
      <dialog ref={ref}>
        <h3>{name} demo</h3>
        <Video url={video} label="Demo" />
        <button className="btn" onClick={() => ref.current?.close()}>Close</button>
      </dialog>
    </>
  );
}
