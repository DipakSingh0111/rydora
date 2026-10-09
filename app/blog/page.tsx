import type { Metadata } from "next";
import BlogSection from "../components/BlogSection";
import PageBanner from "../components/PageBanner";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Travel tips, destination guides and car rental advice from the Rydora team.",
};

export default function BlogPage() {
  return (
    <main className="flex-1">
      <PageBanner title="Blogs" />
      <BlogSection />
    </main>
  );
}
