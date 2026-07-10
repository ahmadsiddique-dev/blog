import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/image";
import { IconQuote, IconCode, IconExternalLink } from "@tabler/icons-react";

export const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className="group relative overflow-hidden rounded-2xl border border-hairline bg-[#0d0d0d] hover:border-hairline-strong hover:shadow-lg transition-all duration-300 my-8">
        <div className="absolute inset-0 bg-linear-to-br from-white/2 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
        <div className="relative aspect-video overflow-hidden bg-surface-card">
          <Image
            src={urlFor(value).width(1000).auto("format").url()}
            alt={value.alt || "Image content"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>
        {value.caption && (
          <figcaption className="p-4 text-sm text-mute border-t border-hairline bg-surface/50">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),

    code: ({ value }) => (
      <pre className="group relative overflow-hidden rounded-2xl border border-hairline bg-[#0d0d0d] p-6 transition-all duration-300 hover:border-hairline-strong my-8">
        <div className="absolute inset-0 bg-linear-to-br from-white/2 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
        <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-wider text-mute select-none">
          <IconCode className="h-4.5 w-4.5" stroke={1.5} />
          <span>{value.language || "Code"}</span>
        </div>
        <code className="block overflow-x-auto text-sm text-ink font-mono leading-relaxed">
          {value.code}
        </code>
      </pre>
    ),

    callout: ({ value }) => {
      const colors = {
        info: "bg-primary/10 border-primary/30 text-ink",
        warning: "bg-accent-yellow/10 border-accent-yellow/30 text-ink",
        success: "bg-accent-green/10 border-accent-green/30 text-ink",
      };
      const type = value.type || "info";
      return (
        <aside className={`rounded-xl border p-6 backdrop-blur my-6 ${colors[type as keyof typeof colors]}`}>
          <div className="text-sm sm:text-base leading-relaxed">{value.text || value.children}</div>
        </aside>
      );
    },
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-semibold text-ink mt-12 mb-6 tracking-tight leading-snug">{children}</h1>
    ),

    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-ink mt-10 mb-5 tracking-tight leading-snug">{children}</h2>
    ),

    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-ink mt-8 mb-4 tracking-tight leading-snug">{children}</h3>
    ),

    normal: ({ children }) => (
      <p className="text-base sm:text-lg text-body leading-8 mb-7 font-sans">{children}</p>
    ),

    blockquote: ({ children }) => (
      <blockquote className="group relative overflow-hidden rounded-2xl border border-hairline bg-[#0d0d0d] p-8 transition-all duration-300 hover:border-hairline-strong my-8">
        <div className="absolute inset-0 bg-linear-to-br from-white/2 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
        <IconQuote className="h-8 w-8 text-primary/40 mb-4" stroke={1.5} />
        <p className="text-lg sm:text-xl leading-relaxed text-ink italic mb-4">
          {children}
        </p>
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 mb-8 space-y-4 text-base sm:text-lg text-body leading-8">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="list-decimal ml-6 mb-8 space-y-4 text-base sm:text-lg text-body leading-8">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),

    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),

    link: ({ children, value }) => {
      const isExternal = value.href.startsWith("http");
      return (
        <a
          href={value.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="group relative inline-flex items-center gap-1 text-primary font-medium transition-colors hover:text-primary/80"
        >
          <span className="relative">
            {children}
            <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </span>
          {isExternal && (
            <IconExternalLink className="h-3.5 w-3.5 opacity-70" />
          )}
        </a>
      );
    },
  },
};