import Link from "next/link";
import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { StructuredGraphic } from "@/components/StructuredGraphic";

const services = [
  ["AI Strategy", "Identify high-value AI opportunities, prioritize use cases, and create a practical implementation roadmap."],
  ["Workflow Automation", "Replace repetitive manual work with intelligent workflows that move tasks, data, and approvals automatically."],
  ["Custom AI Agents", "Design agents that research, summarize, classify, route, draft, and support business execution with human oversight."],
  ["Data Integration", "Connect fragmented systems, clean operational data, and make AI useful inside real business processes."],
  ["Implementation", "Move from prototype to production with testing, governance, change management, and team rollout."],
  ["AI Operations", "Monitor, improve, and scale deployed AI workflows so they keep delivering value after launch."]
];

const industries = [
  "Professional Services",
  "Finance & Operations",
  "Customer Support",
  "Sales Operations",
  "Back Office Teams",
  "SMB & Mid-Market"
];

const outcomes = [
  ["Faster execution", "Shorten cycle times across repetitive business processes."],
  ["Less manual work", "Reduce copy-paste, status chasing, and repetitive analysis."],
  ["Better decisions", "Turn scattered data into usable operational intelligence."],
  ["Controlled adoption", "Deploy AI with governance, oversight, and measurable ROI."]
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-mist to-blue-100">
        <div className="absolute right-[-8rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-10rem] h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center lg:px-8 lg:py-28">
          <div className="relative">
            <p className="inline-flex rounded-full border border-brand/15 bg-white/75 px-4 py-2 text-sm font-semibold text-brand shadow-sm backdrop-blur">
              AI that delivers. Not just predicts.
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-ink md:text-6xl">
              Transform your operations onto AI rails.
            </h1>

            <p className="mt-6 text-lg leading-8 text-ink/70">
              ADYNTIQ designs and implements AI strategy, automation workflows,
              custom agents, and data integrations for SMB and mid-market teams.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                Contact sales
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                Explore services
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 text-sm text-ink/65 sm:grid-cols-3">
              {industries.map((item) => (
                <div key={item} className="rounded-2xl border border-black/5 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <StructuredGraphic />
        </div>
      </section>

      <Section
        eyebrow="Services"
        title="From AI idea to operational execution."
        subtitle="Strategy is useless if it never leaves the workshop. We design the workflow, connect the data, build the agent layer, and help your team adopt it."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, desc]) => (
            <div
              key={title}
              className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-brand to-accent" />
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-mist/70"
        eyebrow="Outcomes"
        title="Practical AI adoption with measurable business impact."
        subtitle="We focus on workflows that save time, reduce operational friction, and create repeatable execution—not flashy demos that die after the meeting."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map(([title, desc]) => (
            <div key={title} className="rounded-3xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Approach"
        title="Built for adoption, not AI theater."
        subtitle="SMB and mid-market companies do not need vague AI strategy. They need specific workflows that save time, reduce manual work, and improve execution."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["01", "Map", "Find operational bottlenecks with measurable business impact."],
            ["02", "Build", "Create AI workflows and agents using your real data and systems."],
            ["03", "Scale", "Deploy governance, adoption, monitoring, and continuous improvement."]
          ].map(([n, t, d]) => (
            <div key={n} className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold text-brand">{n}</p>
              <h3 className="mt-4 text-2xl font-semibold">{t}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </main>
  );
}