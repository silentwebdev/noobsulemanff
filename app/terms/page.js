import Legal from "@/components/Legal";
import { SITE } from "@/lib/site";
export const metadata = { title: "Terms and Conditions" };
export default function Terms() {
  return (<Legal title="Terms and Conditions">
    <p>By using {SITE.name}, you agree to these terms. If you do not agree, please do not use the site.</p>
    <h2>Use of the Website</h2>
    <p>You may use this site for personal, non-commercial purposes. You agree not to misuse it, attempt to disrupt it, or try to access areas you are not authorized to use.</p>
    <h2>Content</h2>
    <p>Guides are provided for general information. You may not copy, republish or resell our content without written permission.</p>
    <h2>Third-Party Software and Links</h2>
    <p>Our guides may mention or link to third-party applications and websites. We do not own or control them, and you use them at your own risk. See our <a href="/disclaimer">Disclaimer</a>.</p>
    <h2>No Warranty</h2>
    <p>The site and its content are provided "as is" without warranties of any kind. We do not guarantee that information is complete, current or error-free.</p>
    <h2>Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, {SITE.name} is not liable for any loss or damage, including loss of data or accounts, arising from your use of the site or any third-party software or service mentioned on it.</p>
    <h2>Advertising</h2>
    <p>The site displays advertisements. We are not responsible for the content of third-party ads.</p>
    <h2>Changes</h2>
    <p>We may change these terms at any time. Continued use of the site means you accept the updated terms.</p>
    <h2>Contact</h2>
    <p>Questions about these terms? Email {SITE.email}.</p>
  </Legal>);
}
