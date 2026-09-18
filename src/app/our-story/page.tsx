import type { Metadata } from "next";
import StoryHero from "@/components/StoryHero";
import StoryOpening from "@/components/StoryOpening";
import StoryPhilosophy from "@/components/StoryPhilosophy";
import StoryAtmosphere from "@/components/StoryAtmosphere";
import StorySetting from "@/components/StorySetting";
import StoryCTA from "@/components/StoryCTA";

export const metadata: Metadata = {
  title: "Our Story | Casa Luce",
  description:
    "Casa Luce brings the warmth and rhythm of Italian dining to Dubai Marina — discover the story, the kitchen, and the evenings behind the restaurant.",
};

export default function OurStoryPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col focus:outline-none">
      <StoryHero />
      <StoryOpening />
      <StoryPhilosophy />
      <StoryAtmosphere />
      <StorySetting />
      <StoryCTA />
    </main>
  );
}
