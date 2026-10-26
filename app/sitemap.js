import { db } from "@/lib/db";
import { PostModel } from "@/lib/models";
import { SITE } from "@/lib/site";
export const dynamic = "force-dynamic";
export default async function sitemap() {
  const pages = ["", "/about", "/contact", "/privacy-policy", "/terms", "/disclaimer"].map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.4 }));
  let posts = [];
  try { await db(); posts = (await PostModel.find().select("slug updatedAt").lean()).map((p) => ({ url: `${SITE.url}/post/${p.slug}`, lastModified: p.updatedAt, changeFrequency: "weekly", priority: 0.9 })); } catch {}
  return [...pages, ...posts];
}
