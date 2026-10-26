import crypto from "crypto";
import { cookies } from "next/headers";
const token = () => crypto.createHmac("sha256", process.env.ADMIN_SECRET || "x").update(process.env.ADMIN_PASSWORD || "").digest("hex");
const safeEq = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && crypto.timingSafeEqual(x, y); };
export async function isAdmin() { const v = (await cookies()).get("admin")?.value; return !!v && safeEq(v, token()); }
export async function login(pw) {
  if (!pw || !process.env.ADMIN_PASSWORD || !safeEq(pw, process.env.ADMIN_PASSWORD)) return false;
  (await cookies()).set("admin", token(), { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 604800 });
  return true;
}
export async function logout() { (await cookies()).delete("admin"); }
