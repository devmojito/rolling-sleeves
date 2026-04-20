import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";
import { MaterialIcon } from "@/components/material-icon";
import { PageHero } from "@/components/page-hero";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "F&B consulting, pre-opening, brand, menu engineering, and cloud kitchens — everything your restaurant needs under one roof.",
};

const coreServices = [
  {
    n: "01",
    title: "F&B Consulting",
    blurb:
      "Strategic roadmap development, feasibility studies, and concept validation for new and existing ventures.",
    href: "/services/food-beverage-consulting",
  },
  {
    n: "02",
    title: "Pre-Opening Management",
    blurb:
      "End-to-end project management ensuring your venue opens on time, on budget, and to standard.",
  },
  {
    n: "03",
    title: "Brand Identity Development",
    blurb:
      "Crafting compelling visual and narrative identities that resonate with your target audience.",
  },
  {
    n: "04",
    title: "Menu Engineering & Design",
    blurb:
      "Optimizing menu offerings for maximum profitability and operational efficiency.",
  },
  {
    n: "05",
    title: "Interior Design Layout",
    blurb:
      "Collaborating with architects to ensure operational flow and aesthetic alignment.",
  },
];

const operationalServices = [
  {
    n: "06",
    title: "Kitchen Operations & Layout",
    blurb:
      "Designing ergonomic workspaces and implementing efficient back-of-house systems.",
  },
  {
    n: "07",
    title: "Staff Training & Manuals",
    blurb:
      "Developing comprehensive SOPs and conducting rigorous front and back-of-house training.",
  },
  {
    n: "08",
    title: "Franchise Development",
    blurb:
      "Structuring your business model for scalable, consistent growth across new markets.",
  },
  {
    n: "09",
    title: "Performance Audits",
    blurb:
      "In-depth operational reviews to identify bottlenecks and improve bottom-line results.",
  },
  {
    n: "10",
    title: "Delivery & Cloud Kitchens",
    blurb:
      "Optimizing concepts for the digital delivery landscape and ghost kitchen operations.",
  },
];

const steps = [
  {
    n: "1",
    title: "Discovery",
    blurb:
      "Deep dive into your vision, market positioning, and financial targets.",
    highlight: false,
  },
  {
    n: "2",
    title: "Scoping",
    blurb: "Defining the exact roadmap, resources, and timelines required.",
    highlight: false,
    offset: true,
  },
  {
    n: "3",
    title: "Execution",
    blurb:
      "Boots on the ground. We manage vendors, training, and build-out.",
    highlight: true,
  },
  {
    n: "4",
    title: "Support",
    blurb: "Post-opening stabilization and ongoing performance optimization.",
    offset: true,
  },
];

