import { Handshake, Lightbulb, PackageCheck } from "lucide-react";

const VALUES = [
  {
    icon: Handshake,
    title: "One easy partner",
    body: "Every outdoor furnishing your site needs—benches, shade, receptacles, and more—through a single, friendly relationship.",
  },
  {
    icon: Lightbulb,
    title: "Genuinely good ideas",
    body: "We bring real design instincts and manufacturer know-how, suggesting packages that fit your site's look, use, and budget.",
  },
  {
    icon: PackageCheck,
    title: "One coordinated package",
    body: "Finishes and materials matched across every category, delivered as one clean, ready-to-quote package.",
  },
] as const;

export function WhyParkezza() {
  return (
    <section className="border-t border-border bg-stone/30">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
          Why Parkezza
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl text-charcoal md:text-4xl">
          We bring the ideas—and the whole package
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Years of relationships with outdoor furnishings manufacturers mean
          you get one easy partner, genuinely good ideas, and a complete site
          package—matched, coordinated, and ready to quote.
        </p>
        <div className="mx-auto mt-10 grid gap-6 sm:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-white p-6 text-left"
            >
              <div className="inline-flex rounded-full bg-bronze/10 p-3 text-bronze">
                <Icon className="size-5" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-xl text-charcoal">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
