"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type TrackedContactLinkProps = {
  children: ReactNode;
  className?: string;
  placement: string;
  onClick?: () => void;
};

export function TrackedContactLink({
  children,
  className,
  placement,
  onClick
}: TrackedContactLinkProps) {
  const pathname = usePathname();

  function handleClick() {
    track("Contact CTA Clicked", {
      location: `${pathname}:${placement}`
    });
    onClick?.();
  }

  return (
    <Link href="/contact" className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
