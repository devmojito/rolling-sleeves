import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";
import { MaterialIcon } from "@/components/material-icon";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Food & Beverage Consulting",
  description:
    "Concept creation, menu engineering, costing, kitchen flow, and operational audits for UAE hospitality.",
};

const included = [
  {
    title: "Concept Creation",
    blurb: "Developing unique culinary narratives tailored to target demographics.",
  },
  {
    title: "Menu Engineering",
    blurb: "Optimizing menu layout and item placement to maximize profitability.",
  },
  {
    title: "Costing & Pricing",
    blurb:
      "Rigorous financial modeling for ingredient costs and competitive pricing strategies.",
  },
  {
    title: "Kitchen Design & Flow",
    blurb: "Spatial planning for maximum operational efficiency and safety.",
  },
  {
    title: "Operational Audits",
    blurb:
      "Comprehensive review of existing F&B operations to identify bottlenecks.",
  },
  {
    title: "Supplier Sourcing",
    blurb:
      "Leveraging our network for premium ingredient procurement at competitive rates.",
  },
];

const audience = [
  {
    n: "01",
    title: "Opening New",
    blurb:
      "You are launching a new concept from scratch and need a bulletproof F&B strategy to ensure a successful, delay-free launch.",
  },
  {
    n: "02",
    title: "Menu Underperforming",
    blurb:
      "Your current menu isn't delivering the expected margins, or guest feedback indicates a disconnect in the culinary offering.",
  },
  {
    n: "03",
    title: "Scaling Up",
    blurb:
      "You are ready to expand your successful single unit into a multi-venue operation and need standardized, scalable systems.",
  },
  {
    n: "04",
    title: "Second Opinion",
    blurb:
      "You need an objective, expert audit of your existing operations to uncover hidden inefficiencies and revenue opportunities.",
  },
];

export default function FoodBeverageConsultingPage() {
  return (
    <>
      <header className="relative h-screen flex items-center justify-start pt-28 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="w-full h-full object-cover"
            src={siteImages.fnbHero}
          />
          <div className="absolute inset-0 bg-surface/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl space-y-8">
          <div className="flex flex-wrap items-center gap-4">
            <SectionLabel>Our Services</SectionLabel>
            <span className="text-on-surface-variant text-sm font-semibold tracking-wider uppercase">
              Services → Food &amp; Beverage Consulting
            </span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-black text-cream leading-[1.1] tracking-[0.05em] uppercase">
            Food &amp; Beverage <br /> Consulting That <br />{" "}
            <span className="text-primary-container">Moves the Needle.</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Expertise-driven consultancy for the UAE. We bridge the gap between
            white-glove service and boots-on-the-ground reality to elevate your
            hospitality concept.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">
                Book a free call
                <MaterialIcon name="arrow_forward" />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="lg" className="w-full sm:w-auto">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="py-32 px-6 md:px-20 bg-cream text-surface-container-lowest">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-10">
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-wide text-surface-container-lowest leading-tight">
              Consulting That Actually{" "}
              <span className="font-light text-primary-container">
                Moves the Needle
              </span>
            </h2>
            <div className="space-y-6 font-body text-lg text-surface-variant leading-relaxed">
              <p>
                The heart of any successful hospitality business lies in its Food
                &amp; Beverage offering. It is the core driver of revenue, guest
                satisfaction, and brand identity. Our approach is not just
                theoretical; it&apos;s rooted in decades of hands-on operational
                experience.
              </p>
              <p>
                We dissect every element of your operation—from conceptualizing the
                initial menu narrative to the granular details of supply chain
                logistics—ensuring that your culinary vision aligns perfectly with
                commercial reality and operational feasibility.
              </p>
            </div>
            <Button asChild className="mt-8">
              <Link href="/contact">
                Discuss your concept
                <MaterialIcon name="arrow_forward" />
              </Link>
            </Button>
          </div>
          <div className="bg-surface-container-low p-10 md:p-14 rounded-none shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 blur-3xl rounded-full" />
            <h3 className="font-headline text-3xl font-bold uppercase text-cream mb-10 tracking-wider">
              What&apos;s Included
            </h3>
            <ul className="space-y-8">
              {included.map((item) => (
                <li key={item.title} className="flex items-start gap-5">
                  <div className="w-3 h-3 rounded-full bg-primary-container mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-cream text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm">{item.blurb}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-20 bg-surface text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionLabel className="mb-6">Is this right for you?</SectionLabel>
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-wide text-cream max-w-2xl leading-tight">
              This Service Is Built For You{" "}
              <span className="font-light text-primary-container">If...</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {audience.map((card) => (
              <div
                key={card.n}
                className="bg-cream p-12 hover:-translate-y-2 transition-transform duration-500 text-ink"
              >
                <span className="font-headline text-5xl font-black text-ink/15 block mb-6">
                  {card.n}
                </span>
                <h3 className="font-headline text-2xl font-bold uppercase mb-4 tracking-wider">
                  {card.title}
                </h3>
                <p className="font-body text-ink/70 leading-relaxed">{card.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
