import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FaqSection } from "@/components/home/FaqSection";
import { MarketsSection } from "@/components/home/MarketsSection";
import { LetsTalk } from "@/components/layout/LetsTalk";
import { pageMetadata, SITE_DESCRIPTION } from "@/lib/seo";

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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
          Outdoor Site Furnishings
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-3xl leading-tight text-charcoal md:text-4xl">
          Curated furnishings
          <br />
          for distinguished outdoor environments
        </h1>
        <p className="mt-4 text-base leading-snug text-muted-foreground">
          Select outdoor site amenities for resorts, golf courses,
          developments, municipal facilities, parks, and recreation centers.
          Specification support, quantities, and project quotes nationwide.
        </p>
        <div className="mt-8">
          <CategoryGrid />
        </div>
      </section>

      <MarketsSection />

      <FaqSection />

      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-charcoal md:text-4xl">
          Ready to specify your project?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Include drawings or site plans, product categories, quantities, finish
          preferences, and your timeline — we will respond with options and
          pricing.
        </p>
        <div className="mt-8 flex justify-center">
          <LetsTalk variant="inline" />
        </div>
      </section>
    </>
  );
}
