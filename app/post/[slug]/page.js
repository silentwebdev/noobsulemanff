import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import Body from "@/components/Body";
import { GuideTimer } from "@/components/GuideTimer";
import { db } from "@/lib/db";
import { PostModel } from "@/lib/models";
import { SITE } from "@/lib/site";
export const dynamic = "force-dynamic";
async function get(slug) { await db(); const p = await PostModel.findOne({ slug }).lean(); return p ? JSON.parse(JSON.stringify(p)) : null; }
export async function generateMetadata({ params }) {
  const slug = (await params).slug; const p = await get(slug);
  return p ? { title: p.title, description: p.excerpt, alternates: { canonical: `/post/${slug}` }, openGraph: { title: p.title, description: p.excerpt, type: "article", url: `/post/${slug}` } } : {};
}
export default async function Post({ params }) {
  const slug = (await params).slug; const p = await get(slug);
  if (!p) notFound();
  const ld = { "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.excerpt, datePublished: p.createdAt, dateModified: p.updatedAt, mainEntityOfPage: `${SITE.url}/post/${slug}`, author: { "@type": "Organization", name: SITE.name }, publisher: { "@type": "Organization", name: SITE.name } };
  const article = (<article className="card p-6 sm:p-10">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
    <h1 className="text-3xl font-extrabold text-accent2 sm:text-4xl">{p.title}</h1>
    <AdSlot className="my-6" />
    <Body text={p.content} />
  </article>);
  return p.content.includes("|/download]") ? <GuideTimer seconds={150}>{article}</GuideTimer> : article;
}
