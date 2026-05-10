'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ContextImageProps {
  src: string
  alt: string
  title?: string
  description?: string
  position?: 'left' | 'right'
  className?: string
}

export function ContextImageHero({
  src,
  alt,
  title,
  description,
}: ContextImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl overflow-hidden shadow-2xl"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
      />
      {title && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          {description && <p className="text-gray-100 text-sm">{description}</p>}
        </div>
      )}
    </motion.div>
  )
}

export function ContextImageSide({
  src,
  alt,
  position = 'right',
  className = '',
}: ContextImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: position === 'right' ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className={`relative rounded-2xl overflow-hidden shadow-xl ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
      />
    </motion.div>
  )
}

// Sezione gallery con 3 immagini
export function ContextImageGallery({
  images,
}: {
  images: Array<{ src: string; alt: string; title?: string }>
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {images.map((image, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="relative rounded-2xl overflow-hidden shadow-lg group"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {image.title && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h3 className="text-white font-semibold">{image.title}</h3>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
