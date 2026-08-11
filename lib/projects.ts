import projectsData from "@/content/projects.json";
import { CATEGORY_NAV } from "@/lib/content";

export interface ProjectImage {
  src: string;
  alt?: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  states: string[];
  categories: string[];
  summary: string;
  /** Path under /public, e.g. /images/projects/park-benches-utah.jpg — null until photo added */
  image: string | null;
  /** Extra installation photos shown beside the primary image on the projects page */
  images?: ProjectImage[];
  imageFit?: "cover" | "contain";
  alt?: string;
  featured?: boolean;
}

/** Primary image plus any additional gallery photos for a project card */
export function getProjectImages(project: Project): ProjectImage[] {
  const extras = project.images ?? [];
  if (project.image) {
    return [{ src: project.image, alt: project.alt }, ...extras];
  }
  return extras;
}

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((p) => p.featured !== false);
}

export function categoryLabel(slug: string): string {
  return CATEGORY_NAV.find((c) => c.slug === slug)?.name ?? slug;
}
