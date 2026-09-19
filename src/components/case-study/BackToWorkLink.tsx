import Link from "next/link";

export function BackToWorkLink() {
  return (
    <Link
      href="/#work"
      className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-accent"
    >
      ← Back to Work
    </Link>
  );
}
