import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefreshCw, Cpu, Globe, Award, Sparkles, ChevronUp, ChevronDown, Image, Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';
import Navbar from './components/Navbar';
import GridScan from './components/ui/GridScan';
import FlowArt, { FlowSection } from './components/ui/story-scroll';


gsap.registerPlugin(ScrollTrigger);

// Helper function to render custom technology indicators
function getTechIcon(name) {
  switch (name) {
    case "HTML":
      return <span className="w-2 h-2 rounded-full bg-[#E34F26] shadow-[0_0_6px_#E34F26]" />;
    case "CSS":
      return <span className="w-2 h-2 rounded-full bg-[#1572B6] shadow-[0_0_6px_#1572B6]" />;
    case "JavaScript":
      return <span className="w-2.5 h-2.5 rounded bg-[#F7DF1E] text-black font-extrabold flex items-center justify-center text-[7px] leading-none">JS</span>;
    case "TypeScript":
      return <span className="w-2.5 h-2.5 rounded bg-[#3178C6] text-white font-extrabold flex items-center justify-center text-[7px] leading-none">TS</span>;
    case "ReactJS":
      return <span className="w-2 h-2 rounded-full bg-[#61DAFB] shadow-[0_0_6px_#61DAFB]" />;
    case "NextJS":
      return <span className="w-2.5 h-2.5 rounded-full bg-white text-black font-bold flex items-center justify-center text-[7px] leading-none">▲</span>;
    case "Tailwind CSS":
      return <span className="w-2 h-2 rounded-full bg-[#06B6D4] shadow-[0_0_6px_#06B6D4]" />;
    case "Framer Motion":
      return <span className="w-2.5 h-2.5 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-sm" />;
    case "Shadcn":
      return <span className="text-[10px] font-bold text-white leading-none font-mono">/</span>;
    case "NodeJS":
      return <span className="w-2 h-2 rounded-full bg-[#339933] shadow-[0_0_6px_#339933]" />;
    case "ExpressJS":
      return <span className="text-[8px] font-bold text-white/50 leading-none font-mono">EX</span>;
    case "MongoDB":
      return <span className="w-2 h-2 rounded-full bg-[#47A248] shadow-[0_0_6px_#47A248]" />;
    case "SQL":
      return <span className="text-[8px] text-[#00758F] font-bold font-mono">SQL</span>;
    case "GitHub":
      return <span className="text-[10px] text-white font-bold">⌘</span>;
    case "Vercel":
      return <span className="text-[8px] text-white font-bold">▲</span>;
    case "Postman":
      return <span className="w-2 h-2 rounded-full bg-[#FF6C37] shadow-[0_0_6px_#FF6C37]" />;
    case "Java":
      return <span className="text-[8px] text-[#007396] font-bold font-mono">JV</span>;
    case "npm":
      return <span className="w-2.5 h-2.5 bg-[#CB3837] text-white font-bold flex items-center justify-center text-[6px]">npm</span>;
    case "Figma":
      return <span className="w-2 h-2 rounded-full bg-[#F24E1E] shadow-[0_0_6px_#F24E1E]" />;
    case "Firebase":
      return <span className="w-2 h-2 rounded-full bg-[#FFCA28] shadow-[0_0_6px_#FFCA28]" />;
    case "REST API":
      return <span className="text-[8px] text-[#ffde00] font-bold font-mono">API</span>;
    case "Python":
      return <span className="w-2 h-2 rounded-full bg-[#3776AB] shadow-[0_0_6px_#3776AB]" />;
    default:
      return <span className="w-2 h-2 rounded-full bg-white" />;
  }
}

