import type { ReactNode } from "react";

const UMBRELLA_MENTION_RE =
  /(heavydutyumbrellas\.com|commercial patio umbrellas|commercial umbrellas|umbrellas)/gi;

const UMBRELLA_URL = "https://heavydutyumbrellas.com";

const DEFAULT_LINK_CLASS =
  "font-medium text-bronze underline underline-offset-2 transition-colors hover:text-charcoal";

/** Turns umbrella mentions into external links to heavydutyumbrellas.com. */
export function UmbrellaLinkedText({
  text,
  className = DEFAULT_LINK_CLASS,
}: {
  text: string;
  className?: string;
}) {
  const parts = text.split(UMBRELLA_MENTION_RE);

  return (
    <>
      {parts.map((part, index): ReactNode => {
        if (!part) return null;
        if (
          /^(heavydutyumbrellas\.com|commercial patio umbrellas|commercial umbrellas|umbrellas)$/i.test(
            part
          )
        ) {
          return (
            <a
              key={index}
              href={UMBRELLA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {part}
            </a>
          );
        }
        return part;
      })}
    </>
  );
}
