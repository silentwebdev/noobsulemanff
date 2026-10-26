import SocialBar from "@/components/SocialBar";
import Link from "next/link";
import "./globals.css";
import { SITE } from "@/lib/site";
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} - Free Fire Proxy Server Guide`, template: `%s | ${SITE.name}` },
  description: "Complete Free Fire proxy server guide: download, install, Guest ID setup, activation and troubleshooting.",
  openGraph: { siteName: SITE.name, type: "website" },
  alternates: { canonical: "./" },
};
const links = [["/", "Home"], ["/about", "About"], ["/contact", "Contact"]];
const legal = [["/privacy-policy", "Privacy Policy"], ["/terms", "Terms"], ["/disclaimer", "Disclaimer"]];
export default function RootLayout({ children }) {
  return (
    <html lang="en"><body>
      <SocialBar />
      <header className="sticky top-0 z-10 border-b border-line bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-xl font-extrabold text-ink">🔥 {SITE.name}</Link>
          <div className="flex gap-4 text-sm font-semibold text-muted">{links.map(([h, l]) => <Link key={h} href={h} className="hover:text-accent">{l}</Link>)}</div>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
      <footer className="mt-12 border-t border-line bg-gray-50 py-8 text-center text-xs text-muted">
        <div className="mb-3 flex flex-wrap justify-center gap-4 font-semibold">{legal.map(([h, l]) => <Link key={h} href={h} className="hover:text-accent">{l}</Link>)}</div>
        <p>© {new Date().getFullYear()} {SITE.name}. Not affiliated with Garena. Free Fire is a trademark of Garena.</p>
      </footer>
    </body></html>
  );
}
