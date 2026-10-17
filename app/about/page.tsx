import type { Metadata } from "next";
import About from "@/components/about/About";
import HowItWorks from "@/components/about/HowItWorks";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import PageBanner from "@/components/common/PageBanner";
import { getRydoraSections } from "@/lib/rydora";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rydora Car Rental Services — premium vehicles, professional chauffeurs and a seamless travel experience.",
};

export default function AboutPage() {
  const sections = getRydoraSections();

  return (
    <main className="flex-1">
      <PageBanner title="About Us" />
      <About data={sections.AboutUs?.variants?.RydoraAboutUs1} hideButton />
      <HowItWorks data={sections.WorkingProcess?.variants?.RydoraWorkingProcess1} />
      <WhyChooseUs data={sections.WhyChooseUs?.variants?.RydoraWhyChooseUs1} />
    </main>
  );
}
