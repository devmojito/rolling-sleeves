import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { services } from "@/lib/services";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const linkClass = "text-cream/65 hover:text-cream transition-colors";

export function SiteFooter() {
  const wa = whatsappLink();

  return (
    <footer className="w-full border-t border-cream/10 bg-surface-container-lowest text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 grid grid-cols-1 md:grid-cols-4 gap-12 font-body text-sm">
        <div>
          <SiteLogo linkClassName="mb-6" />
          <p className="text-cream/65 leading-relaxed">
            {siteConfig.tagline} Hands-on restaurant consultancy from concept to
            a restaurant that runs well.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-cream/90 font-semibold uppercase tracking-[0.22em] text-xs mb-6">
            Services
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className={linkClass}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-cream/90 font-semibold uppercase tracking-[0.22em] text-xs mb-6">
            Contact
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href={siteConfig.ctaHref} className={linkClass}>
                {siteConfig.ctaLabel}
              </Link>
            </li>
            {wa && (
              <li>
                <a href={wa} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  WhatsApp
                </a>
              </li>
            )}
            <li>
              <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                {siteConfig.email}
              </a>
            </li>
            <li className="text-cream/65">{siteConfig.location}</li>
          </ul>
        </div>

        <div className="md:col-span-4 pt-10 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-cream/50">
          <div>© {new Date().getFullYear()} Rolling Sleeves. All rights reserved.</div>
          <nav className="flex gap-6">
            <Link href="/about" className={linkClass}>
              About
            </Link>
            <Link href="/services" className={linkClass}>
              Services
            </Link>
            <Link href="/insights" className={linkClass}>
              Insights
            </Link>
            <Link href="/contact" className={linkClass}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
