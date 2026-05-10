'use client'

import { motion } from 'framer-motion'
import { LayoutGrid, ClipboardList, MessageSquare, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: LayoutGrid,
    title: 'Scegli il prodotto',
    description: 'Seleziona il tipo di finanziamento più adatto alla tua situazione tra le nostre categorie.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Compila i dati',
    description: 'Inserisci le informazioni essenziali. Il nostro team le analizza in modo riservato.',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Valutiamo insieme',
    description: 'Un consulente ti contatta per analizzare la tua posizione e confrontare le offerte disponibili.',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Troviamo la soluzione',
    description: 'Ottieni la proposta più conveniente. Ti seguiamo fino alla firma e oltre.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-brand-light py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-3">
            Come funziona
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy text-balance">
            Semplice, veloce, trasparente
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            In quattro passi ti accompagniamo dal primo contatto alla firma.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-[2.75rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center"
              >
                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-[1.375rem] top-[3.5rem] bottom-[-2rem] w-px bg-gradient-to-b from-brand-accent/30 to-transparent" />
                )}

                {/* Icon wrapper */}
                <div className="relative shrink-0">
                  <div className="w-11 h-11 rounded-full bg-white border-2 border-brand-light shadow-sm flex items-center justify-center z-10 relative">
                    <step.icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-accent flex items-center justify-center text-[9px] font-bold text-white z-20">
                    {step.number.replace('0', '')}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:mt-6 lg:px-2">
                  <h3 className="font-semibold text-brand-navy mb-2 text-[0.95rem]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
