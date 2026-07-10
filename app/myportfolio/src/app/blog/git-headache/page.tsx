import BlogNav from "@/components/elements/BlogNav";
import React from "react";
import GitHeadace from "@/components/md/blog/git-headache.mdx";
import BlogFooter from "@/components/elements/BlogFooter";
import { Metadata } from "next";
import blogsData from "@/data/blogs.json";

const blogInfo = blogsData.blogs.find((b) => b.slug === "blog/git-headache");

export const metadata: Metadata = {
  title: `${blogInfo?.title} | Ahmad Siddique`,
  description: blogInfo?.description,
  openGraph: {
    title: `${blogInfo?.title} | Ahmad Siddique`,
    description: blogInfo?.description,
    url: `https://ahmadsiddique.dev/${blogInfo?.slug}`,
    images: [
      {
        url: `https://ahmadsiddique.dev${blogInfo?.image || "/preview.png"}`,
        width: 1200,
        height: 630,
        alt: blogInfo?.title,
      },
    ],
    type: "article",
    authors: [blogInfo?.author || "Ahmad Siddique"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${blogInfo?.title} | Ahmad Siddique`,
    description: blogInfo?.description,
    images: [`https://ahmadsiddique.dev${blogInfo?.image || "/preview.png"}`],
  },
};

const page = () => {
  return (
    <main id="main-content" className="my-10">
      <BlogNav />
      <GitHeadace />
      <BlogFooter />
    </main>
  );
};

export default page;
