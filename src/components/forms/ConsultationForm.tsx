'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AlertCircle, Send, Loader2, Check } from 'lucide-react'

interface ConsultationFormData {
  nome: string
  cognome: string
  email: string
  telefono: string
  tipoCliente: string
  servizio: string
  importo?: string
  tempistiche: string
  dettagli?: string
  privacy: boolean
}

const WHATSAPP_NUMBER = '393515042449'

const tipoClienteOptions = [
  { value: '', label: 'Chi sei?' },
  { value: 'privato', label: 'Privato / Famiglia' },
  { value: 'azienda', label: 'Azienda / PMI' },
  { value: 'libero-professionista', label: 'Libero professionista' },
  { value: 'altro', label: 'Altro' },
]

const servizioOptions = [
  { value: '', label: 'Quali servizi ti interessano?' },
  { value: 'mutuo', label: 'Mutuo / Surroga' },
  { value: 'prestito', label: 'Prestito personale' },
  { value: 'cessione-quinto', label: 'Cessione del Quinto' },
  { value: 'finanziamento-aziendale', label: 'Finanziamento aziendale' },
  { value: 'leasing', label: 'Leasing' },
  { value: 'fatturazione', label: 'Servizi di fatturazione' },
  { value: 'consulenza-fiscale', label: 'Consulenza fiscale' },
  { value: 'crif', label: 'Cancellazione CRIF' },
  { value: 'assicurazione', label: 'Assicurazioni' },
  { value: 'investimenti', label: 'Investimenti / Risparmio' },
  { value: 'altro', label: 'Altro' },
]

