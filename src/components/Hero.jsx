import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import profile from '../assets/images/profile.jpg';
import cvPdf from '../assets/docs/Askhan_Hassan_CV.pdf';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Askhan_Hassan_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    };

  };

const handleEmailClick = (e) => {
  e.preventDefault();
  
  const subject = "Let's connect regarding opportunities";
  const body = "Hello Askhan,\n\nI came across your profile and wanted to get in touch about...";
  const mailtoLink = `mailto:askhan.hassan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Create a temporary anchor element and click it
  const mailLink = document.createElement('a');
  mailLink.href = mailtoLink;
  mailLink.style.display = 'none';
  document.body.appendChild(mailLink);
  mailLink.click();
  document.body.removeChild(mailLink);
  
  // Fallback after 1 second if mail client didn't open
  setTimeout(() => {
    navigator.clipboard.writeText('askhan.hassan@gmail.com').then(() => {
      alert('Email address copied to clipboard: askhan.hassan@gmail.com');
    });
  }, 1000);
};

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden">
      <div className="absolute inset-0 -z-10 w-screen" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
            >
              <span className="text-gray-800">I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Askhan Hassan
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-gray-600"
            >
              Senior Software Quality Engineer
            </motion.h2>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Contact Me
              </motion.button>
              
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadCV}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaFileDownload className="text-lg" /> Download CV
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <a
                href="https://github.com/askhan-h"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-white text-gray-700 rounded-full shadow-md group-hover:bg-gray-800 group-hover:text-white transition-all duration-300 w-16 h-16 flex items-center justify-center"
                >
                  <FaGithub className="text-2xl" />
                </motion.div>
              </a>
              
              <a
                href="https://linkedin.com/in/askhanhassan"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-white text-gray-700 rounded-full shadow-md group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 w-16 h-16 flex items-center justify-center"
                >
                  <FaLinkedin className="text-2xl" />
                </motion.div>
              </a>
              
              <a
                href="mailto:askhan.hassan@gmail.com"
                onClick={handleEmailClick}
                className="group"
                aria-label="Email Askhan Hassan"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-white text-gray-700 rounded-full shadow-md group-hover:bg-red-500 group-hover:text-white transition-all duration-300 w-16 h-16 flex items-center justify-center"
                >
                  <HiMail className="text-2xl" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-blue-200 rounded-full opacity-30"
              />
              
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src={profile}
                  alt="Askhan Hassan" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full opacity-30 z-0"
              />
              <motion.div 
                animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-30 z-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;