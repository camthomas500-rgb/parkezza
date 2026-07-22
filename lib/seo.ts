import type { Metadata } from "next";
import { CATEGORY_NAV, type Gallery } from "@/lib/content";

export const SITE_URL = "https://parkezza.com";
export const SITE_NAME = "Parkezza";

export const SITE_DESCRIPTION =
  "High-end and standard outdoor site furnishings for resorts, golf courses, developments, municipal facilities, parks, and recreation centers. Request a project quote.";

export type FaqItem = {
  question: string;
  answer: string;
};

/** Homepage FAQ — visible copy + FAQPage JSON-LD for Google and AI answers */
export const HOME_FAQS: FaqItem[] = [
  {
    question: "What outdoor site furnishings does Parkezza offer?",
    answer:
      "Parkezza curates commercial outdoor site furnishings including benches, litter receptacles, shade structures, bollards, dog waste stations, commercial umbrellas, picnic tables, pergolas and trellis, bike racks, flagpoles, and tree guards for public and hospitality environments.",
  },
  {
    question: "Who does Parkezza serve?",
    answer:
      "We work with landscape architects, developers, municipalities, resorts, golf courses, HOAs, recreation districts, and federal or civic projects that need durable outdoor amenities and specification support.",
  },
  {
    question: "Does Parkezza ship nationwide?",
    answer:
      "Yes. Parkezza supports project quotes, quantities, and specification guidance for outdoor site furnishing projects nationwide.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the Request a Quote or Contact form and include product categories, model references when known, quantities, finish preferences, drawings or site plans if available, and your timeline. We typically respond within one business day.",
  },
  {
    question: "What is the difference between Signature and Essential products?",
    answer:
      "Signature lines emphasize premium design and finishes for distinguished outdoor environments. Essential products focus on dependable, high-use performance for parks, campuses, and public spaces—often at a more accessible specification and budget.",
  },
  {
    question: "Do you offer ADA-accessible picnic tables and site amenities?",
    answer:
      "Yes. Selected picnic tables and site amenities are available in ADA-oriented configurations. Note accessibility requirements on your quote request so we can recommend suitable models.",
  },
  {
    question: "Where can I see the full dog park or umbrella catalogs?",
    answer:
      "Dog waste stations and dog-park amenities are expanded on dogparkstations.com. Commercial umbrellas and shade systems are expanded on heavydutyumbrellas.com. Parkezza remains the hub for curated outdoor site furnishing packages.",
  },
];

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  images,
}: {
  title?: string;
  description: string;
  path: string;
  images?: { url: string; alt?: string }[];
}): Metadata {
  const url = absoluteUrl(path);
  const ogImages = images ?? [{ url: "/logo-parkezza.png", alt: SITE_NAME }];
  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Curated Outdoor Site Furnishings`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ogImages.map((img) => img.url),
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/logo-parkezza.png"),
    description:
      "Curated outdoor site furnishings for resorts, developments, golf courses, municipal facilities, and public spaces.",
    email: "projects@parkezza.com",
    areaServed: "US",
    knowsAbout: CATEGORY_NAV.map((c) => c.name),
    sameAs: [
      "https://dogparkstations.com",
      "https://heavydutyumbrellas.com",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function galleryCollectionJsonLd(gallery: Gallery) {
  const images = [
    ...gallery.images,
    ...(gallery.sections?.flatMap((s) => s.images) ?? []),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${gallery.name} | ${SITE_NAME}`,
    description: gallery.overview ?? gallery.description,
    url: absoluteUrl(`/galleries/${gallery.slug}`),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "Thing",
      name: gallery.name,
      description: gallery.description,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: images.slice(0, 24).map((image, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: image.name ?? image.alt,
        url: absoluteUrl(`/galleries/${gallery.slug}`),
        image: absoluteUrl(image.src),
      })),
    },
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
