import type { Metadata } from 'next'
import { Open_Sans, Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

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
    <html lang="en" className={`${openSans.variable} ${roboto.variable} scroll-smooth`}>
      <body className="bg-[#F4FBFA] font-sans text-ieee-ink antialiased">
        <Navbar />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  )
}
