'use client'

import { motion, type Variants } from 'framer-motion'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import {
  Lock, Eye, EyeOff, TrendingUp, FileText,
  ClipboardList, MessageSquare, AlertCircle, Loader2,
} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

interface LoginFormData {
  email: string
  password: string
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const dashboardCards = [
  {
    icon: TrendingUp,
    title: 'Stato Pratica',
    description: 'Visualizza lo stato delle tue pratiche attive',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: FileText,
    title: 'Documenti',
    description: 'Gestisci e carica documenti in modo sicuro',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: ClipboardList,
    title: 'Richieste',
    description: 'Consulta e invia nuove richieste al consulente',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: MessageSquare,
    title: 'Messaggi',
    description: 'Comunicazioni dirette con il tuo consulente',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
]

function LoginCard() {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>()

  const onSubmit = async (_data: LoginFormData) => {
    await new Promise((r) => setTimeout(r, 800))
    toast('Area in sviluppo — disponibile a breve! Ti avviseremo non appena sarà attiva.', {
      icon: '🔒',
      duration: 5000,
    })
  }

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="w-full max-w-sm mx-auto"
    >
      {/* Card */}
      <motion.div variants={fadeUp} className="bg-white rounded-3xl border border-brand-light shadow-xl p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center mx-auto mb-4">
            <Lock className="w-6 h-6 text-brand-gold" />
          </div>
          <h1 className="font-playfair text-2xl font-bold text-brand-navy">Area Riservata</h1>
          <p className="text-sm text-gray-500 mt-1">Accedi alla tua dashboard personale</p>
        </div>

        {/* Coming soon badge */}
        <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
          <p className="text-xs font-medium text-amber-700">
            In sviluppo — accesso disponibile a breve
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
            <input
              type="email"
              placeholder="mario@email.com"
              {...register('email', {
                required: 'Inserisci la tua email',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email non valida' },
              })}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent/30 ${
                errors.email ? 'border-red-400' : 'border-gray-200 focus:border-brand-accent'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                {...register('password', { required: 'Inserisci la password' })}
                className={`w-full px-4 py-2.5 pr-10 rounded-xl border text-sm bg-white text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent/30 ${
                  errors.password ? 'border-red-400' : 'border-gray-200 focus:border-brand-accent'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={showPassword ? 'Nascondi password' : 'Mostra password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-brand-navy rounded-xl hover:bg-brand-blue active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isSubmitting ? (
              <><Loader2 className="w-5 h-5 animate-spin" />Accesso in corso...</>
            ) : (
              <><Lock className="w-4 h-4" />Accedi</>
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          Non hai un account?{' '}
          <Link href="/contatti" className="text-brand-accent hover:underline font-medium">
            Contattaci
          </Link>
        </p>
      </motion.div>

      {/* Footer note */}
      <motion.p variants={fadeUp} className="text-center text-xs text-gray-400 mt-6">
        Accesso sicuro e riservato · Protetto da crittografia SSL
      </motion.p>
    </motion.div>
  )
}

function DashboardPreview() {
  return (
    <div className="max-w-2xl mx-auto mt-16 lg:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55 }}
        className="text-center mb-10"
      >
        <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-2">
          Anteprima
        </p>
        <h2 className="font-playfair text-2xl font-bold text-brand-navy mb-3">
          La tua dashboard personale
        </h2>
        <p className="text-sm text-gray-500">
          Funzionalità in arrivo — presto disponibile per tutti i clienti Finanzia Ora.
        </p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        {dashboardCards.map((card) => (
          <motion.div key={card.title} variants={fadeUp} className="relative group">
            {/* Card content (visible but muted) */}
            <div className="bg-white rounded-2xl border border-brand-light p-6 opacity-40 select-none">
              <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
                <card.icon className={`w-5 h-5 ${card.iconColor}`} />
              </div>
              <h3 className="font-semibold text-brand-navy mb-1">{card.title}</h3>
              <p className="text-xs text-gray-500">{card.description}</p>
              <div className="mt-4 h-1.5 bg-gray-100 rounded-full">
                <div className="h-full w-[45%] bg-gray-200 rounded-full" />
              </div>
            </div>

            {/* Lock overlay */}
            <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center bg-white/70 backdrop-blur-[2px] border border-brand-light">
              <div className="w-10 h-10 rounded-full bg-brand-light border border-brand-light flex items-center justify-center mb-2.5">
                <Lock className="w-4 h-4 text-brand-navy/50" />
              </div>
              <p className="text-xs font-semibold text-brand-navy/70">In arrivo</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 p-6 bg-brand-navy rounded-2xl text-center"
      >
        <p className="text-sm font-medium text-white mb-1">
          Vuoi essere avvisato al lancio dell&apos;area riservata?
        </p>
        <p className="text-xs text-gray-400 mb-4">
          Contattaci e ti aggiungiamo alla lista early access.
        </p>
        <Link
          href="/contatti"
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-brand-navy bg-brand-gold rounded-xl hover:bg-amber-400 active:scale-[0.97] transition-all duration-200"
        >
          Iscriviti alla lista early access
        </Link>
      </motion.div>
    </div>
  )
}

export default function AreaRiservataPage() {
  return (
    <section className="min-h-screen bg-brand-light py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <LoginCard />
        <DashboardPreview />
      </div>
    </section>
  )
}
