import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";
import { MaterialIcon } from "@/components/material-icon";
import { Stat } from "@/components/stat";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Two founders, one mission: operational excellence for hospitality in the UAE and GCC.",
};

const values = [
  {
    icon: "front_hand" as const,
    title: "Hands On",
    blurb:
      "We don't just deliver reports; we get in the kitchen and on the floor to execute.",
  },
  {
    icon: "gavel" as const,
    title: "Honest",
    blurb:
      "Radical transparency. We tell you what you need to hear, not what you want to hear.",
  },
  {
    icon: "trending_up" as const,
    title: "Invested",
    blurb:
      "Your success is our success. We treat every client's capital like it's our own.",
  },
  {
    icon: "location_on" as const,
    title: "UAE Experts",
    blurb:
      "Deep understanding of local licensing, supply chains, and consumer demographics.",
  },
];

const brandIcons = [
  "restaurant",
  "local_cafe",
  "local_bar",
  "dining",
  "set_meal",
  "bakery_dining",
  "local_pizza",
  "brunch_dining",
  "icecream",
  "fastfood",
  "tapas",
  "kebab_dining",
  "lunch_dining",
  "ramen_dining",
  "local_dining",
] as const;

const brandLabels = [
  "Brand One",
  "Brand Two",
  "Brand Three",
  "Brand Four",
  "Brand Five",
  "Brand Six",
  "Brand Seven",
  "Brand Eight",
  "Brand Nine",
  "Brand Ten",
  "Brand Eleven",
  "Brand Twelve",
  "Brand Thirteen",
  "Brand Fourteen",
  "Brand Fifteen",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-end pb-24 px-6 md:px-20 overflow-hidden bg-ink pt-28">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="w-full h-full object-cover grayscale-[20%]"
            src={siteImages.aboutHero}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <SectionLabel className="mb-8">About Rolling Sleeves</SectionLabel>
          <h1 className="font-headline text-5xl md:text-8xl font-extrabold uppercase tracking-tighter leading-tight max-w-5xl text-white editorial-shadow">
            TWO FOUNDERS.
            <br />
            ONE MISSION.
            <br />
            <span className="text-gold">FIFTY-PLUS RESTAURANTS.</span>
          </h1>
          <p className="font-body text-xl md:text-2xl mt-8 max-w-3xl text-on-surface-variant leading-relaxed opacity-90">
            We saw too many great concepts fail in the UAE due to poor operational
            foundations. We built Rolling Sleeves to fix that.
          </p>
        </div>
      </section>

      <section className="bg-cream py-32 px-6 md:px-20 text-ink">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px] lg:h-[800px] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Consultants reviewing strategy"
              className="w-full h-full object-cover grayscale-[10%]"
              src={siteImages.aboutStory}
            />
          </div>
          <div>
            <SectionLabel className="mb-8">Our Story</SectionLabel>
            <h2 className="font-headline text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-10 leading-none">
              BORN FROM FRUSTRATION.{" "}
              <span className="font-light">BUILT ON EXPERIENCE.</span>
            </h2>
            <div className="space-y-6 font-body text-lg leading-relaxed mb-12 text-ink/80">
              <p>
                After years in the high-stakes environment of UAE hospitality, we
                grew tired of seeing passion projects collapse under the weight of
                operational realities. Great food isn&apos;t enough; the machinery
                behind it must be flawless.
              </p>
              <p>
                Rolling Sleeves wasn&apos;t started in a boardroom. It was forged in
                chaotic kitchens, mismanaged front-of-houses, and late-night
                financial reviews. We are operators first, consultants second.
              </p>
              <p>
                We bring zero fluff and total commitment. When we partner with a
                concept, we literally roll up our sleeves and get into the trenches
                with the team to ensure every system is optimized for survival and
                scale.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/services">
                See our services
                <MaterialIcon name="trending_flat" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-ink py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:divide-x md:divide-white/5">
          <Stat value="50+" label="Concepts Launched" />
          <Stat value="10" label="Service Areas" />
          <Stat value="5+" label="Years in the Industry" />
          <Stat value="GCC" label="UAE & Regional Coverage" />
        </div>
      </section>

      <section className="bg-cream py-32 px-6 md:px-20 text-ink">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionLabel className="mb-8">The Team</SectionLabel>
            <h2 className="font-headline font-bold text-4xl md:text-5xl tracking-tighter uppercase">
              The people who roll up their sleeves
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 flex flex-col md:flex-row gap-8 shadow-sm">
              <div className="w-40 h-40 bg-neutral-200 flex-shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Qaiz"
                  className="w-full h-full object-cover grayscale-[20%]"
                  src={siteImages.portraitQaiz}
                />
              </div>
              <div>
                <h3 className="font-headline font-bold text-3xl mb-2 uppercase text-ink">
                  Qaiz
                </h3>
                <p className="text-gold font-bold text-xs uppercase tracking-widest mb-6">
                  Co-Founder & Operations Director
                </p>
                <p className="text-ink/80 text-sm leading-relaxed mb-6">
                  With over a decade of boots-on-the-ground experience in
                  high-volume UAE venues, Qaiz is the architect of efficiency. He
                  specializes in kitchen ergonomics, supply chain optimization, and
                  building resilient operational frameworks.
                </p>
                <div className="flex gap-4">
                  <a
                    href="mailto:hello@rollingsleeves.com"
                    className="text-outline hover:text-gold transition-colors"
                  >
                    <MaterialIcon name="mail" />
                  </a>
                  <span className="text-outline text-sm font-bold uppercase tracking-widest">
                    LinkedIn
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 flex flex-col md:flex-row gap-8 shadow-sm">
              <div className="w-40 h-40 bg-neutral-200 flex-shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Dheeraj"
                  className="w-full h-full object-cover grayscale-[20%]"
                  src={siteImages.portraitDheeraj}
                />
              </div>
              <div>
                <h3 className="font-headline font-bold text-3xl mb-2 uppercase text-ink">
                  Dheeraj
                </h3>
                <p className="text-gold font-bold text-xs uppercase tracking-widest mb-6">
                  Co-Founder & Strategy Director
                </p>
                <p className="text-ink/80 text-sm leading-relaxed mb-6">
                  Dheeraj bridges the gap between vision and financial reality. His
                  background in strategic finance and concept development ensures
                  that every creative decision aligns with aggressive profitability
                  and market positioning.
                </p>
                <div className="flex gap-4">
                  <a
                    href="mailto:hello@rollingsleeves.com"
                    className="text-outline hover:text-gold transition-colors"
                  >
                    <MaterialIcon name="mail" />
                  </a>
                  <span className="text-outline text-sm font-bold uppercase tracking-widest">
                    LinkedIn
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-32 px-6 md:px-20 text-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionLabel className="mb-8">What we stand for</SectionLabel>
            <h2 className="font-headline font-bold text-4xl md:text-6xl text-white leading-tight tracking-tighter mb-8 uppercase">
              Built on these <br />
              principles
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              We don&apos;t believe in passive consulting. We believe in active
              partnership. These are the core values that dictate how we operate,
              who we hire, and how we deliver results for every single concept we
              touch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#222] p-8 border-l-4 border-gold"
              >
                <MaterialIcon
                  name={v.icon}
                  className="text-gold mb-6 text-3xl"
                />
                <h4 className="font-headline font-bold text-xl text-white mb-2 uppercase">
                  {v.title}
                </h4>
                <p className="text-on-surface-variant text-sm">{v.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-32 px-6 md:px-20 relative overflow-hidden text-ink">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <SectionLabel className="mb-8">Our process</SectionLabel>
            <h2 className="font-headline font-bold text-4xl md:text-5xl tracking-tighter uppercase">
              From first call to full launch
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-gold/40 -z-10" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              {[
                {
                  n: "1",
                  t: "Discovery Call",
                  d: "Initial assessment to understand your vision, challenges, and goals.",
                },
                {
                  n: "2",
                  t: "Research & Strategy",
                  d: "Deep dive into market positioning, financial modeling, and operational planning.",
                },
                {
                  n: "3",
                  t: "Build & Execute",
                  d: "Boots on the ground implementation of systems, menus, and team training.",
                },
                {
                  n: "4",
                  t: "Launch & Support",
                  d: "Guiding you through soft launch and providing ongoing operational support.",
                },
              ].map((step) => (
                <div key={step.n}>
                  <div className="w-24 h-24 mx-auto bg-ink text-gold font-headline font-extrabold text-4xl flex items-center justify-center rounded-full mb-6 shadow-lg">
                    {step.n}
                  </div>
                  <h4 className="font-headline font-bold text-xl text-ink mb-4 uppercase">
                    {step.t}
                  </h4>
                  <p className="text-ink/70 text-sm">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink grid grid-cols-1 lg:grid-cols-2 text-cream">
        <div className="min-h-[500px] lg:min-h-[600px] relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
            src={siteImages.heroRestaurant}
          />
        </div>
        <div className="p-12 md:p-24 flex flex-col justify-center">
          <SectionLabel className="mb-8 w-max">Why choose us</SectionLabel>
          <h2 className="font-headline font-bold text-4xl md:text-5xl tracking-tighter mb-12 uppercase text-white">
            WE DON&apos;T JUST CONSULT.
            <br />
            WE DO THE WORK.
          </h2>
          <div className="space-y-8">
            {[
              {
                t: "Operator-Led Expertise",
                d: "We've run the kitchens, managed the floors, and balanced the books. We know what actually works in practice, not just on paper.",
              },
              {
                t: "Tailored Solutions",
                d: "No cookie-cutter templates. Every system is bespoke to your specific concept, team size, and market position.",
              },
              {
                t: "End-to-End Support",
                d: "From the initial napkin sketch to post-launch optimization, we are with you at every critical milestone.",
              },
              {
                t: "Focus on Profitability",
                d: "Beautiful design means nothing without a bottom line. We engineer everything for maximum financial yield.",
              },
            ].map((item) => (
              <div key={item.t} className="flex items-start gap-4">
                <MaterialIcon
                  name="arrow_forward"
                  className="text-gold mt-1 shrink-0"
                />
                <div>
                  <h4 className="font-bold text-white text-lg mb-2">{item.t}</h4>
                  <p className="text-on-surface-variant text-sm">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-32 px-6 md:px-20 text-ink">
        <div className="max-w-7xl mx-auto text-center">
          <SectionLabel className="mb-8">Brands we&apos;ve worked with</SectionLabel>
          <h2 className="font-headline font-bold text-4xl md:text-5xl tracking-tighter mb-20 uppercase">
            50+ concepts across UAE & GCC
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity">
            {brandIcons.map((icon, i) => (
              <div
                key={brandLabels[i]}
                className={`flex flex-col items-center gap-4 group ${
                  i >= 9 ? "hidden md:flex" : ""
                }`}
              >
                <div className="w-24 h-24 rounded-full bg-[#e5e2e1] flex items-center justify-center text-ink/30 group-hover:bg-gold group-hover:text-white transition-colors">
                  <MaterialIcon name={icon} className="text-3xl" />
                </div>
                <span className="font-bold text-sm tracking-widest uppercase text-ink">
                  {brandLabels[i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-40 overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="w-full h-full object-cover grayscale-[30%]"
            src={siteImages.aboutCta}
          />
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-headline font-extrabold text-5xl md:text-7xl text-white leading-tight tracking-tighter mb-10 uppercase">
            READY TO BUILD <br />
            <span className="text-gold">SOMETHING GREAT?</span>
          </h2>
          <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">
            Let&apos;s turn your vision into a high-performance operation.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Button asChild size="lg">
              <Link href="/contact">
                Book a free call
                <MaterialIcon name="rocket_launch" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">See our services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
