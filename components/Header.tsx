import Link from "next/link";
import { Logo } from "@/components/Logo";

const links = [
  ["/#services", "Services"],
  ["/#use-cases", "Solutions"],
  ["/#process", "How it works"],
  ["/about", "About"],
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="ADYNTIQ home">
          <Logo className="h-9 w-9" />
          <span className="text-lg font-bold tracking-[-0.02em] text-ink">ADYNTIQ</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="text-sm font-semibold text-ink/60 transition hover:text-ink">
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand hover:shadow-lg"
        >
          <span className="sm:hidden">Let&apos;s talk</span>
          <span className="hidden sm:inline">Book a consultation</span>
        </Link>
      </div>
    </header>
  );
}
