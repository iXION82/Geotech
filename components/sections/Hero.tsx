"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Slow Zoom */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
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
        <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-stone-900/40" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-20">
        <FadeIn delay={0.2} direction="up" className="mb-6">
          <span className="text-stone-100 tracking-[0.25em] uppercase text-xs md:text-sm font-medium">
            Indian Institute of Technology (ISM) Dhanbad
          </span>
        </FadeIn>
        
        <FadeIn delay={0.5} direction="up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 drop-shadow-xl max-w-5xl leading-[1.1]">
            Geotechnical Engineering
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.8} direction="up">
          <p className="text-stone-50 text-lg md:text-2xl max-w-3xl mx-auto font-light drop-shadow-md leading-relaxed">
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
        <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
