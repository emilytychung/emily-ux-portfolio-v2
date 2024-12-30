import { hauora, mono } from '@/lib/fonts'
import SEO_METADATA from '@/lib/constants/seo-metadata'
import { Footer } from '@/components/Footer'
import '@/styles/globals.css'
import '@/styles/typography.css'
import '@/styles/footer.css'

export const metadata = SEO_METADATA

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${hauora.variable} ${mono.variable}`}>
      <body className="font-hauora">
        {children} <Footer />
      </body>
    </html>
  )
}
