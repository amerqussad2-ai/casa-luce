import type { Metadata } from "next";
import MenuHero from "@/components/MenuHero";
import MenuIntroduction from "@/components/MenuIntroduction";
import MenuCategories from "@/components/MenuCategories";
import MenuReservationCTA from "@/components/MenuReservationCTA";

export const metadata: Metadata = {
  title: "Menu | Casa Luce",
  description:
    "Explore the Casa Luce menu — handmade pasta, Mediterranean seafood, and generous Italian cooking through the lens of modern Dubai Marina.",
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
