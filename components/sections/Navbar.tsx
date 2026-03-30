"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#f2efe9]/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-opacity">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-stone-200 shadow-sm bg-white">
            <Image
              src="/igs-logo.png"
              alt="IGS Dhanbad Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className={`flex flex-col ${scrolled ? "text-stone-800" : "text-[#fdfbf7]"}`}>
            <span className="font-serif font-bold text-lg md:text-xl leading-none">IGS</span>
            <span className="text-[10px] md:text-xs tracking-widest uppercase opacity-80 mt-1">Dhanbad Chapter</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {["About", "Objectives", "Committee", "Events", "Membership"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className={`text-sm tracking-wide font-medium transition-colors hover:opacity-100 ${
                scrolled ? "text-stone-600 hover:text-stone-900" : "text-[#e8e4df] hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
          <Link 
            href="/igs" 
            className={`text-sm tracking-wide font-medium transition-colors hover:opacity-100 border px-3 py-1 rounded-sm ${
              scrolled ? "text-stone-800 border-stone-800 hover:bg-stone-800 hover:text-[#f2efe9]" : "text-[#e8e4df] border-[#e8e4df] hover:bg-[#e8e4df] hover:text-stone-900"
            }`}
          >
            About IGS (National)
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
