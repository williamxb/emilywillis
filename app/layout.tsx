import './global.css'
import { Metadata } from 'next'
import { Navbar } from './components/nav'
import { Footer } from './components/footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Emily Willis | Designing for Positive Change',
    template: '%s | Emily Willis',
  },
  openGraph: {
    title: 'Emily Willis | Designing for Positive Change',
    url: baseUrl,
    siteName: 'Emily Willis',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout(
  { children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={'text-brand-raisin bg-brand-off-white'}>
      <body className="subpixel-antialiased">
        <Navbar />
        <main className="max-w-7xl px-4 mx-auto">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
