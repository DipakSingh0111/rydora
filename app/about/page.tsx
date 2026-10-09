import type { Metadata } from "next";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import PageBanner from "../components/PageBanner";
import WhyChooseUs from "../components/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rydora Car Rental Services — premium vehicles, professional chauffeurs and a seamless travel experience.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageBanner title="About Us" />
      <About hideButton />
      <HowItWorks />
      <WhyChooseUs />
    </main>
  );
}
