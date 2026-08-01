import { FaqList } from "@/components/FaqList";
import { HOME_FAQS } from "@/lib/seo";

export function FaqSection() {
  return (
    <section className="border-t border-border bg-stone/40">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <FaqList
          faqs={HOME_FAQS}
          heading="Common project questions"
          intro="Quick answers for architects, municipalities, and project teams specifying outdoor site furnishings."
        />
      </div>
    </section>
  );
}
