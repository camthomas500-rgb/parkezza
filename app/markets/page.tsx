import Link from "next/link";
import { CATEGORY_NAV, MARKETS } from "@/lib/content";
import { LetsTalk } from "@/components/layout/LetsTalk";
import { ServiceAreaFooter } from "@/components/layout/ServiceAreaFooter";
import {
  PRIMARY_STATES_PHRASE,
  UTAH_LOCAL_PHRASE,
} from "@/lib/regions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Markets We Serve — Resorts, HOAs, Parks & More",
  description: `Outdoor site furnishings for resorts, golf courses, HOAs, and municipal parks around ${UTAH_LOCAL_PHRASE}, across ${PRIMARY_STATES_PHRASE}, and nationwide.`,
  path: "/markets",
});

function categoryName(slug: string) {
  return CATEGORY_NAV.find((c) => c.slug === slug)?.name ?? slug;
}

export default function MarketsPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Markets
        </p>
        <h1 className="mt-2 font-display text-4xl text-charcoal">
          Who we serve
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          From a single product line to a coordinated outdoor site furnishing
          package across your site plan, we provide options, pricing, and lead
          times for landscape contractors, developers, resorts, HOAs, and public
          agencies—Utah focus when meetings help, quotes welcome nationwide,
          including federal and military facilities.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {MARKETS.map((market) => (
            <article
              key={market.title}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm"
            >
              <h2 className="font-display text-2xl text-charcoal">
                {market.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {market.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {market.relatedSlugs.map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/galleries/${slug}`}
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      {categoryName(slug)}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-charcoal p-10 text-center text-ivory">
          <h2 className="font-display text-2xl">Planning a project?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ivory/75">
            Share your site plan, product categories, and quantities for a
            tailored quote.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/quote"
              className="rounded-full bg-bronze px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-bronze/90"
            >
              Request a Quote
            </Link>
            <LetsTalk />
          </div>
        </div>
      </div>

      <ServiceAreaFooter />
    </>
  );
}
