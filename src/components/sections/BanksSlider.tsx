'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

const banks: { name: string; domain: string; localImage?: string; imgClassName?: string }[] = [
  { name: 'Intesa Sanpaolo', domain: 'intesasanpaolo.com', localImage: '/intesa-sanpaolo-logo-png_seeklogo-289432.png', imgClassName: 'h-20 object-contain' },
  { name: 'UniCredit', domain: 'unicredit.it', localImage: '/Unicredit_logo.svg.png' },
  { name: 'BNL', domain: 'bnl.it', localImage: '/Banca_Nazionale_del_Lavoro_logo_2022.png' },
  { name: 'Monte dei Paschi', domain: 'mps.it', localImage: '/monte-dei-paschi-di-siena-logo-png_seeklogo-94565.png', imgClassName: 'h-20 object-contain' },
  { name: 'BPER Banca', domain: 'bper.it', localImage: '/Logo BPER_sito istituzionale.jpg', imgClassName: 'h-20 object-contain' },
  { name: 'Credem', domain: 'credem.it', localImage: '/Credito_Emiliano_Logo.svg.png', imgClassName: 'h-20 object-contain' },
  { name: 'FinecoBank', domain: 'finecobank.com', localImage: '/FINECO_logo_ProWeb.png', imgClassName: 'h-20 object-contain' },
  { name: 'Mediolanum', domain: 'bancamediolanum.it', localImage: '/banca-mediolanum.png', imgClassName: 'h-20 object-contain' },
  { name: 'Banco Sella', domain: 'bancasella.it', localImage: '/Banca_Sella_Logo.svg.png', imgClassName: 'h-14 object-contain' },
  { name: 'Carige', domain: 'carige.it', localImage: '/banca-carige-logo-png_seeklogo-15920.png', imgClassName: 'h-32 object-contain' },
  { name: 'Banco BPM', domain: 'bancobpm.it', localImage: '/bmp_400x250.png', imgClassName: 'h-20 object-contain' },
  { name: 'ING Italia', domain: 'ing.it', localImage: '/ing_yswsfv.avif' },
  { name: 'Deutsche Bank', domain: 'db.com', localImage: '/Deutsche_Bank-Logo.svg.png', imgClassName: 'h-20 object-contain' },
  { name: 'Revolut', domain: 'revolut.com', localImage: '/Revolut-Logo.wine.svg', imgClassName: 'h-20 object-contain' },
  { name: 'Qonto', domain: 'qonto.com', localImage: '/quonto.png', imgClassName: 'h-16 object-contain' },
  { name: 'CiviBank (Gruppo Sparkasse)', domain: 'civibank.it', localImage: '/logo_civibank.png', imgClassName: 'h-16 object-contain' },
  { name: 'Sparkasse', domain: 'sparkasse.it', localImage: '/sparkasse-cassa-di-risparmio-logo-png_seeklogo-508334.png', imgClassName: 'h-28 object-contain' },
  { name: 'BCC Veneta', domain: 'bccveneta.it', localImage: '/LOGO_BCC_VENETA_COLORE_RGB-1024x299.png', imgClassName: 'h-12 object-contain' },
  { name: 'BCC Cassa di Orvieto', domain: 'cassaorvieto.it', localImage: '/cassa-di-risparmio-di-orvieto.webp', imgClassName: 'h-20 object-contain' },
  { name: 'Volksbank', domain: 'volksbank.it', localImage: '/volksbank-vector-logo.png', imgClassName: 'h-16 object-contain' },
  { name: 'Mediobanca Premier', domain: 'mediobancapremier.com', localImage: '/medio BANCA premier.jpeg', imgClassName: 'h-28 object-contain scale-[2.2]' },
  { name: 'EmilBanca', domain: 'emilbanca.it', localImage: '/EMILBANCA.png', imgClassName: 'h-16 object-contain' },
  { name: 'Banca Adria', domain: 'bancadria.it', localImage: '/BANCA ADRIA.png', imgClassName: 'h-20 object-contain' },
  { name: 'Banca Etica', domain: 'bancaetica.it', localImage: '/Logo-bancaetica.svg.png', imgClassName: 'h-16 object-contain' },
]

function BankLogo({ domain, name, localImage, imgClassName }: { domain: string; name: string; localImage?: string; imgClassName?: string }) {
  const [logoError, setLogoError] = React.useState(false)
  const cls = imgClassName ?? 'h-12 object-contain'

  if (localImage) {
    return (
      <img
        src={localImage}
        alt={`${name} logo`}
        className={cls}
      />
    )
  }

  return (
    <>
      {!logoError ? (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={`${name} logo`}
          className={cls}
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
            className="flex gap-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          >
            {/* First set */}
            {banks.map((bank, idx) => (
              <motion.div
                key={`${bank.name}-1-${idx}`}
                className="flex-shrink-0 w-48"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-32 flex flex-col items-center justify-center hover:shadow-lg transition-shadow overflow-hidden">
                  <BankLogo domain={bank.domain} name={bank.name} localImage={bank.localImage} imgClassName={bank.imgClassName} />
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
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-32 flex flex-col items-center justify-center hover:shadow-lg transition-shadow overflow-hidden">
                  <BankLogo domain={bank.domain} name={bank.name} localImage={bank.localImage} imgClassName={bank.imgClassName} />
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
