import { client } from "@/sanity/client";
import { getBlogQuery } from "@/sanity/lib/queries";

export async function getBlog(slug: string) {
  const blog = await client.fetch(getBlogQuery, {
    slug,
  });
  console.log(blog);
  return blog;
}
