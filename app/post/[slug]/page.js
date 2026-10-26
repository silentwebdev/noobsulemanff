import { notFound } from "next/navigation";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Body from "@/components/Body";
import { db } from "@/lib/db";
import { PostModel } from "@/lib/models";
export const dynamic = "force-dynamic";
async function get(slug) { await db(); const p = await PostModel.findOne({ slug }).lean(); return p ? JSON.parse(JSON.stringify(p)) : null; }
export async function generateMetadata({ params }) { const p = await get((await params).slug); return p ? { title: p.title, description: p.excerpt } : {}; }
export default async function Post({ params }) {
  const p = await get((await params).slug);
  if (!p) notFound();
  return (<article>
    <h1 className="text-3xl font-extrabold sm:text-4xl">{p.title}</h1>
    <AdSlot className="my-5" />
    <Body text={p.content} />
    <AdSlot className="my-6" />
    <Link href="/download" className="inline-block rounded-full bg-orange-500 px-8 py-3 font-extrabold text-black">Download Page ➜</Link>
  </article>);
}
