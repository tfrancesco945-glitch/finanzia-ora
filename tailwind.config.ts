import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A1628',
          blue: '#1B3A6B',
          accent: '#00b388',
          'accent-dark': '#007578',
          'accent-light': '#e6f7f3',
          cyan: '#36c6e9',
          gold: '#C9A84C',
          light: '#F0F4FA',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(10,22,40,0.07)',
        'card-hover': '0 4px 24px rgba(10,22,40,0.12)',
      },
      animation: {
        'pulse-whatsapp': 'pulse-whatsapp 2.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-whatsapp': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.45)' },
          '60%': { boxShadow: '0 0 0 14px rgba(37, 211, 102, 0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
