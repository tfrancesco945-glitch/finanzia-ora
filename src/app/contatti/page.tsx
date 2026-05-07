'use client'

import { motion, type Variants } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'

const WHATSAPP_URL = 'https://wa.me/393515042449'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@finanziaora.io',
    href: 'mailto:info@finanziaora.io',
    color: 'text-brand-accent bg-blue-50',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+39 351 5042449',
    href: WHATSAPP_URL,
    color: 'text-[#25D366] bg-emerald-50',
    external: true,
  },
  {
    icon: Clock,
    label: 'Orari',
    value: 'Lun–Ven · 9:00–18:00',
    href: null,
    color: 'text-brand-gold bg-amber-50',
  },
]

const sedi = [
  { city: 'Caldiero', province: 'VR', area: 'Verona e Provincia', note: 'Sede principale' },
  { city: 'Mantova', province: 'MN', area: 'Mantova e Provincia', note: 'Sede operativa' },
]

function ContattiHero() {
  return (
    <section className="bg-brand-light border-b border-brand-light py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">
            Contatti
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-playfair text-4xl md:text-5xl font-bold text-brand-navy text-balance mb-4 leading-tight">
            Parliamo insieme
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base text-gray-500 leading-relaxed">
            Scrivici o chiamaci — un consulente risponde entro 24 ore lavorative per un&apos;analisi gratuita e senza impegno.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function ContattiMain() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-8 lg:sticky lg:top-28">
            {/* Contact items */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-4"
            >
              <motion.h2 variants={fadeUp} className="font-playfair text-2xl font-bold text-brand-navy mb-6">
                Come raggiungerci
              </motion.h2>

              {contactItems.map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-light shadow-sm hover:shadow-card hover:border-gray-200 transition-all duration-200 group"
                    >
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-400 mb-0.5">{item.label}</p>
                        <p className="text-sm font-semibold text-brand-navy group-hover:text-brand-accent transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-light">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-400 mb-0.5">{item.label}</p>
                        <p className="text-sm font-semibold text-brand-navy">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Sedi */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-playfair text-lg font-bold text-brand-navy mb-4">Le nostre sedi</h3>
              <div className="space-y-3">
                {sedi.map((sede) => (
                  <div key={sede.city} className="flex items-start gap-3 p-4 rounded-2xl bg-brand-light border border-brand-light">
                    <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">
                        {sede.city} <span className="font-normal text-gray-500">({sede.province})</span>
                      </p>
                      <p className="text-xs text-gray-500">{sede.area} · {sede.note}</p>
                      <p className="text-xs text-gray-400 mt-1">Su appuntamento</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-playfair text-lg font-bold text-brand-navy mb-4">Seguici sui social</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-brand-light border border-brand-light hover:border-brand-accent/30 hover:bg-white text-gray-600 hover:text-brand-navy transition-all text-sm font-medium"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-brand-light border border-brand-light hover:border-brand-accent/30 hover:bg-white text-gray-600 hover:text-brand-navy transition-all text-sm font-medium"
                >
                  <FacebookIcon className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-3xl border border-brand-light shadow-card p-8 lg:p-10"
          >
            <div className="mb-8">
              <h2 className="font-playfair text-2xl font-bold text-brand-navy mb-2">
                Inviaci un messaggio
              </h2>
              <p className="text-sm text-gray-500">
                Compila il modulo e ti risponderemo entro 24 ore lavorative.
              </p>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export default function ContattiPage() {
  return (
    <>
      <ContattiHero />
      <ContattiMain />
    </>
  )
}
