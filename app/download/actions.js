"use server";
import { db } from "@/lib/db";
import { SettingModel } from "@/lib/models";
export async function getLink() { await db(); const s = await SettingModel.findOne({ key: "downloadUrl" }).lean(); return s?.value || ""; }
