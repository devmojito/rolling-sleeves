import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="w-full border-t-2 border-gold bg-gradient-to-b from-surface-container-high via-surface-container to-surface-container-lowest text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 grid grid-cols-1 md:grid-cols-4 gap-12 font-body text-sm">
        <div className="md:col-span-1">
          <div className="font-headline font-bold text-white text-2xl mb-6">
            Rolling Sleeves
          </div>
          <p className="text-cream/70 leading-relaxed mb-8">
            Forging excellence in the global hospitality industry through
            operational precision and creative strategy.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-8">
            Navigation
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/about"
                className="text-cream/70 hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-cream/70 hover:text-white transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="text-cream/70 hover:text-white transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-cream/70 hover:text-white transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-8">
            Company
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="text-cream/70 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-cream/70 hover:text-white transition-colors"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-cream/70 hover:text-white transition-colors"
              >
                Careers
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-cream/70 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-8">
            Newsletter
          </h4>
          <p className="text-cream/70 mb-6">
            Stay ahead with industry insights.
          </p>
          <form className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Email Address"
              className="text-white placeholder:text-cream/40"
            />
            <Button type="submit" size="sm" className="py-3">
              Subscribe
            </Button>
          </form>
        </div>

        <div className="md:col-span-4 pt-12 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-6">
          <div className="text-cream/70">
            © {new Date().getFullYear()} Rolling Sleeves. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-cream/70 hover:text-gold transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-cream/70 hover:text-gold transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-cream/70 hover:text-gold transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
