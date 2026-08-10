import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { UmbrellaLinkedText } from "@/components/UmbrellaLinkedText";
import { getGallery, getGallerySlugs } from "@/lib/content";
import {
  breadcrumbJsonLd,
  galleryCollectionJsonLd,
  GALLERY_SEO,
  jsonLdScript,
  pageMetadata,
} from "@/lib/seo";
import { cn } from "@/lib/utils";

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

  const seo = GALLERY_SEO[gallery.slug];
  const description =
    seo?.description ?? gallery.overview ?? gallery.description;
  const ogImage = gallery.heroImages?.[0] ?? gallery.heroImage;

  return pageMetadata({
    title: seo?.title ?? gallery.name,
    description,
    path: `/galleries/${gallery.slug}`,
    images: [{ url: ogImage, alt: gallery.name }],
  });
}

export default async function GalleryPage({ params }: PageProps) {
  const { slug } = await params;
  const gallery = getGallery(slug);
  if (!gallery) notFound();

  const photoStripHero = gallery.heroStyle === "photo-strip";
  const containHero = !photoStripHero && gallery.imageFit === "contain";
  const heroPhotos =
    gallery.heroImages && gallery.heroImages.length > 0
      ? gallery.heroImages
      : [
          gallery.heroImage,
          ...gallery.images.slice(0, 7).map((image) => image.src),
        ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: gallery.name, path: `/galleries/${gallery.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(galleryCollectionJsonLd(gallery)),
        }}
      />

      {photoStripHero ? (
        <section className="border-b border-border bg-stone/30">
          <div className="mx-auto max-w-7xl px-4 pt-5 pb-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-charcoal"
            >
              ← Home
            </Link>
            <h1 className="mt-2 font-display text-3xl text-charcoal md:text-4xl">
              {gallery.name}
            </h1>
            <p className="mt-2 w-full text-sm leading-snug text-muted-foreground">
              {gallery.description}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {heroPhotos.slice(0, 8).map((src, index) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white"
                >
                  <Image
                    src={src}
                    alt={`${gallery.name} showcase ${index + 1}`}
                    fill
                    className="object-contain object-center p-1.5 sm:p-2"
                    sizes="(max-width: 640px) 50vw, 25vw"
                    priority={index < 4}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section
          className={
            containHero
              ? "relative overflow-hidden bg-charcoal"
              : "relative h-40 overflow-hidden bg-charcoal sm:h-48"
          }
        >
          {containHero ? (
            <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:grid-cols-[minmax(0,160px)_1fr] sm:px-6 sm:py-8 lg:px-8">
              <div
                className={cn(
                  "relative mx-auto aspect-[3/4] w-full max-w-[160px] overflow-hidden rounded-xl",
                  gallery.slug === "dog-waste-stations"
                    ? "bg-white"
                    : "bg-[#c8dceb]"
                )}
              >
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
                <p className="mt-1.5 w-full max-w-none text-sm text-ivory/80">
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
                className={
                  gallery.slug === "shade-structures"
                    ? "object-cover object-[center_30%] opacity-60"
                    : "object-cover opacity-60"
                }
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
                <p className="mt-1 w-full max-w-none text-sm text-ivory/80">
                  {gallery.description}
                </p>
              </div>
            </>
          )}
        </section>
      )}

      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        {gallery.overview && (
          <p className="mb-4 w-full text-sm leading-snug text-muted-foreground">
            <UmbrellaLinkedText text={gallery.overview} />
          </p>
        )}
        {gallery.highlights && gallery.highlights.length > 0 && (
          <ul className="mb-4 flex flex-wrap gap-2">
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
