# ADYNTIQ Website

Next.js + Tailwind + TypeScript site for ADYNTIQ.

## Run locally

```bash
npm install
npm run dev
```

## Contact form

Uses Resend for delivery and Cloudflare Turnstile for bot protection. Add these
environment variables in Vercel:

```bash
RESEND_API_KEY=your_key
CONTACT_TO=sales@adyntiq.com
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
```

The Turnstile site key and secret key must be configured together. Restrict the
production widget to `adyntiq.com` and `www.adyntiq.com`.

## Deploy

1. Push this folder to GitHub.
2. Import repo in Vercel.
3. Add environment variables.
4. Point Namecheap DNS to Vercel.
