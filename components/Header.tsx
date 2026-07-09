import Link from "next/link";
import { Logo } from "@/components/Logo";

const links = [
  ["/services", "Services"],
  ["/about", "About"],
  ["/contact", "Contact"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="ADYNTIQ"
        >
          <Logo />
          <div>
            <div className="text-xl font-bold tracking-tight text-slate-900">
              ADYNTIQ
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
              AI Consulting
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold tracking-wide text-slate-600 transition hover:text-slate-900"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-slate-700"
        >
          Schedule Consultation
        </Link>

      </div>
    </header>
  );
}