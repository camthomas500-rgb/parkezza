import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  jsonLdScript,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Curated Outdoor Site Furnishings`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "site furnishings",
    "outdoor furniture",
    "commercial outdoor benches",
    "commercial park benches",
    "outdoor site furniture",
    "site amenities",
    "streetscape furnishings",
    "commercial benches",
    "shade structures",
    "commercial umbrellas",
    "dog waste stations",
    "bollards",
    "picnic tables",
    "pergolas",
    "litter receptacles",
    "Utah site furnishings",
    "Park City site furnishings",
    "Heber City park furniture",
    "Wasatch County outdoor furnishings",
    "Summit County site amenities",
    "Nevada park furniture",
    "Idaho outdoor furnishings",
    "Wyoming park benches",
    "Montana site amenities",
    "Intermountain West site furnishings",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} | Curated Outdoor Site Furnishings`,
    description:
      "Premium outdoor site furnishings for resorts, developments, golf courses, municipal facilities, and public spaces.",
    images: [{ url: "/logo-parkezza.png", alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Curated Outdoor Site Furnishings`,
    description:
      "Premium outdoor site furnishings for resorts, developments, golf courses, municipal facilities, and public spaces.",
    images: ["/logo-parkezza.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(organizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(websiteJsonLd()),
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${cormorantGaramond.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
