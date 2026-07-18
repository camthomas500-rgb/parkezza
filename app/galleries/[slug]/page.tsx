import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { getGallery, getGallerySlugs } from "@/lib/content";
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

  const compact = slug === "benches" || slug === "umbrellas";

  return (
    <div>
      <section
        className={
          gallery.imageFit === "contain"
            ? "relative overflow-hidden bg-charcoal"
            : cn(
                "relative overflow-hidden bg-charcoal",
                compact ? "h-44 sm:h-52" : "h-64 sm:h-80"
              )
        }
      >
        {gallery.imageFit === "contain" ? (
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-[minmax(0,220px)_1fr] sm:px-6 lg:px-8 lg:py-14">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-xl bg-[#c8dceb]">
              <Image
                src={gallery.heroImage}
                alt={gallery.name}
                fill
                className="object-contain object-center p-3"
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
              <h1 className="mt-3 font-display text-4xl md:text-5xl">
                {gallery.name}
              </h1>
              <p className="mt-3 max-w-2xl text-ivory/80">{gallery.description}</p>
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
            <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-6 sm:px-6 lg:px-8">
              <Link
                href="/"
                className="text-sm text-ivory/70 hover:text-ivory"
              >
                ← Home
              </Link>
              <h1
                className={cn(
                  "mt-2 font-display text-ivory",
                  compact ? "text-3xl md:text-4xl" : "mt-3 text-4xl md:text-5xl"
                )}
              >
                {gallery.name}
              </h1>
              <p
                className={cn(
                  "max-w-2xl text-ivory/80",
                  compact ? "mt-1.5 text-sm" : "mt-3"
                )}
              >
                {gallery.description}
              </p>
            </div>
          </>
        )}
      </section>

      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          compact ? "py-6" : "py-14"
        )}
      >
        {gallery.overview && (
          <div className={compact ? "mb-5" : "mb-10"}>
            {gallery.overview.split(/(?<=\.)\s+/).filter(Boolean).map((sentence) => (
              <p
                key={sentence}
                className={cn(
                  "text-muted-foreground",
                  compact
                    ? "mt-1.5 text-sm leading-snug first:mt-0"
                    : "mt-3 text-base leading-relaxed first:mt-0 md:text-lg"
                )}
              >
                {sentence}
              </p>
            ))}
          </div>
        )}
        {gallery.highlights && gallery.highlights.length > 0 && (
          <ul className={cn("flex flex-wrap gap-2", compact ? "mb-5" : "mb-10")}>
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
        {!compact && (
          <p className="mb-8 text-sm text-muted-foreground">
            {gallery.images.length +
              (gallery.sections?.reduce((n, s) => n + s.images.length, 0) ?? 0)}{" "}
            images
          </p>
        )}
        <GalleryGrid gallery={gallery} />
      </div>
    </div>
  );
}
