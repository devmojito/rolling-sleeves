import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Contact a Restaurant Consultant in Abu Dhabi, UAE",
  description:
    "Tell Rolling Sleeves about your restaurant, café, cloud kitchen or hotel F&B project. Based in Abu Dhabi, working across the UAE.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const wa = whatsappLink("Hi Rolling Sleeves, I'd like to talk about my restaurant project.");

  return (
    <>
      <PageHero
        imageSrc={siteImages.contactHero}
        label="Contact"
        title="Let's build your restaurant."
        description="Tell us where your project stands. The founders read every enquiry and reply personally."
      >
        {wa && (
          <Button asChild size="lg">
            <a href={wa} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
          </Button>
        )}
      </PageHero>

      <section id="enquiry" className="bg-cream py-28 px-6 xl:px-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 text-espresso space-y-10">
            <div>
              <SectionLabel variant="light" className="mb-6">
                Reach Us
              </SectionLabel>
              <h2 className="font-headline font-medium text-4xl leading-tight">
                Based in {siteConfig.location}, working across the UAE.
              </h2>
            </div>
            <dl className="space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-espresso/55 mb-1">Email</dt>
                <dd>
                  <a href={`mailto:${siteConfig.email}`} className="text-lg hover:underline">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              {siteConfig.phoneDisplay && (
                <div>
                  <dt className="text-xs uppercase tracking-[0.22em] text-espresso/55 mb-1">
                    Phone / WhatsApp
                  </dt>
                  <dd className="text-lg">{siteConfig.phoneDisplay}</dd>
                </div>
              )}
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-espresso/55 mb-1">Hours</dt>
                <dd className="text-lg">Monday to Friday, 9:00 to 18:00 (GST)</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-ink p-8 md:p-12 lg:p-16">
              <h3 className="font-headline font-medium text-3xl text-cream mb-10">
                Tell us about your project
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
