"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import Image from "next/image";
import Link from "next/link";

export default function IGSPage() {
  return (
    <main className="flex min-h-screen flex-col relative w-full">
      <Navbar />
      
      {/* Hero Section for IGS Page */}
      <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-[#e3eae0]">
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn delay={0.2} direction="up">
            <h1 className="text-sm font-medium tracking-widest text-[#6d8a67] uppercase mb-6">
              Parent Organization
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-800 leading-[1.1] mb-12 max-w-4xl">
              Indian Geotechnical <span className="italic text-[#96a495]">Society.</span>
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-16">
            <FadeIn delay={0.5} direction="up">
              <div className="prose prose-lg text-[#4a5e46] font-light leading-relaxed">
                <p>
                  The Indian Geotechnical Society (IGS) aims to promote co-operation amongst engineers and scientists for the advancement and dissemination of knowledge in the fields of Soil Mechanics and Foundation Engineering, Engineering Geology, Rock Mechanics, and allied fields.
                </p>
                <p className="mt-6">
                  Established with a vision to build a robust foundation for the nation's infrastructural growth, the society provides a common forum for academicians, researchers, and field engineers to interact and share their experiences.
                </p>
              </div>
              
              <div className="mt-12">
                <a 
                  href="https://www.igs.org.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-stone-900 text-[#fdfbf7] px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-[#6d8a67] transition-all duration-300 rounded-sm"
                >
                  Know More
                  <span className="text-lg leading-none">↗</span>
                </a>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.7} className="relative h-[400px] w-full rounded-sm overflow-hidden shadow-2xl">
              {/* Using a placeholder aesthetic image related to earth/foundations from existing assets */}
              <Image 
                src="/geotech surveying.jpg" 
                alt="Geotechnical Engineering" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/20 mix-blend-multiply" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Objectives Area */}
      <section className="py-24 md:py-32 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <FadeIn delay={0.2}>
             <h3 className="text-3xl md:text-5xl font-serif text-stone-800 mb-16 text-center">Core Objectives</h3>
           </FadeIn>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Knowledge Sharing", desc: "Disseminating the latest advancements in geotechnical engineering through conferences, journals, and technical workshops." },
                { title: "Industry Collaboration", desc: "Bridging the gap between theoretical research and practical field applications to ensure sustainable development." },
                { title: "Professional Growth", desc: "Providing a platform for young engineers and seasoned experts to network, collaborate, and grow their expertise." }
              ].map((obj, i) => (
                <FadeIn key={i} delay={0.3 + (i * 0.1)} direction="up" className="p-8 border border-stone-200 hover:border-[#6d8a67] transition-colors duration-300">
                   <h4 className="text-xl font-serif text-stone-900 mb-4">{obj.title}</h4>
                   <p className="text-stone-600 font-light leading-relaxed">{obj.desc}</p>
                </FadeIn>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
