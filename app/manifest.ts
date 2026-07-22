import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Parkezza",
    short_name: "Parkezza",
    description:
      "Curated outdoor site furnishings for resorts, golf courses, developments, and public spaces.",
    start_url: "/",
    display: "browser",
    background_color: "#f5f0e8",
    theme_color: "#1c1c1e",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
