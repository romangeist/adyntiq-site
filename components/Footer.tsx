import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  const footerLinkClassName =
    "inline-flex min-h-8 items-center text-ink/65 hover:text-ink";

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3"><Logo idPrefix="footer-logo" /><span className="font-bold">ADYNTIQ</span></div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-ink/65">AI that delivers. Not just predicts. Practical AI strategy, automation, agents, and implementation for growing businesses.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3 md:col-span-2 md:justify-self-end">
          <div className="grid gap-3">
            <h2 className="font-semibold">Company</h2>
            <Link className={footerLinkClassName} href="/about">About</Link>
            <Link className={footerLinkClassName} href="/#services">Services</Link>
            <Link className={footerLinkClassName} href="/contact">Contact</Link>
          </div>
          <div className="grid gap-3">
            <h2 className="font-semibold">Legal</h2>
            <Link className={footerLinkClassName} href="/privacy">Privacy</Link>
            <Link className={footerLinkClassName} href="/terms">Terms</Link>
          </div>
          <div className="grid gap-3">
            <h2 className="font-semibold">Contact</h2>
            <a className={footerLinkClassName} href="mailto:sales@adyntiq.com">sales@adyntiq.com</a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-8 text-xs text-ink/60 sm:px-6 lg:px-8">© {new Date().getFullYear()} ADYNTIQ. All rights reserved.</div>
    </footer>
  );
}
