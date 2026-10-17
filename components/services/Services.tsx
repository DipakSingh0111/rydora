import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaCarSide,
  FaRoute,
  FaPlaneArrival,
  FaCrown,
  FaUsers,
  FaCalendarDays,
  FaLocationDot,
} from "react-icons/fa6";
import { RiSteering2Fill } from "react-icons/ri";
import { LuArrowRight } from "react-icons/lu";
import type { SectionProps } from "@/types/rydora.types";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";

const iconMap: Record<string, ReactNode> = {
  CarIcon: <FaCarSide className="h-6 w-6" />,
  RoadIcon: <FaRoute className="h-6 w-6" />,
  PlaneIcon: <FaPlaneArrival className="h-6 w-6" />,
  CrownIcon: <FaCrown className="h-6 w-6" />,
  TeamIcon: <FaUsers className="h-6 w-6" />,
  CalendarIcon: <FaCalendarDays className="h-6 w-6" />,
  PinIcon: <FaLocationDot className="h-6 w-6" />,
  SteeringIcon: <RiSteering2Fill className="h-7 w-7" />,
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
              <LuArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          )}
        </Reveal>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {data.list.map((s) => (
            <StaggerItem key={s.title}>
            <article
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200/70 bg-white p-5 shadow-[0_6px_24px_rgba(120,60,20,0.06)] transition hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(120,60,20,0.12)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#faefe9] text-[#b25724] shadow-sm transition-all duration-300 group-hover:bg-[#b25724] group-hover:text-white group-hover:scale-105">
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

              <div className="mt-auto pt-4">
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#b25724] hover:text-[#9c4c1f]"
                >
                  Read More
                  <LuArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
