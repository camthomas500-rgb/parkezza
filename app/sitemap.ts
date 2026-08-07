import type { MetadataRoute } from "next";
import { getGalleries } from "@/lib/content";
import { getProjects } from "@/lib/projects";
import { getResourceSlugs } from "@/lib/resources";
import { absoluteUrl, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const galleries = getGalleries();

  const galleryRoutes = galleries.map((gallery) => {
    const galleryImages = [
      gallery.heroImage,
      ...gallery.images.map((img) => img.src),
      ...(gallery.sections?.flatMap((s) => s.images.map((img) => img.src)) ??
        []),
    ]
      .filter(Boolean)
      .slice(0, 20)
      .map((src) => absoluteUrl(src));

    return {
      url: `${SITE_URL}/galleries/${gallery.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: galleryImages,
    };
  });

  const projectImages = getProjects()
    .map((p) => p.image)
    .filter((src): src is string => Boolean(src))
    .map((src) => absoluteUrl(src));

  const resourceRoutes = getResourceSlugs().map((slug) => ({
    url: `${SITE_URL}/resources/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl("/logo-parkezza.png")],
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
      images: projectImages,
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
