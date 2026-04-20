import type { Metadata } from "next";
import { Epilogue, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800", "900"],
  variable: "--font-epilogue",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rolling Sleeves | Hospitality Consultancy",
    template: "%s | Rolling Sleeves",
  },
  description:
    "Bespoke consultancy for modern hospitality. We bridge the gap between architectural vision and operational excellence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${epilogue.variable} ${manrope.variable}`}>
      <body className="bg-ink text-on-surface font-body antialiased min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
