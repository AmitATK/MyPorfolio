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
        'Led modernization of large-scale Angular applications (v9 → v18) using Angular Universal (SSR), lazy loading, virtual scrolling and RxJS — reducing bundle size by 40% and improving page load performance by 35% in production fintech systems.'
    },
    {
      icon: FiServer,
      title: 'Backend & APIs',
      description:
        'Designed and built high-availability Node.js and Spring Boot microservices powering banking and payment platforms for 1,000+ terminals, with idempotent REST APIs, JWT-based authentication and secure integrations.'
    },
    {
      icon: FiDatabase,
      title: 'Data & Caching',
      description:
        'Optimized PostgreSQL and MySQL using indexing, query tuning and server-side pagination, and implemented Redis (LRU + TTL) caching to support high-volume financial transactions with 99.9% uptime.'
    },
    {
      icon: FiCloud,
      title: 'Cloud, DevOps & Security',
      description:
        'Containerized and deployed microservices using Docker and CI/CD (Bitbucket Pipelines), enabling zero-downtime releases, production observability, secure secrets handling and scalable cloud-native deployments.'
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
            Full-stack Software Engineer at Financial Software and Systems (FSS), building high-availability fintech and
            cloud-native platforms using Angular, Node.js, PostgreSQL, Redis and microservices.
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
                Engineering high-scale fintech systems for banks and payment platforms
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I’m Amit Kumar, a Software Engineer at Financial Software and Systems (FSS), where I design and build
                large-scale fintech platforms used by banks and payment providers. I lead the development of a
                high-availability Terminal Management System (TMS) that supports over 1,000 active terminals — modernizing
                legacy Angular portals and building secure Node.js and Spring Boot microservices that power terminal
                onboarding, monitoring and transaction workflows.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My day-to-day work spans Angular, TypeScript, Node.js, Spring Boot, PostgreSQL, MySQL and Redis. I focus
                heavily on performance and reliability — implementing Angular Universal, lazy loading and code splitting
                on the frontend, and caching, indexing and pagination on the backend — achieving 35% faster page loads
                and supporting 99.9%+ uptime in production.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Outside of work, I built <span className="font-semibold">SpendPilot</span>, a multi-cloud FinOps and cost
                governance platform that ingests AWS, Azure and GCP billing data into PostgreSQL and delivers real-time
                dashboards, budgets, anomaly detection and cost forecasts. It reflects my ability to design full-stack
                SaaS systems with secure APIs, background jobs and production-ready architecture.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I keep my fundamentals sharp through data structures, algorithms and system design practice, with 500+
                problems solved across LeetCode, Codeforces and CodeChef. I enjoy building systems that are scalable,
                observable and reliable — especially in fintech and cloud platforms where correctness and uptime truly
                matter.
              </p>

              <div className="flex gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">3+</div>
                  <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">500+</div>
                  <div className="text-gray-600 dark:text-gray-400">DSA Problems</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">10+</div>
                  <div className="text-gray-600 dark:text-gray-400">Core Technologies</div>
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
