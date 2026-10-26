import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { db } from "@/lib/db";
import { PostModel } from "@/lib/models";
export const dynamic = "force-dynamic";
async function getPosts() { try { await db(); return JSON.parse(JSON.stringify(await PostModel.find().sort({ createdAt: -1 }).limit(20).lean())); } catch { return []; } }
export default async function Home() {
  const posts = await getPosts();
  return (<>
    <section className="rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-center text-white shadow-2xl">
      <h1 className="text-3xl font-extrabold sm:text-5xl">Free Fire Proxy Server</h1>
      <p className="mx-auto mt-3 max-w-xl text-blue-100">What a proxy server is, how to set it up step by step, and how to fix common problems.</p>
    </section>
    <AdSlot className="my-8" />
    <section className="rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
      <h2 className="text-2xl font-bold text-blue-800">What is a Proxy Server?</h2>
      <p className="mt-3 leading-8 text-gray-700">A proxy server is a middle route between your Android phone and the game server. Instead of connecting directly, your connection passes through this route, which can change how your connection behaves. Read our complete guide below for the full setup process.</p>
    </section>
    <h2 className="mt-10 mb-4 text-2xl font-bold text-blue-800">Latest Guides</h2>
    <div className="grid gap-5 sm:grid-cols-2">
      {posts.length === 0 && <p className="text-gray-500">No guides yet. Run the seed script or add one from /admin.</p>}
      {posts.map((p) => (
        <Link key={p._id} href={`/post/${p.slug}`} className="rounded-xl bg-white p-5 shadow-lg ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-2xl">
          <h3 className="font-bold text-blue-800">{p.title}</h3><p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
          <span className="mt-3 inline-block text-sm font-bold text-orange-500">Read guide →</span>
        </Link>))}
    </div>
    <AdSlot className="my-8" />
  </>);
}
