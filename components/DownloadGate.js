"use client";
import { useEffect, useState } from "react";
import AdSlot from "./AdSlot";
import { getLink } from "@/app/download/actions";
export default function DownloadGate({ seconds = 15 }) {
  const [left, setLeft] = useState(seconds);
  const [url, setUrl] = useState(null);
  useEffect(() => { if (left <= 0) { getLink().then(setUrl); return; } const t = setTimeout(() => setLeft(left - 1), 1000); return () => clearTimeout(t); }, [left]);
  return (<div className="text-center">
    <AdSlot className="my-6" />
    {left > 0 ? <p className="my-8 text-xl text-gray-700">Your link will be ready in <b className="text-orange-500">{left}</b> seconds...</p>
      : url === null ? <p className="my-8 text-gray-600">Getting your link...</p>
      : url ? <a href={url} rel="noopener noreferrer" className="my-8 inline-block rounded-full bg-orange-500 px-10 py-4 text-lg font-extrabold text-white shadow-xl">⬇ Download Now</a>
      : <p className="my-8 text-red-500">The link has not been set yet.</p>}
    <AdSlot className="my-6" />
  </div>);
}
