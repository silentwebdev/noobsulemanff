import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";
export const metadata = { title: "Contact Us", description: `Contact ${SITE.name}` };
export default function Contact() {
  return (<div className="card p-6 sm:p-10">
    <h1 className="text-3xl font-extrabold text-accent2">Contact Us</h1>
    <p className="my-4 text-ink/80">Have a question, a problem with a guide, or feedback? Send us a message and we will get back to you.</p>
    <ContactForm />
  </div>);
}
