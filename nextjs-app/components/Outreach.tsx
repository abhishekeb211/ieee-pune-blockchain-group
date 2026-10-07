'use client'

import React, { useState } from 'react'
import activities from '../data/activities.json'
import { LightboxData } from './Lightbox'
import ActivityDetail from './ActivityDetail'
import { Activity, badgeClass } from './activity'

interface OutreachProps {
  onOpenLightbox?: (data: LightboxData) => void
}

const talks = activities.outreach as Activity[]

export default function Outreach({ onOpenLightbox }: OutreachProps) {
  const [activeId, setActiveId] = useState(talks[0].id)
  const active = talks.find((item) => item.id === activeId) || talks[0]

  return (
    <section id="outreach" className="section-padding border-t border-slate-200 bg-white">
      <div className="section-container">
        <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">
          Leadership and outreach
        </span>
        <h2 className="font-heading mt-1.5 text-2xl font-bold text-ieee-navy sm:text-3xl">
          Chair talks, panels, and conference roles
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
          Dr. Sonali D. Patil took part in these programs as a speaker, panelist, or conference leader. They are not labeled as IEEE Pune Blockchain Group events.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {talks.map((item) => {
            const selected = item.id === active.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`surface-light rounded-xl border p-4 text-left transition ${selected ? 'border-ieee-primary bg-sky-50 shadow-card-soft' : 'border-slate-200 bg-white hover:border-ieee-cyan'}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`event-badge ${badgeClass(item.category)}`}>{item.category}</span>
                  <span className="text-sm text-slate-500">{item.dateLabel}</span>
                </div>
                <h3 className="font-heading mt-2 text-sm font-semibold leading-snug text-ieee-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.role}</p>
              </button>
            )
          })}
        </div>

        <div className="mt-6">
          <ActivityDetail activity={active} onOpen={onOpenLightbox} surface="light" />
        </div>
      </div>
    </section>
  )
}
