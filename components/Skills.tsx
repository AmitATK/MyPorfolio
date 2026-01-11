'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { DiJava } from 'react-icons/di'
import {
  SiAngular, SiNodedotjs, SiTypescript, SiJavascript,
  SiHtml5, SiCss3, SiSass, SiPostgresql, SiMysql,
  SiGit, SiJenkins, SiDocker,
  SiJest, SiExpress,
  SiTailwindcss,
  SiSpringboot,
  SiRedis,
  SiKubernetes,
  SiAmazon
} from 'react-icons/si'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    {
      title: 'Frontend Engineering',
      skills: [
        { name: 'Angular (v9–19)', icon: SiAngular, color: '#DD0031' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'SCSS / SASS', icon: SiSass, color: '#CC6699' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' }
      ]
    },
    {
      title: 'Backend & API Development',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'NestJS', icon: SiNodedotjs, color: '#E0234E' },
        { name: 'Java', icon: DiJava, color: '#007396' },
        { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' }
      ]
    },
    {
      title: 'Databases & Caching',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'Redis (Caching)', icon: SiRedis, color: '#DC382D' }
      ]
    },
    {
      title: 'DevOps, CI/CD & Cloud',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
        { name: 'AWS', icon: SiAmazon, color: '#FF9900' }
      ]
    }
  ]

  const practices = [
    "Microservices Architecture",
    "RESTful API Design",
    "High-Availability Systems",
    "Scalable System Design",
    "Caching & Performance Optimization",
    "Secure API Development (JWT, CORS, HTTPS)",
    "Test-Driven Development (Jest, Jasmine)",
    "CI/CD Automation",
    "Cloud-Native Deployment",
    "Database Indexing & Query Optimization",
    "Observability & Logging",
    "Agile & Sprint-Based Delivery"
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Production-grade technologies I use to build secure, scalable and high-performance fintech platforms
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-lighter rounded-lg card-hover skill-glow cursor-pointer"
                    >
                      <skill.icon size={40} style={{ color: skill.color }} className="mb-2" />
                      <span className="text-sm text-center text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
              Engineering Practices & System Design
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {practices.map((practice, index) => (
                <motion.span
                  key={practice}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.03 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-sm rounded-full text-gray-800 dark:text-gray-200 cursor-default hover:bg-primary-500/10 hover:border-primary-500/40 transition-all"
                >
                  {practice}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
