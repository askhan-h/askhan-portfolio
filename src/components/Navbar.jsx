import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ 
        y: visible ? 0 : -100,
        transition: { duration: 0.3 }
      }}
      className={`fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl sm:text-2xl font-bold text-primary">
            Askhan Hassan
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-primary transition-colors font-semibold">About</a>
            <a href="#experience" className="hover:text-primary transition-colors font-semibold">Experience</a>
            <a href="#skills" className="hover:text-primary transition-colors font-semibold">Skills</a>
            <a href="#services" className="hover:text-primary transition-colors font-semibold">Services</a>
            <a href="#contact" className="hover:text-primary transition-colors font-semibold">Contact</a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-3 mt-3">
            <a 
              href="#about" 
              className="hover:text-primary transition-colors font-semibold"
              onClick={handleNavClick}
            >
              About
            </a>
            <a 
              href="#experience" 
              className="hover:text-primary transition-colors font-semibold"
              onClick={handleNavClick}
            >
              Experience
            </a>
            <a 
              href="#skills" 
              className="hover:text-primary transition-colors font-semibold"
              onClick={handleNavClick}
            >
              Skills
            </a>
            <a 
              href="#services" 
              className="hover:text-primary transition-colors font-semibold"
              onClick={handleNavClick}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="hover:text-primary transition-colors font-semibold"
              onClick={handleNavClick}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;