import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogSection from "../../../components/BlogSection";
import { getRydoraSections } from "@/lib/rydora";
import PageBanner from "../../../components/PageBanner";
import { blogs } from "../../../data/blogs";

export function generateStaticParams() {
  const categories = Array.from(new Set(blogs.map((b) => b.category)));
  return categories.map((c) => ({
    slug: c.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const decoded = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${decoded} - Blogs`,
    description: `Read our latest blogs in the ${decoded} category.`,
  };
}

export default function CategoryPage(props: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<div className="py-20 text-center text-neutral-500">Loading...</div>}>
      <CategoryContent params={props.params} />
    </Suspense>
  );
}

async function CategoryContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryExists = blogs.some(b => b.category.toLowerCase().replace(/\s+/g, '-') === slug);
  
  if (!categoryExists) {
    notFound();
  }

  const decoded = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main className="flex-1">
      <PageBanner 
        title={`${decoded} Blogs`} 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blog" },
          { label: decoded }
        ]}
      />
      <BlogSection
        data={getRydoraSections().BlogNews?.variants?.RydoraBlogNews1}
        categorySlug={slug}
      />
    </main>
  );
}
