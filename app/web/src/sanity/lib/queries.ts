import { defineQuery } from 'next-sanity'

export const getBlogs = defineQuery(`
  *[_type == "blog"] {
    _id,
    title,
    slug,
    time,
    description,
    "image": image.asset->url
  }
`)