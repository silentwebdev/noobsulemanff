export const SITE = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "noobsulemanff",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  email: process.env.CONTACT_EMAIL || "contact@example.com",
  updated: "October 26, 2026",
};
