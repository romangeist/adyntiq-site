# ADYNTIQ Website

Next.js + Tailwind + TypeScript site for ADYNTIQ.

## Run locally

```bash
npm install
npm run dev
```

## Contact form

Uses Resend. Add these environment variables in Vercel:

```bash
RESEND_API_KEY=your_key
CONTACT_TO=sales@adyntiq.com
CONTACT_FROM=ADYNTIQ Website <verified@adyntiq.com>
```

During initial Resend setup you can use `onboarding@resend.dev`, but for production verify `adyntiq.com` and use a domain email.

## Deploy

1. Push this folder to GitHub.
2. Import repo in Vercel.
3. Add environment variables.
4. Point Namecheap DNS to Vercel.
