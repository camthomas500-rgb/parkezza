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
            Furnishings for every distinguished outdoor environment
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MARKETS.map((market) => (
            <article
              key={market.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="font-display text-xl">{market.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/75">
                {market.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/markets"
            className="text-sm font-medium text-bronze hover:text-white"
          >
            Learn more about our markets →
          </Link>
        </div>
      </div>
    </section>
  );
}
