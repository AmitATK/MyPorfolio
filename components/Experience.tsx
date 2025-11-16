'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      title: 'Software Engineer (Full Stack)',
      company: 'Financial Software & Systems (FSS)',
      location: 'Chennai, Tamil Nadu',
      period: 'Aug 2023 – Present',
      type: 'Full-time',
      techStack: [
        'Angular 9–19, TypeScript, RxJS',
        'Node.js, NestJS/Express, REST APIs',
        'SQL (PostgreSQL, MySQL), Redis',
        'Docker, Kubernetes, Bitbucket Pipelines, Jenkins',
        'Jasmine, Karma, Jest, Postman'
      ],
      responsibilities: [
        'Own end-to-end development of a high-availability Terminal Management System (TMS) for banks and acquirers; upgraded the portal from Angular 9 to 19 and refactored Node.js and MySQL services to improve performance, security, and maintainability.',
        'Reduced median page load (LCP) by ~35% by implementing Angular Universal server-side rendering, route and module lazy loading, code splitting, Angular CDK virtual scrolling, and image lazy loading on data-heavy screens.',
        'Delivered a production-grade QR-based card transaction workflow (Base64 payload generation and secure backend processing) and led migration and onboarding of BICEC Bank onto the TMS platform with reusable microservices, cutting rollout lead time for new banks by ~30%.',
        'Improved API performance and scalability by adding Redis caching with LRU and TTL policies, database indexing and query optimization, server-side pagination and cursors, and response compression, reducing database load and latency while supporting 99.9%+ uptime.',
        'Designed and hardened secure SPA and API architecture using HTTPS and CORS hardening, JWT (RS256) authentication, IP and device binding, HttpOnly cookies, and AES-256 and RSA encryption for sensitive financial data; expanded Jasmine and Karma test coverage and mentored junior engineers on Angular, Node.js APIs, and secure coding.'
      ]
    },
    {
      title: 'Software Engineer Intern (Angular & Backend Integration)',
      company: 'Financial Software & Systems (FSS)',
      location: 'Chennai, Tamil Nadu',
      period: 'Feb 2023 – Jul 2023',
      type: 'Internship',
      techStack: [
        'Angular, TypeScript, SCSS, HTML5',
        'Node.js / Express, REST APIs',
        'MySQL',
        'Jasmine, Karma'
      ],
      responsibilities: [
        'Developed reusable Angular components (forms, tables, modals) and integrated REST APIs using HttpClient, interceptors, and centralized error handling for internal fintech portals.',
        'Implemented reactive forms, route guards, and OnPush change detection, organized features into lazy-loaded modules, and styled responsive UIs using HTML5 and CSS3/SCSS.',
        'Contributed unit tests with Jasmine and Karma and participated in sprint ceremonies, code reviews, and Git-based workflows.',
        'Improved cross-browser responsiveness and basic accessibility for key application screens.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-lighter">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            My professional journey in software development
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass p-8 rounded-xl card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <FiBriefcase className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                          {exp.title}
                        </h3>
                        {/* Tech stack badges */}
                        <div className="mt-2 flex flex-wrap gap-2">
                          {exp.techStack.map((t, i) => (
                            <span
                              key={i}
                              className="text-sm px-2 py-1 border rounded-full text-primary-500 dark:text-primary-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 mt-4 md:mt-0 md:text-right">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <FiCalendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <FiMapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="border-l-4 border-primary-500 pl-6 mt-6">
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                        className="text-gray-600 dark:text-gray-400 flex items-start gap-3"
                      >
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
