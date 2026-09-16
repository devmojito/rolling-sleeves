import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { articles } from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/contact", "/insights", ...services.map((s) => `/services/${s.slug}`), ...articles.map((a) => `/insights/${a.slug}`)];
  return pages.map((p) => ({ url: `${siteConfig.url}${p}`, lastModified: new Date() }));
}
