'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight, User, Briefcase } from 'lucide-react'

const servicesPrivati = [
  'Mutuo prima casa e ristrutturazione',
  'Cessione del Quinto dello stipendio',
  'Prestiti personali e finalizzati',
  'Gestione e risanamento CRIF',
  'Consolidamento debiti',
]

const servicesAziende = [
  'Credito alle imprese e PMI',
  'Liquidità aziendale rapida',
  'Finanziamenti agevolati',
  'Ristrutturazione del debito',
  'Leasing e noleggio a lungo termine',
]

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

interface ServiceBlockProps {
  icon: React.ElementType
  tag: string
  tagColor: string
  title: string
  description: string
  services: string[]
  checkColor: string
  ctaLabel: string
  ctaHref: string
  ctaClass: string
  imageUrl?: string
  delay?: number
}

function ServiceBlock({
  icon: Icon,
  tag,
  tagColor,
  title,
  description,
  services,
  checkColor,
  ctaLabel,
  ctaHref,
  ctaClass,
  imageUrl,
  delay = 0,
}: ServiceBlockProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay }}
      className="bg-white rounded-2xl border border-brand-light shadow-card overflow-hidden flex flex-col"
    >
      {imageUrl && (
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />
        </div>
      )}
      <div className="p-8 lg:p-10 mb-6">
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold mb-5 ${tagColor}`}>
          <Icon className="w-3.5 h-3.5" />
          {tag}
        </div>
        <h3 className="font-playfair text-2xl font-bold text-brand-navy mb-3">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>

      <ul className="space-y-3 mb-8 flex-1 px-6">
        {services.map((service) => (
          <li key={service} className="flex items-center gap-3">
            <span className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${checkColor}`}>
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </span>
            <span className="text-sm text-gray-700">{service}</span>
          </li>
        ))}
      </ul>

      <Link href={ctaHref} className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200 active:scale-[0.97] ${ctaClass}`}>
        {ctaLabel}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  )
}

export default function ServicesPreview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-3">
            I nostri servizi
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy text-balance">
            Soluzioni per ogni esigenza
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Dalle famiglie alle imprese, offriamo supporto professionale in ogni fase del percorso finanziario.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <ServiceBlock
            icon={User}
            tag="Privati"
            tagColor="bg-brand-accent-light text-brand-accent"
            title="Per le persone"
            description="Accesso facilitato al credito per privati, dipendenti, pensionati e lavoratori autonomi. Confrontiamo le migliori offerte delle banche convenzionate."
            services={servicesPrivati}
            checkColor="bg-brand-accent"
            ctaLabel="Scopri i servizi Privati"
            ctaHref="/privati"
            ctaClass="text-white bg-brand-accent hover:bg-brand-accent-dark shadow-md shadow-brand-accent/20"
            imageUrl="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <ServiceBlock
            icon={Briefcase}
            tag="Aziende"
            tagColor="bg-emerald-50 text-emerald-700"
            title="Per le imprese"
            description="Supporto creditizio completo per PMI, professionisti e imprenditori. Dalla liquidità operativa ai finanziamenti agevolati."
            services={servicesAziende}
            checkColor="bg-emerald-600"
            ctaLabel="Scopri i servizi Aziende"
            ctaHref="/aziende"
            ctaClass="text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-500/20"
            imageUrl="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
            delay={0.08}
          />
        </motion.div>
      </div>
    </section>
  )
}
