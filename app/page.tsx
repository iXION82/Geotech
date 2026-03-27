import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Laboratories } from "@/components/sections/Laboratories";
import { ResearchWork } from "@/components/sections/ResearchWork";
import { CampusIdentity } from "@/components/sections/CampusIdentity";
import { EntryFacilities } from "@/components/sections/EntryFacilities";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-stone-50 overflow-hidden">
      <Hero />
      <About />
      <Laboratories />
      <ResearchWork />
      <CampusIdentity />
      <EntryFacilities />
      <Footer />
    </main>
  );
}
