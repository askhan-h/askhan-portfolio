import { motion } from "framer-motion";

const About = () => {
  const certifications = [
    {
      title: "ISTQB Certified Tester Foundation Level",
      issuer: "ISTQB",
      year: "2025",
    },
  ];

  return (
    <section id="about" className="py-2 md:py-4 lg:py-6">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        {/* About Me Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-2 md:mb-4 text-center"
        >
          <span className="relative inline-block">
            <span className="relative z-10">About Me</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 -z-0 transform -skew-x-12"></span>
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="pb-8 prose-sm sm:prose-lg max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-16"
        >
          <p className="mb-4 sm:mb-6 font-medium text-base sm:text-lg text-gray-700 leading-relaxed">
            An ISTQB certified self-driven Software QA professional dedicated to
            delivering high-quality enterprise-grade software applications. With{" "}
            <b>9+ years of experience </b> in software quality engineering, I've
            worked across diverse domains including:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 mb-6 sm:mb-8 text-sm sm:text-base font-semibold">
            {[
              "Health Care Systems",
              "FinTech Platforms (Payments and Stock Exc)",
              "Testing-as-a-Service (TAAS)",
              "Event Technology",
            ].map((domain, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="bg-gray-100 px-2 py-1 rounded-md text-xs sm:text-sm">
                  {domain}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium">
            I hold a Bachelor's degree in Software Engineering from SLIIT
            (affiliated with Curtin University, Australia) and maintain several
            professional certifications in quality engineering and test
            automation.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-2 md:mb-4 text-center"
        >
          <span className="relative inline-block">
            <span className="relative z-8">Education & Qualifications</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 -z-0 transform -skew-x-12"></span>
          </span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-2 sm:mb-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-full mr-3 sm:mr-4">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Academic Background
                </h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex">
                  <div className="mr-3 sm:mr-4 mt-1">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-gray-800">
                      B.Sc Software Engineering
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      SLIIT / Curtin University, Australia
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2012 - 2015</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-full mr-3 sm:mr-4">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Professional Certifications
                </h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex">
                    <div className="mr-3 sm:mr-4 mt-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-gray-800">
                        {cert.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
