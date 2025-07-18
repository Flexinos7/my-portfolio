'use client';

import { motion } from 'framer-motion';

export default function ContactMe() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-text mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always open to discussing new opportunities and collaborations.
          </p>
          <a
            href="mailto:you@example.com"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-block"
          >
            Send me an email
          </a>
        </motion.div>
      </div>
    </section>
  );
} 