"use client"
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaLinkedin className="text-blue-600" size={18} />,
      url: "https://www.linkedin.com/in/yourprofile",
      name: "LinkedIn"
    },
    {
      icon: <FaGithub className="text-gray-800" size={18} />,
      url: "https://github.com/yourusername",
      name: "GitHub"
    },
    {
      icon: <FaTwitter className="text-sky-400" size={18} />,
      url: "https://twitter.com/yourhandle",
      name: "Twitter"
    },
    {
      icon: <FaEnvelope className="text-red-500" size={18} />,
      url: "mailto:wedajiemisgan8@gmail.com",
      name: "Email"
    }
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={footerVariants}
      className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm md:text-base">
              © {new Date().getFullYear()} <span className="font-semibold text-indigo-600">Misgan Wedajie</span>. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-500 hover:text-indigo-600 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="mt-4 md:mt-0">
            <motion.a
              href="#top"
              whileHover={{ y: -2 }}
              className="text-xs md:text-sm text-gray-500 hover:text-indigo-600 transition-colors flex items-center justify-center"
            >
              <span>Back to top</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            Built with <span className="text-red-500">♥</span> using Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
}