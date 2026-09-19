import { Container } from "@/components/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-2 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Amer Kussad</p>
        <p>Front-End Developer &middot; React &amp; Next.js &middot; Ras Al Khaimah, UAE</p>
      </Container>
    </footer>
  );
}
