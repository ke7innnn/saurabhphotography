'use client';

import { motion } from 'framer-motion';

export function SectionAbout() {
  return (
    <section className="py-24 md:py-32 bg-white text-[#1A1A1A] px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        <div className="w-full md:w-1/2 flex flex-col space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif tracking-tight"
          >
            I'm Kasia Siwosz, and I work with leaders
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-700"
          >
            I coach from experience:
          </motion.p>
          
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 text-xl font-medium"
          >
            {[
              "WTA Pro Athlete",
              "UC Berkeley Graduate",
              "Investment Banker",
              "Entrepreneur",
              "Venture Capitalist",
              "Wife, Mother, Immigrant, Builder"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-4">
                <span className="w-2 h-2 bg-[#C4A586] rounded-full" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <a href="/about" className="inline-block border border-black text-black px-8 py-4 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-300">
              Start Your Next Chapter
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 relative h-[70vh]"
        >
          <img 
            src="https://cdn.prod.website-files.com/68c90b52cc1141764275aabb/68cac22ac7ac04fde9bee3ed_IMAGE%202025-07-24%2009_24_48%201.webp" 
            alt="Kasia Siwosz"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>

      </div>
    </section>
  );
}
