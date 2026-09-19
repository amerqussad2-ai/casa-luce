import { Container } from "@/components/Container";

const learningAreas = [
  "Server-side form handling",
  "Anti-spam & rate limiting",
  "Automated browser / E2E testing",
  "Performance & Core Web Vitals",
  "Deeper accessibility testing",
  "Structured data / JSON-LD",
  "Production-oriented backend patterns",
];

export function CurrentlyExploring() {
  return (
    <section id="exploring" className="border-t border-border py-16 sm:py-20">
      <Container>
        <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
          Currently Exploring
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Areas I&apos;m currently learning and deepening as I continue
          building more production-oriented web applications.
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {learningAreas.map((area) => (
            <li key={area} className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-muted-foreground"
              />
              {area}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
