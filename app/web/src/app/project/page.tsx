import { projects } from "@/data/listProject.json";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects built by Ahmad Siddique — including Feedo (anonymous feedback), Gravity (hostel management), and Access (English Access Scholarship Program).",
  openGraph: {
    title: "Projects — Ahmad Siddique",
    description:
      "Explore projects built by Ahmad Siddique — Feedo, Gravity, Access, and more.",
  },
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <div className="mb-6  pt-10">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground duration-200 flex items-center gap-1.5 w-fit"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Go Home</span>
        </Link>
      </div>
      <h1 className="pb-7 text-3xl font-bold">My Projects</h1>
      <div>
        <ul className="list-disc pl-5 space-y-2">
          {projects.map((project) => (
            <li key={project.id} className="hover:bg-muted px-2.5 py-1.5">
              <Link href={project.slug}>{project.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
