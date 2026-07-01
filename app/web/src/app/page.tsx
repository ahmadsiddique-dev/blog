import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import SubscribeForm from "@/app/components/elements/SubscribeForm";
import Keycap from "@/app/components/elements/Keycap";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Ahmad Siddique Blogs - Home",
  description: "Well, If you are interested in reading Web Development stuff then this is going to be worth your time, So join me and be the part of the journey.",
  alternates: {
    canonical: "/",
  },
};

const BLOGS_QUERY = defineQuery(`*[show == true] | order(publishedAt desc){
  title,
  "slug": slug.current,
  description,
  publishedAt,
  readTime,
  author,
  "thumbnail": thumbnail.asset->url
}`);

export default async function IndexPage() {
  const { data: blogs } = await sanityFetch({ query: BLOGS_QUERY, tags: ["blog"] });
  const posts = blogs as any;

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 pointer-events-none overflow-hidden opacity-75">
        <div className="absolute -top-30 left-10 w-30 h-75 bg-linear-to-b from-[#ff5757] to-[#a1131a] rotate-45 opacity-60 filter blur-[1px]" />
        <div className="absolute -top-25 left-37.5 w-15 h-75 bg-linear-to-b from-[#ff5757] to-[#a1131a] rotate-45 opacity-40 filter blur-[1px]" />
        <div className="absolute -top-20 left-57.5 w-7.5 h-75 bg-linear-to-b from-[#ff5757] to-[#a1131a] rotate-45 opacity-25 filter blur-[2px]" />
      </div>

      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink max-w-3xl leading-tight font-sans">
          Ahmad Siddique Blogs
        </h1>
        <p className="text-sm sm:text-base text-body max-w-xl leading-relaxed">
          Well, If you are interested in reading <strong>Web Development</strong> stuff then this is going to be worth your time, So join me and be the part of the journey. 
        </p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-5xl mx-auto">
        

        <div className="border-t border-hairline pt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold tracking-tight text-ink font-sans">
              All Blogs
            </h2>
            <div className="flex items-center gap-1 text-xs text-mute">
              <span>{posts.length} results</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((blog: any, index: number) => {
              const dateStr = blog.publishedAt
                ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "";

              return (
                <Card
                  key={blog.slug}
                  className="group relative flex flex-col p-5 transition-colors duration-150 hover:bg-surface-elevated cursor-pointer bg-surface border-hairline rounded-lg shadow-none"
                >
                  <Link href={`/blog/${blog.slug}`} className="absolute inset-0 z-10" />

                  <div className="relative w-full aspect-video rounded-md overflow-hidden bg-surface-card border border-hairline/50 mb-5">
                    {blog.thumbnail ? (
                      <Image
                        src={blog.thumbnail}
                        alt={blog.title || "Blog cover"}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-mute/25 font-bold text-sm bg-linear-to-tr from-surface to-surface-card">
                        No Image
                      </div>
                    )}
                  </div>

                  <CardContent className="p-0 flex flex-col flex-1 gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-mute">{dateStr}</span>
                      {blog.readTime && (
                        <div className="flex items-center gap-1">
                          <Keycap>{blog.readTime} min</Keycap>
                        </div>
                      )}
                    </div>

                    <h3 className="text-base font-semibold tracking-tight text-ink group-hover:text-primary transition-colors duration-150 leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-mute leading-relaxed line-clamp-2">
                      {blog.description}
                    </p>

                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-hairline/40 text-xs text-mute">
                      <span className="font-medium text-body">By {blog.author || "Editorial"}</span>
                      <span className="flex items-center gap-1 font-semibold text-ink group-hover:translate-x-0.5 transition-transform duration-150">
                        Open
                        <Keycap>↵</Keycap>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}