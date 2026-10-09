import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import ContactForm from "../components/ContactForm";
import PageBanner from "../components/PageBanner";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Rydora Car Rental Services for bookings, inquiries and support.",
};

const contactInfo: { icon: LucideIcon; title: string; lines: ReactNode[] }[] = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [<a key="tel" href="tel:+919876543210">+91 98765 43210</a>, "Mon - Sat, 9:00 AM - 8:00 PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [<a key="mail" href="mailto:info@rydora.com">info@rydora.com</a>, "We reply within 24 hours"],
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    lines: ["123 Business Park, MG Road,", "Bangalore, Karnataka 560001"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageBanner title="Contact Us" />

      <section className="bg-white py-14 text-neutral-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-5 lg:grid-cols-2">
            <ContactForm />

            <div className="flex flex-col gap-5">
              <div className="rounded-2xl bg-[#faf3ee] p-6 sm:p-7">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#a8521f]">
                  <span className="h-px w-6 bg-[#a8521f]" />
                  Contact Information
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-[28px]">
                  We&apos;re Always Here <span className="text-[#a8521f]">for You</span>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Reach out to us through any of the following channels. Our team is ready to
                  assist you with bookings, inquiries, and support.
                </p>

                <ul className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                  {contactInfo.map(({ icon: Icon, title, lines }, i) => (
                    <li
                      key={title}
                      className={`flex items-start gap-3.5 ${
                        i % 2 === 0 ? "sm:border-r sm:border-[#ead8cb] sm:pr-4" : ""
                      }`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5dccb] text-[#b8461f]">
                        <Icon size={20} strokeWidth={2.2} />
                      </span>
                      <div className="text-[13px] leading-relaxed text-neutral-600">
                        <p className="text-sm font-bold text-neutral-900">{title}</p>
                        {lines.map((line, j) => (
                          <p key={j} className={j === 0 ? "font-medium text-neutral-800" : ""}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-2xl">
                <Image
                  src="/images/showroom.jpg"
                  alt="Rydora car rentals showroom"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <iframe
              title="Rydora Car Rentals location"
              src="https://www.google.com/maps?q=MG+Road,+Bengaluru,+Karnataka+560001&z=13&output=embed"
              className="h-[300px] w-full sm:h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
