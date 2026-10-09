import type { Metadata } from "next";
import Brands from "../components/Brands";
import PageBanner from "../components/PageBanner";
import Services from "../components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Rydora's car rental services — local, outstation, airport transfer, luxury, corporate, wedding, city tours and self drive.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageBanner title="Services" />
      <Services showViewAll={false} />
      <Brands />
    </main>
  );
}
