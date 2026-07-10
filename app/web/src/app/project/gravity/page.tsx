import ProjFooter from "@/components/elements/ProjFooter";
import ProjNav from "@/components/elements/ProjNav";
import Gravity from "@/components/md/project/Gravity.mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gravity — Hostel Management System",
  description:
    "Gravity is an AI-powered hostel management system that simplifies the management of hostels, mess, and student accommodations with smart insights to optimize operations.",
  openGraph: {
    title: "Gravity — Hostel Management System",
    description:
      "AI-powered hostel management system that simplifies hostel, mess, and student accommodation management with smart insights.",
  },
};

const page = () => {
  return (
    <main id="main-content" className="my-10 ">
      <ProjNav />
      <Gravity />
      <ProjFooter />
    </main>
  );
};

export default page;
