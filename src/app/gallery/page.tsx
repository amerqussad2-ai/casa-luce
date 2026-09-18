import type { Metadata } from "next";
import GalleryHero from "@/components/GalleryHero";
import GalleryIntro from "@/components/GalleryIntro";
import GalleryGrid from "@/components/GalleryGrid";
import GalleryTextBreak from "@/components/GalleryTextBreak";
import GalleryClosingImage from "@/components/GalleryClosingImage";
import GalleryCTA from "@/components/GalleryCTA";
import { SITE_NAME } from "@/lib/site";

const TITLE = "Gallery | Casa Luce";
const DESCRIPTION =
  "A closer look at Casa Luce — candlelit tables, handmade plates, and the Dubai Marina skyline that shapes every evening.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    url: "/gallery",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
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
