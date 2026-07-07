import Link from "next/link";

export function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate px-8 py-12 text-white shadow-soft md:px-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Start with one workflow</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Put AI into production, not into a slide deck.</h2>
            <p className="mt-5 max-w-2xl text-white/75">We identify the highest-value operational bottleneck, design the AI workflow, integrate the data, and implement it with measurable outcomes.</p>
          </div>
          <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-mist">Contact sales</Link>
        </div>
      </div>
    </section>
  );
}
