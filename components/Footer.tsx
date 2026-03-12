'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif tracking-tight mb-8"
            >
              Your Move
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a href="mailto:photostriniti@gmail.com" className="inline-block border border-white text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-300">
                Begin the Conversation
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm uppercase tracking-widest text-gray-400">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="hover:text-white transition-colors cursor-default">About Me</span>
              <span className="hover:text-white transition-colors cursor-default">Testimonials</span>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="hover:text-white transition-colors cursor-default">Press / Media</span>
              <span className="hover:text-white transition-colors cursor-default">Blog</span>
              <span className="hover:text-white transition-colors cursor-default">Contact</span>
            </div>
            <div className="col-span-2 flex flex-col space-y-4 pt-8">
              <a href="https://www.linkedin.com/in/saurabh-thakkar-586163191" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/trinitieye/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.behance.net/saurabhthakkar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Behance</a>
              <a href="https://linktr.ee/saurabhthakkar?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnswMzPPE8GnZboni5RJ5zoBqtgXWMG2_6oCpypSqSRVkAc6EfQunuHzdONEE_aem_ZiUH3UGIRHhEF76pWhB0pg" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Linktree</a>
              <a href="mailto:photostriniti@gmail.com" className="hover:text-white transition-colors pt-4 lowercase text-lg">photostriniti@gmail.com</a>
              <a href="tel:+919920935371" className="hover:text-white transition-colors text-lg">+(91) 9920935371</a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 text-xs text-gray-500 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Saurabh Thakkar</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white transition-colors cursor-default">Terms, Privacy & Cookies</span>
            <span className="hover:text-white transition-colors cursor-default">Mumbai, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
