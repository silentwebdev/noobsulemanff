import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { db } from "@/lib/db";
import { PostModel } from "@/lib/models";
import { posts } from "@/lib/starter.mjs";
export const dynamic = "force-dynamic";
export async function GET(req) {
  const force = new URL(req.url).searchParams.get("force") === "1";
  if (!(await isAdmin())) return NextResponse.json({ error: "Login at /admin first, then open this URL again." }, { status: 401 });
  await db();
  let added = 0;
  for (const p of posts) {
    const r = await PostModel.updateOne({ slug: p.slug }, force ? { $set: p } : { $setOnInsert: p }, { upsert: true });
    if (r.upsertedCount || (force && r.modifiedCount)) added++;
  }
  return NextResponse.json({ ok: true, added, note: "Without ?force=1 existing posts are never overwritten." });
}
