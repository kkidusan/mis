"use client"
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

// Predefined positions and sizes for background elements
const backgroundElements = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  x: [100, 200, 300, 400, 500, 600, 700, 800, 900, 100][i % 10],
  y: [50, 150, 250, 350, 450, 50, 150, 250, 350, 450][i % 10],
  width: [80, 90, 100, 110, 120, 80, 90, 100, 110, 120][i % 10],
  height: [80, 90, 100, 110, 120, 80, 90, 100, 110, 120][i % 10],
  opacity: [0.05, 0.1, 0.15, 0.2, 0.1, 0.05, 0.15, 0.2, 0.1, 0.15][i % 10],
}));

const navItems = [
  { 
    id: 'about', 
    icon: <FaUser className="text-lg md:text-xl" />, 
    text: 'About Me',
    color: 'from-cyan-500 to-cyan-700'
  },
  { 
    id: 'skills', 
    icon: <FaCode className="text-lg md:text-xl" />, 
    text: 'My Skills',
    color: 'from-emerald-500 to-emerald-700'
  },
  { 
    id: 'projects', 
    icon: <FaProjectDiagram className="text-lg md:text-xl" />, 
    text: 'Projects',
    color: 'from-purple-500 to-purple-700'
  },
  { 
    id: 'contact', 
    icon: <FaEnvelope className="text-lg md:text-xl" />, 
    text: 'Contact',
    color: 'from-pink-500 to-pink-700'
  }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Animation for individual characters with cyclic rotation
  const textVariants = {
    hidden: { opacity: 0, y: 20, rotate: 0 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: [0, 360],
      transition: {
        opacity: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
        y: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
        rotate: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 2.5 + i * 0.15,
          ease: "linear"
        }
      }
    })
  };

  // Glow and gradient animation
  const glowVariants = {
    visible: {
      textShadow: [
        "0 0 10px rgba(34, 211, 238, 0.7), 0 0 20px rgba(16, 185, 129, 0.5)",
        "0 0 20px rgba(34, 211, 238, 0.9), 0 0 30px rgba(16, 185, 129, 0.7)",
        "0 0 10px rgba(34, 211, 238, 0.7), 0 0 20px rgba(16, 185, 129, 0.5)"
      ],
      background: [
        "linear-gradient(90deg, #22d3ee, #10b981, #22d3ee)",
        "linear-gradient(90deg, #10b981, #22d3ee, #10b981)",
        "linear-gradient(90deg, #22d3ee, #10b981, #22d3ee)"
      ],
      transition: {
        textShadow: {
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop"
        },
        background: {
          duration: 3,
          repeat: Infinity,
          repeatType: "loop"
        }
      }
    }
  };

  const name = "Misgan Wedajie".split("");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 shadow-2xl py-4 md:py-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
            initial={{
              x: element.x,
              y: element.y,
              width: element.width,
              height: element.height,
              opacity: 0
            }}
            animate={{
              x: element.x + (element.id % 2 === 0 ? 120 : -120),
              y: element.y + (element.id % 3 === 0 ? 60 : -60),
              opacity: element.opacity,
              transition: {
                duration: 15 + (element.id * 1.5),
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="w-full md:w-auto flex justify-between items-center">
            <motion.div variants={itemVariants} className="text-center md:text-left mb-0 md:mb-0">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-3 tracking-tight"
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <span className="relative inline-flex">
                  {name.map((char, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block font-extrabold"
                      style={{ 
                        background: "linear-gradient(90deg, #22d3ee, #10b981)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        textShadow: "0 0 5px rgba(255, 255, 255, 0.3)"
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                  <motion.span 
                    variants={glowVariants} 
                    animate="visible" 
                    className="absolute inset-0 -z-10"
                    style={{ 
                      background: "inherit",
                      filter: "blur(20px)",
                      opacity: 0.5
                    }}
                  />
                </span>
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-200 font-medium flex flex-wrap justify-center md:justify-start gap-2 md:gap-3"
                variants={itemVariants}
              >
                <span className="flex items-center">
                  <FaCode className="mr-1 md:mr-2 text-cyan-400" /> Software Developer
                </span>
                <span className="hidden md:inline text-gray-300">|</span>
                <span className="hidden md:flex items-center">
                  <FaUser className="mr-1 md:mr-2 text-emerald-400" /> Computer Science Graduate
                </span>
              </motion.p>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              variants={itemVariants}
              className="md:hidden p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <motion.nav 
            variants={itemVariants} 
            className="hidden md:block mt-0 md:mt-0"
          >
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
              {navItems.map((item) => (
                <motion.li 
                  key={item.id}
                  whileHover={{ 
                    y: -6,
                    scale: 1.05,
                    transition: { 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={`#${item.id}`} 
                    className={`
                      flex items-center px-5 py-3 rounded-xl 
                      bg-gradient-to-r ${item.color}
                      text-white hover:shadow-xl hover:shadow-${item.color.split('-')[1]}-500/30 
                      transition-all duration-300 group
                    `}
                  >
                    <span className="mr-3 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="font-medium text-sm md:text-base whitespace-nowrap">
                      {item.text}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul> 
          </motion.nav>
        </motion.div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={`#${item.id}`} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      flex items-center px-4 py-3 rounded-lg 
                      bg-gradient-to-r ${item.color}
                      text-white shadow-md
                      transition-all duration-200
                    `}
                  >
                    <span className="mr-3">
                      {item.icon}
                    </span>
                    <span className="font-medium">
                      {item.text}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
}