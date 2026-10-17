import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogSection from "@/components/blog/BlogSection";
import PageBanner from "@/components/common/PageBanner";
import { getRydoraSections } from "@/lib/rydora";
import { blogs } from "../../../data/blogs";

export function generateStaticParams() {
  const categories = Array.from(new Set(blogs.map((b) => b.category)));
  return categories.map((c) => ({
    slug: c.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> | { slug: string } }): Promise<Metadata> {
  const resolvedParams = props.params ? await Promise.resolve(props.params) : undefined;
  const slug = resolvedParams?.slug || "";
  const decoded = slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : "Category";
  return {
    title: `${decoded} - Blogs`,
    description: `Read our latest blogs in the ${decoded} category.`,
  };
}

export default function CategoryPage(props: { params: Promise<{ slug: string }> | { slug: string } }) {
  return (
    <Suspense fallback={<div className="py-20 text-center text-neutral-500">Loading...</div>}>
      <CategoryContent params={props.params} />
    </Suspense>
  );
}

async function CategoryContent({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = params ? await Promise.resolve(params) : undefined;
  const slug = resolvedParams?.slug;
  const categoryExists = slug ? blogs.some(b => b.category.toLowerCase().replace(/\s+/g, '-') === slug) : false;
  
  if (!slug || !categoryExists) {
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
