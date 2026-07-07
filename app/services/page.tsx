import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";

const rows = [
  ["AI Strategy", "Use-case discovery, ROI sizing, roadmap, governance model, build-vs-buy decisions."],
  ["Workflow Automation", "Automate intake, routing, research, document generation, approvals, reporting, and QA."],
  ["Custom AI Agents", "Role-specific agents for operations, sales, support, finance, research, and knowledge work."],
  ["Data Integration", "Connect CRMs, ERPs, docs, spreadsheets, APIs, databases, and internal knowledge sources."],
  ["Implementation", "Prototype, test, secure, deploy, train users, and measure adoption."],
  ["AI Operations Transformation", "Redesign operating models so teams can run AI-enabled work reliably."]
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-white via-mist to-blue-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Services</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">AI professional services for teams that need execution.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/65">We help SMB and mid-market companies identify, build, integrate, and operate AI workflows that actually change how work gets done.</p>
        </div>
      </section>
      <Section eyebrow="What we deliver" title="The full AI operations stack." subtitle="No fake magic. No endless strategy deck. Clear operating outcomes.">
        <div className="grid gap-5 md:grid-cols-2">
          {rows.map(([title, desc]) => (
            <div key={title} className="rounded-3xl border border-black/5 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-ink/65">{desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTA />
    </main>
  );
}
