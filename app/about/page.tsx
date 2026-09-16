import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";
import { PageHero } from "@/components/page-hero";
import { FinalCta, FoundersSection, JourneySection } from "@/components/sections";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "About Rolling Sleeves | Hands-On Restaurant Consultants, UAE",
  description:
    "Rolling Sleeves is a hands-on hospitality consultancy in the UAE, run by restaurant operators. Operators first, consultants second.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Hands on",
    blurb:
      "We don't hand over a report and leave. We work in the kitchen and on the floor until it runs.",
  },
  {
    title: "Honest",
    blurb: "We tell you what you need to hear, not what you want to hear.",
  },
  {
    title: "Invested",
    blurb: "We treat every client's capital as carefully as our own.",
  },
  {
    title: "Local",
    blurb:
      "We work in the UAE market, with its licensing, suppliers and guests.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        imageSrc={siteImages.aboutHero}
        label="About Rolling Sleeves"
        title="Operators first. Consultants second."
        description="We have seen too many good concepts struggle because the operation behind them was not built properly. Rolling Sleeves exists to fix that."
      />

      <section className="bg-cream py-28 px-6 md:px-20 text-espresso">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Restaurant team planning service"
              className="w-full h-full object-cover grayscale-[30%]"
              src={siteImages.aboutStory}
            />
          </div>
          <div>
            <SectionLabel variant="light" className="mb-6">
              Our Story
            </SectionLabel>
            <h2 className="font-headline font-medium text-4xl md:text-5xl leading-tight mb-8">
              Built in kitchens, not boardrooms.
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-espresso/80">
              <p>
                Great food is not enough. A restaurant only works when the
                kitchen, the team, the systems and the numbers work together.
              </p>
              <p>
                Rolling Sleeves was built by people who have run restaurants. We
                understand not only how a restaurant looks, but how it operates
                and how it makes money.
              </p>
              <p>
                When we take on a project, we literally roll up our sleeves and
                work alongside your team until every system holds up in service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FoundersSection />

      <section className="bg-ink py-28 px-6 md:px-20 text-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionLabel className="mb-6">What We Stand For</SectionLabel>
            <h2 className="font-headline font-medium text-4xl md:text-5xl leading-tight">
              We don&apos;t just design restaurants. We design how they work.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-cream/10">
            {values.map((v) => (
              <div key={v.title} className="bg-ink p-8">
                <h3 className="font-headline text-2xl mb-3">{v.title}</h3>
                <p className="text-cream/65 leading-relaxed">{v.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JourneySection />
      <FinalCta />
    </>
  );
}
