import type { Metadata } from "next";
import ContactHero from "@/components/ContactHero";
import ContactMain from "@/components/ContactMain";
import ContactPrivateDining from "@/components/ContactPrivateDining";
import ContactLocationVisual from "@/components/ContactLocationVisual";
import ContactReservationCTA from "@/components/ContactReservationCTA";
import { SITE_NAME } from "@/lib/site";

const TITLE = "Contact | Casa Luce";
const DESCRIPTION =
  "Get in touch with Casa Luce in Dubai Marina — reservations, private dining, and general enquiries. Our team is here to help.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    url: "/contact",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
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
