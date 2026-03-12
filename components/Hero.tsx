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

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end items-end p-8 md:p-24 bg-gradient-to-l from-black/60 via-transparent to-transparent">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md md:max-w-xl text-right flex flex-col items-end"
        >
          <h1 className="text-white text-3xl md:text-5xl font-serif leading-tight tracking-tight mb-6">
            Hi, I’m <span className="italic">Saurabh Thakkar</span>, a passionate photographer who captures moments that tell real stories.
          </h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="w-24 h-[1px] bg-[#C4A586] origin-right mb-6" 
          />
          <p className="text-white/80 text-lg md:text-xl font-serif italic tracking-wide leading-relaxed">
            Through my lens, I focus on emotions, light, and the beauty of everyday life.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
