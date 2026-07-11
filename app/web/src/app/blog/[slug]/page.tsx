import React from 'react'
import { getBlog } from './_lib/get-blog'
import { PortableText } from '@portabletext/react'

type Props = {
  params: {
    slug: string
  }
}
const page = async ({ params }: Props) => {
  const { slug } = await params;
  if (!slug) {
    // Only classess I have on my finger tips
    return <h1 className="tracking-tight leading-relaxed shadow-lg text-center text-2xl font-bold">Something went wrong</h1>
  }

  const blog = await getBlog(slug);
  return (
    <div>
      <PortableText value={blog[0].detail} />
    </div>
  )
}

export default page