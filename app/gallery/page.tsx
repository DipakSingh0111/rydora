import type { Metadata } from "next";
import { PageBanner } from "@/components/common";
import { CarGallery } from "@/components/gallery";
import { getRydoraSections } from "@/lib/rydora";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  const sections = getRydoraSections();

  return (
    <main className="flex-1">
      <PageBanner title="Gallery" />
      <CarGallery data={sections.Gallery?.variants?.RydoraGallery1} />
    </main>
  );
}
