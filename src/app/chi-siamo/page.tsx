'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Award, Building2, MapPin, Users, Phone, Mail,
  CheckCircle2, Quote, ArrowRight,
} from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/393515042449'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const stats = [
  { icon: Award, value: '10+', label: 'anni di esperienza', desc: 'nel settore del credito' },
  { icon: Building2, value: '12-15', label: 'banche convenzionate', desc: 'per le migliori offerte' },
  { icon: MapPin, value: '2', label: 'sedi operative', desc: 'Caldiero VR e Mantova MN' },
  { icon: Users, value: '100+', label: 'clienti seguiti', desc: 'ogni anno con successo' },
]

const values = [
  {
    title: 'Indipendenza',
    description: 'Non siamo legati a nessuna banca. Confrontiamo le offerte del mercato senza conflitti d\'interesse, sempre nell\'interesse del cliente.',
  },
  {
    title: 'Trasparenza',
    description: 'Ogni condizione, ogni costo, ogni clausola viene spiegata con chiarezza. Nessuna sorpresa al momento della firma.',
  },
  {
    title: 'Personalizzazione',
    description: 'Ogni cliente ha una storia unica. Non vendiamo prodotti standard: costruiamo soluzioni su misura per la situazione specifica di ognuno.',
  },
  {
    title: 'Continuità',
    description: 'Il nostro rapporto non finisce alla firma. Monitoriamo il mercato e rimaniamo disponibili per qualsiasi esigenza futura.',
  },
]

const sedi = [
  {
    city: 'Caldiero',
    province: 'VR',
    area: 'Verona e Provincia',
    note: 'Sede principale',
    email: 'info@finanziaora.io',
    phone: '+39 351 5042449',
  },
  {
    city: 'Mantova',
    province: 'MN',
    area: 'Mantova e Provincia',
    note: 'Sede operativa',
    email: 'info@finanziaora.io',
    phone: '+39 351 5042449',
  },
]

function ChiSiamoHero() {
  return (
    <section className="relative min-h-[52vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a18] via-[#003333] to-[#001e1e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_65%_15%,rgba(0,179,136,0.13),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.07] border border-white/[0.12] text-xs font-medium text-brand-gold">
              Chi siamo
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-playfair text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight text-balance mb-5">
            Una consulenza{' '}
            <span className="text-brand-gold italic">costruita sulla fiducia</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base md:text-lg text-gray-300/90 leading-relaxed max-w-xl">
            Finanzia Ora nasce dalla convinzione che ogni persona meriti un consulente del credito indipendente, esperto e trasparente al proprio fianco.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function BioSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Nelson Secco — Consulente del Credito"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-3 bg-white rounded-2xl shadow-card border border-brand-light p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-navy">Iscritto OAM</p>
                <p className="text-[10px] text-gray-500">Mediatore Creditizio</p>
              </div>
            </div>
          </motion.div>

          {/* Right: bio text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">
              Il fondatore
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Nelson Secco
            </h2>

            {/* Pull quote */}
            <div className="relative pl-5 mb-6 border-l-2 border-brand-gold">
              <Quote className="w-4 h-4 text-brand-gold/40 absolute -left-2 -top-1 fill-brand-gold/20" />
              <p className="text-gray-600 italic text-base leading-relaxed">
                &ldquo;Il mio lavoro non è vendere un prodotto bancario. È trovare la soluzione giusta per ogni persona, in completa trasparenza.&rdquo;
              </p>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                Nelson Secco è Consulente del Credito e Mediatore Creditizio iscritto all&apos;OAM (Organismo Agenti e Mediatori), con oltre 10 anni di esperienza nel settore finanziario.
              </p>
              <p>
                Dopo anni di esperienza all&apos;interno di istituti bancari, ha fondato Finanzia Ora con l&apos;obiettivo di offrire ai privati e alle imprese un accesso equo e informato al credito, senza intermediari inutili e senza conflitti di interesse.
              </p>
              <p>
                Grazie alle convenzioni attive con 12-15 istituti bancari, può confrontare le offerte del mercato e selezionare quella più adatta alla situazione specifica di ogni cliente — sia in termini di tasso che di condizioni contrattuali.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Mediatore Creditizio OAM', 'Consulente Mutui', 'Credito alle Imprese', '10+ anni esperienza'].map((tag) => (
                <span key={tag} className="text-xs font-medium px-3 py-1.5 bg-brand-light text-brand-navy rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="bg-brand-light py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map(({ icon: Icon, value, label, desc }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-brand-light shadow-card text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center mx-auto mb-4">
                <Icon className="w-5 h-5 text-brand-accent" />
              </div>
              <p className="font-playfair text-3xl font-bold text-brand-navy mb-1">{value}</p>
              <p className="text-sm font-semibold text-gray-700">{label}</p>
              <p className="text-xs text-gray-400 mt-1">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ValuesSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1"
          >
            <Image
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Consulenza professionale"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Header + Values grid */}
          <motion.div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-3">
                La nostra filosofia
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy text-balance">
                I valori che guidano il nostro lavoro
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {values.map((v, i) => (
                <motion.div key={v.title} variants={fadeUp} className="flex gap-4 p-4 bg-brand-light rounded-2xl border border-brand-light/50">
                  <span className="font-playfair text-3xl font-bold text-brand-accent/15 leading-none shrink-0 mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1 text-sm">{v.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{v.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SediSection() {
  return (
    <section className="bg-[#001a18] py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-3">
            Dove siamo
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white text-balance">
            Due sedi, un unico approccio
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Operiamo su appuntamento a Caldiero (VR) e Mantova (MN), con disponibilità anche da remoto per tutta Italia.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {sedi.map((sede) => (
            <motion.div key={sede.city} variants={fadeUp} className="bg-white/[0.05] border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-white">{sede.city}</h3>
                  <p className="text-xs text-gray-500">{sede.note}</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{sede.area} · Provincia di {sede.province}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    {sede.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <a href={`mailto:${sede.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {sede.email}
                  </a>
                </div>
                <p className="text-xs text-gray-600 pt-2 border-t border-white/[0.07]">
                  Su appuntamento · Lun–Ven 9:00–18:00
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-brand-navy bg-brand-gold rounded-xl hover:bg-amber-400 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-amber-600/20"
          >
            Contattaci per un appuntamento
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ConvenzioniSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-3">
            Convenzioni bancarie
          </p>
          <h2 className="font-playfair text-3xl font-bold text-brand-navy mb-5">
            12–15 istituti bancari convenzionati
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Lavoriamo con i principali istituti di credito italiani e internazionali operanti sul territorio. Questo ci permette di confrontare un ampio ventaglio di offerte e selezionare la più vantaggiosa per ogni cliente.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Banche retail', 'Istituti specializzati', 'Banche digitali', 'Casse di risparmio', 'Banche cooperative'].map((tag) => (
              <span key={tag} className="flex items-center gap-2 text-sm text-gray-700 px-4 py-2 rounded-full bg-brand-light border border-brand-light">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function ChiSiamoPage() {
  return (
    <>
      <ChiSiamoHero />
      <BioSection />
      <StatsSection />
      <ValuesSection />
      <ConvenzioniSection />
      <SediSection />
    </>
  )
}
