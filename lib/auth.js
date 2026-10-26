import crypto from "crypto";
import { cookies } from "next/headers";
const token = () => crypto.createHmac("sha256", process.env.ADMIN_SECRET || "x").update(process.env.ADMIN_PASSWORD || "").digest("hex");
export async function isAdmin() { return (await cookies()).get("admin")?.value === token(); }
export async function login(pw) {
  if (!pw || pw !== process.env.ADMIN_PASSWORD) return false;
  (await cookies()).set("admin", token(), { httpOnly: true, secure: process.env.NODE_ENV === "production", path: "/", maxAge: 604800 });
  return true;
}
export async function logout() { (await cookies()).delete("admin"); }
