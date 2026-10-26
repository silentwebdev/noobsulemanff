"use client";
import { useActionState } from "react";
import { sendInquiry } from "@/app/contact/actions";
export default function ContactForm() {
  const [s, action, pending] = useActionState(sendInquiry, null);
  if (s?.ok) return <p className="rounded-xl bg-good/20 p-5 font-bold text-ink">✅ Thank you! Your message has been sent. We will reply as soon as possible.</p>;
  return (<form action={action}>
    <label>Your name<input name="name" required maxLength={80} className="field" /></label>
    <label>Email<input name="email" type="email" required maxLength={120} className="field" /></label>
    <label>Subject<input name="subject" required maxLength={120} className="field" /></label>
    <label>Message<textarea name="message" required rows={6} maxLength={3000} className="field" /></label>
    <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
    {s?.error && <p className="mb-3 text-red-400">{s.error}</p>}
    <button disabled={pending} className="btn w-full disabled:opacity-60">{pending ? "Sending..." : "Send Message"}</button>
  </form>);
}
