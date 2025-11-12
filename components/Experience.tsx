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
      title: 'Software Engineer',
      company: 'Financial Software & Systems (FSS)',
      location: 'Chennai, Tamil Nadu',
      period: 'Aug 2023 – Present',
      type: 'Full-time',
      techStack: [
        'Frontend — Angular, TypeScript, NGRX, RxJS',
        'Backend — Node.js / Express (REST, JWT, Redis, MySQL)',
        'Backend — Spring Boot (Java) — integrations & workflows',
        'DevOps — Docker, Kubernetes, Bitbucket Pipelines, AWS (EC2, S3)'
      ],
      responsibilities: [
        'Led upgrade of Terminal Management System (TMS) from Angular v9 → v19; implemented SSR, lazy loading and code-splitting, reducing median LCP by ~35% and overall load times by up to 50%.',
        'Designed and delivered a QR-based Card Transaction module (Base64 generation + secure backend workflows), improving transaction traceability and checkout reliability in production.',
        'Migrated and onboarded bank portals (BICEC, ACLEDA & Saudi/African bank integrations) using reusable Angular modules and microservices; cut delivery lead time by ~30%.',
        'Implemented maker–checker approval flow (Angular UI + Spring Boot backend) to enforce payments onboarding compliance, audit trails and NEXO/ISO-20022 alignment.',
        'Built secure REST APIs with Node.js/Express, added Redis caching and hardened endpoints (auth, input validation, HTTPS/CORS) to maintain >99.9% uptime.',
        'Established automated testing and CI/CD: Jasmine/Karma, Jest for TDD; Bitbucket Pipelines + Docker for repeatable, zero-downtime deploys.',
        'Performed SAST/DAST/VAPT scans and remediations to reduce security risk and meet bank-grade compliance standards.',
        'Mentored junior engineers on Angular architecture and backend best practices; ran code reviews and raised team delivery velocity.'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Financial Software & Systems (FSS)',
      location: 'Chennai, Tamil Nadu',
      period: 'Feb 2023 – Jul 2023',
      type: 'Internship',
      techStack: [
        'Frontend — Angular, TypeScript, SCSS',
        'Backend — Node.js / Express, MySQL'
      ],
      responsibilities: [
        'Built reusable Angular UI components (forms, tables, modals) and integrated REST APIs with HttpClient and interceptors.',
        'Implemented reactive forms, route guards and OnPush change detection; split features into lazy-loaded modules to speed initial load.',
        'Wrote unit tests with Jasmine/Karma and participated in sprint planning, peer reviews and Git-based workflows.',
        'Improved cross-browser responsiveness and accessibility following WCAG basics.'
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
                        {/* Tech stack badges (separate Node.js and Spring Boot lines) */}
                        <div className="mt-2 flex flex-wrap gap-2">
                          {exp.techStack.map((t, i) => (
                            <span key={i} className="text-sm px-2 py-1 border rounded-full text-primary-500 dark:text-primary-400">
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
