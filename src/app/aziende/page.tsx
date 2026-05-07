'use client'

import { motion, type Variants } from 'framer-motion'
import {
  BarChart2, Banknote, TrendingUp,
  Check, ArrowRight, ChevronDown, Building2,
} from 'lucide-react'
import BusinessForm from '@/components/forms/BusinessForm'

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
    icon: BarChart2,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    tag: 'Credito aziendale',
    tagColor: 'bg-blue-50 text-blue-700',
    title: 'Credito alle imprese',
    description:
      'Accesso facilitato al credito bancario per PMI, imprese individuali e società. Analizziamo la tua situazione e identifichiamo le linee di credito più adatte alla tua struttura aziendale.',
    bullets: [
      'Fidi bancari e linee di credito rotativo',
      'Finanziamenti a medio-lungo termine',
      'Mutui ipotecari commerciali',
      'Valutazione del merito creditizio',
    ],
  },
  {
    icon: Banknote,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    tag: 'Liquidità',
    tagColor: 'bg-emerald-50 text-emerald-700',
    title: 'Liquidità aziendale',
    description:
      'Soluzioni rapide per far fronte a esigenze di liquidità operativa: smobilizzo crediti, anticipo fatture e finanziamenti a breve termine per continuare a operare senza interruzioni.',
    bullets: [
      'Anticipo fatture e ricevute bancarie',
      'Smobilizzo crediti commerciali',
      'Finanziamenti bridge a breve termine',
      'Soluzioni per stagionalità e picchi',
    ],
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    tag: 'Finanziamenti agevolati',
    tagColor: 'bg-violet-50 text-violet-700',
    title: 'Finanziamenti e incentivi',
    description:
      'Accesso ai principali strumenti di finanza agevolata: fondi europei, Mediocredito Centrale, Cassa Depositi e Prestiti e bandi regionali per investimenti e sviluppo.',
    bullets: [
      'Fondi FESR e Horizon Europe',
      'Garanzie Mediocredito Centrale',
      'Nuova Sabatini e incentivi 4.0',
      'Bandi regionali e contributi a fondo perduto',
    ],
  },
]

const whyUs = [
  'Analisi finanziaria gratuita e senza impegno',
  'Accesso a 12-15 istituti bancari convenzionati',
  'Gestione completa dell\'iter creditizio',
  'Supporto nella preparazione del dossier aziendale',
  'Trattamento dati riservato e conforme GDPR',
  'Risposta entro 24 ore lavorative',
]

function AziendeHero() {
  return (
    <section className="relative min-h-[62vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#060f1e] via-brand-navy to-[#0d2647]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_70%_15%,rgba(37,99,235,0.13),transparent)]" />
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
              <Building2 className="w-3.5 h-3.5" />
              Soluzioni per Imprese
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-playfair text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] tracking-tight text-balance mb-5">
            Il credito che{' '}
            <span className="text-brand-gold italic">fa crescere</span>{' '}
            la tua impresa
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base md:text-lg text-gray-300/90 leading-relaxed mb-10 max-w-xl">
            Supporto professionale per PMI, imprenditori e professionisti. Accesso al credito bancario, liquidità operativa e finanziamenti agevolati con un consulente dedicato.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a href="#richiedi" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-brand-accent rounded-xl hover:bg-blue-700 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-blue-600/25">
              Richiedi valutazione gratuita
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-white/[0.08] border border-white/[0.18] rounded-xl hover:bg-white/[0.13] transition-all">
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
            I nostri servizi
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy text-balance">
            Soluzioni creditizie per le imprese
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Dalla liquidità operativa ai finanziamenti agevolati — un partner finanziario al tuo fianco.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-7"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeUp}>
              <div className="bg-white rounded-2xl border border-brand-light shadow-card hover:shadow-card-hover transition-all duration-300 p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center`}>
                    <s.icon className={`w-5 h-5 ${s.iconColor}`} />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${s.tagColor}`}>
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-brand-navy mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{s.description}</p>
                <ul className="space-y-2.5 mb-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-brand-accent" strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#richiedi"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-accent rounded-xl hover:bg-blue-700 active:scale-[0.97] transition-all"
                >
                  Richiedi informazioni
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function WhyUsSection() {
  return (
    <section className="bg-brand-light py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">
              Perché sceglierci
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy text-balance mb-5">
              Il consulente che conosce il mercato bancario
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Con oltre 10 anni di esperienza nel settore del credito e convenzioni con 12-15 istituti bancari, siamo in grado di identificare rapidamente la soluzione più adatta alla tua impresa — risparmiandoti tempo, burocrazia e rifiuti.
            </p>
          </motion.div>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-3"
          >
            {whyUs.map((item) => (
              <motion.li key={item} variants={fadeUp} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 border border-brand-light shadow-sm">
                <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                </span>
                <span className="text-sm text-gray-700">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}

function FormSection() {
  return (
    <section id="richiedi" className="bg-white py-24">
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
                Richiedi valutazione
              </p>
              <h2 className="font-playfair text-3xl font-bold text-brand-navy text-balance mb-5">
                Raccontaci la tua impresa
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Compila il modulo con i dati della tua azienda. Analizzeremo la situazione e ti contatteremo entro 24 ore con una prima valutazione gratuita.
              </p>
              <div className="p-5 bg-brand-navy rounded-2xl text-white">
                <p className="text-sm font-medium mb-1">Hai urgenza? Chiamaci subito.</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-gold text-sm hover:underline block">
                  WhatsApp: +39 351 5042449
                </a>
                <a href="mailto:info@finanziaora.io" className="text-gray-400 text-xs mt-1 hover:text-gray-300 transition-colors block">
                  info@finanziaora.io
                </a>
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
            <BusinessForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function AziendePage() {
  return (
    <>
      <AziendeHero />
      <ServicesSection />
      <WhyUsSection />
      <FormSection />
    </>
  )
}
