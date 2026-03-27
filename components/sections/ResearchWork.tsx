"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function ResearchWork() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax depths (moving upwards critically faster or slower than scroll)
  const yFast = useTransform(scrollYProgress, [0, 1], ["15vh", "-25vh"]);
  const yMedium = useTransform(scrollYProgress, [0, 1], ["10vh", "-15vh"]);
  const ySlow = useTransform(scrollYProgress, [0, 1], ["5vh", "-10vh"]);
  
  // Parallax floating downwards (moving slower than the actual scroll momentum)
  const yReverse = useTransform(scrollYProgress, [0, 1], ["-10vh", "20vh"]);

  return (
    <section ref={containerRef} className="relative w-full h-[140vh] md:h-[180vh] overflow-hidden">
      {/* Background isolation container for the global Topography */}
      <div className="absolute inset-0 -z-10 bg-[#e6ebf0]" />

      {/* Decorative Blueprint Rings mapped to reverse parallax depth */}
      <motion.div 
        className="absolute top-[30%] left-[20%] w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d1dbe5] pointer-events-none"
        style={{ y: yReverse }}
      />
      <motion.div 
        className="absolute top-[60%] left-[70%] w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d1dbe5] pointer-events-none"
        style={{ y: ySlow }}
      />

      {/* Main Title Block - Slow Parallax */}
      <motion.div 
        className="absolute top-[8%] md:top-[10%] left-6 lg:left-24 z-10 max-w-2xl lg:max-w-4xl"
        style={{ y: ySlow }}
      >
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#2b3a4a] leading-[1.1] md:leading-[1.1]">
          Pioneering<br/><span className="text-[#647c94] italic block mt-2">Research.</span>
        </h2>
        <p className="mt-8 md:mt-12 text-[#465a6e] text-lg md:text-2xl font-light max-w-xl md:max-w-2xl leading-relaxed">
          Constantly pushing the boundaries of what is mathematically and physically possible in modern geotechnical engineering.
        </p>
      </motion.div>

      {/* Floating Card 1: Main Model (Top Right) */}
      <motion.div 
        className="absolute top-[25%] md:top-[12%] right-6 md:right-[5%] lg:right-[8%] w-[85vw] md:w-[480px] lg:w-[600px] p-4 md:p-8 bg-[#f8fafc] shadow-2xl rounded-sm border border-[#d1dbe5] z-20 origin-bottom-left rotate-2 transition-transform hover:-rotate-1 hover:scale-[1.02] duration-700"
        style={{ y: yMedium }}
      >
        <div className="relative w-full aspect-square overflow-hidden mb-6 rounded-sm">
          <Image 
            src="/Screenshot 2026-03-27 105031.png" 
            alt="Research Model" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" 
          />
        </div>
        <p className="text-[10px] md:text-sm font-semibold text-[#647c94] uppercase tracking-widest border-b border-[#d1dbe5] pb-3 mb-4">
          Fig 1. Macroscopic Models
        </p>
        <p className="text-sm md:text-xl font-serif text-[#2b3a4a] leading-relaxed">
          Developing advanced hazard mitigation models tailored for sustainable infrastructure development globally.
        </p>
      </motion.div>

      {/* Floating Card 2: Field Polaroid (Middle Left) */}
      <motion.div 
        className="absolute top-[55%] md:top-[45%] lg:top-[55%] left-6 md:left-[8%] lg:left-[10%] w-72 md:w-[400px] lg:w-[480px] p-4 md:p-5 bg-white shadow-xl z-30 -rotate-3 transition-transform hover:rotate-1 hover:scale-105 duration-700"
        style={{ y: yFast }}
      >
        <div className="relative w-full aspect-[4/3] overflow-hidden mb-4 bg-[#e6ebf0]">
          <Image 
            src="/Lab1.webp" 
            alt="Soil Mechanics" 
            fill 
            className="object-cover object-center" 
          />
        </div>
        <p className="text-center text-[10px] md:text-sm font-bold text-stone-400 uppercase tracking-widest py-3">
          Soil Micro-Structure
        </p>
      </motion.div>

      {/* Floating Card 3: Abstract Post-It (Bottom Center/Right) */}
      <motion.div 
        className="absolute top-[70%] md:top-[60%] lg:top-[65%] right-6 md:right-[15%] lg:right-[20%] w-[90vw] md:w-[500px] lg:w-[600px] p-8 md:p-16 lg:p-20 bg-[#2b3a4a] shadow-2xl rounded-sm z-40 rotate-1 hover:-rotate-1 transition-transform duration-700"
        style={{ y: yMedium }}
      >
        <h4 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 text-[#f8fafc] leading-tight">
          Sustainable Foundations
        </h4>
        <p className="font-light leading-relaxed text-[#a8b8c8] text-sm md:text-xl lg:text-2xl mb-10 md:mb-12">
          Our department stands at the forefront of environmental geotechnics, seamlessly combining field testing with rigorous computational analysis to secure the infrastructural pillars of tomorrow.
        </p>
        <button className="pb-2 border-b border-[#647c94] text-[#a8b8c8] hover:text-white hover:border-white transition-colors duration-300 text-xs md:text-sm font-bold tracking-widest uppercase">
          Explore Publications
        </button>
      </motion.div>

    </section>
  );
}
