"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CATEGORY_NAV } from "@/lib/content";
import { LetsTalk } from "@/components/layout/LetsTalk";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Markets", href: "/markets" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal text-ivory">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between gap-4 px-4 sm:h-32 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo-parkezza-dark.png?v=solid23"
            alt="Parkezza"
            width={560}
            height={180}
            className="h-24 w-auto sm:h-28 md:h-32"
            priority
            unoptimized
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ivory/80 transition-colors hover:text-bronze"
            >
              {link.name}
            </Link>
          ))}
          <LetsTalk />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LetsTalk />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-ivory"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Category collections — second (and third) line */}
      <div className="hidden border-t border-white/10 lg:block">
        <nav
          aria-label="Product categories"
          className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-1.5 px-4 py-2.5 sm:px-6 lg:px-8"
        >
          {CATEGORY_NAV.map((cat) => (
            <Link
              key={cat.slug}
              href={`/galleries/${cat.slug}`}
              className="text-[11px] font-medium uppercase tracking-[0.06em] text-ivory/70 transition-colors hover:text-bronze"
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      </div>

      <div
        className={cn(
          "border-t border-white/10 bg-charcoal lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ivory/90"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="my-2 border-t border-white/10 pt-3">
            <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-bronze">
              Collections
            </p>
            {CATEGORY_NAV.map((cat) => (
              <Link
                key={cat.slug}
                href={`/galleries/${cat.slug}`}
                className="block rounded-lg px-3 py-2 text-xs font-medium text-ivory/80"
                onClick={() => setOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
