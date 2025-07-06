import { motion } from 'framer-motion';
import { softSkills } from '../assets/data/skills';
import { 
  FaRobot, 
  FaLaptopCode, 
  FaSyncAlt, 
  FaSearch,
  FaCheck, 
  FaBrain,
  
} from 'react-icons/fa';

import appium from '../assets/images/appium2.png';
import aws from '../assets/images/aws.png';
import cypress from '../assets/images/cypress.jpg';
import github from '../assets/images/github.jpg';
import githubActions from '../assets/images/ga.png';
import jenkins from '../assets/images/Jenkins2.png';
import java from '../assets/images/java.png'
import postman from '../assets/images/postman.png';
import javascript from '../assets/images/javascript.png';
import python from '../assets/images/python.jpg';
import selenium from '../assets/images/selenium-2.webp';
import playwright from '../assets/images/playwright.png';
import jira from '../assets/images/jira.jpg';
const Skills = () => {
  // Categorize skills with icon components
  const skillCategories = [
    {
      title: "Test Automation",
      icon: <FaRobot className="text-blue-900 text-3xl" />,
      skills: ['Appium', 'Selenium', 'Playwright', 'Cypress']
    },
    {
      title: "Development",
      icon: <FaLaptopCode className="text-blue-900 text-3xl" />,
      skills: ['Java', 'JavaScript','Python']
    },
    {
      title: "DevOps",
      icon: <FaSyncAlt className="text-blue-900 text-3xl" />,
      skills: ['GitHub', 'GitHub Actions', 'Jenkins', 'AWS']
    },
    {
      title: "Testing",
      icon: <FaSearch className="text-blue-900 text-3xl" />,
      skills: ['Jira', 'Postman']
    }
  ];

  // Map skill names to their icons with consistent sizing
 const skillIcons = {
  'Appium': <img src={appium} alt="Appium" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full opacity-90 hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-blue-200" />,
  'Selenium': <img src={selenium} alt="Selenium" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full opacity-90 hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-blue-200" />,
  'Cypress': <img src={cypress} alt="Cypress" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full opacity-90 hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-blue-200" />,
  'GitHub': <img src={github} alt="GitHub" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full opacity-90 hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-blue-200" />,
  'GitHub Actions': <img src={githubActions} alt="GitHub Actions" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full opacity-90 hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-blue-200" />,
  'Jenkins': <img src={jenkins} alt="Jenkins" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full opacity-90 hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-blue-200" />,
  'AWS': <img src={aws} alt="AWS" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full opacity-90 hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-blue-200" />,
  'Postman': <img src={postman} alt="Postman" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full opacity-90 hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-blue-200" />,
  'Playwright': <img src={playwright} alt="Playwright" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full opacity-90 hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-blue-200" />,
  'Java': <img src={java} alt="Java" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full opacity-90 hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-blue-200" />,
  'JavaScript': <img src={javascript} alt="JavaScript" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full opacity-90 hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-blue-200" />,
  'Python': <img src={python} alt="Python" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full opacity-90 hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-blue-200" />,
  'Jira': <img src={jira} alt="Jira" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full opacity-90 hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-blue-200" />,
};

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const skillItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", bounce: 0.4 }
    }
  };

  return (
    <section id="skills" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Animated Header */}
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-3xl font-bold mb-16 text-center"
        >
          <motion.span 
            className="relative inline-block pb-2"
            whileHover={{ scale: 1.05 }}
          >
           
               <span className="relative inline-block pb-2">
            <span className="relative z-10">Skills and Expertise</span>

            </span>
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-2 bg-primary/30 -z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.span>
        </motion.h2>

        {/* Skills Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.2)"
              }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 border-b border-gray-100"
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-2 flex items-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900">
                  {category.title}
                </h3>
              </motion.div>
              
              <motion.div 
                className="p-5 grid grid-cols-2 gap-4"
                variants={container}
              >
                {category.skills.map((skillName, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillItem}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -2, 0, 2, 0],
                      transition: { duration: 0.5 }
                    }}
                    className="flex flex-col items-center p-3 hover:bg-blue-50 rounded-xl transition-colors"
                  >
                    <motion.div 
                      className="w-12 h-12 mb-3 flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                    >
                      {skillIcons[skillName] || (
                        <div className="w-full h-full rounded-full bg-blue-200 border-2 border-s-blue-900 flex items-center justify-center text-blue-600 font-bold">
                          {skillName.substring(0,1)}
                        </div>
                      )}
                    </motion.div>
                    <span className="text-sm font-medium text-center text-gray-700">
                      {skillName}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 border-b border-gray-100">
            <h3 className="text-xl font-semibold text-blue-900 flex items-center">
              <motion.span 
                className="mr-3"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  transition: { 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    duration: 2 
                  }
                }}
              >
                <FaBrain className="text-blue-900 text-2xl" />
              </motion.span>
              QA Mindset & Soft Skills
            </h3>
          </div>
          
          <motion.div 
            className="p-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.1
                  }}
                  whileHover={{ 
                    x: 5,
                    backgroundColor: "rgba(59, 130, 246, 0.05)"
                  }}
                  className="flex items-start p-3 rounded-lg border border-gray-100 bg-white hover:bg-blue-50 transition-colors"
                >
                  <motion.div
                    className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaCheck className="text-blue-600 text-xs" />
                  </motion.div>
                  <span className="text-gray-700">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;