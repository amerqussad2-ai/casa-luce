import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section className="flex flex-1 items-center">
      <Container className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent">
            Front-End Developer &middot; React &amp; Next.js
          </p>

          <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Amer Kussad
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I build responsive, polished web experiences with React, Next.js,
            TypeScript, and modern web technologies — with hands-on experience
            taking projects from implementation through testing and
            deployment.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">Ras Al Khaimah, UAE</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-soft-white transition-opacity hover:opacity-90"
            >
              View Work
            </a>
            <a
              href="/resume/Amer_Kussad_Portfolio_Safe_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-muted-graphite px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              View Resume
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
