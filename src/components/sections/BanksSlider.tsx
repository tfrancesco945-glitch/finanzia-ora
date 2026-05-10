'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

const banks = [
  { name: 'Intesa Sanpaolo', domain: 'intesasanpaolo.com' },
  { name: 'UniCredit', domain: 'unicredit.it' },
  { name: 'BNL', domain: 'bnl.it' },
  { name: 'Monte dei Paschi', domain: 'mps.it' },
  { name: 'BPER Banca', domain: 'bper.it' },
  { name: 'Credem', domain: 'credem.it' },
  { name: 'FinecoBank', domain: 'finecobank.com' },
  { name: 'Mediolanum', domain: 'bancamediolanum.it' },
  { name: 'Banco Sella', domain: 'bancasella.it' },
  { name: 'Carige', domain: 'carige.it' },
  { name: 'Banco BPM', domain: 'bancobpm.it' },
  { name: 'ING Italia', domain: 'ing.it' },
  { name: 'Deutsche Bank', domain: 'db.com' },
  { name: 'Revolut', domain: 'revolut.com' },
  { name: 'Qonto', domain: 'qonto.com' },
]

function BankLogo({ domain, name }: { domain: string; name: string }) {
  const [logoError, setLogoError] = React.useState(false)

  return (
    <>
      {!logoError ? (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={`${name} logo`}
          className="h-12 object-contain"
          onError={() => setLogoError(true)}
        />
      ) : (
        <span className="text-xs font-semibold text-gray-600 text-center px-2">{name}</span>
      )}
    </>
  )
}

export default function BanksSlider() {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy mb-3">
            Le banche con cui lavoriamo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Accesso a 15+ istituti bancari convenzionati per offrirti le migliori soluzioni finanziarie
          </p>
        </motion.div>

        {/* Slider container */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -2000] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            {/* First set */}
            {banks.map((bank, idx) => (
              <motion.div
                key={`${bank.name}-1-${idx}`}
                className="flex-shrink-0 w-48"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-32 flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                  <BankLogo domain={bank.domain} name={bank.name} />
                </div>
              </motion.div>
            ))}

            {/* Duplicate set for seamless loop */}
            {banks.map((bank, idx) => (
              <motion.div
                key={`${bank.name}-2-${idx}`}
                className="flex-shrink-0 w-48"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-32 flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                  <BankLogo domain={bank.domain} name={bank.name} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent-light border border-brand-accent/20">
            <span className="text-lg">✨</span>
            <p className="text-sm font-medium text-brand-navy">
              Trovi sempre la banca più conveniente per te
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
