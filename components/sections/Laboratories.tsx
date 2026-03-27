"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";

const labImages = [
  { src: "/Lab1.webp", alt: "Geotech Lab Equipment", tag: "Soil Mechanics" },
  { src: "/Lab2.png", alt: "Lab Testing", tag: "Rock Testing" },
  { src: "/Lab3.png", alt: "Advanced Research Lab", tag: "Geosynthetics" },
  { src: "/Lab4.png", alt: "Field Equipment", tag: "Site Investigation" },
  { src: "/Lab5.png", alt: "Material Testing", tag: "Foundation Engineering" },
  { src: "/Lab6.png", alt: "Analysis Tools", tag: "Computational Geotechnics" },
  { src: "/Lab7.png", alt: "Research Facility", tag: "Environmental Geotechnics" },
];

function Card({ image, className }: { image: typeof labImages[0], className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl group/card bg-stone-900 border border-[#3d342f] shadow-xl ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover/card:scale-110"
      />
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply opacity-80 group-hover/card:opacity-20 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a18]/90 via-[#1e1a18]/40 to-transparent opacity-80 group-hover/card:opacity-100 transition-opacity duration-700" />
      
      {/* Editorial Text Reveal */}
      <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-end translate-y-4 group-hover/card:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
        <span className="text-[#cbb1a3] text-[9px] md:text-[10px] font-semibold tracking-widest uppercase mb-1 md:mb-1.5 drop-shadow-md">
          {image.tag}
        </span>
        <h4 className="text-[#f4eee9] text-lg md:text-xl font-serif leading-snug drop-shadow-2xl">
          {image.alt}
        </h4>
      </div>
    </div>
  );
}

function BentoGridBlock() {
  return (
    <div className="grid grid-cols-[repeat(7,240px)] md:grid-cols-[repeat(7,300px)] grid-rows-[repeat(2,200px)] md:grid-rows-[repeat(2,260px)] gap-4 md:gap-6 mr-4 md:mr-6 shrink-0">
      {/* 1. Tall (Col 1, Rows 1-2) */}
      <Card image={labImages[0]} className="col-[1] row-[1_/_span_2]" />
      
      {/* 2. Wide Top (Cols 2-3, Row 1) */}
      <Card image={labImages[1]} className="col-[2_/_span_2] row-[1]" />
      
      {/* 3. Wide Bottom (Cols 2-3, Row 2) */}
      <Card image={labImages[2]} className="col-[2_/_span_2] row-[2]" />
      
      {/* 4. Large Square (Cols 4-5, Rows 1-2) */}
      <Card image={labImages[3]} className="col-[4_/_span_2] row-[1_/_span_2]" />
      
      {/* 5. Small Square Top (Col 6, Row 1) */}
      <Card image={labImages[4]} className="col-[6] row-[1]" />
      
      {/* 6. Small Square Bottom (Col 6, Row 2) */}
      <Card image={labImages[5]} className="col-[6] row-[2]" />
      
      {/* 7. Tall (Col 7, Rows 1-2) */}
      <Card image={labImages[6]} className="col-[7] row-[1_/_span_2]" />
    </div>
  );
}

export function Laboratories() {
  return (
    <section className="relative py-24 md:py-32 w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#1e1a18]" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 mb-8 md:mb-12 pointer-events-none">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pointer-events-auto">
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <h2 className="text-sm font-medium tracking-widest text-[#cbb1a3] uppercase mb-4">
                Facilities
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#f4eee9] leading-[1.1] md:leading-[1.1]">
                State-of-the-Art<br/>
                <span className="text-[#cbb1a3] italic block mt-2">Laboratories.</span>
              </h3>
            </FadeIn>
          </div>
          <FadeIn delay={0.4} className="max-w-md">
            <p className="text-[#a89d96] font-light leading-relaxed">
              Equipped with advanced instrumentation, our labs provide an immersive practical environment for testing, analysis, and discovery, bridging the gap between theoretical mechanics and field application.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Infinite Scrolling Angled Bento Marquee */}
      <div className="relative z-10 flex overflow-hidden w-full group py-8 md:py-24">
        {/* We rotate the wrapper so it doesn't break the translate(-50%) keyframes! */}
        <div className="flex w-[120vw] justify-center -rotate-3 md:-rotate-[4deg] scale-110">
          <div className="flex w-max relative shrink-0 animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]">
            <BentoGridBlock />
            <BentoGridBlock />
          </div>
        </div>
        
        {/* Gradients to fade unrotated vertical edges */}
        <div className="absolute inset-y-0 left-0 w-[15vw] md:w-[10vw] bg-gradient-to-r from-[#1e1a18] to-transparent pointer-events-none z-20" />
        <div className="absolute inset-y-0 right-0 w-[15vw] md:w-[10vw] bg-gradient-to-l from-[#1e1a18] to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
}
