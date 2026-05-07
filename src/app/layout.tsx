import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { Toaster } from 'react-hot-toast'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Finanzia Ora — Consulente del Credito',
    template: '%s | Finanzia Ora',
  },
  description:
    'Finanzia Ora è il tuo consulente del credito di fiducia. Mutui, prestiti personali e finanziamenti aziendali a Caldiero (VR) e Mantova (MN).',
  keywords: [
    'consulente del credito',
    'mutui',
    'prestiti personali',
    'finanziamenti aziendali',
    'Caldiero',
    'Verona',
    'Mantova',
  ],
  authors: [{ name: 'Finanzia Ora' }],
  creator: 'Finanzia Ora',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Finanzia Ora',
    title: 'Finanzia Ora — Consulente del Credito',
    description:
      'Il tuo consulente del credito di fiducia. Mutui, prestiti e finanziamenti aziendali.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: { fontFamily: 'var(--font-dm-sans)', fontSize: '14px' },
            success: { iconTheme: { primary: '#2563EB', secondary: '#fff' } },
          }}
        />
      </body>
    </html>
  )
}
