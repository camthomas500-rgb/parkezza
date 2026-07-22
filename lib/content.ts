import galleriesData from "@/content/galleries.json";

export interface GalleryImage {
  src: string;
  alt: string;
  source: string;
  tier: "signature" | "essential";
  /** Short reference code shown on the gallery (e.g. BN-01) for quote inquiries */
  id?: string;
  /** Human-readable model / product name */
  name?: string;
  /** Use "contain" for small/low-res photos so they are not upscaled blurry */
  imageFit?: "cover" | "contain";
  /** Scale contained image (0–1) for low-res sources */
  imageScale?: number;
}

export interface GallerySection {
  id: string;
  title?: string;
  description?: string;
  /** Short emphasis line above the description (e.g. Matching benches available.) */
  callout?: string;
  /** 
   * default: title above grid
   * aside-intro: first image left, title/copy right
   * anchor-aside: last main gallery image left; first section image + copy fill the space to its right; remaining images below
   */
  layout?: "default" | "aside-intro" | "anchor-aside";
  images: GalleryImage[];
}

export interface Gallery {
  slug: string;
  name: string;
  tier: "signature" | "essential";
  description: string;
  /** Longer intro copy below the hero (SEO / visitor overview) */
  overview?: string;
  highlights?: string[];
  /** Use "contain" for tall photos (e.g. flagpoles) so the full subject stays visible */
  imageFit?: "cover" | "contain";
  heroImage: string;
  images: GalleryImage[];
  /** Optional grouped sections (e.g. Recycled Plastic on benches) */
  sections?: GallerySection[];
  /** Link to a sister site for full catalog (e.g. heavydutyumbrellas.com) */
  sisterSite?: {
    url: string;
    label: string;
    headline?: string;
    description?: string;
  };
}

/** Priority order for main nav + home category showcase */
export const CATEGORY_NAV = [
  { name: "Benches", slug: "benches" },
  { name: "Litter Receptacles", slug: "litter-receptacles" },
  { name: "Shade Structures", slug: "shade-structures" },
  { name: "Bollards", slug: "bollards" },
  { name: "Dog Waste Stations", slug: "dog-waste-stations" },
  { name: "Commercial Umbrellas", slug: "umbrellas" },
  { name: "Picnic Tables", slug: "picnic-tables" },
  { name: "Pergolas Trellis", slug: "pergolas-gazebos" },
  { name: "Bike Racks", slug: "bike-racks" },
  { name: "Flagpoles", slug: "flagpoles" },
  { name: "Tree Guards", slug: "tree-guards" },
] as const;

export function getGalleries(): Gallery[] {
  const bySlug = Object.fromEntries(
    (galleriesData as Gallery[]).map((g) => [g.slug, g])
  );
  return CATEGORY_NAV.map((item) => bySlug[item.slug]).filter(Boolean);
}

export function getGallery(slug: string): Gallery | undefined {
  const aliases: Record<string, string> = {
    "waste-receptacles": "litter-receptacles",
    "dog-park-stations": "dog-waste-stations",
    "tree-grates": "tree-guards",
  };
  const resolved = aliases[slug] ?? slug;
  return getGalleries().find((g) => g.slug === resolved);
}

export function getGallerySlugs(): string[] {
  return getGalleries().map((g) => g.slug);
}

export const MARKETS = [
  {
    title: "Resorts & Hospitality",
    description:
      "Pool decks, lobbies, and outdoor dining furnished with coordinated shade, seating, and site amenities.",
  },
  {
    title: "Golf Courses & Clubs",
    description:
      "Benches, bollards, and gathering furnishings that complement premium landscape architecture.",
  },
  {
    title: "Developments & HOAs",
    description:
      "Streetscapes, parkways, and community amenities specified for long-term durability and curb appeal.",
  },
  {
    title: "Municipal & Federal",
    description:
      "Parks, parkways, civic plazas, and public facilities with specification support and project quotes.",
  },
  {
    title: "Recreation & Community Centers",
    description:
      "Picnic areas, shelters, and outdoor gathering spaces built for heavy public use.",
  },
  {
    title: "Dog Parks & Trails",
    description:
      "Waste stations, agility equipment, and dog-specific furnishings for dedicated off-leash environments.",
  },
] as const;

export const PRODUCT_INTEREST_OPTIONS = CATEGORY_NAV.map((c) => ({
  value: c.name,
  slug: c.slug,
}));

/** Prefer explicit name; otherwise derive from alt ("Benches — Lily VS1" → "Lily VS1") */
export function getImageLabel(image: GalleryImage): string {
  if (image.name) return image.name;
  const sep = image.alt.indexOf(" — ");
  return sep >= 0 ? image.alt.slice(sep + 3) : image.alt;
}

/** All images in a gallery (main + sections) with stable inquiry labels */
export function getGalleryInquiryItems(gallery: Gallery): {
  id: string;
  label: string;
}[] {
  const images = [
    ...gallery.images,
    ...(gallery.sections?.flatMap((s) => s.images) ?? []),
  ];
  const prefix =
    gallery.slug === "benches"
      ? "BN"
      : gallery.slug
          .split("-")
          .map((w) => w[0]?.toUpperCase() ?? "")
          .join("")
          .slice(0, 3) || "ITEM";

  return images.map((image, index) => {
    const name = getImageLabel(image);
    if (image.id) {
      return { id: image.id, label: `${image.id} — ${name}` };
    }
    if (image.name) {
      return { id: image.name, label: image.name };
    }
    const generated = `${prefix}-${String(index + 1).padStart(2, "0")}`;
    return { id: generated, label: `${generated} — ${name}` };
  });
}
