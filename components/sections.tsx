import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";
import { founders, journey, testimonials, caseStudies } from "@/lib/services";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { articles } from "@/lib/articles";

export function FoundersSection() {
  return (
    <section className="bg-cream py-28 px-6 md:px-20 text-espresso">
      <div className="max-w-7xl mx-auto">
        <SectionLabel variant="light" className="mb-6">
          The Founders
        </SectionLabel>
        <h2 className="font-headline font-medium text-4xl md:text-5xl leading-tight mb-6 max-w-3xl">
          The people who roll up their sleeves.
        </h2>
        <p className="text-espresso/70 text-lg leading-relaxed max-w-2xl mb-16">
          When you work with Rolling Sleeves, you work with the founders. They
          are on site, in the kitchen and on the floor with your team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-espresso/10">
          {founders.map((f) => (
            <div key={f.name} className="bg-cream p-10 flex gap-8 items-start">
              <div
                aria-hidden
                className="w-20 h-20 shrink-0 rounded-full border border-espresso/25 flex items-center justify-center font-headline text-3xl text-espresso/80"
              >
                {f.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-headline font-medium text-3xl mb-1">{f.name}</h3>
                <p className="text-espresso/60 text-xs uppercase tracking-[0.22em] font-semibold mb-5">
                  {f.role}
                </p>
                <p className="text-espresso/75 leading-relaxed">{f.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JourneySection() {
  return (
    <section className="bg-ink py-28 px-6 md:px-20 text-cream">
      <div className="max-w-7xl mx-auto">
        <SectionLabel className="mb-6">The Restaurant Journey</SectionLabel>
        <h2 className="font-headline font-medium text-4xl md:text-5xl leading-tight mb-6 max-w-3xl">
          From the first idea to a restaurant that runs well.
        </h2>
        <p className="text-cream/65 text-lg leading-relaxed max-w-2xl mb-16">
          Bring us in at any stage. We can take a project the whole way, or step
          in where you need us.
        </p>
        <ol className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-cream/10">
          {journey.map((step, i) => (
            <li key={step.title} className="bg-ink p-6 lg:p-5">
              <div className="font-label text-xs tracking-[0.2em] text-sand/70 mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-headline text-2xl mb-2">{step.title}</div>
              <p className="text-cream/60 text-sm leading-relaxed">{step.blurb}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CaseStudiesSection() {
  if (caseStudies.length === 0) return null;
  return (
    <section className="bg-cream py-28 px-6 md:px-20 text-espresso">
      <div className="max-w-7xl mx-auto">
        <SectionLabel variant="light" className="mb-6">
          Selected Case Studies
        </SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {caseStudies.map((c) => (
            <article key={c.title} className="border-t border-espresso/15 pt-8">
              <p className="text-xs uppercase tracking-[0.22em] text-espresso/60 mb-3">
                {c.type} · {c.location}
              </p>
              <h3 className="font-headline text-3xl mb-6">{c.title}</h3>
              <dl className="space-y-4 text-espresso/80">
                {(
                  [
                    ["Challenge", c.challenge],
                    ["Our scope", c.scope],
                    ["Approach", c.approach],
                    ["Results", c.results],
                  ] as const
                ).map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-semibold text-espresso">{k}</dt>
                    <dd className="leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  if (testimonials.length === 0) return null;
  return (
    <section className="bg-ink py-28 px-6 md:px-20 text-cream">
      <div className="max-w-7xl mx-auto">
        <SectionLabel className="mb-10">Client Voices</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-t border-cream/15 pt-8">
              <blockquote className="font-headline text-2xl leading-snug mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="text-sm text-cream/65">
                <span className="text-cream font-semibold">{t.name}</span>, {t.company}
                {t.project ? ` · ${t.project}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InsightsSection() {
  return (
    <section className="bg-ink py-28 px-6 md:px-20 text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel className="mb-6">Insights</SectionLabel>
            <h2 className="font-headline font-medium text-4xl md:text-5xl leading-tight">
              Notes from the kitchen.
            </h2>
          </div>
          <Link
            href="/insights"
            className="text-xs uppercase tracking-[0.22em] font-semibold text-cream/70 hover:text-cream"
          >
            All insights →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
          {articles.slice(0, 3).map((a) => (
            <Link
              key={a.slug}
              href={`/insights/${a.slug}`}
              className="group bg-ink p-8 hover:bg-surface-container transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-sand/70 mb-4">{a.category}</p>
              <h3 className="font-headline text-2xl leading-snug mb-3 group-hover:text-sand transition-colors">
                {a.title}
              </h3>
              <p className="text-cream/60 leading-relaxed">{a.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta({
  title = "Let's build your restaurant.",
  text = "Tell us where your project stands. The founders will come back to you personally.",
}: {
  title?: string;
  text?: string;
}) {
  const wa = whatsappLink("Hi Rolling Sleeves, I'd like to talk about my restaurant project.");
  return (
    <section className="bg-espresso py-28 px-6 text-cream">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-headline font-medium text-4xl md:text-6xl leading-tight mb-6">
          {title}
        </h2>
        <p className="text-cream/75 text-lg mb-10">{text}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link href={siteConfig.ctaHref}>{siteConfig.ctaLabel}</Link>
          </Button>
          {wa && (
            <Button asChild size="lg" variant="outline">
              <a href={wa} target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
