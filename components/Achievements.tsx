'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiStar } from 'react-icons/fi'

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const onKeyDown = (e: { key: string }) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    if (selectedImage) {
      document.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  const achievements = [
    {
      image: '/images/Semaphore.jpg',
      title: '1st Place - Semaphore South India Coding Competition',
      description:
        'Secured 1st position among participants from 14 colleges, demonstrating strong algorithmic thinking and problem-solving skills.',
      color: 'from-amber-500 to-orange-600',
      year: '2023',
    },
    {
      image: '/images/Award1.jpeg',
      title: 'Production Deployment Award',
      description:
        'Recognized for leading the live deployment of the South African Bank portal with zero downtime, ensuring stable and optimized system performance.',
      color: 'from-blue-500 to-indigo-600',
      year: '2024',
    },
    {
      image: '/images/Award2.jpg',
      title: 'Project Excellence Recognition',
      description:
        'Took end-to-end ownership of production-level modules for Saudi banking systems, including development, debugging, monitoring, and live issue resolution to ensure uninterrupted transaction flow.',
      color: 'from-purple-500 to-pink-600',
      year: '2025',
    },
  ]

  const codingProfiles = [
    {
      platform: 'LeetCode',
      problems: '200+',
      image: '/images/leetcode.png',
      link: 'https://leetcode.com/u/AmitATK/',
    },
    {
      platform: 'CodeChef',
      problems: '100+',
      image: '/images/codechef.png',
      link: 'https://www.codechef.com/users/amitatk',
    },
    {
      platform: 'Codeforces',
      problems: '50+',
      image: '/images/codeforces.png',
      link: 'https://codeforces.com/profile/Amit_ATK',
    },
    {
      platform: 'GeeksForGeeks',
      problems: '200+',
      image: '/images/gfg.png',
      link: 'https://auth.geeksforgeeks.org/user/amitatk/practice',
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Recognition and milestones from competitive programming and professional contributions
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-xl card-hover relative overflow-hidden group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-20 h-20 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                    onClick={() => setSelectedImage(achievement.image)} 
                  />

                  <span
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${achievement.color} bg-opacity-10 text-sm rounded-full mb-3`}
                  >
                    {achievement.year}
                  </span>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-xl max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FiStar className="text-primary-500" size={32} />
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                  Competitive Programming Journey
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Active problem solver across multiple platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {codingProfiles.map((profile, index) => (
                <motion.a
                  key={profile.platform}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -6 }}
                  className="text-center p-6 bg-gradient-to-br from-primary-500/5 to-purple-500/5 rounded-xl border border-primary-500/10 hover:border-primary-500/30 transition-all cursor-pointer group"
                >
                  <img
                    src={profile.image}
                    alt={profile.platform}
                    className="mx-auto mb-3 w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {profile.problems}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {profile.platform}
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 text-center p-6 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-xl border border-primary-500/20"
            >
              <div className="text-5xl font-bold gradient-text mb-2">500+</div>
              <div className="text-lg text-gray-600 dark:text-gray-400">
                Total Problems Solved
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white/90 hover:text-white text-xl"
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Achievement enlarged"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
