import { HOME_FAQS, faqPageJsonLd, jsonLdScript } from "@/lib/seo";

export function FaqSection() {
  return (
    <section
      className="border-t border-border bg-stone/40"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
          FAQ
        </p>
        <h2
          id="faq-heading"
          className="mt-3 font-display text-3xl text-charcoal md:text-4xl"
        >
          Common project questions
        </h2>
        <p className="mt-3 text-muted-foreground">
          Quick answers for architects, municipalities, and project teams
          specifying outdoor site furnishings.
        </p>

        <div className="mt-8 divide-y divide-border border-t border-border">
          {HOME_FAQS.map((faq) => (
            <details key={faq.question} className="group py-4">
              <summary className="cursor-pointer list-none font-medium text-charcoal marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span
                    aria-hidden
                    className="mt-0.5 shrink-0 text-bronze transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(faqPageJsonLd(HOME_FAQS)),
        }}
      />
    </section>
  );
}
