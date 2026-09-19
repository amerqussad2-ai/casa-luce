import Image from "next/image";
import { Container } from "@/components/Container";

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">About</h2>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-16">
          <div className="w-40 overflow-hidden rounded-lg border border-border sm:w-48 lg:w-full">
            <Image
              src="/images/profile/Amer_Kussad_Profile.jfif"
              alt="Portrait of Amer Kussad"
              width={896}
              height={1195}
              sizes="(min-width: 1024px) 240px, 192px"
              className="h-auto w-full"
            />
          </div>

          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a front-end developer based in Ras Al Khaimah, UAE, focused
              on building responsive, polished web experiences with React,
              Next.js, TypeScript, and modern web technologies.
            </p>
            <p>
              My professional background also includes Artificial Intelligence
              studies, recruitment coordination, and more than three years of
              customer-facing experience. These roles strengthened my
              communication, problem-solving, coordination, and ability to work
              with real business needs.
            </p>
            <p>
              Today, my main focus is growing in Front-End and Web Development,
              with particular interest in React, Next.js, and practical web
              application development.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
