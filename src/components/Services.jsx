import { motion } from 'framer-motion';
import { 
  FaCode,
  FaMobileAlt,
  FaRobot,
  FaChartLine,
  FaServer,
  FaShieldAlt,
 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Web Testing",
      description: "Comprehensive testing of web applications including functionality, UI/UX, and cross-browser compatibility.",
      icon: <FaCode className="text-2xl" />
    },
    {
      title: "Mobile Testing",
      description: "End-to-end testing of iOS and Android applications for performance, usability, and device compatibility.",
      icon: <FaMobileAlt className="text-2xl" />
    },
    {
      title: "Test Automation",
      description: "Development of robust automated test frameworks to improve testing efficiency and coverage.",
      icon: <FaRobot className="text-2xl" />
    },
    {
      title: "Performance Testing",
      description: "Identifying bottlenecks and ensuring applications meet performance requirements under various loads.",
      icon: <FaChartLine className="text-2xl" />
    },
    {
      title: "API Testing",
      description: "Verification of API functionality, reliability, performance, and security through manual and automated tests.",
      icon: <FaServer className="text-2xl" />
    },
    {
      title: "Security Testing",
      description: "Identifying vulnerabilities and ensuring applications are protected against potential threats.",
      icon: <FaShieldAlt className="text-2xl" />
    }
  ];

  return (
    <section id="services" className="py-4 ">
      <div className="container mx-auto px-2">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          <span className="relative inline-block pb-2">
            <span className="relative z-10">Services</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-primary/30 -z-0"></span>
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.15)"
              }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;