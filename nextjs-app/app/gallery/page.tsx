'use client'

import React, { useState } from 'react'
import Gallery from '@/components/Gallery'
import Lightbox, { LightboxData } from '@/components/Lightbox'

export default function GalleryPage() {
  const [photo, setPhoto] = useState<LightboxData | null>(null)

  return (
    <main>
      <Gallery onSelectPhoto={setPhoto} />
      <Lightbox data={photo} onClose={() => setPhoto(null)} />
    </main>
  )
}
