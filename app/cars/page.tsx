import type { Metadata } from "next";
import { WhyChooseUs } from "@/components/about";
import { PageBanner } from "@/components/common";
import { PopularCars } from "@/components/fleet";
import { getRydoraSections } from "@/lib/rydora";

export const metadata: Metadata = {
  title: "Cars",
  description: "Explore our fleet of premium cars for rent.",
};

export default function CarsPage() {
  const sections = getRydoraSections();

  return (
    <main className="flex-1">
      <PageBanner title="Cars" />
      <PopularCars data={sections.Fleet?.variants?.RydoraFleet1} isGrid />
      <WhyChooseUs data={sections.WhyChooseUs?.variants?.RydoraWhyChooseUs1} />
    </main>
  );
}
