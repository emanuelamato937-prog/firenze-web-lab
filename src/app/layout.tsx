import type { Metadata, Viewport } from 'next'
import { fontSyne, fontJakarta, fontInter, fontJetbrains } from '@/lib/fonts'
import { Providers } from '@/components/providers/Providers'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { siteConfig } from '@/lib/metadata'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: '/og/default.png', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteConfig.twitter,
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFB' },
    { media: '(prefers-color-scheme: dark)',  color: '#080F1A' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={[
        fontSyne.variable,
        fontJakarta.variable,
        fontInter.variable,
        fontJetbrains.variable,
        'h-full antialiased',
      ].join(' ')}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col">
        <Providers>
          <Navbar />
          <main id="main-content" className="flex-1 pt-16 sm:pt-20 lg:pt-24 xl:pt-28">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
