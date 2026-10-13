import type { Metadata } from "next";
import { BlogSection } from "@/components/blog";
import { PageBanner } from "@/components/common";
import { getRydoraSections } from "@/lib/rydora";

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
