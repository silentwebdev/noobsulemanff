import Link from "next/link";
import AdSlot from "./AdSlot";
import { GuideDownload } from "./GuideTimer";
function Btn({ label, url, color }) {
  if (url === "/download") return <GuideDownload label={label} />;
  const c = `btn my-8 ${color === "blue" ? "btn-alt" : ""}`;
  return url.startsWith("/") ? <Link href={url} className={c}>{label}</Link>
    : <a href={url} target="_blank" rel="noopener noreferrer nofollow" className={c}>{label}</a>;
}
export default function Body({ text = "" }) {
  let ads = 0;
  return text.split(/\n\s*\n/).map((b, i) => {
    b = b.trim();
    if (/^\[ad(:banner|:native)?\]$/.test(b)) { const k = b.includes("banner") ? "banner" : b.includes("native") ? "native" : (ads++ % 2 ? "banner" : "native"); return <AdSlot key={i} kind={k} className="my-8" />; }
    const m = b.match(/^\[button(?::(blue))?:(.+?)\|(.+?)\]$/);
    if (m) return <Btn key={i} color={m[1]} label={m[2]} url={m[3]} />;
    if (b.startsWith("## ")) return <h2 key={i} className="mt-10 mb-2 border-l-4 border-accent pl-3 text-2xl font-bold text-accent2">{b.slice(3)}</h2>;
    if (b.startsWith("> ")) return <p key={i} className="my-5 rounded-lg border-l-4 border-accent bg-accent/10 p-4 leading-8 text-ink">{b.slice(2)}</p>;
    if (b.split("\n").every((l) => l.startsWith("- "))) return <ul key={i} className="my-3 list-disc space-y-1 pl-6 text-ink/80">{b.split("\n").map((l, j) => <li key={j}>{l.slice(2)}</li>)}</ul>;
    return <p key={i} className="my-3 leading-8 text-ink/80">{b}</p>;
  });
}
