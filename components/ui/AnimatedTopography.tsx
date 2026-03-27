"use client";

import { useEffect } from "react";
import { motion, useSpring, useTransform, useMotionTemplate } from "framer-motion";

function WavyRings({ duration = 150, className = "" }) {
  return (
    <motion.svg
      viewBox="0 0 1000 1000"
      className={`absolute ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration, ease: "linear", repeat: Infinity }}
    >
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M 500 200 C 650 180, 850 350, 800 500 C 750 650, 650 850, 500 800 C 350 750, 150 650, 200 500 C 250 350, 350 220, 500 200 Z" />
        <path d="M 500 250 C 620 230, 750 380, 730 500 C 710 620, 620 750, 500 730 C 380 710, 250 620, 270 500 C 290 380, 380 270, 500 250 Z" />
        <path d="M 500 300 C 580 290, 680 400, 650 500 C 620 600, 580 680, 500 650 C 420 620, 320 600, 330 500 C 340 400, 420 310, 500 300 Z" />
        <path d="M 500 350 C 550 340, 620 420, 600 500 C 580 580, 550 620, 500 600 C 450 580, 380 580, 380 500 C 380 420, 450 360, 500 350 Z" />
        <path d="M 500 400 C 530 390, 580 440, 560 500 C 540 560, 530 580, 500 560 C 470 540, 430 550, 430 500 C 430 450, 470 410, 500 400 Z" />
      </g>
    </motion.svg>
  );
}

export function AnimatedTopography() {
  const mouseX = useSpring(0, { stiffness: 40, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 40, damping: 20 });
  
  // Parallax inverse movement
  const xOffset = useTransform(mouseX, [0, 2000], [25, -25]);
  const yOffset = useTransform(mouseY, [0, 2000], [25, -25]);

  // Dynamic CSS Mask passing directly to GPU without React renders
  const maskImage = useMotionTemplate`radial-gradient(circle 500px at ${mouseX}px ${mouseY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.15) 100%)`;

  useEffect(() => {
    // initialize at center safely in browser
    if (typeof window !== "undefined") {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-difference text-stone-200 opacity-[0.4]"
      style={{
        maskImage,
        WebkitMaskImage: maskImage
      }}
    >
      <motion.div style={{ x: xOffset, y: yOffset }} className="absolute inset-0 w-full h-full">
        <WavyRings duration={220} className="w-[150vw] h-[150vw] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </motion.div>
  );
}