export default function App() {
  const containerRef = useRef(null);
  const heroSpacerRef = useRef(null);
  const servicesSpacerRef = useRef(null);
  const aboutSpacerRef = useRef(null);
  const floatingCardRef = useRef(null);
  const cardRef = useRef(null);
  const widgetRef = useRef(null);

  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

  // States for automatic hand-wave to "Hi" loop
  const [isHiActive, setIsHiActive] = useState(false);
  const [isWaving, setIsWaving] = useState(true);

  // Accordion active item state
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Split text for GSAP animation
  const nameText = "VIJAY KARTHICK";
  const leftText = "FULLSTACK";
  const rightText = "DEVELOPER";

  // Skills List Data
  const skillsData = [
    {
      title: "WEB DEVELOPMENT",
      points: [
        "Modern, responsive, and high-performance frontend interfaces",
        "Clean, modular code using React, Tailwind CSS, and Next.js",
        "Optimized for fast load times, accessibility, and SEO",
        "Smooth interactive elements and micro-animations"
      ]
    },
    {
      title: "UI/UX DESIGN",
      points: [
        "User-centric wireframes, design systems, and interactive prototypes",
        "High-fidelity visual mockups designed in Figma",
        "Consistent typography, grid layouts, and visual hierarchy",
        "Focus on intuitive user journeys and accessibility standards"
      ]
    },
    {
      title: "SOFTWARE DEVELOPMENT",
      points: [
        "Scalable backend architectures with Node.js and Express",
        "Secure RESTful API design and database integrations (SQL/NoSQL)",
        "Robust application logic focused on reliability and speed",
        "Comprehensive testing and CI/CD development workflows"
      ]
    },
    {
      title: "AI & AUTOMATION",
      points: [
        "Integration of custom Large Language Model (LLM) APIs",
        "Automating repetitive tasks, web scrapers, and workflows",
        "Creating custom AI agents and chatbot interfaces",
        "Optimizing data pipelines and backend processing tasks"
      ]
    }
  ];

  // Tech Stack Rows Data
  const techStackRows = [
    [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "ReactJS" },
      { name: "NextJS" },
      { name: "Tailwind CSS" }
    ],
    [
      { name: "Framer Motion" },
      { name: "Shadcn" },
      { name: "NodeJS" },
      { name: "ExpressJS" },
      { name: "MongoDB" },
      { name: "SQL" },
      { name: "GitHub" },
      { name: "Vercel" }
    ],
    [
      { name: "Postman" },
      { name: "Java" },
      { name: "npm" },
      { name: "Figma" },
      { name: "Firebase" },
      { name: "REST API" },
      { name: "Python" }
    ]
  ];

  // Projects Data
  const projectsData = [
    {
      id: "construction",
      title: "CAF Construction",
      badge: "Web Application",
      description: "Building dreams into reality. A premium digital showcase highlighting structural engineering, modern architectural designs, and active project portfolios with clean, high-impact visuals.",
      thumbnail: "/construction.jpg",
      link: "https://seosixofficial.github.io/construction1/"
    },
    {
      id: "cafe",
      title: "Café & Restaurant",
      badge: "Responsive Brand Showcase",
      description: "Good food, good mood. An immersive storefront experience designed for premium coffee shops and dining hubs, featuring ambient menus and interactive client galleries.",
      thumbnail: "/cafe.jpg",
      link: "https://seosixofficial.github.io/cafe/"
    }
  ];

  useEffect(() => {
    // GSAP Entrance Animations for Hero Text (Name & Headings)
    const tlEntrance = gsap.timeline();
    gsap.set('.char-reveal', { yPercent: 100 });
    gsap.set('.fade-in-text', { opacity: 0, y: 25 });

    tlEntrance.to('.char-reveal', {
      yPercent: 0,
      duration: 1.2,
      stagger: 0.04,
      ease: 'power4.out',
      delay: 0.3
    })
    .to('.fade-in-text', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    }, '-=0.8');

    // Waving hand entrance animation
    gsap.fromTo(floatingCardRef.current, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1.2, ease: 'back.out(1.4)', delay: 0.2 }
    );

    // Automatic Hand-Wave to "Hi" loop (1.5 seconds per state)
    const interval = setInterval(() => {
      setIsHiActive((prev) => {
        const next = !prev;
        setIsWaving(!next);
        return next;
      });
    }, 1500);

    // ScrollTrigger Card Animation Setup
    let ctx;
    const initScrollTrigger = () => {
      ctx = gsap.context(() => {
        let scrollTl;

        const updateCardPosition = () => {
          if (!containerRef.current || !heroSpacerRef.current || !servicesSpacerRef.current || !aboutSpacerRef.current || !floatingCardRef.current) return;

          // Kill existing scroll trigger if updating
          if (scrollTl) {
            scrollTl.scrollTrigger.kill();
            scrollTl.kill();
          }

          const containerRect = containerRef.current.getBoundingClientRect();
          const heroRect = heroSpacerRef.current.getBoundingClientRect();
          const servicesRect = servicesSpacerRef.current.getBoundingClientRect();
          const aboutRect = aboutSpacerRef.current.getBoundingClientRect();

          // Calculate center coordinates relative to the page wrapper container
          const heroCenter = {
            x: heroRect.left + heroRect.width / 2 - containerRect.left,
            y: heroRect.top + heroRect.height / 2 - containerRect.top
          };
          const servicesCenter = {
            x: servicesRect.left + servicesRect.width / 2 - containerRect.left,
            y: servicesRect.top + servicesRect.height / 2 - containerRect.top
          };
          const aboutCenter = {
            x: aboutRect.left + aboutRect.width / 2 - containerRect.left,
            y: aboutRect.top + aboutRect.height / 2 - containerRect.top
          };

          const startWidth = heroRect.width;
          const startHeight = heroRect.height;
          const servicesWidth = servicesRect.width;
          const servicesHeight = servicesRect.height;
          const endWidth = aboutRect.width;
          const endHeight = aboutRect.height;

          const startX = heroCenter.x - startWidth / 2;
          const startY = heroCenter.y - startHeight / 2;

          const servicesX = servicesCenter.x - servicesWidth / 2;
          const servicesY = servicesCenter.y - servicesHeight / 2;

          const endX = aboutCenter.x - endWidth / 2;
          const endY = aboutCenter.y - endHeight / 2;

          // Set initial card position
          gsap.set(floatingCardRef.current, {
            left: startX,
            top: startY,
            width: startWidth,
            height: startHeight,
            rotationY: 0,
            rotationZ: 0,
            transformOrigin: "center center",
            opacity: 1
          });

          if (widgetRef.current) {
            gsap.set(widgetRef.current, {
              rotationY: 0,
              transformOrigin: "center center"
            });
          }

          // ScrollTrigger timeline spanning from Home through Services to About
          scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: '#home',
              endTrigger: '#about',
              start: 'top top',
              end: 'top top', // timeline completes when top of `#about` hits top of viewport
              scrub: 1, // smooth scrub linked to scrolling
              invalidateOnRefresh: true,
            }
          });

          // Step 1: Hero to Services (Y-rotation: 0 -> 180, Z-rotation: 0 -> -6)
          scrollTl.to(floatingCardRef.current, {
            left: servicesX,
            top: servicesY,
            width: servicesWidth,
            height: servicesHeight,
            rotationY: 180,
            rotationZ: -6,
            duration: 1,
            ease: 'none'
          })
          .to(widgetRef.current, {
            rotationY: 180,
            duration: 1,
            ease: 'none'
          }, 0);

          // Step 2: Services to About Me (Y-rotation: 180 -> 0, Z-rotation: -6 -> 6)
          scrollTl.to(floatingCardRef.current, {
            left: endX,
            top: endY,
            width: endWidth,
            height: endHeight,
            rotationY: 0, // flip back to front face (first photo)
            rotationZ: 6, // tilt to +6deg on the left side
            duration: 1,
            ease: 'none'
          })
          .to(widgetRef.current, {
            rotationY: 0, // flip widget back to face forward
            duration: 1,
            ease: 'none'
          }, 1);
        };



        // Run initially after DOM settles
        setTimeout(updateCardPosition, 200);

        // Update on resize
        window.addEventListener('resize', updateCardPosition);
        return () => window.removeEventListener('resize', updateCardPosition);
      }, containerRef);
    };

    initScrollTrigger();

    return () => {
      clearInterval(interval);
      if (ctx) ctx.revert();
    };
  }, []);

  // 3D Card Tilt Math
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse position relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Card center coordinates
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Degrees of rotation (max 10deg)
    const rotateX = -((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setCardTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 350);
  };

  const frontFaceStyle = {
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    transform: 'translateZ(1px)',
    WebkitTransform: 'translateZ(1px)',
  };

  const backFaceStyle = {
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    transform: 'rotateY(180deg) translateZ(1px)',
    WebkitTransform: 'rotateY(180deg) translateZ(1px)',
  };

  return (
    <div ref={containerRef} className="relative w-full bg-[#121212] text-[#F8F9FA] overflow-x-hidden flex flex-col select-none">
      {/* Noise background overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none z-30 opacity-45" />

      {/* WebGL Animated GridScan Background */}
      <div className="fixed inset-0 w-full h-full z-10 pointer-events-none opacity-30 mix-blend-screen">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#2F293A"
          gridScale={0.1}
          scanColor="#ffffff"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>


      {/* Navigation */}
      <Navbar />

      {/* SECTION 1: HERO (HOME) */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 relative z-20"
      >
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 relative">
          
          {/* LEFT CONTENT: Name & "FULLSTACK" */}
          <div className="flex-grow flex-shrink flex flex-col items-center md:items-end text-center md:text-right z-10 pointer-events-none select-none">
            <span className="fade-in-text font-sans font-semibold text-[#ffde00] tracking-[0.3em] text-xs md:text-sm uppercase mb-2">
              {nameText}
            </span>
            <h1 className="font-antonio text-[11.5vw] sm:text-7xl md:text-8xl lg:text-[7.2vw] leading-none tracking-tight overflow-hidden flex select-none font-bold text-[#F8F9FA]">
              {leftText.split("").map((char, index) => (
                <span key={index} className="inline-block overflow-hidden h-[1.15em] relative">
                  <span className="inline-block char-reveal">
                    {char}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          {/* CENTER: 3D Flip Card Spacer (Invisible layout guide) */}
          <div 
            ref={heroSpacerRef}
            className="w-[220px] h-[300px] sm:w-[288px] sm:h-[387px] md:w-[315px] md:h-[432px] lg:w-[342px] lg:h-[468px] flex-shrink-0 pointer-events-none"
          />

          {/* RIGHT CONTENT: "DEVELOPER" & Subtitle */}
          <div className="flex-grow flex-shrink flex flex-col items-center md:items-start text-center md:text-left z-10 pointer-events-none select-none">
            <h1 className="font-antonio text-[11.5vw] sm:text-7xl md:text-8xl lg:text-[7.2vw] leading-none tracking-tight overflow-hidden flex select-none mb-4 md:mb-6 font-bold text-[#F8F9FA]">
              {rightText.split("").map((char, index) => (
                <span key={index} className="inline-block overflow-hidden h-[1.15em] relative">
                  <span className="inline-block char-reveal">
                    {char}
                  </span>
                </span>
              ))}
            </h1>
            <p className="fade-in-text font-sans text-[#ffde00] text-sm sm:text-base max-w-[280px] sm:max-w-[320px] leading-relaxed select-none">
              I'm an India-based fullstack developer and digital builder
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 2: SERVICES (WHAT I CAN DO FOR YOU) */}
      <motion.section 
        id="services" 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen flex items-center justify-center py-28 px-6 md:px-12 relative z-20 border-t border-white/5"
      >
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-16">
          
          {/* LEFT: Accordion Content */}
          <div className="flex-1 w-full flex flex-col items-start select-none">
            <h2 className="font-antonio text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F8F9FA] mb-4">
              WHAT I CAN DO FOR YOU
            </h2>
            <p className="font-sans text-[#F8F9FA]/60 text-sm sm:text-base max-w-lg mb-10 leading-relaxed">
              As a fullstack developer, I design and build high-performance applications, crafting digital solutions that connect deeply and drive value.
            </p>

            {/* Skills Accordion List */}
            <div className="w-full border-t border-white/10 flex flex-col">
              {skillsData.map((skill, index) => (
                <div key={index} className="border-b border-white/10 w-full">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-6 md:py-7 flex items-center justify-between text-left font-antonio text-xl sm:text-2xl md:text-3xl font-bold text-[#F8F9FA] hover:text-[#ffde00] transition-colors duration-200 focus:outline-none"
                  >
                    <span>{`${index + 1}. ${skill.title}`}</span>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 0 : 180 }}
                      transition={{ duration: 0.25 }}
                      className="text-[#F8F9FA]/40 hover:text-[#ffde00]"
                    >
                      <ChevronUp className="w-6 h-6" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="list-disc pl-5 font-sans text-sm sm:text-base text-[#F8F9FA]/70 pb-6 md:pb-7 max-w-xl space-y-2 leading-relaxed">
                          {skill.points.map((point, idx) => (
                            <li key={idx} className="marker:text-[#ffde00]">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Card Spacer (Invisible layout guide) */}
          <div className="flex-1 w-full flex items-center justify-center md:justify-end pt-8 md:pt-0">
            <div 
              ref={servicesSpacerRef}
              className="w-[220px] h-[300px] sm:w-[290px] sm:h-[400px] md:w-[320px] md:h-[440px] lg:w-[350px] lg:h-[480px]"
            />
          </div>

        </div>
      </motion.section>

      {/* SECTION 3: ABOUT ME */}
      <motion.section 
        id="about" 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen flex items-center justify-center py-28 px-6 md:px-12 relative z-20 border-t border-white/5"
      >
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-16">
          
          {/* LEFT: Card Spacer (Invisible layout guide) */}
          <div className="flex-1 w-full flex items-center justify-center md:justify-start">
            <div 
              ref={aboutSpacerRef}
              className="w-[220px] h-[300px] sm:w-[288px] sm:h-[387px] md:w-[315px] md:h-[432px] lg:w-[342px] lg:h-[468px]"
            />
          </div>

          {/* RIGHT: About Me Content */}
          <div className="flex-1 w-full flex flex-col items-start select-none">
            <h2 className="font-antonio text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F8F9FA] mb-4">
              ABOUT ME
            </h2>
            
            {/* Personal Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full font-sans text-sm sm:text-base mb-10 max-w-xl text-[#F8F9FA]/80">
              <div className="flex flex-col border-b border-white/5 pb-2">
                <span className="text-xs uppercase tracking-widest text-[#ffde00] font-semibold mb-1">Name</span>
                <span className="font-medium text-[#F8F9FA]">vijaykarthick x</span>
              </div>
              <div className="flex flex-col border-b border-white/5 pb-2">
                <span className="text-xs uppercase tracking-widest text-[#ffde00] font-semibold mb-1">Role</span>
                <span className="font-medium text-[#F8F9FA]">fullstack developer</span>
              </div>
              <div className="flex flex-col border-b border-white/5 pb-2">
                <span className="text-xs uppercase tracking-widest text-[#ffde00] font-semibold mb-1">Email</span>
                <a href="mailto:vijaykarthick0802@gmail.com" className="font-medium text-[#F8F9FA] hover:text-[#ffde00] transition-colors">vijaykarthick0802@gmail.com</a>
              </div>
              <div className="flex flex-col border-b border-white/5 pb-2">
                <span className="text-xs uppercase tracking-widest text-[#ffde00] font-semibold mb-1">Phone</span>
                <a href="tel:9344045661" className="font-medium text-[#F8F9FA] hover:text-[#ffde00] transition-colors">9344045661</a>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10 my-6 max-w-xl" />

            {/* Tech Stack Header */}
            <div className="flex flex-col items-start mb-6">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#ffde00] font-semibold mb-1">
                BETTER THAN YESTERDAY.
              </span>
              <h3 className="font-antonio text-3xl sm:text-4xl font-bold tracking-tight text-[#F8F9FA]">
                My Tech Stack
              </h3>
            </div>

            {/* Tech Stack Pills Rows */}
            <div className="flex flex-col gap-4 w-full max-w-xl">
              {techStackRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap items-center justify-start gap-2.5">
                  {row.map((tech) => (
                    <div 
                      key={tech.name}
                      className="flex items-center gap-2 bg-[#1e1e1e]/40 hover:bg-[#1e1e1e]/80 border border-white/10 hover:border-[#ffde00]/40 px-3.5 py-1.5 rounded-full font-sans text-xs font-medium text-[#F8F9FA]/90 transition-all duration-300 cursor-pointer animate-fade-in"
                    >
                      {getTechIcon(tech.name)}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

          </div>

        </div>
      </motion.section>

      {/* SECTION 4: FEATURED PROJECTS */}
      {/* SECTION 4: FEATURED PROJECTS */}
      <section id="projects" className="relative z-20">
        {/* Section Header */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-20 mb-10 select-none">
          <div className="flex-1">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#ffde00] font-semibold mb-1 block">
              SELECTED WORKS
            </span>
            <h2 className="font-antonio text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F8F9FA] mb-4">
              FEATURED PROJECTS
            </h2>
            <p className="font-sans text-[#F8F9FA]/60 text-sm sm:text-base max-w-2xl leading-relaxed">
              These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling.
            </p>
          </div>
          <div className="font-antonio text-lg text-[#ffde00] tracking-widest font-bold border-b-2 border-[#ffde00] pb-1">
            04 / WORKS
          </div>
        </div>

        <FlowArt aria-label="Featured Projects Showcase">
          {/* Slide 1 */}
          <FlowSection 
            aria-label="CAF Construction" 
            onClick={() => window.open("https://seosixofficial.github.io/construction1/", '_blank')}
          >
            {/* Desktop-only full cover layout */}
            <div 
              className="hidden md:block absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: 'url(/construction.jpg)' }}
            />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/75 pointer-events-none" />
            
            <div className="hidden md:block absolute top-6 left-6 md:top-10 md:left-10 z-10 select-none pointer-events-none">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#ffde00]">
                01 — FEATURED PROJECT
              </span>
              <h3 className="font-antonio text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#F8F9FA] mt-1 md:mt-2">
                CAF Construction
              </h3>
            </div>

            <div className="hidden md:block absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 select-none pointer-events-none">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold font-sans text-black bg-[#ffde00] group-hover:bg-[#F8F9FA] px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-300 transform group-hover:scale-105 shadow-md">
                <span>View Live Site</span>
                <span>→</span>
              </div>
            </div>

            {/* Mobile-only split layout */}
            <div className="flex md:hidden flex-col h-full w-full bg-[#161616]/90 backdrop-blur-sm">
              <div 
                className="h-[48%] w-full bg-cover bg-center border-b border-white/5"
                style={{ backgroundImage: 'url(/construction.jpg)' }}
              />
              <div className="flex-1 p-6 flex flex-col justify-between items-start text-left select-none">
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ffde00]">
                    01 — FEATURED PROJECT
                  </span>
                  <h3 className="font-antonio text-2xl font-bold uppercase tracking-tight text-[#F8F9FA]">
                    CAF Construction
                  </h3>
                  <p className="font-sans text-xs text-[#F8F9FA]/60 leading-relaxed mt-1">
                    Building dreams into reality. A premium digital showcase highlighting structural engineering, modern architectural designs, and active project portfolios.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold font-sans text-black bg-[#ffde00] px-4 py-2 rounded-full mt-4">
                  <span>View Live Site</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </FlowSection>

          {/* Slide 2 */}
          <FlowSection 
            aria-label="Café & Restaurant" 
            onClick={() => window.open("https://seosixofficial.github.io/cafe/", '_blank')}
          >
            {/* Desktop-only full cover layout */}
            <div 
              className="hidden md:block absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: 'url(/cafe.jpg)' }}
            />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/75 pointer-events-none" />
            
            <div className="hidden md:block absolute top-6 left-6 md:top-10 md:left-10 z-10 select-none pointer-events-none">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#ffde00]">
                02 — FEATURED PROJECT
              </span>
              <h3 className="font-antonio text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#F8F9FA] mt-1 md:mt-2">
                Café & Restaurant
              </h3>
            </div>

            <div className="hidden md:block absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 select-none pointer-events-none">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold font-sans text-black bg-[#ffde00] group-hover:bg-[#F8F9FA] px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-300 transform group-hover:scale-105 shadow-md">
                <span>View Live Site</span>
                <span>→</span>
              </div>
            </div>

            {/* Mobile-only split layout */}
            <div className="flex md:hidden flex-col h-full w-full bg-[#161616]/90 backdrop-blur-sm">
              <div 
                className="h-[48%] w-full bg-cover bg-center border-b border-white/5"
                style={{ backgroundImage: 'url(/cafe.jpg)' }}
              />
              <div className="flex-1 p-6 flex flex-col justify-between items-start text-left select-none">
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ffde00]">
                    02 — FEATURED PROJECT
                  </span>
                  <h3 className="font-antonio text-2xl font-bold uppercase tracking-tight text-[#F8F9FA]">
                    Café & Restaurant
                  </h3>
                  <p className="font-sans text-xs text-[#F8F9FA]/60 leading-relaxed mt-1">
                    Good food, good mood. An immersive storefront experience designed for premium coffee shops and dining hubs, featuring ambient menus and client galleries.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold font-sans text-black bg-[#ffde00] px-4 py-2 rounded-full mt-4">
                  <span>View Live Site</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </FlowSection>

          {/* Slide 3 */}
          <FlowSection 
            aria-label="SEO Toolkit" 
            onClick={() => window.open("https://seosix-4f731.web.app/", '_blank')}
          >
            {/* Desktop-only full cover layout */}
            <div 
              className="hidden md:block absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: 'url(/seosix.png)' }}
            />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/75 pointer-events-none" />
            
            <div className="hidden md:block absolute top-6 left-6 md:top-10 md:left-10 z-10 select-none pointer-events-none">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#ffde00]">
                03 — FEATURED PROJECT
              </span>
              <h3 className="font-antonio text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#F8F9FA] mt-1 md:mt-2">
                Seosix SEO Toolkit
              </h3>
            </div>

            <div className="hidden md:block absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 select-none pointer-events-none">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold font-sans text-black bg-[#ffde00] group-hover:bg-[#F8F9FA] px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-300 transform group-hover:scale-105 shadow-md">
                <span>View Live Site</span>
                <span>→</span>
              </div>
            </div>

            {/* Mobile-only split layout */}
            <div className="flex md:hidden flex-col h-full w-full bg-[#161616]/90 backdrop-blur-sm">
              <div 
                className="h-[48%] w-full bg-cover bg-center border-b border-white/5"
                style={{ backgroundImage: 'url(/seosix.png)' }}
              />
              <div className="flex-1 p-6 flex flex-col justify-between items-start text-left select-none">
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ffde00]">
                    03 — FEATURED PROJECT
                  </span>
                  <h3 className="font-antonio text-2xl font-bold uppercase tracking-tight text-[#F8F9FA]">
                    Seosix SEO Toolkit
                  </h3>
                  <p className="font-sans text-xs text-[#F8F9FA]/60 leading-relaxed mt-1">
                    Optimize and analyze. A suite of advanced search engine optimization utilities, rank trackers, and performance auditors designed for digital marketers.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold font-sans text-black bg-[#ffde00] px-4 py-2 rounded-full mt-4">
                  <span>View Live Site</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </FlowSection>

          {/* Slide 4 */}
          <FlowSection 
            aria-label="SmartBill" 
            onClick={() => window.open("https://seosixofficial.github.io/smartbill_site/", '_blank')}
          >
            {/* Desktop-only full cover layout */}
            <div 
              className="hidden md:block absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: 'url(/smartbill.png)' }}
            />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/75 pointer-events-none" />
            
            <div className="hidden md:block absolute top-6 left-6 md:top-10 md:left-10 z-10 select-none pointer-events-none">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#ffde00]">
                04 — FEATURED PROJECT
              </span>
              <h3 className="font-antonio text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#F8F9FA] mt-1 md:mt-2">
                SmartBill System
              </h3>
            </div>

            <div className="hidden md:block absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 select-none pointer-events-none">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold font-sans text-black bg-[#ffde00] group-hover:bg-[#F8F9FA] px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-300 transform group-hover:scale-105 shadow-md">
                <span>View Live Site</span>
                <span>→</span>
              </div>
            </div>

            {/* Mobile-only split layout */}
            <div className="flex md:hidden flex-col h-full w-full bg-[#161616]/90 backdrop-blur-sm">
              <div 
                className="h-[48%] w-full bg-cover bg-center border-b border-white/5"
                style={{ backgroundImage: 'url(/smartbill.png)' }}
              />
              <div className="flex-1 p-6 flex flex-col justify-between items-start text-left select-none">
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ffde00]">
                    04 — FEATURED PROJECT
                  </span>
                  <h3 className="font-antonio text-2xl font-bold uppercase tracking-tight text-[#F8F9FA]">
                    SmartBill System
                  </h3>
                  <p className="font-sans text-xs text-[#F8F9FA]/60 leading-relaxed mt-1">
                    Billing made simple. A modern invoice generator and client billing system featuring interactive reports, PDF generation, and payment tracking.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold font-sans text-black bg-[#ffde00] px-4 py-2 rounded-full mt-4">
                  <span>View Live Site</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </FlowSection>
        </FlowArt>
      </section>

      {/* FLOATING ANIMATING CARD */}
      <div 
        ref={floatingCardRef} 
        className="absolute z-40 pointer-events-auto opacity-0"
        style={{ 
          transformStyle: 'preserve-3d', 
          WebkitTransformStyle: 'preserve-3d',
          perspective: 1000,
          WebkitPerspective: 1000 
        }}
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ 
            rotateX: cardTilt.x, 
            rotateY: cardTilt.y,
            transformStyle: 'preserve-3d'
          }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d' }}
        >
          {/* FRONT FACE */}
          <div 
            className="w-full h-full absolute inset-0 rounded-[32px] overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl"
            style={frontFaceStyle}
          >
            <img 
              src="/profile.jpg" 
              alt="Vijay Karthick portrait" 
              className="w-full h-full object-cover object-center select-none"
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* BACK FACE */}
          <div 
            className="w-full h-full absolute inset-0 rounded-[32px] overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl"
            style={{ 
              ...backFaceStyle, 
              boxSizing: 'border-box'
            }}
          >
            <img 
              src="/profile_back.jpg" 
              alt="Vijay Karthick working portrait" 
              className="w-full h-full object-cover object-center select-none"
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Waving Hand Circle Widget */}
        <motion.div 
          ref={widgetRef}
          className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-6 w-14 h-14 md:w-18 md:h-18 bg-[#ffde00] rounded-full flex items-center justify-center shadow-lg z-30 cursor-pointer text-black"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <AnimatePresence mode="wait">
            {!isHiActive ? (
              <motion.div
                key="hand-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                <motion.div
                  animate={isWaving ? {
                    rotate: [0, -12, 12, -12, 12, 0]
                  } : { rotate: 0 }}
                  transition={{
                    duration: 1.0,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="/hand.png" 
                    alt="Waving Hand" 
                    className="w-12 h-12 md:w-15 md:h-15 object-contain mix-blend-multiply select-none"
                    draggable="false"
                  />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="hi-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                className="font-sans text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-955"
              >
                Hi
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* SECTION 5: CONTACT */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen flex items-center justify-center py-28 px-6 md:px-12 relative z-20 border-t border-white/5 bg-transparent"
      >
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16">
          {/* Left Side: Bold Antonio Headers & Contact Form */}
          <div className="flex-1 w-full flex flex-col items-start select-none">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#ffde00] font-semibold mb-2 block">
              GET IN TOUCH
            </span>
            <h2 className="font-antonio text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F8F9FA] leading-none mb-6">
              LET'S CREATE <br />
              SOMETHING <br />
              <span className="text-[#ffde00]">REMARKABLE</span>
            </h2>
            <p className="font-sans text-[#F8F9FA]/60 text-sm sm:text-base max-w-md leading-relaxed mb-8 text-left">
              Have a project in mind, looking to hire, or just want to chat? Send a message and let's start a conversation.
            </p>

            {/* Premium Interactive Contact Form */}
            <form onSubmit={(e) => { e.preventDefault(); alert("Message sent! Vijay will get back to you soon."); }} className="w-full max-w-lg flex flex-col gap-6 font-sans">
              <div className="relative w-full group">
                <input 
                  type="text" 
                  required 
                  placeholder=" " 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-[#F8F9FA] placeholder-transparent focus:outline-none focus:border-[#ffde00] transition-colors peer"
                />
                <label className="absolute left-0 top-3 text-sm text-white/40 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#ffde00] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#ffde00]">
                  Your Name
                </label>
              </div>

              <div className="relative w-full group">
                <input 
                  type="email" 
                  required 
                  placeholder=" " 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-[#F8F9FA] placeholder-transparent focus:outline-none focus:border-[#ffde00] transition-colors peer"
                />
                <label className="absolute left-0 top-3 text-sm text-white/40 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#ffde00] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#ffde00]">
                  Your Email
                </label>
              </div>

              <div className="relative w-full group">
                <textarea 
                  rows={4} 
                  required 
                  placeholder=" " 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-[#F8F9FA] placeholder-transparent focus:outline-none focus:border-[#ffde00] transition-colors resize-none peer"
                />
                <label className="absolute left-0 top-3 text-sm text-white/40 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#ffde00] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#ffde00]">
                  Your Message
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#f5d300' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full sm:w-auto self-start mt-2 px-8 py-3 bg-[#ffde00] text-black font-semibold rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[#ffde00]/20 transition-all duration-300"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>

          {/* Right Side: Right-aligned glassmorphic contact cards */}
          <div className="flex-1 w-full flex flex-col items-stretch lg:items-end gap-6 max-w-xl">
            {/* Email Card */}
            <motion.a 
              href="mailto:vijaykarthick0802@gmail.com"
              whileHover={{ scale: 1.02, borderColor: '#ffde00' }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#ffde00]/50 transition-colors">
                  <Mail className="w-6 h-6 text-[#ffde00]" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#F8F9FA]/40 font-semibold">Email</span>
                  <span className="font-sans text-base sm:text-lg font-semibold text-[#F8F9FA] group-hover:text-[#ffde00] transition-colors break-all">
                    vijaykarthick0802@gmail.com
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#ffde00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </motion.a>

            {/* Phone Card */}
            <motion.a 
              href="tel:9344045661"
              whileHover={{ scale: 1.02, borderColor: '#ffde00' }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#ffde00]/50 transition-colors">
                  <Phone className="w-6 h-6 text-[#ffde00]" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#F8F9FA]/40 font-semibold">Phone</span>
                  <span className="font-sans text-base sm:text-lg font-semibold text-[#F8F9FA] group-hover:text-[#ffde00] transition-colors">
                    +91 9344045661
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#ffde00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </motion.a>

            {/* Location Card */}
            <div className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-6 h-6 text-[#ffde00]" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#F8F9FA]/40 font-semibold">Location</span>
                  <span className="font-sans text-base sm:text-lg font-semibold text-[#F8F9FA]">
                    India
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#ffde00] shadow-[0_0_8px_#ffde00] animate-pulse" />
                <span className="font-sans text-xs text-[#F8F9FA]/80">GMT +5:30</span>
              </div>
            </div>

            {/* Socials Card */}
            <div className="w-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#F8F9FA]/40 font-semibold">Connect Socially</span>
              </div>
              <ul className="example-2">
                {/* GitHub */}
                <li className="icon-content">
                  <a
                    href="https://github.com/Vkvijay7"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-social="github"
                    aria-label="GitHub"
                  >
                    <div className="filled"></div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                  <div className="tooltip">GitHub</div>
                </li>

                {/* LinkedIn */}
                <li className="icon-content">
                  <a
                    href="https://www.linkedin.com/in/vijay-karthick-"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-social="linkedin"
                    aria-label="LinkedIn"
                  >
                    <div className="filled"></div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
                    </svg>
                  </a>
                  <div className="tooltip">LinkedIn</div>
                </li>

                {/* Twitter / X */}
                {/* Resume */}
                <li className="icon-content">
                  <a
                    href="/resume.pdf"
                    download="Vijay_Karthick_Resume.pdf"
                    data-social="resume"
                    aria-label="Resume"
                  >
                    <div className="filled"></div>
                    <span className="relative z-10 font-antonio text-2xl font-black transition-transform duration-300 group-hover:scale-110">
                      R
                    </span>
                  </a>
                  <div className="tooltip">Resume</div>
                </li>

                {/* Instagram */}
                <li className="icon-content">
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-social="instagram"
                    aria-label="Instagram"
                  >
                    <div className="filled"></div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  </a>
                  <div className="tooltip">Instagram</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Premium Multi-column Footer */}
      <footer className="w-full bg-[#0a0a0a]/80 border-t border-white/10 pt-20 pb-10 px-6 md:px-12 relative z-20 backdrop-blur-md">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-16">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 font-sans">
            
            {/* Branding Column */}
            <div className="flex flex-col items-start gap-4 lg:col-span-1">
              <span className="font-antonio text-2xl font-bold tracking-wide text-[#F8F9FA]">
                VIJAY <span className="text-[#ffde00]">KARTHICK</span>
              </span>
              <p className="text-sm text-[#F8F9FA]/60 leading-relaxed max-w-xs text-left">
                India-based fullstack developer crafting high-performance, responsive, and beautiful digital solutions.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col items-start gap-4">
              <span className="text-xs uppercase tracking-widest text-[#ffde00] font-semibold">Navigation</span>
              <div className="flex flex-col items-start gap-2.5 text-sm font-medium">
                <a href="#home" className="text-[#F8F9FA]/60 hover:text-[#ffde00] hover:translate-x-1 transition-all">Home</a>
                <a href="#about" className="text-[#F8F9FA]/60 hover:text-[#ffde00] hover:translate-x-1 transition-all">About</a>
                <a href="#services" className="text-[#F8F9FA]/60 hover:text-[#ffde00] hover:translate-x-1 transition-all">Services</a>
                <a href="#projects" className="text-[#F8F9FA]/60 hover:text-[#ffde00] hover:translate-x-1 transition-all">Projects</a>
                <a href="#contact" className="text-[#F8F9FA]/60 hover:text-[#ffde00] hover:translate-x-1 transition-all">Contact</a>
              </div>
            </div>

            {/* Services Column */}
            <div className="flex flex-col items-start gap-4">
              <span className="text-xs uppercase tracking-widest text-[#ffde00] font-semibold">Services</span>
              <div className="flex flex-col items-start gap-2.5 text-sm font-medium text-left">
                <span className="text-[#F8F9FA]/60">Web Development</span>
                <span className="text-[#F8F9FA]/60">UI/UX Design</span>
                <span className="text-[#F8F9FA]/60">Software Development</span>
                <span className="text-[#F8F9FA]/60">AI & Automation</span>
              </div>
            </div>

            {/* Contact Details Column */}
            <div className="flex flex-col items-start gap-4">
              <span className="text-xs uppercase tracking-widest text-[#ffde00] font-semibold">Get in Touch</span>
              <div className="flex flex-col items-start gap-2.5 text-sm font-medium text-left">
                <a href="mailto:vijaykarthick0802@gmail.com" className="text-[#F8F9FA]/60 hover:text-[#ffde00] transition-colors break-all">
                  vijaykarthick0802@gmail.com
                </a>
                <a href="tel:9344045661" className="text-[#F8F9FA]/60 hover:text-[#ffde00] transition-colors">
                  +91 9344045661
                </a>
                <span className="text-[#F8F9FA]/60">
                  India
                </span>
              </div>
            </div>

          </div>

          {/* Bottom Divider & Credits */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#F8F9FA]/40">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Vijay Karthick. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              <span>Crafted with</span>
              <span className="text-[#ffde00] animate-pulse">♥</span>
              <span>in India</span>
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
