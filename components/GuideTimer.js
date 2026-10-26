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
      <div className={`fixed inset-x-0 bottom-0 z-20 px-4 py-3 text-center text-sm font-bold text-white shadow-[0_-4px_14px_rgba(0,0,0,0.25)] ${done ? "bg-green-600" : "bg-blue-800"}`}>
        {done ? "✅ You can download now! Scroll to the end of the guide." : `⏳ Please read the guide carefully. Download unlocks in ${fmt(left)}`}
        {!done && <div className="mx-auto mt-2 h-1.5 max-w-md overflow-hidden rounded-full bg-blue-950"><div className="h-full bg-orange-500 transition-all" style={{ width: `${pct}%` }} /></div>}
      </div>
      {open && !done && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/60 p-4" onClick={() => setOpen(false)}>
          <div className="max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-4xl">⚠️</div>
            <h3 className="mt-2 text-xl font-extrabold text-blue-900">Wait! Read the guide first</h3>
            <p className="mt-3 leading-7 text-gray-700">If you skip the steps, you may make mistakes that cause errors, data loss or other problems. Please read the full guide first.</p>
            <p className="mt-3 font-bold text-orange-500">Time left: {fmt(left)}</p>
            <button onClick={() => setOpen(false)} className="mt-5 rounded-full bg-orange-500 px-8 py-3 font-bold text-white shadow-lg">OK, I will read</button>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
export function GuideDownload({ label }) {
  const { left, setOpen } = useContext(Ctx);
  const cls = "my-8 block w-full rounded-full px-8 py-4 text-center text-lg font-extrabold text-white shadow-xl";
  return left <= 0
    ? <Link href="/download" className={`${cls} bg-orange-500`}>{label}</Link>
    : <button onClick={() => setOpen(true)} className={`${cls} bg-gray-400`}>🔒 {label}</button>;
}
