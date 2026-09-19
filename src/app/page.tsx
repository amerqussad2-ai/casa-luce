import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Capabilities } from "@/components/Capabilities";
import { About } from "@/components/About";
import { CurrentlyExploring } from "@/components/CurrentlyExploring";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";

const description =
  "Amer Kussad is a Front-End Developer based in Ras Al Khaimah, UAE, building responsive and polished web experiences with React, Next.js, TypeScript, and modern web technologies.";

export const metadata: Metadata = {
  description,
  openGraph: {
    title: "Amer Kussad | Front-End Developer",
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amer Kussad | Front-End Developer",
    description,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Capabilities />
      <About />
      <CurrentlyExploring />
      <Resume />
      <Contact />
    </>
  );
}
