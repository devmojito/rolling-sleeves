"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MaterialIcon } from "@/components/material-icon";
import { SiteLogo } from "@/components/site-logo";
import { BookCallDialog } from "@/components/book-call-dialog";

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
  const [bookCallOpen, setBookCallOpen] = useState(false);

  const openBookCall = () => {
    setMobileOpen(false);
    setBookCallOpen(true);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-md border-b border-white/5">
      <BookCallDialog open={bookCallOpen} onOpenChange={setBookCallOpen} />
      <div className="flex justify-between items-center px-6 md:px-8 py-6 font-headline tracking-tight">
        <SiteLogo
          priority
          onClick={() => setMobileOpen(false)}
        />
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
        <Button
          type="button"
          size="sm"
          className="hidden md:inline-flex"
          onClick={openBookCall}
        >
          Book a Free Call
          <MaterialIcon name="arrow_forward" className="text-sm" />
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
          <Button
            type="button"
            className="mt-2 w-full justify-center"
            onClick={openBookCall}
          >
            Book a Free Call
            <MaterialIcon name="arrow_forward" className="text-sm" />
          </Button>
        </div>
      )}
    </header>
  );
}
