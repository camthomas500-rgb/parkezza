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
              className="rounded-2xl border border-bronze/35 border-t-4 border-t-bronze bg-ivory p-6 text-charcoal"
            >
              <h3 className="font-display text-xl">{market.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {market.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
