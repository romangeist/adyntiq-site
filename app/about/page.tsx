import { CTA } from "@/components/CTA";

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-white via-mist to-blue-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">About ADYNTIQ</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">We make AI operational.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/65">ADYNTIQ is a professional services AI company focused on SMB and mid-market organizations that want practical automation, custom agents, data integration, and measurable operational transformation.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-black/5 p-8 shadow-sm">
            <h2 className="text-3xl font-semibold">What we believe</h2>
            <p className="mt-4 leading-7 text-ink/65">AI only matters when it improves how work gets done. A flashy demo is not transformation. Production workflows, clean data, trained teams, and measured adoption are what count.</p>
          </div>
          <div className="rounded-3xl bg-mist p-8 shadow-sm">
            <h2 className="text-3xl font-semibold">Who we serve</h2>
            <p className="mt-4 leading-7 text-ink/65">SMB and mid-market leaders who need enterprise-grade AI execution without the bloat, overhead, or vague consulting theater.</p>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
