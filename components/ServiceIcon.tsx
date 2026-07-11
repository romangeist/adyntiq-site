type ServiceIconName =
    | "strategy"
    | "automation"
    | "agents"
    | "data"
    | "implementation"
    | "operations";

type ServiceIconProps = {
    name: ServiceIconName;
    className?: string;
};

const iconPaths: Record<ServiceIconName, React.ReactNode> = {
    strategy: (
        <>
            <circle cx="12" cy="12" r="7" />
            <circle cx="12" cy="12" r="2.5" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
            <path d="m16 8 3-3M5 19l3-3" />
        </>
    ),

    automation: (
        <>
            <path d="M4 7h10" />
            <path d="m11 4 3 3-3 3" />
            <path d="M20 17H10" />
            <path d="m13 14-3 3 3 3" />
            <rect x="4" y="13" width="4" height="8" rx="1.5" />
            <rect x="16" y="3" width="4" height="8" rx="1.5" />
        </>
    ),

    agents: (
        <>
            <rect x="5" y="7" width="14" height="11" rx="3" />
            <path d="M9 11h.01M15 11h.01" />
            <path d="M9 15h6" />
            <path d="M12 3v4" />
            <path d="M9 3h6" />
        </>
    ),

    data: (
        <>
            <ellipse cx="12" cy="5" rx="7" ry="3" />
            <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
            <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </>
    ),

    implementation: (
        <>
            <path d="M4 17 17 4l3 3L7 20H4v-3Z" />
            <path d="m14 7 3 3" />
            <path d="M4 4h6v6H4z" />
        </>
    ),

    operations: (
        <>
            <path d="M4 18V9" />
            <path d="M10 18V5" />
            <path d="M16 18v-7" />
            <path d="M3 18h18" />
            <path d="m5 8 5-4 6 5 4-3" />
        </>
    )
};

export function ServiceIcon({
    name,
    className = ""
}: ServiceIconProps) {
    return (
        <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/15 to-accent/15 text-brand ${className}`}
        >
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                {iconPaths[name]}
            </svg>
        </div>
    );
}