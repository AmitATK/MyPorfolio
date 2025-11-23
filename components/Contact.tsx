'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'

import emailjs from 'emailjs-com'
export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'amitkumaratk2@gmail.com',
      href: 'mailto:amitkumaratk2@gmail.com',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 7273883202',
      href: 'tel:+917273883202',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Patna, Bihar',
      href: '#',
      color: 'from-blue-500 to-cyan-600'
    }
  ]

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/amitkumar5169/',
      color: 'hover:text-blue-600'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/AmitATK',
      color: 'hover:text-gray-900 dark:hover:text-white'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    emailjs.send(
      'service_kn28t1j',
      'template_gxt4rus',
      formData,
      'xD_UQ4dHTj2Kg9LH_'
    ).then(
      () => {
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      },
      (error) => {
        console.error(error)
        alert('Failed to send message. Monthly Linmit reached of EmailJS.')
      }
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Lets Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Im always open to discussing new projects, creative ideas, or opportunities 
                  to be part of your visions. Whether you have a question or just want to say hi, 
                  I ll try my best to get back to you!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="glass p-6 rounded-xl flex items-center gap-4 card-hover"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <contact.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-500">
                        {contact.label}
                      </div>
                      <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full glass flex items-center justify-center text-gray-700 dark:text-gray-300 ${social.color} transition-colors`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass p-8 rounded-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-dark-light border border-gray-300 dark:border-dark-light rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-800 dark:text-gray-200"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-dark-light border border-gray-300 dark:border-dark-light rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-800 dark:text-gray-200"
                    placeholder="your.email@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-light border border-gray-300 dark:border-dark-light rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none text-gray-800 dark:text-gray-200"
                    placeholder="Please write your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
