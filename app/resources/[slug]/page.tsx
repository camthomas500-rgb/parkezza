import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getResourceGuide,
  getResourceGuides,
  getResourceSlugs,
} from "@/lib/resources";
import { breadcrumbJsonLd, jsonLdScript, pageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getResourceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getResourceGuide(slug);
  if (!guide) return { title: "Guide Not Found" };

  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/resources/${guide.slug}`,
  });
}

export default async function ResourceGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getResourceGuide(slug);
  if (!guide) notFound();

  const others = getResourceGuides().filter((g) => g.slug !== guide.slug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Resources", path: "/resources" },
              { name: guide.title, path: `/resources/${guide.slug}` },
            ])
          ),
        }}
      />

      <Link
        href="/resources"
        className="text-sm text-muted-foreground hover:text-charcoal"
      >
        ← All resources
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent">
        Specifier guide
      </p>
      <h1 className="mt-2 font-display text-4xl text-charcoal">{guide.title}</h1>
      <p className="mt-4 text-muted-foreground">{guide.description}</p>

      <div className="mt-10 space-y-10">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-2xl text-charcoal">
              {section.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-white p-8">
        <h2 className="font-display text-xl text-charcoal">Ready to specify?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Send categories, quantities, finishes, and drawings for a project
          quote.
        </p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
          <Link
            href="/quote"
            className="rounded-full bg-charcoal px-6 py-2.5 text-ivory"
          >
            Request a Quote
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-border px-6 py-2.5 text-charcoal"
          >
            Installed Projects
          </Link>
        </div>
      </div>

      {others.length > 0 && (
        <div className="mt-14 border-t border-border pt-10">
          <h2 className="font-display text-xl text-charcoal">More guides</h2>
          <ul className="mt-4 space-y-2">
            {others.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/resources/${g.slug}`}
                  className="text-sm text-accent underline-offset-4 hover:underline"
                >
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
