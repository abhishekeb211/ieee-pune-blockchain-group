import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import FocusAreas from '@/components/FocusAreas'
import Lab from '@/components/Lab'
import Events from '@/components/Events'
import Leadership from '@/components/Leadership'
import JoinForm from '@/components/JoinForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FocusAreas />
      <Lab />
      <Events />
      <Leadership />
      <JoinForm />
      <Footer />
    </main>
  )
}
