import { CTA } from "@/components/CTA";

const principles = [
  ["Business first", "AI work should start with operational pain, not shiny tools."],
  ["Execution matters", "A prototype is not success. Adoption, reliability, and measurable impact are."],
  ["Practical governance", "AI needs guardrails, security, oversight, and clear ownership."],
  ["Human-centered change", "The best systems make teams faster and smarter without creating chaos."]
];

const values = [
  "Clear thinking over hype",
  "Measurable outcomes over vague strategy",
  "Production workflows over demos",
  "Simple systems that teams actually use"
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-mist to-blue-100 py-20 md:py-28">
        <div className="absolute right-[-10rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            About ADYNTIQ
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
            We make AI operational.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70">
            ADYNTIQ is a professional services AI company helping SMB and mid-market organizations transform operations through strategy, automation, custom agents, data integration, and practical AI adoption.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold">What we believe</h2>
            <p className="mt-4 leading-7 text-ink/70">
              AI only matters when it improves how work gets done. A flashy demo is not transformation. Production workflows, clean data, trained teams, and measured adoption are what count.
            </p>
          </div>

          <div className="rounded-3xl bg-mist p-8 shadow-sm">
            <h2 className="text-3xl font-semibold">Who we serve</h2>
            <p className="mt-4 leading-7 text-ink/70">
              SMB and mid-market leaders who need enterprise-grade AI execution without the bloat, overhead, or vague consulting theater.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist/70 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Principles
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Built for practical AI transformation.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {principles.map(([title, desc]) => (
              <div key={title} className="rounded-3xl bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Values
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              No AI theater.
            </h2>
          </div>

          <div className="grid gap-4">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-3xl border border-black/5 bg-white px-7 py-5 text-lg font-semibold shadow-sm"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}