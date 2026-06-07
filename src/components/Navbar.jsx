import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const navItems = ['Home', 'About', 'Projects', 'Services'];
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isCollapsedRef = useRef(false);
  const isMobileMenuOpenRef = useRef(false);
  const lastScrollY = useRef(0);

  // Keep ref in sync
  useEffect(() => {
    isMobileMenuOpenRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // Do not collapse navbar if mobile menu is open
      if (isMobileMenuOpenRef.current) return;

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
    <>
      <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
        
        {/* 1. EXPANDED FULL NAVBAR CAPSULE */}
        <motion.div
          animate={{
            y: isCollapsed ? -100 : 0,
            opacity: isCollapsed ? 0 : 1,
            scale: isCollapsed ? 0.9 : 1,
          }}
          transition={{ type: 'spring', stiffness: 240, damping: 25 }}
          className="flex items-center bg-black/95 backdrop-blur-md pl-3 pr-3 py-2.5 h-16 gap-5 md:gap-9 border border-white/10 rounded-full shadow-2xl pointer-events-auto absolute"
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

          {/* Navigation Links - Desktop Only */}
          <nav className="hidden md:flex items-center gap-4 md:gap-5 text-[15px] md:text-base font-medium whitespace-nowrap">
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

          {/* Hamburger Button - Mobile Only */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden flex-col items-center justify-center w-11 h-11 gap-1.5 bg-white/5 border border-white/10 rounded-full cursor-pointer hover:bg-white/10 transition-colors pointer-events-auto focus:outline-none"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-white rounded-full origin-center"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="w-5 h-0.5 bg-white rounded-full"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-white rounded-full origin-center"
            />
          </button>

          {/* Contact Button - Hidden on very small mobile screens */}
          <a href="#contact" className="pointer-events-auto flex hidden sm:flex">
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

      {/* 3. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            className="fixed inset-0 z-[90] bg-[#121212]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 border-b border-white/10"
          >
            {/* Menu Links */}
            <div className="flex flex-col items-center gap-5 mt-12">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="font-sans text-2xl font-semibold tracking-wider text-[#F8F9FA]/90 hover:text-[#ffde00] active:text-[#ffde00] transition-all hover:scale-105 duration-200"
                >
                  {item}
                </motion.a>
              ))}
              
              <motion.a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
                className="mt-6 px-8 py-2.5 bg-[#ffde00] text-black font-sans font-bold rounded-full hover:bg-white transition-colors text-center w-full max-w-[200px] shadow-lg text-sm"
              >
                Contact Me
              </motion.a>
            </div>

            {/* Social Links / Footer inside mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-4 border-t border-white/5 pt-6"
            >
              <div className="flex gap-6 text-sm text-white/55">
                <a href="https://github.com/Vkvijay7" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffde00] transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/vijay-karthick-" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffde00] transition-colors">LinkedIn</a>
                <a href="mailto:vijaykarthick0802@gmail.com" className="hover:text-[#ffde00] transition-colors">Email</a>
              </div>
              <span className="text-[10px] text-white/30 tracking-widest font-sans uppercase">Vijay Karthick — Portfolio</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
