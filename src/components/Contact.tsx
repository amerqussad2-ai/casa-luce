import { Container } from "@/components/Container";

const email = "amerkussad5@gmail.com";
const linkedInUrl = "https://www.linkedin.com/in/amer-qussad-727a6a199";
const githubUrl = "https://github.com/amerqussad2-ai";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">Contact</h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          I&apos;m currently focused on Front-End, Web Development, React /
          Next.js, and Entry-Level IT opportunities.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          If you&apos;d like to discuss a role, collaboration, or selected
          freelance web project, feel free to get in touch.
        </p>

        <p className="mt-6 text-sm text-muted-foreground">Ras Al Khaimah, UAE</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-soft-white transition-opacity hover:opacity-90"
          >
            Email
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-muted-graphite px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-muted-graphite px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
