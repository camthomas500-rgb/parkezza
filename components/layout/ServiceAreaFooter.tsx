import Link from "next/link";
import type { ReactNode } from "react";
import {
  PRIMARY_STATES,
  UTAH_LOCAL_CITY_SEO,
  UTAH_LOCAL_COUNTIES,
} from "@/lib/regions";

const PRIMARY_SERVICE_AREAS = [...PRIMARY_STATES, "Nationwide"] as const;

export function ServiceAreaFooter({
  contactNote = (
    <>
      Prefer email or phone?{" "}
      <Link
        href="/contact"
        className="font-medium text-bronze underline underline-offset-2 hover:text-charcoal"
      >
        Contact Parkezza
      </Link>
      .
    </>
  ),
}: {
  contactNote?: ReactNode | null;
}) {
  return (
    <section className="border-t border-border bg-stone/40">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
          Where We Serve
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-charcoal md:text-4xl">
          Utah roots, Intermountain focus, projects nationwide
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-snug text-muted-foreground">
          Utah focus when in-person meetings help—quotes and specification
          support for community parks, resort decks, golf clubs, municipal
          facilities, and recreation centers across:
        </p>
        <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-3">
          {PRIMARY_SERVICE_AREAS.map((area) => (
            <li
              key={area}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-charcoal"
            >
              {area}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-2xl text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground/80">
          Utah communities we often serve
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-[11px] leading-relaxed text-muted-foreground/70">
          {[...UTAH_LOCAL_CITY_SEO, ...UTAH_LOCAL_COUNTIES].join(" · ")}
        </p>
        {contactNote ? (
          <p className="mx-auto mt-8 max-w-xl text-sm text-muted-foreground">
            {contactNote}
          </p>
        ) : null}
      </div>
    </section>
  );
}
