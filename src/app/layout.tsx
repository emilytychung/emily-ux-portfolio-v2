import { hauora, mono } from '@/lib/fonts'
import SEO_METADATA from '@/lib/constants/seo-metadata'
import './globals.css'

export const metadata = SEO_METADATA

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${hauora.variable} ${mono.variable}`}>
      <body className="font-hauora">{children}</body>
    </html>
  )
}
