"use client";
import { useEffect, useState } from "react";
import AdSlot from "./AdSlot";
import { getLink } from "@/app/download/actions";
export default function DownloadGate({ seconds = 15 }) {
  const [left, setLeft] = useState(seconds);
  const [url, setUrl] = useState(null);
  useEffect(() => { if (left <= 0) { getLink().then(setUrl); return; } const t = setTimeout(() => setLeft(left - 1), 1000); return () => clearTimeout(t); }, [left]);
  return (<div className="text-center">
    <AdSlot className="my-4" />
    {left > 0 ? <p className="my-6 text-xl">Link <b className="text-orange-400">{left}</b> second mein ready hoga...</p>
      : url === null ? <p className="my-6">Link la rahe hain...</p>
      : url ? <a href={url} rel="noopener noreferrer" className="my-6 inline-block rounded-full bg-green-500 px-10 py-4 text-lg font-extrabold text-black">⬇ Download Karein</a>
      : <p className="my-6 text-red-400">Link abhi set nahi hua.</p>}
    <AdSlot className="my-4" />
  </div>);
}
