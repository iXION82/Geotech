"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";
import { useRef } from "react";

export function ResearchWork() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yFg = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={ref} className="relative py-24 md:py-32 w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#e6ebf0]" />
      {/* Blurred background element with Parallax */}
      <motion.div 
        className="absolute right-0 w-full md:w-2/3 opacity-30 select-none pointer-events-none h-[140%] -top-[20%]"
        style={{ y: yBg }}
      >
        <Image 
          src="/Screenshot 2026-03-27 105031.png"
          alt="Abstract Research Background"
          fill
          className="object-cover blur-md"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#e6ebf0]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2b3a4a] mb-16">
            Pioneering Research
          </h2>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <FadeIn delay={0.4}>
              <p className="text-[#465a6e] text-lg md:text-xl font-light leading-relaxed">
                Our faculty and researchers are constantly pushing the boundaries of what is possible in soil mechanics, rock engineering, and foundation design.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="text-[#5c7287] font-light leading-relaxed">
                From analyzing the micro-structure of complex soils to developing macroscopic models for hazard mitigation, the Geotechnical Engineering department is at the forefront of sustainable infrastructure solutions.
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <button className="px-6 py-3 border border-[#2b3a4a] text-[#2b3a4a] hover:bg-[#2b3a4a] hover:text-[#e6ebf0] transition-colors duration-300">
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
            <motion.div 
              className="absolute -bottom-12 -left-4 md:-left-12 z-30"
              style={{ y: yFg }}
            >
              <FadeIn delay={0.9} direction="right">
                <div className="relative h-[250px] w-[300px] shadow-2xl border-4 border-white overflow-hidden">
                  <Image
                    src="/Lab1.webp"
                    alt="Lab Analysis Zoom"
                    fill
                    className="object-cover object-center scale-150" // Zoomed crop effect
                  />
                </div>
              </FadeIn>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
