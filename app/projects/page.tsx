import Link from "next/link";
import Image from "next/image";
import { LetsTalk } from "@/components/layout/LetsTalk";
import { categoryLabel, getFeaturedProjects } from "@/lib/projects";
import {
  PRIMARY_REGION_LABEL,
  PRIMARY_STATES_PHRASE,
  SERVICE_AREA_COPY,
  UTAH_LOCAL_PHRASE,
} from "@/lib/regions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Installed Projects — Park City, Kamas City, Heber City & Beyond",
  description: `Parkezza outdoor site furnishings installed around ${UTAH_LOCAL_PHRASE}, across ${PRIMARY_STATES_PHRASE}, and nationwide—municipal parks, dog parks, resorts, and civic sites.`,
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getFeaturedProjects();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        Installed Projects
      </p>
      <h1 className="mt-2 font-display text-4xl text-charcoal">
        Furnishings in the field
      </h1>
      <p className="mt-4 w-full text-muted-foreground">
        {SERVICE_AREA_COPY}
      </p>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-xl border border-border bg-white shadow-sm"
          >
            <div
              className={
                project.imageFit === "contain"
                  ? "relative h-40 bg-stone/40 sm:h-44"
                  : "relative h-40 bg-stone sm:h-44"
              }
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.alt ?? project.title}
                  fill
                  className={
                    project.imageFit === "contain"
                      ? "object-contain object-center p-3"
                      : "object-cover"
                  }
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
                  <p className="text-sm font-medium text-charcoal/70">
                    Photo coming soon
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Placeholder for your installation image
                  </p>
                </div>
              )}
            </div>
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
          across the {PRIMARY_REGION_LABEL} or anywhere in the U.S.
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
  );
}
