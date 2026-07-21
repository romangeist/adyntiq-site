import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3"><Logo /><span className="font-bold">ADYNTIQ</span></div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-ink/65">AI that delivers. Not just predicts. Practical AI strategy, automation, agents, and implementation for growing businesses.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3 md:col-span-2 md:justify-self-end">
          <div className="grid gap-3">
            <p className="font-semibold">Company</p>
            <Link className="text-ink/65 hover:text-ink" href="/about">About</Link>
            <Link className="text-ink/65 hover:text-ink" href="/#services">Services</Link>
            <Link className="text-ink/65 hover:text-ink" href="/contact">Contact</Link>
          </div>
          <div className="grid gap-3">
            <p className="font-semibold">Legal</p>
            <Link className="text-ink/65 hover:text-ink" href="/privacy">Privacy</Link>
            <Link className="text-ink/65 hover:text-ink" href="/terms">Terms</Link>
          </div>
          <div className="grid gap-3">
            <p className="font-semibold">Contact</p>
            <a className="text-ink/65 hover:text-ink" href="mailto:sales@adyntiq.com">sales@adyntiq.com</a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-8 text-xs text-ink/50 sm:px-6 lg:px-8">© {new Date().getFullYear()} ADYNTIQ. All rights reserved.</div>
    </footer>
  );
}
