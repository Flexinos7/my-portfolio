"use client";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { FaPaperPlane, FaCheck } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState({ name: false, email: false, message: false });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full flex flex-col items-center py-20 bg-gray-50" id="contact">
      <motion.h2
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-md"
      >
        <motion.form
          className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          {/* Name Input */}
          <motion.div variants={inputVariants} className="relative">
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              onFocus={() => setFocused(prev => ({ ...prev, name: true }))}
              onBlur={() => setFocused(prev => ({ ...prev, name: false }))}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition-colors duration-300 bg-transparent"
            />
            <motion.label
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                focused.name || formData.name
                  ? "text-green-600 text-sm -top-2 bg-white px-2"
                  : "text-gray-500 top-3"
              }`}
              animate={{
                y: focused.name || formData.name ? -8 : 0,
                scale: focused.name || formData.name ? 0.9 : 1,
              }}
            >
              Name
            </motion.label>
          </motion.div>

          {/* Email Input */}
          <motion.div variants={inputVariants} className="relative">
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              onFocus={() => setFocused(prev => ({ ...prev, email: true }))}
              onBlur={() => setFocused(prev => ({ ...prev, email: false }))}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition-colors duration-300 bg-transparent"
            />
            <motion.label
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                focused.email || formData.email
                  ? "text-green-600 text-sm -top-2 bg-white px-2"
                  : "text-gray-500 top-3"
              }`}
              animate={{
                y: focused.email || formData.email ? -8 : 0,
                scale: focused.email || formData.email ? 0.9 : 1,
              }}
            >
              Email
            </motion.label>
          </motion.div>

          {/* Message Input */}
          <motion.div variants={inputVariants} className="relative">
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              onFocus={() => setFocused(prev => ({ ...prev, message: true }))}
              onBlur={() => setFocused(prev => ({ ...prev, message: false }))}
              required
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition-colors duration-300 bg-transparent resize-none"
            />
            <motion.label
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                focused.message || formData.message
                  ? "text-green-600 text-sm -top-2 bg-white px-2"
                  : "text-gray-500 top-3"
              }`}
              animate={{
                y: focused.message || formData.message ? -8 : 0,
                scale: focused.message || formData.message ? 0.9 : 1,
              }}
            >
              Message
            </motion.label>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={submitted}
            className="relative overflow-hidden bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="flex items-center justify-center gap-2"
              animate={submitted ? { scale: 0.9 } : { scale: 1 }}
            >
              {submitted ? (
                <>
                  <FaCheck size={16} />
                  Message Sent!
                </>
              ) : (
                <>
                  <FaPaperPlane size={16} />
                  Send Message
                </>
              )}
            </motion.div>
            
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              whileHover={{
                opacity: 0.3,
                x: ["-100%", "100%"],
              }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.form>

        {/* Alternative contact methods */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 mb-4">
            Or reach out directly:
          </p>
          <motion.a
            href="mailto:felixcherianuta@gmail.com"
            className="text-green-600 underline hover:text-green-700 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            felixcherianuta@gmail.com
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
} 