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
