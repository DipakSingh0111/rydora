import { Suspense } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Lightbulb,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/common/PageBanner";
import { blogs, getBlogBySlug, getBlogCategories } from "../../data/blogs";
import { getRydoraSections } from "@/lib/rydora";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> | { slug: string } }
): Promise<Metadata> {
  const resolvedParams = params ? await Promise.resolve(params) : undefined;
  const slug = resolvedParams?.slug;
  if (!slug) return {};
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  return (
    <main className="flex-1">
      <PageBanner
        title="Blog Detail"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blog" },
          { label: "Blog Detail" },
        ]}
      />
      <Suspense fallback={<div className="py-20 text-center text-neutral-500">Loading...</div>}>
        <BlogDetailContent params={params} />
      </Suspense>
    </main>
  );
}

async function BlogDetailContent({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = params ? await Promise.resolve(params) : undefined;
  const slug = resolvedParams?.slug;
  const post = slug ? getBlogBySlug(slug) : undefined;
  if (!post) notFound();

  const categories = getBlogCategories();
  const recent = blogs.filter((b) => b.slug !== post.slug).slice(0, 4);
  const sidebar = getRydoraSections().BlogNews?.variants?.RydoraBlogNews1?.sidebar;
  if (!sidebar) return null;

  return (
    <section className="bg-white py-14 text-neutral-900 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:px-12 lg:grid-cols-[1fr_300px] lg:gap-10">
          <article>
            <div className="relative aspect-[16/8] overflow-hidden rounded-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
              <span className="rounded-md bg-[#fbebe3] px-2.5 py-1 text-xs font-bold text-[#c85a17]">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays size={15} className="text-[#c85a17]" />
                {post.date}
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              {post.title}
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
              {post.intro}
            </p>

            <ol className="mt-8 space-y-7">
              {post.steps.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fbe9dd] text-sm font-bold text-[#b8461f]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-neutral-600">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-9 flex items-start gap-4 rounded-xl border-l-4 border-[#b8461f] bg-[#fdf5ef] p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#c4561f] to-[#a8461a] text-white">
                <Lightbulb size={20} />
              </span>
              <p className="text-[15px] leading-relaxed text-neutral-700">
                {post.note}
              </p>
            </div>
          </article>

          <aside className="flex flex-col gap-6">
            <div className="rounded-2xl bg-[#f8f4f0] p-5">
              <h2 className="text-xl font-bold">{sidebar.categoriesTitle}</h2>
              <ul className="mt-4 space-y-2.5">
                {categories.map((c) => {
                  const active = c.name === post.category;
                  return (
                    <li key={c.name}>
                      <Link
                        href={`/blog/${c.slug}`}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition ${
                          active
                            ? "bg-gradient-to-b from-[#c4561f] to-[#a8461a] font-medium text-white"
                            : "bg-white text-neutral-700 hover:text-[#b8461f]"
                        }`}
                      >
                        {c.name}
                        <ChevronRight size={16} className={active ? "text-white" : "text-[#b8461f]"} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-2xl bg-[#f8f4f0] p-5">
              <h2 className="text-xl font-bold">{sidebar.recentBlogsTitle}</h2>
              <ul className="mt-4 space-y-4">
                {recent.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="group flex items-center gap-3.5"
                    >
                      <span className="relative h-[70px] w-[86px] shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={r.image}
                          alt=""
                          fill
                          sizes="86px"
                          className="object-cover transition duration-300 group-hover:scale-105"
                        />
                      </span>
                      <span>
                        <span className="line-clamp-2 text-sm font-bold leading-snug text-neutral-900 transition group-hover:text-[#b8461f]">
                          {r.title}
                        </span>
                        <span className="mt-1.5 flex items-center gap-1.5 text-xs text-neutral-500">
                          <CalendarDays size={13} className="text-[#c85a17]" />
                          {r.date}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
  );
}
