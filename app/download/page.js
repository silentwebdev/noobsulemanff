import DownloadGate from "@/components/DownloadGate";
export const metadata = { title: "Download Free Fire Proxy Server" };
export default function Download() {
  return (<div>
    <h1 className="text-3xl font-extrabold">Free Fire Proxy Server Download</h1>
    <p className="mt-3 text-gray-300">Android ke liye. Download se pehle install guide zaroor parh lein. Sirf guest account use karein, apna main account is par login na karein.</p>
    <DownloadGate seconds={15} />
  </div>);
}
