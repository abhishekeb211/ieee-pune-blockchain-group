import Hero from '@/components/Hero'
import FocusAreas from '@/components/FocusAreas'

export default function Home() {
  return (
    <main>
      <Hero />
      <FocusAreas limit={6} />
    </main>
  )
}
