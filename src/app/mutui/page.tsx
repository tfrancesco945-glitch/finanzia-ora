'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Users, Home, Percent, ShieldCheck, UserCheck,
  Banknote, CreditCard, ArrowLeftRight,
  ClipboardList, BarChart2, FileCheck2, PhoneCall,
  ArrowRight, ChevronDown,
} from 'lucide-react'
import MortgageForm from '@/components/forms/MortgageForm'

const WHATSAPP_URL = 'https://wa.me/393515042449'

// ── Data ────────────────────────────────────────────────────────────────────

const mortgageTypes = [
  {
    icon: Users,
    title: 'Mutui Under 36',
    description: 'Agevolazioni fiscali e accesso prioritario al Fondo di Garanzia Consap per giovani acquirenti.',
    badge: 'Under 36',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Home,
    title: 'Prima Casa',
    description: 'Mutuo per l\'acquisto della prima abitazione con le migliori condizioni di mercato disponibili.',
    badge: 'Classico',
    badgeClass: 'bg-brand-accent-light text-brand-accent border-brand-accent/20',
    iconBg: 'bg-brand-accent-light',
    iconColor: 'text-brand-accent',
  },
  {
    icon: Percent,
    title: 'Mutuo 100%',
    description: 'Finanziamento dell\'intero valore dell\'immobile. Per chi non dispone di liquidità iniziale.',
    badge: 'Senza anticipo',
    badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: ShieldCheck,
    title: 'Dipendenti Pubblici',
    description: 'Condizioni dedicate per lavoratori statali, forze dell\'ordine e dipendenti del settore pubblico.',
    badge: 'Dedicato',
    badgeClass: 'bg-violet-50 text-violet-700 border-violet-200',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: UserCheck,
    title: 'Mutui Privati',
    description: 'Soluzioni flessibili per lavoratori autonomi, liberi professionisti e titolari di partita IVA.',
    badge: 'Autonomi',
    badgeClass: 'bg-teal-50 text-teal-700 border-teal-200',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: Banknote,
    title: 'Mutuo Liquidità',
    description: 'Accedi al valore del tuo immobile senza venderlo. Liquidità immediata per qualsiasi esigenza.',
    badge: 'Liquidità',
    badgeClass: 'bg-orange-50 text-orange-700 border-orange-200',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: CreditCard,
    title: 'Mutuo Consolidamento',
    description: 'Riunisci più finanziamenti in un unico mutuo. Rata mensile ridotta, tasso più conveniente.',
    badge: 'Risparmio',
    badgeClass: 'bg-rose-50 text-rose-700 border-rose-200',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    icon: ArrowLeftRight,
    title: 'Surroghe',
    description: 'Trasferisci il mutuo alla banca più conveniente. Nessun costo, ottieni un tasso migliore.',
    badge: 'Trasferimento',
    badgeClass: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
]

const methodSteps = [
  {
    icon: ClipboardList,
    title: 'Analisi gratuita',
    description: 'Valutiamo la tua situazione creditizia, reddituale e patrimoniale senza alcun impegno. Identifichiamo subito le soluzioni percorribili.',
  },
  {
    icon: BarChart2,
    title: 'Confronto offerte',
    description: 'Selezioniamo le proposte migliori tra 12-15 banche convenzionate. Tassi, condizioni e costi a confronto, pensati per il tuo profilo.',
  },
  {
    icon: FileCheck2,
    title: 'Gestione pratica completa',
    description: 'Curiamo tutta la documentazione, i rapporti con la banca e con il perito. Tu firmi solo quando tutto è pronto.',
  },
  {
    icon: PhoneCall,
    title: 'Supporto post-stipula',
    description: 'Rimaniamo al tuo fianco anche dopo l\'erogazione. Monitoriamo il mercato per offrirti eventuali surroghe vantaggiose.',
  },
]

// ── Animation variants ───────────────────────────────────────────────────────

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

// ── Sections ─────────────────────────────────────────────────────────────────

function MutuiHero() {
  return (
    <section className="relative min-h-[62vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a18] via-[#003333] to-[#001e1e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_70%_20%,rgba(0,179,136,0.13),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.07] border border-white/[0.12] text-xs font-medium text-brand-gold">
              Consulenza Mutui
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-playfair text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] tracking-tight text-balance mb-5"
          >
            Mutui su misura{' '}
            <span className="text-brand-gold italic">per te</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base md:text-lg text-gray-300/90 leading-relaxed mb-10 max-w-xl">
            Confrontiamo le offerte di 12-15 banche convenzionate per trovare il mutuo con il tasso più conveniente. Un consulente esperto ti segue dall'analisi alla firma.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#richiedi"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-brand-accent rounded-xl hover:bg-brand-accent-dark active:scale-[0.97] transition-all duration-200 shadow-lg shadow-brand-accent/25"
            >
              Richiedi consulenza gratuita
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-white/[0.08] border border-white/[0.18] rounded-xl hover:bg-white/[0.13] active:scale-[0.97] transition-all duration-200"
            >
              Scrivici su WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#tipologie"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors"
        aria-label="Scorri in basso"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  )
}

