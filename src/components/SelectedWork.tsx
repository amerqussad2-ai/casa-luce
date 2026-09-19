import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="border-t border-border py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">Selected Work</h2>

        <div className="mt-12 flex flex-col gap-20 sm:gap-28">
          {projects.map((project) => (
            <article key={project.slug} className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-lg border border-border">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="h-auto w-full"
                />
              </div>

              <div className="max-w-3xl">
                <h3 className="font-serif text-2xl text-foreground sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.type}</p>
                <p className="text-sm font-medium text-accent">{project.status}</p>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={project.caseStudyUrl}
                    className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-soft-white transition-opacity hover:opacity-90"
                  >
                    View Case Study
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-muted-graphite px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    Live Site
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
