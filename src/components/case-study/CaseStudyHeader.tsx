import Link from "next/link";

export function CaseStudyHeader({
  name,
  type,
  status,
  description,
  techStack,
  liveUrl,
  githubUrl,
}: {
  name: string;
  type: string;
  status: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
}) {
  return (
    <div className="max-w-3xl">
      <h1 className="font-serif text-4xl text-foreground sm:text-5xl">{name}</h1>
      <p className="mt-3 text-base text-muted-foreground">{type}</p>
      <p className="text-sm font-medium text-accent">{status}</p>

      <p className="mt-6 text-base leading-relaxed text-muted-foreground">
        {description}
      </p>

      <p className="mt-4 text-sm text-muted-foreground">{techStack.join(" · ")}</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-soft-white transition-opacity hover:opacity-90"
        >
          Live Site
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
        <Link
          href="/#work"
          className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Back to Work
        </Link>
      </div>
    </div>
  );
}
