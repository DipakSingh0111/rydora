"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { SectionProps } from "@/types/rydora.types";
import { Reveal } from "@/components/ui/motion";

export default function PopularCars({
  data,
  isGrid = false,
}: SectionProps.Fleet) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeArrow, setActiveArrow] = useState<"prev" | "next">("next");

  const scroll = (dir: 1 | -1) => {
    setActiveArrow(dir === 1 ? "next" : "prev");
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : track.clientWidth;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  if (!data) return null;

  return (
    <section id="cars" className="relative overflow-hidden bg-white py-10 text-neutral-900 sm:py-12">
      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[620px] rounded-full bg-[#f6e7dc]/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-3 text-sm font-medium text-copper-dark">
              <span className="h-px w-10 bg-copper" />
              {data.badge}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px]">
              {data.heading.main} <span className="text-[#a8521f]">{data.heading.highlight}</span>
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              {data.description}
            </p>
          </div>

          {!isGrid && (
            <div className="hidden shrink-0 gap-3 sm:flex">
              <button
                type="button"
                aria-label="Previous cars"
                onClick={() => scroll(-1)}
                className={`flex h-11 w-11 items-center justify-center rounded-full transition shadow-sm ${
                  activeArrow === "prev"
                    ? "bg-gradient-to-b from-copper-light to-copper-dark text-white shadow-copper/30 hover:brightness-110"
                    : "border border-neutral-200 bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
                }`}
              >
                <Arrow className="rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Next cars"
                onClick={() => scroll(1)}
                className={`flex h-11 w-11 items-center justify-center rounded-full transition shadow-sm ${
                  activeArrow === "next"
                    ? "bg-gradient-to-b from-copper-light to-copper-dark text-white shadow-copper/30 hover:brightness-110"
                    : "border border-neutral-200 bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
                }`}
              >
                <Arrow />
              </button>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.15} y={40}>
        <div
          ref={trackRef}
          className={
            isGrid
              ? "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
              : "-mx-2 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-6 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          }
        >
          {data.list.map((car) => (
            <article
              key={car.name}
              data-card={!isGrid ? "" : undefined}
              className={
                isGrid
                  ? "flex flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-[0_8px_30px_rgba(120,60,20,0.10)]"
                  : "w-full shrink-0 flex flex-col snap-center overflow-hidden rounded-2xl border border-white bg-white shadow-[0_8px_30px_rgba(120,60,20,0.10)] sm:w-[calc((100%-20px)/2)] sm:snap-start lg:w-[calc((100%-60px)/4)] lg:max-[1179px]:w-[calc((100%-40px)/3)]"
              }
            >
              <div className="relative shrink-0 aspect-[4/3] bg-gradient-to-br from-[#fbf3ee] via-white to-[#f7e9df]">
                <div className="absolute -right-10 -top-10 h-32 w-40 rotate-12 rounded-3xl bg-[#f3dccd]/50" />
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 82vw"
                  className="object-contain p-3 mix-blend-multiply"
                />
              </div>

              <div className="bg-white px-5 pb-5 pt-3 flex flex-1 flex-col lg:px-4 xl:px-5">
                <h3 className="text-lg font-bold text-neutral-900">{car.name}</h3>

                <div className="mt-3 mb-5 flex items-center justify-start gap-4 whitespace-nowrap text-[13px] font-medium text-neutral-600">
                  <span className="flex items-center gap-1.5">
                    <UserIcon />
                    {car.seats} Seats
                  </span>
                  <span className="h-4 w-px bg-neutral-300" />
                  <span className="flex items-center gap-1.5">
                    <GearIcon />
                    {car.transmission}
                  </span>
                </div>

                <div className="mt-auto">
                  <Link
                    href={data.cta.href}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#b25724] py-3 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#9c4c1f]"
                  >
                    Enquire Now
                    <Arrow />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        </Reveal>

        {!isGrid && (
          <div className="flex justify-center gap-3 sm:hidden">
            <button
              type="button"
              aria-label="Previous cars"
              onClick={() => scroll(-1)}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition shadow-sm ${
                activeArrow === "prev"
                  ? "bg-gradient-to-b from-copper-light to-copper-dark text-white shadow-copper/30 hover:brightness-110"
                  : "border border-neutral-200 bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
              }`}
            >
              <Arrow className="rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next cars"
              onClick={() => scroll(1)}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition shadow-sm ${
                activeArrow === "next"
                  ? "bg-gradient-to-b from-copper-light to-copper-dark text-white shadow-copper/30 hover:brightness-110"
                  : "border border-neutral-200 bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
              }`}
            >
              <Arrow />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b25724" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b25724" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
