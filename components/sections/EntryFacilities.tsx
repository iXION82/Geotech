"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function EntryFacilities() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  // Parallax Sliding Mechanics
  // As the section naturally scrolls up the screen, the images physically slide outward to reveal the hidden messaging beneath them.
  const slideLeft = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "-120%"]);
  const slideRight = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "120%"]);
  
  // Fades out the front layer cleanly as they exit the screen
  const frontLayerOpacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);

  // Gentle upward float for the deeply embedded final text
  const endY = useTransform(scrollYProgress, [0.4, 0.8], [100, 0]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[130vh] md:min-h-[150vh] bg-[#ebe9e4] overflow-hidden flex flex-col justify-center py-24">
      
      <div className="relative w-full max-w-7xl mx-auto px-6 h-[80vh] md:h-[90vh] flex items-center justify-center">
        
        {/* =========================================
            LAYER 1: The Background "Gateway" Text
            Sits patiently underneath everything, revealed only when the doors slide apart.
            ========================================= */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
          <motion.div style={{ y: endY }} className="flex flex-col items-center text-center">
            <span className="text-xs md:text-sm font-medium tracking-widest text-[#8c8577] uppercase mb-4 md:mb-6">
              The Gateway
            </span>
            <h3 className="text-5xl md:text-7xl lg:text-9xl font-serif text-stone-900 leading-none">
              Designing the<br/>
              <span className="italic font-light text-[#8c887f] block mt-2">Earth's Future.</span>
            </h3>
            <button className="mt-12 px-8 py-4 border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-[#ebe9e4] transition-colors duration-500 uppercase tracking-widest text-xs font-bold pointer-events-auto">
              Join The Department
            </button>
          </motion.div>
        </div>

        {/* =========================================
            LAYER 2: The Two Massive Laboratory "Doors"
            They natively slide apart to literally open the Gateway.
            ========================================= */}
        <motion.div 
          className="absolute left-0 md:left-[5%] w-[45vw] md:w-[30vw] aspect-[3/4] shadow-2xl z-20 origin-bottom-left -rotate-3"
          style={{ x: slideLeft, opacity: frontLayerOpacity }}
        >
          <Image src="/Labgate.png" alt="Lab Entrance" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#383632]/10 mix-blend-multiply" />
        </motion.div>
        
        <motion.div 
          className="absolute right-0 md:right-[5%] w-[45vw] md:w-[32vw] aspect-[4/5] shadow-2xl z-20 origin-bottom-right rotate-2 mt-32"
          style={{ x: slideRight, opacity: frontLayerOpacity }}
        >
          <Image src="/LabTittle.png" alt="Lab Facilities" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#383632]/10 mix-blend-multiply" />
        </motion.div>

        {/* =========================================
            LAYER 3: The Initial Title Layer
            Floats cleanly on top of the images and vanishes alongside them.
            ========================================= */}
        <motion.div 
          className="absolute z-30 pointer-events-none -top-12 md:top-0 left-0 right-0"
          style={{ opacity: frontLayerOpacity }}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-800 leading-[1.1] drop-shadow-sm">
              Industry-Leading<br/>
              <span className="text-[#8c8577] italic block mt-3 drop-shadow-none">Equipment.</span>
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
