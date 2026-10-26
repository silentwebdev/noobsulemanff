"use client";
import { useEffect, useState } from "react";
import AdSlot from "./AdSlot";
import { getLink } from "@/app/download/actions";
export default function DownloadGate({ seconds = 15 }) {
  const [left, setLeft] = useState(seconds);
  const [url, setUrl] = useState(null);
  const [read, setRead] = useState(null);
  useEffect(() => { try { setRead(sessionStorage.getItem("guideRead") === "1"); } catch { setRead(false); } }, []);
  useEffect(() => { if (!read) return; if (left <= 0) { getLink().then(setUrl); return; } const t = setTimeout(() => setLeft(left - 1), 1000); return () => clearTimeout(t); }, [left, read]);
  if (read === null) return null;
  if (!read) return (<div className="my-10 text-center"><p className="text-xl font-bold text-accent2">Please read the setup guide first.</p><p className="mt-2 text-muted">The download unlocks after you finish reading it.</p><a href="/post/free-fire-proxy-server-download-setup-guide" className="mt-5 btn mx-auto mt-5 max-w-xs">Go to the Guide</a></div>);
  return (<div className="text-center">
    <AdSlot className="my-6" />
    {left > 0 ? <p className="my-8 text-xl text-ink/80">Great, you are done reading! Your link will be ready in <b className="text-accent">{left}</b> seconds...</p>
      : url === null ? <p className="my-8 text-muted">Getting your link...</p>
      : url ? <a href={url} rel="noopener noreferrer" className="btn mx-auto my-8 max-w-xs text-lg">⬇ Download Now</a>
      : <p className="my-8 text-red-400">The link has not been set yet.</p>}
    <AdSlot kind="banner" className="my-6" />
  </div>);
}
