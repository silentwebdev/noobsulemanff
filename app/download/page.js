import DownloadGate from "@/components/DownloadGate";
export const metadata = { title: "Download Free Fire Proxy Server" };
export default function Download() {
  return (<div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100 sm:p-10">
    <h1 className="text-3xl font-extrabold text-blue-900">Free Fire Proxy Server Download</h1>
    <p className="mt-3 text-gray-700">For Android. Please read the setup guide before installing, and use a Guest account only.</p>
    <DownloadGate seconds={15} />
  </div>);
}
