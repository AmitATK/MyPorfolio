'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
export default function Hero() {
  const showProfile = true 
  const socialLinks = [
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/amitkumar5169/', label: 'LinkedIn' },
    { icon: FiGithub, href: 'https://github.com/AmitATK', label: 'GitHub' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/Kumar-Amit/', label: 'LeetCode' },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-b from-gray-900 via-black to-gray-950"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 80, 0],
            y: [0, -60, 60, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
<motion.div
  initial={{ scale: 0, rotate: -180 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
  className="mb-10 flex justify-center"
>
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="relative w-48 h-48 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 p-[3px] shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:shadow-[0_0_45px_rgba(167,139,250,0.8)] transition-all duration-300"
  >
    {showProfile ? (
      <motion.img
        src="/images/ProfilePic.jpg"
        alt="Amit Kumar"
        className="w-full h-full object-cover rounded-full border-4 border-gray-900"
        animate={{
          scale: [1, 1.02, 1],
          boxShadow: [
            '0 0 30px rgba(139,92,246,0.4)',
            '0 0 45px rgba(167,139,250,0.6)',
            '0 0 30px rgba(139,92,246,0.4)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{
          scale: 1.08,
          boxShadow: '0 0 50px rgba(167,139,250,0.9)',
        }}
      />
    ) : (
      <motion.div
        className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500"
        animate={{
          scale: [1, 1.02, 1],
          textShadow: [
            '0 0 10px rgba(139,92,246,0.4)',
            '0 0 20px rgba(167,139,250,0.7)',
            '0 0 10px rgba(139,92,246,0.4)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        AK
      </motion.div>
    )}

    {/* 🔄 Rotating ring border animation */}
    <motion.div
      className="absolute inset-0 rounded-full border-2 border-purple-500/40"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
    />
  </motion.div>
</motion.div>



        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
              Amit Kumar
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 tracking-wide">
            Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I enjoy crafting robust digital products, improving system performance, and solving real problems through thoughtful engineering.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 text-gray-400 mb-10"
        >
          <div className="flex items-center gap-2">
            <FiMapPin className="text-purple-400" />
            <span>Patna, Bihar</span>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone className="text-purple-400" />
            <a href="tel:+917273883202" className="hover:text-purple-300 transition">
              +91 7273883202
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-purple-400" />
            <a href="mailto:amitkumaratk2@gmail.com" className="hover:text-purple-300 transition">
              amitkumaratk2@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-5 mb-12"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-500/40 text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-5"
        >
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-4 border border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500/20 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>


      </div>
    </section>
  )
}
