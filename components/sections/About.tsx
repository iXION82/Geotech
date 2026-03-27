"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

export function About() {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#e3eae0]">
      <div className="absolute inset-0 -z-10 bg-[#ecf0e9]" />
      <div className="relative z-10 py-24 md:py-32 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Text Content - Overlapping the image slightly on desktop */}
        <div className="w-full md:w-1/2 flex flex-col justify-center z-10 md:-mr-12 xl:-mr-24 pt-12 md:pt-0">
          <FadeIn delay={0.2} direction="up">
            <h2 className="text-sm font-medium tracking-widest text-[#6d8a67] uppercase mb-4">
              About the Department
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.4} direction="up">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2e3f2b] leading-[1.1] mb-8">
              Pioneering the ground we build upon.
            </h3>
          </FadeIn>
          
          <FadeIn delay={0.6} direction="up">
            <div className="bg-[#f4f7f1]/95 backdrop-blur-sm p-6 md:p-8 shadow-sm border border-[#e3eae0]">
              <p className="text-[#4a5e46] text-lg leading-relaxed mb-6 font-light">
                The Geotechnical Engineering department at IIT ISM Dhanbad boasts a rich legacy of academic excellence and impactful research. We focus on the fundamental behavior of earth materials and their applications in solving complex engineering challenges.
              </p>
              <p className="text-[#4a5e46] text-lg leading-relaxed mb-8 font-light">
                Our fieldwork-driven approach ensures that students and researchers are not just learning theory, but actively applying knowledge to real-world infrastructure and environmental projects.
              </p>
              
              <button className="group flex items-center gap-4 text-[#2e3f2b] font-medium pb-2 border-b border-[#6d8a67] hover:border-[#2e3f2b] transition-colors">
                <span>Explore our history</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Image Content - Asymmetrical, slightly lower */}
        <div className="w-full md:w-1/2 md:mt-32 xl:mt-48 h-[500px] md:h-[700px] relative shadow-2xl">
          <FadeIn direction="none" className="w-full h-full">
            <ParallaxImage 
              src="/geotech surveying.jpg" 
              alt="Students conducting geotechnical survey" 
              overlayClass="bg-[#2e3f2b]/10 mix-blend-multiply transition-opacity duration-500 hover:opacity-0" 
            />
          </FadeIn>
          {/* Soft decorative block */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#e3eae0] -z-10" />
        </div>
      </div>
    </section>
  );
}
