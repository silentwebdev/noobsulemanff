"use client";
import { useEffect } from "react";
export default function AdSlot({ className = "" }) {
  const id = process.env.NEXT_PUBLIC_ADSENSE_ID;
  useEffect(() => { try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {} }, []);
  if (!id) return <div className={`rounded-lg border border-dashed border-blue-300 bg-blue-50 p-8 text-center text-xs text-blue-400 ${className}`}>Ad placeholder</div>;
  return <ins className={`adsbygoogle block ${className}`} style={{ display: "block" }} data-ad-client={id} data-ad-slot={process.env.NEXT_PUBLIC_AD_SLOT} data-ad-format="auto" data-full-width-responsive="true" />;
}
