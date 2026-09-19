import { Container } from "@/components/Container";

const email = "amerkussad5@gmail.com";
const linkedInUrl = "https://www.linkedin.com/in/amer-qussad-727a6a199";
const githubUrl = "https://github.com/amerqussad2-ai";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-6 py-8 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
        <div>
          <p className="text-foreground">Amer Kussad</p>
          <p>Front-End Developer &middot; React &amp; Next.js</p>
          <p>Ras Al Khaimah, UAE</p>
        </div>

        <div className="flex flex-col gap-1">
          <a href={`mailto:${email}`} className="hover:text-accent">
            {email}
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            GitHub
          </a>
        </div>

        <p>© {year} Amer Kussad</p>
      </Container>
    </footer>
  );
}
