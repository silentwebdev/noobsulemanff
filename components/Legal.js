import { SITE } from "@/lib/site";
export default function Legal({ title, children }) {
  return <article className="card p-6 sm:p-10"><h1 className="text-3xl font-extrabold text-accent2">{title}</h1><p className="mt-1 text-xs text-muted">Last updated: {SITE.updated}</p><div className="legal mt-4">{children}</div></article>;
}
