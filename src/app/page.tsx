import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import SignatureDishes from "@/components/SignatureDishes";
import WhyCasaLuce from "@/components/WhyCasaLuce";
import GalleryPreview from "@/components/GalleryPreview";
import ReservationSection from "@/components/ReservationSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <OurStory />
      <SignatureDishes />
      <WhyCasaLuce />
      <GalleryPreview />
      <ReservationSection />
    </main>
  );
}
