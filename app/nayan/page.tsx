'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function NayanPage() {
  return (
    <main className="w-full min-h-screen bg-[#FAF8F5] text-[#1A1A1A]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl overflow-hidden bg-white shadow-2xl relative"
        >
          <img 
            src="/nayan page/main.png" 
            alt="Nayan - Main Portrait" 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="max-w-4xl w-full mt-16 md:mt-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-7xl font-serif tracking-tight uppercase"
          >
            What your portraits stand for
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-3xl font-serif italic text-gray-500 mt-6"
          >
            Your story, emotions, feelings, inner expression and state of mind
          </motion.p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-32 px-6 md:px-12 bg-white border-y border-black/5">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-[#C4A586] mb-12 font-medium"
          >
            My Process
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-xl font-serif text-gray-800 leading-relaxed space-y-8"
          >
            <p>
              I like an authentic approach to capturing real human emotions and presence.
            </p>
            <p>
              We generally get there by conversation and getting to know a little bit about each other with the camera doing it’s thing.
            </p>
            <p className="italic text-gray-500">
              "Straightforward but polite communication with a little bit of poetic excess."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights / Values */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 border border-black/5 flex flex-col justify-center items-center text-center bg-[#FAF8F5]"
        >
          <h3 className="text-2xl md:text-3xl font-serif mb-4 uppercase tracking-tighter">Committed to real human presence</h3>
          <div className="w-12 h-[1px] bg-[#C4A586]" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-12 border border-black/5 flex flex-col justify-center items-center text-center bg-white"
        >
          <h3 className="text-2xl md:text-3xl font-serif mb-4 uppercase tracking-tighter">Capturing genuine emotional moments</h3>
          <div className="w-12 h-[1px] bg-[#C4A586]" />
        </motion.div>
      </section>

      {/* Featured Detail Image */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
           className="w-full overflow-hidden shadow-2xl"
        >
          <img 
            src="/nayan page/detail1.png" 
            alt="Nayan detail" 
            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-[2s]"
          />
        </motion.div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 px-6 md:px-12 bg-black text-white text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-tight">Let me tell your story through portraits</h2>
          <p className="text-xl md:text-2xl font-serif italic text-gray-400">
            A story that you carry on your sleeve or one which you've been hiding all along.
          </p>
          <div className="pt-12">
            <a href="mailto:photostriniti@gmail.com" className="inline-block border border-white px-12 py-5 uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all duration-500">
              Request a session
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
