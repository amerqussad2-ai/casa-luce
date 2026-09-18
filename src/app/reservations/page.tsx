import type { Metadata } from "next";
import ReservationHero from "@/components/ReservationHero";
import ReservationMain from "@/components/ReservationMain";
import ReservationNotes from "@/components/ReservationNotes";
import ReservationAtmosphere from "@/components/ReservationAtmosphere";
import ReservationContactNote from "@/components/ReservationContactNote";

export const metadata: Metadata = {
  title: "Reservations | Casa Luce",
  description:
    "Reserve your table at Casa Luce in Dubai Marina — modern Italian dining, warm hospitality, and Marina views.",
};

export default function ReservationsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col focus:outline-none">
      <ReservationHero />
      <ReservationMain />
      <ReservationNotes />
      <ReservationAtmosphere />
      <ReservationContactNote />
    </main>
  );
}
