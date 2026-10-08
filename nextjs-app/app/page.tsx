import Hero from '@/components/Hero'
import JsonLd from '@/components/JsonLd'
import { homeDescription, homeTitle, organizationGraph } from '@/lib/seo'

export const metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <main>
      <JsonLd data={organizationGraph()} />
      <Hero />
    </main>
  )
}
