'use client'

import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { AlertCircle, Send, Loader2 } from 'lucide-react'

interface ContactFormData {
  nome: string
  cognome: string
  telefono: string
  email: string
  tipologia: string
  messaggio: string
  privacy: boolean
}

const tipologiaOptions = [
  { value: '', label: 'Seleziona tipo di richiesta' },
  { value: 'mutuo', label: 'Mutuo' },
  { value: 'prestito', label: 'Prestito personale' },
  { value: 'cessione-quinto', label: 'Cessione del Quinto' },
  { value: 'aziendale', label: 'Finanziamento aziendale' },
  { value: 'crif', label: 'Cancellazione CRIF' },
  { value: 'generale', label: 'Informazioni generali' },
  { value: 'altro', label: 'Altro' },
]

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
      {message}
    </p>
  )
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent/30 ${
    hasError ? 'border-red-400' : 'border-gray-200 focus:border-brand-accent'
  }`
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 1000))
    toast.success('Messaggio inviato! Ti risponderemo entro 24 ore lavorative.')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Nome <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Mario"
            {...register('nome', { required: 'Il nome è obbligatorio' })}
            className={inputClass(!!errors.nome)}
          />
          <FieldError message={errors.nome?.message} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Cognome <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Rossi"
            {...register('cognome', { required: 'Il cognome è obbligatorio' })}
            className={inputClass(!!errors.cognome)}
          />
          <FieldError message={errors.cognome?.message} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="mario@email.com"
            {...register('email', {
              required: 'L\'email è obbligatoria',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email non valida' },
            })}
            className={inputClass(!!errors.email)}
          />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Telefono <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="+39 333 1234567"
            {...register('telefono', {
              required: 'Il telefono è obbligatorio',
              pattern: { value: /^[\d\s\+\-\(\)]{8,}$/, message: 'Numero non valido' },
            })}
            className={inputClass(!!errors.telefono)}
          />
          <FieldError message={errors.telefono?.message} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Tipo di richiesta
        </label>
        <div className="relative">
          <select
            {...register('tipologia')}
            className={`${inputClass(false)} appearance-none cursor-pointer`}
          >
            {tipologiaOptions.map((o) => (
              <option key={o.value} value={o.value} disabled={!o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Messaggio
        </label>
        <textarea
          rows={4}
          placeholder="Descrivi la tua richiesta o situazione..."
          {...register('messaggio')}
          className={`${inputClass(false)} resize-none`}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('privacy', { required: 'Accetta l\'informativa per procedere' })}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-brand-accent shrink-0"
          />
          <span className="text-sm text-gray-600 leading-relaxed">
            Acconsento al trattamento dei dati ai sensi del{' '}
            <a href="/privacy" className="text-brand-accent hover:underline" target="_blank" rel="noopener noreferrer">
              GDPR
            </a>
            {' '}e della{' '}
            <a href="/privacy" className="text-brand-accent hover:underline" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            . <span className="text-red-500">*</span>
          </span>
        </label>
        <FieldError message={errors.privacy?.message as string} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-brand-accent rounded-xl hover:bg-blue-700 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-500/20"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Invio in corso...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Invia messaggio
          </>
        )}
      </button>
      <p className="text-center text-xs text-gray-400">
        Risposta garantita entro 24 ore · Nessun costo
      </p>
    </form>
  )
}
