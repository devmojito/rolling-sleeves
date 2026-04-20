import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";
import { MaterialIcon } from "@/components/material-icon";
import { Stat } from "@/components/stat";
import { siteImages } from "@/lib/site-images";

const services = [
  {
    title: "F&B Consulting",
    blurb:
      "Menu engineering, procurement optimization, and front-of-house training systems.",
    img: siteImages.wine,
  },
  {
    title: "Pre-Opening Support",
    blurb:
      "From licensing to soft-launch management. We handle the friction of starting up.",
    img: siteImages.waiters,
  },
  {
    title: "Delivery & Cloud Kitchen",
    blurb:
      "Scaling your brand into the digital space with efficient, high-volume models.",
    img: siteImages.tablet,
  },
];

const values = [
  {
    icon: "handshake",
    title: "Integrity",
    blurb:
      "We provide honest, data-driven assessments without sugar-coating.",
  },
  {
    icon: "analytics",
    title: "Innovation",
    blurb: "Applying modern tech stacks to traditional service models.",
  },
  {
    icon: "layers",
    title: "Scalability",
    blurb: "Systems built to replicate across multiple units flawlessly.",
  },
  {
    icon: "verified",
    title: "Quality",
    blurb:
      "Maintaining the highest standards of culinary and service excellence.",
  },
];

const testimonials = [
  {
    quote:
      "Rolling Sleeves transformed our kitchen flow. Our ticket times dropped by 30% without sacrificing an ounce of quality.",
    name: "Marcus Thorne",
    role: "Founder, Ember & Co.",
    img: siteImages.testimonialMarcus,
  },
  {
    quote:
      "Their pre-opening support was a lifesaver. We launched with a fully trained team and a bulletproof supply chain.",
    name: "Elena Rodriguez",
    role: "COO, Skyview Hospitality",
    img: siteImages.testimonialElena,
  },
  {
    quote:
      "Rolling Sleeves doesn't just give you a report; they get in the kitchen with you. Truly boots-on-the-ground expertise.",
    name: "Julian Chen",
    role: "Director, Artisan Plate",
    img: siteImages.testimonialJulian,
  },
];

