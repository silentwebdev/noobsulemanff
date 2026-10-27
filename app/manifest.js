import { SITE } from "@/lib/site";
export default function manifest() {
  return { name: SITE.name, short_name: SITE.name, start_url: "/", display: "browser", background_color: "#ffffff", theme_color: "#f97316", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}
