import { ArrowRight, ChevronRight, CircleCheck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "../../components/PageBanner";
import { getServiceBySlug, serviceDetails } from "../../data/services";

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.name, description: service.intro };
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main className="flex-1">
      <PageBanner
        title="Services Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      <section className="bg-white py-14 text-neutral-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[270px_1fr] lg:gap-7">
            <aside className="flex flex-col gap-6">
              <div className="rounded-2xl bg-[#f8f3ef] p-5">
                <h2 className="text-2xl font-bold">
                  Our <span className="text-[#b8461f]">Services</span>
                </h2>
                <nav className="mt-4 flex flex-col gap-2.5">
                  {serviceDetails.map((s) => {
                    const active = s.slug === service.slug;
                    return (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition ${
                          active
                            ? "bg-gradient-to-b from-[#c4561f] to-[#a8461a] text-white shadow-md shadow-[#a8461a]/25"
                            : "bg-white text-neutral-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:text-[#b8461f]"
                        }`}
                      >
                        {s.name}
                        <ChevronRight size={16} className={active ? "text-white" : "text-[#b8461f]"} />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="relative isolate overflow-hidden rounded-2xl bg-black p-6 text-white sm:p-7">
                <Image
                  src="/images/services/cta.jpg"
                  alt=""
                  fill
                  sizes="270px"
                  className="-z-20 object-cover object-right"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
                <h3 className="text-2xl font-bold leading-tight">
                  Need a <span className="text-copper-light">Personalized</span> Travel Solution?
                </h3>
                <p className="mt-3 max-w-[200px] text-sm leading-relaxed text-white/85">
                  Our team is here to help you plan the perfect journey as per your requirements.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-copper to-copper-dark px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/40 transition hover:brightness-110"
                >
                  Enquire Now
                  <ArrowRight size={16} />
                </Link>
                <div className="h-28" />
              </div>
            </aside>

            <article>
              <div className="relative aspect-[16/8] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 800px, 100vw"
                  className="object-cover"
                />
              </div>

              <p className="mt-6 flex items-center gap-2 text-xs font-bold text-[#b8461f]">
                <span className="h-px w-8 bg-[#b8461f]" />
                {service.name}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                {service.heading[0]}{" "}
                <span className="text-[#b8461f]">{service.heading[1]}</span>
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{service.intro}</p>

              <div className="mt-8 grid items-center gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold">{service.comfortTitle}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                    {service.comfortText}
                  </p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={service.comfortImage}
                    alt="Luxury car interior"
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          </div>

          <div className="mt-8 grid items-center gap-7 rounded-2xl bg-[#f8f4ef] p-5 sm:p-7 lg:grid-cols-2 lg:gap-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={service.occasionImage}
                alt={`${service.name} for every occasion`}
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Ideal for <span className="text-[#b8461f]">Every Occasion</span>
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                {service.occasionText}
              </p>
              <ul className="mt-5 space-y-3">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-[15px] text-neutral-800">
                    <CircleCheck size={20} className="shrink-0 fill-[#c98a3e] text-white" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
