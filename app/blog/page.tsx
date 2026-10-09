import type { Metadata } from "next";
import BlogSection from "../components/BlogSection";
import { getRydoraSections } from "@/lib/rydora";
import PageBanner from "../components/PageBanner";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Travel tips, destination guides and car rental advice from the Rydora team.",
};

export default function BlogPage() {
  const sections = getRydoraSections();

  return (
    <main className="flex-1">
      <PageBanner title="Blogs" />
      <BlogSection data={sections.BlogNews?.variants?.RydoraBlogNews1} />
    </main>
  );
}
