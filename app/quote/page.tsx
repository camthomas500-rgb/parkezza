import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "@/components/quote/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a project quote for outdoor site furnishings. Include quantities, finishes, and timeline.",
};

function QuoteFormFallback() {
  return (
    <div className="rounded-2xl border border-border bg-white p-8 text-center text-muted-foreground">
      Loading form…
    </div>
  );
}

export default function QuotePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        Quote Request
      </p>
      <h1 className="mt-2 font-display text-4xl text-charcoal">Get a quote</h1>
      <p className="mt-4 text-muted-foreground">
        Quantities, finishes, timeline — we will respond with options and
        pricing. Landscape architects and specifiers: include drawings or site
        plans in Project Details.
      </p>
      <div className="mt-10">
        <Suspense fallback={<QuoteFormFallback />}>
          <QuoteForm />
        </Suspense>
      </div>
    </div>
  );
}
