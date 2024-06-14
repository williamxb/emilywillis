import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
// import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Emily Willis | Graphic Communication and Illustration',
    template: '%s | Emily Willis',
  },
  description: 'Hi! I’m Emily, I study Graphic Communication and Illustration at Loughborough University. I am skilled at Adobe Photoshop, Illustrator and InDesign.',
  openGraph: {
    title: 'Emily Willis | Portfolio',
    description: 'Hi! I’m Emily, I study Graphic Communication and Illustration at Loughborough University. I am skilled at Adobe Photoshop, Illustrator and InDesign.',
    url: baseUrl,
    siteName: 'Emily Willis',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        // GeistMono.variable
      )}
    >
      <body className="subpixel-antialiased m-6 sm:m-8">
        <main className="flex-auto flex flex-col lg:flex-row gap-12 justify-center">
          <Navbar />
          {children}
        </main>
        {/* <Footer /> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
