import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaTimesCircle, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const webhookURL = "https://portfolio-backend-new.vercel.app/api/submit";

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="h-6 w-6" />,
      title: "Email",
      value: "henilsuhagiya0@gmail.com",
      link: "mailto:henilsuhagiya0@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaPhone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 7990232478",
      link: "tel:+917990232478",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaMapMarkerAlt className="h-6 w-6" />,
      title: "Location",
      value: "Ahmedabad, India",
      link: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="h-6 w-6" />,
      name: "GitHub",
      url: "https://github.com/henry-1603",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <FaLinkedin className="h-6 w-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/henil-suhagiya-4b86461a5/",
      color: "hover:text-blue-600"
    },
    {
      icon: <FaInstagram className="h-6 w-6" />,
      name: "Instagram",
      url: "https://instagram.com/henry._.08",
      color: "hover:text-pink-600"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hello? I'm always open to discussing 
            new opportunities, creative ideas, or how we can work together.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm always excited to hear about new projects and opportunities. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${info.color} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${social.color}`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-gray-600 dark:text-gray-400 group-hover:text-current transition-colors duration-300">
                      {social.icon}
                    </div>
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-lg">
                        {social.name}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>
                </div>

                {/* Subject */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-3 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-lg ${
                      submitStatus === "success"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                        : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <FaCheckCircle className="h-5 w-5" />
                    ) : (
                      <FaTimesCircle className="h-5 w-5" />
                    )}
                    <span className="font-medium">
                      {submitStatus === "success"
                        ? "Message sent successfully! I'll get back to you soon."
                        : "Failed to send message. Please try again or contact me directly."}
                    </span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and help bring ideas to life. 
              Let's discuss how we can work together to create something amazing.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-3 text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
