"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MaterialIcon } from "@/components/material-icon";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-md border-b border-white/5">
      <div className="flex justify-between items-center px-6 md:px-8 py-6 font-headline tracking-tight">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tighter text-white uppercase"
          onClick={() => setMobileOpen(false)}
        >
          Rolling Sleeves
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-bold">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors duration-300",
                isActive(item.href)
                  ? "text-gold border-b-2 border-gold pb-1"
                  : "text-cream hover:text-gold"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button size="sm" asChild className="hidden md:inline-flex">
          <Link href="/contact">
            Book a Free Call
            <MaterialIcon name="arrow_forward" className="text-sm" />
          </Link>
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
        <div className="md:hidden border-t border-white/10 bg-ink px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "text-sm uppercase tracking-widest font-bold py-2 border-b border-white/5",
                isActive(item.href) ? "text-gold" : "text-cream"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full justify-center">
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Book a Free Call
              <MaterialIcon name="arrow_forward" className="text-sm" />
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
