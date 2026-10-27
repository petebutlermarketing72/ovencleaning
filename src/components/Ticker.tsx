import { useEffect, useState } from "react";

const BASE_ITEMS = [
  "Eco-Friendly Products",
  "Fully Insured",
  "Showroom Quality",
  "Easy Booking"
];

const ITEMS = [...BASE_ITEMS, ...BASE_ITEMS];

export function Ticker() {
  return (
    <div className="w-full bg-[#FFFCF2] text-primary py-3 md:py-4 overflow-hidden border-y border-primary/20">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {/* First set */}
        <div className="flex gap-6 md:gap-10 items-center px-4 md:px-6">
          {ITEMS.map((item, i) => (
            <span key={i} className="font-heading font-bold uppercase tracking-wider text-lg md:text-2xl flex items-center gap-3 md:gap-6">
               <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-primary"></span>
               {item}
            </span>
          ))}
        </div>
        {/* Second set for seamless loop */}
        <div className="flex gap-6 md:gap-10 items-center px-4 md:px-6">
          {ITEMS.map((item, i) => (
            <span key={`dup-${i}`} className="font-heading font-bold uppercase tracking-wider text-lg md:text-2xl flex items-center gap-3 md:gap-6">
               <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-primary"></span>
               {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
