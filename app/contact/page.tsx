"use client";

import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col relative w-full">
      <Navbar isLight={true} />
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-24 flex-grow flex items-center">
        <FadeIn delay={0.2} direction="up" className="w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full">
            
            {/* Left Column: Form Card */}
            <div className="w-full lg:w-3/5 bg-white rounded-xl shadow-xl p-8 md:p-12 border border-stone-100 flex-shrink-0">
              <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-8 tracking-tight">
                Drop your query
              </h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-stone-700">First Name:</label>
                    <input type="text" className="w-full border border-stone-200 rounded-md p-3 focus:outline-none focus:border-[#409ab4] focus:ring-1 focus:ring-[#409ab4] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-stone-700">Last Name:</label>
                    <input type="text" className="w-full border border-stone-200 rounded-md p-3 focus:outline-none focus:border-[#409ab4] focus:ring-1 focus:ring-[#409ab4] transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-stone-700">Email:</label>
                    <input type="email" className="w-full border border-stone-200 rounded-md p-3 focus:outline-none focus:border-[#409ab4] focus:ring-1 focus:ring-[#409ab4] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-stone-700">Mobile No.:</label>
                    <input type="tel" className="w-full border border-stone-200 rounded-md p-3 focus:outline-none focus:border-[#409ab4] focus:ring-1 focus:ring-[#409ab4] transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-stone-700">Subject:</label>
                    <input type="text" className="w-full border border-stone-200 rounded-md p-3 focus:outline-none focus:border-[#409ab4] focus:ring-1 focus:ring-[#409ab4] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-stone-700">Address:</label>
                    <input type="text" className="w-full border border-stone-200 rounded-md p-3 focus:outline-none focus:border-[#409ab4] focus:ring-1 focus:ring-[#409ab4] transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-stone-700">Message</label>
                  <textarea rows={5} className="w-full border border-stone-200 rounded-md p-3 resize-y focus:outline-none focus:border-[#409ab4] focus:ring-1 focus:ring-[#409ab4] transition-colors"></textarea>
                </div>

                <button type="submit" className="bg-[#409ab4] hover:bg-[#337a90] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 mt-4 shadow-sm">
                  Submit
                </button>
              </form>
            </div>

            {/* Right Column: Contact Information */}
            <div className="w-full lg:w-2/5 pt-8 lg:pt-32 flex flex-col gap-10 text-stone-800">
              
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-[#409ab4] flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="font-bold text-stone-900 mb-1">Postal Address:</span>
                  <span className="leading-relaxed text-stone-700">
                    206, Manisha Building, 75-76, Nehru Place<br />
                    New Delhi - 110 019
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="w-6 h-6 text-[#409ab4] flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="font-bold text-stone-900 mb-1">Email:</span>
                  <a href="mailto:admin@igs.org.in" className="text-stone-700 hover:text-[#409ab4] transition-colors">
                    admin@igs.org.in
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-[#409ab4] flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="font-bold text-stone-900 mb-1">Phone:</span>
                  <a href="tel:+9101126210361" className="text-stone-700 hover:text-[#409ab4] transition-colors">
                    +91-011-26210361
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="w-6 h-6 text-[#409ab4] flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="font-bold text-stone-900 mb-1">Office Time:</span>
                  <span className="leading-relaxed text-stone-700">
                    Monday to Friday 10.00 AM to 5.30 PM<br />
                    Saturday-Sunday & holidays - Closed
                  </span>
                </div>
              </div>

            </div>

          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}
