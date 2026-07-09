import Link from "next/link";
import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { StructuredGraphic } from "@/components/StructuredGraphic";

const valueCards = [
  ["Strategic AI Roadmaps", "Align AI initiatives with measurable business goals, ROI, and operational priorities."],
  ["Workflow Automation", "Reduce repetitive manual work and create faster, cleaner business processes."],
  ["Custom AI Agents", "Build purpose-driven AI agents for research, support, operations, and internal execution."],
  ["Data Intelligence", "Turn disconnected business information into usable, actionable intelligence."],
  ["AI Governance", "Deploy AI responsibly with oversight, security, controls, and practical adoption guardrails."],
  ["Implementation Support", "Move from strategy to production with testing, rollout, training, and optimization."]
];

const steps = [
  ["01", "Discover", "Understand your business, processes, systems, and operational bottlenecks."],
  ["02", "Design", "Prioritize AI use cases and create a roadmap tied to measurable outcomes."],
  ["03", "Implement", "Build AI workflows, agents, integrations, and automation into real operations."],
  ["04", "Optimize", "Measure performance, improve adoption, and scale what works."]
];

const industries = [
  "Financial Services",
  "Healthcare",
  "Retail",
  "Manufacturing",
  "Professional Services",
  "Technology"
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-mist to-blue-100">
        <div className="absolute right-[-10rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-10rem] h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center lg:px-8 lg:py-28">
          <div className="relative">
            <p className="inline-flex rounded-full border border-brand/15 bg-white/80 px-4 py-2 text-sm font-semibold text-brand shadow-sm backdrop-blur">
              AI that delivers. Not just predicts.
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-ink md:text-6xl">
              AI consulting that creates real business results.
            </h1>

            <p className="mt-6 text-lg leading-8 text-ink/70">
              ADYNTIQ helps SMB and mid-market organizations identify, design, and implement practical AI solutions that improve operations, reduce manual work, and accelerate decision-making.
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

            <p className="mt-8 max-w-xl text-sm leading-6 text-ink/55">
              Helping organizations transform operations through practical artificial intelligence, workflow automation, and data-driven execution.
            </p>
          </div>

          <StructuredGraphic />
        </div>
      </section>

      <Section
        eyebrow="Why ADYNTIQ"
        title="Business-first AI, built for execution."
        subtitle="Most AI initiatives fail because they start with tools instead of business problems. We focus on operational value, implementation discipline, and measurable outcomes."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {valueCards.map(([title, desc]) => (
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
        eyebrow="How We Work"
        title="A practical path from AI strategy to adoption."
        subtitle="We help you move from vague AI ambition to implemented workflows your team can actually use."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, title, desc]) => (
            <div key={n} className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-bold text-brand">{n}</p>
              <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Industries"
        title="AI transformation for teams that run the business."
        subtitle="We work with SMB and mid-market organizations across operations-heavy industries where automation, intelligence, and process discipline create immediate value."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-3xl border border-black/5 bg-white px-7 py-6 text-lg font-semibold shadow-sm"
            >
              {industry}
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </main>
  );
}