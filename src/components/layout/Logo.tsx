'use client'

import Link from 'next/link'

interface LogoProps {
  inverse?: boolean
  className?: string
}

export default function Logo({ inverse = false, className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center shrink-0 ${className}`}>
      <img
        src="/logo.svg"
        alt="Finanzia Ora"
        className="h-12 w-auto"
      />
    </Link>
  )
}
