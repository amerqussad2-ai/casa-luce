import { Container } from "@/components/Container";

const resumePath = "/resume/Amer_Kussad_Portfolio_Safe_CV.pdf";

export function Resume() {
  return (
    <section id="resume" className="border-t border-border py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">Resume</h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Alongside my web development work, I bring an Artificial
          Intelligence academic background and professional experience
          across recruitment coordination and customer-facing roles. My
          resume provides the full overview of my experience, education,
          technical skills, and current work.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-soft-white transition-opacity hover:opacity-90"
          >
            View Resume
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={resumePath}
            download="Amer_Kussad_Portfolio_Safe_CV.pdf"
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Download CV
          </a>
        </div>
      </Container>
    </section>
  );
}
