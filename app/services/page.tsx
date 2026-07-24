import { ServiceIcon } from "@/components/ServiceIcon";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { TrackedContactLink } from "@/components/TrackedContactLink";

const description =
  "AI strategy, workflow automation, custom AI agents, data integration, implementation, and operations transformation for SMB and mid-market teams.";

export const metadata: Metadata = {
  title: "AI Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Services | ADYNTIQ",
    description,
    url: "https://adyntiq.com/services"
  },
  twitter: {
    title: "AI Services | ADYNTIQ",
    description
  }
};

const services = [
  {
    icon: "strategy",
    title: "AI Strategy & Roadmaps",
    problem: "Most companies know AI matters but do not know where to start.",
    solution: "We identify high-value use cases, size ROI, prioritize initiatives, and build a practical roadmap.",
    deliverables: ["Use-case discovery", "ROI prioritization", "AI roadmap", "Build-vs-buy guidance"]
  },
  {
    icon: "automation",
    title: "Workflow Automation",
    problem: "Teams waste hours on repetitive tasks, manual handoffs, and status chasing.",
    solution: "We design AI-enabled workflows that automate intake, routing, approvals, reporting, and QA.",
    deliverables: ["Process mapping", "Automation design", "Workflow implementation", "Performance tracking"]
  },
  {
    icon: "agents",
    title: "Custom AI Agents",
    problem: "Generic chatbots do not understand your business process.",
    solution: "We build role-specific AI agents for operations, sales, support, research, finance, and knowledge work.",
    deliverables: ["Agent design", "Knowledge integration", "Human-in-the-loop controls", "Deployment support"]
  },
  {
    icon: "data",
    title: "Data Integration",
    problem: "AI fails when business data is scattered across systems, documents, and spreadsheets.",
    solution: "We connect CRMs, ERPs, documents, databases, APIs, and internal knowledge sources.",
    deliverables: ["System mapping", "Data cleanup", "API integration", "Knowledge architecture"]
  },
  {
    icon: "implementation",
    title: "Implementation",
    problem: "A prototype is not a business result.",
    solution: "We help move AI solutions from concept to production with testing, governance, rollout, and training.",
    deliverables: ["Prototype build", "Testing plan", "Production rollout", "User training"]
  },
  {
    icon: "operations",
    title: "AI Operations Transformation",
    problem: "AI tools alone do not change how a company operates.",
    solution: "We redesign operating models so teams can run AI-enabled work reliably and responsibly.",
    deliverables: ["Operating model design", "Governance model", "Adoption plan", "Continuous improvement"]
  }
] as const;

export default function ServicesPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-mist to-blue-100 py-20 md:py-28">
        <div className="absolute right-[-10rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Services
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
            AI professional services for teams that need execution.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70">
            ADYNTIQ helps SMB and mid-market organizations identify, build,
            integrate, and operate practical AI solutions that improve how work gets done.
          </p>
          <div className="mt-8">
            <TrackedContactLink
              placement="services-hero"
              className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              Contact sales
            </TrackedContactLink>
          </div>
        </div>
      </section>

      <Section
        eyebrow="What We Deliver"
        title="The full AI operations stack."
        subtitle="No fake magic. No endless strategy deck. Clear services tied to real operating outcomes."
      >
        <div className="grid gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="grid gap-8 rounded-3xl border border-black/5 bg-white p-8 shadow-sm md:grid-cols-[1fr_1.5fr]"
            >
              <div>
                <ServiceIcon name={service.icon} />
                <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-ink/60">
                    Problem
                  </p>
                  <p className="mt-3 leading-7 text-ink/70">{service.problem}</p>

                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-ink/60">
                    Solution
                  </p>
                  <p className="mt-3 leading-7 text-ink/70">{service.solution}</p>
                </div>

                <div className="rounded-3xl bg-mist/70 p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand">
                    Deliverables
                  </p>
                  <ul className="mt-4 space-y-3">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-ink/70">
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </main>
  );
}
