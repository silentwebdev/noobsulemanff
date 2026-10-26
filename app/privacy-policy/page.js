import Legal from "@/components/Legal";
import { SITE } from "@/lib/site";
export const metadata = { title: "Privacy Policy" };
export default function Privacy() {
  return (<Legal title="Privacy Policy">
    <p>This Privacy Policy explains what information {SITE.name} ({SITE.url}) collects, how we use it, and the choices you have.</p>
    <h2>Information We Collect</h2>
    <ul>
      <li>Information you send us: if you use our contact form, we receive your name, email address, subject and message.</li>
      <li>Log and device data: like most websites, our hosting provider may log your IP address, browser type, pages visited and timestamps.</li>
      <li>Local session data: our guide pages store a small flag in your browser session (sessionStorage) to remember that you finished reading a guide. It is deleted when you close the browser tab.</li>
    </ul>
    <h2>How We Use Information</h2>
    <ul>
      <li>To reply to your messages and inquiries.</li>
      <li>To operate, secure and improve the website.</li>
      <li>To show advertising that supports the site.</li>
    </ul>
    <h2>Advertising and Cookies</h2>
    <p>We display advertisements from third-party ad networks, including Adsterra. These networks may use cookies, web beacons and similar technologies to show ads, measure performance and prevent fraud, and they may collect information such as your IP address, browser type and the pages you visit. Some ads may open in a new tab or window when you click them.</p>
    <p>We do not control these third-party technologies, and their use is governed by the networks' own privacy policies. You can limit tracking by changing the cookie settings in your browser or by using privacy tools.</p>
    <h2>Data Sharing</h2>
    <p>We do not sell your personal information. We only share data with service providers who help us run the site (such as hosting and database providers) or when the law requires it.</p>
    <h2>Data Retention and Your Rights</h2>
    <p>We keep contact messages only as long as needed to respond and for record-keeping. You may ask us to access, correct or delete the information you sent us by emailing {SITE.email}.</p>
    <h2>External Links</h2>
    <p>Our guides may link to third-party websites. We are not responsible for their content or privacy practices, so please review their policies.</p>
    <h2>Children</h2>
    <p>This site is not directed to children under 13, and we do not knowingly collect their personal information.</p>
    <h2>Changes</h2>
    <p>We may update this policy from time to time. The date at the top shows when it was last changed.</p>
    <h2>Contact</h2>
    <p>For privacy questions, use our <a href="/contact">contact page</a> or email {SITE.email}.</p>
  </Legal>);
}
