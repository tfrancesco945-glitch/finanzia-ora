'use client'

import { motion } from 'framer-motion'
import { ContextImageGallery } from './ContextImages'

export function MortgageContextSection() {
  const images = [
    {
      src: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Casa con giardino',
      title: 'Prima Casa',
    },
    {
      src: 'https://images.pexels.com/photos/1566252/pexels-photo-1566252.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Documenti e matita',
      title: 'Documentazione Completa',
    },
    {
      src: 'https://images.pexels.com/photos/3962631/pexels-photo-3962631.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Chiavi della casa',
      title: 'Pronto per il Rogito',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy mb-3">
            Il tuo mutuo, inizia da qui
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dalla ricerca alla firma — ti accompagniamo in ogni step verso la tua casa
          </p>
        </motion.div>

        <ContextImageGallery images={images} />
      </div>
    </section>
  )
}

export function PrivateContextSection() {
  const images = [
    {
      src: 'https://images.pexels.com/photos/6863906/pexels-photo-6863906.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Donna che pianifica',
      title: 'Pianificazione Finanziaria',
    },
    {
      src: 'https://images.pexels.com/photos/3962631/pexels-photo-3962631.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Soldi e calcolatrice',
      title: 'Gestione dei Risparmi',
    },
    {
      src: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Uomo che analizza dati',
      title: 'Consulenza Esperti',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy mb-3">
            Soluzioni pensate per te
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mutui, prestiti, investimenti — tutto quello che serve per la tua serenità finanziaria
          </p>
        </motion.div>

        <ContextImageGallery images={images} />
      </div>
    </section>
  )
}

export function BusinessContextSection() {
  const images = [
    {
      src: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Team che lavora',
      title: 'Crescita Aziendale',
    },
    {
      src: 'https://images.pexels.com/photos/5721918/pexels-photo-5721918.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Grafico di crescita',
      title: 'Analisi e Strategie',
    },
    {
      src: 'https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Riunione di affari',
      title: 'Partnership Finanziarie',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-navy mb-3">
            La finanza che fa crescere le imprese
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Finanziamenti mirati, liquidità strategica e accesso al credito bancario per realizzare i tuoi progetti
          </p>
        </motion.div>

        <ContextImageGallery images={images} />
      </div>
    </section>
  )
}
