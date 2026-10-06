'use client'

import React, { useState } from 'react'
import guestsJson from '../data/guests.json'
import eventsJson from '../data/events.json'

interface Guest {
  id: string
  name: string
  role: string
  organization: string
  photo?: string | null
  linkedin?: string | null
  website?: string | null
  linkedinVerified?: boolean
  websiteVerified?: boolean
  bio?: string
  events?: string[]
}

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('').toUpperCase()
}

export default function Guests() {
  const allGuests = guestsJson.guests as Guest[]
  const allEvents = eventsJson.events

  const [activeCategory, setActiveCategory] = useState<'all' | 'keynote' | 'industry' | 'academic'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredGuests = allGuests.filter(g => {
    let matchesCat = true
    if (activeCategory === 'keynote') {
      matchesCat = !!(g.role?.toLowerCase().includes('chair') || g.role?.toLowerCase().includes('keynote') || g.role?.toLowerCase().includes('director'))
    } else if (activeCategory === 'industry') {
      matchesCat = !!(g.role?.toLowerCase().includes('founder') || g.role?.toLowerCase().includes('vp') || g.role?.toLowerCase().includes('consultant') || g.role?.toLowerCase().includes('practitioner') || g.role?.toLowerCase().includes('executive') || g.role?.toLowerCase().includes('manager'))
    } else if (activeCategory === 'academic') {
      matchesCat = !!(g.role?.toLowerCase().includes('professor') || g.role?.toLowerCase().includes('coordinator') || g.role?.toLowerCase().includes('scholar') || g.organization?.toLowerCase().includes('pccoe') || g.organization?.toLowerCase().includes('college'))
    }

    const text = `${g.name} ${g.role} ${g.organization} ${g.bio || ''}`.toLowerCase()
    const matchesQuery = !searchQuery || text.includes(searchQuery.toLowerCase().trim())

    return matchesCat && matchesQuery
  })

  return (
    <section id="guests" className="section-padding bg-slate-50 border-t border-slate-200">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">Distinguished Roster</span>
            <h2 className="font-heading mt-1.5 text-2xl font-bold text-ieee-navy sm:text-3xl">
              Guests, Keynote Speakers &amp; Coordinators
            </h2>
            <p className="mt-1 text-xs text-slate-600 max-w-2xl sm:text-sm">
              Verified directory of global IEEE chairs, government advisors, corporate technology leaders, and academic researchers who have presented at IEEE Pune Blockchain Group initiatives.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: `All Guests (${allGuests.length})` },
              { id: 'keynote', label: 'Keynotes & Chairs' },
              { id: 'industry', label: 'Industry Leaders' },
              { id: 'academic', label: 'Academicians' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id as any)}
                className={`filter-chip ${activeCategory === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guests by name, designation, organization (e.g. Ramesh Ramadoss, TCS, C-DAC, Dhiway)..."
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-ieee-primary focus:bg-white"
          />
          <span className="text-xs text-slate-500 font-medium px-2 whitespace-nowrap">
            Showing {filteredGuests.length} of {allGuests.length} guests
          </span>
        </div>

        {/* Guests Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredGuests.map(g => {
            const appearedEvents = (g.events || []).map(evId => {
              const found = allEvents.find(e => e.id === evId)
              return found ? { id: found.id, name: found.name, year: found.year } : null
            }).filter(Boolean)

            return (
              <div key={g.id} className="guest-card">
                <div className="flex items-start gap-3">
                  <div className="guest-avatar-ring">
                    {g.photo ? (
                      <img src={g.photo.replace('assets/', '/')} alt={g.name} loading="lazy" className="w-full h-full object-cover" />
                    ) : (
                      <div className="guest-avatar-initials">{getInitials(g.name)}</div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-heading text-sm font-bold text-ieee-navy leading-snug">{g.name}</h4>
                    <p className="text-xs font-semibold text-ieee-primary mt-0.5 line-clamp-1">{g.role}</p>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{g.organization}</p>
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed flex-1 line-clamp-3">
                  {g.bio || 'Distinguished subject-matter expert contributing to IEEE Pune Blockchain Group initiatives.'}
                </p>

                {/* Appeared At Badges */}
                {appearedEvents.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Appeared At:</span>
                    <div className="flex flex-wrap gap-1">
                      {appearedEvents.map((ev, i) => (
                        <a
                          key={i}
                          href="#events"
                          className="text-[10px] bg-slate-100 hover:bg-sky-100 hover:text-ieee-primary text-slate-700 px-2 py-0.5 rounded transition font-medium text-left truncate max-w-[190px]"
                        >
                          {ev!.year} · {ev!.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Profile Links */}
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  {g.linkedin ? (
                    <a
                      href={g.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-ieee-primary hover:text-ieee-brightcyan transition"
                    >
                      <svg className="w-3.5 h-3.5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span>LinkedIn</span>
                      <span className="text-[10px] text-emerald-600 font-bold">✓</span>
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-400">Profile on record</span>
                  )}

                  {g.website && (
                    <a
                      href={g.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-ieee-navy font-medium ml-auto"
                    >
                      Official Site ↗
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
