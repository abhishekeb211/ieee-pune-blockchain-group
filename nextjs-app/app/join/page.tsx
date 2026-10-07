import type { Metadata } from 'next'
import JoinForm from '@/components/JoinForm'

export const metadata: Metadata = {
  title: 'Join | IEEE Pune Blockchain Group',
}

export default function JoinPage() {
  return (
    <main>
      <JoinForm />
    </main>
  )
}
