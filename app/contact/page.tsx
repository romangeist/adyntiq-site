export default function ContactPage() {
  return (
    <main className="bg-gradient-to-br from-white via-mist to-blue-100 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Contact sales</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">Let’s put AI to work.</h1>
          <p className="mt-6 text-lg leading-8 text-ink/65">Tell us what process you want to improve. We’ll help identify whether it is a real AI opportunity or a waste of time.</p>
          <a className="mt-8 inline-block text-sm font-bold text-brand hover:underline" href="mailto:sales@adyntiq.com">sales@adyntiq.com</a>
        </div>
        <form action="/api/contact" method="POST" className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-soft md:p-8">
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
            </select>
            <textarea required name="message" placeholder="Describe the workflow or operational problem." className="min-h-36 rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-brand" />
            <button className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-soft">Send message</button>
          </div>
        </form>
      </div>
    </main>
  );
}
