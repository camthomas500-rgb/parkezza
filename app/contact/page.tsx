import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "@/components/quote/QuoteForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Parkezza for outdoor site furnishing quotes and project support.",
};

function QuoteFormFallback() {
  return (
    <div className="rounded-2xl border border-border bg-white p-8 text-center text-muted-foreground">
      Loading form…
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        Contact
      </p>
      <h1 className="mt-2 font-display text-4xl text-charcoal">Get in touch</h1>
      <p className="mt-4 text-muted-foreground">
        Project quotes, specifications, and quantities — we respond within one
        business day.
      </p>
      <div className="mt-10">
        <Suspense fallback={<QuoteFormFallback />}>
          <QuoteForm />
        </Suspense>
      </div>
    </div>
  );
}
