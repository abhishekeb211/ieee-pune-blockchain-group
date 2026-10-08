import type { Metadata } from 'next'
import ActivitiesHub from '@/components/ActivitiesHub'
import JsonLd from '@/components/JsonLd'
import { breadcrumbGraph, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Events',
  'Blockchain events, faculty development programs, and workshops recorded by the IEEE Blockchain Pune Local Group in Pune.',
  '/activities',
)

export default function ActivitiesPage() {
  return (
    <main>
      <JsonLd data={breadcrumbGraph('Events', '/activities')} />
      <ActivitiesHub />
    </main>
  )
}
