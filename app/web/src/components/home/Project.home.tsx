import Link from "next/link";
import { projects } from "@/data/projects.json";

const Project = () => {
  return (
    <div className="mb-7">
      <h2 className=" text-3xl font-semibold mb-3">Projects</h2>
      <section className="">
        {projects.map((project) => {
          return (
            <div key={project.id} className="mt-8 w-full max-w-2xl ">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-1 w-3 rounded-lg bg-muted/95 shrink-0" />
                  <h2 className="text-lg font-semibold line-clamp-1 wrap-break-word">
                    <span className="font-bold">
                      {project.title.split("-")[0]}
                    </span>{" "}
                    - {project.title.split("-")[1]}
                  </h2>
                </div>
                <Link
                  href={`${project.slug}`}
                  className="text-muted-foreground text-sm hover:text-gray-100 shrink-0 duration-300 cursor-pointer"
                  aria-label={`Read more about ${project.title}`}
                >
                  <span className="">
                    Read more <span className="">&rarr;</span>
                  </span>
                </Link>
              </div>
              <blockquote className="mt-2 ml-4 border-l-2 border-muted pl-6 italic">
                <p className="line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </blockquote>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Project;
