'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

const quoteVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      delay: 1,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

export function SectionNotEveryone() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-white text-[#1A1A1A]">
      <div className="max-w-4xl mx-auto flex flex-col space-y-16">
        
        {/* Profile Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col space-y-4 pb-8 border-b border-gray-200"
        >
          <motion.p variants={itemVariants} className="text-gray-400 uppercase tracking-widest text-xs font-semibold">
            Profile Overview
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="text-6xl md:text-8xl font-serif tracking-tight leading-none"
          >
            Saurabh Thakkar
          </motion.h2>
        </motion.div>
        
        {/* Profile Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-sm">
            {[
              { label: 'Role', value: 'Photographer' },
              { label: 'Status', value: 'Available for Freelance' },
              { label: 'Type', value: 'Freelance' },
              { label: 'Location', value: 'Mumbai, India' }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="flex flex-col space-y-3">
                <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">
                  {item.label}
                </p>
                <p className="text-black font-medium text-lg md:text-xl">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quote Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={quoteVariants}
            className="pt-16 border-t border-gray-200"
          >
            <p className="font-serif text-3xl md:text-5xl text-black leading-[1.2] italic max-w-4xl tracking-tight">
              "Photography is the story I fail to put into words. It's about capturing the soul of a moment, freezing time so we can appreciate the raw, unfiltered beauty of life in its truest form."
            </p>
            <div className="mt-8 flex justify-end">
              <span className="w-12 h-[1px] bg-[#C4A586]"></span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
