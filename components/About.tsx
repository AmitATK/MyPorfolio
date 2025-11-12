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
      'Building modern, component-driven UIs focused on usability and performance. Experience with Angular, Next.js, and TypeScript design patterns.'
  },
  {
    icon: FiServer,
    title: 'Backend & Microservices',
    description:
      'Designing scalable REST and event-driven services using Java Spring Boot and Node.js, with patterns suited for distributed architectures.'
  },
  {
    icon: FiDatabase,
    title: 'Data & Messaging',
    description:
      'Working with PostgreSQL, MongoDB, MySQL, and caching/indexing strategies, plus Kafka-based asynchronous communication pipelines.'
  },
  {
    icon: FiCloud,
    title: 'Cloud & DevOps',
    description:
      'Deploying and automating services using Docker, Kubernetes, CI/CD pipelines, and cloud platforms like AWS.'
  }
];


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
            Software Engineer with a focus on building reliable, efficient, and well-structured applications.
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
                Crafting Scalable and Thoughtfully Engineered Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I am a results-driven Software Engineer who specializes in designing and delivering reliable, scalable, and user-centric web applications. I focus on writing clean, modular, and test-ready code while contributing to architectural decisions that improve system performance and long-term maintainability.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I have hands-on experience building distributed systems and event-driven services, including microservice architectures and asynchronous processing pipelines. I’ve worked with modern ecosystems involving Angular, Node.js, and Java Spring Boot, and I’ve deployed production workloads using Kubernetes, Docker, and CI/CD pipelines (Jenkins/GitHub Actions). My work often involves improving performance, ensuring fault tolerance, and optimizing service communication across complex environments.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Beyond backend and infrastructure, I enjoy enhancing frontend usability, integrating APIs seamlessly, and collaborating closely with cross-functional stakeholders. I’ve also worked with cloud environments like AWS and have contributed to automation and observability efforts that improve developer workflows and application reliability.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I thrive in environments that value ownership, thoughtful engineering, and continuous improvement. I enjoy solving real-world challenges, simplifying complexity, and building systems that are not only efficient — but meaningful and impactful.
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
