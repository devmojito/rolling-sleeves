"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MaterialIcon } from "@/components/material-icon";
import { PageHero } from "@/components/page-hero";
import { siteImages } from "@/lib/site-images";

const filters = [
  "ALL",
  "RESTAURANTS",
  "CAFÉS",
  "CLOUD KITCHENS",
  "SPAS",
  "BEAUTY",
] as const;

type Filter = (typeof filters)[number];

const projects: {
  title: string;
  subtitle: string;
  tag: string;
  filter: Filter;
  img: string;
}[] = [
  {
    title: "The Olympe",
    subtitle: "Concept Development & Execution • Dubai",
    tag: "Restaurant",
    filter: "RESTAURANTS",
    img: siteImages.projectOlympe,
  },
  {
    title: "Abra Sanctuary",
    subtitle: "Operational Strategy • Abu Dhabi",
    tag: "Spa",
    filter: "SPAS",
    img: siteImages.projectAbra,
  },
  {
    title: "Morning Glory",
    subtitle: "Menu Strategy • Riyadh",
    tag: "Café",
    filter: "CAFÉS",
    img: siteImages.projectMorning,
  },
  {
    title: "Ghost Bites",
    subtitle: "Hospitality Audit • Dubai",
    tag: "Cloud Kitchen",
    filter: "CLOUD KITCHENS",
    img: siteImages.projectGhost,
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<Filter>("ALL");

  const visible = useMemo(() => {
    if (active === "ALL") return projects;
    return projects.filter((p) => p.filter === active);
  }, [active]);

  return (
    <>
      <PageHero
        imageSrc={siteImages.portfolioHero}
        label="Our Work"
        title={
          <>
            OVER 50 CONCEPTS.
            <br />
            ONE STANDARD:{" "}
            <span className="text-primary-container">EXCELLENCE.</span>
          </>
        }
        description={
          <>
            Curating and launching premium hospitality groups across the UAE and
            GCC. We don&apos;t just build restaurants; we build cultural
            landmarks.
          </>
        }
      />

      <section className="bg-cream py-24 w-full">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-16 font-label font-bold tracking-[0.1em] text-xs md:text-sm uppercase text-surface">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`pb-1 transition-colors ${
                  active === f
                    ? "text-gold border-b-2 border-gold"
                    : "text-surface/60 hover:text-surface"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {visible.map((p, i) => (
              <div
                key={p.title}
                className={`group relative bg-white border border-transparent hover:border-gold transition-colors duration-500 overflow-hidden ${
                  i % 2 === 1 ? "md:mt-24" : ""
                }`}
              >
                <div className="h-[400px] md:h-[614px] overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    src={p.img}
                  />
                  <div className="absolute top-6 left-6 bg-gold text-gold-deep px-4 py-1 rounded-full font-label text-xs font-bold tracking-[0.1em] uppercase">
                    {p.tag}
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <h3 className="font-headline font-bold text-3xl text-surface mb-2 uppercase">
                    {p.title}
                  </h3>
                  <p className="font-body text-surface/70">{p.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="text-center text-ink/60 py-16 font-body">
              No projects in this category yet. Try another filter.
            </p>
          )}

          <div className="flex justify-center mt-24">
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Load more{" "}
                <MaterialIcon name="expand_more" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
