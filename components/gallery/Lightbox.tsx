"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { getImageLabel, type GalleryImage } from "@/lib/content";

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const image = images[index];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(Math.max(0, index - 1));
      if (e.key === "ArrowRight") onNavigate(Math.min(images.length - 1, index + 1));
    },
    [index, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  if (!image) return null;

  const caption = image.id
    ? `${image.id} — ${image.name ?? getImageLabel(image)}`
    : image.alt;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        type="button"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X className="size-6" />
      </button>

      {index > 0 && (
        <button
          type="button"
          className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index - 1);
          }}
          aria-label="Previous image"
        >
          <ChevronLeft className="size-6" />
        </button>
      )}

      {index < images.length - 1 && (
        <button
          type="button"
          className="absolute right-16 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index + 1);
          }}
          aria-label="Next image"
        >
          <ChevronRight className="size-6" />
        </button>
      )}

      <div
        className="relative max-h-[85vh] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={900}
          className="max-h-[85vh] w-auto object-contain"
          unoptimized
        />
        <p className="mt-4 text-center text-sm text-ivory/80">{caption}</p>
        <p className="text-center text-xs text-ivory/50">
          {index + 1} of {images.length}
        </p>
      </div>
    </div>
  );
}
