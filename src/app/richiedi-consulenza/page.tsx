'use client'

import { motion, type Variants } from 'framer-motion'
import ConsultationForm from '@/components/forms/ConsultationForm'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-brand-light via-blue-50 to-white border-b border-brand-light py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">
            ✨ Consulenza Personalizzata
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-playfair text-4xl md:text-5xl font-bold text-brand-navy text-balance mb-6 leading-tight">
            Trova la soluzione perfetta per te in 2 minuti
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed">
            Rispondi a poche domande semplici e ti mostreremo subito le migliori opzioni finanziarie per la tua situazione. Zero costi, zero impegni — solo consulenza seria.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function FormSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-brand-light shadow-card p-8 lg:p-12"
        >
          <div className="mb-10">
            <h2 className="font-playfair text-3xl font-bold text-brand-navy mb-3">
              La tua richiesta
            </h2>
            <p className="text-gray-600">
              Compilando questo modulo intelligente, i nostri consulenti capiranno esattamente quello che ti serve. Ti manderemo un recap su WhatsApp e sarai pronto a iniziare!
            </p>
          </div>

          <ConsultationForm />
        </motion.div>

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="bg-brand-light rounded-2xl p-6 border border-brand-light">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="font-semibold text-brand-navy text-sm mb-1">Super veloce</h3>
            <p className="text-xs text-gray-600">Bastano 2-3 minuti per compilare tutto</p>
          </div>
          <div className="bg-brand-light rounded-2xl p-6 border border-brand-light">
            <div className="text-2xl mb-3">🔒</div>
            <h3 className="font-semibold text-brand-navy text-sm mb-1">Sicuro</h3>
            <p className="text-xs text-gray-600">I tuoi dati sono protetti secondo GDPR</p>
          </div>
          <div className="bg-brand-light rounded-2xl p-6 border border-brand-light">
            <div className="text-2xl mb-3">💬</div>
            <h3 className="font-semibold text-brand-navy text-sm mb-1">Diretto</h3>
            <p className="text-xs text-gray-600">Ti contatteremo subito su WhatsApp</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      q: 'Quanto tempo occorre?',
      a: 'Il form completo richiede 2-3 minuti. Dopo l\'invio, un consulente ti contatterà entro 24 ore.',
    },
    {
      q: 'Mi chiederete soldi subito?',
      a: 'No, assolutamente! La consulenza iniziale è completamente gratuita. Deciderai tu se procedere.',
    },
    {
      q: 'Quali sono i vostri orari?',
      a: 'Siamo disponibili da lunedì a venerdì dalle 9:00 alle 18:00. Su WhatsApp puoi scrivere quando vuoi!',
    },
    {
      q: 'Posso parlare con un consulente subito?',
      a: 'Certo! Clicca direttamente su WhatsApp dal menu: troverai il nostro numero sempre disponibile.',
    },
  ]

  return (
    <section className="bg-brand-light py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl font-bold text-brand-navy mb-4">
            Domande frequenti
          </h2>
          <p className="text-gray-600">
            Puoi contattarci direttamente: siamo qui per aiutarti
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-card transition-shadow"
            >
              <h3 className="font-semibold text-brand-navy mb-2 flex items-start gap-3">
                <span className="text-brand-gold text-lg shrink-0">Q</span>
                {faq.q}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed ml-8">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function RichiediConsulenzaPage() {
  return (
    <>
      <HeroSection />
      <FormSection />
      <FAQSection />
    </>
  )
}
