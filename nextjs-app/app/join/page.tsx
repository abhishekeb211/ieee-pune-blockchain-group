import type { Metadata } from 'next'
import JoinForm from '@/components/JoinForm'
import JsonLd from '@/components/JsonLd'
import { breadcrumbGraph, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Join',
  'Join the IEEE Pune Blockchain Group, a local group of the IEEE Blockchain Technical Community in Pune.',
  '/join',
)

export default function JoinPage() {
  return (
    <main>
      <JsonLd data={breadcrumbGraph('Join', '/join')} />
      <JoinForm />
    </main>
  )
}
