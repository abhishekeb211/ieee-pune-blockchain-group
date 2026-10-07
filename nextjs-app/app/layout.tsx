import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IEEE Pune Blockchain Group | IEEE Blockchain Technical Community',
  description: 'Official portal for the IEEE Pune Blockchain Group — connecting students, researchers, academicians, and industry professionals across distributed ledger technologies in Pune and Region 10 APAC.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-white font-sans text-ieee-ink antialiased">
        <Navbar />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  )
}
