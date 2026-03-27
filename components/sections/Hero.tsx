"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Slow Zoom and Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{ y }}
      >
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
        >
          <Image
            src="/Tittle1.avif"
            alt="Geotechnical Engineering campus view"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Soft overlay to ensure readability */}
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-20">
        <FadeIn delay={0.2} direction="up" className="mb-6">
          <span className="text-[#eedcb1] tracking-[0.25em] uppercase text-xs md:text-sm font-medium">
            Indian Institute of Technology (ISM) Dhanbad
          </span>
        </FadeIn>
        
        <FadeIn delay={0.5} direction="up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#fdfbf7] mb-8 drop-shadow-xl max-w-5xl leading-[1.1]">
            Geotechnical Engineering
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.8} direction="up">
          <p className="text-[#e8e4df] text-lg md:text-2xl max-w-3xl mx-auto font-light drop-shadow-md leading-relaxed">
            Unearthing the foundations of tomorrow through innovative research, rigorous fieldwork, and academic excellence.
          </p>
        </FadeIn>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-[#eedcb1] to-transparent" />
      </motion.div>
    </section>
  );
}
