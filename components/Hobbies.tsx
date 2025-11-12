'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiCamera, FiMap } from 'react-icons/fi'
import { FaMotorcycle } from 'react-icons/fa'

export default function Hobbies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const hobbies = [
    {
      icon: FaMotorcycle,
      title: 'Motorcycle Riding',
    description: 'Enjoy long-distance rides and exploring scenic routes, mountains, and open highways.',
      color: 'from-orange-500 to-red-600',
      image: '/images/BikeRide.jpeg',
    },
    {
      icon: FiMap,
      title: 'Travel & Exploration',
    description: 'I love discovering new places, learning cultures, and collecting meaningful experiences along the way.',
      color: 'from-blue-500 to-cyan-600',
      image: '/images/Mountains.jpeg',
    }
  ]

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="hobbies" className="py-20 bg-gray-50 dark:bg-dark-lighter">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Hobbies & Interests</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Outside of work, I enjoy exploring my passions and experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass p-8 rounded-xl card-hover"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${hobby.color} rounded-xl flex items-center justify-center`}>
                    <hobby.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {hobby.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {hobby.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(hobby.image)}
                >
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-8 right-0 text-white/90 hover:text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Hobby Full View"
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
