"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const labImages = [
  { src: "/Lab1.webp", alt: "Geotech Lab Equipment", tag: "Soil Mechanics" },
  { src: "/Lab2.png", alt: "Lab Testing", tag: "Rock Testing" },
  { src: "/Lab3.png", alt: "Advanced Research Lab", tag: "Geosynthetics" },
  { src: "/Lab4.png", alt: "Field Equipment", tag: "Site Investigation" },
  { src: "/Lab5.png", alt: "Material Testing", tag: "Foundation Engineering" },
  { src: "/Lab6.png", alt: "Analysis Tools", tag: "Computational Geotechnics" },
  { src: "/Lab7.png", alt: "Research Facility", tag: "Environmental Geotechnics" },
];

export function Laboratories() {
  return (
    <section className="relative py-24 md:py-32 w-full bg-[#f2efe9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <h2 className="text-sm font-medium tracking-widest text-[#a89d89] uppercase mb-4">
                Facilities
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.1]">
                State-of-the-Art Laboratories
              </h3>
            </FadeIn>
          </div>
          <FadeIn delay={0.4} className="max-w-md">
            <p className="text-stone-600 font-light leading-relaxed">
              Equipped with advanced instrumentation, our labs provide an immersive practical environment for testing, analysis, and discovery, bridging the gap between theoretical mechanics and field application.
            </p>
          </FadeIn>
        </div>

        {/* CSS Columns Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8 pb-12">
          {labImages.map((image, idx) => (
            <FadeIn key={image.src} delay={0.1 * (idx % 3)} direction="up" className="break-inside-avoid">
              <div className="group relative overflow-hidden bg-[#e0dcd3] shadow-md border border-[#e8e4db] rounded-sm">
                <div className="relative w-full overflow-hidden transition-transform duration-1000 ease-out group-hover:scale-105">
                  {/* Using native img for proper masonry aspect ratio flow */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                  {/* Editorial overlay */}
                  <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
                  <div className="absolute inset-0 bg-[#f2efe9]/10 transition-opacity duration-500 opacity-0 group-hover:opacity-100 mix-blend-overlay" />
                </div>
                {/* Reveal label on hover */}
                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 text-white">
                  <span className="text-sm font-medium tracking-wide uppercase">{image.tag}</span>
                  <div className="w-8 h-[1px] bg-[#d8c29d] mt-3 transition-all duration-500 delay-100 w-0 group-hover:w-8" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
