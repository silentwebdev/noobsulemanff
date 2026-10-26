import Link from "next/link";
export const metadata = { title: "Page not found", robots: { index: false } };
export default function NotFound() {
  return <div className="card p-10 text-center"><h1 className="text-5xl font-extrabold text-accent2">404</h1><p className="my-4 text-muted">This page does not exist.</p><Link href="/" className="btn mx-auto max-w-xs">Back to Home</Link></div>;
}
