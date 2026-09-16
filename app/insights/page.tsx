import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { FinalCta } from "@/components/sections";
import { articles } from "@/lib/articles";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Restaurant Insights for UAE Owners and Investors",
  description:
    "Practical guides on opening and running a restaurant in the UAE: costs, kitchen planning, food cost, labour, SOPs and menu engineering.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        imageSrc={siteImages.blogFeatured}
        label="Insights"
        title="What we have learned running restaurants."
        description="Practical guides for owners and investors, written by operators."
      />
      <section className="bg-cream py-28 px-6 md:px-20 text-espresso">
        <div className="max-w-5xl mx-auto divide-y divide-espresso/15 border-y border-espresso/15">
          {articles.map((a) => (
            <Link key={a.slug} href={`/insights/${a.slug}`} className="group block py-10">
              <p className="text-xs uppercase tracking-[0.22em] text-espresso/55 mb-3">
                {a.category} · {a.readMinutes} min read
              </p>
              <h2 className="font-headline text-3xl leading-tight mb-3 group-hover:underline underline-offset-4 decoration-1">
                {a.title}
              </h2>
              <p className="text-espresso/70 text-lg leading-relaxed max-w-3xl">{a.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
