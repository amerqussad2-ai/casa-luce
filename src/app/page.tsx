import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import SignatureDishes from "@/components/SignatureDishes";
import WhyCasaLuce from "@/components/WhyCasaLuce";
import GalleryPreview from "@/components/GalleryPreview";
import ReservationSection from "@/components/ReservationSection";
import LocationContact from "@/components/LocationContact";

export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex flex-1 flex-col focus:outline-none"
    >
      <Hero />
      <OurStory />
      <SignatureDishes />
      <WhyCasaLuce />
      <GalleryPreview />
      <ReservationSection />
      <LocationContact />
    </main>
  );
}
