import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { db } from "@/lib/db";
import { PostModel } from "@/lib/models";
export const dynamic = "force-dynamic";
async function getPosts() { try { await db(); return JSON.parse(JSON.stringify(await PostModel.find().sort({ createdAt: -1 }).limit(20).lean())); } catch { return []; } }
export default async function Home() {
  const posts = await getPosts();
  return (<>
    <section className="card p-8 text-center sm:p-12">
      <h1 className="text-3xl font-extrabold sm:text-5xl">Free Fire <span className="text-accent">Proxy Server</span></h1>
      <p className="mx-auto mt-3 max-w-xl text-muted">What a proxy server is, how to set it up step by step, and how to fix common problems.</p>
    </section>
    <AdSlot className="my-8" />
    <section className="card p-6">
      <h2 className="text-2xl font-bold text-accent2">What is a Proxy Server?</h2>
      <p className="mt-3 leading-8 text-ink/80">A proxy server is a middle route between your Android phone and the game server. Instead of connecting directly, your connection passes through this route, which can change how your connection behaves. Read our complete guide below for the full setup process.</p>
    </section>
    <h2 className="mt-10 mb-4 text-2xl font-bold">Latest Guides</h2>
    <div className="grid gap-5 sm:grid-cols-2">
      {posts.length === 0 && <p className="text-muted">No guides yet.</p>}
      {posts.map((p) => (
        <Link key={p._id} href={`/post/${p.slug}`} className="card p-5 transition hover:-translate-y-1 hover:border-accent">
          <h3 className="font-bold text-accent2">{p.title}</h3><p className="mt-2 text-sm text-muted">{p.excerpt}</p>
          <span className="mt-3 inline-block text-sm font-bold text-accent">Read guide →</span>
        </Link>))}
    </div>
    <AdSlot kind="banner" className="my-8" />
  </>);
}
