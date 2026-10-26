import mongoose from "mongoose";
let cached = globalThis._mongo || (globalThis._mongo = { conn: null });
export async function db() {
  if (!cached.conn) cached.conn = await mongoose.connect(process.env.MONGODB_URI);
  return cached.conn;
}
