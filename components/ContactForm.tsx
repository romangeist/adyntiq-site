"use client";

import { useState } from "react";

const inputClassName =
  "rounded-2xl border border-black/10 px-4 py-3 text-ink outline-none transition placeholder:text-ink/35 focus:border-brand focus:ring-4 focus:ring-brand/10";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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
          message: formData.get("message")
        })
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={status === "sending"}
      className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-soft md:p-8"
    >
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
            placeholder="you@company.com"
            className={inputClassName}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="contact-company" className="text-sm font-semibold text-ink">
            Company <span className="font-normal text-ink/45">(optional)</span>
          </label>
          <input
            id="contact-company"
            name="company"
            autoComplete="organization"
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
            placeholder="Describe the process you want to improve."
            className={`min-h-36 ${inputClassName}`}
          />
        </div>

        <p className="text-xs leading-5 text-ink/45">
          Fields marked with <span aria-hidden="true">*</span> are required.
        </p>

        <button
          type="submit"
          disabled={status === "sending"}
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
  );
}
