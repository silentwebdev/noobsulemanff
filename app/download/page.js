import DownloadGate from "@/components/DownloadGate";
export const metadata = { title: "Download Free Fire Proxy Server", robots: { index: false, follow: false } };
export default function Download() {
  return (<div className="card p-6 sm:p-10">
    <h1 className="text-3xl font-extrabold text-accent2">Free Fire Proxy Server Download</h1>
    <p className="mt-3 text-ink/80">For Android. Please read the setup guide before installing, and use a Guest account only.</p>
    <DownloadGate seconds={5} />
  </div>);
}
