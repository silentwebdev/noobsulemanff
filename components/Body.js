import Link from "next/link";
import AdSlot from "./AdSlot";
const cls = "my-6 block rounded-full px-8 py-4 text-center text-lg font-extrabold text-black";
function Btn({ label, url, color }) {
  const c = `${cls} ${color === "green" ? "bg-green-500" : "bg-orange-500"}`;
  return url.startsWith("/") ? <Link href={url} className={c}>{label}</Link>
    : <a href={url} target="_blank" rel="noopener noreferrer nofollow" className={c}>{label}</a>;
}
export default function Body({ text = "" }) {
  return text.split(/\n\s*\n/).map((b, i) => {
    b = b.trim();
    if (b === "[ad]") return <AdSlot key={i} className="my-8" />;
    const m = b.match(/^\[button(?::(green))?:(.+?)\|(.+?)\]$/);
    if (m) return <Btn key={i} color={m[1]} label={m[2]} url={m[3]} />;
    if (b.startsWith("## ")) return <h2 key={i} className="mt-10 mb-2 text-2xl font-bold text-orange-400">{b.slice(3)}</h2>;
    if (b.startsWith("> ")) return <p key={i} className="my-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-400/10 p-4 leading-8 text-yellow-100">{b.slice(2)}</p>;
    if (b.split("\n").every((l) => l.startsWith("- "))) return <ul key={i} className="my-3 list-disc space-y-1 pl-6 text-gray-300">{b.split("\n").map((l, j) => <li key={j}>{l.slice(2)}</li>)}</ul>;
    return <p key={i} className="my-3 leading-8 text-gray-300">{b}</p>;
  });
}
