import type { Metadata } from "next";
import StoryHero from "@/components/StoryHero";
import StoryOpening from "@/components/StoryOpening";
import StoryPhilosophy from "@/components/StoryPhilosophy";
import StoryAtmosphere from "@/components/StoryAtmosphere";
import StorySetting from "@/components/StorySetting";
import StoryCTA from "@/components/StoryCTA";
import { SITE_NAME } from "@/lib/site";

const TITLE = "Our Story | Casa Luce";
const DESCRIPTION =
  "Casa Luce brings the warmth and rhythm of Italian dining to Dubai Marina — discover the story, the kitchen, and the evenings behind the restaurant.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "/our-story",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    url: "/our-story",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
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
