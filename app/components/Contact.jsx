"use client"
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTelegram, FaPaperclip, FaTimes } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const contactVariants = {
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

  const contactItems = [
    {
      icon: <FaPhone className="text-blue-500" />,
      title: "Phone",
      content: "+251 975 052 194",
      secondary: "+251 948 931 930",
      link: "tel:+251975052194"
    },
    {
      icon: <FaEnvelope className="text-red-500" />,
      title: "Email",
      content: "wedajiemisgan8@gmail.com",
      link: "mailto:wedajiemisgan8@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-green-500" />,
      title: "Location",
      content: "Addis Ababa, Ethiopia"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-blue-600" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: <FaGithub className="text-gray-800" />,
      name: "GitHub",
      url: "https://github.com/yourusername"
    },
    {
      icon: <FaTelegram className="text-blue-400" />,
      name: "Telegram",
      url: "https://t.me/Mis404"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    if (files.length + newFiles.length > 5) {
      toast.error('You can upload a maximum of 5 files');
      return;
    }
    
    // Validate file types and size (e.g., 5MB max per file)
    const validFiles = newFiles.filter(file => {
      if (file.size > 5 * 1024 * 1024) {
        toast.error(`File ${file.name} is too large (max 5MB)`);
        return false;
      }
      return true;
    });
    
    setFiles([...files, ...validFiles]);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    
    if (!formData.message.trim()) {
      toast.error('Please enter your message');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = `New message from ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      
      const mailtoLink = `mailto:wedajiemisgan8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default email client
      window.location.href = mailtoLink;

      // Show success message
      toast.success(
        <div className="flex flex-col">
          <span className="font-bold text-green-700">Message ready to send!</span>
          <span className="text-sm">Your email client should open automatically</span>
        </div>,
        {
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#f0fdf4',
            color: '#166534',
            border: '1px solid #bbf7d0',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
          iconTheme: {
            primary: '#16a34a',
            secondary: '#f0fdf4',
          },
        }
      );

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setFiles([]);
    } catch (error) {
      console.error('Error:', error);
      toast.error(
        <div className="flex flex-col">
          <span className="font-bold text-red-700">Error preparing message</span>
          <span className="text-sm">Please try again later</span>
        </div>,
        {
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#fef2f2',
            color: '#b91c1c',
            border: '1px solid #fecaca',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
          iconTheme: {
            primary: '#dc2626',
            secondary: '#fef2f2',
          },
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <Toaster />
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={contactVariants}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            Get In Touch
          </motion.h2>

          <motion.div 
            variants={contactVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-50 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                </div>
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="block text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-700">{item.content}</p>
                )}
                {item.secondary && (
                  <p className="text-gray-600 mt-1">{item.secondary}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={contactVariants}
            className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attachments (max 5, 5MB each)
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <FaPaperclip className="mr-2" />
                    Add files
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
                  />
                  <span className="text-sm text-gray-500">
                    {files.length > 0 ? `${files.length} file(s) selected` : 'No files selected'}
                  </span>
                </div>
                {files.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                        <span className="text-sm truncate max-w-xs" title={file.name}>
                          {file.name} ({(file.size / 1024 / 1024).toFixed(2)}MB)
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-gray-500 hover:text-red-500"
                          aria-label={`Remove ${file.name}`}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="pt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-white ${isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} transition-colors`}
                >
                  {isSubmitting ? 'Preparing message...' : 'Send Message'}
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div 
            variants={contactVariants}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Or connect with me on</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-3 bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={contactVariants}
            className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-gray-200 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Have a project in mind?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I'm currently available for freelance work and full-time opportunities. If you have a project that needs creative solutions, let's talk about how I can help.
            </p>
            <motion.a
              href="mailto:wedajiemisgan8@gmail.com?subject=Project%20Inquiry"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}