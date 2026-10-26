import mongoose from "mongoose";
const Post = new mongoose.Schema({
  title: String, slug: { type: String, unique: true }, excerpt: String, content: String,
}, { timestamps: true });
const Setting = new mongoose.Schema({ key: { type: String, unique: true }, value: String });
export const PostModel = mongoose.models.Post || mongoose.model("Post", Post);
export const SettingModel = mongoose.models.Setting || mongoose.model("Setting", Setting);
