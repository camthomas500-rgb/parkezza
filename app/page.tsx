import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FaqSection } from "@/components/home/FaqSection";
import { MarketsSection } from "@/components/home/MarketsSection";
import { ServiceAreaFooter } from "@/components/layout/ServiceAreaFooter";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { pageMetadata, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";

/**
 * Index page (site homepage) — same role as index.html on your other sites.
 * Customer-facing nav label stays "Home". Route: /
 */
export const metadata: Metadata = {
  ...pageMetadata({
    description: SITE_DESCRIPTION,
    path: "/",
  }),
  // Absolute title so the homepage never inherits a template/blank title edge case
  title: {
    absolute: SITE_TITLE,
  },
};

function QuoteFormFallback() {
  return (
    <div className="rounded-2xl border border-border bg-white p-8 text-center text-muted-foreground">
      Loading form…
    </div>
  );
}

export default function IndexPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <p className="text-center font-display text-2xl leading-tight text-bronze sm:text-3xl md:text-4xl">
          Outdoor Site Furnishings
        </p>
        <h1 className="mx-auto mt-3 max-w-4xl text-center font-display text-lg leading-snug text-charcoal md:text-xl lg:text-2xl">
          Commercial outdoor site furnishings and park amenities for HOAs,
          resorts, and public&nbsp;spaces
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          Utah roots, Intermountain focus, projects nationwide. Parkezza helps
          landscape architects, landscape contractors, resort developers, and
          HOA managers specify durable benches, litter receptacles, shade,
          picnic tables, pool furniture, dog-park stations, and coordinated site
          amenities.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#quote"
            className="inline-flex rounded-full bg-charcoal px-7 py-3 text-sm font-medium text-ivory transition-colors hover:bg-charcoal/90"
          >
            Request a quote
          </a>
          <Link
            href="/projects"
            className="inline-flex rounded-full border border-border bg-white px-7 py-3 text-sm font-medium text-charcoal transition-colors hover:border-charcoal/30"
          >
            See installed projects
          </Link>
        </div>
        <div className="mt-10">
          <CategoryGrid />
        </div>
      </section>

      <MarketsSection />

      <section
        id="quote"
        className="scroll-mt-24 border-t border-border bg-stone/30"
      >
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
            Start a conversation
          </p>
          <h2 className="mt-3 font-display text-3xl text-charcoal md:text-4xl">
            Tell us what your site needs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Add every product category you are considering—benches, litter
            receptacles, pool furniture, shade, dog waste stations, and more.
            Landscape architects and contractors: note quantities, finishes, and
            drawings in Project Details. HOAs and resort teams: share amenity
            goals and timeline. We typically respond within one business day.
          </p>
          <div className="mt-8">
            <Suspense fallback={<QuoteFormFallback />}>
              <QuoteForm />
            </Suspense>
          </div>
        </div>
      </section>

      <FaqSection />

      <ServiceAreaFooter
        contactNote={
          <>
            Prefer email or phone?{" "}
            <Link
              href="/contact"
              className="font-medium text-bronze underline underline-offset-2 hover:text-charcoal"
            >
              Contact Parkezza
            </Link>{" "}
            anytime—or send the quote form above.
          </>
        }
      />
    </>
  );
}
