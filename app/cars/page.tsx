import type { Metadata } from "next";
import PageBanner from "../components/PageBanner";
import PopularCars from "../components/PopularCars";
import WhyChooseUs from "../components/WhyChooseUs";

export const metadata: Metadata = {
  title: "Cars",
  description: "Explore our fleet of premium cars for rent.",
};

export default function CarsPage() {
  return (
    <main className="flex-1">
      <PageBanner title="Cars" />
      <PopularCars isGrid />
      <WhyChooseUs />
    </main>
  );
}
