import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.css',
  ],
  theme: {
    screens: {
      // Mobile is default (0-480px)
      sm: '481px', // 481px-899px (Tablet)
      md: '900px', // 900px-1440px (Desktop)
      lg: '1440px', // ≥1440px (Ultrawide)
    },
    extend: {
      fontFamily: {
        hauora: ['var(--font-hauora)'],
        geist: ['var(--font-geist-mono)'],
        inter: ['var(--font-inter)'],
        hanziPen: ['var(--font-hanziPen)'],
        awesome: ['Font Awesome 6 Pro'],
      },
      fontSize: {
        xs: ['12px', '170%'],
        sm: ['16px', '150%'],
        base: ['18px', '150%'],
        lg: ['20px', '130%'],
        xl: ['28px', '150%'],
        '2xl': ['32px', '130%'],
        '3xl': ['40px', '150%'],
        '4xl': ['48px', '150%'],
        '5xl': ['56px', '150%'],
      },
      letterSpacing: {
        tight: '-0.02em',
        wide: '0.05em',
      },
      colors: {
        blue: {
          primary: '#0A84FF',
        },
        slate: {
          50: '#F7F7F8',
          100: '#EEF2F6',
          200: '#EAECF0',
          300: '#CCD5DF',
          400: '#9AA4B2',
          500: '#697586',
          600: '#4B5565',
          700: '#202939',
          800: '#202939',
          900: '#111926',
        },
      },
      borderRadius: {
        button: '99px',
      },
      boxShadow: {
        text: '0px 2px 0px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
