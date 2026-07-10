import { defineQuery } from 'next-sanity'

export const getBlogsQuery = defineQuery(`
  *[_type == "blog"] {
    _id,
    title,
    slug,
    time,
    description,
    "image": image.asset->url
  }
`)