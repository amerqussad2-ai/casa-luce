import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Capabilities } from "@/components/Capabilities";
import { About } from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Capabilities />
      <About />
    </>
  );
}
