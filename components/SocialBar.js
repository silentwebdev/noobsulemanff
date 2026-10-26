"use client";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { SOCIAL_BAR_SRC } from "@/lib/ads";
export default function SocialBar() {
  if (usePathname().startsWith("/admin")) return null;
  return <Script src={SOCIAL_BAR_SRC} strategy="afterInteractive" />;
}
