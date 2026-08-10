import { UmbrellaLinkedText } from "@/components/UmbrellaLinkedText";
import type { FaqItem } from "@/lib/seo";
import { faqPageJsonLd, jsonLdScript } from "@/lib/seo";

export function FaqList({
  faqs,
  heading = "Common questions",
  eyebrow = "FAQ",
  intro,
  headingId = "faq-heading",
  withJsonLd = true,
}: {
  faqs: FaqItem[];
  heading?: string;
  eyebrow?: string;
  intro?: string;
  headingId?: string;
  withJsonLd?: boolean;
}) {
  if (!faqs.length) return null;

  return (
    <section aria-labelledby={headingId}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className="mt-3 font-display text-3xl text-charcoal md:text-4xl"
      >
        {heading}
      </h2>
      {intro && <p className="mt-3 text-muted-foreground">{intro}</p>}

      <div className="mt-8 divide-y divide-border border-t border-border">
        {faqs.map((faq) => (
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
              <UmbrellaLinkedText text={faq.answer} />
            </p>
          </details>
        ))}
      </div>

      {withJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(faqPageJsonLd(faqs)),
          }}
        />
      )}
    </section>
  );
}
