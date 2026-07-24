const systems = ["CRM", "ERP", "Docs"];
const outcomes = ["Faster cycles", "Fewer errors", "Clear insight"];

export function StructuredGraphic() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[620px] rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-[0_35px_100px_rgba(0,0,0,0.35)] backdrop-blur sm:p-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">AI operations architecture</p>
      </div>

      <div className="relative grid gap-4 py-6 sm:grid-cols-[0.8fr_1.15fr_0.9fr] sm:items-center sm:gap-3">
        <div className="relative z-10 space-y-3">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Business systems</p>
          {systems.map((system) => (
            <div key={system} className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-xs font-semibold text-white/65">
              {system}
            </div>
          ))}
        </div>

        <div className="relative z-10 rounded-2xl border border-blue-300/25 bg-gradient-to-br from-brand/80 to-blue-900/80 p-5 shadow-[0_0_60px_rgba(37,99,235,0.25)]">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-100/70">ADYNTIQ AI layer</p>
            <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-green-200">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Live
            </span>
          </div>
          <div className="mt-6 grid gap-2">
            {["Reason", "Automate", "Act"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-[10px] font-bold text-blue-100">{index + 1}</span>
                <span className="text-xs font-semibold text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 space-y-3">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Outcomes</p>
          {outcomes.map((outcome) => (
            <div key={outcome} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 text-[11px] font-semibold text-white/65">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {outcome}
            </div>
          ))}
        </div>

        <div className="absolute left-[21%] right-[20%] top-1/2 hidden h-px bg-gradient-to-r from-blue-300/10 via-blue-300/60 to-accent/50 sm:block" />
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
        {["Connected", "Controlled", "Measurable"].map((item) => (
          <p key={item} className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">{item}</p>
        ))}
      </div>
    </div>
  );
}
