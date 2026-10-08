'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import activities from '../data/activities.json'
import { Activity, byLatest } from './activity'
import { LightboxData } from './Lightbox'

interface GalleryItem {
  id: string
  category: 'symposium' | 'lab' | 'events' | 'record'
  badge: string
  badgeClass?: string
  title: string
  subtitle: string
  meta: string
  src: string
  source: string
}

function galleryCategory(activity: Activity): GalleryItem['category'] {
  if (activity.id === 'blockchain-symposium-2024') return 'symposium'
  if (activity.category === 'FDP' || activity.category === 'STTP') return 'events'
  return 'record'
}

const activityRecords = [
  ...(activities.groupPrograms as Activity[]),
  ...(activities.outreach as Activity[]),
  ...(activities.media as Activity[]),
  ...(activities.publications as Activity[]),
  ...(activities.community as Activity[]),
]

const activityItems: GalleryItem[] = activityRecords.flatMap((activity) =>
  activity.images.map((image, index) => ({
    id: `${activity.id}-${index + 1}`,
    category: galleryCategory(activity),
    badge: activity.category,
    badgeClass: activity.category === 'FDP' || activity.category === 'STTP' ? 'chip-gold' : undefined,
    title: activity.title,
    subtitle: activity.dateLabel,
    meta: image.caption,
    src: image.src,
    source: activity.externalLink?.url || '',
  }))
)

const archiveItems: GalleryItem[] = [
  {
    id: 'decai-fdp-2026-1',
    category: 'events',
    badge: 'FDP',
    badgeClass: 'chip-gold',
    title: 'National-Level Faculty Development Program on Decentralized AI',
    subtitle: '02 - 07 February 2026',
    meta: 'Inaugural session of the National FDP on Decentralized AI at PCCOE Computer Engineering Dept.',
    src: '/images/events/2026/decai-fdp/decai-fdp-2026.jpg',
    source: '',
  },
  {
    id: 'decai-fdp-2026-2',
    category: 'events',
    badge: 'FDP',
    badgeClass: 'chip-gold',
    title: 'National-Level Faculty Development Program on Decentralized AI',
    subtitle: '02 - 07 February 2026',
    meta: 'Hands-on lab training during the Decentralized AI FDP.',
    src: '/images/events/2026/decai-fdp/decai-fdp-hands-on.jpg',
    source: '',
  },
  {
    id: 'decai-fdp-2026-3',
    category: 'events',
    badge: 'FDP',
    badgeClass: 'chip-gold',
    title: 'National-Level Faculty Development Program on Decentralized AI',
    subtitle: '02 - 07 February 2026',
    meta: 'Valedictory session of the Decentralized AI FDP.',
    src: '/images/events/2026/decai-fdp/decai-fdp-valedictory.jpg',
    source: '',
  },
  {
    id: 'decentrahack-2026',
    category: 'record',
    badge: 'Hackathon',
    title: 'DecentraHACK 2026',
    subtitle: '17 - 23 January 2026',
    meta: 'DecentraHACK 2026 keynote demonstration and project judging ceremony.',
    src: '/images/events/2026/decentrahack/decentrahack-2026.jpg',
    source: '',
  },
  {
    id: 'hyperledger-2025-1',
    category: 'record',
    badge: 'Expert session',
    title: 'Expert Session on Hyperledger and Enterprise Applications',
    subtitle: '26 August 2025',
    meta: 'Expert speaker addressing students on enterprise blockchain architectures.',
    src: '/images/events/2025/hyperledger/hyperledger-session-2025.jpg',
    source: '',
  },
  {
    id: 'hyperledger-2025-2',
    category: 'record',
    badge: 'Expert session',
    title: 'Expert Session on Hyperledger and Enterprise Applications',
    subtitle: '26 August 2025',
    meta: 'Architectural breakdown of Hyperledger Fabric peers, orderers, and chaincode.',
    src: '/images/events/2025/hyperledger/hyperledger-session-presentation.jpg',
    source: '',
  },
  {
    id: 'hyperledger-2025-3',
    category: 'record',
    badge: 'Expert session',
    title: 'Expert Session on Hyperledger and Enterprise Applications',
    subtitle: '26 August 2025',
    meta: 'Student questions on enterprise consortium networks and private channels.',
    src: '/images/events/2025/hyperledger/hyperledger-interactive.jpg',
    source: '',
  },
]

const labItems: GalleryItem[] = [
  {
    id: 'mmcoe-hpc-rig',
    category: 'lab',
    badge: 'HPC Laboratory',
    title: '19 GPU Compute Server Rig',
    subtitle: 'Consensus & AI Acceleration',
    meta: 'Department of IT, MMCOE Pune · 3U 64 Cores, 32GB RAM, 1TB SSD',
    src: '/images/lab/mmcoe-hpc-rig.png',
    source: 'https://mmcoe.edu.in/departments/information-technology/learning-infrastructure/blockchain/',
  },
  {
    id: 'mmcoe-server-rack',
    category: 'lab',
    badge: 'HPC Laboratory',
    title: '42U Enterprise Server Rack',
    subtitle: '50KVA PDU Power Infrastructure',
    meta: 'MMCOE Centre of Excellence in Blockchain Technology',
    src: '/images/lab/mmcoe-server-rack.png',
    source: 'https://mmcoe.edu.in/departments/information-technology/learning-infrastructure/blockchain/',
  },
]

const galleryItems: GalleryItem[] = [
  ...[...activityItems, ...archiveItems].sort(byLatest((item) => item.subtitle)),
  ...labItems,
]

interface GalleryProps {
  onSelectPhoto: (data: LightboxData) => void
}

export default function Gallery({ onSelectPhoto }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'symposium' | 'lab' | 'events'>('all')

  const filteredItems = galleryItems.filter((item) =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  )

  return (
    <section id="gallery" className="section-padding border-t border-[#D5EDEC]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">
              Visual Archives &amp; Authentic Media
            </span>
            <h2 className="page-title mt-3">
              Photo Showcase Gallery
            </h2>
            <p className="measure mt-2 text-base text-slate-600">
              Authentic photographic documentation from our symposia, laboratory facilities, faculty programs, and national hackathons. Click any image for full-screen inspection.
            </p>
          </div>

          <div className="filter-row">
            {[
              { id: 'all', label: `All Photos (${galleryItems.length})` },
              { id: 'symposium', label: 'Symposium 2024' },
              { id: 'lab', label: 'Blockchain Lab' },
              { id: 'events', label: 'FDPs & STTPs' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id as 'all' | 'symposium' | 'lab' | 'events')}
                className={`filter-chip ${selectedCategory === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid mt-8">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                onSelectPhoto({
                  src: item.src,
                  title: item.title,
                  meta: item.meta,
                  source: item.source || undefined,
                })
              }
              className="gallery-card text-left"
            >
              <Image
                src={item.src}
                alt={item.meta}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain object-center"
              />
              <div className="gallery-overlay">
                <span className={`chip ${item.badgeClass || ''} mb-1.5 w-fit`}>
                  {item.badge}
                </span>
                <h2 className="font-heading text-base font-bold text-white line-clamp-1">
                  {item.title}
                </h2>
                <p className="text-sm text-slate-200">{item.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
