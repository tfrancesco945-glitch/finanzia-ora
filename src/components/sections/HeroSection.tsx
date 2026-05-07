'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { Shield, Star, ArrowRight } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/393515042449'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.05 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
}

const avatarInitials = ['MR', 'LC', 'GP', 'FB']

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060f1e] via-brand-navy to-[#0d2647]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_65%_10%,rgba(37,99,235,0.14),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
      {/* Decorative blur orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-accent/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-28 lg:py-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.07] border border-white/[0.12] text-xs font-medium text-brand-gold backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5 shrink-0" />
              Consulente del Credito Indipendente — OAM
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-playfair text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-bold text-white leading-[1.08] tracking-tight text-balance mb-6"
          >
            Trova il finanziamento{' '}
            <span className="text-brand-gold italic">più adatto</span>{' '}
            alla tua situazione
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-gray-300/90 leading-relaxed mb-10 max-w-2xl"
          >
            Con Finanzia Ora confronti più soluzioni tra banche convenzionate,
            con il supporto di un consulente esperto al tuo fianco.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-brand-accent rounded-xl hover:bg-blue-700 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-blue-600/25"
            >
              Richiedi consulenza gratuita
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#servizi"
              className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-white/[0.08] border border-white/[0.18] rounded-xl hover:bg-white/[0.13] active:scale-[0.97] transition-all duration-200 backdrop-blur-sm"
            >
              Scopri i servizi
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row sm:items-center gap-4 mt-12 pt-10 border-t border-white/[0.08]"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {avatarInitials.map((init, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-accent border-2 border-[#0A1628] flex items-center justify-center text-white text-[10px] font-bold"
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-xs text-gray-400">Centinaia di clienti soddisfatti</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/[0.1]" />
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-lg font-bold text-white font-playfair">10+</p>
                <p className="text-xs text-gray-500">anni esperienza</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-white font-playfair">15</p>
                <p className="text-xs text-gray-500">banche partner</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-white font-playfair">2</p>
                <p className="text-xs text-gray-500">sedi operative</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
