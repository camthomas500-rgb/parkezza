import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Parkezza curates high-end and standard outdoor site furnishings for resorts, developments, golf courses, and public spaces.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        About Parkezza
      </p>
      <h1 className="mt-2 font-display text-4xl text-charcoal">
        Furnishings with purpose and presence
      </h1>

      <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
        <p>
          Parkezza is your source for curated outdoor site furnishings — from
          signature premium lines to dependable essential products for public
          spaces that endure.
        </p>
        <p>
          We partner with landscape architects, developers, municipalities,
          resorts, golf courses, HOAs, and recreation districts on benches,
          shade, shelters, bollards, waste receptacles, commercial umbrellas,
          dog park amenities, and coordinated streetscape packages.
        </p>
        <p>
          Whether you are specifying a resort pool deck, upgrading a municipal
          parkway, or furnishing a new community center, Parkezza delivers
          options, specification support, quantities, and project quotes
          aligned to your timeline.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="rounded-full bg-charcoal px-8 py-3 text-sm font-medium text-ivory"
        >
          View Products
        </Link>
      </div>
    </div>
  );
}
