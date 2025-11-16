'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiServer, FiCloud, FiDatabase } from 'react-icons/fi'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const highlights = [
    {
      icon: FiCode,
      title: 'Frontend Engineering',
      description:
        'Building production-ready Angular applications (v9–20) with SSR, lazy loading, RxJS, and reusable component libraries focused on performance, accessibility, and clean UI/UX.'
    },
    {
      icon: FiServer,
      title: 'Backend & APIs',
      description:
        'Designing secure, RESTful services with Node.js, NestJS/Express, and Spring Boot, including authentication, RBAC, background jobs, and integrations for real-world fintech workloads.'
    },
    {
      icon: FiDatabase,
      title: 'Data & Caching',
      description:
        'Working with PostgreSQL and MySQL schemas, query optimization, indexing, server-side pagination, and Redis caching (LRU/TTL) to reduce latency and support 99.9%+ uptime.'
    },
    {
      icon: FiCloud,
      title: 'Cloud, DevOps & Security',
      description:
        'Containerizing and deploying services using Docker, Kubernetes, and CI/CD (Bitbucket Pipelines/Jenkins), with a strong focus on HTTPS, JWT (RS256), encryption, and secure coding practices.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-lighter">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Full Stack Software Engineer focused on building secure, performant fintech and cloud-native web
            applications with Angular, Node.js, and robust backend architectures.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                Building Reliable Systems for Banking and Cloud Cost Governance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I’m Amit Kumar, a Full Stack Software Engineer currently working at Financial Software and Systems
                (FSS) in Chennai. I own end-to-end development of a high-availability Terminal Management System
                (TMS) for banks and acquirers—upgrading legacy Angular portals, refactoring Node.js services, and
                improving how financial institutions manage their terminals and transactions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My day-to-day work spans Angular, TypeScript, Node.js/NestJS, Spring Boot, PostgreSQL/MySQL, and
                Redis. I care deeply about performance and reliability: from implementing Angular Universal, lazy
                loading, and virtual scrolling to reduce page load times, to adding caching, indexing, and
                server-side pagination that help maintain 99.9%+ uptime for production systems.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Beyond my full-time role, I built <span className="font-semibold">SpendPilot</span>, a multi-cloud
                FinOps and cost governance platform that ingests AWS, Azure, and GCP billing data into PostgreSQL
                and provides dashboards, budgets, alerts, and EWMA-based forecasts. Projects like this let me bring
                together frontend engineering, backend APIs, background jobs, and security into one cohesive system.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I continuously strengthen my fundamentals through competitive programming and interview prep,
                having solved 500+ data structures and algorithms problems across platforms. I enjoy roles where I
                can take ownership, design thoughtfully engineered solutions, and ship software that makes a real
                impact for users and businesses.
              </p>

              <div className="flex gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">2+</div>
                  <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">500+</div>
                  <div className="text-gray-600 dark:text-gray-400">DSA Problems</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">10+</div>
                  <div className="text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass p-6 rounded-xl card-hover skill-glow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
