import Link from "next/link";
import { ServiceAreaFooter } from "@/components/layout/ServiceAreaFooter";
import {
  PRIMARY_STATES_PHRASE,
  UTAH_LOCAL_PHRASE,
} from "@/lib/regions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About — Outdoor Site Furnishings in Utah & Beyond",
  description: `Parkezza curates commercial outdoor site furnishings for municipalities, resorts, and HOAs around ${UTAH_LOCAL_PHRASE}, across ${PRIMARY_STATES_PHRASE}, and nationwide.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
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
            Utah roots, Intermountain focus, projects nationwide. Based in
            Utah’s resort corridor, we can meet in person when it helps—and we
            quote and support specification packages across the country,
            including civic, hospitality, HOA, and federal or military facility
            work.
          </p>
          <p>
            Whether you are specifying a resort amenity zone, upgrading a
            municipal park, furnishing an HOA dog park, or outfitting a federal
            or military facility, Parkezza delivers options, specification
            support, quantities, and project quotes aligned to your timeline.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-full bg-charcoal px-8 py-3 text-sm font-medium text-ivory"
          >
            View Products
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-border px-8 py-3 text-sm font-medium text-charcoal"
          >
            Installed Projects
          </Link>
          <Link
            href="/resources"
            className="rounded-full border border-border px-8 py-3 text-sm font-medium text-charcoal"
          >
            Resources
          </Link>
        </div>
      </div>

      <ServiceAreaFooter />
    </>
  );
}
