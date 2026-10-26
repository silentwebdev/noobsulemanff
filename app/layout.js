import Script from "next/script";
import Link from "next/link";
import "./globals.css";
const name = process.env.NEXT_PUBLIC_SITE_NAME || "FF Proxy Guide";
export const metadata = { title: { default: `${name} - Free Fire Proxy Server Guide`, template: `%s | ${name}` }, description: "Free Fire proxy server ki mukammal guide: download, install, setup aur masail ka hal." };
export default function RootLayout({ children }) {
  const ad = process.env.NEXT_PUBLIC_ADSENSE_ID;
  return (
    <html lang="ur-Latn"><body>
      {ad && <Script async strategy="afterInteractive" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ad}`} crossOrigin="anonymous" />}
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0b0f1a]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-lg font-extrabold text-orange-400">🔥 {name}</Link>
          <Link href="/download" className="rounded-full bg-orange-500 px-4 py-1.5 text-sm font-bold text-black">Download</Link>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
      <footer className="border-t border-white/10 py-6 text-center text-xs text-gray-500">Yeh site Garena se mansalik nahi hai. Free Fire Garena ka trademark hai.</footer>
    </body></html>
  );
}
