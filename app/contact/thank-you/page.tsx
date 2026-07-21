import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Message Received",
  description: "Your message has been sent to ADYNTIQ.",
  robots: {
    index: false,
    follow: false
  }
};

export default function ContactThankYouPage() {
  return (
    <main className="bg-gradient-to-br from-white via-mist to-blue-100 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
          Message received
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
          Thank you. We&apos;ll be in touch.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/70">
          Your inquiry is now with the ADYNTIQ team. We&apos;ll review the workflow or
          operational challenge you shared and respond using the email address you
          provided.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25"
          >
            Return to homepage
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/15"
          >
            Explore services
          </Link>
        </div>
      </div>
    </main>
  );
}
