"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function StudentChapter() {
  return (
    <section id="student-chapter" className="relative py-24 md:py-32 w-full bg-[#ecf0e9] border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
         <FadeIn delay={0.2} direction="up">
           <h3 className="text-xs md:text-sm font-medium tracking-widest text-[#6d8a67] uppercase mb-6">
              Empowering The Future
           </h3>
         </FadeIn>
         
         <FadeIn delay={0.4} direction="up">
           <h4 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">
             IGS Student Chapter
           </h4>
         </FadeIn>

         <FadeIn delay={0.6} direction="up">
           <div className="inline-block border border-[#d1dbe5] bg-white/60 px-8 py-12 rounded-sm backdrop-blur-sm w-full shadow-sm">
              <p className="text-[#6d8a67] text-xl md:text-2xl font-serif italic mb-4">
                Coming Soon...
              </p>
              <p className="text-stone-600 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
                We are in the process of launching the official IGS Student Chapter at IIT ISM Dhanbad. This platform will provide students with unparalleled networking opportunities, technical workshops, and mentorship from industry leaders. Stay tuned for registration details.
              </p>
           </div>
         </FadeIn>
      </div>
    </section>
  );
}
