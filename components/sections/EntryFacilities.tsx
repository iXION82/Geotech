"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function EntryFacilities() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  
  // Cinematic zoom: The SVG mask scales up impossibly large until the user literally flies through the 'E' in GATEWAY.
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 400]);
  
  // Transform origin defaults to center. For perfectly zooming into the negative space of a letter, we keep it central.
  const transformOrigin = "50% 48%"; 
  
  // The mask fully dissolves near the end to prevent overlapping pixel interpolation artifacts.
  const maskOpacity = useTransform(scrollYProgress, [0.65, 0.8], [1, 0]);

  // The actual destination content fades in and subtly scales up for a dramatic finale reveal.
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const contentScale = useTransform(scrollYProgress, [0.3, 1], [0.9, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[1500vh] bg-[#fdfbf7]">
      {/* Sticky Checkpoint: Locks the view inside this screen for 1500vh of scrolling depth */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#ebe9e4] flex items-center justify-center">
        
        {/* =========================================
            LAYER 1: The Destination Content
            This is what you see when you fly completely through the text.
            ========================================= */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center z-0 px-6"
          style={{ opacity: contentOpacity, scale: contentScale }}
        >
          <span className="text-xs md:text-sm font-medium tracking-widest text-[#8c8577] uppercase mb-4 md:mb-6">
            The Gateway
          </span>
          <h3 className="text-5xl md:text-7xl lg:text-9xl font-serif text-stone-900 leading-none text-center">
            Designing the<br/>
            <span className="italic font-light text-[#8c887f] block mt-2">Earth's Future.</span>
          </h3>
          <button className="mt-12 px-8 py-4 border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-[#ebe9e4] transition-colors duration-500 uppercase tracking-widest text-xs font-bold shadow-sm">
            Join The Department
          </button>
        </motion.div>

        {/* =========================================
            LAYER 2: The Cinematic Fly-Through Mask 
            Solid block with "GATEWAY" literally pieced out of it.
            ========================================= */}
        <motion.div
           className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"
           style={{ scale, opacity: maskOpacity, transformOrigin }}
        >
          {/* We build the cinematic mask using an SVG to dynamically carve the text out of the dark stone rect. */}
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
            <defs>
              <mask id="gatewayMask">
                {/* White rectangle covers everything (meaning the mask is fully opaque and visible everywhere by default) */}
                <rect width="100%" height="100%" fill="white" />
                {/* Black text cuts a completely transparent hole out of the white mask */}
                <text 
                  x="50%" 
                  y="50%" 
                  textAnchor="middle" 
                  dominantBaseline="central" 
                  fill="black" 
                  className="font-serif font-black"
                  fontSize="160" 
                  letterSpacing="-0.02em"
                >
                  GATEWAY
                </text>
              </mask>
            </defs>
            {/* The actual visible block that gets masked. This is the dark site-matched #1c211e block. */}
            <rect width="100%" height="100%" fill="#1c211e" mask="url(#gatewayMask)" />
          </svg>
        </motion.div>

      </div>
    </section>
  );
}
