"use client"
import { motion } from 'framer-motion';
import { FaTicketAlt, FaUsers, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Cinema Ticketing System",
    date: "Mar 2025 - May 2025",
    description: "Developed a full-featured ticketing platform with movie listings, seat selection, real-time booking, and secure payment integration. Built with a responsive UI and admin dashboard for managing screenings and sales.",
    technologies: ["React", "Next.js", "Firebase", "Cloudinary", "Chapa API"],
    icon: <FaTicketAlt className="text-indigo-500" />,
    color: "from-indigo-50 to-purple-50",
    border: "border-indigo-100",
    githubUrl: "https://github.com/kkidusan/cinema-ticket"
  },
  {
    title: "Social Media Platform",
    date: "Nov 2024 - Feb 2025",
    description: "Created a high-performance social media platform for short-form video uploads with real-time engagement and creator monetization tools. Designed with secure authentication and cloud-based storage.",
    technologies: ["React", "Next.js", "Firebase", "Cloudinary"],
    icon: <FaUsers className="text-blue-500" />,
    color: "from-blue-50 to-cyan-50",
    border: "border-blue-100",
    githubUrl: "https://github.com/kkidusan/social-Media"
  }
];

export default function Projects() {
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

  return (
    <section id="projects" className="py-20 bg-gray-50">
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
            Featured Projects
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${project.color} rounded-2xl shadow-lg p-8 border ${project.border} hover:shadow-xl transition-all`}
              >
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.date}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">TECH STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white text-sm rounded-full shadow-sm border border-gray-200 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium"
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}