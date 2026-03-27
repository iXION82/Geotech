"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";
import { useRef } from "react";

export function EntryFacilities() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative py-24 md:py-32 w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#ebe9e4]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-8 relative h-[50vh] md:h-[70vh] shadow-2xl overflow-hidden group">
            <motion.div className="absolute inset-0 w-full h-[130%] -top-[15%]" style={{ y: y1 }}>
              <Image
                src="/Labgate.png"
                alt="Geotechnical Engineering Laboratory Entrance"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
            <div className="absolute inset-0 bg-[#383632]/10 transition-opacity duration-500 group-hover:opacity-0 mix-blend-multiply" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#ebe9e4]/95 backdrop-blur-sm border-l-4 border-[#8c887f] hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg">
              <p className="text-[#383632] font-serif text-lg tracking-wide">Main Laboratory Entrance</p>
              <p className="text-[#5c5a53] text-sm mt-1">Central Hub for Experimental Geotechnics</p>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end space-y-6 pb-6">
            <FadeIn delay={0.3}>
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-800 leading-[1.1] md:leading-[1.1] mb-6">
                Industry-Leading<br/>
                <span className="text-[#8c8577] italic block mt-2">Equipment.</span>
              </h3>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <p className="text-[#5c5a53] font-light leading-relaxed">
                Our main facilities stand as a testament to the department's unwavering commitment to cutting-edge research and hands-on academic excellence.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-5 flex flex-col pt-12 md:pr-8">
            <FadeIn direction="up">
              <p className="text-[#5c5a53] font-light leading-relaxed mb-8">
                With dedicated zones for soil mechanics, rock mass characterization, and geospatial analysis, our extensive infrastructure ensures comprehensive exploration.
              </p>
              <div className="w-12 h-[1px] bg-[#8c887f] mb-8" />
              <span className="text-sm font-medium tracking-widest text-[#8c887f] uppercase">
                Facility Overview
              </span>
            </FadeIn>
          </div>
          <div className="md:col-span-7 relative h-[40vh] md:h-[60vh] shadow-xl overflow-hidden group">
            <motion.div className="absolute inset-0 w-full h-[140%] -top-[20%]" style={{ y: y2 }}>
              <Image
                src="/LabTittle.png"
                alt="Laboratory Facilities Overview"
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
            <div className="absolute inset-0 bg-[#383632]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
