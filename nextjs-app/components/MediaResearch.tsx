'use client'

import React from 'react'
import activities from '../data/activities.json'
import { LightboxData } from './Lightbox'
import ActivityDetail from './ActivityDetail'
import { Activity, byLatest } from './activity'

interface MediaResearchProps {
  onOpenLightbox?: (data: LightboxData) => void
}

const latest = byLatest<Activity>((item) => item.dateLabel)
const media = [...(activities.media as Activity[])].sort(latest)
const publications = [...(activities.publications as Activity[])].sort(latest)
const community = [...(activities.community as Activity[])].sort(latest)

function Block({
  id,
  kicker,
  title,
  intro,
  items,
  onOpenLightbox,
}: {
  id?: string
  kicker: string
  title: string
  intro: string
  items: Activity[]
  onOpenLightbox?: (data: LightboxData) => void
}) {
  return (
    <div id={id}>
      <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">{kicker}</span>
      <h2 className="font-heading mt-1.5 text-2xl font-bold text-ieee-navy sm:text-3xl">{title}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{intro}</p>
      <div className="mt-5 space-y-5">
        {items.map((item) => (
          <ActivityDetail key={item.id} activity={item} onOpen={onOpenLightbox} surface="light" />
        ))}
      </div>
    </div>
  )
}

export default function MediaResearch({ onOpenLightbox }: MediaResearchProps) {
  return (
    <section className="section-padding border-t border-[#C9EBE8]">
      <div className="section-container space-y-12">
        <Block
          id="media"
          kicker="Media"
          title="Podcasts and interviews"
          intro="Recorded conversations are kept with media, separate from the group event archive."
          items={media}
          onOpenLightbox={onOpenLightbox}
        />
        <Block
          id="research"
          kicker="Research and publications"
          title="Books and scholarly work"
          intro="Publications are listed as thought leadership, not as events."
          items={publications}
          onOpenLightbox={onOpenLightbox}
        />
        <Block
          id="community"
          kicker="Community"
          title="Ecosystem opportunities"
          intro="This hackathon was promoted in the source. The post does not establish IEEE Pune Blockchain Group as the organizer, so it stays outside the event archive."
          items={community}
          onOpenLightbox={onOpenLightbox}
        />
      </div>
    </section>
  )
}
