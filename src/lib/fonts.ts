import localFont from 'next/font/local'
import { Geist_Mono } from 'next/font/google'

export const hauora = localFont({
  src: [
    {
      path: '../../public/fonts/Hauora-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Hauora-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-hauora',
})

export const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})