const tempistiche = [
  { value: '', label: 'Con che tempistiche?' },
  { value: 'urgente', label: '🔴 Urgente (giorni)' },
  { value: 'breve', label: '🟡 Breve termine (2-4 settimane)' },
  { value: 'medio', label: '🔵 Medio termine (1-3 mesi)' },
  { value: 'lungo', label: '⚪ Lungo termine (flessibile)' },
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

export default function ConsultationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<ConsultationFormData>({
    defaultValues: {
      tipoCliente: '',
      servizio: '',
      tempistiche: '',
    },
  })

  const [showRecap, setShowRecap] = useState(false)
  const [formData, setFormData] = useState<ConsultationFormData | null>(null)

  const onSubmit = (data: ConsultationFormData) => {
    setFormData(data)
    setShowRecap(true)
  }

  const handleWhatsApp = () => {
    if (!formData) return

    // Genera il messaggio precompilato
    const lines = [
      `Ciao! 👋`,
      `Mi chiamo ${formData.nome} ${formData.cognome}`,
      ``,
      `📋 Sono un ${getTipoClienteLabel(formData.tipoCliente)}`,
      ``,
      `🎯 Mi interessa: ${getServizioLabel(formData.servizio)}`,
    ]

    if (formData.importo) {
      lines.push(`💰 Budget: €${formData.importo}`)
    }

    lines.push(`⏱️ Tempistiche: ${getTempisticsLabel(formData.tempistiche)}`)

    if (formData.dettagli) {
      lines.push(``)
      lines.push(`📝 Dettagli: ${formData.dettagli}`)
    }

    lines.push(``)
    lines.push(`📧 Email: ${formData.email}`)
    lines.push(`📱 Telefono: ${formData.telefono}`)
    lines.push(``)
    lines.push(`Grazie!`)

    const message = lines.join('\n')
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank')
  }

  const getTipoClienteLabel = (value: string) => {
    return tipoClienteOptions.find(o => o.value === value)?.label || value
  }

  const getServizioLabel = (value: string) => {
    return servizioOptions.find(o => o.value === value)?.label || value
  }

  const getTempisticsLabel = (value: string) => {
    return tempistiche.find(o => o.value === value)?.label || value
  }

  if (showRecap && formData) {
    return (
      <div className="space-y-6">
        {/* Recap */}
        <div className="bg-gradient-to-br from-brand-light to-blue-50 rounded-2xl border border-brand-accent/20 p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-brand-accent" />
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold text-brand-navy mb-1">
                Perfetto, {formData.nome}! 🎉
              </h3>
              <p className="text-sm text-gray-600">
                Ecco il riassunto della tua richiesta. Inviala su WhatsApp e un consulente ti contatterà al più presto.
              </p>
            </div>
          </div>

          <div className="space-y-3 bg-white rounded-xl p-6 border border-gray-100">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">👤 Chi sei</p>
              <p className="text-sm text-brand-navy font-medium">{formData.nome} {formData.cognome}</p>
              <p className="text-xs text-gray-500">Tipo: {getTipoClienteLabel(formData.tipoCliente)}</p>
            </div>

            <div className="border-t border-gray-100 pt-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">🎯 Servizio</p>
              <p className="text-sm text-brand-navy font-medium">{getServizioLabel(formData.servizio)}</p>
            </div>

            {formData.importo && (
              <div className="border-t border-gray-100 pt-3">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">💰 Budget</p>
                <p className="text-sm text-brand-navy font-medium">€{formData.importo}</p>
              </div>
            )}

            <div className="border-t border-gray-100 pt-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">⏱️ Tempistiche</p>
              <p className="text-sm text-brand-navy font-medium">{getTempisticsLabel(formData.tempistiche)}</p>
            </div>

            {formData.dettagli && (
              <div className="border-t border-gray-100 pt-3">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">📝 Dettagli</p>
                <p className="text-sm text-gray-700">{formData.dettagli}</p>
              </div>
            )}

            <div className="border-t border-gray-100 pt-3 space-y-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">📧 Contatti</p>
              <p className="text-xs text-gray-600">{formData.email}</p>
              <p className="text-xs text-gray-600">{formData.telefono}</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => {
              setShowRecap(false)
              setFormData(null)
            }}
            className="px-6 py-3 text-sm font-semibold text-brand-navy bg-white border border-gray-200 rounded-xl hover:bg-brand-light transition-colors"
          >
            Modifica
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#25D366] rounded-xl hover:bg-[#20BA5C] active:scale-[0.98] transition-all shadow-lg shadow-green-500/20"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Invia su WhatsApp
          </button>
        </div>

        <p className="text-center text-xs text-gray-400">
          Un consulente ti contatterà entro 24 ore · Nessun costo
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Info personali */}
      <div className="pb-5 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <span className="text-lg">👤</span> Chi sei?
        </h3>
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
      </div>

      {/* Tipo cliente */}
      <div className="pb-5 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <span className="text-lg">🏢</span> Tipo di cliente
        </h3>
        <div className="relative">
          <select
            {...register('tipoCliente', { required: 'Seleziona il tipo di cliente' })}
            className={`${inputClass(!!errors.tipoCliente)} appearance-none cursor-pointer`}
          >
            {tipoClienteOptions.map((o) => (
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
        <FieldError message={errors.tipoCliente?.message} />
      </div>

      {/* Servizio */}
      <div className="pb-5 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <span className="text-lg">🎯</span> Cosa ti interessa?
        </h3>
        <div className="relative">
          <select
            {...register('servizio', { required: 'Seleziona un servizio' })}
            className={`${inputClass(!!errors.servizio)} appearance-none cursor-pointer`}
          >
            {servizioOptions.map((o) => (
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
        <FieldError message={errors.servizio?.message} />
      </div>

      {/* Budget e tempistiche */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-5 border-b border-gray-200">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
            <span>💰</span> Budget (se rilevante)
          </label>
          <input
            type="text"
            placeholder="Es: 50000"
            {...register('importo')}
            className={inputClass(!!errors.importo)}
          />
          <FieldError message={errors.importo?.message} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
            <span>⏱️</span> Tempistiche <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              {...register('tempistiche', { required: 'Seleziona le tempistiche' })}
              className={`${inputClass(!!errors.tempistiche)} appearance-none cursor-pointer`}
            >
              {tempistiche.map((o) => (
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
          <FieldError message={errors.tempistiche?.message} />
        </div>
      </div>

      {/* Dettagli */}
      <div className="pb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
          <span>📝</span> Dettagli aggiuntivi
        </label>
        <textarea
          rows={4}
          placeholder="Descrivi la tua situazione, vincoli specifici, domande particolari... Più dettagli dai, meglio riusciamo ad aiutarti!"
          {...register('dettagli')}
          className={`${inputClass(false)} resize-none`}
        />
      </div>

      {/* Privacy */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('privacy', { required: 'Accetta l\'informativa per procedere' })}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-brand-accent shrink-0"
          />
          <span className="text-sm text-gray-600 leading-relaxed">
            Acconsento al trattamento dei dati ai sensi del{' '}
            <a href="/privacy" className="text-brand-accent hover:underline">
              GDPR
            </a>
            {' '}e della{' '}
            <a href="/privacy" className="text-brand-accent hover:underline">
              Privacy Policy
            </a>
            . <span className="text-red-500">*</span>
          </span>
        </label>
        <FieldError message={errors.privacy?.message as string} />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-brand-accent rounded-xl hover:bg-blue-700 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-500/20"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Elaborazione...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Continua
          </>
        )}
      </button>
      <p className="text-center text-xs text-gray-400">
        Non ti chiederemo soldi · Risposta garantita entro 24 ore
      </p>
    </form>
  )
}
