import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FaqSection } from "@/components/home/FaqSection";
import { MarketsSection } from "@/components/home/MarketsSection";
import {
  PRIMARY_STATES,
  UTAH_LOCAL_CITIES,
  UTAH_LOCAL_COUNTIES,
} from "@/lib/regions";
import { pageMetadata, SITE_DESCRIPTION } from "@/lib/seo";

const SERVICE_AREAS = [
  ...UTAH_LOCAL_CITIES,
  ...UTAH_LOCAL_COUNTIES,
  ...PRIMARY_STATES,
  "Nationwide",
];

/**
 * Index page (site homepage) — same role as index.html on your other sites.
 * Customer-facing nav label stays "Home". Route: /
 */
export const metadata = pageMetadata({
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function IndexPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <p className="font-display text-3xl leading-tight text-bronze sm:text-4xl md:text-5xl">
          Outdoor Site Furnishings
        </p>
        <h1 className="mt-3 w-full font-display text-base leading-snug text-charcoal md:text-lg lg:text-xl">
          Commercial outdoor site furnishings for resorts, developments, golf
          courses, and HOAs, bringing beauty to community parks, walkways, and
          public spaces, with the durable craftsmanship trusted by municipal,
          government, and military installations nationwide.
        </h1>
        <div className="mt-8">
          <CategoryGrid />
        </div>
      </section>

      <MarketsSection />

      <FaqSection />

      <section className="border-t border-border bg-stone/40">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
            Where We Serve
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-charcoal md:text-4xl">
            Curated furnishings for distinguished outdoor environments
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-snug text-muted-foreground">
            Select outdoor site amenities for resorts, golf courses,
            developments, municipal facilities, parks, and recreation centers
            across:
          </p>
          <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <li
                key={area}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-charcoal"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
