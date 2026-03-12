'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function JananiPage() {
  return (
    <main className="w-full min-h-screen bg-[#FAF8F5] text-[#1A1A1A]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl overflow-hidden bg-white shadow-2xl relative border border-transparent"
        >
          <img 
            src="/janani page/main.png" 
            alt="Janani - Main" 
            className="w-full h-auto object-cover scale-[1.02] translate-x-[-0.5%] origin-right"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-serif tracking-tighter text-center mt-16 uppercase"
        >
          Journey Into Maternity
        </motion.h1>
      </section>

      {/* Essay Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="prose prose-lg md:prose-xl text-gray-700 leading-relaxed font-serif text-justify mx-auto"
        >
          <p className="first-letter:text-7xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-[#C4A586]">
            Maternity photography entered my life through a simple yes. A dear friend reached out with the news of his sister’s pregnancy and asked if I’d be up for capturing memories for them. I said yes wholeheartedly, not fully sure if I’d enjoy the subject. What was meant to be a fun unpaid afternoon became a full day shoot, and the images that followed felt honest and beautiful. 
          </p>
          <p className="mt-6">
            Later, the parents-to-be printed the photographs and displayed them at their baby shower. A couple attending the shower, expecting a baby themselves, loved the photos and reached out. I photographed their maternity story too, then a third, then a fourth. 
          </p>
          <p className="mt-6">
            Through these projects, I learnt that maternity photography requires calm energy, soft guided posing and comfortable direction. Most of all, I realised why it felt so natural to me. At its core, it’s an emotional chapter and that’s what I love documenting.
          </p>
        </motion.div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-16 md:py-32 flex flex-col items-center gap-16 md:gap-32 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[90rem] px-6 md:px-12 flex justify-start"
        >
          <div className="w-full md:w-4/5 overflow-hidden bg-white shadow-2xl relative border border-transparent">
            <img 
              src="/janani page/img1.png" 
              alt="Janani - Ishita & Sid" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-[1.5s]"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[90rem] px-6 md:px-12 flex justify-end"
        >
          <div className="w-full md:w-4/5 overflow-hidden bg-white shadow-2xl relative border border-transparent">
            <img 
              src="/janani page/img2.png" 
              alt="Janani - Neha & Deep" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-[1.5s]"
            />
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
