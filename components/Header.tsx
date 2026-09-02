"use client";

import { useRef } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { TrackedContactLink } from "@/components/TrackedContactLink";

const links = [
  ["/services", "Services"],
  ["/#use-cases", "Solutions"],
  ["/#process", "How it works"],
  ["/case-studies/production-inquiry-workflow", "Case study"],
  ["/about", "About"],
] as const;

export function Header() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  function closeMobileMenu() {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/95 md:bg-white/90 md:backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="ADYNTIQ home">
          <Logo className="h-9 w-9" idPrefix="header-logo" />
          <span className="text-lg font-bold tracking-[-0.02em] text-ink">ADYNTIQ</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <nav aria-label="Main navigation" className="flex items-center gap-6">
            {links.map(([href, label]) => (
              <Link key={href} href={href} className="text-sm font-semibold text-ink/60 transition hover:text-ink">
                {label}
              </Link>
            ))}
          </nav>

          <TrackedContactLink
            placement="header-desktop"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand hover:shadow-lg"
          >
            Book a consultation
          </TrackedContactLink>
        </div>

        <details ref={mobileMenuRef} className="group relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-mist focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/15 [&::-webkit-details-marker]:hidden">
            Menu
            <span aria-hidden="true" className="relative h-4 w-4">
              <span className="absolute left-0 top-[5px] h-px w-4 bg-current transition group-open:translate-y-[3px] group-open:rotate-45" />
              <span className="absolute bottom-[5px] left-0 h-px w-4 bg-current transition group-open:-translate-y-[3px] group-open:-rotate-45" />
            </span>
          </summary>

          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-72 overflow-hidden rounded-3xl border border-black/[0.07] bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
            <nav aria-label="Mobile navigation" className="grid">
              {links.map(([href, label]) => (
                <Link key={href} href={href} onClick={closeMobileMenu} className="rounded-2xl px-4 py-3 text-sm font-semibold text-ink/70 transition hover:bg-mist hover:text-ink">
                  {label}
                </Link>
              ))}
              <TrackedContactLink placement="header-mobile" onClick={closeMobileMenu} className="mt-2 rounded-2xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand">
                Book a consultation
              </TrackedContactLink>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
