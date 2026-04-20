import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";
import { MaterialIcon } from "@/components/material-icon";
import { PageHero } from "@/components/page-hero";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Operational truth and strategic clarity from the vanguard of high-end hospitality consulting.",
};

const articles = [
  {
    category: "F&B Consulting",
    title: "The True Cost of Menu Engineering Errors",
    img: siteImages.blogArticle1,
  },
  {
    category: "Operations",
    title: "Staff Retention Strategies for 2025",
    img: siteImages.blogArticle2,
  },
  {
    category: "Design Philosophy",
    title: "Lighting the Stage: Ambiance as a Service",
    img: siteImages.blogArticle3,
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        imageSrc={siteImages.blogKitchen}
        label="Insights"
        title={
          <>
            FROM THE KITCHEN
            <br />
            AND THE BOARDROOM.
          </>
        }
        description="Operational truth and strategic clarity from the vanguard of high-end hospitality consulting."
      >
        <Button asChild size="lg">
          <Link href="#featured">
            Browse articles
            <MaterialIcon name="arrow_forward" />
          </Link>
        </Button>
      </PageHero>

      <section
        className="w-full bg-cream text-ink py-32 px-6 md:px-12 lg:px-24"
        id="featured"
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <SectionLabel className="mb-4">Featured Read</SectionLabel>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-white shadow-xl shadow-surface/5 overflow-hidden">
            <div className="w-full min-h-[400px] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                src={siteImages.blogFeatured}
              />
            </div>
            <div className="p-12 lg:pr-24 flex flex-col justify-center">
              <span className="text-primary-container font-label uppercase font-bold tracking-[0.1em] text-sm mb-4">
                Pre-Opening
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6 text-ink">
                How to Open a Restaurant in Abu Dhabi: A Step-by-Step Guide
              </h2>
              <p className="font-body text-ink/60 mb-4 font-bold text-sm">
                December 2024
              </p>
              <p className="font-body text-lg text-ink/80 mb-10 leading-relaxed">
                Navigating the intricacies of launching a premium concept in the
                UAE requires more than just a stellar menu. From licensing
                nuances to operational readiness, discover the operational truth
                behind opening doors in the capital.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary-container font-bold uppercase tracking-widest hover:gap-4 transition-all duration-300"
              >
                Read full guide
                <MaterialIcon name="arrow_right_alt" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-cream text-ink pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-headline text-4xl font-bold uppercase tracking-wide">
              Latest insights
            </h2>
            <div className="flex flex-wrap gap-4 font-label uppercase text-sm font-bold tracking-widest">
              <span className="text-primary-container border-b-2 border-primary-container pb-1">
                All
              </span>
              <span className="text-ink/50 pb-1">F&amp;B</span>
              <span className="text-ink/50 pb-1">Pre-Opening</span>
              <span className="text-ink/50 pb-1">Operations</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {articles.map((a) => (
              <article key={a.title} className="flex flex-col group cursor-pointer">
                <div className="w-full h-64 overflow-hidden mb-6 relative bg-surface-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={a.img}
                  />
                </div>
                <span className="text-primary-container font-label uppercase font-bold tracking-[0.1em] text-xs mb-3">
                  {a.category}
                </span>
                <h3 className="font-headline text-xl font-bold mb-4 group-hover:text-primary-container transition-colors">
                  {a.title}
                </h3>
                <Link
                  href="/contact"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink/70 group-hover:text-primary-container transition-colors"
                >
                  Read more{" "}
                  <MaterialIcon name="arrow_right_alt" className="text-lg" />
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-20 flex justify-center">
            <Button variant="outline-light" size="default">
              Load more
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full relative py-40 px-6 md:px-12 lg:px-24 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="w-full h-full object-cover object-center"
            src={siteImages.aboutCta}
          />
          <div className="absolute inset-0 bg-surface/65 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl md:text-6xl font-bold uppercase tracking-[0.05em] text-white leading-tight mb-12">
            Ready to stop reading and start building?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button asChild size="lg" variant="gradient">
              <Link href="/contact">Book a free call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
              <Link href="/services">See our services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
