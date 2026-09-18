import type { Metadata } from "next";
import GalleryHero from "@/components/GalleryHero";
import GalleryIntro from "@/components/GalleryIntro";
import GalleryGrid from "@/components/GalleryGrid";
import GalleryTextBreak from "@/components/GalleryTextBreak";
import GalleryClosingImage from "@/components/GalleryClosingImage";
import GalleryCTA from "@/components/GalleryCTA";

export const metadata: Metadata = {
  title: "Gallery | Casa Luce",
  description:
    "A closer look at Casa Luce — candlelit tables, handmade plates, and the Dubai Marina skyline that shapes every evening.",
};

export default function GalleryPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col focus:outline-none">
      <GalleryHero />
      <GalleryIntro />
      <GalleryGrid />
      <GalleryTextBreak />
      <GalleryClosingImage />
      <GalleryCTA />
    </main>
  );
}
