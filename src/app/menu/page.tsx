import type { Metadata } from "next";
import MenuHero from "@/components/MenuHero";
import MenuIntroduction from "@/components/MenuIntroduction";
import MenuCategories from "@/components/MenuCategories";
import MenuReservationCTA from "@/components/MenuReservationCTA";
import { SITE_NAME } from "@/lib/site";

const TITLE = "Menu | Casa Luce";
const DESCRIPTION =
  "Explore the Casa Luce menu — handmade pasta, Mediterranean seafood, and generous Italian cooking through the lens of modern Dubai Marina.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    url: "/menu",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function MenuPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col focus:outline-none">
      <MenuHero />
      <MenuIntroduction />
      <MenuCategories />
      <MenuReservationCTA />
    </main>
  );
}
