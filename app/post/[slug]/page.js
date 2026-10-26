import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import Body from "@/components/Body";
import { GuideTimer } from "@/components/GuideTimer";
import { db } from "@/lib/db";
import { PostModel } from "@/lib/models";
export const dynamic = "force-dynamic";
async function get(slug) { await db(); const p = await PostModel.findOne({ slug }).lean(); return p ? JSON.parse(JSON.stringify(p)) : null; }
export async function generateMetadata({ params }) { const p = await get((await params).slug); return p ? { title: p.title, description: p.excerpt } : {}; }
export default async function Post({ params }) {
  const p = await get((await params).slug);
  if (!p) notFound();
  const article = (<article className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100 sm:p-10">
    <h1 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">{p.title}</h1>
    <AdSlot className="my-6" />
    <Body text={p.content} />
  </article>);
  return p.content.includes("|/download]") ? <GuideTimer seconds={150}>{article}</GuideTimer> : article;
}
