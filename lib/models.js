import mongoose from "mongoose";
const Post = new mongoose.Schema({ title: String, slug: { type: String, unique: true }, excerpt: String, content: String }, { timestamps: true });
const Setting = new mongoose.Schema({ key: { type: String, unique: true }, value: String });
const Inquiry = new mongoose.Schema({ name: String, email: String, subject: String, message: String, read: { type: Boolean, default: false } }, { timestamps: true });
export const PostModel = mongoose.models.Post || mongoose.model("Post", Post);
export const SettingModel = mongoose.models.Setting || mongoose.model("Setting", Setting);
export const InquiryModel = mongoose.models.Inquiry || mongoose.model("Inquiry", Inquiry);
