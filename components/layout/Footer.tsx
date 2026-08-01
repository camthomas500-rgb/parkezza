import Link from "next/link";
import Image from "next/image";
import { LetsTalk } from "@/components/layout/LetsTalk";
import { CATEGORY_NAV } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/logo-parkezza-dark.png?v=solid23"
              alt="Parkezza"
              width={520}
              height={168}
              className="h-24 w-auto sm:h-28"
              unoptimized
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/75">
            Commercial outdoor site furnishings for resorts, developments, golf
            courses, HOAs, municipal facilities, and public spaces.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-bronze">
            Products
          </p>
          <ul className="mt-4 columns-1 space-y-2 text-sm text-ivory/80 sm:columns-2 sm:gap-x-8 lg:columns-1">
            {CATEGORY_NAV.map((item) => (
              <li key={item.slug} className="break-inside-avoid">
                <Link
                  href={`/galleries/${item.slug}`}
                  className="hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-bronze">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/80">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/markets" className="hover:text-white">
                Markets We Serve
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white">
                Installed Projects
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-white">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/quote" className="hover:text-white">
                Request a Quote
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-bronze">
            Contact
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ivory/80">
            Project quotes, specifications, and quantities nationwide.
          </p>
          <div className="mt-4">
            <LetsTalk variant="footer" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-ivory/50">
            © {new Date().getFullYear()} Parkezza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
