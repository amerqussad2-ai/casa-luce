import type { Metadata } from "next";
import ContactHero from "@/components/ContactHero";
import ContactMain from "@/components/ContactMain";
import ContactPrivateDining from "@/components/ContactPrivateDining";
import ContactLocationVisual from "@/components/ContactLocationVisual";
import ContactReservationCTA from "@/components/ContactReservationCTA";

export const metadata: Metadata = {
  title: "Contact | Casa Luce",
  description:
    "Get in touch with Casa Luce in Dubai Marina — reservations, private dining, and general enquiries. Our team is here to help.",
};

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col focus:outline-none">
      <ContactHero />
      <ContactMain />
      <ContactPrivateDining />
      <ContactLocationVisual />
      <ContactReservationCTA />
    </main>
  );
}
