import type { Metadata } from "next";
import PageBanner from "../components/PageBanner";
import CarGallery from "../components/CarGallery";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <main className="flex-1">
      <PageBanner title="Gallery" />
      <CarGallery />
    </main>
  );
}
