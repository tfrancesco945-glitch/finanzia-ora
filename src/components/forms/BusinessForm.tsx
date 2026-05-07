'use client'

import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'
import { Upload, X, FileText, ImageIcon, AlertCircle, Loader2, Send } from 'lucide-react'

interface BusinessFormData {
  ragioneSociale: string
  piva: string
  settore: string
  fatturato: string
  anniAttivita: string
  finalita: string
  importoRichiesto: string
  nomeReferente: string
  email: string
  telefono: string
  note: string
  privacy: boolean
}

const settoreOptions = [
  { value: '', label: 'Seleziona settore' },
  { value: 'commercio', label: 'Commercio al dettaglio / ingrosso' },
  { value: 'edilizia', label: 'Edilizia e costruzioni' },
  { value: 'manifattura', label: 'Manifattura e produzione' },
  { value: 'ristorazione', label: 'Ristorazione e turismo' },
  { value: 'servizi', label: 'Servizi professionali' },
  { value: 'trasporti', label: 'Trasporti e logistica' },
  { value: 'agricoltura', label: 'Agricoltura' },
  { value: 'tecnologia', label: 'Tecnologia e informatica' },
  { value: 'sanita', label: 'Sanità e cura della persona' },
  { value: 'altro', label: 'Altro' },
]

const fatturatoOptions = [
  { value: '', label: 'Seleziona fascia' },
  { value: '0-100k', label: 'Fino a 100.000 €' },
  { value: '100k-500k', label: '100.001 – 500.000 €' },
  { value: '500k-1m', label: '500.001 – 1.000.000 €' },
  { value: '1m-5m', label: '1.000.001 – 5.000.000 €' },
  { value: '5m+', label: 'Oltre 5.000.000 €' },
]

const anniOptions = [
  { value: '', label: 'Seleziona anzianità' },
  { value: '<1', label: 'Meno di 1 anno' },
  { value: '1-3', label: '1 – 3 anni' },
  { value: '3-5', label: '3 – 5 anni' },
  { value: '5-10', label: '5 – 10 anni' },
  { value: '10+', label: 'Oltre 10 anni' },
]

const finalitaOptions = [
  { value: '', label: 'Seleziona finalità' },
  { value: 'liquidita', label: 'Liquidità operativa' },
  { value: 'macchinari', label: 'Acquisto macchinari / attrezzature' },
  { value: 'espansione', label: 'Espansione / nuova sede' },
  { value: 'ristrutturazione-debito', label: 'Ristrutturazione del debito' },
  { value: 'immobile', label: 'Acquisto immobile commerciale' },
  { value: 'scorte', label: 'Finanziamento scorte' },
  { value: 'altro', label: 'Altro' },
]

const suggestedDocs = ['Visura camerale', 'Bilancio aziendale (ultimo)', 'Documento identità legale rappresentante']

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

function selectClass(hasError: boolean) {
  return `${inputClass(hasError)} appearance-none cursor-pointer`
}

