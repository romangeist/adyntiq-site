import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

const description =
  "Talk with ADYNTIQ about AI strategy, workflow automation, custom agents, data integration, or implementation for your business.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact ADYNTIQ",
    description,
    url: "https://www.adyntiq.com/contact"
  },
  twitter: {
    title: "Contact ADYNTIQ",
    description
  }
};

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="bg-gradient-to-br from-white via-mist to-blue-100 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Contact sales
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
            Let&apos;s put AI to work.
          </h1>

          <p className="mt-6 text-lg leading-8 text-ink/70">
            Tell us what process you want to improve. We&apos;ll help identify whether it is a real AI opportunity or a waste of time.
          </p>

          <div className="mt-8 rounded-3xl bg-white/70 p-6 shadow-sm backdrop-blur">
            <p className="text-sm font-bold text-ink">Prefer email?</p>
            <a className="mt-1 inline-flex min-h-11 items-center text-sm font-bold text-brand hover:underline" href="mailto:sales@adyntiq.com">
              sales@adyntiq.com
            </a>
            <p className="mt-4 text-sm leading-6 text-ink/60">
              Best for SMB and mid-market teams looking at AI strategy, automation, agents, data integration, or implementation support.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
