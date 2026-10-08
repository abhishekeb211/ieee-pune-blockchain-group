import type { Metadata } from 'next'
import { Open_Sans, Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { homeDescription, homeTitle, siteName, siteUrl } from '@/lib/seo'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s | ${siteName}`,
  },
  description: homeDescription,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.png' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName,
    title: homeTitle,
    description: homeDescription,
    url: '/',
    images: [{ url: '/images/brand/ieee-pune-blockchain-group.png', alt: siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: homeDescription,
    images: ['/images/brand/ieee-pune-blockchain-group.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" className={`${openSans.variable} ${roboto.variable} scroll-smooth`}>
      <body className="bg-[#F7FDFC] font-sans text-ieee-ink antialiased">
        <Navbar />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  )
}
