import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Services from './components/Services';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800 overflow-x-hidden">
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
          <Navbar />
        </div>
        
        <main className="w-full max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 sm:px-6 lg:px-8 pb-8 md:pb-12"
            id="home"
          >
            <Hero />
          </motion.section>
          
          {/* About Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 sm:px-6 lg:px-8 py-8 md:py-12"
            id="about"
          >
            <About />
          </motion.section>
          
          {/* Experience Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-4 sm:px-6 lg:px-8 py-8 md:py-12"
            id="experience"
          >
            <Experience />
          </motion.section>
          
          {/* Skills Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="px-4 sm:px-6 lg:px-8 py-8 md:py-12"
            id="skills"
          >
            <Skills />
          </motion.section>
          
          {/* Services Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="px-4 sm:px-6 lg:px-8 py-8 md:py-12"
            id="services"
          >
            <Services />
          </motion.section>
          
          {/* Contact Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="px-4 sm:px-6 lg:px-8 py-8 md:py-12"
            id="contact"
          >
            <ContactForm />
          </motion.section>
        </main>
      </div>
    </Router>
  );
}

export default App;