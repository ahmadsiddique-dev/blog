import { client } from "@/sanity/client";
import { getBlogsQuery } from "@/sanity/lib/queries";
import { GetBlogsResult } from "@/sanity/types";

export async function getBlogs() {
  const blogs: GetBlogsResult = await client.fetch(getBlogsQuery);
  console.log("Fetched blogs:", blogs);
  return blogs;
}