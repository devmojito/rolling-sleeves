import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";
import { MaterialIcon } from "@/components/material-icon";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consultation with Rolling Sleeves — Abu Dhabi based, serving the UAE and GCC.",
};

const trustItems = [
  { icon: "verified" as const, label: "Free consultation" },
  { icon: "bolt" as const, label: "24hr response" },
  { icon: "handshake" as const, label: "No hard sell" },
  { icon: "globe_asia" as const, label: "UAE & GCC coverage" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        imageSrc={siteImages.contactHero}
        label="Get in touch"
        title={
          <>
            LET&apos;S TALK ABOUT YOUR{" "}
            <span className="text-primary-container">RESTAURANT.</span>
          </>
        }
        description="Book a free, no-obligation consultation with our hospitality experts. Let's discuss your vision and how we can turn it into a profitable reality."
      >
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" variant="gradient">
            <Link href="#consultation">
              Book a free call
              <MaterialIcon name="arrow_forward" />
            </Link>
          </Button>
          <Button asChild variant="outline-light" size="lg">
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
              <MaterialIcon name="chat" filled />
            </a>
          </Button>
        </div>
      </PageHero>

      <section
        className="bg-cream py-32 px-6 xl:px-24 relative z-20"
        id="consultation"
      >
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          <div className="lg:col-span-5 space-y-12 text-ink">
            <div className="space-y-6">
              <SectionLabel>Reach us</SectionLabel>
              <h2 className="font-headline font-bold text-4xl md:text-5xl uppercase tracking-wide">
                Based in Abu Dhabi,{" "}
                <span className="font-light">serving the UAE &amp; GCC.</span>
              </h2>
            </div>
            <div className="space-y-8 font-body">
              <div className="flex items-start gap-4">
                <MaterialIcon
                  name="location_on"
                  className="text-primary-container text-3xl shrink-0"
                />
                <div>
                  <h4 className="font-bold text-lg text-ink">Location</h4>
                  <p className="text-ink/70">
                    Abu Dhabi Global Market (ADGM)
                    <br />
                    Al Maryah Island, UAE
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MaterialIcon
                  name="mail"
                  className="text-primary-container text-3xl shrink-0"
                />
                <div>
                  <h4 className="font-bold text-lg text-ink">Email</h4>
                  <a
                    href="mailto:hello@rollingsleeves.com"
                    className="text-ink/70 hover:text-primary-container transition-colors"
                  >
                    hello@rollingsleeves.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MaterialIcon
                  name="phone"
                  className="text-primary-container text-3xl shrink-0"
                />
                <div>
                  <h4 className="font-bold text-lg text-ink">Phone / WhatsApp</h4>
                  <p className="text-ink/70">+971 50 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MaterialIcon
                  name="schedule"
                  className="text-primary-container text-3xl shrink-0"
                />
                <div>
                  <h4 className="font-bold text-lg text-ink">Availability</h4>
                  <p className="text-ink/70">
                    Mon - Fri: 9:00 AM - 6:00 PM (GST)
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-ink/10 grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-full bg-surface-container-high bg-cover bg-center shrink-0"
                  style={{
                    backgroundImage: `url('${siteImages.contactPortrait1}')`,
                  }}
                />
                <div>
                  <h5 className="font-headline font-bold text-primary-container uppercase text-sm tracking-wide">
                    Qaiz
                  </h5>
                  <p className="font-body text-xs text-ink/60">Founder</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-full bg-surface-container-high bg-cover bg-center shrink-0"
                  style={{
                    backgroundImage: `url('${siteImages.contactPortrait2}')`,
                  }}
                />
                <div>
                  <h5 className="font-headline font-bold text-primary-container uppercase text-sm tracking-wide">
                    Dheeraj
                  </h5>
                  <p className="font-body text-xs text-ink/60">
                    Managing Partner
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-surface p-12 lg:p-16 shadow-[0_20px_40px_rgba(232,160,32,0.05)]">
              <div className="mb-12">
                <SectionLabel className="text-xs px-3 py-1 mb-4">
                  Free consultation
                </SectionLabel>
                <h3 className="font-headline font-bold text-3xl uppercase tracking-wide text-cream">
                  Tell us about your project
                </h3>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low border-y border-surface-variant/20 py-16">
        <div className="max-w-[1920px] mx-auto px-6 xl:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 md:divide-x divide-surface-variant/30">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center px-4"
              >
                <MaterialIcon
                  name={item.icon}
                  className="text-primary-container text-4xl mb-4"
                />
                <h4 className="font-headline font-bold text-cream tracking-widest text-sm uppercase">
                  {item.label}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-surface-container-lowest overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black/65" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${siteImages.contactCtaBg}')` }}
        />
        <div className="relative z-10 max-w-[1920px] mx-auto px-6 xl:px-24 text-center">
          <h2 className="font-headline font-black text-4xl md:text-6xl uppercase tracking-[0.05em] text-cream mb-12 max-w-4xl mx-auto leading-tight">
            READY TO OPEN YOUR{" "}
            <span className="text-primary-container">DREAM RESTAURANT?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild size="lg" variant="gradient">
              <Link href="#consultation">
                Book a free call
                <MaterialIcon name="arrow_forward" />
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
