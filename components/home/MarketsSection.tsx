import Link from "next/link";
import { MARKETS } from "@/lib/content";

export function MarketsSection() {
  return (
    <section className="bg-charcoal py-20 text-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-bronze">
            Markets We Serve
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Site amenities for HOAs, resorts, and design teams
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ivory/75">
            Built for the buyers who specify commercial outdoor furnishings—not
            residential patio sets.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MARKETS.map((market) => (
            <article
              key={market.title}
              className="rounded-2xl border border-bronze/35 border-t-4 border-t-bronze bg-ivory p-6 text-charcoal"
            >
              <h3 className="font-display text-xl">{market.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {market.description}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-ivory/70">
          <Link
            href="/markets"
            className="font-medium text-bronze underline underline-offset-2 hover:text-ivory"
          >
            Explore markets we serve →
          </Link>
        </p>
      </div>
    </section>
  );
}
