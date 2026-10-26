"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { PostModel, SettingModel } from "@/lib/models";
import { isAdmin, login, logout } from "@/lib/auth";
const slugify = (s) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
async function guard() { if (!(await isAdmin())) redirect("/admin"); await db(); }
export async function doLogin(fd) { await login(fd.get("password")); redirect("/admin"); }
export async function doLogout() { await logout(); redirect("/admin"); }
export async function savePost(fd) {
  await guard();
  const title = fd.get("title"); const slug = slugify(fd.get("slug") || title);
  await PostModel.findOneAndUpdate({ slug }, { title, slug, excerpt: fd.get("excerpt"), content: fd.get("content") }, { upsert: true });
  revalidatePath("/"); redirect("/admin");
}
export async function deletePost(fd) { await guard(); await PostModel.deleteOne({ _id: fd.get("id") }); revalidatePath("/"); redirect("/admin"); }
export async function saveLink(fd) { await guard(); await SettingModel.findOneAndUpdate({ key: "downloadUrl" }, { value: fd.get("url") }, { upsert: true }); redirect("/admin"); }
