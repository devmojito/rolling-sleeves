import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/contact", ...services.map((s) => `/services/${s.slug}`)];
  return pages.map((p) => ({ url: `${siteConfig.url}${p}`, lastModified: new Date() }));
}
