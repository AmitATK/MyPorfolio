'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBook, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const education = {
    degree: 'Master of Computer Applications',
    institution: 'Nitte Meenakshi Institute of Technology (NMIT)',
    location: 'Bangalore, Karnataka',
    period: '2021 – 2023',
    cgpa: '8.47/10',
    highlights: [
      'Interested in Web Development and Software Engineering/Development',
      'Completed advanced coursework in Data Structures, Algorithms, Operating Systems, Computer Networks, and Database Management',
      'Participated in multiple hackathons and coding competitions',
    ]
  }

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-dark-lighter">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            My academic journey in computer science
          </p>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass p-8 rounded-xl card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiBook className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-xl font-semibold text-primary-500 dark:text-primary-400 mb-2">
                      {education.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-2">
                        <FiCalendar size={16} />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin size={16} />
                        <span>{education.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full">
                    <FiAward className="text-green-500" size={20} />
                    <span className="font-bold text-green-600 dark:text-green-400">
                      CGPA: {education.cgpa}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-primary-500 pl-6 mt-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Key Highlights
                </h4>
                <ul className="space-y-3">
                  {education.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                      className="text-gray-600 dark:text-gray-400 flex items-start gap-3"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 p-6 bg-gradient-to-r from-primary-500/5 to-purple-500/5 rounded-lg border border-primary-500/10"
              >
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">2</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
                  </div>
                  <div className="w-px h-12 bg-gradient-to-b from-primary-500/50 to-purple-500/50" />
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">MCA</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Degree</div>
                  </div>
                  <div className="w-px h-12 bg-gradient-to-b from-primary-500/50 to-purple-500/50" />
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">8.47</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
