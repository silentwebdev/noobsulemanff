"use server";
import { db } from "@/lib/db";
import { InquiryModel } from "@/lib/models";
export async function sendInquiry(_prev, fd) {
  if (fd.get("website")) return { ok: true };
  const v = (k, n) => String(fd.get(k) || "").trim().slice(0, n);
  const d = { name: v("name", 80), email: v("email", 120).toLowerCase(), subject: v("subject", 120), message: v("message", 3000) };
  if (!d.name || !d.subject || d.message.length < 10) return { error: "Please fill in all fields (message must be at least 10 characters)." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) return { error: "Please enter a valid email address." };
  try {
    await db();
    const recent = await InquiryModel.countDocuments({ email: d.email, createdAt: { $gt: new Date(Date.now() - 3600_000) } });
    if (recent >= 3) return { error: "Too many messages. Please try again later." };
    await InquiryModel.create(d);
    return { ok: true };
  } catch { return { error: "Could not send your message. Please try again." }; }
}
