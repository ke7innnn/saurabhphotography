'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#E8E3DF]">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img 
          src="/hero/Sau.JPG.jpeg" 
          alt="Kasia Siwosz Hero"
          className="w-full h-full object-cover object-bottom opacity-90"
        />
      </motion.div>

      {/* Overlay - Optional, can keep for ambient darkening or remove if not needed */}
      <div className="absolute inset-0 bg-black/5" />

    </section>
  );
}