const SelectArrow = () => (
  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
)

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="text-sm font-semibold text-brand-navy uppercase tracking-wider">{children}</h3>
      <div className="mt-2 h-px bg-brand-light" />
    </div>
  )
}

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function BusinessForm() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [rejectedMsg, setRejectedMsg] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BusinessFormData>()

  const onDrop = useCallback(
    (accepted: File[], rejected: { file: File }[]) => {
      if (rejected.length) {
        setRejectedMsg(`${rejected.length} file non accettato (PDF, JPG, PNG — max 10 MB)`)
        setTimeout(() => setRejectedMsg(''), 4000)
      }
      setUploadedFiles((prev) => [...prev, ...accepted].slice(0, 10))
    },
    []
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
    maxSize: 10 * 1024 * 1024,
    maxFiles: 10,
  })

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const onSubmit = async (_data: BusinessFormData) => {
    await new Promise((r) => setTimeout(r, 1200))
    toast.success('Richiesta aziendale inviata! Ti contatteremo entro 24 ore lavorative.')
    reset()
    setUploadedFiles([])
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">

      {/* Dati aziendali */}
      <div>
        <SectionTitle>Dati aziendali</SectionTitle>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Ragione sociale <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Rossi S.r.l."
                {...register('ragioneSociale', { required: 'La ragione sociale è obbligatoria' })}
                className={inputClass(!!errors.ragioneSociale)}
              />
              <FieldError message={errors.ragioneSociale?.message} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Partita IVA <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="IT12345678901"
                {...register('piva', {
                  required: 'La P.IVA è obbligatoria',
                  pattern: { value: /^\d{11}$/, message: 'Inserisci 11 cifre' },
                })}
                className={inputClass(!!errors.piva)}
              />
              <FieldError message={errors.piva?.message} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Anni di attività</label>
              <div className="relative">
                <select {...register('anniAttivita')} className={selectClass(false)}>
                  {anniOptions.map((o) => (
                    <option key={o.value} value={o.value} disabled={!o.value}>{o.label}</option>
                  ))}
                </select>
                <SelectArrow />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Settore di attività</label>
              <div className="relative">
                <select {...register('settore')} className={selectClass(false)}>
                  {settoreOptions.map((o) => (
                    <option key={o.value} value={o.value} disabled={!o.value}>{o.label}</option>
                  ))}
                </select>
                <SelectArrow />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Fatturato indicativo</label>
              <div className="relative">
                <select {...register('fatturato')} className={selectClass(false)}>
                  {fatturatoOptions.map((o) => (
                    <option key={o.value} value={o.value} disabled={!o.value}>{o.label}</option>
                  ))}
                </select>
                <SelectArrow />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Operazione */}
      <div>
        <SectionTitle>Dettagli dell&apos;operazione</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Finalità <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                {...register('finalita', { required: 'Seleziona la finalità' })}
                className={selectClass(!!errors.finalita)}
              >
                {finalitaOptions.map((o) => (
                  <option key={o.value} value={o.value} disabled={!o.value}>{o.label}</option>
                ))}
              </select>
              <SelectArrow />
            </div>
            <FieldError message={errors.finalita?.message} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Importo richiesto (€) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min={0}
              placeholder="es. 50000"
              {...register('importoRichiesto', {
                required: 'Inserisci l\'importo',
                min: { value: 1, message: 'Importo non valido' },
              })}
              className={inputClass(!!errors.importoRichiesto)}
            />
            <FieldError message={errors.importoRichiesto?.message} />
          </div>
        </div>
      </div>

      {/* Referente */}
      <div>
        <SectionTitle>Referente aziendale</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Nome e cognome referente <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Mario Rossi — Amministratore"
              {...register('nomeReferente', { required: 'Il nome del referente è obbligatorio' })}
              className={inputClass(!!errors.nomeReferente)}
            />
            <FieldError message={errors.nomeReferente?.message} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="info@azienda.it"
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
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Note aggiuntive</label>
            <textarea
              rows={3}
              placeholder="Informazioni aggiuntive utili per la valutazione..."
              {...register('note')}
              className={`${inputClass(false)} resize-none`}
            />
          </div>
        </div>
      </div>

      {/* Documenti */}
      <div>
        <SectionTitle>Documenti aziendali (opzionale)</SectionTitle>
        <p className="text-xs text-gray-500 mb-3">
          Documenti utili alla valutazione. Accettiamo PDF, JPG, PNG — max 10 MB ciascuno.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {suggestedDocs.map((doc) => (
            <span key={doc} className="text-xs px-2.5 py-1 bg-brand-light text-gray-600 rounded-full border border-brand-light">
              {doc}
            </span>
          ))}
        </div>

        <div
          {...getRootProps()}
          className={`flex flex-col items-center justify-center gap-3 px-6 py-8 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-200
            ${isDragActive ? 'border-brand-accent bg-blue-50/60' : 'border-gray-200 bg-gray-50/50 hover:border-brand-accent/50 hover:bg-brand-light/30'}`}
        >
          <input {...getInputProps()} />
          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${isDragActive ? 'bg-brand-accent text-white' : 'bg-white border border-gray-200 text-gray-400'}`}>
            <Upload className="w-5 h-5" />
          </div>
          <p className="text-sm font-medium text-gray-700">
            {isDragActive ? 'Rilascia i file qui' : 'Trascina o clicca per caricare'}
          </p>
          <p className="text-xs text-gray-400">PDF, JPG, PNG — max 10 MB — max 10 file</p>
        </div>

        {rejectedMsg && (
          <p className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            {rejectedMsg}
          </p>
        )}

        {uploadedFiles.length > 0 && (
          <ul className="mt-3 space-y-2">
            {uploadedFiles.map((file, i) => {
              const isPdf = file.type === 'application/pdf'
              return (
                <li key={`${file.name}-${i}`} className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-brand-light">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isPdf ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                    {isPdf ? <FileText className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-700 truncate">{file.name}</p>
                    <p className="text-xs text-gray-400">{formatFileSize(file.size)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                    aria-label="Rimuovi"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      {/* Privacy + submit */}
      <div className="pt-2 border-t border-brand-light">
        <label className="flex items-start gap-3 cursor-pointer mb-5">
          <input
            type="checkbox"
            {...register('privacy', { required: 'Accetta l\'informativa per procedere' })}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-brand-accent shrink-0"
          />
          <span className="text-sm text-gray-600 leading-relaxed">
            Acconsento al trattamento dei dati ai sensi del{' '}
            <a href="/privacy" className="text-brand-accent hover:underline" target="_blank" rel="noopener noreferrer">GDPR</a>
            {' '}e della{' '}
            <a href="/privacy" className="text-brand-accent hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            . <span className="text-red-500">*</span>
          </span>
        </label>
        <FieldError message={errors.privacy?.message as string} />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-brand-accent rounded-xl hover:bg-blue-700 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-500/20"
        >
          {isSubmitting ? (
            <><Loader2 className="w-5 h-5 animate-spin" />Invio in corso...</>
          ) : (
            <><Send className="w-4 h-4" />Invia richiesta aziendale</>
          )}
        </button>
        <p className="mt-3 text-center text-xs text-gray-400">
          Risposta entro 24 ore · Consulenza gratuita e riservata
        </p>
      </div>
    </form>
  )
}
