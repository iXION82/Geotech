"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { eventsData } from "@/lib/events";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventsPage() {
  const upcomingEvents = eventsData.filter(e => e.type === "upcoming");
  const pastEvents = eventsData.filter(e => e.type === "past");

  return (
    <main className="flex min-h-screen flex-col relative w-full">
      <Navbar isLight={true} />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-[#e3eae0]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left">
          <FadeIn delay={0.2} direction="up">
             <h1 className="text-sm font-medium tracking-widest text-[#6d8a67] uppercase mb-4">
                Engage & Learn
             </h1>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up">
             <h2 className="text-5xl md:text-7xl font-serif text-stone-800 leading-[1.1] mb-6">
                Departmental <span className="italic text-[#96a495]">Events.</span>
             </h2>
             <p className="text-stone-600 font-light max-w-2xl text-lg md:text-xl leading-relaxed mx-auto md:mx-0">
                Discover symposiums, technical workshops, and field visits hosted by the IGS Dhanbad Local Chapter. Bridging the gap between academia and industry.
             </p>
          </FadeIn>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="relative w-full py-24 md:py-32 bg-stone-900 border-b-4 border-[#6d8a67]">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <FadeIn delay={0.2}>
              <h3 className="text-xs md:text-sm font-medium tracking-widest text-[#96a495] uppercase mb-16 border-b border-stone-800 pb-4 inline-block">
                Upcoming Events
              </h3>
            </FadeIn>

            <div className="flex flex-col gap-16">
               {upcomingEvents.length > 0 ? upcomingEvents.map((event, idx) => (
                 <FadeIn key={event.id} delay={0.3 + (idx * 0.1)} direction="up">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 border border-stone-800 bg-stone-800/30 p-6 md:p-10 rounded-sm">
                       {/* Event Image Banner */}
                       <div className="lg:w-1/2 relative h-64 md:h-80 lg:h-auto rounded-sm overflow-hidden flex-shrink-0">
                          <Image
                             src={event.imagePath}
                             alt={event.title}
                             fill
                             className="object-cover opacity-80"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
                       </div>

                       {/* Event Details */}
                       <div className="lg:w-1/2 flex flex-col justify-center">
                          <h4 className="text-3xl md:text-4xl font-serif text-[#fdfbf7] mb-6 leading-tight">
                            {event.title}
                          </h4>
                          
                          <div className="flex flex-col gap-3 mb-8">
                            <div className="flex items-center gap-3 text-[#e8e4df]">
                              <Calendar className="w-5 h-5 text-[#96a495]" />
                              <span className="font-medium">{event.date}</span>
                            </div>
                            {event.time && (
                              <div className="flex items-center gap-3 text-[#e8e4df]">
                                <Clock className="w-5 h-5 text-[#96a495]" />
                                <span>{event.time}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-3 text-[#e8e4df]">
                              <MapPin className="w-5 h-5 text-[#96a495]" />
                              <span>{event.location}</span>
                            </div>
                          </div>

                          <p className="text-stone-400 font-light leading-relaxed mb-10">
                            {event.description}
                          </p>

                          <div className="mt-auto">
                            <button disabled className="inline-flex items-center gap-3 bg-[#6d8a67] text-[#fdfbf7] px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-[#5b7556] transition-all duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed">
                              Registration Opening Soon
                            </button>
                          </div>
                       </div>
                    </div>
                 </FadeIn>
               )) : (
                 <p className="text-stone-400 italic">No upcoming events are scheduled at the moment. Please check back later.</p>
               )}
            </div>
         </div>
      </section>

      {/* Past Events Section */}
      <section className="relative w-full py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <FadeIn>
               <h3 className="text-3xl md:text-5xl font-serif text-stone-800 mb-16 text-center md:text-left">
                  Past Chronicles
               </h3>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {pastEvents.map((event, idx) => (
                  <FadeIn key={event.id} delay={0.2 + (idx * 0.1)} direction="up" className="h-full">
                     <div className="group border border-stone-200 bg-white/50 backdrop-blur-sm p-6 hover:-translate-y-1 hover:shadow-lg hover:border-[#6d8a67] transition-all duration-300 rounded-sm h-full flex flex-col">
                        <div className="relative w-full h-48 mb-6 overflow-hidden rounded-sm">
                           <Image 
                             src={event.imagePath} 
                             alt={event.title}
                             fill
                             className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                           />
                           <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply" />
                        </div>
                        
                        <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#96a495] mb-3">
                           <Calendar className="w-4 h-4" />
                           {event.date}
                        </div>
                        
                        <h4 className="text-xl font-serif text-stone-800 mb-4 group-hover:text-stone-600 transition-colors uppercase leading-snug">
                           {event.title}
                        </h4>
                        
                        <p className="text-sm font-light text-stone-600 leading-relaxed mb-6 flex-grow">
                           {event.description}
                        </p>
                        
                        <div className="mt-auto pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-medium text-stone-500 uppercase">
                           <MapPin className="w-4 h-4 text-[#6d8a67]" />
                           <span className="truncate">{event.location}</span>
                        </div>
                     </div>
                  </FadeIn>
               ))}
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
