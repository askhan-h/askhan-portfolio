import { motion } from 'framer-motion';
import { useState } from 'react';
import { experiences } from '../assets/data/experience';
import fcode from '../assets/images/fcode.jpg';
import gapstars from '../assets/images/gapstars.jpg';
import lseg from '../assets/images/lseg.png';
import virtusa from '../assets/images/virtusa1.jpg';
import one from '../assets/images/1billion.jpg';
import gt from '../assets/images/gtnexus.jpg';
import trustPayment from '../assets/images/tp.png';

const CompanyLogo = ({ company }) => {
  const logoMap = {
    'Fcode Labs': fcode,
    'Gapstars': gapstars,
    'London Stock Exchange Group': lseg,
    'Virtusa (Pvt) Ltd': virtusa,
    'One Billion Tech': one,
    'GT Nexus (An Infor Company)': gt,
    'Trust Payments': trustPayment
  };

  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 sm:border-4 border-primary/10 flex items-center justify-center overflow-hidden shadow-sm">
      {logoMap[company] ? (
        <img 
          src={logoMap[company]} 
          alt={`${company} logo`}
          className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full"
        />
      ) : (
        <span className="font-bold text-primary text-sm sm:text-base">
          {company.substring(0,1)}
        </span>
      )}
    </div>
  );
};

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const [expandedRoles, setExpandedRoles] = useState({});

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleRoleExpand = (companyId, roleId) => {
    setExpandedRoles(prev => ({
      ...prev,
      [`${companyId}-${roleId}`]: !prev[`${companyId}-${roleId}`]
    }));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-1 sm:py-2 lg:py-4">
      <div className="container mx-auto px-1 sm:px-2 lg:px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center"
        >
          <span className="relative inline-block pb-2">
            <span className="relative z-10">Work Experience</span>
            <span className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-primary/30 -z-0"></span>
          </span>
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-8 sm:left-10 md:left-1/2 h-full w-0.5 sm:w-px bg-primary/10 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => {
            const isExpanded = expandedCards[exp.id];
            const hasPreviousRoles = exp.previousRole || (exp.roles && exp.roles.length > 1);
            
            // Handle both single role and multiple roles structure
            const currentRole = exp.roles ? exp.roles[exp.roles.length - 1] : exp;
            const visiblePoints = isExpanded ? currentRole.description : currentRole.description?.slice(0, 3);
            const hasMorePoints = currentRole.description?.length > 3;
            
            return (
              <motion.div 
                key={exp.id} 
                variants={item}
                transition={{ duration: 0.4 }}
                className={`relative mb-8 sm:mb-12 pl-16 sm:pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'}`}
              >
                {/* Company logo */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  viewport={{ once: true }}
                  className={`absolute top-0 ${index % 2 === 0 ? 'left-2 sm:left-4 md:left-auto md:right-2 lg:right-4' : 'left-2 sm:left-4'}`}
                >
                  <CompanyLogo company={exp.company} />
                </motion.div>
                
                {/* Main Experience card */}
                <motion.div 
                  whileHover={{ 
                    y: -3,
                    boxShadow: '0 10px 25px -5px rgba(0, 102, 204, 0.15)'
                  }}
                  className={`bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-xs border border-gray-200 sm:border-2 transition-all duration-300 hover:border-primary/20 ${index % 2 === 0 ? 'md:mr-2 lg:mr-4' : 'md:ml-2 lg:ml-4'}`}
                >
                  <div>
                    {/* Left-aligned heading section */}
                    <div className="flex flex-col mb-2 sm:mb-3 text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{currentRole.role}</h3>
                      <div className="flex items-center gap-2 sm:gap-3 mt-1">
                        <span className="text-primary font-medium text-sm sm:text-base">{exp.company}</span>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                          {currentRole.duration}
                        </span>
                      </div>
                    </div>
                    
                    {/* Left-aligned bullet points */}
                    {currentRole.description?.length > 0 && (
                      <ul className="space-y-2 sm:space-y-3 pl-5 sm:pl-6 mb-2 sm:mb-3 text-left">
                        {visiblePoints.map((item, i) => (
                          <motion.li 
                            key={i}
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * i }}
                            viewport={{ once: true }}
                            className="text-gray-600 text-xs sm:text-sm leading-relaxed relative before:absolute before:-left-4 sm:before:-left-5 before:top-2 before:w-1.5 sm:before:w-2 before:h-1.5 sm:before:h-2 before:rounded-full before:bg-primary"
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {hasMorePoints && (
                      <button 
                        onClick={() => toggleExpand(exp.id)}
                        className="text-primary text-xs sm:text-sm font-medium hover:underline focus:outline-none"
                      >
                        {isExpanded ? 'Show Less' : `Show More (+${currentRole.description.length - 3})`}
                      </button>
                    )}

                    {/* Previous roles section */}
                    {hasPreviousRoles && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                 
                        <div className="space-y-3">
                          {/* Handle both previousRole (single) and roles (array) structures */}
                          {(exp.previousRole ? [exp.previousRole] : exp.roles?.slice(0, -1)).map((role, roleIndex) => {
                            const isRoleExpanded = expandedRoles[`${exp.id}-${role.id}`];
                            const roleVisiblePoints = isRoleExpanded ? role.description : role.description?.slice(0, 2);
                            const roleHasMorePoints = role.description?.length > 2;

                            return (
                              <div key={role.id} className=" p-3 rounded-md">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h5 className="text-lg font-medium text-gray-800">{role.role}</h5>
                                    <span className="text-xs text-blue-500 bg-primary-50 rounded-full">{role.duration}</span>
                                  </div>
                                  {role.description?.length > 0 && (
                                    <button 
                                      onClick={() => toggleRoleExpand(exp.id, role.id)}
                                      className="text-xs text-primary hover:underline"
                                    >
                                      {isRoleExpanded ? 'Less' : 'More'}
                                    </button>
                                  )}
                                </div>
                                {role.description?.length > 0 && (
                                  <ul className="mt-2 space-y-1 pl-4 text-xs text-gray-600">
                                    {roleVisiblePoints.map((point, i) => (
                                      <li key={i} className="relative before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/70">
                                        {point}
                                      </li>
                                    ))}
                                    {roleHasMorePoints && !isRoleExpanded && (
                                      <li className="text-primary/80 text-xs">+{role.description.length - 2} more</li>
                                    )}
                                  </ul>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;