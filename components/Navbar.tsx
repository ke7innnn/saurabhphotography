'use client';

import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHindi, setShowHindi] = useState(false);
  
  const { scrollY } = useScroll();
  // Transform from 0 (original position) to a negative X value that centers it
  // This depends on the container width, but we can use a percentage or a fixed offset
  // A cleaner way is to toggle a class or state, but transform gives a smoother middle-transition
  const navX = useTransform(scrollY, [0, 600], ["0%", "-33%"]);
  // Alternative: Just animate the justify-content or margin if possible, 
  // but let's use a cleaner approach with a layout transition or a simple state-based class.
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    
    const interval = setInterval(() => {
      setShowHindi((prev) => !prev);
    }, 1500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference text-white md:px-12"
    >
      <Link href="/" className="text-xl md:text-2xl font-serif tracking-tight uppercase z-10">
        SAURABH THAKKAR
      </Link>
      
      <motion.div 
        animate={{ 
          x: isScrolled ? "-40vw" : "0vw",
          left: isScrolled ? "50%" : "auto"
        }}
        className={`hidden md:flex items-center space-x-12 transition-all duration-1000 ease-[0.76,0,0.24,1] ${isScrolled ? 'fixed left-1/2 -translate-x-1/2' : ''}`}
      >
        {/* Zig-Zag Portfolio Links */}
        <div className="flex items-center space-x-8 text-sm italic font-serif tracking-widest text-[#C4A586]">
          <Link href="/nayan" className="hover:text-white transition-colors transform -translate-y-2 relative h-6 w-16 text-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={showHindi ? "hi" : "en"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {showHindi ? 'नयन' : 'nayan'}
              </motion.span>
            </AnimatePresence>
          </Link>
          
          <Link href="/janani" className="hover:text-white transition-colors transform translate-y-3 relative h-6 w-16 text-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={showHindi ? "hi" : "en"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {showHindi ? 'जननी' : 'janani'}
              </motion.span>
            </AnimatePresence>
          </Link>
          
          <Link href="/darpan" className="hover:text-white transition-colors transform -translate-y-1 relative h-6 w-16 text-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={showHindi ? "hi" : "en"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {showHindi ? 'दर्पण' : 'darpan'}
              </motion.span>
            </AnimatePresence>
          </Link>
        </div>
        
        <div className="h-4 w-[1px] bg-white/30" /> {/* Divider */}

        <Link href="/about" className="uppercase text-sm tracking-widest hover:opacity-70 transition-opacity whitespace-nowrap">About Me</Link>
      </motion.div>

      <div className="md:invisible"> {/* Invisible spacer to keep logo left */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </motion.nav>
  );
}
