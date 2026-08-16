import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: `Page Not Found | ${SITE_NAME}`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="mt-2 font-display text-4xl text-charcoal">
        Page not found
      </h1>
      <p className="mt-4 text-muted-foreground">
        That page is not available. Browse outdoor site furnishings or request a
        quote.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-charcoal px-8 py-3 text-sm font-medium text-ivory"
        >
          Home
        </Link>
        <Link
          href="/quote"
          className="rounded-full border border-border px-8 py-3 text-sm font-medium text-charcoal"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
}
