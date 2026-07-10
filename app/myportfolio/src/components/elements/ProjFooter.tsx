"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectsData from "@/data/projects.json";

const ProjFooter = () => {
  const pathname = usePathname();
  const currentSlug = pathname?.replace(/^\//, "");

  const projects = projectsData.projects;
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex !== -1 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  return (
    <footer className="w-full max-w-3xl mx-auto py-8 mt-10" aria-label="footer">
      <nav aria-label="Breadcrumb" className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {prevProject ? (
            <Link
              href={`/${prevProject.slug}`}
              className="group flex flex-col gap-2 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
            >
              <div className="flex items-center text-sm font-medium text-zinc-500 dark:text-zinc-400">
                <ChevronLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1"/>
                Previous
              </div>
              <div className="font-medium text-zinc-900 dark:text-zinc-100 line-clamp-1">
                {prevProject.title}
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/${nextProject.slug}`}
              className="group flex flex-col gap-2 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors text-right"
            >
              <div className="flex items-center justify-end text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Next
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="font-medium text-zinc-900 dark:text-zinc-100 line-clamp-1">
                {nextProject.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
      <hr className="border-zinc-200 dark:border-zinc-800" />
      <p className="pt-5 text-sm font-medium text-zinc-500 dark:text-zinc-400 text-center">
        © 2026 Ahmad Siddique. All rights reserved.
      </p>
    </footer>
  );
};

export default ProjFooter;
