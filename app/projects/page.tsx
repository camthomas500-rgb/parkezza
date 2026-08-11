import Link from "next/link";
import Image from "next/image";
import { LetsTalk } from "@/components/layout/LetsTalk";
import { ServiceAreaFooter } from "@/components/layout/ServiceAreaFooter";
import {
  categoryLabel,
  getFeaturedProjects,
  getProjectImages,
} from "@/lib/projects";
import {
  PRIMARY_STATES_PHRASE,
  UTAH_LOCAL_PHRASE,
} from "@/lib/regions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Installed Projects — Utah & Beyond",
  description: `Parkezza outdoor site furnishings installed around ${UTAH_LOCAL_PHRASE}, across ${PRIMARY_STATES_PHRASE}, and nationwide—municipal parks, dog parks, resorts, and civic sites.`,
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getFeaturedProjects();

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Installed Projects
        </p>
        <h1 className="mt-2 font-display text-4xl text-charcoal">
          Furnishings in the field
        </h1>
        <p className="mt-4 w-full text-muted-foreground">
          Utah roots, Intermountain focus, projects nationwide. Field examples
          from municipal parks, dog parks, and amenity sites—proof for landscape
          contractors, architects, HOAs, and resort teams specifying commercial
          outdoor site furnishings.
        </p>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-xl border border-border bg-white shadow-sm"
            >
              {(() => {
                const photos = getProjectImages(project);
                const contain = project.imageFit === "contain";
                if (photos.length === 0) {
                  return (
                    <div className="relative flex h-40 flex-col items-center justify-center gap-2 bg-stone px-6 text-center sm:h-44">
                      <p className="text-sm font-medium text-charcoal/70">
                        Photo coming soon
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Placeholder for your installation image
                      </p>
                    </div>
                  );
                }
                if (photos.length === 1) {
                  return (
                    <div
                      className={
                        contain
                          ? "relative h-40 bg-stone/40 sm:h-44"
                          : "relative h-40 bg-stone sm:h-44"
                      }
                    >
                      <Image
                        src={photos[0].src}
                        alt={photos[0].alt ?? project.title}
                        fill
                        className={
                          contain
                            ? "object-contain object-center p-3"
                            : "object-cover"
                        }
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                      />
                    </div>
                  );
                }
                return (
                  <div
                    className={
                      contain
                        ? "grid grid-cols-2 gap-px bg-border/60"
                        : "grid grid-cols-2"
                    }
                  >
                    {photos.map((photo) => (
                      <div
                        key={photo.src}
                        className={
                          contain
                            ? "relative h-40 bg-stone/40 sm:h-44"
                            : "relative h-40 bg-stone sm:h-44"
                        }
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt ?? project.title}
                          fill
                          className={
                            contain
                              ? "object-contain object-center p-2"
                              : "object-cover"
                          }
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 140px"
                        />
                      </div>
                    ))}
                  </div>
                );
              })()}
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-bronze">
                  {project.location}
                  {project.states.length > 0
                    ? ` · ${project.states.join(", ")}`
                    : ""}
                </p>
                <h2 className="mt-1.5 font-display text-xl text-charcoal">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                {project.categories.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.categories.map((slug) => (
                      <li key={slug}>
                        <Link
                          href={`/galleries/${slug}`}
                          className="rounded-full border border-border bg-ivory px-3 py-1 text-xs font-medium text-charcoal hover:border-accent"
                        >
                          {categoryLabel(slug)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-charcoal p-10 text-center text-ivory">
          <h2 className="font-display text-2xl">Planning a similar project?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ivory/75">
            Share your site type, product categories, and quantities for a quote
            anywhere in the U.S.—Utah meetings available when helpful.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/quote"
              className="rounded-full bg-bronze px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-bronze/90"
            >
              Request a Quote
            </Link>
            <LetsTalk />
          </div>
        </div>
      </div>

      <ServiceAreaFooter />
    </>
  );
}
