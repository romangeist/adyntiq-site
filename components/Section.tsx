export function Section({ eyebrow, title, subtitle, children, className = "" }: { eyebrow?: string; title: string; subtitle?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">{title}</h2>
          {subtitle && <p className="mt-5 text-lg leading-8 text-ink/65">{subtitle}</p>}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
