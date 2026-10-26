import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { db } from "@/lib/db";
import { PostModel } from "@/lib/models";
export const dynamic = "force-dynamic";
async function getPosts() { try { await db(); return JSON.parse(JSON.stringify(await PostModel.find().sort({ createdAt: -1 }).limit(20).lean())); } catch { return []; } }
export default async function Home() {
  const posts = await getPosts();
  return (<>
    <section className="rounded-2xl bg-gradient-to-br from-orange-600/30 to-purple-700/30 p-8 text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">Free Fire Proxy Server</h1>
      <p className="mx-auto mt-3 max-w-xl text-gray-300">Proxy server kya hai, kaise download aur install karna hai, aur masail ka hal, sab kuch ek jagah.</p>
      <Link href="#download" className="mt-5 inline-block rounded-full bg-orange-500 px-6 py-2 font-bold text-black">Neeche Download Link ➜</Link>
    </section>
    <AdSlot className="my-6" />
    <section className="rounded-xl bg-white/5 p-6">
      <h2 className="text-2xl font-bold text-orange-400">Proxy Server kya hai?</h2>
      <p className="mt-3 leading-8 text-gray-300">Proxy server aap ke phone aur game server ke darmiyan ek beech ka raasta hota hai. Is se connection ka route badal jata hai, jis se kuch users ko ping ya connectivity mein farq mehsoos hota hai. Neeche tamam guides mein step-by-step tareeqa maujood hai.</p>
    </section>
    <h2 className="mt-10 mb-4 text-2xl font-bold">Latest Guides</h2>
    <div className="grid gap-4 sm:grid-cols-2">
      {posts.length === 0 && <p className="text-gray-500">Abhi koi guide nahi. Admin panel se add karein ya seed chalayen.</p>}
      {posts.map((p) => (
        <Link key={p._id} href={`/post/${p.slug}`} className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-orange-500">
          <h3 className="font-bold">{p.title}</h3><p className="mt-2 text-sm text-gray-400">{p.excerpt}</p>
        </Link>))}
    </div>
    <AdSlot className="my-8" />
    <section id="download" className="rounded-2xl border border-orange-500/40 bg-orange-500/10 p-8 text-center">
      <h2 className="text-2xl font-bold">Proxy Server Download</h2>
      <p className="mt-2 text-gray-300">Guide parh lene ke baad download page par jayen.</p>
      <Link href="/download" className="mt-4 inline-block rounded-full bg-orange-500 px-8 py-3 font-extrabold text-black">Download Page ➜</Link>
    </section>
  </>);
}
