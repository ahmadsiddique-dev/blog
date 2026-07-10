import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { Badge } from "./components/ui/badge";

const components: MDXComponents = {
  p: (props) => (
    <p className="leading-7 my-4 text-zinc-200" {...props} />
  ),

  strong: (props) => (
    <strong className="font-semibold text-zinc-100" {...props} />
  ),

  em: (props) => (
    <em className="italic text-zinc-300" {...props} />
  ),

  h1: (props) => (
    <h1
      className="scroll-m-20 my-6 text-4xl font-bold tracking-tight lg:text-5xl"
      {...props}
    />
  ),

  h2: (props) => (
    <h2
      className="scroll-m-20 mt-12 mb-4 border-b border-zinc-800 pb-2 text-3xl font-semibold tracking-tight"
      {...props}
    />
  ),

  h3: (props) => (
    <h3
      className="scroll-m-20 mt-10 mb-3 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),

  h4: (props) => (
    <h4
      className="scroll-m-20 mt-8 mb-2 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),

  ul: (props) => (
    <ul
      className="my-6 ml-6 list-disc space-y-2"
      {...props}
    />
  ),

  ol: (props) => (
    <ol
      className="my-6 ml-6 list-decimal space-y-2"
      {...props}
    />
  ),

  li: (props) => (
    <li
      className="leading-7"
      {...props}
    />
  ),

  a: (props) => (
    <a
      className="font-medium underline underline-offset-4 decoration-zinc-500 hover:decoration-zinc-200 transition-colors"
      {...props}
    />
  ),

  code: ({ children }) => (
    <Badge className="rounded-md px-2 py-0.5 text-sm">
      {children}
    </Badge>
  ),

  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm"
      {...props}
    />
  ),

  img: ({ src, alt }) => {
    if (!src) return null;

    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={900}
        height={500}
        sizes="(max-width: 768px) 100vw, 900px"
        className="my-8 rounded-lg border border-zinc-800"
      />
    );
  },

  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-zinc-700 pl-6 italic text-zinc-400"
      {...props}
    />
  ),

  hr: () => (
    <hr className="my-10 border-zinc-800" />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
