"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

export function ProfileImage({ src, alt, className = "", wrapperClassName = "" }: ProfileImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-[#ecf0e9] ${wrapperClassName}`}>
         <svg className="w-1/2 h-1/2 text-[#96a495]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
         </svg>
      </div>
    );
  }

  return (
    <div className={`relative ${wrapperClassName}`}>
      <Image 
        src={src} 
        alt={alt}
        fill
        className={className}
        onError={() => setError(true)}
      />
      {/* Default Silhouette (shown briefly before load/error) */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 bg-[#ecf0e9]">
        <svg className="w-1/2 h-1/2 text-[#96a495]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
        </svg>
      </div>
    </div>
  );
}
