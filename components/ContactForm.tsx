"use client";

import Script from "next/script";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";

type TurnstileOptions = {
  sitekey: string;
  action: string;
  theme: "light";
  size: "flexible";
  callback: (token: string) => void;
  "error-callback": () => void;
  "expired-callback": () => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: TurnstileOptions) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

const inputClassName =
  "rounded-2xl border border-black/10 px-4 py-3 text-ink outline-none transition placeholder:text-ink/60 focus:border-brand focus:ring-4 focus:ring-brand/20";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | undefined>(undefined);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const turnstileEnabled = Boolean(turnstileSiteKey);

  const resetTurnstile = useCallback(() => {
    setTurnstileToken("");
    if (turnstileWidgetIdRef.current && window.turnstile) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
  }, []);

  const renderTurnstile = useCallback(() => {
    if (
      !turnstileSiteKey ||
      !window.turnstile ||
      !turnstileContainerRef.current ||
      turnstileWidgetIdRef.current
    ) {
      return;
    }

    turnstileWidgetIdRef.current = window.turnstile.render(
      turnstileContainerRef.current,
      {
        sitekey: turnstileSiteKey,
        action: "contact",
        theme: "light",
        size: "flexible",
        callback: setTurnstileToken,
        "error-callback": () => setTurnstileToken(""),
        "expired-callback": () => setTurnstileToken("")
      }
    );
  }, [turnstileSiteKey]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          need: formData.get("need"),
          message: formData.get("message"),
          website: formData.get("website"),
          turnstileToken
        })
      });

      if (!response.ok) {
        resetTurnstile();
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      resetTurnstile();
      router.push("/contact/thank-you");
    } catch {
      resetTurnstile();
      setStatus("error");
    }
  }

  return (
    <>
      {turnstileEnabled && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={renderTurnstile}
        />
      )}

      <form
        onSubmit={handleSubmit}
        aria-busy={status === "sending"}
        className="relative rounded-[2rem] border border-black/5 bg-white p-6 shadow-soft md:p-8"
      >
        <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true" inert>
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="contact-name" className="text-sm font-semibold text-ink">
            Name <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            required
            name="name"
            autoComplete="name"
            maxLength={100}
            placeholder="Your name"
            className={inputClassName}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="contact-email" className="text-sm font-semibold text-ink">
            Work email <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            required
            type="email"
            name="email"
            autoComplete="email"
            maxLength={254}
            placeholder="you@company.com"
            className={inputClassName}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="contact-company" className="text-sm font-semibold text-ink">
            Company <span className="font-normal text-ink/60">(optional)</span>
          </label>
          <input
            id="contact-company"
            name="company"
            autoComplete="organization"
            maxLength={200}
            placeholder="Company name"
            className={inputClassName}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="contact-need" className="text-sm font-semibold text-ink">
            What can we help with? <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <select id="contact-need" required name="need" defaultValue="" className={inputClassName}>
            <option value="" disabled>Select a service</option>
            <option>AI strategy</option>
            <option>Workflow automation</option>
            <option>Custom AI agents</option>
            <option>Data integration</option>
            <option>Implementation</option>
            <option>Not sure yet</option>
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="contact-message" className="text-sm font-semibold text-ink">
            Workflow or operational problem <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            name="message"
            maxLength={5000}
            placeholder="Describe the process you want to improve."
            className={`min-h-36 ${inputClassName}`}
          />
        </div>

        <div className="space-y-1 text-xs leading-5 text-ink/60">
          <p>Fields marked with <span aria-hidden="true">*</span> are required.</p>
          <p>
            By sending this form, you acknowledge our{" "}
            <Link className="inline-flex min-h-6 items-center font-semibold text-brand hover:underline" href="/privacy">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link className="inline-flex min-h-6 items-center font-semibold text-brand hover:underline" href="/terms">
              Terms of Use
            </Link>
            .
          </p>
        </div>

        {turnstileEnabled && (
          <div className="grid gap-2">
            <div ref={turnstileContainerRef} />
            <p id="contact-security-note" className="text-xs leading-5 text-ink/60">
              Protected from automated submissions by Cloudflare Turnstile.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending" || (turnstileEnabled && !turnstileToken)}
          aria-describedby={turnstileEnabled ? "contact-security-note" : undefined}
          className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25 disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>

        {status === "success" && (
          <p role="status" aria-live="polite" className="rounded-2xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
            Message sent. We&apos;ll get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            Something went wrong. Email us directly at sales@adyntiq.com.
          </p>
        )}
        </div>
      </form>
    </>
  );
}
