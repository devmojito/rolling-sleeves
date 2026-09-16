export const siteConfig = {
  name: "Rolling Sleeves",
  url: "https://www.rollingsleeves.com",
  tagline: "Operators First. Consultants Second.",
  description:
    "Hands-on restaurant and F&B consultancy in the UAE. Concept, kitchen planning, menu, pre-opening, launch and operations, run by people who operate restaurants.",
  email: "hello@rollingsleeves.com",
  // Digits only, with country code (e.g. "9715XXXXXXXX"). Leave empty to hide
  // every WhatsApp button until the real number is confirmed.
  whatsappNumber: "",
  phoneDisplay: "",
  location: "Abu Dhabi, UAE",
  ctaLabel: "Book a Consultation",
  ctaHref: "/contact#enquiry",
} as const;

export function whatsappLink(message?: string) {
  if (!siteConfig.whatsappNumber) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${siteConfig.whatsappNumber}${text}`;
}
