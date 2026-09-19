import type { ReactNode } from "react";
import { Container } from "@/components/Container";

export function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border py-12 sm:py-16">
      <Container>
        <h2 className="font-serif text-2xl text-foreground sm:text-3xl">{title}</h2>
        <div className="mt-6 space-y-8">{children}</div>
      </Container>
    </section>
  );
}
