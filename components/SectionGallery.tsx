'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  "/gallery/img-1.jpeg",
  "/gallery/img-2.jpg",
  "/gallery/img-3.jpg",
  "/gallery/img-4.jpg",
  "/gallery/img-5.jpg",
  "/gallery/img-6.jpg",
  "/gallery/img-7.jpg",
];

// Combine the array with itself to create a seamless loop
const galleryLoop = [...images, ...images];

export function SectionGallery() {
  return (
    <section className="py-24 md:py-32 w-full bg-[#FAF8F5] text-[#1A1A1A] overflow-hidden flex flex-col items-center border-t border-black/10">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-7xl md:text-[9rem] font-bold tracking-tighter mb-20 text-center uppercase leading-none"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        GALLERY
      </motion.h2>
      
      <div className="relative w-full py-20 overflow-hidden flex items-center">
        {/* The scrolling track */}
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35, // Smooth loop speed
          }}
          className="flex whitespace-nowrap gap-16 md:gap-32 w-max items-center pr-16 md:pr-32 will-change-transform"
        >
          {galleryLoop.map((src, idx) => {
            const heights = [
              "h-[45vh]", 
              "h-[70vh]", 
              "h-[50vh]", 
              "h-[80vh]", 
              "h-[60vh]", 
              "h-[75vh]", 
              "h-[55vh]"
            ];
            const height = heights[idx % 7];
            
            const transforms = [
              "translate-y-0", 
              "translate-y-16", 
              "-translate-y-12", 
              "translate-y-24", 
              "-translate-y-20", 
              "translate-y-10", 
              "-translate-y-8"
            ];
            const transform = transforms[idx % 7];

            return (
              <div 
                key={idx} 
                className={`relative flex-shrink-0 ${height} aspect-[4/5] transform ${transform} group perspective-1000`}
              >
                <Image 
                  src={src} 
                  alt={`Gallery ${idx}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain filter grayscale-0 group-hover:grayscale transition-all duration-[800ms] shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:-translate-y-2 pointer-events-none"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
