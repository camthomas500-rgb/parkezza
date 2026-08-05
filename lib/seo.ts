import type { Metadata } from "next";
import { CATEGORY_NAV, type Gallery } from "@/lib/content";
import {
  PRIMARY_STATES,
  PRIMARY_STATES_PHRASE,
  UTAH_LOCAL_PHRASE,
} from "@/lib/regions";

export const SITE_URL = "https://parkezza.com";
export const SITE_NAME = "Parkezza";

export const SITE_DESCRIPTION =
  `Commercial outdoor site furnishings for resorts, golf courses, HOAs, and municipal parks around ${UTAH_LOCAL_PHRASE}, across ${PRIMARY_STATES_PHRASE}, and nationwide—benches, litter receptacles, shade, picnic tables, and more.`;

/** Search-intent titles for gallery SERP snippets (H1 on page stays the short category name). */
export const GALLERY_SEO: Record<
  string,
  { title: string; description?: string }
> = {
  benches: {
    title: "Commercial Outdoor Benches for Parks, Resorts & Campuses",
    description:
      "Specify commercial outdoor benches in recycled plastic, wood, steel, and aluminum for parks, schools, resorts, plazas, and public spaces. Mounting options and low-maintenance finishes. Request a quote.",
  },
  "litter-receptacles": {
    title: "Commercial Litter Receptacles & Recycling for Parks & Streetscapes",
    description:
      "Commercial litter receptacles and dual-stream recycling units that coordinate with benches for parks, plazas, resorts, campuses, and municipal streetscapes. Request a project quote.",
  },
  "shade-structures": {
    title: "Park Shade Structures & Shelters for Recreation Sites",
    description:
      "Commercial shade structures and park shelters—hip, arch, gable, octagon, trellis, covered walkways, and fabric sails—for parks, dog parks, campuses, and public gathering areas.",
  },
  bollards: {
    title: "Architectural & Security Bollards for Streetscapes",
    description:
      "Architectural and security bollards for campuses, plazas, facility entries, and traffic calming. Lighted, removable, and retractable options that coordinate with site furnishings.",
  },
  "dog-waste-stations": {
    title: "Dog Waste Stations & Dog Park Amenities",
    description:
      "Dog waste stations, bag dispensers, and dog-park amenities for municipal parks, HOA trails, and off-leash areas. Browse featured models and the full sister catalog.",
  },
  umbrellas: {
    title: "Commercial Patio Umbrellas & Cantilever Shade",
    description:
      "Wind-rated commercial patio umbrellas and cantilever shade for resorts, pool decks, restaurants, and hospitality outdoor dining. Explore featured systems and the full catalog.",
  },
  "picnic-tables": {
    title: "Commercial Picnic Tables & ADA Picnic Areas",
    description:
      "Heavy-duty picnic tables for parks, recreation centers, schools, and outdoor dining. Expanded-metal and concrete options with ADA-oriented configurations available.",
  },
  "pergolas-gazebos": {
    title: "Commercial Pergolas & Trellis for Resorts & Golf Courses",
    description:
      "Architectural pergolas and trellis structures for resorts, golf courses, hospitality courtyards, and distinguished outdoor environments. Request a specification quote.",
  },
  "bike-racks": {
    title: "Commercial Bike Racks for Campuses & Streetscapes",
    description:
      "Commercial bike racks and secure bicycle parking for campuses, streetscapes, transit stops, and public plazas. Loop and decorative designs that coordinate with site furnishings.",
  },
  flagpoles: {
    title: "Commercial Flagpoles for Civic, Campus & Corporate Sites",
    description:
      "Commercial flagpoles in Standard, Premium, and Heavy Duty grades with internal or external halyards. Heights 20–70 ft for civic, campus, and corporate sites.",
  },
  "tree-guards": {
    title: "Tree Guards & Streetscape Tree Protection",
    description:
      "Decorative tree guards that protect trunks and root zones for streetscapes, campuses, and urban plantings. Coordinate finishes with benches, bollards, and litter receptacles.",
  },
};

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
    question: "Does Parkezza serve Park City, Kamas City, Heber City, and nearby Utah counties?",
    answer: `Yes. Northern Utah around ${UTAH_LOCAL_PHRASE} is a core local market—municipal parks, dog parks, resort amenity zones, and new community developments. We have supplied benches, litter receptacles, and dog-park benches and obstacles for Summit County, Utah projects.`,
  },
  {
    question: "Does Parkezza serve Utah, Nevada, Idaho, Wyoming, and Montana?",
    answer: `Yes. The Intermountain West—${PRIMARY_STATES_PHRASE}—is a primary focus for parks, resorts, HOAs, golf courses, and municipal projects. We also quote and support outdoor site furnishing projects nationwide, including federal and military facilities.`,
  },
  {
    question: "Does Parkezza ship nationwide?",
    answer:
      "Yes. Parkezza supports project quotes, quantities, and specification guidance for outdoor site furnishing projects nationwide—not only in the Intermountain West.",
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
  {
    question: "Can landscape contractors and architects specify matching site furniture packages?",
    answer:
      "Yes. Landscape contractors, landscape architects, and developers regularly specify coordinated packages—benches with matching litter receptacles, bollards, picnic tables, and shade—so finishes and materials align across the site plan.",
  },
  {
    question: "Do you supply outdoor furniture for HOA amenities and resort pool decks?",
    answer:
      "Yes. HOAs, master-planned communities, resorts, and golf clubs use Parkezza for community amenity seating, litter receptacles, shade structures, picnic areas, commercial umbrellas, and dog-park stations.",
  },
  {
    question: "What materials are available for commercial park benches and litter receptacles?",
    answer:
      "Common options include recycled plastic, wood, powder-coated steel, thermoplastic coating, aluminum, and thermally modified ash. Litter receptacles are available in steel and recycled-plastic styles, including dual-stream recycling models.",
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
    description: `Commercial outdoor site furnishings for resorts, developments, golf courses, HOAs, municipal facilities, parks, and public spaces across ${PRIMARY_STATES_PHRASE} and nationwide.`,
    email: "projects@parkezza.com",
    areaServed: [
      { "@type": "Country", name: "United States" },
      ...PRIMARY_STATES.map((name) => ({ "@type": "State", name })),
    ],
    knowsAbout: [
      ...CATEGORY_NAV.map((c) => c.name),
      "outdoor site furnishings",
      "commercial outdoor furniture",
      "park benches",
      "site amenities",
      "streetscape furnishings",
      "park shelters",
      "Intermountain West site furnishings",
      "Park City site furnishings",
      "Kamas City Utah site furnishings",
      "Heber City outdoor furniture",
      "Wasatch County park furniture",
      "Summit County site amenities",
    ],
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
