import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { PageHero } from "@/components/page-hero";
import { FinalCta, JourneySection } from "@/components/sections";
import { services } from "@/lib/services";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Restaurant Consulting Services UAE",
  description:
    "Restaurant consulting across the whole lifecycle in the UAE: concept, kitchen planning, menu development, pre-opening, operations and turnaround.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        imageSrc={siteImages.servicesHero}
        label="Services"
        title="Built around the life of a restaurant."
        description="From the first idea to a restaurant that runs and makes money. Bring us in for one stage or for all of them."
      />

      <section className="bg-cream py-28 px-6 md:px-20 text-espresso">
        <div className="max-w-7xl mx-auto">
          <SectionLabel variant="light" className="mb-6">
            What We Do
          </SectionLabel>
          <div className="divide-y divide-espresso/15 border-y border-espresso/15">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10"
              >
                <div className="md:col-span-1 font-label text-xs tracking-[0.2em] text-espresso/50 pt-2">
                  {s.n}
                </div>
                <div className="md:col-span-4">
                  <h2 className="font-headline text-3xl leading-tight group-hover:underline underline-offset-4 decoration-1">
                    {s.title}
                  </h2>
                </div>
                <div className="md:col-span-7">
                  <p className="text-espresso/75 text-lg leading-relaxed mb-4">{s.summary}</p>
                  <p className="text-sm text-espresso/60">{s.includes.join(" · ")}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JourneySection />
      <FinalCta />
    </>
  );
}
