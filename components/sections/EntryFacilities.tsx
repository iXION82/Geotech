"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";

export function EntryFacilities() {
  return (
    <section className="py-24 md:py-32 w-full bg-[#f2efe9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-8 relative h-[50vh] md:h-[70vh] shadow-2xl overflow-hidden group">
            <Image
              src="/Labgate.png"
              alt="Geotechnical Engineering Laboratory Entrance"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-stone-900/10 transition-opacity duration-500 group-hover:opacity-0 mix-blend-multiply" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#f2efe9]/95 backdrop-blur-sm border-l-4 border-[#a89d89] hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg">
              <p className="text-stone-900 font-serif text-lg tracking-wide">Main Laboratory Entrance</p>
              <p className="text-stone-600 text-sm mt-1">Central Hub for Experimental Geotechnics</p>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end space-y-6 pb-6">
            <FadeIn direction="up">
              <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 leading-[1.15]">
                The gateway to discovery.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <p className="text-stone-600 font-light leading-relaxed">
                Our main facilities stand as a testament to the department's unwavering commitment to cutting-edge research and hands-on academic excellence.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-5 flex flex-col pt-12 md:pr-8">
            <FadeIn direction="up">
              <p className="text-stone-600 font-light leading-relaxed mb-8">
                With dedicated zones for soil mechanics, rock mass characterization, and geospatial analysis, our extensive infrastructure ensures comprehensive exploration.
              </p>
              <div className="w-12 h-[1px] bg-[#a89d89] mb-8" />
              <span className="text-sm font-medium tracking-widest text-[#a89d89] uppercase">
                Facility Overview
              </span>
            </FadeIn>
          </div>
          <div className="md:col-span-7 relative h-[40vh] md:h-[60vh] shadow-xl overflow-hidden group">
            <Image
              src="/LabTittle.png"
              alt="Laboratory Facilities Overview"
              fill
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
