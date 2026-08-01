import projectsData from "@/content/projects.json";
import { CATEGORY_NAV } from "@/lib/content";

export interface Project {
  id: string;
  title: string;
  location: string;
  states: string[];
  categories: string[];
  summary: string;
  /** Path under /public, e.g. /images/projects/park-benches-utah.jpg — null until photo added */
  image: string | null;
  imageFit?: "cover" | "contain";
  alt?: string;
  featured?: boolean;
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
