import Link from "next/link";
import { getResourceGuides } from "@/lib/resources";
import { PRIMARY_STATES_PHRASE } from "@/lib/regions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Resources — Specifying Outdoor Site Furnishings",
  description: `Specifier guides for commercial outdoor site furnishings: how to specify packages, match benches and litter receptacles, ADA picnic tables, and projects across ${PRIMARY_STATES_PHRASE} and nationwide.`,
  path: "/resources",
});

export default function ResourcesPage() {
  const guides = getResourceGuides();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        Resources
      </p>
      <h1 className="mt-2 font-display text-4xl text-charcoal">
        Specifier guides
      </h1>
      <p className="mt-4 w-full text-muted-foreground">
        Short practical guides for landscape architects, contractors,
        developers, HOA managers, and parks staff—written to answer the
        questions people ask before they request a quote. These pages also help
        Google and AI search engines cite clear, factual answers about
        commercial outdoor site furnishings.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/resources/${guide.slug}`}
            className="group rounded-2xl border border-border bg-white p-8 shadow-sm transition-colors hover:border-accent"
          >
            <h2 className="font-display text-2xl text-charcoal group-hover:text-accent">
              {guide.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {guide.summary}
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-accent">
              Read guide →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-14 border-t border-border pt-10">
        <h2 className="font-display text-2xl text-charcoal">
          Looking for products instead?
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Browse galleries for benches, litter receptacles, shade, picnic
          tables, and more—or see installed work in the field.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/" className="text-accent underline-offset-4 hover:underline">
            Product galleries
          </Link>
          <Link
            href="/projects"
            className="text-accent underline-offset-4 hover:underline"
          >
            Installed Projects
          </Link>
          <Link
            href="/quote"
            className="text-accent underline-offset-4 hover:underline"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
