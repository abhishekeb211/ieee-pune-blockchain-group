import type { Metadata } from 'next'
import ActivitiesHub from '@/components/ActivitiesHub'

export const metadata: Metadata = {
  title: 'Activities | IEEE Pune Blockchain Group',
}

export default function ActivitiesPage() {
  return (
    <main>
      <ActivitiesHub />
    </main>
  )
}
