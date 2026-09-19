import Link from "next/link";

export function CaseStudyLinksGroup({
  projectName,
  liveUrl,
}: {
  projectName: string;
  liveUrl: string;
}) {
  return (
    <div className="flex flex-wrap gap-4">
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-soft-white transition-opacity hover:opacity-90"
      >
        Visit {projectName}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      <Link
        href="/#work"
        className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        Back to Work
      </Link>
      <Link
        href="/#contact"
        className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        Contact Amer
      </Link>
    </div>
  );
}
