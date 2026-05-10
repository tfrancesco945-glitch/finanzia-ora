'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { Lock, FileText, Bell, TrendingUp, Upload, ChevronRight } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const mockDocs = ['Documento di identità', 'Busta paga — Aprile', 'Estratto conto']
const mockNotifications = [
  { label: 'Pratica in lavorazione', color: 'bg-yellow-400' },
  { label: 'Nuovi documenti richiesti', color: 'bg-brand-accent' },
]

export default function AreaRiservataTeaser() {
  return (
    <section className="bg-[#001a18] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-xs font-semibold text-brand-gold">
                In arrivo
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-playfair text-3xl md:text-4xl font-bold text-white leading-tight text-balance mb-5"
            >
              La tua pratica,{' '}
              <span className="text-brand-gold">sempre sotto controllo</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed mb-8 max-w-md">
              Monitora lo stato della tua pratica, carica documenti in modo sicuro e rimani aggiornato in tempo reale dalla tua area personale dedicata.
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-4 mb-10">
              {[
                { icon: TrendingUp, text: 'Stato pratica in tempo reale' },
                { icon: Upload, text: 'Caricamento documenti sicuro' },
                { icon: Bell, text: 'Notifiche e aggiornamenti dedicati' },
                { icon: Lock, text: 'Accesso protetto e riservato' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-gray-300">
                  <Icon className="w-4 h-4 text-brand-gold shrink-0" />
                  {text}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <Link
                href="/area-riservata"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-brand-navy bg-brand-gold rounded-xl hover:bg-amber-400 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-amber-600/20"
              >
                <Lock className="w-4 h-4" />
                Accedi all&apos;area riservata
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Mock dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-3xl bg-brand-accent/10 blur-2xl scale-110" />

            {/* Dashboard card */}
            <div className="relative bg-[#001f20] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Titlebar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.07] bg-white/[0.03]">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-brand-gold" />
                  <span className="text-xs font-medium text-gray-300">Area Riservata — Finanzia Ora</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
              </div>

              <div className="p-6 space-y-5">
                {/* Welcome row */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Benvenuto</p>
                    <p className="text-sm font-semibold text-white">Mario Rossi</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center text-xs font-bold text-brand-accent">
                    MR
                  </div>
                </div>

                {/* Practice status */}
                <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-400">Stato pratica</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/15 text-yellow-400 font-medium">
                      In lavorazione
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Mutuo Prima Casa</span>
                      <span className="text-brand-gold">65%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
                      <div className="h-full w-[65%] bg-gradient-to-r from-brand-accent to-brand-gold rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-400">Documenti caricati</span>
                    <span className="text-xs text-brand-accent flex items-center gap-1 cursor-pointer hover:underline">
                      Gestisci <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                  <div className="space-y-2">
                    {mockDocs.map((doc) => (
                      <div
                        key={doc}
                        className="flex items-center gap-3 px-3 py-2 bg-white/[0.03] rounded-lg border border-white/[0.05]"
                      >
                        <FileText className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                        <span className="text-xs text-gray-400">{doc}</span>
                        <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400">
                          ✓
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notifications */}
                <div>
                  <span className="text-xs font-medium text-gray-400 block mb-2">
                    Notifiche recenti
                  </span>
                  <div className="space-y-2">
                    {mockNotifications.map((n) => (
                      <div
                        key={n.label}
                        className="flex items-center gap-2.5 px-3 py-2 bg-white/[0.03] rounded-lg"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${n.color}`} />
                        <span className="text-xs text-gray-400">{n.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
