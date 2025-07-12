import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import QRCode from "react-qr-code";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Contact information
  const whatsappNumber = "+94717612345";
  const whatsappMessage = "Hello! I would like to inquire about";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const emailAddress = "askhan.hassan@gmail.com";
  const emailSubject = "Contact Inquiry";
  const emailBody = "Hello! I would like to inquire about";
  const emailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    // Get current time for the email template
    const currentTime = new Date().toLocaleString();

    // EmailJS configuration - using hardcoded values for reliability
    const serviceId =
      process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_d5feb3u";
    const templateId =
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_193bmkw";
    const publicKey =
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "vrELNyh5VmAdRNua5";

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey, {
        time: currentTime, // Additional parameter for the template
      })
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setStatus("error");
        },
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="py-2 md:py-4 lg:py-8 ">
      <div className="container mx-auto px-2 sm:px-2 lg:px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center"
        >
          <span className="relative inline-block pb-2">
            <span className="relative z-10">Get In Touch</span>
            <span className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-primary/30 -z-0"></span>
          </span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4 sm:space-y-6 bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow-sm border border-gray-100"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Send me a message
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Have a question or want to work together? Fill out the form
                below.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label
                    htmlFor="from_name"
                    className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="from_email"
                    className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center w-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-primary text-white rounded-md sm:rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 mt-2"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane className="mr-2 text-sm sm:text-base" />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-3 sm:p-4 text-xs sm:text-sm bg-green-100 text-green-700 rounded-md sm:rounded-lg mt-4"
                >
                  <FaCheck className="mr-2" />
                  Message sent successfully!
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-3 sm:p-4 text-xs sm:text-sm bg-red-100 text-red-700 rounded-md sm:rounded-lg mt-4"
                >
                  <FaExclamationTriangle className="mr-2" />
                  Failed to send message. Please try again or contact me
                  directly via email/WhatsApp.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">
                Quick Contact Options
              </h3>

              <div className="space-y-6 sm:space-y-8">
                {/* WhatsApp QR Code */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-5 bg-green-50 rounded-lg">
                  <div className="flex flex-col items-center">
                    <div className="p-2 bg-white rounded-md border border-green-100">
                      <QRCode
                        value={whatsappUrl}
                        size={100}
                        level="H"
                        fgColor="#25D366"
                        bgColor="transparent"
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      Scan to chat on WhatsApp
                    </p>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-green-600 mb-2">
                      <FaWhatsapp className="text-xl" />
                      <h4 className="text-sm sm:text-base font-medium">
                        WhatsApp
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Quickly start a conversation by scanning the QR code or{" "}
                      <a
                        href={whatsappUrl}
                        className="text-green-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        click here
                      </a>
                      .
                    </p>
                  </div>
                </div>

                {/* Email QR Code */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-5 bg-blue-50 rounded-lg">
                  <div className="flex flex-col items-center">
                    <div className="p-2 bg-white rounded-md border border-blue-100">
                      <QRCode
                        value={emailUrl}
                        size={100}
                        level="H"
                        fgColor="#3182CE"
                        bgColor="transparent"
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      Scan to send an email
                    </p>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-600 mb-2">
                      <FiMail className="text-xl" />
                      <h4 className="text-sm sm:text-base font-medium">
                        Email
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Scan the QR code or{" "}
                      <a
                        href={emailUrl}
                        className="text-blue-600 hover:underline"
                      >
                        click here
                      </a>{" "}
                      to send me an email directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
