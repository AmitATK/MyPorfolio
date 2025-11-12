'use client'

import { motion } from 'framer-motion'
import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiLinkedin, href: 'https://linkedin.com/in/amit-k-406339228', label: 'LinkedIn' },
    { icon: FiGithub, href: 'https://github.com/AmitATK', label: 'GitHub' },
    { icon: FiMail, href: 'mailto:amitkumaratk2@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-dark-lighter border-t border-gray-200 dark:border-dark-light">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">Amit Kumar</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Software Engineer passionate about building scalable, secure, and high-performance web applications using modern technologies.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Get In Touch
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>
                  <a href="mailto:amitkumaratk2@gmail.com" className="hover:text-primary-500 transition-colors">
                    amitkumaratk2@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+917273883202" className="hover:text-primary-500 transition-colors">
                    +91 7273883202
                  </a>
                </li>
                <li>Patna, Bihar, India</li>
              </ul>
            </motion.div>
          </div>
        </div>



        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.a
            href="#home"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  )
}
