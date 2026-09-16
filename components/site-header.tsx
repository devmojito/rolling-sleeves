"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MaterialIcon } from "@/components/material-icon";
import { SiteLogo } from "@/components/site-logo";
import { siteConfig } from "@/lib/site-config";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-md border-b border-cream/10">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        <SiteLogo priority onClick={() => setMobileOpen(false)} />
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.22em] font-semibold">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors duration-300 pb-1 border-b",
                isActive(item.href)
                  ? "text-cream border-cream/60"
                  : "text-cream/65 border-transparent hover:text-cream"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild size="sm" className="hidden md:inline-flex">
          <Link href={siteConfig.ctaHref}>{siteConfig.ctaLabel}</Link>
        </Button>
        <button
          className="md:hidden text-cream p-2 -mr-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <MaterialIcon name={mobileOpen ? "close" : "menu"} className="text-3xl" />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-cream/10 bg-ink px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "text-xs uppercase tracking-[0.22em] font-semibold py-2 border-b border-cream/5",
                isActive(item.href) ? "text-cream" : "text-cream/65"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full justify-center">
            <Link href={siteConfig.ctaHref} onClick={() => setMobileOpen(false)}>
              {siteConfig.ctaLabel}
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
