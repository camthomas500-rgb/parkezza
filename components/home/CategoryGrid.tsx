import Link from "next/link";
import Image from "next/image";
import { getGalleries } from "@/lib/content";
import { cn } from "@/lib/utils";

export function CategoryGrid() {
  const galleries = getGalleries();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {galleries.map((gallery) => {
        const contain = gallery.imageFit === "contain";
        return (
          <Link
            key={gallery.slug}
            href={`/galleries/${gallery.slug}`}
            className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-lg"
          >
            <div
              className={cn(
                "relative overflow-hidden",
                contain ? "aspect-[3/4] bg-[#c8dceb]" : "aspect-[4/3] bg-stone"
              )}
            >
              <Image
                src={gallery.heroImage}
                alt={gallery.name}
                fill
                className={cn(
                  "transition-transform duration-500 group-hover:scale-105",
                  contain
                    ? "object-contain object-center p-3"
                    : "object-cover"
                )}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl text-charcoal">{gallery.name}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {gallery.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-accent group-hover:underline">
                View gallery →
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
