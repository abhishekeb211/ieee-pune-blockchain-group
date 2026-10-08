'use client'

import React, { useState } from 'react'
import Events from './Events'
import Outreach from './Outreach'
import MediaResearch from './MediaResearch'
import CollegeArchive from './CollegeArchive'
import Lightbox, { LightboxData } from './Lightbox'

const tabs = [
  { id: 'programs', label: 'Programs' },
  { id: 'outreach', label: 'Outreach' },
  { id: 'media', label: 'Media' },
  { id: 'archive', label: 'Archive' },
] as const

type TabId = (typeof tabs)[number]['id']

export default function ActivitiesHub() {
  const [tab, setTab] = useState<TabId>('programs')
  const [photo, setPhoto] = useState<LightboxData | null>(null)

  return (
    <>
      <div className="border-b border-[#C9EBE8] bg-white">
        <div className="section-container filter-row py-4" role="tablist" aria-label="Activity sections">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              onClick={() => setTab(item.id)}
              className={`timeline-tab ${tab === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      {tab === 'programs' && <Events onSelectPhoto={setPhoto} />}
      {tab === 'outreach' && <Outreach onOpenLightbox={setPhoto} />}
      {tab === 'media' && <MediaResearch onOpenLightbox={setPhoto} />}
      {tab === 'archive' && <CollegeArchive onOpenLightbox={setPhoto} />}
      <Lightbox data={photo} onClose={() => setPhoto(null)} />
    </>
  )
}
