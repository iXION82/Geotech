"use client";

import Link from "next/link";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { FadeIn } from "@/components/ui/FadeIn";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { membersData } from "@/lib/members";

export default function MembersPage() {
  return (
    <main className="flex min-h-screen flex-col relative w-full">
      <Navbar isLight={true} />
      
      {/* Executive Committee Section */}
      <section className="relative w-full pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-[#e3eae0]">
        <div className="absolute inset-0 -z-10 bg-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn delay={0.2} direction="up" className="text-center md:text-left">
            <h1 className="text-sm font-medium tracking-widest text-[#6d8a67] uppercase mb-4">
              Leadership
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up" className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-serif text-stone-800 leading-[1.1] mb-16">
              Executive Committee<br/>
              <span className="italic text-[#96a495]">IGS Dhanbad Chapter.</span>
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {membersData.map((member, idx) => (
              <FadeIn 
                key={member.id} 
                delay={0.4 + (idx * 0.05)} 
                direction="up" 
              >
                <Link href={`/members/${member.id}`} className="block h-full cursor-pointer">
                  <div className="bg-white/80 backdrop-blur-sm p-8 border border-stone-200 shadow-sm rounded-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 group h-full flex flex-col">
                    
                    <ProfileImage
                       src={member.imagePath}
                       alt={member.name}
                       wrapperClassName="relative w-24 h-24 rounded-full border border-[#d1dbe5] mb-6 overflow-hidden flex-shrink-0"
                       className="object-cover"
                    />
                    
                    <h3 className="text-xl font-serif font-bold text-stone-800 mb-2 leading-tight group-hover:text-stone-600 transition-colors uppercase">{member.name}</h3>
                    <p className="text-sm font-bold tracking-wide uppercase text-[#6d8a67] mb-3">{member.role}</p>
                    
                    <div className="mt-auto pt-4 border-t border-stone-100 flex flex-col gap-1">
                      {member.designation && <p className="text-xs text-stone-500 font-medium uppercase">{member.designation}</p>}
                      {member.organization && <p className="text-xs text-stone-400">{member.organization}</p>}
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-stone-400 group-hover:text-stone-800 transition-colors">
                      View Profile <span aria-hidden="true">&rarr;</span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="relative py-24 md:py-32 w-full bg-stone-900 border-t-4 border-[#6d8a67]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
           <FadeIn delay={0.2} direction="up">
             <h3 className="text-xs md:text-sm font-medium tracking-widest text-[#96a495] uppercase mb-6">
                Join The Chapter
             </h3>
           </FadeIn>
           
           <FadeIn delay={0.4} direction="up">
             <h4 className="text-4xl md:text-6xl font-serif text-[#fdfbf7] mb-8 leading-tight">
               Membership Information
             </h4>
           </FadeIn>

           <FadeIn delay={0.6} direction="up">
             <div className="inline-block border border-stone-700 bg-stone-800/50 px-8 py-12 rounded-sm backdrop-blur-sm w-full">
                <p className="text-[#e8e4df] text-xl md:text-2xl font-light italic mb-4">
                  Coming Soon...
                </p>
                <p className="text-stone-400 text-sm md:text-base max-w-lg mx-auto">
                  We are currently integrating the membership portal. Soon you will be able to join the IGS Dhanbad Chapter directly from this page to unlock exclusive technical resources, network with peers, and attend specialized events.
                </p>
             </div>
           </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
