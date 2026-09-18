import type { Metadata } from "next";
import ReservationHero from "@/components/ReservationHero";
import ReservationMain from "@/components/ReservationMain";
import ReservationNotes from "@/components/ReservationNotes";
import ReservationAtmosphere from "@/components/ReservationAtmosphere";
import ReservationContactNote from "@/components/ReservationContactNote";
import { SITE_NAME } from "@/lib/site";

const TITLE = "Reservations | Casa Luce";
const DESCRIPTION =
  "Reserve your table at Casa Luce in Dubai Marina — modern Italian dining, warm hospitality, and Marina views.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "/reservations",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    url: "/reservations",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
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
