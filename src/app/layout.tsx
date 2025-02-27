import { hauora, mono, inter, hanziPen } from '@/lib/fonts'
import SEO_METADATA from '@/constants/seo-metadata'
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
    <html
      lang="en"
      className={`${hauora.variable} ${mono.variable} ${inter.variable} ${hanziPen.variable}`}
    >
      <body className="font-hauora">{children}</body>
    </html>
  )
}
