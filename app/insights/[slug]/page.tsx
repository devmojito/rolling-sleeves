import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/sections";
import { SectionLabel } from "@/components/section-label";
import { articles } from "@/lib/articles";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const a = articles.find((x) => x.slug === params.slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.description, publishedTime: a.date },
  };
}

export default function ArticlePage({ params }: Props) {
  const a = articles.find((x) => x.slug === params.slug);
  if (!a) notFound();
  const service = services.find((s) => s.slug === a.service);
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    mainEntityOfPage: `${siteConfig.url}/insights/${a.slug}`,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, logo: `${siteConfig.url}/large-dark.png` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="bg-cream text-espresso pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionLabel variant="light" className="mb-6">
            {a.category} · {a.readMinutes} min read
          </SectionLabel>
          <h1 className="font-headline font-medium text-4xl md:text-6xl leading-[1.08] mb-8">{a.title}</h1>
          <p className="text-xl text-espresso/70 leading-relaxed mb-12">{a.description}</p>
          <div className="space-y-10 text-lg leading-relaxed text-espresso/85">
            {a.body.map((b, i) => (
              <section key={i} className="space-y-4">
                {b.h && <h2 className="font-headline text-3xl text-espresso leading-tight">{b.h}</h2>}
                {b.p?.map((t, j) => <p key={j}>{t}</p>)}
                {b.list && (
                  <ul className="list-disc pl-6 space-y-2 marker:text-espresso/40">
                    {b.list.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
          {service && (
            <aside className="mt-16 border-t border-espresso/15 pt-10">
              <p className="text-xs uppercase tracking-[0.22em] text-espresso/55 mb-3">Related service</p>
              <Link href={`/services/${service.slug}`} className="font-headline text-3xl hover:underline underline-offset-4 decoration-1">
                {service.title}
              </Link>
              <p className="text-espresso/70 mt-2">{service.summary}</p>
            </aside>
          )}
          <aside className="mt-14 border-t border-espresso/15 pt-10">
            <p className="text-xs uppercase tracking-[0.22em] text-espresso/55 mb-6">More insights</p>
            <ul className="space-y-4">
              {more.map((m) => (
                <li key={m.slug}>
                  <Link href={`/insights/${m.slug}`} className="font-headline text-2xl hover:underline underline-offset-4 decoration-1">
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>
      <FinalCta />
    </>
  );
}
