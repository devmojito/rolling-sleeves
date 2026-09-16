import type { Metadata } from "next";
import { Zilla_Slab, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SitePreloader } from "@/components/site-preloader";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-zilla",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Rolling Sleeves | Restaurant & F&B Consultant UAE, Abu Dhabi",
    template: "%s | Rolling Sleeves",
  },
  description: siteConfig.description,
  keywords: [
    "Restaurant Consultant UAE",
    "Restaurant Consultant Abu Dhabi",
    "Restaurant Kitchen Consultant UAE",
    "Restaurant Pre-Opening Consultant UAE",
    "F&B Consultant UAE",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Rolling Sleeves | Restaurant & F&B Consultant UAE",
    description: siteConfig.description,
    url: siteConfig.url,
    images: ["/large-dark.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/large-dark.png`,
  description: siteConfig.description,
  slogan: siteConfig.tagline,
  areaServed: ["United Arab Emirates", "Abu Dhabi", "Dubai"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abu Dhabi",
    addressCountry: "AE",
  },
  knowsAbout: [
    "Restaurant consulting",
    "Commercial kitchen planning",
    "Menu engineering",
    "Restaurant pre-opening",
    "Restaurant operations",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${zilla.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Load Material Symbols in parallel with the rest of the page.
            Previously imported via @import in globals.css, which is
            render-blocking and serializes network requests. */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        className="bg-ink text-on-surface font-body antialiased flex flex-col"
        suppressHydrationWarning
      >
        <SiteHeader />
        <main className="min-h-0 flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
        <SitePreloader />
      </body>
    </html>
  );
}
