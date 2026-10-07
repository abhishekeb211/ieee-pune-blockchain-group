import type { Metadata } from 'next'
import About from '@/components/About'
import Leadership from '@/components/Leadership'
import Guests from '@/components/Guests'

export const metadata: Metadata = {
  title: 'About | IEEE Pune Blockchain Group',
}

export default function AboutPage() {
  return (
    <main>
      <About />
      <Leadership />
      <Guests />
    </main>
  )
}
