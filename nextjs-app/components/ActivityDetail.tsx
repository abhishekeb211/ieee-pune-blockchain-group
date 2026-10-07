'use client'

import React from 'react'
import Image from 'next/image'
import { LightboxData } from './Lightbox'
import { Activity, activityToLightbox, badgeClass } from './activity'

interface ActivityDetailProps {
  activity: Activity
  onOpen?: (data: LightboxData) => void
  surface?: 'dark' | 'light'
}

export default function ActivityDetail({ activity, onOpen, surface = 'dark' }: ActivityDetailProps) {
  const dark = surface === 'dark'
  const cover = activity.images[0]

  return (
    <div className={dark
      ? 'rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-7 shadow-xl'
      : 'institutional-card surface-light p-5 sm:p-7'
    }>
      <div className="grid items-start gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          {cover ? (
            <button
              type="button"
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 text-left shadow-card-soft"
              onClick={() => onOpen?.(activityToLightbox(activity, cover))}
            >
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/20 to-transparent p-3.5">
                <span className="chip mb-1 w-fit">{activity.category}</span>
                <span className="text-xs font-medium text-white/90">Open photo</span>
              </div>
            </button>
          ) : (
            <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 text-center text-xs text-slate-500 sm:h-64">
              No photo was included with this record.
            </div>
          )}
        </div>

        <div className="lg:col-span-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`event-badge ${badgeClass(activity.category)}`}>{activity.category}</span>
            <span className={dark
              ? 'rounded bg-white/10 px-2 py-0.5 text-xs font-semibold text-white'
              : 'rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-ieee-navy'
            }>
              {activity.classification}
            </span>
            <span className={dark ? 'text-xs text-slate-300' : 'text-xs text-slate-500'}>{activity.dateLabel}</span>
          </div>

          <h3 className={`font-heading mt-2 text-xl font-bold sm:text-2xl ${dark ? 'text-white' : 'text-ieee-navy'}`}>
            {activity.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-ieee-primary">{activity.venue}</p>
          <p className={`mt-2.5 text-base leading-relaxed ${dark ? 'text-slate-200' : 'text-slate-600'}`}>
            {activity.summary}
          </p>

          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className={dark
              ? 'rounded border border-ieee-primary/50 bg-ieee-primary/30 px-2.5 py-1 font-medium text-cyan-200'
              : 'rounded border border-ieee-primary/30 bg-sky-50 px-2.5 py-1 font-medium text-ieee-dark'
            }>
              {activity.role}
            </span>
          </div>

          <dl className={`mt-3 space-y-1 text-xs ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
            <div><dt className="inline font-semibold">Organizer: </dt><dd className="inline">{activity.organizers}</dd></div>
            <div><dt className="inline font-semibold">Association: </dt><dd className="inline">{activity.association}</dd></div>
            <div><dt className="inline font-semibold">Source: </dt><dd className="inline">{activity.sourcePost}</dd></div>
          </dl>

          {activity.topics.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {activity.topics.map((topic) => (
                <span
                  key={topic}
                  className={dark
                    ? 'rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-300'
                    : 'rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-600'
                  }
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {activity.images.length > 0 && (
        <div className={`mt-5 border-t pt-4 ${dark ? 'border-white/10' : 'border-slate-200'}`}>
          <h4 className={`mb-3 font-heading text-xs font-bold uppercase tracking-wider ${dark ? 'text-slate-300' : 'text-slate-500'}`}>
            Photos ({activity.images.length})
          </h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {activity.images.map((image) => (
              <button
                key={image.src}
                type="button"
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 text-left"
                onClick={() => onOpen?.(activityToLightbox(activity, image))}
              >
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-[10px] leading-tight text-white">
                  {image.caption}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {activity.people.length > 0 && (
        <div className={`mt-5 border-t pt-4 ${dark ? 'border-white/10' : 'border-slate-200'}`}>
          <h4 className={`mb-2 font-heading text-xs font-bold uppercase tracking-wider ${dark ? 'text-slate-300' : 'text-slate-500'}`}>
            People recorded in the source
          </h4>
          <ul className={`grid gap-1.5 text-xs sm:grid-cols-2 ${dark ? 'text-slate-200' : 'text-slate-700'}`}>
            {activity.people.map((person) => (
              <li key={person} className={dark ? 'rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5' : 'rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5'}>
                {person}
              </li>
            ))}
          </ul>
        </div>
      )}

      {activity.externalLink && (
        <div className={`mt-4 border-t pt-3 ${dark ? 'border-white/10' : 'border-slate-200'}`}>
          <a
            href={activity.externalLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-1.5 px-3"
          >
            {activity.externalLink.label}
          </a>
        </div>
      )}
    </div>
  )
}
