"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WireframeGlobe = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 mix-blend-screen overflow-hidden text-[#6d8a67]" style={{ perspective: "1000px" }}>
      {/* Concentric rotating rings for 3D sphere illusion */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2/3 md:w-3/4 aspect-square rounded-full border border-current"
          style={{ transformStyle: "preserve-3d" }}
          initial={{ rotateY: i * 22.5, rotateX: 60 }}
          animate={{ rotateY: 360 + (i * 22.5) }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      ))}
      {/* Horizontal core rings */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute w-[70%] md:w-[80%] aspect-square rounded-full border border-current/40"
          style={{ 
            y: `${(i - 2) * 20}%`,
            rotateX: 80 
          }}
        />
      ))}
      {/* Inner glowing pulse */}
      <motion.div
        className="absolute w-1/4 aspect-square rounded-full bg-current/30 blur-2xl"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

const WireframeMesh = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-stone-900/40 text-[#d8c29d]/30" style={{ perspective: "800px" }}>
      <motion.div 
        className="absolute w-[300%] h-[300%]"
        style={{ 
          backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', 
          backgroundSize: '40px 40px', 
          transformOrigin: '50% 50%',
          rotateX: "60deg",
          rotateZ: "45deg"
        }}
        animate={{ backgroundPositionX: ['0px', '40px'], backgroundPositionY: ['0px', '40px'] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
      />
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: "radial-gradient(circle, transparent 0%, rgba(28,25,23,1) 90%)" }} 
      />
    </div>
  );
};

export function EntryFacilities() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  // Parallax Sliding Mechanics
  // As the section naturally scrolls up the screen, the geometry physically slides outward to reveal the hidden messaging beneath them.
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
            Sits patiently underneath everything, revealed only when the geometries slide apart.
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
            LAYER 2: The Two Massive Geometrical "Doors"
            They natively slide apart to literally open the Gateway.
            ========================================= */}
        <motion.div 
          className="absolute left-0 md:left-[5%] w-[45vw] md:w-[30vw] aspect-[3/4] shadow-2xl z-20 origin-bottom-left -rotate-3 overflow-hidden rounded relative border border-stone-800 backdrop-blur-md bg-stone-900/60"
          style={{ x: slideLeft, opacity: frontLayerOpacity }}
        >
          <WireframeMesh />
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 font-mono text-[10px] md:text-xs text-[#d8c29d]/70 tracking-widest uppercase drop-shadow-md z-10 w-3/4">
             <span className="block text-[#d8c29d] font-bold mb-1">GEO-MESH // 01</span>
             Subsurface Mapping Active
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute right-0 md:right-[5%] w-[45vw] md:w-[32vw] aspect-[4/5] shadow-2xl z-20 origin-bottom-right rotate-2 mt-32 overflow-hidden rounded relative border border-stone-800 backdrop-blur-md bg-stone-900/60"
          style={{ x: slideRight, opacity: frontLayerOpacity }}
        >
          <WireframeGlobe />
          <div className="absolute top-4 right-4 md:top-8 md:right-8 text-right font-mono text-[10px] md:text-xs text-[#6d8a67]/70 tracking-widest uppercase drop-shadow-md z-10">
             <span className="block text-[#6d8a67] font-bold mb-1">STRATA // 02</span>
             Global Matrix Online
          </div>
        </motion.div>

        {/* =========================================
            LAYER 3: The Initial Title Layer
            Floats cleanly on top of the geometry and vanishes alongside them.
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
