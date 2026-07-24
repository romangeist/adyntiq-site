export function Logo({
  className = "h-9 w-9",
  idPrefix = "adyntiq-logo"
}: {
  className?: string;
  idPrefix?: string;
}) {
  const blueGradientId = `${idPrefix}-blue`;
  const greenGradientId = `${idPrefix}-green`;

  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={blueGradientId} x1="10" y1="8" x2="48" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#1E40AF" />
        </linearGradient>
        <linearGradient id={greenGradientId} x1="27" y1="22" x2="54" y2="47" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22C55E" />
          <stop offset="1" stopColor="#16A34A" />
        </linearGradient>
      </defs>
      <path d="M13.5 50.5 29.8 12.6c1-2.3 3.4-2.3 4.4 0l16.3 37.9c.7 1.7-.3 3.5-2.2 3.5H15.7c-1.9 0-2.9-1.8-2.2-3.5Z" fill={`url(#${blueGradientId})`} />
      <path d="M27.5 41.5c7.9-9.8 16.2-15 25.1-16.1-1.6 9.5-6.9 18.2-16.4 25.7-3.1 2.4-7.5-.4-6.6-4.2.3-1.4 1-3.1 2.1-5.1Z" fill={`url(#${greenGradientId})`} />
      <path d="M27.8 44.2 32 34.1l5.3 12.7h-8.1c-1.1 0-1.8-1.3-1.4-2.6Z" fill="white" opacity=".94" />
    </svg>
  );
}