function MortgageTypesSection() {
  return (
    <section id="tipologie" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-3">
            Tipologie
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy text-balance">
            Quale mutuo fa per te?
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Ogni situazione è unica. Scopri la soluzione più adatta al tuo profilo.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {mortgageTypes.map((type) => (
            <motion.div key={type.title} variants={fadeUp}>
              <a
                href="#richiedi"
                className="group flex flex-col h-full bg-white rounded-2xl p-6 border border-brand-light shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl ${type.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <type.icon className={`w-5 h-5 ${type.iconColor}`} />
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-1 rounded-full border ${type.badgeClass}`}>
                    {type.badge}
                  </span>
                </div>
                <h3 className="font-playfair text-lg font-bold text-brand-navy mb-2 leading-tight">
                  {type.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">{type.description}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Scopri di più <ArrowRight className="w-3 h-3" />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function OurMethodSection() {
  return (
    <section className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-3">
            Il nostro metodo
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy text-balance">
            Con Finanzia Ora non sei mai solo
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Ti affianchiamo in ogni fase: dall'analisi iniziale alla firma dal notaio e oltre.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {methodSteps.map((step, i) => (
            <motion.div key={step.title} variants={fadeUp}>
              <div className="bg-white rounded-2xl p-7 border border-brand-light shadow-card h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <span className="font-playfair text-2xl font-bold text-brand-navy/20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-semibold text-brand-navy mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
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
    <section id="richiedi" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left column: intro */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">
                Richiedi informazioni
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy text-balance mb-5">
                Parliamo del tuo progetto
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Compila il form con i dettagli della tua situazione. Un nostro consulente ti ricontatterà entro 24 ore lavorative per un'analisi gratuita.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Consulenza completamente gratuita',
                  'Nessun impegno, nessun costo',
                  'Risposta entro 24 ore lavorative',
                  'Confronto tra 12-15 banche convenzionate',
                  'Totale riservatezza dei tuoi dati',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="p-5 bg-[#001a18] rounded-2xl text-white">
                <p className="text-sm font-medium mb-1">Preferisci chiamarci?</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold text-sm hover:underline"
                >
                  WhatsApp: +39 351 5042449
                </a>
                <p className="text-gray-400 text-xs mt-1">Lun-Ven 9:00 – 18:00</p>
              </div>
            </motion.div>
          </div>

          {/* Right column: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-3xl border border-brand-light shadow-card p-8 lg:p-10"
          >
            <MortgageForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MutuiCTA() {
  return (
    <section className="bg-brand-light py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy mb-4 text-balance">
            Hai domande sui mutui?
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            Contattaci direttamente — rispondiamo solitamente entro pochi minuti.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-brand-accent rounded-xl hover:bg-brand-accent-dark active:scale-[0.97] transition-all duration-200"
            >
              Vai ai contatti
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-[#25D366] border border-[#25D366] rounded-xl hover:bg-[#25D366]/8 active:scale-[0.97] transition-all duration-200"
            >
              <WhatsAppIcon />
              WhatsApp diretto
            </a>
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

function VisualSection() {
  return (
    <section className="bg-brand-light py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-80 lg:h-[420px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Famiglia nella nuova casa"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">
              Il tuo percorso
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy mb-5 text-balance">
              Dal sogno alla chiave in mano
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Ti seguiamo in ogni fase del tuo percorso: dalla pre-valutazione iniziale alla firma dal notaio. Accesso prioritario alle migliori offerte di 15 banche convenzionate, con tassi e condizioni pensate per il tuo profilo specifico.
            </p>
            <ul className="space-y-3">
              {[
                'Analisi creditizia personalizzata',
                'Confronto tra 12-15 banche partner',
                'Gestione documentazione completa',
                'Supporto fino alla firma e oltre',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function MutuiPage() {
  return (
    <>
      <MutuiHero />
      <MortgageTypesSection />
      <OurMethodSection />
      <VisualSection />
      <FormSection />
      <MutuiCTA />
    </>
  )
}
