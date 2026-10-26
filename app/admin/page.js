import { isAdmin } from "@/lib/auth";
import { db } from "@/lib/db";
import { PostModel, SettingModel, InquiryModel } from "@/lib/models";
import { doLogin, doLogout, savePost, deletePost, saveLink, markRead, deleteInquiry } from "./actions";
export const dynamic = "force-dynamic";
export const metadata = { title: "Admin", robots: { index: false, follow: false } };
const btn = "rounded-lg bg-accent px-4 py-2 font-bold text-black";
export default async function Admin() {
  if (!(await isAdmin())) return (
    <form action={doLogin} className="card mx-auto max-w-sm p-6"><h1 className="mb-3 text-2xl font-bold text-accent2">Admin Login</h1>
      <input name="password" type="password" placeholder="Password" className="field" /><button className={btn}>Login</button></form>);
  await db();
  const posts = JSON.parse(JSON.stringify(await PostModel.find().sort({ createdAt: -1 }).lean()));
  const inquiries = JSON.parse(JSON.stringify(await InquiryModel.find().sort({ createdAt: -1 }).limit(100).lean()));
  const unread = inquiries.filter((i) => !i.read).length;
  const link = (await SettingModel.findOne({ key: "downloadUrl" }).lean())?.value || "";
  return (<div className="space-y-8">
    <div className="flex items-center justify-between"><h1 className="text-2xl font-bold text-accent2">Admin Panel</h1>
      <div className="flex gap-4 text-sm font-bold"><a href="/api/seed" className="text-accent2 underline">Add starter guide</a><form action={doLogout}><button className="underline">Logout</button></form></div></div>
    <section className="card p-4"><h2 className="mb-2 font-bold">Inquiries {unread > 0 && <span className="ml-2 rounded-full bg-accent px-2 py-0.5 text-xs text-black">{unread} new</span>}</h2>
      {inquiries.length === 0 && <p className="text-sm text-muted">No messages yet.</p>}
      {inquiries.map((i) => (
        <div key={i._id} className={`border-t border-line py-3 ${i.read ? "opacity-60" : ""}`}>
          <div className="flex flex-wrap justify-between gap-2 text-sm"><b>{i.subject}</b><span className="text-muted">{new Date(i.createdAt).toLocaleString("en-GB")}</span></div>
          <div className="text-sm text-muted">{i.name} · <a className="text-accent2 underline" href={`mailto:${i.email}?subject=Re: ${encodeURIComponent(i.subject)}`}>{i.email}</a></div>
          <p className="my-2 whitespace-pre-wrap text-sm">{i.message}</p>
          <div className="flex gap-4 text-sm">
            {!i.read && <form action={markRead}><input type="hidden" name="id" value={i._id} /><button className="text-accent2 underline">Mark as read</button></form>}
            <form action={deleteInquiry}><input type="hidden" name="id" value={i._id} /><button className="text-red-400 underline">Delete</button></form>
          </div>
        </div>))}
    </section>
    <form action={saveLink} className="card p-4"><h2 className="font-bold">Download Link</h2>
      <input name="url" defaultValue={link} placeholder="https://..." className="field" /><button className={btn}>Save</button></form>
    <form action={savePost} className="card p-4"><h2 className="font-bold">New / Update Post</h2>
      <input name="title" placeholder="Title" required className="field" />
      <input name="slug" placeholder="slug (blank = from title; same slug = update)" className="field" />
      <input name="excerpt" placeholder="Short description" className="field" />
      <textarea name="content" rows={12} placeholder={"## Heading\n\nParagraph...\n\n- bullet\n\n[ad]\n\n[button:Label|/download]"} className="field" /><button className={btn}>Save Post</button></form>
    <section className="card p-4"><h2 className="mb-2 font-bold">Posts</h2>{posts.map((p) => (
      <form key={p._id} action={deletePost} className="flex items-center justify-between border-t border-line py-2">
        <span>{p.title} <span className="text-xs text-muted">/{p.slug}</span></span>
        <input type="hidden" name="id" value={p._id} /><button className="text-sm text-red-400">Delete</button></form>))}</section>
  </div>);
}
