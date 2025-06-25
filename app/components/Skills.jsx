"use client"
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaServer, FaMobile, FaDatabase, FaNetworkWired, FaShieldAlt, FaDownload } from 'react-icons/fa';
import { FiCpu, FiAward } from 'react-icons/fi';

export default function Skills() {
  const skills = {
    technical: [
      { name: "React/Next.js", level: 90, icon: <FaCode className="text-purple-500" /> },
      { name: "Firebase", level: 85, icon: <FaServer className="text-amber-500" /> },
      { name: "Network Security", level: 80, icon: <FaShieldAlt className="text-blue-500" /> },
      { name: "Cisco Networking", level: 75, icon: <FaNetworkWired className="text-green-500" /> },
      { name: "React Native", level: 70, icon: <FaMobile className="text-indigo-500" /> }
    ],
    soft: [
      { name: "Problem Solving", level: 90 },
      { name: "Technical Communication", level: 85 },
      { name: "Team Collaboration", level: 80 },
      { name: "Project Management", level: 75 }
    ]
  };

  const certifications = [
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Woldia University - Cisco Networking Academy",
      description: "VLANs, routing protocols, wireless concepts, and security",
      pdfUrl: "/certificates/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_wedajiemisgan8-gmail-com_5ee156bf-ab77-4a63-bfe2-19388baa0bb1.pdf",
      icon: <FiAward className="text-2xl text-green-600" />,
      bgClass: "bg-gradient-to-r from-green-50 to-teal-50",
      borderClass: "border-green-100",
      textClass: "text-green-800",
      completionDate: "23 Jun 2025",
      instructor: "Henok Degu"
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Woldia University - Cisco Networking Academy",
      description: "Fundamentals of networking, IP addressing, Ethernet concepts",
      pdfUrl: "/certificates/CCNA-_Introduction_to_Networks_certificate_wedajiemisgan8-gmail-com_3bf83648-5052-428f-bbf5-5c0353542c73.pdf",
      icon: <FiAward className="text-2xl text-blue-600" />,
      bgClass: "bg-gradient-to-r from-blue-50 to-cyan-50",
      borderClass: "border-blue-100",
      textClass: "text-blue-800",
      completionDate: "13 Jun 2025",
      instructor: "Henok Degu"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const handleDownload = (pdfUrl) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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
            My Skills
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-lg transition-all relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-100 rounded-full opacity-20"></div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-50 rounded-full mr-4">
                  <FaCode className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Technical Skills</h3>
              </div>
              
              <div className="space-y-6">
                {skills.technical.map((skill, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="mr-3">{skill.icon}</span>
                        <span className="font-medium text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2.5 rounded-full ${index % 3 === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-400' : 
                                   index % 3 === 1 ? 'bg-gradient-to-r from-purple-500 to-pink-400' : 
                                   'bg-gradient-to-r from-green-500 to-teal-400'}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-lg transition-all relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-100 rounded-full opacity-20"></div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-50 rounded-full mr-4">
                  <FaUsers className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Professional Skills</h3>
              </div>
              
              <div className="space-y-6">
                {skills.soft.map((skill, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm font-semibold text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2.5 rounded-full ${index % 3 === 0 ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 
                                   index % 3 === 1 ? 'bg-gradient-to-r from-amber-500 to-orange-400' : 
                                   'bg-gradient-to-r from-indigo-500 to-blue-400'}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Additional Skills Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-gray-200"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-3/4 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Proficiencies</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'JavaScript/TypeScript', 
                    'HTML5/CSS3', 
                    'Tailwind CSS', 
                    'Node.js', 
                    'Cisco IOS',
                    'Network Security',
                    'Routing Protocols',
                    'Firebase',
                    'Git/GitHub',
                    'REST APIs',
                    'Figma',
                    'Agile/Scrum'
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 text-gray-700 font-medium text-sm flex items-center"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/4 flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                    <FiAward className="text-3xl" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold px-2 py-0.5 rounded-full">
                    CCNA
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`p-6 ${cert.bgClass} rounded-xl ${cert.borderClass} border flex items-start relative group`}
                >
                  <div className={`bg-${cert.textClass.split('-')[1]}-100 p-3 rounded-lg mr-4`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold ${cert.textClass}`}>{cert.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-700 mt-2">{cert.description}</p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Instructor: {cert.instructor}</p>
                      <p>Completed: {cert.completionDate}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDownload(cert.pdfUrl)}
                    className="absolute bottom-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors group-hover:opacity-100 opacity-0"
                    aria-label={`Download ${cert.title} certificate`}
                    title="Download Certificate"
                  >
                    <FaDownload className="text-gray-600" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}