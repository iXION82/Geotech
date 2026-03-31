"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StudentChapter } from "@/components/sections/StudentChapter";

export default function StudentChapterPage() {
  return (
    <main className="flex min-h-screen flex-col relative w-full">
      <Navbar isLight={true} />
      
      <div className="flex-grow flex flex-col justify-center pt-24">
        <StudentChapter />
      </div>

      <Footer />
    </main>
  );
}
