import type { MetadataRoute } from "next";
import { getGalleries } from "@/lib/content";
import { getResourceSlugs } from "@/lib/resources";
import { SITE_URL } from "@/lib/seo";

/**
 * Plain sitemaps.org XML (no Google image extensions).
 * Bing Webmaster Tools is pickier about image namespaces; Google still finds
 * images from page HTML/alt. Keep this file Bing- and Google-compatible.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const galleryRoutes = getGalleries().map((gallery) => ({
    url: `${SITE_URL}/galleries/${gallery.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const resourceRoutes = getResourceSlugs().map((slug) => ({
    url: `${SITE_URL}/resources/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/markets`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/resources`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/quote`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...galleryRoutes,
    ...resourceRoutes,
  ];
}
