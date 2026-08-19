import Link from "next/link";

const STEPS = [
  {
    title: "Spec placeholders",
    body: "Generic notes for bench, litter, shade, or picnic become commercial models that fit the site plan.",
  },
  {
    title: "Aesthetic design",
    body: "Finish-matched families so seating, receptacles, and amenities look like one language—not mixed catalog leftovers.",
  },
  {
    title: "Procurement package",
    body: "Quantities, options, and a quote the contractor and owner can buy against—drawings welcome in Project Details.",
  },
] as const;

export function SpecifierPath() {
  return (
    <section className="border-t border-border bg-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
          For landscape architects
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl text-charcoal md:text-4xl">
          From placeholder to specified package
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Parkezza helps landscape architects specify commercial outdoor site
          furnishings—not residential patio sets. Send a schematic, CD set, or
          even a simple amenity list. We help fill the spec, hold the design
          intent, and quote a coordinated package.
        </p>
        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-border bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-bronze">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-xl text-charcoal">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/resources/landscape-architect-site-furnishings"
            className="inline-flex rounded-full bg-charcoal px-7 py-3 text-sm font-medium text-ivory transition-colors hover:bg-charcoal/90"
          >
            Specifier guide for LAs
          </Link>
          <a
            href="#quote"
            className="inline-flex rounded-full border border-border bg-white px-7 py-3 text-sm font-medium text-charcoal transition-colors hover:border-charcoal/30"
          >
            Send drawings for a quote
          </a>
        </div>
      </div>
    </section>
  );
}
