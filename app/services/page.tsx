import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import Brands from "@/components/home/Brands";
import Services from "@/components/services/Services";
import { getRydoraSections } from "@/lib/rydora";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Rydora's car rental services — local, outstation, airport transfer, luxury, corporate, wedding, city tours and self drive.",
};

export default function ServicesPage() {
  const sections = getRydoraSections();

  return (
    <main className="flex-1">
      <PageBanner title="Services" />
      <Services data={sections.Services?.variants?.RydoraServices1} showViewAll={false} />
      <Brands data={sections.Brands?.variants?.RydoraBrands1} />
    </main>
  );
}
