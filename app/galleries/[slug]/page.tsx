import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { getGallery, getGallerySlugs } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getGallerySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const gallery = getGallery(slug);
  if (!gallery) return { title: "Gallery Not Found" };

  const description = gallery.overview ?? gallery.description;

  return {
    title: gallery.name,
    description,
    openGraph: {
      title: `${gallery.name} | Parkezza`,
      description,
      images: [{ url: gallery.heroImage, alt: gallery.name }],
    },
  };
}

export default async function GalleryPage({ params }: PageProps) {
  const { slug } = await params;
  const gallery = getGallery(slug);
  if (!gallery) notFound();

  // Compact heroes on all galleries — less vertical scroll before products.
  const containHero = gallery.imageFit === "contain";

  return (
    <div>
      <section
        className={
          containHero
            ? "relative overflow-hidden bg-charcoal"
            : "relative h-40 overflow-hidden bg-charcoal sm:h-48"
        }
      >
        {containHero ? (
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:grid-cols-[minmax(0,160px)_1fr] sm:px-6 sm:py-8 lg:px-8">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[160px] overflow-hidden rounded-xl bg-[#c8dceb]">
              <Image
                src={gallery.heroImage}
                alt={gallery.name}
                fill
                className="object-contain object-center p-2"
                priority
              />
            </div>
            <div className="flex flex-col justify-center text-ivory">
              <Link
                href="/"
                className="text-sm text-ivory/70 hover:text-ivory"
              >
                ← Home
              </Link>
              <h1 className="mt-2 font-display text-3xl md:text-4xl">
                {gallery.name}
              </h1>
              <p className="mt-1.5 max-w-2xl text-sm text-ivory/80">
                {gallery.description}
              </p>
            </div>
          </div>
        ) : (
          <>
            <Image
              src={gallery.heroImage}
              alt={gallery.name}
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
            <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-4 sm:px-6 lg:px-8">
              <Link
                href="/"
                className="text-sm text-ivory/70 hover:text-ivory"
              >
                ← Home
              </Link>
              <h1 className="mt-1.5 font-display text-3xl text-ivory md:text-4xl">
                {gallery.name}
              </h1>
              <p className="mt-1 max-w-2xl text-sm text-ivory/80">
                {gallery.description}
              </p>
            </div>
          </>
        )}
      </section>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {gallery.overview && (
          <p className="mb-5 w-full text-sm leading-snug text-muted-foreground">
            {gallery.overview}
          </p>
        )}
        {gallery.highlights && gallery.highlights.length > 0 && (
          <ul className="mb-5 flex flex-wrap gap-2">
            {gallery.highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-charcoal"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <GalleryGrid gallery={gallery} />
      </div>
    </div>
  );
}
