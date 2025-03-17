"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa"

function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
  
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
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  
    setIsSubmitting(false);
  };
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-[#2f436e] font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground italic text-black max-w-2xl mx-auto font-medium">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-sm md:text-2xl text-black font-bold mb-4 text-start">Contact Information</h3>
            <p className="text-muted-foreground text-gray-500 text-left">
              Feel free to reach out to me through any of these channels. I'm always open to discussing new projects,
              creative ideas, or opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full bg-gray">
                  <FaEnvelope className="h-5 w-5 text-black " />
                </div>
                <div>
                  <h4 className="font-medium text-left text-black">Email</h4>
                  <a href="mailto:henilsuhagiya0@gmail.com" className="text-muted-foreground hover:text-primary transition-colors ">
                    <span className="text-gray-500">henilsuhagiya0@gmail.com</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full bg-gray">
                  <FaPhone className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-medium text-left text-black">Phone</h4>
                  <a href="tel:+917990232478" className="text-muted-foreground hover:text-primary transition-colors">
                    <span className="text-gray-500">+91 7990232478 </span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full bg-gray">
                  <FaMapMarkerAlt className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-medium text-left text-black">Location</h4>
                  <p className="text-muted-foreground text-gray-500">Ahmedabad , India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col justify-start space-y-2">
                  <label htmlFor="name" className="text-sm text-black font-bold text-start">
                    Name
                  </label>
                  <input id="name" name="name" placeholder="Your name" required className="form-input h-10 text-black placeholder-black border-gray-500 border-1 rounded-md pl-3" />
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="email" className="text-sm text-black font-bold text-start">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="form-input h-10 border-gray-500 placeholder-black border-1 text-black rounded-md pl-3"
                  />
                </div>
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="subject" className="text-sm text-left font-bold text-black">
                  Subject
                </label>
                <input id="subject" name="subject" placeholder="Subject" required className="form-input h-10 placeholder-black text-black border-gray-500 border-1 rounded-md pl-3" />
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="message" className="text-sm font-bold text-black text-left">
                  Message
                </label>
                <textarea id="message" name="message" placeholder="Your message" rows={5} required className="form-textarea placeholder-black border-gray-500 border-1 text-black rounded-md pl-3 pt-3" />
              </div>

              <button type="submit" className="flex justify-center items-center gap-3 font-bold text-white bg-black w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <><FaPaperPlane className="mr-2 h-4 w-4" /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
