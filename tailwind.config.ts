import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  fontFamily: {
    hauora: ['var(--font-hauora)'],
    mono: ['var(--font-geist-mono)'],
  },
  theme: {
    screens: {
      // Mobile is default (0-375px)
      sm: '376px', // 376px-768px (Tablet)
      md: '769px', // 769px-1440px (Desktop)
      lg: '1440px', // ≥1440px (Ultrawide)
    },
    extend: {
      minWidth: {
        screen: '375px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      spacing: {
        // Add your spacing system
      },
      fontSize: {
        // Example responsive font sizes
        base: [
          '16px',
          {
            lineHeight: '150%',
            letterSpacing: '-0.02em',
          },
        ],
      },
      // Container defaults for consistent max-widths
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem', // Mobile
          sm: '1.5rem', // Tablet
          md: '2rem', // Desktop
          lg: '2.5rem', // Ultrawide
        },
        screens: {
          DEFAULT: '100%',
          sm: '376px',
          md: '769px',
          lg: '1440px',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
