import Legal from "@/components/Legal";
import { SITE } from "@/lib/site";
export const metadata = { title: "About Us", description: `About ${SITE.name}` };
export default function About() {
  return (<Legal title={`About ${SITE.name}`}>
    <p>{SITE.name} publishes simple, step-by-step guides for Free Fire players on Android, covering downloads, installation, account setup and fixes for common problems.</p>
    <h2>Our Goal</h2>
    <p>Many players make mistakes by skipping steps or following unclear instructions. Our guides explain each step in plain English so you know what to expect before you start.</p>
    <h2>Independence</h2>
    <p>We are an independent website. We are not affiliated with, endorsed by or sponsored by Garena or Free Fire. All trademarks belong to their respective owners.</p>
    <h2>Contact</h2>
    <p>Questions, corrections or feedback? Visit our <a href="/contact">contact page</a> or email {SITE.email}.</p>
  </Legal>);
}
