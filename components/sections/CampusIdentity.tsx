"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const campusItems = [
  {
    id: 1,
    title: "A Vibrant",
    subtitle: "Community.",
    color: "#9ba39d",
    image: "/Tittle2.webp",
    text: "Beyond the laboratories and lecture halls, IIT ISM Dhanbad offers a rich, storied campus culture. Nestled in the heart of India's coal capital, our department fundamentally bridges historic heritage with robust technological innovation."
  },
  {
    id: 2,
    title: "Heritage &",
    subtitle: "Innovation.",
    color: "#cbb1a3",
    image: "/Tittle3.webp",
    text: "Our department spans the gap between a storied mining heritage and modern technological advancements. Students are immersed in an environment that honors history while demanding future-forward thinking."
  }
];

export function CampusIdentity() {
  const [activeItem, setActiveItem] = useState(campusItems[0].id);

  return (
    <section className="relative py-24 md:py-32 w-full bg-[#1c211e] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#1c211e]" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <FadeIn delay={0.1}>
            <h2 className="text-xs md:text-sm font-medium tracking-widest text-[#9ba39d] uppercase mb-4">
              Campus Identity
            </h2>
          </FadeIn>
        </div>

        {/* Expanding Accordion Gallery */}
        {/* Uses flex-col for mobile (stacked vertical) and flex-row for desktop (side-by-side slices) */}
        <div className="flex flex-col md:flex-row w-full h-[800px] md:h-[650px] lg:h-[750px] gap-4 md:gap-6">
          {campusItems.map((item) => {
             const isActive = activeItem === item.id;
             
             return (
               <motion.div
                 key={item.id}
                 className="relative overflow-hidden rounded-xl md:rounded-3xl cursor-pointer group"
                 initial={false}
                 // Animating the flex-grow property perfectly handles expanding width on desktop AND expanding height on mobile!
                 animate={{ 
                   flex: isActive ? 2.5 : 1,
                 }}
                 transition={{ type: "spring", stiffness: 220, damping: 25 }}
                 onMouseEnter={() => setActiveItem(item.id)}
                 onClick={() => setActiveItem(item.id)}
               >
                 {/* Background Image that smoothly zooms out slightly when active */}
                 <motion.div 
                   className="absolute inset-0 w-full h-full"
                   animate={{ scale: isActive ? 1 : 1.15 }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                 >
                   <Image 
                     src={item.image} 
                     alt={item.title} 
                     fill 
                     className={`object-cover transition-all duration-1000 ${isActive ? 'grayscale-0' : 'grayscale'}`}
                   />
                 </motion.div>
                 
                 {/* Dark cinematic gradient mask overlay to ensure perfect text readability */}
                 <div className={`absolute inset-0 transition-opacity duration-700 bg-gradient-to-t from-[#181d1a]/100 via-[#1c211e]/40 to-transparent ${isActive ? 'opacity-80' : 'opacity-60'}`} />

                 {/* Content Layout */}
                 <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
                   
                   {/* The bold, beautiful typography */}
                   <motion.div layout="position" className="mb-4 md:mb-6">
                     <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#e6e8e3] leading-[1.1] md:leading-[1.1] whitespace-nowrap">
                        {item.title}<br/>
                        <span className="italic block mt-1 md:mt-2" style={{ color: item.color }}>
                          {item.subtitle}
                        </span>
                     </h3>
                   </motion.div>
                   
                   {/* The body text and button exclusively expand into view when active */}
                   <motion.div 
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ 
                        opacity: isActive ? 1 : 0, 
                        height: isActive ? "auto" : 0 
                     }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     className="overflow-hidden"
                   >
                     {/* Added a subtle fixed width to the paragraph inside the mask so it doesn't wrap wildly during layout transitions */}
                     <div className="w-[85vw] md:w-[500px]">
                       <p className="text-[#9ba39d] text-sm md:text-lg font-light leading-relaxed mb-6 md:mb-8">
                         {item.text}
                       </p>
                       <button className="pb-1 border-b text-xs md:text-sm font-bold tracking-widest uppercase transition-colors duration-300" style={{ color: item.color, borderColor: item.color }}>
                         Explore More
                       </button>
                     </div>
                   </motion.div>

                 </div>
               </motion.div>
             );
          })}
        </div>
      </div>
    </section>
  );
}
