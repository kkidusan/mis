"use client"

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaShieldAlt, FaNetworkWired } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';
import Image from 'next/image';

export default function About() {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const certificateVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 pt-64 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-100 rounded-full opacity-20"></div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Hello! I'm <span className="font-semibold text-indigo-600">Misgan Wedajie</span>, a passionate software developer and network professional with expertise in creating secure, performant applications and network infrastructure. My journey in computer science has equipped me with both technical skills and problem-solving mindset.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  I recently graduated with a <span className="font-semibold">Bachelor of Computer Science</span> from Woldia University (2021–2025 G.C) with a <span className="font-semibold">GPA of 3.3/4.0</span>. I've also completed Cisco's CCNA certification courses, demonstrating my networking expertise.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: <FaGraduationCap className="text-3xl text-indigo-600" />,
                  title: "Education",
                  description: "BSc in Computer Science from Woldia University (3.3 GPA)"
                },
                {
                  icon: <FaNetworkWired className="text-3xl text-blue-600" />,
                  title: "Networking Certifications",
                  description: "CCNA: Introduction to Networks & Switching, Routing, Wireless Essentials"
                },
                {
                  icon: <FaCode className="text-3xl text-purple-600" />,
                  title: "Specialization",
                  description: "Full-stack development with React, Next.js & Firebase"
                },
                {
                  icon: <FaShieldAlt className="text-3xl text-teal-600" />,
                  title: "Security Focus",
                  description: "Building secure applications and network infrastructure"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 bg-indigo-50 rounded-full">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certificate Image Display - Centered Circular Design */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 mb-16 flex flex-col items-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="flex justify-center">
                <motion.div 
                  variants={certificateVariants}
                  className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Image 
                    src="/certificates/photo_2025-06-24_15-08-39.jpg" 
                    alt="Professional Certification"
                    fill
                    className="object-contain rounded-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-indigo-500 opacity-10 hover:opacity-20 transition-opacity duration-300"></div>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-indigo-100 opacity-20 -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-purple-100 opacity-20 -z-10"></div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-gray-200"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Technical Expertise</h3>
                <p className="text-gray-700 mb-4">
                  I combine full-stack development expertise with networking knowledge from my CCNA certifications. This unique combination allows me to build applications with network-aware architectures and optimal performance characteristics.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-indigo-700">CCNA: Introduction to Networks</h4>
                    <p className="text-sm text-gray-600">Completed Cisco networking fundamentals</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-indigo-700">CCNA: Switching & Routing</h4>
                    <p className="text-sm text-gray-600">Advanced network infrastructure</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                    <FiAward className="text-4xl" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full">
                    CCNA
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}