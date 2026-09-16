import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionLabel } from "@/components/section-label";
import { PageHero } from "@/components/page-hero";
import { FinalCta } from "@/components/sections";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { siteImages } from "@/lib/site-images";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default function ServicePage({ params }: Props) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.seoTitle,
    description: s.seoDescription,
    areaServed: "United Arab Emirates",
    provider: { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        imageSrc={siteImages.servicesHero}
        label={`Service ${s.n}`}
        title={s.title}
        description={s.summary}
      />

      <section className="bg-cream py-28 px-6 md:px-20 text-espresso">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionLabel variant="light" className="mb-6">
              What&apos;s Included
            </SectionLabel>
            <h2 className="font-headline font-medium text-4xl leading-tight mb-6">
              Hands-on, from people who run restaurants.
            </h2>
            <p className="text-espresso/75 text-lg leading-relaxed">
              {siteConfig.tagline} We work on site with your team, so the plan
              becomes how the restaurant actually operates.
            </p>
          </div>
          <ul className="lg:col-span-7 divide-y divide-espresso/15 border-y border-espresso/15">
            {s.includes.map((item) => (
              <li key={item} className="py-6 font-headline text-2xl">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink py-20 px-6 md:px-20 text-cream">
        <div className="max-w-7xl mx-auto">
          <SectionLabel className="mb-8">Other Services</SectionLabel>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-cream/10">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/services/${o.slug}`}
                  className="block h-full bg-ink p-6 font-headline text-xl hover:bg-surface-container transition-colors"
                >
                  {o.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
