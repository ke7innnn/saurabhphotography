'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function DarpanPage() {
  return (
    <main className="w-full min-h-screen bg-[#FAF8F5] text-[#1A1A1A]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 md:pt-56 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[8rem] font-serif tracking-tighter text-center uppercase leading-none"
        >
          Why Wallpapers?
        </motion.h1>
      </section>

      {/* Essay Section */}
      <section className="py-8 md:py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="prose prose-lg md:prose-xl text-gray-700 leading-relaxed font-serif text-justify mx-auto"
        >
          <p className="first-letter:text-7xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-[#C4A586]">
            I got my first mobile phone after finishing 10th grade and as a kid, I was obsessed with downloading new wallpapers every day. It was my way of personalising my tiny screen, making it feel like my own little world. That love for visuals has now come full circle. I now create wallpapers from my photography, turning moments into screens and views you can carry with you.
          </p>
        </motion.div>
      </section>

      {/* Wallpapers Showcase */}
      <section className="py-24 md:py-40 flex flex-col items-center gap-32 md:gap-48 w-full">
        
        {/* Mobile Wallpapers */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[90rem] px-6 md:px-12 flex flex-col items-center"
        >
          <h2 className="text-sm uppercase tracking-widest text-[#C4A586] mb-8 font-medium self-start md:self-center md:mr-[40%]">Mobile</h2>
          <div className="w-full md:w-3/5 overflow-hidden bg-white shadow-2xl relative border border-transparent group">
            <img 
              src="/darpan page/mobilewallpapers.png" 
              alt="Darpan - Mobile Wallpapers" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
            />
          </div>
        </motion.div>
        
        {/* Desktop Wallpapers */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[90rem] px-6 md:px-12 flex flex-col items-center"
        >
          <div className="flex flex-col mb-8 self-end md:self-center md:ml-[40%] text-right md:text-left">
            <h2 className="text-sm uppercase tracking-widest text-[#C4A586] font-medium">Desktop</h2>
            <p className="text-gray-500 italic font-serif mt-2">because wallpapers are not just for tiny screens</p>
          </div>
          <div className="w-full md:w-4/5 overflow-hidden bg-white shadow-2xl relative border border-transparent group">
            <img 
              src="/darpan page/desktopwallpaper.png" 
              alt="Darpan - Desktop Wallpapers" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
            />
          </div>

          <div className="w-full mt-24 text-center md:text-left md:w-3/4 mx-auto pb-12">
            <p className="text-xl md:text-2xl font-serif text-gray-700 leading-relaxed italic">
              "This collection is a living gallery—an ever-expanding visual diary where the fleeting moments I capture in the world find new life, breathing atmosphere and inspiration into the intimate spaces of your daily screens."
            </p>
          </div>
        </motion.div>

      </section>

      <Footer />
    </main>
  );
}
