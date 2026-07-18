import type { Metadata } from "next";
import Link from "next/link";
import { MARKETS } from "@/lib/content";
import { LetsTalk } from "@/components/layout/LetsTalk";

export const metadata: Metadata = {
  title: "Markets We Serve",
  description:
    "Parkezza serves resorts, golf courses, HOAs, municipal and federal facilities, recreation centers, dog parks, and more.",
};

export default function MarketsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        Markets
      </p>
      <h1 className="mt-2 font-display text-4xl text-charcoal">
        Who we serve
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        From a single product line to a coordinated package across your site
        plan, we provide options, pricing, and lead times aligned to your
        schedule.
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
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-2xl bg-charcoal p-10 text-center text-ivory">
        <h2 className="font-display text-2xl">Planning a project?</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-ivory/75">
          Share your site plan, product categories, and quantities for a
          tailored quote.
        </p>
        <div className="mt-6 flex justify-center">
          <LetsTalk />
        </div>
      </div>
    </div>
  );
}
