'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/393515042449'

export default function FinalCTA() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden bg-gradient-to-br from-[#001a18] to-[#001e1e] rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center"
        >
          {/* Background accents */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,179,136,0.15),transparent)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-xs font-semibold text-brand-gold mb-6"
            >
              Consulenza gratuita e senza impegno
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-5"
            >
              Inizia oggi.{' '}
              <span className="text-brand-gold">È gratuito.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
              className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Parla con il nostro consulente, confronta le offerte e trova la soluzione giusta. Senza costi nascosti.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand-accent rounded-xl hover:bg-brand-accent-dark active:scale-[0.97] transition-all duration-200 shadow-lg shadow-brand-accent/30 w-full sm:w-auto justify-center"
              >
                Richiedi consulenza
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/40 rounded-xl hover:bg-[#25D366]/18 active:scale-[0.97] transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <WhatsAppIcon />
                Scrivici su WhatsApp
              </a>
            </motion.div>

            {/* Bottom trust row */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 text-xs text-gray-500 flex flex-wrap items-center justify-center gap-4"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                Nessun costo per la consulenza
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                Risposta entro 24 ore
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                Trattamento dati in conformità GDPR
              </span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
