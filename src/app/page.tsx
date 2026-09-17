import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <OurStory />
    </main>
  );
}
