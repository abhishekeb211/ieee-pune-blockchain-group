'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const labels: Record<string, string> = {
  about: 'About',
  activities: 'Activities',
  gallery: 'Gallery',
  lab: 'Lab',
  join: 'Join',
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  if (!pathname || pathname === '/') return null
  const segment = pathname.split('/').filter(Boolean)[0]
  const label = labels[segment]
  if (!label) return null

  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-surface-muted">
      <ol className="section-container flex flex-wrap items-center gap-2 py-3 text-sm text-slate-600">
        <li>
          <Link href="/" className="font-medium text-ieee-primary hover:underline">Home</Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="font-medium text-ieee-navy" aria-current="page">{label}</li>
      </ol>
    </nav>
  )
}
