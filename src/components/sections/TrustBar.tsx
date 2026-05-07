'use client'

import { motion, type Variants } from 'framer-motion'
import { Award, Building2, MapPin } from 'lucide-react'

const stats = [
  {
    icon: Award,
    value: '10+',
    label: 'anni di esperienza',
    description: 'Nel settore del credito e dei finanziamenti privati e aziendali.',
  },
  {
    icon: Building2,
    value: '12-15',
    label: 'banche convenzionate',
    description: 'Accesso alle migliori offerte del mercato su misura per te.',
  },
  {
    icon: MapPin,
    value: '2',
    label: 'sedi operative',
    description: 'Presenti a Caldiero (VR) e Mantova (MN), vicino a te.',
  },
]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-brand-light">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-brand-light"
        >
          {stats.map(({ icon: Icon, value, label, description }) => (
            <motion.div
              key={label}
              variants={item}
              className="flex items-start gap-5 px-4 md:px-10 py-8 md:py-4 first:pl-0 last:pr-0"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-light flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="font-playfair text-3xl font-bold text-brand-navy leading-none">
                    {value}
                  </span>
                  <span className="text-sm font-semibold text-brand-accent">{label}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
