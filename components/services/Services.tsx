import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { SectionProps } from "@/types/rydora.types";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";

const iconMap: Record<string, ReactNode> = {
  CarIcon: <CarIcon />,
  RoadIcon: <RoadIcon />,
  PlaneIcon: <PlaneIcon />,
  CrownIcon: <CrownIcon />,
  TeamIcon: <TeamIcon />,
  CalendarIcon: <CalendarIcon />,
  PinIcon: <PinIcon />,
  SteeringIcon: <SteeringIcon />,
};

export default function Services({
  data,
  showViewAll = true,
}: SectionProps.Services) {
  if (!data) return null;

  return (
    <section id="services" className="bg-[#fcfaf8] py-10 text-neutral-900 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-3 text-sm font-medium text-copper-dark">
              <span className="h-px w-10 bg-copper" />
              {data.badge}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px]">
              {data.heading.main} <span className="text-[#a8521f]">{data.heading.highlight}</span>
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">
              {data.description}
            </p>
          </div>

          {showViewAll && (
            <Link
              href={data.cta.href}
              className="group inline-flex shrink-0 items-center gap-2 text-[15px] font-semibold text-[#a8521f] hover:text-copper-dark"
            >
              {data.cta.label}
              <Arrow className="transition group-hover:translate-x-1" />
            </Link>
          )}
        </Reveal>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {data.list.map((s) => (
            <StaggerItem key={s.title}>
            <article
              className="group relative h-full overflow-hidden rounded-xl border border-neutral-200/70 bg-white p-5 shadow-[0_6px_24px_rgba(120,60,20,0.06)] transition hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(120,60,20,0.12)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#faefe9] text-[#b25724]">
                  {iconMap[s.icon]}
                </span>
                <div className="relative -mr-6 -mt-1 h-24 w-[62%]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 180px, (min-width: 640px) 30vw, 60vw"
                    className="object-contain object-right mix-blend-multiply transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <h3 className="mt-3 text-[15px] font-bold text-neutral-900">{s.title}</h3>
              <p className="mt-1.5 max-w-[90%] text-[12px] leading-relaxed text-neutral-500">{s.text}</p>

              <Link
                href={`/services/${s.slug}`}
                className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#b25724] hover:text-[#9c4c1f]"
              >
                Read More
                <Arrow />
              </Link>
            </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1h-1v1.5a1 1 0 0 1-2 0V18H7v1.5a1 1 0 0 1-2 0V18H4a1 1 0 0 1-1-1v-4a2 2 0 0 1 2-2zm2.1 0h9.8l-1.2-3.6a.6.6 0 0 0-.6-.4H8.9a.6.6 0 0 0-.6.4L7.1 11zM6.5 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm11 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}

function RoadIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 3h3.2l-.2 3h2l-.2-3H16l4 18h-6.6l-.3-4h-2.2l-.3 4H4L8 3zm2.8 6l-.3 5h3l-.3-5h-2.4z" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21 15.5v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V8.5l-8 5v2l8-2.5V18l-2 1.5V21l3.5-1 3.5 1v-1.5L13 18v-5l8 2.5z" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 7l4.5 4L12 4l4.5 7L21 7l-2 11H5L3 7zm2 13h14v1.5H5V20z" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="12" cy="7" r="3.2" />
      <circle cx="5" cy="9" r="2.3" />
      <circle cx="19" cy="9" r="2.3" />
      <path d="M6.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5v.5h-11V19zM1 18.5c0-2.4 1.7-4 4-4 .8 0 1.5.2 2.1.5A7 7 0 0 0 5 19.5H1v-1zm22 0c0-2.4-1.7-4-4-4-.8 0-1.5.2-2.1.5a7 7 0 0 1 2.1 4.5h4v-1z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2.5a1 1 0 0 1 2 0V4h6V2.5a1 1 0 0 1 2 0V4h1.5A2.5 2.5 0 0 1 21 6.5v12a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-12A2.5 2.5 0 0 1 5.5 4H7V2.5zM5 9v9.5c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5V9H5zm2 2h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7zm0 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
    </svg>
  );
}

function SteeringIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M3.8 10.5c2.7.3 5.5.3 8.2.3s5.5 0 8.2-.3M12 14v6.5" />
    </svg>
  );
}
