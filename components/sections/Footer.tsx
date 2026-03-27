import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 md:py-24 border-t-8 border-[#d8c29d]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <div className="flex flex-col space-y-6 lg:col-span-2">
          <div className="relative w-64 h-20">
            <Image 
              src="https://ir.iitism.ac.in/assets/images/essentials/footer-logo.png"
              alt="IIT ISM Dhanbad Logo"
              fill
              className="object-contain object-left filter brightness-0 invert"
            />
          </div>
          <p className="text-stone-400 max-w-sm font-light leading-relaxed">
            <strong className="font-serif text-white text-lg font-normal mb-2 inline-block">Geotechnical Engineering Department</strong><br />
            Indian Institute of Technology (Indian School of Mines), Dhanbad<br />
            Jharkhand, India - 826004
          </p>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6 tracking-wide relative inline-block">
            Explore
            <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-[#d8c29d]"></span>
          </h4>
          <ul className="space-y-4 text-stone-400 font-light mt-4">
            <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Academic Programs</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Research Areas</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Faculty Directory</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Facilities & Labs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6 tracking-wide relative inline-block">
            Connect
            <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-[#d8c29d]"></span>
          </h4>
          <ul className="space-y-4 text-stone-400 font-light mt-4">
            <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Contact Us</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Alumni Network</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">News & Events</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24 pt-8 border-t border-stone-800/50 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500 font-light">
        <p>&copy; {new Date().getFullYear()} IIT ISM Dhanbad. All rights reserved.</p>
        <p className="mt-4 md:mt-0 font-medium tracking-wide">Designing the Earth's Future</p>
      </div>
    </footer>
  );
}
