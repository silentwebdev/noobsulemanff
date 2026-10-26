"use client";
import { useEffect, useRef, useState } from "react";
import { ADS } from "@/lib/ads";
export default function AdSlot({ kind = "native", className = "" }) {
  const ref = useRef(null);
  const min = kind === "banner" ? 50 : 100;
  const [h, setH] = useState(kind === "banner" ? 50 : 250);
  useEffect(() => {
    let n = 0;
    const t = setInterval(() => {
      try { const b = ref.current?.contentDocument?.body; if (b && b.scrollHeight > 20) setH(Math.min(Math.max(b.scrollHeight, min), 600)); } catch {}
      if (++n > 15) clearInterval(t);
    }, 1000);
    return () => clearInterval(t);
  }, [min]);
  return (
    <div className={`mx-auto w-full max-w-[728px] overflow-hidden ${className}`}>
      <iframe ref={ref} srcDoc={ADS[kind]} title="Advertisement" loading="lazy" scrolling="no"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        style={{ width: "100%", height: h, border: 0 }} />
    </div>
  );
}
