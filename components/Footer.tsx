import Link from "next/link";
import { Logo } from "@/components/Logo";

const services = [
  "AI Strategy",
  "Workflow Automation",
  "Custom AI Agents",
  "Data Integration",
  "Implementation"
];

const industries = [
  "Financial Services",
  "Healthcare",
  "Retail",
  "Manufacturing",
  "Professional Services",
  "Technology"
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <div className="font-bold tracking-tight">ADYNTIQ</div>
              <div className="text-xs uppercase tracking-[0.25em] text-white/45">
                AI Consulting
              </div>
            </div>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
            AI that delivers. Not just predicts. We help SMB and mid-market
            organizations transform operations through practical AI strategy,
            automation, agents, and data integration.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-white/90"
          >
            Schedule Consultation
          </Link>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-sm font-bold text-white">Company</p>
            <div className="mt-4 grid gap-3 text-sm">
              <Link className="text-white/60 hover:text-white" href="/">
                Home
              </Link>
              <Link className="text-white/60 hover:text-white" href="/services">
                Services
              </Link>
              <Link className="text-white/60 hover:text-white" href="/about">
                About
              </Link>
              <Link className="text-white/60 hover:text-white" href="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-white">Services</p>
            <div className="mt-4 grid gap-3 text-sm">
              {services.map((item) => (
                <span key={item} className="text-white/60">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-white">Industries</p>
            <div className="mt-4 grid gap-3 text-sm">
              {industries.map((item) => (
                <span key={item} className="text-white/60">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm font-bold text-white">Contact</p>
              <a
                className="mt-4 inline-block text-sm text-white/60 hover:text-white"
                href="mailto:sales@adyntiq.com"
              >
                sales@adyntiq.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} ADYNTIQ. All rights reserved.</p>
          <p>Professional AI services for practical business transformation.</p>
        </div>
      </div>
    </footer>
  );
}