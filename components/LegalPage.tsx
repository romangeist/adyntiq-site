import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  summary: string;
  effectiveDate: string;
  children: ReactNode;
};

export function LegalPage({
  title,
  summary,
  effectiveDate,
  children
}: LegalPageProps) {
  return (
    <main className="bg-gradient-to-b from-mist/70 via-white to-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-black/[0.06] bg-white p-7 shadow-soft sm:p-10 md:p-14">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/65">
            {summary}
          </p>
          <p className="mt-4 text-sm font-semibold text-ink/50">
            Effective date: {effectiveDate}
          </p>

          <div className="mt-12 space-y-10 text-base leading-8 text-ink/70 [&_a]:font-semibold [&_a]:text-brand [&_a]:underline [&_a]:decoration-brand/25 [&_a]:underline-offset-4 [&_a]:transition [&_a:hover]:decoration-brand [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink [&_li]:pl-1 [&_section]:space-y-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
