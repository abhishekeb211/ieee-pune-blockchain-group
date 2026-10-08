import type { Metadata } from 'next'
import LabView from '@/components/LabView'
import JsonLd from '@/components/JsonLd'
import { breadcrumbGraph, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Lab',
  'The blockchain laboratory used with the IEEE Blockchain Pune Local Group at MMCOE, Pune.',
  '/lab',
)

export default function LabPage() {
  return (
    <main>
      <JsonLd data={breadcrumbGraph('Lab', '/lab')} />
      <LabView />
    </main>
  )
}
