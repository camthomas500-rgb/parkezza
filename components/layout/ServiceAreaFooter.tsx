import Link from "next/link";
import type { ReactNode } from "react";
import {
  NATIONWIDE_STATE_SEO,
  PRIMARY_STATES,
  UTAH_LOCAL_CITY_SEO,
  UTAH_LOCAL_COUNTIES,
} from "@/lib/regions";

/** Visible branding: nationwide first, Utah for local vibe—not a long state pill row. */
const PRIMARY_SERVICE_AREAS = ["Nationwide", "Utah"] as const;

const INTERMOUNTAIN_STATES = PRIMARY_STATES.filter((s) => s !== "Utah");

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
          Utah roots, projects nationwide
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-snug text-muted-foreground">
          Quote commercial outdoor site furnishings anywhere in the U.S. Utah
          roots when in-person meetings help—Intermountain experience, nationwide
          specification support.
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
          Intermountain West
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-[11px] leading-relaxed text-muted-foreground/70">
          {INTERMOUNTAIN_STATES.join(" · ")}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground/80">
          Utah communities we often serve
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-[11px] leading-relaxed text-muted-foreground/70">
          {[...UTAH_LOCAL_CITY_SEO, ...UTAH_LOCAL_COUNTIES].join(" · ")}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground/80">
          Also quote projects across
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-[11px] leading-relaxed text-muted-foreground/70">
          {[...NATIONWIDE_STATE_SEO].join(" · ")} · and nationwide
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
