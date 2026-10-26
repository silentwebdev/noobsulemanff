import mongoose from "mongoose";
import { posts } from "../lib/starter.mjs";
await mongoose.connect(process.env.MONGODB_URI);
const Post = mongoose.models.Post || mongoose.model("Post", new mongoose.Schema({ title: String, slug: { type: String, unique: true }, excerpt: String, content: String }, { timestamps: true }));
for (const p of posts) await Post.findOneAndUpdate({ slug: p.slug }, { $setOnInsert: p }, { upsert: true });
console.log("Seed done"); await mongoose.disconnect();
