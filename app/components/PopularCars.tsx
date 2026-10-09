"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import data from "../../data/rydora.json";

const { popular_cars } = data;

export default function PopularCars({ isGrid = false }: { isGrid?: boolean } = {}) {
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

  return (
    <section id="cars" className="relative overflow-hidden bg-white py-10 text-neutral-900 sm:py-12">
      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[620px] rounded-full bg-[#f6e7dc]/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-3 text-sm font-medium text-copper-dark">
              <span className="h-px w-10 bg-copper" />
              {popular_cars.section_title}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px]">
              {popular_cars.main_heading} <span className="text-[#a8521f]">{popular_cars.main_heading_highlight}</span>
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              {popular_cars.description}
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
        </div>

        <div
          ref={trackRef}
          className={
            isGrid
              ? "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
              : "-mx-2 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-6 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          }
        >
          {popular_cars.list.map((car) => (
            <article
              key={car.name}
              data-card={!isGrid ? "" : undefined}
              className={
                isGrid
                  ? "overflow-hidden rounded-2xl border border-white bg-white shadow-[0_8px_30px_rgba(120,60,20,0.10)]"
                  : "w-full shrink-0 snap-center overflow-hidden rounded-2xl border border-white bg-white shadow-[0_8px_30px_rgba(120,60,20,0.10)] sm:w-[calc((100%-20px)/2)] sm:snap-start lg:w-[calc((100%-60px)/4)]"
              }
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#fbf3ee] via-white to-[#f7e9df]">
                <div className="absolute -right-10 -top-10 h-32 w-40 rotate-12 rounded-3xl bg-[#f3dccd]/50" />
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 82vw"
                  className="object-contain p-3 mix-blend-multiply"
                />
              </div>

              <div className="bg-gradient-to-b from-white to-[#fdf8f5] px-5 pb-5 pt-3">
                <h3 className="text-lg font-bold">{car.name}</h3>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[13px] font-medium text-neutral-700">
                  <span className="flex items-center gap-1">
                    <UserIcon />
                    {car.seats} Seats
                  </span>
                  <span className="h-3 w-px bg-neutral-300" />
                  <span className="flex items-center gap-1">
                    <GearIcon />
                    {car.transmission}
                  </span>
                  <span className="h-3 w-px bg-neutral-300" />
                  <span className="flex items-center gap-1">
                    <GasIcon />
                    {car.fuel}
                  </span>
                </div>

                <Link
                  href={popular_cars.enquire_button_link}
                  className="mt-5 flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-copper-light to-copper-dark py-3 text-[15px] font-semibold text-white shadow-md shadow-copper/25 transition hover:brightness-110"
                >
                  {popular_cars.enquire_button_text}
                  <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>

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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#b0602c" aria-hidden>
      <circle cx="12" cy="7.5" r="4" />
      <path d="M4 20.5c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5z" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b0602c" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <circle cx="5" cy="5" r="2" />
      <circle cx="12" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="12" cy="19" r="2" />
      <path d="M5 7v12M12 7v12M19 7v5H5" />
    </svg>
  );
}

function GasIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#b0602c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 22h12" />
      <path d="M14 22V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v17" />
      <path d="M14 7h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3" />
      <line x1="4" y1="12" x2="14" y2="12" />
    </svg>
  );
}
