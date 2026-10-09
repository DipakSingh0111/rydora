"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import data from "../../data/rydora.json";

const { navbar } = data;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        scrolled || open
          ? "border-b border-copper/25 bg-[#140b06]/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 transition-all duration-500 ease-out sm:px-8 lg:px-12 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <Link href="/" className="shrink-0">
          <Image
            src={navbar.logo}
            alt={navbar.logo_alt}
            width={2172}
            height={724}
            priority
            className={`w-auto transition-all duration-500 ease-out ${
              scrolled ? "h-12 sm:h-14 lg:h-[58px]" : "h-14 sm:h-16 lg:h-[70px]"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navbar.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative py-2 text-[15px] font-medium transition-colors ${
                isActive(link.href)
                  ? "text-copper-light after:absolute after:inset-x-0 after:-bottom-1 after:mx-auto after:h-[3px] after:w-full after:rounded-full after:bg-copper"
                  : "text-white/90 hover:text-copper-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={navbar.enquire_button_link_desktop}
          className="hidden items-center gap-3 rounded-full border border-copper-light/60 bg-gradient-to-b from-copper-light to-copper-dark px-7 py-3 text-[15px] font-semibold text-white shadow-lg shadow-black/30 transition hover:brightness-110 lg:inline-flex"
        >
          {navbar.enquire_button_text}
          <ArrowRight />
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur lg:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="mx-5 rounded-2xl border border-white/10 bg-black/85 p-5 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1">
            {navbar.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-base font-medium ${
                  isActive(link.href)
                    ? "text-copper-light"
                    : "text-white/90 hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href={navbar.enquire_button_link_mobile}
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-copper-light to-copper-dark px-6 py-3 font-semibold text-white"
          >
            {navbar.enquire_button_text}
            <ArrowRight />
          </Link>
        </div>
      )}
    </header>
  );
}

function ArrowRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
