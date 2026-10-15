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
  { name: "Projects", href: "/projects" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white text-charcoal lg:border-b-0">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between gap-4 px-4 sm:h-32 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-end gap-2">
          <Image
            src="/logo-parkezza.png?v=white1"
            alt="Parkezza"
            width={560}
            height={180}
            className="h-20 w-auto sm:h-24 md:h-28"
            priority
            unoptimized
          />
          <span className="mb-1 font-sans text-[11px] font-light tracking-[0.04em] text-bronze sm:mb-1.5 sm:text-xs md:text-sm">
            Parkezza.com
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal transition-colors hover:text-bronze"
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
            className="inline-flex items-center justify-center rounded-lg p-2 text-charcoal"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Category collections — gold bar, white names */}
      <div className="hidden bg-bronze lg:block">
        <nav
          aria-label="Product categories"
          className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-1.5 px-4 py-2.5 sm:px-6 lg:px-8"
        >
          {CATEGORY_NAV.map((cat) => (
            <Link
              key={cat.slug}
              href={`/galleries/${cat.slug}`}
              className="text-[11px] font-semibold uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-80"
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      </div>

      <div
        className={cn(
          "border-t border-border bg-white lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-charcoal"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="-mx-4 mt-2 bg-bronze px-4 py-3">
            <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-white/80">
              Collections
            </p>
            {CATEGORY_NAV.map((cat) => (
              <Link
                key={cat.slug}
                href={`/galleries/${cat.slug}`}
                className="block rounded-lg px-3 py-2 text-xs font-medium text-white"
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
