import { isAdmin } from "@/lib/auth";
import { db } from "@/lib/db";
import { PostModel, SettingModel } from "@/lib/models";
import { doLogin, doLogout, savePost, deletePost, saveLink } from "./actions";
export const dynamic = "force-dynamic";
export const metadata = { robots: { index: false } };
const inp = "w-full rounded bg-white border border-gray-300 p-2 my-1";
const btn = "rounded bg-orange-500 px-4 py-2 font-bold text-white shadow";
export default async function Admin() {
  if (!(await isAdmin())) return (
    <form action={doLogin} className="mx-auto max-w-sm"><h1 className="mb-3 text-2xl font-bold">Admin Login</h1>
      <input name="password" type="password" placeholder="Password" className={inp} /><button className={btn}>Login</button></form>);
  await db();
  const posts = JSON.parse(JSON.stringify(await PostModel.find().sort({ createdAt: -1 }).lean()));
  const link = (await SettingModel.findOne({ key: "downloadUrl" }).lean())?.value || "";
  return (<div className="space-y-8">
    <div className="flex justify-between"><h1 className="text-2xl font-bold">Admin Panel</h1><form action={doLogout}><button className="text-sm underline">Logout</button></form></div>
    <form action={saveLink} className="rounded-xl bg-white shadow-lg ring-1 ring-gray-100 p-4"><h2 className="font-bold">Download Link</h2>
      <input name="url" defaultValue={link} placeholder="https://..." className={inp} /><button className={btn}>Save</button></form>
    <form action={savePost} className="rounded-xl bg-white shadow-lg ring-1 ring-gray-100 p-4"><h2 className="font-bold">Naya / Update Post</h2>
      <input name="title" placeholder="Title" required className={inp} />
      <input name="slug" placeholder="slug (khali chhorein to title se bane ga; wahi slug likhein to update hoga)" className={inp} />
      <input name="excerpt" placeholder="Chhoti description" className={inp} />
      <textarea name="content" rows={12} placeholder={"## Heading\n\nParagraph...\n\n- bullet 1\n- bullet 2"} className={inp} /><button className={btn}>Save Post</button></form>
    <div><h2 className="mb-2 font-bold">Posts</h2>{posts.map((p) => (
      <form key={p._id} action={deletePost} className="flex items-center justify-between border-b border-gray-200 py-2">
        <span>{p.title} <span className="text-xs text-gray-500">/{p.slug}</span></span>
        <input type="hidden" name="id" value={p._id} /><button className="text-sm text-red-400">Delete</button></form>))}</div>
  </div>);
}
