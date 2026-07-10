import ProjFooter from '@/components/elements/BlogFooter';
import ProjNav from '@/components/elements/ProjNav';
import CliPortfolio from '@/components/md/project/CliPortfolio.mdx';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "CLI Portfolio - Present in Powershell",
  description:
    "This is showcase and my presence in node pakages. This is an amazing thing to impress someone.",
  openGraph: {
    title: "CLI Portfolio - Present in Powershell",
    description:
      "This is showcase and my presence in node pakages. This is an amazing thing to impress someone.",
  },
};

const page = () => {
  return (
    <main id="main-content" className='my-10 '>
      <ProjNav />
      <CliPortfolio />
      <ProjFooter />
    </main>
  )
}

export default page
