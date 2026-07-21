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
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-bronze/35 bg-white transition-shadow hover:shadow-md"
          >
            <div className="h-1 shrink-0 bg-bronze" aria-hidden />
            <div className="relative aspect-[4/3] overflow-hidden bg-stone">
              <Image
                src={gallery.heroImage}
                alt={gallery.name}
                fill
                className={cn(
                  "transition-transform duration-500 group-hover:scale-105",
                  contain
                    ? "object-contain object-[center_40%] p-3"
                    : gallery.slug === "shade-structures"
                      ? "object-cover object-[center_35%]"
                      : "object-cover object-center"
                )}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-xl text-charcoal">{gallery.name}</h3>
              <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
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
