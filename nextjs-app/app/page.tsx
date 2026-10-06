'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import FocusAreas from '@/components/FocusAreas'
import Lab from '@/components/Lab'
import Gallery from '@/components/Gallery'
import Events from '@/components/Events'
import Leadership from '@/components/Leadership'
import JoinForm from '@/components/JoinForm'
import Footer from '@/components/Footer'
import Lightbox, { LightboxData } from '@/components/Lightbox'

export default function Home() {
  const [activePhoto, setActivePhoto] = useState<LightboxData | null>(null)

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FocusAreas />
      <Lab onSelectPhoto={setActivePhoto} />
      <Gallery onSelectPhoto={setActivePhoto} />
      <Events onSelectPhoto={setActivePhoto} />
      <Leadership />
      <JoinForm />
      <Footer />
      <Lightbox data={activePhoto} onClose={() => setActivePhoto(null)} />
    </main>
  )
}
