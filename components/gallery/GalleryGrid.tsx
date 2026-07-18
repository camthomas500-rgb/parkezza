"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lightbox } from "@/components/gallery/Lightbox";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { LetsTalk } from "@/components/layout/LetsTalk";
import {
  getGalleryInquiryItems,
  getImageLabel,
  type Gallery,
  type GalleryImage,
  type GallerySection,
} from "@/lib/content";
import { cn } from "@/lib/utils";

function ImageTile({
  image,
  contain,
  onOpen,
  className,
  inquireHref,
}: {
  image: GalleryImage;
  contain: boolean;
  onOpen: () => void;
  className?: string;
  inquireHref?: string;
}) {
  const modelName = image.name ?? (image.id ? getImageLabel(image) : null);
  const useContain = image.imageFit === "contain" || contain;
  const scale = image.imageScale ?? 1;

  return (
    <div className={cn("group relative", className)}>
      <button
        type="button"
        className={cn(
          "relative w-full overflow-hidden rounded-xl",
          contain ? "aspect-[3/4] bg-[#c8dceb]" : "aspect-[4/3] bg-stone"
        )}
        onClick={onOpen}
      >
        {useContain && scale < 1 ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative h-full w-full"
              style={{
                maxWidth: `${scale * 100}%`,
                maxHeight: `${scale * 100}%`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                unoptimized
                className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            unoptimized={image.imageFit === "contain"}
            className={cn(
              "transition-transform duration-500 group-hover:scale-105",
              useContain
                ? "object-contain object-center p-4"
                : "object-cover"
            )}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
      </button>
      {image.id &&
        (inquireHref ? (
          <Link
            href={inquireHref}
            className="mt-2 inline-flex items-center gap-1 text-sm text-charcoal hover:text-accent"
          >
            <span className="font-semibold tracking-wide">{image.id}</span>
            {modelName && (
              <span className="text-muted-foreground"> · {modelName}</span>
            )}
            <span aria-hidden="true" className="text-accent">
              →
            </span>
          </Link>
        ) : (
          <p className="mt-2 text-sm text-charcoal">
            <span className="font-semibold tracking-wide">{image.id}</span>
            {modelName && (
              <span className="text-muted-foreground"> · {modelName}</span>
            )}
          </p>
        ))}
    </div>
  );
}

function SectionBlock({
  section,
  contain,
  gridClass,
  onOpenImage,
  anchorImage,
  inquireFor,
}: {
  section: GallerySection;
  contain: boolean;
  gridClass: string;
  onOpenImage: (src: string) => void;
  anchorImage?: GalleryImage;
  inquireFor?: (image: GalleryImage) => string | undefined;
}) {
  if (
    section.layout === "anchor-aside" &&
    anchorImage &&
    section.images.length > 0
  ) {
    const [featured, ...rest] = section.images;

    return (
      <section className="mt-4">
        <div className="grid gap-4 lg:grid-cols-3 lg:items-stretch">
          <ImageTile
            image={anchorImage}
            contain={contain}
            onOpen={() => onOpenImage(anchorImage.src)}
            inquireHref={inquireFor?.(anchorImage)}
          />
          <ImageTile
            image={featured}
            contain={contain}
            onOpen={() => onOpenImage(featured.src)}
            inquireHref={inquireFor?.(featured)}
          />
          <div className="flex flex-col justify-center rounded-xl border border-border bg-white/70 px-6 py-6">
            {section.title && (
              <h2 className="font-display text-3xl text-charcoal md:text-4xl">
                {section.title}
              </h2>
            )}
            {section.description && (
              <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                {section.description}
              </p>
            )}
          </div>
        </div>

        {rest.length > 0 && (
          <div className={cn(gridClass, "mt-4")}>
            {rest.map((image) => (
              <ImageTile
                key={image.src}
                image={image}
                contain={contain}
                onOpen={() => onOpenImage(image.src)}
                inquireHref={inquireFor?.(image)}
              />
            ))}
          </div>
        )}
      </section>
    );
  }

  if (section.layout === "aside-intro" && section.images.length > 0) {
    const [featured, ...rest] = section.images;

    return (
      <section className="mt-8 border-t border-border pt-8">
        <div className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ImageTile
            image={featured}
            contain={contain}
            onOpen={() => onOpenImage(featured.src)}
            inquireHref={inquireFor?.(featured)}
          />
          <div className="flex flex-col justify-center sm:col-span-1 lg:col-span-2 lg:pl-4">
            {section.title && (
              <h2 className="font-display text-3xl text-charcoal md:text-4xl">
                {section.title}
              </h2>
            )}
            {section.description && (
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {section.description}
              </p>
            )}
          </div>
        </div>

        {rest.length > 0 && (
          <div className={cn(gridClass, "mt-4")}>
            {rest.map((image) => (
              <ImageTile
                key={image.src}
                image={image}
                contain={contain}
                onOpen={() => onOpenImage(image.src)}
                inquireHref={inquireFor?.(image)}
              />
            ))}
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="mt-16">
      <div className="mb-8 border-t border-border pt-10">
        {section.title && (
          <h2 className="font-display text-3xl text-charcoal">{section.title}</h2>
        )}
        {section.description && (
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {section.description}
          </p>
        )}
      </div>
      <div className={gridClass}>
        {section.images.map((image) => (
          <ImageTile
            key={image.src}
            image={image}
            contain={contain}
            onOpen={() => onOpenImage(image.src)}
            inquireHref={inquireFor?.(image)}
          />
        ))}
      </div>
    </section>
  );
}

function QuoteFormFallback() {
  return (
    <div className="rounded-2xl border border-border bg-white p-8 text-center text-muted-foreground">
      Loading form…
    </div>
  );
}

export function GalleryGrid({ gallery }: { gallery: Gallery }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const contain = gallery.imageFit === "contain";
  const showInquiry = gallery.slug === "benches";
  const inquiryItems = showInquiry ? getGalleryInquiryItems(gallery) : [];

  const usesAnchorAside = gallery.sections?.some(
    (s) => s.layout === "anchor-aside"
  );
  const mainImages =
    usesAnchorAside && gallery.images.length > 0
      ? gallery.images.slice(0, -1)
      : gallery.images;
  const anchorImage =
    usesAnchorAside && gallery.images.length > 0
      ? gallery.images[gallery.images.length - 1]
      : undefined;

  const sectionImages = gallery.sections?.flatMap((s) => s.images) ?? [];
  const allImages = [...gallery.images, ...sectionImages];

  const gridClass = cn(
    "grid gap-4",
    contain
      ? "mx-auto max-w-3xl sm:grid-cols-2 lg:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3"
  );

  function openImage(src: string) {
    const index = allImages.findIndex((img) => img.src === src);
    if (index >= 0) setLightboxIndex(index);
  }

  function inquireFor(image: GalleryImage) {
    if (!showInquiry || !image.id) return undefined;
    return `?item=${encodeURIComponent(image.id)}#quote`;
  }

  return (
    <>
      <div className={gridClass}>
        {mainImages.map((image) => (
          <ImageTile
            key={image.src}
            image={image}
            contain={contain}
            onOpen={() => openImage(image.src)}
            inquireHref={inquireFor(image)}
          />
        ))}
      </div>

      {gallery.sections?.map((section) => (
        <SectionBlock
          key={section.id}
          section={section}
          contain={contain}
          gridClass={gridClass}
          onOpenImage={openImage}
          inquireFor={showInquiry ? inquireFor : undefined}
          anchorImage={
            section.layout === "anchor-aside" ? anchorImage : undefined
          }
        />
      ))}

      {gallery.sisterSite ? (
        <div className="mt-8 rounded-2xl border border-border bg-white/60 p-8 text-center">
          <p className="font-display text-xl text-charcoal md:text-2xl">
            Explore our full umbrella line
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Cantilever systems, market umbrellas, bases, and wind-rated commercial
            shade for resorts and hospitality.
          </p>
          <a
            href={gallery.sisterSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-bronze px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-bronze/90"
          >
            {gallery.sisterSite.label} →
          </a>
        </div>
      ) : showInquiry ? (
        <div id="quote" className="mt-16 scroll-mt-24">
          <div className="mb-8 text-center">
            <p className="font-display text-2xl text-charcoal">
              Interested in a specific bench?
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Suspense fallback={<QuoteFormFallback />}>
              <QuoteForm
                defaultCategory="benches"
                specificItems={inquiryItems}
              />
            </Suspense>
          </div>
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-border bg-white/60 p-8 text-center">
          <p className="font-display text-2xl text-charcoal">
            Interested in {gallery.name.toLowerCase()}?
          </p>
          <p className="mt-2 text-muted-foreground">
            Share quantities, finishes, and your project timeline — we will
            respond with options and pricing.
          </p>
          <div className="mt-6 flex justify-center">
            <LetsTalk variant="inline" />
          </div>
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
