"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Link from "next/link";
const Ctx = createContext({ left: 0, open: false, setOpen: () => {} });
const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
export function GuideTimer({ seconds = 150, children }) {
  const [left, setLeft] = useState(seconds);
  const [open, setOpen] = useState(false);
  const done = left <= 0;
  useEffect(() => { try { if (sessionStorage.getItem("guideRead") === "1") setLeft(0); } catch {} }, []);
  useEffect(() => {
    if (done) { try { sessionStorage.setItem("guideRead", "1"); } catch {} return; }
    const t = setInterval(() => { if (!document.hidden) setLeft((l) => Math.max(0, l - 1)); }, 1000);
    return () => clearInterval(t);
  }, [done]);
  const pct = Math.round(((seconds - left) / seconds) * 100);
  return (
    <Ctx.Provider value={{ left, open, setOpen }}>
      {children}
      <div className={`fixed inset-x-0 bottom-0 z-20 px-4 py-3 text-center text-sm font-bold text-white shadow-[0_-4px_14px_rgba(0,0,0,0.25)] ${done ? "bg-good" : "bg-surface border-t border-line"}`}>
        {done ? "✅ You can download now! Scroll to the end of the guide." : `⏳ Please read the guide carefully. Download unlocks in ${fmt(left)}`}
        {!done && <div className="mx-auto mt-2 h-1.5 max-w-md overflow-hidden rounded-full bg-bg"><div className="h-full bg-accent transition-all" style={{ width: `${pct}%` }} /></div>}
      </div>
      {open && !done && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/60 p-4" onClick={() => setOpen(false)}>
          <div className="max-w-sm card p-6 text-center" onClick={(e) => e.stopPropagation()}>
            <div className="text-4xl">⚠️</div>
            <h3 className="mt-2 text-xl font-extrabold text-accent2">Wait! Read the guide first</h3>
            <p className="mt-3 leading-7 text-ink/80">If you skip the steps, you may make mistakes that cause errors, data loss or other problems. Please read the full guide first.</p>
            <p className="mt-3 font-bold text-accent">Time left: {fmt(left)}</p>
            <button onClick={() => setOpen(false)} className="mt-5 rounded-full btn">OK, I will read</button>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
export function GuideDownload({ label }) {
  const { left, setOpen } = useContext(Ctx);
  const cls = "btn my-8 w-full text-lg";
  return left <= 0
    ? <Link href="/download" className={`${cls}`}>{label}</Link>
    : <button onClick={() => setOpen(true)} className={`${cls} btn-off`}>🔒 {label}</button>;
}
