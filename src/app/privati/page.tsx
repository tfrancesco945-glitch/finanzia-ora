'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import {
  Home, Banknote, CreditCard, ShieldCheck,
  Check, ArrowRight, ChevronDown,
} from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'

const WHATSAPP_URL = 'https://wa.me/393515042449'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const services = [
  {
    icon: Home,
    title: 'Mutui',
    href: '/mutui',
    badge: 'Vai alla pagina',
    badgeClass: 'bg-brand-accent-light text-brand-accent border-brand-accent/20',
    iconBg: 'bg-brand-accent-light',
    iconColor: 'text-brand-accent',
    description:
      'Prima casa, seconda casa, surroga, consolidamento. Confrontiamo le offerte di 12-15 banche per trovare il tasso più conveniente per il tuo profilo.',
    bullets: [
      'Mutuo prima casa e under 36',
      'Surroga senza costi',
      'Mutuo 100% senza anticipo',
      'Dipendenti pubblici e privati',
    ],
    cta: { label: 'Scopri tutti i mutui', href: '/mutui', external: false },
  },
  {
    icon: Banknote,
    title: 'Cessione del Quinto',
    href: '#richiedi',
    badge: 'Richiedi valutazione',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    description:
      'Finanziamento mediante cessione di una quota dello stipendio o della pensione, direttamente trattenuta alla fonte. Nessuna busta paga aggiuntiva.',
    bullets: [
      'Dipendenti pubblici e privati',
      'Pensionati INPS/INPDAP',
      'Fino a 120 rate mensili',
      'Anche con segnalazioni CRIF',
    ],
    cta: { label: 'Richiedi valutazione gratuita', href: '#richiedi', external: false },
  },
  {
    icon: CreditCard,
    title: 'Prestiti Personali',
    href: '#richiedi',
    badge: 'Richiedi valutazione',
    badgeClass: 'bg-violet-50 text-violet-700 border-violet-200',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    description:
      'Soluzioni di credito al consumo flessibili per qualsiasi esigenza: acquisti, spese straordinarie, liquidità. Risposta rapida, condizioni personalizzate.',
    bullets: [
      'Importi da 1.000 a 75.000 €',
      'Risposta in 24-48 ore',
      'Nessuna garanzia immobiliare',
      'Lavoratori dipendenti e autonomi',
    ],
    cta: { label: 'Richiedi valutazione gratuita', href: '#richiedi', external: false },
  },
  {
    icon: ShieldCheck,
    title: 'Cancellazione CRIF',
    href: '#richiedi',
    badge: 'Consulenza dedicata',
    badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    description:
      'Supporto professionale per la verifica, la gestione e il risanamento del profilo creditizio. Ti aiutiamo a ripristinare l\'accesso al credito.',
    bullets: [
      'Verifica segnalazioni attive',
      'Opposizione alle segnalazioni illegittime',
      'Miglioramento dello score creditizio',
      'Accesso facilitato al credito',
    ],
    cta: { label: 'Richiedi consulenza gratuita', href: '#richiedi', external: false },
  },
]

function PrivatiHero() {
  return (
    <section className="relative min-h-[58vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a18] via-[#003333] to-[#001e1e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_65%_15%,rgba(0,179,136,0.13),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.07] border border-white/[0.12] text-xs font-medium text-brand-gold">
              Soluzioni per Privati
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-playfair text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] tracking-tight text-balance mb-5">
            Il credito pensato{' '}
            <span className="text-brand-gold italic">per te</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base md:text-lg text-gray-300/90 leading-relaxed mb-10 max-w-xl">
            Mutui, prestiti, cessione del quinto e consulenza CRIF. Soluzioni su misura per ogni situazione creditizia, con un consulente al tuo fianco.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a href="#servizi" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-brand-accent rounded-xl hover:bg-brand-accent-dark active:scale-[0.97] transition-all duration-200 shadow-lg shadow-brand-accent/25">
              Scopri i servizi
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-white/[0.08] border border-white/[0.18] rounded-xl hover:bg-white/[0.13] active:scale-[0.97] transition-all">
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>

      <a href="#servizi" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors" aria-label="Scorri">
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="servizi" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-3">
            Cosa facciamo
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy text-balance">
            I nostri servizi per privati
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Un consulente esperto per ogni esigenza di credito — dalla prima casa alla gestione del profilo creditizio.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeUp}>
              <div className="group bg-white rounded-2xl border border-brand-light shadow-card hover:shadow-card-hover transition-all duration-300 p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center`}>
                    <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${service.badgeClass}`}>
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-playfair text-xl font-bold text-brand-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-7 flex-1">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-brand-accent" strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-brand-light">
                  <Link
                    href={service.cta.href}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-brand-accent rounded-xl hover:bg-brand-accent-dark active:scale-[0.97] transition-all duration-200"
                  >
                    {service.cta.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="#richiedi"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-brand-navy border border-brand-light rounded-xl hover:border-brand-accent hover:text-brand-accent transition-all duration-200"
                  >
                    Richiedi info
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FormSection() {
  return (
    <section id="richiedi" className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">
                Contattaci
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy text-balance mb-5">
                Parliamo della tua situazione
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Compila il modulo con la tua richiesta. Un consulente ti risponderà entro 24 ore per un'analisi gratuita e senza impegno.
              </p>
              <div className="p-5 bg-brand-navy rounded-2xl text-white">
                <p className="text-sm font-medium mb-1">Preferisci scrivere direttamente?</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-gold text-sm hover:underline">
                  WhatsApp: +39 351 5042449
                </a>
                <p className="mt-2 text-xs text-gray-400">
                  <a href="mailto:info@finanziaora.io" className="hover:text-gray-300 transition-colors">
                    info@finanziaora.io
                  </a>
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-3xl border border-brand-light shadow-card p-8 lg:p-10"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function PrivatiPage() {
  return (
    <>
      <PrivatiHero />
      <ServicesSection />
      <FormSection />
    </>
  )
}
