import Link from 'next/link'

const WHATSAPP_URL = 'https://wa.me/393515042449'

const serviceLinks = [
  { label: 'Mutui', href: '/mutui' },
  { label: 'Prestiti Personali', href: '/privati' },
  { label: 'Finanziamenti Aziendali', href: '/aziende' },
  { label: 'Consulenza del Credito', href: '/chi-siamo' },
  { label: 'Richiedi Consulenza', href: '/richiedi-consulenza' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookie' },
  { label: 'Note Legali', href: '/note-legali' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Col 1: Brand + tagline */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-1">
              <span className="font-playfair text-2xl font-bold text-white">Finanzia</span>
              <span className="font-playfair text-2xl font-bold text-brand-gold">Ora</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Il tuo consulente del credito di fiducia. Supporto professionale e personalizzato
              per mutui, prestiti e finanziamenti aziendali.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-5">
            <h3 className="font-playfair text-base font-semibold text-brand-gold tracking-wide">
              Servizi
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="space-y-5">
            <h3 className="font-playfair text-base font-semibold text-brand-gold tracking-wide">
              Contatti
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:info@finanziaora.io"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="text-gray-600">✉</span>
                  info@finanziaora.io
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="text-[#25D366]">
                    <WhatsAppIconTiny />
                  </span>
                  +39 351 5042449
                </a>
              </li>
              <li className="pt-3 border-t border-white/8">
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-2 font-medium">
                  Sedi
                </p>
                <div className="space-y-1 text-gray-400">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                    Caldiero (VR)
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                    Mantova (MN)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Finanzia Ora. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function WhatsAppIconTiny() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
