'use client'

import { useState, useCallback } from 'react'
import { useForm, type UseFormRegister, type FieldErrors } from 'react-hook-form'
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'
import { Upload, X, FileText, ImageIcon, AlertCircle, Loader2, Send } from 'lucide-react'

interface FormData {
  finalita: string
  valoreImmobile: string
  importoRichiesto: string
  primaCasa: 'si' | 'no'
  under36: 'si' | 'no'
  dipendentePubblico: 'si' | 'no'
  garante: 'si' | 'no'
  statoTrattativa: string
  nome: string
  cognome: string
  email: string
  telefono: string
  note: string
  privacy: boolean
}

const finalitaOptions = [
  { value: '', label: 'Seleziona finalità' },
  { value: 'prima-casa', label: 'Acquisto Prima Casa' },
  { value: 'seconda-casa', label: 'Acquisto Seconda Casa / Investimento' },
  { value: 'casa-vacanza', label: 'Casa Vacanza' },
  { value: 'liquidita', label: 'Mutuo Liquidità' },
  { value: 'consolidamento', label: 'Consolidamento Debiti' },
  { value: 'surroga', label: 'Surroga Mutuo Esistente' },
  { value: 'ristrutturazione', label: 'Ristrutturazione' },
]

const trattativaOptions = [
  { value: '', label: 'Seleziona stato' },
  { value: 'ricerca', label: 'In ricerca immobile' },
  { value: 'proposta', label: 'Proposta accettata' },
  { value: 'compromesso', label: 'Compromesso firmato' },
  { value: 'asta', label: 'Immobile in asta' },
  { value: 'surroga', label: 'Surroga su mutuo esistente' },
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

function FormLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  )
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent/30 ${
    hasError
      ? 'border-red-400 focus:border-red-400'
      : 'border-gray-200 focus:border-brand-accent'
  }`
}

function selectClass(hasError: boolean) {
  return `${inputClass(hasError)} appearance-none cursor-pointer`
}

interface YesNoProps {
  label: string
  name: keyof FormData
  register: UseFormRegister<FormData>
  required?: boolean
  errors: FieldErrors<FormData>
}

function YesNoGroup({ label, name, register, required, errors }: YesNoProps) {
  const hasError = !!errors[name]
  return (
    <div>
      <FormLabel required={required}>{label}</FormLabel>
      <div className="flex gap-2">
        {(['si', 'no'] as const).map((val) => (
          <label key={val} className="relative cursor-pointer flex-1">
            <input
              type="radio"
              value={val}
              {...register(name, { required: required ? 'Campo obbligatorio' : false })}
              className="peer sr-only"
            />
            <span
              className={`flex items-center justify-center h-10 rounded-xl border-2 text-sm font-medium transition-all
                peer-checked:border-brand-accent peer-checked:bg-brand-accent peer-checked:text-white
                hover:border-gray-300 ${hasError ? 'border-red-300' : 'border-gray-200'} text-gray-600`}
            >
              {val === 'si' ? 'Sì' : 'No'}
            </span>
          </label>
        ))}
      </div>
      <FieldError message={errors[name]?.message as string} />
    </div>
  )
}

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-brand-navy uppercase tracking-wider">{children}</h3>
      <div className="mt-2 h-px bg-brand-light" />
    </div>
  )
}

export default function MortgageForm() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [rejectedMsg, setRejectedMsg] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      primaCasa: 'no',
      under36: 'no',
      dipendentePubblico: 'no',
      garante: 'no',
    },
  })

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

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200))
    toast.success('Richiesta inviata con successo! Ti contatteremo entro 24 ore lavorative.', {
      duration: 6000,
    })
    reset()
    setUploadedFiles([])
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10">

      {/* ── Sezione 1: Dettagli operazione ── */}
      <div>
        <SectionTitle>Dettagli dell&apos;operazione</SectionTitle>
        <div className="space-y-5">
          <div>
            <FormLabel required>Finalità del mutuo</FormLabel>
            <div className="relative">
              <select
                {...register('finalita', { required: 'Seleziona la finalità' })}
                className={selectClass(!!errors.finalita)}
              >
                {finalitaOptions.map((o) => (
                  <option key={o.value} value={o.value} disabled={!o.value}>{o.label}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <FieldError message={errors.finalita?.message} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <FormLabel required>Valore immobile (€)</FormLabel>
              <input
                type="number"
                min={0}
                placeholder="es. 250000"
                {...register('valoreImmobile', {
                  required: 'Inserisci il valore',
                  min: { value: 1, message: 'Valore non valido' },
                })}
                className={inputClass(!!errors.valoreImmobile)}
              />
              <FieldError message={errors.valoreImmobile?.message} />
            </div>
            <div>
              <FormLabel required>Importo richiesto (€)</FormLabel>
              <input
                type="number"
                min={0}
                placeholder="es. 200000"
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
      </div>

      {/* ── Sezione 2: Profilo richiedente ── */}
      <div>
        <SectionTitle>Il tuo profilo</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <YesNoGroup
            label="Prima casa"
            name="primaCasa"
            register={register}
            errors={errors}
          />
          <YesNoGroup
            label="Hai meno di 36 anni"
            name="under36"
            register={register}
            errors={errors}
          />
          <YesNoGroup
            label="Dipendente pubblico / statale"
            name="dipendentePubblico"
            register={register}
            errors={errors}
          />
          <YesNoGroup
            label="Presenza di garante / co-intestatario"
            name="garante"
            register={register}
            errors={errors}
          />
          <div className="sm:col-span-2">
            <FormLabel>Stato della trattativa</FormLabel>
            <div className="relative">
              <select
                {...register('statoTrattativa')}
                className={selectClass(!!errors.statoTrattativa)}
              >
                {trattativaOptions.map((o) => (
                  <option key={o.value} value={o.value} disabled={!o.value}>{o.label}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sezione 3: Dati di contatto ── */}
      <div>
        <SectionTitle>I tuoi dati</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <FormLabel required>Nome</FormLabel>
            <input
              type="text"
              placeholder="Mario"
              {...register('nome', { required: 'Il nome è obbligatorio' })}
              className={inputClass(!!errors.nome)}
            />
            <FieldError message={errors.nome?.message} />
          </div>
          <div>
            <FormLabel required>Cognome</FormLabel>
            <input
              type="text"
              placeholder="Rossi"
              {...register('cognome', { required: 'Il cognome è obbligatorio' })}
              className={inputClass(!!errors.cognome)}
            />
            <FieldError message={errors.cognome?.message} />
          </div>
          <div>
            <FormLabel required>Email</FormLabel>
            <input
              type="email"
              placeholder="mario.rossi@email.com"
              {...register('email', {
                required: 'L\'email è obbligatoria',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Inserisci un\'email valida',
                },
              })}
              className={inputClass(!!errors.email)}
            />
            <FieldError message={errors.email?.message} />
          </div>
          <div>
            <FormLabel required>Telefono</FormLabel>
            <input
              type="tel"
              placeholder="+39 333 1234567"
              {...register('telefono', {
                required: 'Il telefono è obbligatorio',
                pattern: {
                  value: /^[\d\s\+\-\(\)]{8,}$/,
                  message: 'Inserisci un numero valido',
                },
              })}
              className={inputClass(!!errors.telefono)}
            />
            <FieldError message={errors.telefono?.message} />
          </div>
          <div className="sm:col-span-2">
            <FormLabel>Note aggiuntive</FormLabel>
            <textarea
              rows={3}
              placeholder="Informazioni aggiuntive che ritieni utili..."
              {...register('note')}
              className={`${inputClass(false)} resize-none`}
            />
          </div>
        </div>
      </div>

      {/* ── Sezione 4: Documenti ── */}
      <div>
        <SectionTitle>Documenti (opzionale)</SectionTitle>
        <p className="text-xs text-gray-500 mb-4">
          Carica documento d&apos;identità, buste paga, estratti conto o altri documenti utili. Formati accettati: PDF, JPG, PNG — max 10 MB per file.
        </p>

        {/* Dropzone */}
        <div
          {...getRootProps()}
          className={`relative flex flex-col items-center justify-center gap-3 px-6 py-10 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-200
            ${isDragActive
              ? 'border-brand-accent bg-blue-50/60'
              : 'border-gray-200 bg-gray-50/50 hover:border-brand-accent/50 hover:bg-brand-light/30'
            }`}
        >
          <input {...getInputProps()} />
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${isDragActive ? 'bg-brand-accent text-white' : 'bg-white border border-gray-200 text-gray-400'}`}>
            <Upload className="w-5 h-5" />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-700">
              {isDragActive ? 'Rilascia i file qui' : 'Trascina i file o clicca per selezionare'}
            </p>
            <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG — max 10 MB — max 10 file</p>
          </div>
        </div>

        {rejectedMsg && (
          <p className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            {rejectedMsg}
          </p>
        )}

        {/* File list */}
        {uploadedFiles.length > 0 && (
          <ul className="mt-4 space-y-2">
            {uploadedFiles.map((file, i) => {
              const isPdf = file.type === 'application/pdf'
              return (
                <li
                  key={`${file.name}-${i}`}
                  className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-brand-light"
                >
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
                    className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                    aria-label="Rimuovi file"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      {/* ── Privacy + Submit ── */}
      <div className="pt-2 border-t border-brand-light">
        <label className="flex items-start gap-3 cursor-pointer mb-6">
          <input
            type="checkbox"
            {...register('privacy', { required: 'Accetta l\'informativa per procedere' })}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-brand-accent focus:ring-brand-accent/30 accent-brand-accent shrink-0"
          />
          <span className="text-sm text-gray-600 leading-relaxed">
            Acconsento al trattamento dei dati personali ai sensi del{' '}
            <a href="/privacy" className="text-brand-accent hover:underline" target="_blank" rel="noopener noreferrer">
              Regolamento UE 2016/679 (GDPR)
            </a>{' '}
            e alla{' '}
            <a href="/privacy" className="text-brand-accent hover:underline" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{' '}
            di Finanzia Ora.
            <span className="text-red-500 ml-1">*</span>
          </span>
        </label>
        <FieldError message={errors.privacy?.message as string} />

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
              Invia richiesta
            </>
          )}
        </button>
        <p className="mt-3 text-center text-xs text-gray-400">
          Risposta garantita entro 24 ore lavorative · Nessun costo, nessun impegno
        </p>
      </div>
    </form>
  )
}
