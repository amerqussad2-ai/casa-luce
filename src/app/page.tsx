import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Capabilities } from "@/components/Capabilities";
import { About } from "@/components/About";
import { CurrentlyExploring } from "@/components/CurrentlyExploring";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Capabilities />
      <About />
      <CurrentlyExploring />
      <Resume />
      <Contact />
    </>
  );
}
