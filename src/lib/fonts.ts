import localFont from 'next/font/local'
import { Geist_Mono, Inter } from 'next/font/google'

export const hauora = localFont({
  src: [
    {
      path: '../../public/fonts/Hauora-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/Hauora-SemiBold.woff2',
      weight: '600',
    },
  ],
  variable: '--font-hauora',
})

export const hanziPen = localFont({
  src: [
    {
      path: '../../public/fonts/Hanzipen-tc-regular.otf',
      weight: '400',
    },
  ],
  variable: '--font-hanziPen',
})

export const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
