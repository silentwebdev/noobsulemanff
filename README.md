# noobsulemanff

## Env vars (Vercel)
MONGODB_URI, ADMIN_PASSWORD, ADMIN_SECRET, NEXT_PUBLIC_SITE_NAME, NEXT_PUBLIC_SITE_URL (https://yourdomain.com), CONTACT_EMAIL
Optional: GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION (token from Search Console / Bing Webmaster)

## After deploy
1. /admin login -> "Add starter guide" (or /api/seed?force=1 to overwrite it)
2. Set the download link in /admin
3. Submit https://yourdomain.com/sitemap.xml in Google Search Console
4. Ads: Adsterra codes live in lib/ads.js

## Post format
`## Heading`, `- bullet`, `> note`, `[ad]` (alternates native/banner; or `[ad:native]`, `[ad:banner]`), `[button:Label|/download]`, `[button:blue:Label|https://...]`

## Colors
All colors are in app/globals.css under @theme.
