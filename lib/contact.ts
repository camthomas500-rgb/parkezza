/**
 * Google Business Profile link.
 * TODO: replace with the exact "Share profile" link from the GBP dashboard
 * (Profile > Share) once available — that permalink is more reliable than a
 * search query for driving reviews/directions.
 */
export const GOOGLE_BUSINESS_URL =
  "https://www.google.com/search?q=Parkezza+Park+City+Utah";

/** Obfuscated contact strings — not rendered in HTML until user interaction */
export function getPhoneNumber(): string {
  return [52, 51, 53, 45, 57, 48, 49, 45, 56, 48, 50, 56]
    .map((c) => String.fromCharCode(c))
    .join("");
}

export function getEmailAddress(): string {
  return ["projects", String.fromCharCode(64), "parkezza", ".", "com"].join(
    ""
  );
}
