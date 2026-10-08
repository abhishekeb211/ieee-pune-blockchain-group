'use client'

import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import activities from '../data/activities.json'
import { LightboxData } from './Lightbox'
import ActivityDetail from './ActivityDetail'
import { Activity, activityToLightbox, badgeClass, byLatest } from './activity'

interface EventsProps {
  onSelectPhoto?: (data: LightboxData) => void
  onOpenLightbox?: (data: LightboxData) => void
}

const programs = [...(activities.groupPrograms as Activity[])].sort(byLatest((event) => event.dateLabel))
const categories = ['Flagship', 'FDP', 'STTP'] as const

function matchesQuery(event: Activity, query: string) {
  if (!query) return true
  const haystack = [
    event.title,
    event.venue,
    event.summary,
    event.role,
    event.organizers,
    event.topics.join(' '),
    event.people.join(' '),
  ].join(' ').toLowerCase()
  return haystack.includes(query.toLowerCase().trim())
}

export default function Events({ onSelectPhoto, onOpenLightbox }: EventsProps) {
  const openPhoto = onSelectPhoto || onOpenLightbox
  const [selectedYear, setSelectedYear] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [activeEventId, setActiveEventId] = useState<string>(programs[0].id)
  const [searchQuery, setSearchQuery] = useState('')

  const yearOptions = useMemo(() => {
    const years = Array.from(new Set(programs.map((event) => event.year).filter((year): year is string => Boolean(year))))
    years.sort((a, b) => Number(b) - Number(a))
    const options = ['all', ...years]
    if (programs.some((event) => !event.year)) options.push('undated')
    return options
  }, [])

  const visibleForCounts = (year: string, category: string) => programs.filter((event) => {
    const yearOk = year === 'all' || (year === 'undated' ? !event.year : event.year === year)
    const categoryOk = category === 'all' || event.category === category
    return yearOk && categoryOk
  })

  const filteredEvents = visibleForCounts(selectedYear, selectedCategory).filter((event) => matchesQuery(event, searchQuery))
  const activeEvent = filteredEvents.find((event) => event.id === activeEventId) || filteredEvents[0]

  const yearLabel = (year: string) => {
    if (year === 'all') return `All programs (${visibleForCounts('all', selectedCategory).length})`
    if (year === 'undated') return `Date not stated (${visibleForCounts('undated', selectedCategory).length})`
    return `${year} (${visibleForCounts(year, selectedCategory).length})`
  }

  const selectYear = (year: string) => {
    setSelectedYear(year)
    const next = visibleForCounts(year, selectedCategory)
    if (next.length > 0) setActiveEventId(next[0].id)
  }

  const selectCategory = (category: string) => {
    setSelectedCategory(category)
    const next = visibleForCounts(selectedYear, category)
    if (next.length > 0) setActiveEventId(next[0].id)
  }

  return (
    <section id="events" className="section-padding text-ieee-ink">
      <div className="section-container">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-ieee-primary">
              Group programs and collaborations
            </span>
            <h2 className="page-title mt-3">
              Events
            </h2>
            <p className="measure mt-2 text-base text-slate-600">
              Flagship events, faculty development programs, and the STTP that the content pack records as organized by IEEE Blockchain Pune Local Group or conducted in association with the group.
            </p>
          </div>
          <div className="filter-row" role="tablist" aria-label="Event years">
            {yearOptions.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => selectYear(year)}
                className={`timeline-tab ${selectedYear === year ? 'active' : ''}`}
                role="tab"
                aria-selected={selectedYear === year}
              >
                {yearLabel(year)}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-row mt-4" role="tablist" aria-label="Event categories">
          <button
            type="button"
            onClick={() => selectCategory('all')}
            className={`timeline-tab ${selectedCategory === 'all' ? 'active' : ''}`}
          >
            All types ({visibleForCounts(selectedYear, 'all').length})
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => selectCategory(category)}
              className={`timeline-tab ${selectedCategory === category ? 'active' : ''}`}
            >
              {category} ({visibleForCounts(selectedYear, category).length})
            </button>
          ))}
        </div>

        {filteredEvents.length > 0 && (
          <div className="mt-6 border-b border-slate-200 pb-3">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-bold uppercase tracking-wider text-slate-500">Programs in this view</span>
              <span className="text-sm font-medium text-ieee-primary">Select a program to read the full record</span>
            </div>
            <div className="filter-row pb-2" role="tablist" aria-label="Event selection">
              {filteredEvents.map((event) => {
                const isActive = activeEvent?.id === event.id
                return (
                  <button
                    key={event.id}
                    type="button"
                    onClick={() => setActiveEventId(event.id)}
                    className={`event-selector-pill ${isActive ? 'active' : ''}`}
                    role="tab"
                    aria-selected={isActive}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-cyan-400'}`} />
                    <span className="max-w-[220px] truncate">{event.title}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        <div className="mt-6">
          {activeEvent ? (
            <ActivityDetail activity={activeEvent} onOpen={openPhoto} surface="light" />
          ) : (
            <p className="rounded-xl border border-slate-200 bg-surface-muted px-4 py-6 text-base text-slate-600">
              No programs match this filter.
            </p>
          )}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-heading text-base font-bold uppercase tracking-wider text-ieee-navy">
              Program index
            </h3>
            <p className="text-sm text-slate-600">Search titles, hosts, topics, and people named in the content pack</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search programs, hosts, topics..."
              className="form-input sm:w-72"
            />
            <span className="whitespace-nowrap text-sm font-medium text-slate-600">
              Showing {filteredEvents.length} of {programs.length}
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredEvents.map((event) => {
            const cover = event.images[0]
            return (
              <article
                key={event.id}
                className={`lift-card flex flex-col rounded-xl bg-white p-4 ${activeEvent?.id === event.id ? 'is-selected' : ''}`}
              >
                {cover && (
                  <button
                    type="button"
                    className="group relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#F4F7FB]"
                    onClick={() => openPhoto?.(activityToLightbox(event, cover))}
                  >
                    <Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain object-center" />
                    <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white">
                      Open photo
                    </span>
                  </button>
                )}
                <div className="flex items-center justify-between gap-2">
                  <span className={`event-badge ${badgeClass(event.category)}`}>{event.category}</span>
                  <span className="text-xs text-slate-400">{event.dateLabel}</span>
                </div>
                <h3 className="font-heading mt-2.5 text-base font-semibold leading-snug text-ieee-navy">{event.title}</h3>
                <p className="mt-1 text-sm font-medium text-ieee-primary">{event.venue}</p>
                <p className="mt-2 text-sm text-slate-600">
                  <strong>Role: </strong>{event.role}
                </p>
                <p className="mt-1 line-clamp-3 flex-1 text-sm text-slate-600">{event.summary}</p>
                <button
                  type="button"
                  onClick={() => setActiveEventId(event.id)}
                  className="mt-3 min-h-11 border-t border-slate-200 pt-3 text-left text-sm font-semibold text-ieee-primary"
                >
                  Read this record
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
