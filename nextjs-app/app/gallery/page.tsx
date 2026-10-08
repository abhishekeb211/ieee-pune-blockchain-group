import type { Metadata } from 'next'
import GalleryView from '@/components/GalleryView'
import JsonLd from '@/components/JsonLd'
import { breadcrumbGraph, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Gallery',
  'Photographs from IEEE Pune Blockchain Group events, faculty programs, and the laboratory.',
  '/gallery',
)

export default function GalleryPage() {
  return (
    <main>
      <JsonLd data={breadcrumbGraph('Gallery', '/gallery')} />
      <GalleryView />
    </main>
  )
}
