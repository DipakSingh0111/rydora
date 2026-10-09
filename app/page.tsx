import Image from "next/image";
import Link from "next/link";
import About from "./components/About";
import Brands from "./components/Brands";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";
import PopularCars from "./components/PopularCars";
import Services from "./components/Services";

const features = [
  {
    title: "Premium Fleet",
    text: "The finest cars. Always.",
    icon: <DiamondIcon />,
  },
  { title: "24/7 Support", text: "We're here, always.", icon: <HeadsetIcon /> },
  {
    title: "Trusted & Secure",
    text: "Your journey, our priority.",
    icon: <BadgeIcon />,
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative isolate flex min-h-[640px] items-center overflow-hidden lg:min-h-screen">
        <Image
          src="/images/hero-car.jpg"
          alt="Black luxury sedan parked at dusk with a city skyline"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/0" />
        <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-36 sm:px-8 lg:px-12 lg:pt-40">
          <div className="max-w-xl">
            <p className="flex items-center gap-2.5 text-[15px] font-medium text-white">
              <CarIcon />
              Luxury Car Rental
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Make Every Mile Feel Truly Extraordinary
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-[17px]">
              Experience the art of luxury driving with an exceptional
              collection of premium vehicles. Whether for business or leisure,
              Rydora brings elegance, comfort, and distinction to every mile.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-gradient-to-b from-copper-light to-copper-dark px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-black/40 transition hover:brightness-110"
            >
              Enquire Now
            </Link>
          </div>

          <ul className="mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-16">
            {features.map((f) => (
              <li key={f.title} className="flex items-start gap-3">
                <span className="mt-0.5 text-copper-light">{f.icon}</span>
                <div>
                  <p className="text-[17px] font-semibold text-white">
                    {f.title}
                  </p>
                  <p className="text-sm text-white/75">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PopularCars />
      <About />
      <Services />
      <HowItWorks />
      <Brands />
      <Testimonials />
      <BlogSection limit={3} />
    </main>
  );
}

function CarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#d98a4e" aria-hidden>
      <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1v-4a2 2 0 0 1 2-2zm2.1 0h9.8l-1.2-3.6a.6.6 0 0 0-.6-.4H8.9a.6.6 0 0 0-.6.4L7.1 11zM6.5 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm11 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
      <path d="M2 9h20M9 3l-2 6 5 12 5-12-2-6" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
      <path d="M19.5 19v.5a2.5 2.5 0 0 1-2.5 2.5h-3" />
      <path d="M9 11.5h6M12 8.5v6" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="9" r="6" />
      <path d="M9.5 9l1.8 1.8L14.8 7.3" />
      <path d="M8.5 14l-1.5 7 5-2.5 5 2.5-1.5-7" />
    </svg>
  );
}
