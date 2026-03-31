import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative text-stone-300 tracking-wide">
      <div className="absolute inset-0 -z-10 bg-stone-900 border-t-8 border-[#d8c29d]" />
      <div className="relative z-10 pt-8 pb-4 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
        <div className="flex flex-col space-y-3 lg:col-span-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative w-8 h-8">
              <Image 
                src="/igs-logo.png"
                alt="IGS Dhanbad Chapter Logo"
                fill
                className="object-contain filter brightness-0 invert"
              />
            </div>
            <span className="font-serif text-lg tracking-wide text-white font-bold uppercase">IGS Dhanbad Chapter</span>
          </div>
          <div className="text-stone-400 max-w-sm font-light leading-relaxed text-sm">
            <strong className="font-serif text-white text-base font-normal mb-2 inline-block">Geotechnical Engineering Department</strong>
            <div className="flex items-start gap-2 mt-1">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#d8c29d]" />
              <span>Indian Institute of Technology (ISM), Dhanbad<br />Jharkhand, India - 826004</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-serif text-base mb-4 tracking-wide relative inline-block">
            Explore
            <span className="absolute -bottom-1 left-0 w-6 h-[1px] bg-[#d8c29d]"></span>
          </h4>
          <ul className="space-y-2 text-stone-400 font-light mt-2 text-sm">
            <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Academic Programs</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Research Areas</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Faculty Directory</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Facilities & Labs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-base mb-4 tracking-wide relative inline-block">
            Connect
            <span className="absolute -bottom-1 left-0 w-6 h-[1px] bg-[#d8c29d]"></span>
          </h4>
          <ul className="space-y-2 text-stone-400 font-light mt-2 text-sm">
            <li><a href="/contact" className="hover:text-white hover:translate-x-1 block transition-all">Contact Us</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Alumni Network</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">News & Events</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all flex items-center gap-1"><Mail className="w-3 h-3"/> geotech@iitism.ac.in</a></li>
          </ul>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mt-6 py-4 border-t border-stone-800/50 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 font-light">
        <p>&copy; {new Date().getFullYear()} IGS Dhanbad Chapter. All rights reserved.</p>
        <div className="mt-2 md:mt-0 text-center md:text-right flex flex-col gap-1">
          <p className="text-stone-400">Designing the Earth's Future</p>
          <p className="opacity-75">
            Designed and developed by <a href="mailto:trivalent102103@gmail.com" className="hover:text-white transition-colors border-b border-transparent hover:border-white">Trivalent</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
