"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

export function CampusIdentity() {
  return (
    <section className="relative py-24 md:py-32 w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#1c211e]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24">
        
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-3/5 h-[500px]">
            <FadeIn className="w-full h-full" direction="right">
              <ParallaxImage src="/Tittle2.webp" alt="Campus Life" overlayClass="bg-black/40" />
            </FadeIn>
          </div>
          <div className="w-full md:w-2/5 flex flex-col justify-center">
            <FadeIn delay={0.3} direction="up">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#e6e8e3] leading-[1.1] md:leading-[1.1] mb-6">
                A Vibrant<br/>
                <span className="text-[#9ba39d] italic block mt-2">Community.</span>
              </h3>
              <p className="text-[#9ba39d] font-light leading-relaxed">
                Beyond the laboratories and lecture halls, IIT ISM Dhanbad offers a rich campus life. Nestled in the heart of India's coal capital, the campus provides a unique blend of industrial proximity and academic serenity.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Row 2 - Reversed */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2 h-[600px]">
            <FadeIn className="w-full h-full" direction="left">
              <ParallaxImage src="/Tittle3.webp" alt="Academic Buildings" overlayClass="bg-black/40" />
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center md:items-end md:text-right">
            <FadeIn delay={0.3} direction="up" className="max-w-md">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#e6e8e3] leading-[1.1] md:leading-[1.1] mb-6">
                Heritage &<br/>
                <span className="text-[#9ba39d] italic block mt-2">Innovation.</span>
              </h3>
              <p className="text-[#9ba39d] font-light leading-relaxed">
                Our department bridges the gap between storied heritage and modern technological advancements. Students are immersed in an environment that honors history while demanding future-forward thinking.
              </p>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
}
