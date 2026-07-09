"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      need: formData.get("need"),
      message: formData.get("message")
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <main className="bg-gradient-to-br from-white via-mist to-blue-100 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Contact sales
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
            Let’s put AI to work.
          </h1>

          <p className="mt-6 text-lg leading-8 text-ink/70">
            Tell us what process you want to improve. We’ll help identify whether it is a real AI opportunity or a waste of time.
          </p>

          <div className="mt-8 rounded-3xl bg-white/70 p-6 shadow-sm backdrop-blur">
            <p className="text-sm font-bold text-ink">Prefer email?</p>
            <a className="mt-2 inline-block text-sm font-bold text-brand hover:underline" href="mailto:sales@adyntiq.com">
              sales@adyntiq.com
            </a>
            <p className="mt-4 text-sm leading-6 text-ink/60">
              Best for SMB and mid-market teams looking at AI strategy, automation, agents, data integration, or implementation support.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-soft md:p-8">
          <div className="grid gap-4">
            <input required name="name" placeholder="Name" className="rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-brand" />
            <input required type="email" name="email" placeholder="Work email" className="rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-brand" />
            <input name="company" placeholder="Company" className="rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-brand" />

            <select name="need" className="rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-brand">
              <option>What do you need?</option>
              <option>AI strategy</option>
              <option>Workflow automation</option>
              <option>Custom AI agents</option>
              <option>Data integration</option>
              <option>Implementation</option>
              <option>Not sure yet</option>
            </select>

            <textarea required name="message" placeholder="Describe the workflow or operational problem." className="min-h-36 rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-brand" />

            <button disabled={status === "sending"} className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-soft disabled:opacity-60">
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "success" && (
              <p className="rounded-2xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                Message sent. We’ll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                Something went wrong. Email us directly at sales@adyntiq.com.
              </p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}