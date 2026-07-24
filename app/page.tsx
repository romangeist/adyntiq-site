import Link from "next/link";
import { CTA } from "@/components/CTA";
import { StructuredGraphic } from "@/components/StructuredGraphic";

const challenges = [
  ["01", "Manual work slows growth", "Critical processes still depend on copying, routing, checking, and reporting by hand."],
  ["02", "Business data stays fragmented", "Knowledge is trapped across documents, inboxes, spreadsheets, and disconnected systems."],
  ["03", "AI pilots never reach production", "Promising experiments stall without integration, governance, ownership, or adoption."],
  ["04", "The starting point is unclear", "Teams see the opportunity, but struggle to identify the first use case worth implementing."],
] as const;

const services = [
  ["01", "AI Strategy", "Find the highest-value opportunities, quantify impact, and create a practical implementation roadmap.", "Prioritize with confidence"],
  ["02", "Workflow Automation", "Replace repetitive handoffs and manual steps with reliable, AI-enabled operational workflows.", "Move work faster"],
  ["03", "Custom AI Agents", "Deploy task-specific agents for research, support, analysis, knowledge work, and execution.", "Expand team capacity"],
  ["04", "Data Integration", "Connect your systems and knowledge so AI can work with accurate, relevant business context.", "Unify scattered data"],
  ["05", "AI Implementation", "Move from prototype to production with testing, security, rollout, training, and governance.", "Turn plans into production"],
  ["06", "Operations Transformation", "Redesign how work gets done and continuously improve the systems after launch.", "Scale what works"],
] as const;

const steps = [
  ["01", "Discover", "Map the process, systems, data, bottlenecks, and business outcome."],
  ["02", "Design", "Define the solution, success measures, safeguards, and rollout plan."],
  ["03", "Implement", "Build, integrate, test, and deploy the workflow into real operations."],
  ["04", "Optimize", "Measure adoption, improve performance, and scale proven value."],
] as const;

const useCases = [
  ["Document operations", "Extract, classify, validate, route, and summarize high-volume documents."],
  ["Knowledge assistants", "Give teams secure, grounded answers from internal policies and business knowledge."],
  ["Connected systems", "Move information intelligently between CRMs, ERPs, inboxes, and internal tools."],
  ["Customer operations", "Triage requests, draft responses, surface context, and accelerate resolution."],
  ["Reporting and analysis", "Turn recurring data collection and reporting into an automated workflow."],
  ["Task-specific agents", "Deploy controlled agents that research, prepare, monitor, and execute defined tasks."],
] as const;

const principles = [
  ["Outcomes before technology", "Every engagement starts with an operating result—not a tool looking for a use case."],
  ["Built into real operations", "Solutions connect to the systems, data, controls, and people already running the business."],
  ["Practical implementation", "We stay focused on production workflows, adoption, and measurable improvement."],
  ["Strategy through scale", "One accountable partner from opportunity discovery through deployment and optimization."],
] as const;

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="overflow-hidden">
      <section className="relative isolate bg-slate text-white">
        <div className="hero-grid absolute inset-0 -z-10 opacity-40" />
        <div className="absolute -right-40 top-[-10rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-brand/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-16rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[120px]" />

        <div className="mx-auto grid min-h-[760px] max-w-7xl gap-14 px-4 py-20 sm:px-6 md:grid-cols-[1.02fr_0.98fr] md:items-center lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(34,197,94,0.9)]" />
              AI that delivers. Not just predicts.
            </p>

            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-[4.65rem]">
              Transform your operations onto <span className="text-blue-300">AI rails.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              ADYNTIQ identifies, builds, and implements practical AI solutions that automate workflows, connect data, and improve operational performance.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
              >
                Book an AI consultation <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="#services"
                className="rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Explore our services
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.12em] text-white/60 sm:grid-cols-4">
              <span>Strategy</span>
              <span>Automation</span>
              <span>AI agents</span>
              <span>Integration</span>
            </div>
          </div>

          <StructuredGraphic />
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">The execution gap</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-5xl">
              AI ambition is easy. Operational execution is hard.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-ink/65">
              The real barrier is not access to AI. It is turning fragmented work, systems, and knowledge into a solution people can trust and use.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {challenges.map(([number, title, description]) => (
              <article key={title} className="group rounded-3xl border border-black/[0.06] bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-brand">{number}</span>
                  <span className="h-2 w-2 rounded-full bg-black/10 transition group-hover:bg-accent" />
                </div>
                <h3 className="mt-10 text-xl font-semibold tracking-tight text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-5xl">
                From AI opportunity to operating advantage.
              </h2>
            </div>
            <p className="text-lg leading-8 text-ink/60 lg:pb-1">
              Strategy, engineering, integration, and adoption—connected in one practical delivery model.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-black/[0.06] bg-black/[0.06] md:grid-cols-2 lg:grid-cols-3">
            {services.map(([number, title, description, outcome]) => (
              <article key={title} className="group bg-white p-7 transition hover:bg-mist/60 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-brand">{number}</span>
                  <span aria-hidden="true" className="text-xl text-ink/20 transition group-hover:translate-x-1 group-hover:text-brand">↗</span>
                </div>
                <h3 className="mt-12 text-2xl font-semibold tracking-tight text-ink">{title}</h3>
                <p className="mt-4 min-h-24 text-sm leading-6 text-ink/60">{description}</p>
                <p className="mt-6 border-t border-black/[0.06] pt-5 text-xs font-bold uppercase tracking-[0.14em] text-ink/60">
                  {outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 bg-slate py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow !text-blue-300">How ADYNTIQ works</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
              A clear path from idea to adoption.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/60">
              We reduce risk by proving value in the workflow, then scaling what performs.
            </p>
          </div>

          <div className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-brand via-blue-400/50 to-transparent lg:block" />
            {steps.map(([number, title, description]) => (
              <article key={title} className="relative">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/40 bg-slate text-xs font-bold text-blue-300 shadow-[0_0_0_7px_#101827]">
                  {number}
                </div>
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="scroll-mt-24 bg-[#f7f9fc] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">Where AI goes to work</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-5xl">
                Practical use cases. Visible operational impact.
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink/60">
                Start with one costly bottleneck. Build the right workflow around it. Measure the result.
              </p>
              <Link href="/contact" className="-mx-3 mt-8 inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-bold text-brand hover:text-brandDark">
                Discuss your workflow <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {useCases.map(([title, description], index) => (
                <article key={title} className="rounded-3xl border border-black/[0.06] bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mist text-sm font-bold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-brand px-7 py-10 text-white shadow-[0_30px_90px_rgba(37,99,235,0.22)] sm:px-10 sm:py-14 lg:px-14">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Why ADYNTIQ</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
                  Business-first by design.
                </h2>
                <p className="mt-6 max-w-md text-base leading-7 text-white/70">
                  The goal is not to “add AI.” It is to create a better way for your business to operate.
                </p>
              </div>

              <div className="grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2">
                {principles.map(([title, description]) => (
                  <article key={title} className="bg-brand p-6 sm:p-7">
                    <div className="h-px w-8 bg-accent" />
                    <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
