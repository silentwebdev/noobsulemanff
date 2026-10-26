import Script from "next/script";
import Link from "next/link";
import "./globals.css";
const name = process.env.NEXT_PUBLIC_SITE_NAME || "noobsulemanff";
export const metadata = { title: { default: `${name} - Free Fire Proxy Server Guide`, template: `%s | ${name}` }, description: "Complete Free Fire proxy server guide: download, install, Guest ID setup, activation and troubleshooting." };
export default function RootLayout({ children }) {
  const ad = process.env.NEXT_PUBLIC_ADSENSE_ID;
  return (
    <html lang="en"><body>
      {ad && <Script async strategy="afterInteractive" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ad}`} crossOrigin="anonymous" />}
      <header className="sticky top-0 z-10 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 shadow-lg">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-white">🔥 {name}</Link>
          <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow">Free Fire Guides</span>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
      <footer className="mt-10 bg-blue-900 py-6 text-center text-xs text-blue-100 shadow-inner">© {name}. Not affiliated with Garena. Free Fire is a trademark of Garena.</footer>
    </body></html>
  );
}
