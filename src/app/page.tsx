import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import SignatureDishes from "@/components/SignatureDishes";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <OurStory />
      <SignatureDishes />
    </main>
  );
}
