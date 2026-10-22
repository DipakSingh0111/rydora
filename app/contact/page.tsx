import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/common/PageBanner";
import ContactForm from "@/components/contact/ContactForm";
import { getRydoraSections } from "@/lib/rydora";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Rydora Car Rental Services for bookings, inquiries and support.",
};

const iconMap: Record<string, LucideIcon> = {
  Phone,
  Mail,
  MapPin,
  Clock,
};

export default function ContactPage() {
  const sections = getRydoraSections();
  const contactData = sections.ContactPage?.variants?.RydoraContactPage1;
  const info = contactData?.info;
  const mapUrl = contactData?.mapUrl || "https://www.google.com/maps?q=New+York,+NY+10001,+USA&z=13&output=embed";

  return (
    <main className="flex-1">
      <PageBanner title="Contact Us" />

      <section className="bg-white py-8 text-neutral-900 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-5 lg:grid-cols-2">
            <ContactForm data={contactData} />

            {info && (
              <div className="flex flex-col gap-5">
                <div className="rounded-2xl bg-[#faf3ee] p-6 sm:p-7">
                  <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#a8521f]">
                    <span className="h-px w-6 bg-[#a8521f]" />
                    {info.badge}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-[28px]">
                    {info.heading.main} <span className="text-[#a8521f]">{info.heading.highlight}</span>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {info.description}
                  </p>

                  <ul className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                    {info.items.map((item, i) => {
                      const Icon = iconMap[item.icon] || MapPin;
                      return (
                        <li
                          key={item.title}
                          className={`flex items-start gap-3.5 ${
                            i % 2 === 0 ? "sm:border-r sm:border-[#ead8cb] sm:pr-4" : ""
                          }`}
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5dccb] text-[#b8461f]">
                            <Icon size={20} strokeWidth={2.2} />
                          </span>
                          <div className="text-[13px] leading-relaxed text-neutral-600">
                            <p className="text-sm font-bold text-neutral-900">{item.title}</p>
                            {item.lines.map((line, j) => (
                              <p key={j} className={j === 0 ? "font-medium text-neutral-800" : ""}>
                                {j === 0 && item.link ? (
                                  <a href={item.link} className="hover:text-[#a8521f] transition-colors">
                                    {line}
                                  </a>
                                ) : (
                                  line
                                )}
                              </p>
                            ))}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {info.showroomImage && (
                  <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-2xl">
                    <Image
                      src={info.showroomImage.src}
                      alt={info.showroomImage.alt}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {mapUrl && (
            <div className="mt-5 overflow-hidden rounded-2xl border border-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <iframe
                title="Rydora Car Rentals location"
                src={mapUrl}
                className="h-[300px] w-full sm:h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
