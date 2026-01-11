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
        'Angular 9–18, TypeScript, RxJS',
        'Node.js, NestJS, Express, REST APIs',
        'PostgreSQL, MySQL, Redis',
        'Docker, Bitbucket Pipelines, Jenkins',
        'Jasmine, Karma, Jest, Postman'
      ],
      responsibilities: [
        'Lead the end-to-end engineering of a high-availability Terminal Management System (TMS) used by banks and acquirers to manage 1,000+ live payment terminals, modernizing legacy Angular and backend services into scalable, maintainable microservices.',
        'Migrated the core portal from Angular 9 to Angular 18 and introduced Angular Universal (SSR), lazy-loaded routes and modules, virtual scrolling and code splitting — reducing bundle size by 40% and improving page load times by 35% in production.',
        'Designed and built secure Node.js and Spring Boot APIs for terminal onboarding, transaction routing and monitoring, including idempotent endpoints, JWT-based authentication, role-based access control and audit logging.',
        'Delivered a QR-based card transaction workflow using Base64-encoded payloads and secure backend validation, and led onboarding of BICEC Bank onto the TMS platform, cutting new-bank rollout time by ~30%.',
        'Improved system scalability and stability by implementing Redis caching (LRU + TTL), database indexing, query optimization and server-side pagination, allowing the platform to sustain high transaction volumes with 99.9%+ uptime.',
        'Built CI/CD pipelines using Docker and Bitbucket Pipelines for automated builds and zero-downtime deployments, and added centralized logging and metrics to improve production observability.',
        'Strengthened application security through HTTPS, strict CORS, JWT (RS256), HttpOnly cookies, IP/device binding and AES-256/RSA encryption, while mentoring junior engineers and improving test coverage across Angular and Node.js services.'
      ]
    },
    {
      title: 'Software Engineer Intern (Frontend & Backend)',
      company: 'Financial Software & Systems (FSS)',
      location: 'Chennai, Tamil Nadu',
      period: 'Feb 2023 – Jul 2023',
      type: 'Internship',
      techStack: [
        'Angular, TypeScript, HTML5, SCSS',
        'Node.js, Express, REST APIs',
        'MySQL',
        'Jasmine, Karma, Git'
      ],
      responsibilities: [
        'Built reusable Angular components (forms, tables, modals, dashboards) and integrated REST APIs using HttpClient, interceptors and centralized error handling for internal fintech applications.',
        'Implemented reactive forms, route guards, lazy-loaded modules and responsive UI layouts, improving performance and usability across desktop and tablet devices.',
        'Wrote unit tests using Jasmine and Karma and participated in sprint planning, code reviews and Git-based workflows to ensure production-ready code quality.',
        'Helped stabilize and refine critical user flows by fixing UI bugs, improving cross-browser compatibility and enhancing accessibility for banking users.'
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
            Building high-scale fintech platforms, payment systems and cloud-native applications used by banks and
            enterprises.
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
