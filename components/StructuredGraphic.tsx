export function StructuredGraphic() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-mist via-white to-blue-100 p-6 shadow-soft">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
      <div className="relative grid h-full grid-cols-3 gap-4 pt-6">
        {["Strategy", "Data", "Agents", "Workflow", "Integration", "Ops"].map((item, i) => (
          <div key={item} className={`rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur ${i === 1 || i === 4 ? "translate-y-10" : ""}`}>
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-brand to-accent" />
            <p className="mt-4 text-sm font-semibold text-ink">{item}</p>
            <div className="mt-3 h-2 w-20 rounded-full bg-ink/10" />
            <div className="mt-2 h-2 w-14 rounded-full bg-ink/10" />
          </div>
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      <div className="absolute left-1/2 top-[58%] h-px w-[55%] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </div>
  );
}
