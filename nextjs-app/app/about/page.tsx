import type { Metadata } from 'next'
import About from '@/components/About'
import Leadership from '@/components/Leadership'
import Guests from '@/components/Guests'
import JsonLd from '@/components/JsonLd'
import { breadcrumbGraph, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'About',
  'About the IEEE Blockchain Pune Local Group, its chair Prof. Dr. Sonali D. Patil, and the guests who have spoken with the group in Pune.',
  '/about',
)

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={breadcrumbGraph('About', '/about')} />
      <About />
      <Leadership />
      <Guests />
    </main>
  )
}
