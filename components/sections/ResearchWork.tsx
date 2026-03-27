"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";

export function ResearchWork() {
  return (
    <section className="relative py-24 md:py-32 w-full overflow-hidden bg-white">
      {/* Blurred background element */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full opacity-30 select-none pointer-events-none">
        <Image 
          src="/Screenshot 2026-03-27 105031.png"
          alt="Abstract Research Background"
          fill
          className="object-cover blur-md"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-16">
            Pioneering Research
          </h2>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <FadeIn delay={0.4}>
              <p className="text-stone-700 text-lg md:text-xl font-light leading-relaxed">
                Our faculty and researchers are constantly pushing the boundaries of what is possible in soil mechanics, rock engineering, and foundation design.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="text-stone-600 font-light leading-relaxed">
                From analyzing the micro-structure of complex soils to developing macroscopic models for hazard mitigation, the Geotechnical Engineering department is at the forefront of sustainable infrastructure solutions.
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <button className="px-6 py-3 border border-stone-800 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-300">
                View Publications
              </button>
            </FadeIn>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <FadeIn delay={0.7} direction="left" className="relative z-20">
              <div className="relative h-[400px] w-4/5 ml-auto shadow-xl">
                <Image
                  src="/Screenshot 2026-03-27 105031.png"
                  alt="Research Data"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.9} direction="right" className="absolute -bottom-12 -left-4 md:-left-12 z-30">
              <div className="relative h-[250px] w-[300px] shadow-2xl border-4 border-white overflow-hidden">
                <Image
                  src="/Lab1.webp"
                  alt="Lab Analysis Zoom"
                  fill
                  className="object-cover object-center scale-150" // Zoomed crop effect
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
