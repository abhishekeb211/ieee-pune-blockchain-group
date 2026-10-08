'use client'

import React, { useState } from 'react'
import Lab from '@/components/Lab'
import Lightbox, { LightboxData } from '@/components/Lightbox'

export default function LabView() {
  const [photo, setPhoto] = useState<LightboxData | null>(null)

  return (
    <>
      <Lab onSelectPhoto={setPhoto} />
      <Lightbox data={photo} onClose={() => setPhoto(null)} />
    </>
  )
}
