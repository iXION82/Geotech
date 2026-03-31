import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Laboratories } from "@/components/sections/Laboratories";
import { ResearchWork } from "@/components/sections/ResearchWork";
import { EntryFacilities } from "@/components/sections/EntryFacilities";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative w-full">
      <Navbar />
      <Hero />
      <About />
      <Laboratories />
      <ResearchWork />
      <EntryFacilities />
      <Footer />
    </main>
  );
}
