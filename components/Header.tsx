import Link from "next/link";
import { Logo } from "@/components/Logo";

const links = [
  ["/services", "Services"],
  ["/about", "About"],
  ["/contact", "Contact"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="ADYNTIQ home">
          <Logo />
          <span className="text-lg font-bold tracking-tight">ADYNTIQ</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="text-sm font-medium text-ink/70 hover:text-ink">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-soft">
          Contact sales
        </Link>
      </div>
    </header>
  );
}
