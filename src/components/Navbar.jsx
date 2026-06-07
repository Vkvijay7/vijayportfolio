import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = ['Home', 'About', 'Projects', 'Services'];
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isCollapsedRef = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollY.current;
      
      if (currentScrollY > 60) {
        if (Math.abs(scrollDiff) > 15) {
          const nextState = scrollDiff > 0;
          if (isCollapsedRef.current !== nextState) {
            isCollapsedRef.current = nextState;
            setIsCollapsed(nextState);
          }
        }
      } else {
        if (isCollapsedRef.current !== false) {
          isCollapsedRef.current = false;
          setIsCollapsed(false);
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      
      {/* 1. EXPANDED FULL NAVBAR CAPSULE */}
      <motion.div
        animate={{
          y: isCollapsed ? -100 : 0,
          opacity: isCollapsed ? 0 : 1,
          scale: isCollapsed ? 0.9 : 1,
        }}
        transition={{ type: 'spring', stiffness: 240, damping: 25 }}
        className="flex items-center bg-black/95 backdrop-blur-md pl-3 pr-3 py-2.5 h-16 gap-7 md:gap-9 border border-white/10 rounded-full shadow-2xl pointer-events-auto absolute"
        style={{ originY: 0 }}
      >
        {/* Profile Avatar */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-11 h-11 rounded-full overflow-hidden border border-white/20 cursor-pointer flex-shrink-0"
        >
          <img 
            src="/profile.jpg" 
            alt="Vijay Karthick" 
            className="w-full h-full object-cover object-top scale-110"
          />
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-4 md:gap-5 text-[15px] md:text-base font-medium whitespace-nowrap">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative inline-block overflow-hidden h-7 leading-7 group cursor-pointer px-2 transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <span className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-7">
                <span className="text-[#F8F9FA] h-7 flex items-center">
                  {item}
                </span>
                <span className="text-[#ffde00] h-7 flex items-center">
                  {item}
                </span>
              </span>
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <a href="#contact" className="pointer-events-auto flex">
          <motion.button
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.03 }
            }}
            className="relative overflow-hidden bg-white text-black text-[15px] md:text-base font-medium px-6 py-2.5 rounded-full cursor-pointer flex-shrink-0 shadow-lg whitespace-nowrap"
          >
            <motion.div
              variants={{
                initial: { x: '-100%' },
                hover: { x: '0%' }
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute inset-0 bg-[#ffde00]"
            />
            <span className="relative z-10">Contact</span>
          </motion.button>
        </a>
      </motion.div>

      {/* 2. COLLAPSED "AVAILABLE FOR WORK" CAPSULE */}
      <motion.div
        animate={{
          y: isCollapsed ? 0 : -100,
          opacity: isCollapsed ? 1 : 0,
          scale: isCollapsed ? 1 : 0.9,
        }}
        transition={{ type: 'spring', stiffness: 240, damping: 25 }}
        className="flex items-center bg-black/95 backdrop-blur-md px-3.5 py-2 h-12 gap-3.5 border border-white/10 rounded-full shadow-2xl pointer-events-auto absolute"
        style={{ originY: 0 }}
      >
        {/* Profile Avatar */}
        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
          <img 
            src="/profile.jpg" 
            alt="Vijay Karthick" 
            className="w-full h-full object-cover object-top scale-110"
          />
        </div>
        
        {/* Available for work text and yellow dot */}
        <div className="flex items-center gap-2 pr-1 font-sans text-xs md:text-sm font-medium text-[#F8F9FA] whitespace-nowrap">
          <span>Available for work</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffde00] shadow-[0_0_8px_#ffde00] animate-pulse" />
        </div>
      </motion.div>

    </div>
  );
}
