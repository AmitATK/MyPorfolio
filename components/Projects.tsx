'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink, FiCpu, FiActivity, FiBarChart } from 'react-icons/fi'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'Real-Time System Monitoring with AI-Based Anomaly Detection',
      description:
        'A comprehensive full-stack real-time monitoring platform that captures system metrics and uses AI to detect anomalies and predict future issues.',
      icon: FiActivity,
      tags: ['Python', 'Kafka', 'Node.js', 'Express', 'MongoDB', 'React', 'TensorFlow', 'scikit-learn'],
      features: [
        'Real-time metrics capture: CPU, memory, disk, and network monitoring using Python (psutil) and Apache Kafka',
        'AI-powered anomaly detection using Isolation Forest algorithm',
        'LSTM-based forecasting to predict CPU spikes up to 60 seconds ahead',
        'Node.js + Express services with MongoDB for data storage and Socket.io for live updates',
        'Interactive React + Tailwind dashboard with real-time visualization',
        'Automated email alerts via Nodemailer for detected anomalies',
        'Scalable microservice architecture inspired by Grafana and Prometheus'
      ],
      github: 'https://github.com/AmitATK/RealtimeFlux-AnomSense',
      // demo: '#',
      year: '2025',
      type: 'Personal Project'
    },
    {
      title: 'SpendPilot – Multi-Cloud Cost Analytics & Governance Platform',
      description:
        'A production-style FinOps platform that unifies AWS, Azure, and GCP billing data into a single schema and provides real-time dashboards, budgets, alerts, and forecasts to govern multi-cloud spend.',
      icon: FiBarChart,
      tags: [
        'Angular 20',
        'TypeScript',
        'Node.js',
        'PostgreSQL 16',
        'TypeORM',
        'Chart.js',
        'ng2-charts',
        'RxJS',
        'JWT (RS256)',
        'NodeMailer',
        'SMTP',
        'AWS',
        'Azure',
        'GCP'
      ],
      features: [
        'Ingests AWS, Azure, and GCP billing exports into a unified PostgreSQL 16 schema via TypeORM for consistent multi-cloud cost analysis',
        'Real-time cost dashboards with account, service, and time-range filters built using Angular 20, Chart.js/ng2-charts, and RxJS',
        'Budgets and guardrails with EWMA-based forecasting to monitor and predict multi-cloud spend trends',
        'Org-scoped JWT (RS256) role-based access control (RBAC) for secure, least-privilege access to cost views and admin actions',
        'Showback and chargeback statements with CSV export for finance and business teams',
        'Scheduled background jobs for budget checks and cost rule evaluation, triggering alerts on threshold breaches',
        'Email and webhook alert channels (NodeMailer + SMTP) for overspend, anomalies, and forecast violations'
      ],
      github: 'https://github.com/AmitATK/SpendPilot-Multi-Cloud-Cost-Analytics-and-Governance-Platform-FinOps',
      // demo: '#',
      year: 'Ongoing',
      type: 'Personal Project'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Innovative solutions I&apos;ve built to solve real-world problems
          </p>

          <div className="max-w-5xl mx-auto space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass p-8 rounded-xl card-hover"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <project.icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                        {project.title}
                      </h3>
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiGithub size={20} />
                        </motion.a>
                        {/* <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiExternalLink size={20} />
                        </motion.a> */}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-500">
                      <span className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full">
                        {project.type}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                    <FiBarChart className="text-primary-500" />
                    Key Features
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                    <FiCpu className="text-primary-500" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/AmitATK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub size={20} />
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
