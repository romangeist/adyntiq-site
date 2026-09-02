import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

const title = "Production Inquiry Workflow Case Study";
const description =
  "An internal ADYNTIQ case study showing how a website inquiry was turned into a verified, protected, and measurable production workflow.";
const caseStudyUrl =
  "https://www.adyntiq.com/case-studies/production-inquiry-workflow";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/case-studies/production-inquiry-workflow" },
  openGraph: {
    type: "article",
    title: "A reliable inquiry workflow, built end to end | ADYNTIQ",
    description,
    url: caseStudyUrl,
    publishedTime: "2026-09-01",
    modifiedTime: "2026-09-01",
  },
  twitter: {
    title: "A reliable inquiry workflow, built end to end | ADYNTIQ",
    description,
  },
};

const workflow = [
  ["01", "Capture", "Collect the business context the team needs."],
  ["02", "Verify", "Screen automated traffic before submission."],
  ["03", "Validate", "Check the request again on the server."],
  ["04", "Deliver", "Route a structured inquiry to the team."],
  ["05", "Confirm", "Acknowledge receipt for the sender."],
  ["06", "Measure", "Record the completed conversion path."],
] as const;

const proof = [
  ["Inquiry delivery", "A live test reached the ADYNTIQ sales mailbox."],
  ["Sender confirmation", "The acknowledgment reached the submitting mailbox."],
  ["Bot protection", "Turnstile and a hidden bot field protect the live form."],
  ["Conversion visibility", "Calls to action and successful submissions are instrumented."],
] as const;

const futureMeasures = [
  "Form completion rate",
  "Qualified-inquiry rate",
  "Median response time",
  "Spam rejection volume",
];

export default function ProductionInquiryWorkflowCaseStudyPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "A reliable inquiry workflow, built end to end",
    description,
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    author: {
      "@type": "Organization",
      name: "ADYNTIQ",
      url: "https://www.adyntiq.com",
    },
    publisher: {
      "@type": "Organization",
      name: "ADYNTIQ",
      url: "https://www.adyntiq.com",
    },
    mainEntityOfPage: caseStudyUrl,
    about: [
      "Workflow automation",
      "Lead intake",
      "Email delivery",
      "Bot protection",
      "Conversion measurement",
    ],
  };

  return (
    <main id="main-content" tabIndex={-1}>
      <article>
        <header className="relative overflow-hidden bg-slate py-14 text-white sm:py-16 lg:py-20">
          <div className="hero-grid absolute inset-0 opacity-20" />
          <div className="absolute -right-24 -top-36 h-96 w-96 rounded-full bg-brand/20 blur-3xl md:blur-[100px]" />

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-blue-200 transition hover:text-white"
            >
              <span aria-hidden="true">←</span>&nbsp; Back to ADYNTIQ
            </Link>

            <p className="eyebrow mt-7 !text-blue-300">Internal case study</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              A reliable inquiry workflow, built end to end.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              How ADYNTIQ turned its own website contact path into a protected,
              measurable operating loop—from first click to confirmed delivery.
            </p>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6 text-sm">
              <div>
                <dt className="text-white/45">Type</dt>
                <dd className="mt-1 font-semibold text-white">Internal implementation</dd>
              </div>
              <div>
                <dt className="text-white/45">Status</dt>
                <dd className="mt-1 font-semibold text-white">Live in production</dd>
              </div>
              <div>
                <dt className="text-white/45">Verified</dt>
                <dd className="mt-1 font-semibold text-white">September 2026</dd>
              </div>
            </dl>
          </div>
        </header>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p className="eyebrow">The brief</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-4xl">
                  A form submission is only the beginning.
                </h2>
              </div>

              <div className="grid gap-8 text-base leading-7 text-ink/70 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-ink">The challenge</h3>
                  <p className="mt-3">
                    A basic form can accept bot traffic, fail silently, or leave a
                    legitimate prospect unsure whether anyone received the message.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink">The assignment</h3>
                  <p className="mt-3">
                    Build a complete intake path that captures useful context,
                    verifies the request, delivers it reliably, and confirms success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/[0.06] bg-[#f7f9fc] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="eyebrow">The workflow</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-4xl">
                Six connected steps. One closed loop.
              </h2>
            </div>

            <ol className="mt-10 grid overflow-hidden rounded-2xl border border-black/[0.07] bg-white sm:grid-cols-2 lg:grid-cols-6">
              {workflow.map(([number, step, detail], index) => (
                <li
                  key={step}
                  className="relative border-b border-black/[0.06] p-5 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2n)]:border-r lg:last:border-r-0"
                >
                  <span className="text-xs font-bold tracking-[0.16em] text-brand">
                    {number}
                  </span>
                  <h3 className="mt-5 font-semibold text-ink">{step}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/60">{detail}</p>
                  {index < workflow.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute right-[-0.45rem] top-6 z-10 hidden h-3 w-3 rotate-45 border-r border-t border-black/10 bg-white lg:block"
                    />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:gap-20 lg:px-8">
            <div>
              <p className="eyebrow">What changed</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-4xl">
                Reliability became part of the process.
              </h2>
              <div className="mt-8 space-y-7 border-l border-black/10 pl-6">
                <div>
                  <h3 className="font-semibold text-ink">Layered validation</h3>
                  <p className="mt-2 leading-7 text-ink/65">
                    Turnstile verification, a hidden bot field, and server-side
                    input boundaries filter invalid requests before delivery.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Clear failure handling</h3>
                  <p className="mt-2 leading-7 text-ink/65">
                    If verification or delivery fails, the visitor sees a clear
                    message and can still reach ADYNTIQ by direct email.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Closed-loop confirmation</h3>
                  <p className="mt-2 leading-7 text-ink/65">
                    The team receives a structured inquiry while the sender gets
                    both an on-site confirmation and an acknowledgment email.
                  </p>
                </div>
              </div>
            </div>

            <aside className="self-start rounded-3xl bg-brand p-7 text-white sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
                The outcome
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
                A working operational loop—not just a polished interface.
              </h2>
              <p className="mt-5 leading-7 text-white/90">
                ADYNTIQ now has a live intake workflow that collects business
                context, rejects unverified requests, routes legitimate inquiries,
                acknowledges the sender, and records the conversion path.
              </p>
            </aside>
          </div>
        </section>

        <section className="bg-slate py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p className="eyebrow !text-blue-300">Verified proof</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                  What we can say with confidence.
                </h2>
              </div>

              <ul className="divide-y divide-white/10 border-y border-white/10">
                {proof.map(([capability, evidence]) => (
                  <li key={capability} className="grid gap-2 py-5 sm:grid-cols-[0.68fr_1.32fr] sm:gap-6">
                    <p className="flex items-center gap-3 font-semibold text-white">
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-400/15 text-xs text-green-300"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {capability}
                    </p>
                    <p className="text-sm leading-6 text-white/60">{evidence}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="font-semibold text-white">Evidence boundaries</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  This is an internal ADYNTIQ implementation, not a client
                  engagement. We are not claiming revenue lift, time savings, lead
                  growth, or ROI because a reliable baseline does not yet exist.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What we measure next</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {futureMeasures.map((measure) => (
                    <li
                      key={measure}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-semibold text-white/70"
                    >
                      {measure}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </article>

      <CTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </main>
  );
}
