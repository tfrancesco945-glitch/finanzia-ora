'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { Home, Key, Landmark, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Home,
    title: 'Privati',
    subtitle: 'Soluzioni personali',
    description:
      'Prestiti personali, cessione del quinto, consolidamento debiti e supporto nella gestione del profilo creditizio.',
    href: '/privati',
    color: 'text-brand-accent',
    bg: 'bg-blue-50',
    border: 'group-hover:border-brand-accent',
    cta: 'Esplora soluzioni',
  },
  {
    icon: Key,
    title: 'Mutui',
    subtitle: 'La tua casa di domani',
    description:
      'Mutui prima casa, surroghe, ristrutturazioni. Confrontiamo le offerte di 12-15 banche per trovare il tasso migliore.',
    href: '/mutui',
    color: 'text-brand-gold',
    bg: 'bg-amber-50',
    border: 'group-hover:border-brand-gold',
    cta: 'Trova il mutuo',
    featured: true,
  },
  {
    icon: Landmark,
    title: 'Aziende',
    subtitle: 'Credito business',
    description:
      'Finanziamenti aziendali, liquidità, credito agevolato e ristrutturazione del debito per PMI e professionisti.',
    href: '/aziende',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'group-hover:border-emerald-400',
    cta: 'Soluzioni aziendali',
  },
]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const card: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function SolutionPicker() {
  return (
    <section id="servizi" className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-3">
            Le nostre soluzioni
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy text-balance">
            Cosa stai cercando?
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Seleziona la tua esigenza e scopri le soluzioni disponibili per te.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {solutions.map((s) => (
            <motion.div key={s.title} variants={card}>
              <Link
                href={s.href}
                className={`group block relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-1 ${
                  s.featured
                    ? 'border-brand-gold/30 ring-1 ring-brand-gold/20'
                    : 'border-transparent'
                } ${s.border}`}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-gold text-[#0A1628] text-xs font-bold rounded-full whitespace-nowrap">
                    Più richiesto
                  </span>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <s.icon className={`w-7 h-7 ${s.color}`} />
                </div>

                {/* Content */}
                <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${s.color}`}>
                  {s.subtitle}
                </p>
                <h3 className="font-playfair text-2xl font-bold text-brand-navy mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{s.description}</p>

                {/* CTA */}
                <div className={`inline-flex items-center gap-2 text-sm font-semibold ${s.color} transition-gap duration-200`}>
                  {s.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
