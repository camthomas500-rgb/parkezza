import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parkezza.com"),
  title: {
    default: "Parkezza | Curated Outdoor Site Furnishings",
    template: "%s | Parkezza",
  },
  description:
    "High-end and standard outdoor site furnishings for resorts, golf courses, developments, municipal facilities, parks, and recreation centers. Request a project quote.",
  keywords: [
    "site furnishings",
    "outdoor furniture",
    "commercial benches",
    "park shelters",
    "commercial umbrellas",
    "dog park stations",
    "bollards",
    "picnic tables",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Parkezza",
    url: "https://parkezza.com",
    title: "Parkezza | Curated Outdoor Site Furnishings",
    description:
      "Premium outdoor site furnishings for resorts, developments, golf courses, municipal facilities, and public spaces.",
    images: [{ url: "/logo-parkezza.png", alt: "Parkezza" }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Parkezza",
  url: "https://parkezza.com",
  description:
    "Curated outdoor site furnishings for resorts, developments, golf courses, municipal facilities, and public spaces.",
  sameAs: [],
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
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${dmSerif.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
