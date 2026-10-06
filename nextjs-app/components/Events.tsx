'use client'

import React, { useState } from 'react'
import { LightboxData } from './Lightbox'
import eventsJson from '../data/events.json'

// Key Verified Milestone Events: symposium-2024, ebct-2024, icdlt-2025, decentrahack-2026, fdp-decai-2026

interface EventsProps {
  onSelectPhoto?: (data: LightboxData) => void
  onOpenLightbox?: (data: LightboxData) => void
}

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('').toUpperCase()
}

export default function Events({ onSelectPhoto, onOpenLightbox }: EventsProps) {
  const triggerLightbox = onSelectPhoto || onOpenLightbox
  const allEvents = eventsJson.events
  const [selectedYear, setSelectedYear] = useState<'all' | '2024' | '2025' | '2026'>('all')
  const [activeEventId, setActiveEventId] = useState<string>(allEvents[0].id)
  const [searchQuery, setSearchQuery] = useState('')

  // Subtabs list based on current year filter
  const subtabEvents = (selectedYear === 'all')
    ? allEvents
    : allEvents.filter(e => e.year === selectedYear)

  const activeEvent = allEvents.find(e => e.id === activeEventId) || subtabEvents[0] || allEvents[0]

  // Filtered list for the 10-event grid
  const filteredEvents = allEvents.filter(event => {
    const matchesYear = (selectedYear === 'all' || event.year === selectedYear)
    const textContent = `${event.name} ${event.venue} ${event.description} ${event.topics?.join(' ') || ''}`.toLowerCase()
    const matchesSearch = !searchQuery || textContent.includes(searchQuery.toLowerCase().trim())
    return matchesYear && matchesSearch
  })

  return (
    <section id="events" className="bg-ieee-nearblack py-12 text-white border-t border-slate-800">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-ieee-brightcyan">
              Conference &amp; Activity Record
            </span>
            <h2 className="font-heading mt-1.5 text-2xl font-bold sm:text-3xl">
              Chronological Events &amp; Symposia
            </h2>
            <p className="mt-1 text-xs text-slate-300 max-w-xl">
              Verified record of flagship conventions, FDPs, hackathons, and technical workshops organized in association with the IEEE Pune Blockchain Group.
            </p>
          </div>

          {/* Year Filter Pills */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Event Years">
            {[
              { id: 'all', label: `All Events (${allEvents.length})` },
              { id: '2026', label: '2026 (2)' },
              { id: '2025', label: '2025 (4)' },
              { id: '2024', label: '2024 (4)' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setSelectedYear(tab.id as any)
                  const matching = (tab.id === 'all') ? allEvents : allEvents.filter(e => e.year === tab.id)
                  if (matching.length > 0) setActiveEventId(matching[0].id)
                }}
                className={`timeline-tab ${selectedYear === tab.id ? 'active' : ''}`}
                role="tab"
                aria-selected={selectedYear === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Special Event Selector Tabs (per Year / All) */}
        <div className="mt-6 border-b border-white/10 pb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
              Interactive Event Tabs:
            </span>
            <span className="text-[11px] text-ieee-brightcyan font-medium">Click any tab below to inspect full event details</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Event Selection Tabs">
            {subtabEvents.map(ev => {
              const isActive = (activeEvent.id === ev.id)
              return (
                <button
                  key={ev.id}
                  type="button"
                  onClick={() => setActiveEventId(ev.id)}
                  className={`event-selector-pill ${isActive ? 'active' : ''}`}
                  role="tab"
                  aria-selected={isActive}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-cyan-400'}`}></span>
                  <span className="truncate max-w-[200px]">{ev.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Dedicated Event Detail Panel */}
        {activeEvent && (
          <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-7 shadow-xl backdrop-blur transition-all">
            <div className="grid gap-6 lg:grid-cols-12 items-start">
              {/* Cover Image */}
              <div className="lg:col-span-4">
                <div
                  className="group relative overflow-hidden rounded-xl border border-white/15 bg-black cursor-pointer shadow-lg"
                  onClick={() => triggerLightbox?.({
                    src: (activeEvent.coverImage || activeEvent.gallery?.[0]?.image || '/images/events/symposium-2024-stage.jpg').replace('assets/', '/'),
                    title: activeEvent.name,
                    meta: `${activeEvent.date} · ${activeEvent.venue}`,
                    source: activeEvent.links?.sources?.[0]?.url
                  })}
                >
                  <img
                    src={(activeEvent.coverImage || activeEvent.gallery?.[0]?.image || '/images/events/symposium-2024-stage.jpg').replace('assets/', '/')}
                    alt={activeEvent.name}
                    className="w-full h-56 sm:h-64 object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-3.5">
                    <span className="chip chip-cyan w-fit mb-1">{activeEvent.year} Cover Image</span>
                    <span className="text-xs text-white/90 font-medium">Click to Inspect in Lightbox ↗</span>
                  </div>
                </div>
              </div>

              {/* Event Metadata */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="event-badge badge-symposium">{activeEvent.type}</span>
                    <span className="rounded bg-white/10 px-2 py-0.5 text-xs font-semibold text-white">{activeEvent.year}</span>
                    <span className="text-xs text-slate-300">📅 {activeEvent.date}</span>
                  </div>

                  <h3 className="font-heading mt-2 text-xl sm:text-2xl font-bold text-white">
                    {activeEvent.name}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm font-medium text-ieee-brightcyan">
                    📍 {activeEvent.venue}
                  </p>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {activeEvent.description}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded bg-ieee-primary/30 border border-ieee-primary/50 px-2.5 py-1 text-cyan-200 font-medium">
                      Role: {activeEvent.puneGroupRole}
                    </span>
                    {activeEvent.participants && (
                      <span className="rounded bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 text-emerald-300 font-medium">
                        {activeEvent.participants}
                      </span>
                    )}
                  </div>

                  {activeEvent.topics && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {activeEvent.topics.map((t, idx) => (
                        <span key={idx} className="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Event Photo Gallery */}
            {activeEvent.gallery && activeEvent.gallery.length > 0 && (
              <div className="mt-5 border-t border-white/10 pt-4">
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-ieee-brightcyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Event Photo Gallery ({activeEvent.gallery.length} Photos)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeEvent.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 cursor-pointer transition hover:border-ieee-brightcyan"
                      onClick={() => triggerLightbox?.({
                        src: img.image.replace('assets/', '/'),
                        title: activeEvent.name,
                        meta: `${img.caption} · ${img.credit || ''}`,
                        source: activeEvent.links?.sources?.[0]?.url
                      })}
                    >
                      <img
                        src={img.image.replace('assets/', '/')}
                        alt={img.alt || activeEvent.name}
                        className="h-32 w-full object-cover transition duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2 opacity-90 group-hover:opacity-100">
                        <p className="text-[10px] text-white line-clamp-2 leading-tight">{img.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Event Guests */}
            {activeEvent.guestsResolved && activeEvent.guestsResolved.length > 0 && (
              <div className="mt-5 border-t border-white/10 pt-4">
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-ieee-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  Featured Speakers &amp; Dignitaries ({activeEvent.guestsResolved.length})
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {activeEvent.guestsResolved.map(g => (
                    <div key={g.id} className="rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col justify-between">
                      <div className="flex items-start gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-ieee-primary to-ieee-brightcyan flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm">
                          {getInitials(g.name)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h5 className="text-xs font-bold text-white truncate">{g.name}</h5>
                          <p className="text-[10px] text-cyan-300 truncate">{g.role}</p>
                          <p className="text-[10px] text-slate-400 truncate">{g.organization}</p>
                        </div>
                      </div>
                      <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center gap-2">
                        {g.linkedin ? (
                          <a
                            href={g.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] inline-flex items-center gap-1 font-semibold text-ieee-brightcyan hover:underline"
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            LinkedIn ✓
                          </a>
                        ) : (
                          <span className="text-[9px] text-slate-500">Profile on record</span>
                        )}
                        {g.website && (
                          <a
                            href={g.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] text-slate-400 hover:text-white ml-auto"
                          >
                            Website ↗
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Links & Sources */}
            <div className="mt-5 border-t border-white/10 pt-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-slate-400 font-medium">Verified Sources:</span>
                {(activeEvent.links?.sources || []).map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-cyan-200 hover:bg-white/20 transition"
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2">
                {activeEvent.links?.recap && (
                  <a
                    href={activeEvent.links.recap}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-1.5 px-3"
                  >
                    Event Recap / Archive ↗
                  </a>
                )}
                {activeEvent.links?.registration && (
                  <a
                    href={activeEvent.links.registration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-ieee-gold px-3 py-1.5 text-xs font-bold text-slate-900 hover:bg-amber-400 transition"
                  >
                    Conference Portal ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Complete Events Index Header & Live Search */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Complete Events &amp; Symposia Index
            </h3>
            <p className="text-xs text-slate-400">Search and filter across the complete 10-event archive</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events, speakers, topics..."
                className="w-full bg-slate-900/80 border border-white/15 rounded-lg px-3.5 py-1.5 text-xs text-white placeholder-slate-400 outline-none focus:border-ieee-brightcyan"
              />
            </div>
            <span className="text-xs text-slate-300 font-medium whitespace-nowrap">
              Showing {filteredEvents.length} of {allEvents.length} events
            </span>
          </div>
        </div>

        {/* 10 Verified Events Grid */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-4.5 transition hover:border-ieee-brightcyan/60 hover:bg-white/10"
              data-event-year={event.year}
            >
              {event.coverImage && (
                <div
                  className="cursor-pointer group relative overflow-hidden rounded-lg mb-3"
                  onClick={() => triggerLightbox?.({
                    src: event.coverImage.replace('assets/', '/'),
                    title: event.name,
                    meta: `${event.date} · ${event.venue}`,
                    source: event.links?.sources?.[0]?.url
                  })}
                >
                  <img
                    src={event.coverImage.replace('assets/', '/')}
                    alt={event.name}
                    className="event-thumb"
                  />
                  <span className="absolute bottom-2 right-2 bg-black/70 backdrop-blur text-[10px] text-white px-2 py-0.5 rounded font-medium">
                    Zoom Photo
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="event-badge badge-symposium">
                  {event.type}
                </span>
                <span className="text-xs text-slate-400">{event.date}</span>
              </div>

              <h3 className="font-heading mt-2.5 text-base font-semibold leading-snug text-white">
                {event.name}
              </h3>

              <p className="mt-1 text-xs text-ieee-brightcyan font-medium">{event.venue}</p>

              <div className="mt-2 text-xs text-slate-300 flex-1 space-y-1.5">
                <p>
                  <strong>Role:</strong> {event.puneGroupRole}
                </p>
                {event.participants && (
                  <div className="inline-block rounded bg-ieee-primary/30 px-2 py-0.5 text-[11px] text-cyan-200">
                    {event.participants}
                  </div>
                )}
                <p className="text-slate-400 text-[11px] line-clamp-2">
                  {event.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="truncate max-w-[170px]">{event.links?.sources?.[0]?.label || 'Verified Archive'}</span>
                <span className="text-ieee-brightcyan">Verified ✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
