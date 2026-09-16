import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";
import {
  CaseStudiesSection,
  FinalCta,
  FoundersSection,
  JourneySection,
  TestimonialsSection,
} from "@/components/sections";
import { audiences, services, verifiedStats } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { siteImages } from "@/lib/site-images";

const lifecycle = [
  "Concept",
  "Kitchen",
  "Menu",
  "Operations",
  "Pre-Opening",
  "Launch",
  "Optimisation",
];

const problems = [
  {
    title: "A kitchen that slows service down",
    blurb: "Poor layout and flow cost you covers every single night.",
  },
  {
    title: "Food and labour costs creeping up",
    blurb: "Margins disappear quietly when nobody is watching the numbers.",
  },
  {
    title: "An opening date that keeps slipping",
    blurb: "Pre-opening has hundreds of moving parts and no room for surprises.",
  },
  {
    title: "A team without systems",
    blurb: "Without SOPs and training, standards depend on who is on shift.",
  },
  {
    title: "A menu that does not make money",
    blurb: "Popular dishes are not always profitable ones.",
  },
  {
    title: "Wastage you cannot see",
    blurb: "Over-ordering, poor storage and prep habits add up.",
  },
];

const kitchenAreas = [
  "Layout",
  "Equipment planning",
  "Workflow",
  "Receiving",
  "Storage",
  "Preparation",
  "Cooking",
  "The pass",
  "Dishwashing",
  "Waste",
  "Food safety",
];

const pillars = [
  "Concept",
  "Design",
  "Kitchen",
  "Culinary",
  "Operations",
  "People",
  "Profitability",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen-dynamic flex items-center overflow-hidden bg-ink pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/30 z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="w-full h-full object-cover grayscale-[40%]"
            src={siteImages.heroRestaurant}
          />
        </div>
        <div className="relative z-20 px-6 md:px-20 max-w-6xl">
          <SectionLabel className="mb-8">
            Restaurant &amp; F&amp;B Consultancy · UAE
          </SectionLabel>
          <h1 className="font-headline font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-cream mb-8">
            We Roll Up Our Sleeves So Your Restaurant Doesn&apos;t Have To.
          </h1>
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
            We build restaurants and make them work, from the first idea to a
            profitable, well-run operation.
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.2em] text-sand mb-12">
            {lifecycle.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                {step}
                {i < lifecycle.length - 1 && <span aria-hidden className="text-sand/50">→</span>}
              </span>
            ))}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={siteConfig.ctaHref}>Let&apos;s Build Your Restaurant</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Verified stats (shown only once real figures are provided) */}
      {verifiedStats.length > 0 && (
        <section className="bg-ink py-16 border-y border-cream/10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {verifiedStats.map((s) => (
              <div key={s.label}>
                <div className="font-headline text-5xl text-cream">{s.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-sand mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Problems we solve */}
      <section className="bg-cream py-28 px-6 md:px-20 text-espresso">
        <div className="max-w-7xl mx-auto">
          <SectionLabel variant="light" className="mb-6">
            Restaurant Problems We Solve
          </SectionLabel>
          <h2 className="font-headline font-medium text-4xl md:text-5xl leading-tight mb-16 max-w-3xl">
            Most restaurants don&apos;t struggle because of the food.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-espresso/10">
            {problems.map((p) => (
              <div key={p.title} className="bg-cream p-8">
                <h3 className="font-headline text-2xl mb-3">{p.title}</h3>
                <p className="text-espresso/70 leading-relaxed">{p.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-ink py-28 px-6 md:px-20 text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <SectionLabel className="mb-6">Services</SectionLabel>
              <h2 className="font-headline font-medium text-4xl md:text-5xl leading-tight max-w-2xl">
                Every stage of a restaurant&apos;s life.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs uppercase tracking-[0.22em] font-semibold text-cream/70 hover:text-cream"
            >
              All services →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/10">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-ink p-8 lg:p-10 hover:bg-surface-container transition-colors"
              >
                <div className="font-label text-xs tracking-[0.2em] text-sand/70 mb-6">{s.n}</div>
                <h3 className="font-headline text-2xl mb-4 group-hover:text-sand transition-colors">
                  {s.title}
                </h3>
                <p className="text-cream/65 leading-relaxed">{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rolling Sleeves */}
      <section className="bg-espresso py-28 px-6 md:px-20 text-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel className="mb-6">Why Rolling Sleeves</SectionLabel>
            <h2 className="font-headline font-medium text-5xl md:text-7xl leading-[1.02] mb-8">
              Operators First.
              <br />
              <span className="text-sand">Consultants Second.</span>
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed mb-6 max-w-xl">
              We don&apos;t just design restaurants. We design how they work. Our
              advice comes from running kitchens and floors, not from a slide deck.
            </p>
            <p className="text-cream/80 text-lg leading-relaxed max-w-xl">
              That is why owners and investors trust us with major restaurant
              investments: we plan every decision around the people who will run
              the restaurant and the numbers it has to make.
            </p>
          </div>
          <ul className="border-t border-cream/15">
            {pillars.map((p, i) => (
              <li
                key={p}
                className="flex items-baseline gap-6 border-b border-cream/15 py-4 font-headline text-2xl md:text-3xl"
              >
                <span className="w-6 text-sand/60 text-lg">
                  {i === 0 ? "" : i === pillars.length - 1 ? "=" : "+"}
                </span>
                <span className={i === pillars.length - 1 ? "text-sand" : ""}>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Kitchen planning */}
      <section className="bg-cream py-28 px-6 md:px-20 text-espresso">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Commercial kitchen in service"
              className="w-full h-full object-cover grayscale-[30%]"
              src={siteImages.servicesCtaKitchen}
            />
          </div>
          <div>
            <SectionLabel variant="light" className="mb-6">
              Kitchen Planning
            </SectionLabel>
            <h2 className="font-headline font-medium text-4xl md:text-5xl leading-tight mb-6">
              We design for the people who have to run the restaurant.
            </h2>
            <p className="text-espresso/75 text-lg leading-relaxed mb-10">
              The kitchen decides how fast, how consistently and how profitably a
              restaurant can operate. We plan every step of it around the way
              chefs and staff actually work.
            </p>
            <ul className="flex flex-wrap gap-2 mb-10">
              {kitchenAreas.map((a) => (
                <li
                  key={a}
                  className="border border-espresso/20 px-4 py-2 text-sm text-espresso/80"
                >
                  {a}
                </li>
              ))}
            </ul>
            <Button asChild variant="dark">
              <Link href="/services/restaurant-design-kitchen-planning">
                Kitchen planning in detail
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <JourneySection />

      {/* Who we help */}
      <section className="bg-cream py-28 px-6 md:px-20 text-espresso">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <SectionLabel variant="light" className="mb-6">
              Who We Help
            </SectionLabel>
            <h2 className="font-headline font-medium text-4xl md:text-5xl leading-tight">
              Built for owners and investors.
            </h2>
          </div>
          <ul className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-px bg-espresso/10">
            {audiences.map((a) => (
              <li key={a} className="bg-cream p-8 font-headline text-2xl leading-snug">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CaseStudiesSection />
      <FoundersSection />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