const testimonials = [
  {
    quote:
      "Rolling Sleeves didn't just give us a strategy; they stayed in the trenches with us until the last light bulb was installed. Our opening week revenue exceeded projections by 40%.",
    name: "Marcus T.",
    role: "Founder, The Ember Room",
  },
  {
    quote:
      "Their understanding of kitchen flow and menu engineering saved us thousands in potential operational inefficiencies. True professionals.",
    name: "Sarah K.",
    role: "Director, Vida Hospitality",
    offset: true,
  },
  {
    quote:
      "Pivoting to a cloud kitchen model seemed daunting, but their team handled the entire operational setup seamlessly. We scaled from 1 to 3 locations in a year.",
    name: "Ahmed R.",
    role: "CEO, Urban Bite",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        imageSrc={siteImages.servicesHero}
        label="What we do"
        title={
          <>
            EVERYTHING YOUR RESTAURANT NEEDS,{" "}
            <span className="text-primary-container">UNDER ONE ROOF.</span>
          </>
        }
        description="From napkin sketches to grand openings and beyond. We don't just consult; we execute with precision."
      />

      <section className="py-32 px-6 md:px-12 lg:px-24 bg-cream text-ink">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-wider mb-16 text-ink">
                CORE <span className="font-light">EXPERTISE</span>
              </h2>
              <ul className="space-y-12">
                {coreServices.map((s) => (
                  <li key={s.n} className="group">
                    <div className="flex items-start gap-6">
                      <span className="text-gold font-headline text-2xl font-bold mt-1">
                        {s.n}
                      </span>
                      <div>
                        {s.href ? (
                          <Link
                            href={s.href}
                            className="font-headline text-2xl font-bold uppercase tracking-wide text-ink group-hover:text-gold transition-colors duration-300"
                          >
                            {s.title}
                          </Link>
                        ) : (
                          <h3 className="font-headline text-2xl font-bold uppercase tracking-wide text-ink group-hover:text-gold transition-colors duration-300">
                            {s.title}
                          </h3>
                        )}
                        <p className="mt-3 font-body text-lg text-ink/70 leading-relaxed">
                          {s.blurb}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-wider mb-16 text-ink opacity-0 lg:opacity-100 hidden lg:block">
                OPERATIONAL <span className="font-light">EXCELLENCE</span>
              </h2>
              <ul className="space-y-12">
                {operationalServices.map((s) => (
                  <li key={s.n} className="group">
                    <div className="flex items-start gap-6">
                      <span className="text-gold font-headline text-2xl font-bold mt-1">
                        {s.n}
                      </span>
                      <div>
                        <h3 className="font-headline text-2xl font-bold uppercase tracking-wide text-ink group-hover:text-gold transition-colors duration-300">
                          {s.title}
                        </h3>
                        <p className="mt-3 font-body text-lg text-ink/70 leading-relaxed">
                          {s.blurb}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink border-y border-surface-variant/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:divide-y-0 sm:divide-x divide-outline-variant/30 divide-y">
          <div className="pt-8 sm:pt-0">
            <p className="font-headline text-5xl font-bold text-white mb-2">50+</p>
            <p className="font-body text-sm font-bold tracking-[0.2em] uppercase text-gold">
              Concepts Launched
            </p>
          </div>
          <div className="pt-8 sm:pt-0">
            <p className="font-headline text-5xl font-bold text-white mb-2">10</p>
            <p className="font-body text-sm font-bold tracking-[0.2em] uppercase text-gold">
              Service Areas
            </p>
          </div>
          <div className="pt-8 sm:pt-0">
            <p className="font-headline text-5xl font-bold text-white mb-2">UAE</p>
            <p className="font-body text-sm font-bold tracking-[0.2em] uppercase text-gold">
              & GCC Coverage
            </p>
          </div>
          <div className="pt-8 sm:pt-0">
            <p className="font-headline text-5xl font-bold text-white mb-2">100%</p>
            <p className="font-body text-sm font-bold tracking-[0.2em] uppercase text-gold">
              Commitment
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 lg:px-24 bg-ink overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 md:mb-32">
            <SectionLabel className="mb-8">Our approach</SectionLabel>
            <h2 className="font-headline text-4xl md:text-6xl lg:text-[4.5rem] font-bold uppercase tracking-wide text-white leading-tight max-w-5xl">
              WE DON&apos;T HAND YOU A REPORT{" "}
              <span className="font-light text-white/50">AND DISAPPEAR.</span>
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-dashed border-gold/30 -translate-y-1/2 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 relative z-10">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className={`relative group ${step.offset ? "lg:mt-24" : ""}`}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-headline font-bold mb-8 lg:mx-auto transition-transform duration-500 shadow-[0_10px_20px_rgba(0,0,0,0.3)] border ${
                      step.highlight
                        ? "bg-gold text-ink border-gold shadow-[0_10px_20px_rgba(232,160,32,0.3)] group-hover:scale-110"
                        : "bg-surface-container-high text-gold border-outline-variant group-hover:scale-110"
                    }`}
                  >
                    {step.n}
                  </div>
                  <div className="lg:text-center">
                    <h3 className="font-headline text-2xl font-bold uppercase tracking-wide text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="font-body text-lg text-white/70 leading-relaxed">
                      {step.blurb}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 lg:px-24 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <SectionLabel className="mb-8">Most requested</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-wider text-ink">
                SIGNATURE <span className="font-light text-ink/60">SERVICES</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="group flex flex-col bg-white relative overflow-hidden transition-all duration-500 hover:shadow-xl shadow-md border border-neutral-100">
              <div className="h-64 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="F&B Consulting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={siteImages.serviceCardFnB}
                />
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <h3 className="font-headline text-2xl font-bold uppercase tracking-wide text-ink mb-4">
                  F&B Consulting
                </h3>
                <p className="font-body text-ink/70 leading-relaxed mb-8 flex-grow">
                  Comprehensive strategic guidance from initial concept validation
                  to full financial modeling and investor pitches.
                </p>
                <Link
                  href="/services/food-beverage-consulting"
                  className="inline-flex items-center gap-4 text-gold font-headline font-bold uppercase tracking-widest text-sm group-hover:gap-6 transition-all duration-300"
                >
                  Explore Service{" "}
                  <MaterialIcon name="arrow_forward" />
                </Link>
              </div>
            </div>
            <div className="group flex flex-col bg-white relative overflow-hidden transition-all duration-500 hover:shadow-xl shadow-md border border-neutral-100 lg:mt-12">
              <div className="h-64 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Pre-Opening"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={siteImages.serviceCardPreOpen}
                />
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <h3 className="font-headline text-2xl font-bold uppercase tracking-wide text-ink mb-4">
                  Pre-Opening
                </h3>
                <p className="font-body text-ink/70 leading-relaxed mb-8 flex-grow">
                  The critical 90 days before you open your doors. We manage the
                  chaos so you can focus on the vision.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 text-gold font-headline font-bold uppercase tracking-widest text-sm group-hover:gap-6 transition-all duration-300"
                >
                  Explore Service{" "}
                  <MaterialIcon name="arrow_forward" />
                </Link>
              </div>
            </div>
            <div className="group flex flex-col bg-white relative overflow-hidden transition-all duration-500 hover:shadow-xl shadow-md border border-neutral-100">
              <div className="h-64 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Cloud Kitchens"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={siteImages.serviceCardCloud}
                />
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <h3 className="font-headline text-2xl font-bold uppercase tracking-wide text-ink mb-4">
                  Cloud Kitchens
                </h3>
                <p className="font-body text-ink/70 leading-relaxed mb-8 flex-grow">
                  Optimized digital-first concepts designed for maximum throughput
                  and delivery platform algorithm dominance.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 text-gold font-headline font-bold uppercase tracking-widest text-sm group-hover:gap-6 transition-all duration-300"
                >
                  Explore Service{" "}
                  <MaterialIcon name="arrow_forward" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 lg:px-24 bg-ink">
        <div className="max-w-7xl mx-auto">
          <SectionLabel className="mb-16">Client results</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className={`bg-surface-container-high p-12 flex flex-col justify-between border border-outline-variant ${
                  t.offset ? "md:mt-12" : ""
                }`}
              >
                <div>
                  <MaterialIcon
                    name="format_quote"
                    className="text-gold text-4xl mb-8"
                  />
                  <p className="font-body text-white text-lg leading-relaxed italic mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div>
                  <p className="font-headline text-gold font-bold uppercase tracking-wide">
                    {t.name}
                  </p>
                  <p className="font-body text-white/60 text-sm uppercase tracking-widest mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 lg:px-24 bg-ink relative overflow-hidden flex items-center justify-center min-h-[614px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-ink/90 z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="w-full h-full object-cover"
            src={siteImages.servicesCtaKitchen}
          />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <SectionLabel className="mb-8">Let&apos;s talk</SectionLabel>
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider text-white leading-tight mb-6">
            NOT SURE WHICH <span className="text-gold">SERVICE</span> YOU NEED?
          </h2>
          <p className="font-body text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Every project is unique. Let&apos;s discuss your vision and tailor an
            approach that fits your exact operational needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Book a free call</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2"
            >
              <Link href="/portfolio">See our portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
