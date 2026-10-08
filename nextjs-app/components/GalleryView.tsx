'use client'

import React, { useState } from 'react'
import Gallery from '@/components/Gallery'
import Lightbox, { LightboxData } from '@/components/Lightbox'

export default function GalleryView() {
  const [photo, setPhoto] = useState<LightboxData | null>(null)

  return (
    <>
      <Gallery onSelectPhoto={setPhoto} />
      <Lightbox data={photo} onClose={() => setPhoto(null)} />
    </>
  )
}
