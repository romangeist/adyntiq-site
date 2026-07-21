import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-white px-4 pb-24 pt-4 sm:px-6 sm:pb-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate px-7 py-14 text-white shadow-soft sm:px-10 md:py-20 lg:px-14">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-brand/30 blur-[100px]" />
        <div className="absolute -bottom-40 left-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[100px]" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Start with one high-value workflow</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Ready to put AI to work?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Tell us where work is slow, manual, or disconnected. We&apos;ll help you identify the practical path forward.
            </p>
          </div>
          <Link href="/contact" className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl">
            Talk to ADYNTIQ <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
