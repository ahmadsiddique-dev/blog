import { defineQuery, PortableText } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Image } from "next-sanity/image";

import { sanityFetch } from "@/sanity/live";
import { urlFor } from "@/sanity/image";
import { components } from "@/sanity/PortableTextComponents";
import Keycap from "@/app/components/elements/Keycap";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconArrowLeft } from "@tabler/icons-react";

const EVENT_QUERY = defineQuery(`*[show == true && slug.current == $slug]{
  title,
  slug,
  description,
  author,
  publishedAt,
  readTime,
  "slug": slug.current,
  thumbnail,
  detail
}`);

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: blog } = await sanityFetch({
    query: EVENT_QUERY,
    params: await params,
  });

  const posts = blog as any;
  if (!posts || posts.length === 0) {
    notFound();
  }

  const {
    author,
    description,
    publishedAt,
    readTime,
    thumbnail,
    title,
    detail,
  } = posts[0];

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col gap-10">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-fit -ml-3 text-xs font-semibold text-mute hover:text-ink cursor-pointer hover:bg-surface-elevated/50 group"
        )}
      >
        <IconArrowLeft className="w-4.5 h-4.5 transform group-hover:-translate-x-0.5 transition-transform duration-150" stroke={2} />
        <span>Back to blogs</span>
      </Link>

      <header className="flex flex-col gap-5 mt-2">
        <div className="flex items-center gap-2.5 text-xs text-mute font-sans select-none">
          {formattedDate && <time dateTime={publishedAt}>{formattedDate}</time>}
          {formattedDate && readTime && <span>•</span>}
          {readTime && <Keycap>{readTime}min READ</Keycap>}
          {author && <span>•</span>}
          {author && <span className="text-stone">by</span>}
          {author && <span className="text-body font-medium">{author}</span>}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-tight font-sans">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-body leading-8 border-l-2 border-hairline pl-5 py-1 mt-4">
          {description}
        </p>
      </header>

      {thumbnail && (
        <figure className="relative w-full aspect-[21/9] rounded-lg overflow-hidden border border-hairline bg-surface-card shadow-none my-2">
          <Image
            src={urlFor(thumbnail).width(1000).height(430).url()}
            alt={title || "Featured image"}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </figure>
      )}

      <div className="mt-4 text-body leading-relaxed max-w-none font-sans">
        <PortableText value={detail} components={components} />
      </div>
    </article>
  );
}