const posts = [
  {
    category: "Operations • 5 min read",
    title: "5 Errors Killing Your Profit Margins",
    blurb:
      "Uncover the hidden operational leaks that are draining your restaurant's bottom line every single night.",
    img: siteImages.blog1,
  },
  {
    category: "Branding • 8 min read",
    title: "The Sensory Psychology of Dining",
    blurb:
      "How lighting, scent, and sound engineering can increase guest average spend by up to 15%.",
    img: siteImages.blog2,
  },
  {
    category: "Future • 10 min read",
    title: "2025 Hospitality Trends Report",
    blurb:
      "What the next decade of fine dining and quick service looks like in an AI-driven culinary world.",
    img: siteImages.blog3,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-dvh flex items-center overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Moody high-end restaurant interior at night"
            className="w-full h-full object-cover grayscale-[20%]"
            src={siteImages.heroRestaurant}
          />
        </div>
        <div className="relative z-20 px-6 md:px-20 max-w-6xl mt-16 md:mt-24 lg:mt-28">
          <h1 className="font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-white mb-8 tracking-tighter editorial-shadow uppercase">
            WE ROLL UP OUR <br />
            <span className="text-gold italic font-light">SLEEVES</span> SO YOUR
            <br />
            RESTAURANT DOESN&apos;T HAVE TO.
          </h1>
          <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed">
            Bespoke consultancy for modern hospitality. We bridge the gap
            between architectural vision and operational excellence.
          </p>
          <div className="flex flex-wrap gap-6">
            <Button asChild size="lg">
              <Link href="/services">
                Discover Services
                <MaterialIcon name="trending_flat" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-cream py-32 px-6 md:px-20 text-ink">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionLabel className="mb-8">Our Philosophy</SectionLabel>
            <h2 className="font-headline font-bold text-4xl md:text-6xl text-ink leading-none mb-8 tracking-tighter uppercase">
              WE BUILD <br />
              RESTAURANTS <br />
              THAT LAST.
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed mb-10 max-w-lg">
              In an industry of trends, we focus on timeless operational
              structures. From kitchen ergonomics to sensory branding, we ensure
              every touchpoint is curated for profit and longevity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <MaterialIcon name="restaurant_menu" className="text-gold text-4xl" />
                <h4 className="font-headline font-bold text-xl uppercase tracking-wider">
                  Concept Design
                </h4>
                <p className="text-ink/60 text-sm">
                  Forging unique identities that cut through the market noise.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <MaterialIcon name="finance_chip" className="text-gold text-4xl" />
                <h4 className="font-headline font-bold text-xl uppercase tracking-wider">
                  Operational Audit
                </h4>
                <p className="text-ink/60 text-sm">
                  Deep-dive analysis to eliminate waste and maximize floor yield.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Chef plating a dish"
              className="w-full aspect-[4/5] object-cover grayscale-[10%]"
              src={siteImages.chefPlating}
            />
            <div className="absolute -bottom-10 -left-10 bg-ink text-cream p-12 hidden md:block">
              <div className="font-headline font-extrabold text-7xl text-gold leading-none">
                15+
              </div>
              <div className="font-bold text-sm tracking-widest mt-2 uppercase">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-ink py-32 px-6 md:px-20 text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <div>
              <SectionLabel className="mb-8">Our Services</SectionLabel>
              <h2 className="font-headline font-bold text-4xl md:text-5xl tracking-tighter uppercase">
                The Core Pillars
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden md:flex items-center gap-2 font-bold hover:text-gold transition-colors group"
            >
              View All Services{" "}
              <MaterialIcon
                name="trending_flat"
                className="group-hover:translate-x-2 transition-transform"
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-surface-container-high overflow-hidden flex flex-col group"
              >
                <div className="h-[400px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={s.img}
                  />
                </div>
                <div className="p-10">
                  <h3 className="font-headline font-bold text-2xl mb-4 tracking-tight uppercase">
                    {s.title}
                  </h3>
                  <p className="text-cream/70 leading-relaxed mb-8">{s.blurb}</p>
                  <Link
                    href={
                      s.title === "F&B Consulting"
                        ? "/services/food-beverage-consulting"
                        : "/services"
                    }
                    className="flex items-center gap-2 font-bold text-xs tracking-widest uppercase text-gold"
                  >
                    Learn More{" "}
                    <MaterialIcon name="north_east" className="text-sm" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink py-32 border-y border-cream/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <Stat value="50+" label="Unique Concepts" />
          <Stat value="10+" label="Service Areas" />
          <Stat value="3k+" label="Staff Trained" />
          <Stat value="100%" label="Success Rate" />
        </div>
      </section>

      {/* Portfolio gallery */}
      <section className="bg-cream py-32 overflow-hidden">
        <div className="px-6 md:px-20 mb-16">
          <SectionLabel className="mb-8">Our Portfolio</SectionLabel>
          <h2 className="font-headline font-bold text-4xl md:text-5xl text-ink tracking-tighter uppercase">
            Curated Success Stories
          </h2>
        </div>
        <div className="flex gap-8 overflow-x-auto px-6 md:px-20 pb-20 hide-scrollbar snap-x">
          {[
            siteImages.industrial,
            siteImages.cocktail,
            siteImages.cafe,
            siteImages.rooftop,
          ].map((src, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[500px] aspect-[16/10] bg-neutral-200 flex-shrink-0 snap-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Portfolio work"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                src={src}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-ink py-32 px-6 md:px-20 text-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionLabel className="mb-8">Our Edge</SectionLabel>
            <h2 className="font-headline font-bold text-4xl md:text-6xl text-white leading-tight tracking-tighter mb-8 uppercase">
              Precision in <br />
              every detail.
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-12">
              We don&apos;t just advise; we execute. Our team consists of former
              Michelin-star operators, financial analysts, and brand architects
              who understand the industry from the inside out.
            </p>
            <Button variant="outline" asChild>
              <Link href="/about">Learn our process</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-surface-container-high p-8 border-l-4 border-gold"
              >
                <MaterialIcon name={v.icon} className="text-gold mb-6 text-3xl" />
                <h4 className="font-headline font-bold text-xl text-white mb-2 uppercase">
                  {v.title}
                </h4>
                <p className="text-cream/70 text-sm">{v.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-32 px-6 md:px-20 text-ink">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionLabel className="mb-8">Client Voices</SectionLabel>
            <h2 className="font-headline font-bold text-4xl md:text-5xl tracking-tighter uppercase">
              Trusted by the best
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white p-10 flex flex-col justify-between shadow-sm border border-ink/5"
              >
                <div>
                  <MaterialIcon
                    name="format_quote"
                    className="text-gold text-5xl opacity-30"
                  />
                  <p className="text-ink/70 text-lg italic leading-relaxed mt-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-200 rounded-full flex-shrink-0 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt={t.name} src={t.img} />
                  </div>
                  <div>
                    <h5 className="font-bold text-ink">{t.name}</h5>
                    <p className="text-xs text-gold uppercase tracking-widest">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="bg-ink py-32 px-6 md:px-20 text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <SectionLabel className="mb-8">Insights</SectionLabel>
              <h2 className="font-headline font-bold text-4xl md:text-5xl tracking-tighter uppercase">
                Latest from the kitchen
              </h2>
            </div>
            <Button asChild size="sm" className="py-4">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {posts.map((p) => (
              <article key={p.title} className="group cursor-pointer">
                <div className="aspect-video bg-surface-container-high overflow-hidden mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={p.img}
                  />
                </div>
                <div className="text-xs font-bold text-gold uppercase tracking-widest mb-4">
                  {p.category}
                </div>
                <h3 className="font-headline font-bold text-2xl mb-4 group-hover:text-gold transition-colors uppercase">
                  {p.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed mb-6">
                  {p.blurb}
                </p>
                <MaterialIcon name="trending_flat" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Dim luxury bar"
            className="w-full h-full object-cover grayscale-[30%]"
            src={siteImages.ctaBar}
          />
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-headline font-extrabold text-5xl md:text-7xl text-white leading-tight tracking-tighter mb-10 uppercase">
            READY TO OPEN YOUR <br />
            <span className="text-gold">DREAM RESTAURANT?</span>
          </h2>
          <p className="text-cream/70 text-xl mb-12 max-w-2xl mx-auto">
            Let&apos;s turn your vision into a high-performance operation. Book
            your strategy session today.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Button asChild size="xl">
              <Link href="/contact">
                Get Started Now
                <MaterialIcon name="rocket_launch" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
