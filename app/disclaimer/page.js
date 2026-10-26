import Legal from "@/components/Legal";
import { SITE } from "@/lib/site";
export const metadata = { title: "Disclaimer" };
export default function Disclaimer() {
  return (<Legal title="Disclaimer">
    <h2>No Affiliation</h2>
    <p>{SITE.name} is an independent website. It is not affiliated with, authorized, maintained or endorsed by Garena or Free Fire. Free Fire and related names are trademarks of their owners.</p>
    <h2>Third-Party Applications</h2>
    <p>Applications and services mentioned in our guides are created by third parties. We do not guarantee their safety, legality, availability or results. Using them may violate a game's rules and could affect your account. You are responsible for checking the applicable rules and for any decision to use them.</p>
    <h2>Use at Your Own Risk</h2>
    <p>Always use a Guest account, never enter your passwords or verification codes into third-party forms, and verify the safety of any file before installing it. Results differ between devices, networks and app versions.</p>
    <h2>Accuracy</h2>
    <p>We try to keep guides accurate, but information may become outdated. If you notice a problem, please <a href="/contact">tell us</a>.</p>
    <h2>Advertising Disclosure</h2>
    <p>This website earns revenue from advertisements, which helps us keep the guides free.</p>
  </Legal>);
}
