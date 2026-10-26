"use client";
import { useEffect } from "react";
export default function AdSlot({ className = "" }) {
  const id = process.env.NEXT_PUBLIC_ADSENSE_ID;
  useEffect(() => { try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {} }, []);
  if (!id) return <div className={`rounded-lg border border-dashed border-gray-600 p-6 text-center text-xs text-gray-500 ${className}`}>Ad yahan ayega</div>;
  return <ins className={`adsbygoogle block ${className}`} style={{ display: "block" }} data-ad-client={id} data-ad-slot={process.env.NEXT_PUBLIC_AD_SLOT} data-ad-format="auto" data-full-width-responsive="true" />;
}
