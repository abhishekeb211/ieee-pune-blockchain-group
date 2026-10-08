import React from 'react'
import guestsJson from '../data/guests.json'

export interface GuestProfile {
  id: string
  name: string
  linkedin?: string | null
  website?: string | null
}

const guests = guestsJson.guests as GuestProfile[]

export function guestById(id: string) {
  return guests.find((guest) => guest.id === id)
}

function nameTokens(value: string) {
  return value
    .split(/[—–-]/)[0]
    .toLowerCase()
    .replace(/\b(dr|prof|mr|ms|mrs|phd)\b\.?/g, '')
    .replace(/[^a-z\s]/g, ' ')
    .split(/\s+/)
    .filter((token) => token.length > 0)
}

export function guestForPerson(personLine: string) {
  const personTokens = nameTokens(personLine)
  if (personTokens.length === 0) return undefined
  return guests.find((guest) => {
    const guestTokens = nameTokens(guest.name)
    const [shorter, longer] = personTokens.length <= guestTokens.length
      ? [personTokens, guestTokens]
      : [guestTokens, personTokens]
    return shorter.length > 0 && shorter.every((token) => longer.includes(token))
  })
}

export default function ProfileLinks({
  linkedin,
  website,
  className = '',
}: {
  linkedin?: string | null
  website?: string | null
  className?: string
}) {
  if (!linkedin && !website) return null
  return (
    <span className={`inline-flex flex-wrap items-center gap-x-3 gap-y-1 ${className}`}>
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-ieee-primary hover:underline"
        >
          LinkedIn
        </a>
      )}
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-ieee-navy hover:underline"
        >
          Website
        </a>
      )}
    </span>
  )
}
