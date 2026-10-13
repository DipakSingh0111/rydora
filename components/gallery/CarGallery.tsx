"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { SectionProps } from "@/types/rydora.types";

export default function CarGallery({ data }: SectionProps.Gallery) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const images = data?.list ?? [];
  const count = images.length;

  // Keyboard navigation (Arrow keys + Escape to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;

      if (e.key === "Escape") {
        setActiveImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) =>
          prev !== null
            ? prev === 0
              ? count - 1
              : prev - 1
            : null,
        );
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) =>
          prev !== null
            ? prev === count - 1
              ? 0
              : prev + 1
            : null,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, count]);

  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeImageIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) =>
      prev !== null ? (prev === count - 1 ? 0 : prev + 1) : 0,
    );
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) =>
      prev !== null ? (prev === 0 ? count - 1 : prev - 1) : 0,
    );
  };

  if (!data) return null;

  return (
    <section className="w-full bg-[#fbfbfa] py-12 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {images.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setActiveImageIndex(index)}
              className="group relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c85a17]/50"
              aria-label={`Open image: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeImageIndex !== null && (
        <div
          onClick={() => setActiveImageIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
            aria-label="Close image popup"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/25 active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Main */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] max-w-5xl w-full aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl bg-black"
          >
            <Image
              src={images[activeImageIndex].src}
              alt={images[activeImageIndex].alt}
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 sm:right-8 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/25 active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Index */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3.5 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
            {activeImageIndex + 1} / {count}
          </div>
        </div>
      )}
    </section>
  );
}
