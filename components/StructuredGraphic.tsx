const systems = ["CRM", "ERP", "Documents", "Spreadsheets"];
const capabilities = [
  "AI Strategy",
  "Workflow Automation",
  "Custom Agents",
  "Data Integration"
];
const outcomes = ["Faster execution", "Better decisions", "Controlled scale"];

export function StructuredGraphic() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#eef5ff] via-white to-[#ecfbf6] p-6 shadow-soft">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              AI Operations Architecture
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-ink/60">
              Connect systems, apply intelligence, and improve execution.
            </p>
          </div>

          <div className="rounded-full border border-black/5 bg-white/80 px-3 py-2 text-xs font-semibold text-ink/55 shadow-sm">
            ADYNTIQ
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.8fr_1.4fr]">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/40">
              Business systems
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {systems.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/90 px-4 py-3 shadow-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10">
                    <div
                      className={`h-3.5 w-3.5 rounded-sm ${index % 2 === 0 ? "bg-brand" : "bg-accent"
                        }`}
                    />
                  </div>
                  <span className="text-sm font-semibold text-ink/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                  Intelligence layer
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  ADYNTIQ AI Operations
                </h3>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-accent">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 16.5 10 7l2.2 4.1L19 6.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 6.5h3v3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <div className="h-1.5 w-8 rounded-full bg-gradient-to-r from-brand to-accent" />
                  <p className="mt-3 text-sm font-semibold text-white/85">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white/55">
                  Controlled execution
                </span>
                <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-bold text-accent">
                  Active
                </span>
              </div>

              <div className="mt-4 grid grid-cols-5 gap-2">
                {[70, 88, 62, 94, 78].map((height, index) => (
                  <div
                    key={index}
                    className="flex h-14 items-end rounded-lg bg-white/5 p-1"
                  >
                    <div
                      className="w-full rounded-md bg-gradient-to-t from-brand to-accent"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/40">
            Business outcomes
          </p>

          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/5 bg-white/90 p-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/12">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-accent"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="m7 12 3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <span className="text-sm font-semibold text-ink/75">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-black/5 pt-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-ink/45">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Secure, governed, and measurable
          </div>

          <div className="text-xs text-ink/40">
            Strategy → Build → Integrate → Operate
          </div>
        </div>
      </div>
    </div>
  );
}