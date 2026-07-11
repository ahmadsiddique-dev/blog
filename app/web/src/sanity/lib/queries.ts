import { defineQuery } from "next-sanity";

export const getBlogsQuery = defineQuery(`
  *[_type == "blog"] {
    _id,
    title,
    slug,
    time,
    createdAt,
    description,
    "image": image.asset->url
  }
`);

export const getBlogQuery = defineQuery(`
  *[show == true && slug.current == $slug]{
  _id,
  title,
  "image": image.asset->url,
  time,
  description,
  detail,
  createdAt,
 }
  `);
