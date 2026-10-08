'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import eventsJson from '../data/events.json'
import { LightboxData } from './Lightbox'
import ProfileLinks, { guestById } from './ProfileLinks'
import { byLatest } from './activity'

const ARCHIVE_IDS = [
  'fdp-decentralized-ai-2026-02',
  'decentrahack-2026-01',
  'hyperledger-expert-session-2025-08',
  'icdlt-2025-11',
]

interface ArchiveGuest {
  id: string
  name: string
  role: string
  organization: string
  linkedin?: string | null
  website?: string | null
}

interface ArchivePhoto {
  image: string
  caption: string
  alt: string
}

interface ArchiveEvent {
  id: string
  name: string
  type: string
  year: string
  date: string
  venue: string
  description: string
  puneGroupRole: string
  participants?: string
  topics?: string[]
  gallery?: ArchivePhoto[]
  links?: {
    recap?: string | null
    registration?: string | null
    sources?: { label: string; url: string }[]
  }
  guestsResolved?: ArchiveGuest[]
}

const PHOTO_EVENT_IDS = new Set([
  'fdp-decentralized-ai-2026-02',
  'decentrahack-2026-01',
  'hyperledger-expert-session-2025-08',
])

function publicSrc(assetPath: string) {
  return `/${assetPath.replace(/^assets\//, '')}`
}

const archiveEvents = ARCHIVE_IDS
  .map((id) => (eventsJson.events as ArchiveEvent[]).find((event) => event.id === id))
  .filter((event): event is ArchiveEvent => Boolean(event))
  .sort(byLatest((event) => event.date))

interface CollegeArchiveProps {
  onOpenLightbox?: (data: LightboxData) => void
}

export default function CollegeArchive({ onOpenLightbox }: CollegeArchiveProps) {
  const [activeId, setActiveId] = useState(archiveEvents[0]?.id ?? '')
  const active = archiveEvents.find((event) => event.id === activeId) || archiveEvents[0]

  return (
    <section id="college-archive" className="section-padding border-t border-slate-200 bg-surface-muted text-ieee-ink">
      <div className="section-container">
        <span className="text-sm font-bold uppercase tracking-wider text-ieee-primary">
          College archive
        </span>
        <h2 className="font-heading mt-1.5 font-bold text-ieee-navy">
          Programs documented outside the LinkedIn pack
        </h2>
        <p className="measure mt-2 text-base leading-relaxed text-slate-600">
          These four programs stay on record from the PCCOE CESA magazine and college archives. Photographs from those records are shown with the program. ICDLT has no photograph of its own.
        </p>

        <div className="filter-row mt-6" role="tablist" aria-label="College archive programs">
          {archiveEvents.map((event) => {
            const isActive = active?.id === event.id
            return (
              <button
                key={event.id}
                type="button"
                onClick={() => setActiveId(event.id)}
                className={`event-selector-pill ${isActive ? 'active' : ''}`}
                role="tab"
                aria-selected={isActive}
              >
                <span className="max-w-[240px] truncate">{event.name}</span>
              </button>
            )
          })}
        </div>

        {active && (
          <article className="surface-light mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card-soft sm:p-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="event-badge badge-conference">{active.type}</span>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-sm font-semibold text-ieee-navy">{active.year}</span>
              <span className="text-sm text-slate-600">{active.date}</span>
            </div>
            <h3 className="font-heading mt-2 text-xl font-bold text-ieee-navy sm:text-2xl">{active.name}</h3>
            <p className="mt-1 text-sm font-medium text-ieee-primary">{active.venue}</p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{active.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="rounded border border-ieee-primary/30 bg-sky-50 px-2.5 py-1 font-medium text-ieee-dark">
                Role: {active.puneGroupRole}
              </span>
              {active.participants && (
                <span className="rounded border border-emerald-600/30 bg-emerald-50 px-2.5 py-1 font-medium text-ieee-success">
                  {active.participants}
                </span>
              )}
            </div>
            {active.topics && active.topics.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {active.topics.map((topic) => (
                  <span key={topic} className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-sm text-slate-600">
                    {topic}
                  </span>
                ))}
              </div>
            )}
            {PHOTO_EVENT_IDS.has(active.id) && active.gallery && active.gallery.length > 0 && (
              <div className="mt-5 border-t border-slate-200 pt-4">
                <h4 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-slate-500">
                  Photos ({active.gallery.length})
                </h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {active.gallery.map((photo) => {
                    const src = publicSrc(photo.image)
                    return (
                      <button
                        key={src}
                        type="button"
                        className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-[#F4F7FB] text-left"
                        onClick={() => onOpenLightbox?.({
                          src,
                          title: active.name,
                          meta: `${photo.caption} · ${active.date}`,
                        })}
                      >
                        <Image src={src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-contain object-center" />
                        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-sm leading-tight text-white">
                          {photo.caption}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
            {active.guestsResolved && active.guestsResolved.length > 0 && (
              <div className="mt-5 border-t border-slate-200 pt-4">
                <h4 className="mb-2 font-heading text-sm font-bold uppercase tracking-wider text-slate-500">
                  People on the college record
                </h4>
                <div className="grid gap-2 sm:grid-cols-2">
                  {active.guestsResolved.map((guest) => {
                    const profile = guestById(guest.id)
                    return (
                      <div key={guest.id} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                        <p className="text-base font-semibold text-ieee-navy">{guest.name}</p>
                        <p className="text-sm text-ieee-primary">{guest.role}</p>
                        <p className="text-sm text-slate-600">{guest.organization}</p>
                        <ProfileLinks linkedin={profile?.linkedin} website={profile?.website} className="mt-1 text-sm" />
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
            <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-200 pt-3 text-sm">
              {(active.links?.sources || []).map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-slate-100 px-2 py-1 text-ieee-primary hover:bg-slate-200"
                >
                  {source.label}
                </a>
              ))}
              {active.links?.registration && (
                <a href={active.links.registration} target="_blank" rel="noopener noreferrer" className="btn-primary px-3 py-1.5 text-xs">
                  Conference portal
                </a>
              )}
            </div>
          </article>
        )}
      </div>
    </section>
  )
}
