import ProjFooter from '@/components/elements/ProjFooter';
import ProjNav from '@/components/elements/ProjNav'
import Access from '@/components/md/project/Access.mdx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Access — English Access Scholarship Program",
  description:
    "Platform showcasing the Learning, Activities, and Events of the English Access Scholarship Program conducted by the US Embassy, featuring event galleries and resource sharing.",
  openGraph: {
    title: "Access — English Access Scholarship Program",
    description:
      "Platform showcasing the English Access Scholarship Program conducted by the US Embassy, featuring event galleries, activities, and resource sharing.",
  },
};

const page = () => {
  return (
    <main id="main-content" className='my-10'>
      <ProjNav />
      <Access />
      <ProjFooter />
    </main>
  )
}

export default page
