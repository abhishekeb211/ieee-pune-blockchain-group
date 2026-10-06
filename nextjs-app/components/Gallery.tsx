'use client'

import React, { useState } from 'react'
import { LightboxData } from './Lightbox'

interface GalleryItem {
  id: string
  category: 'symposium' | 'lab' | 'events'
  badge: string
  badgeClass?: string
  title: string
  subtitle: string
  meta: string
  src: string
  source: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 'symposium-stage',
    category: 'symposium',
    badge: 'Symposium 2024',
    title: 'Stage Inauguration & Keynote Panel',
    subtitle: 'PCCOE Seminar Hall · 110+ Delegates',
    meta: 'Feb 2, 2024 · Seminar Hall, Mechanical Dept, PCCOE · Dr. Ramesh Ramadoss, Dr. Sonali Patil, Dr. Surekha Deshmukh, Dr. Rajesh Ingle',
    src: '/images/events/symposium-2024-stage.jpg',
    source: 'https://www.pccoepune.com/pdf/samvaad/Samvaad-3(4)-Jan-2024.pdf',
  },
  {
    id: 'symposium-audience',
    category: 'symposium',
    badge: 'Symposium 2024',
    title: 'Audience & Industry Participants',
    subtitle: 'Full Hall Engagement',
    meta: 'Feb 2, 2024 · PCCOE · 115 Total Attendees (68 external, 15 industry, 32 PCCOE)',
    src: '/images/events/symposium-2024-audience.jpg',
    source: 'https://www.pccoepune.com/pdf/samvaad/Samvaad-3(4)-Jan-2024.pdf',
  },
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
  {
    id: 'ebct-2024-poster',
    category: 'events',
    badge: 'ISTE STTP',
    badgeClass: 'chip-gold',
    title: 'EBCT-24 National Training Program',
    subtitle: '156 Participants Across 5+ States',
    meta: 'Jul 15–20, 2024 · ISTE Approved · 156 Pan-India Participants',
    src: '/images/events/ebct-2024-poster.png',
    source: 'https://www.pccoepune.com/pdf/Flyer_STTP_EBCT-2024_PCCOE.pdf',
  },
  {
    id: 'hyperledger-session',
    category: 'events',
    badge: 'Expert Session',
    title: 'Hyperledger Enterprise Trust Session',
    subtitle: 'LFDT Chapter & IEEE Pune',
    meta: 'Aug 26, 2025 · PCCOE · Dr. Anasuya Threse Innocent (BiniWorld)',
    src: '/images/events/hyperledger-session-2025.jpg',
    source: 'https://computer.pccoepune.com/assets/images/CESA/magazine/2025-2026_compressed.pdf',
  },
  {
    id: 'decentrahack-2026',
    category: 'events',
    badge: 'Hackathon',
    title: 'DecentraHACK 2026',
    subtitle: 'Agentic AI & Web3 Buildathon',
    meta: 'Jan 17–23, 2026 · 5-Day National Web3 & Agentic AI Hackathon',
    src: '/images/events/decentrahack-2026.jpg',
    source: 'https://computer.pccoepune.com/assets/images/CESA/magazine/2025-2026_compressed.pdf',
  },
  {
    id: 'decai-fdp-2026',
    category: 'events',
    badge: 'National FDP',
    badgeClass: 'chip-gold',
    title: 'Decentralized AI FDP 2026',
    subtitle: '86 Faculty Participants',
    meta: 'Feb 2–7, 2026 · PCCOE Pune · 86 Verified Faculty Participants',
    src: '/images/events/decai-fdp-2026.jpg',
    source: 'https://computer.pccoepune.com/assets/images/CESA/magazine/2025-2026_compressed.pdf',
  },
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
    <section id="gallery" className="section-padding bg-[#F0F4F8] border-t border-slate-200">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">
              Visual Archives &amp; Authentic Media
            </span>
            <h2 className="font-heading mt-1.5 text-2xl font-bold text-ieee-navy sm:text-3xl">
              Photo Showcase Gallery
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
              Authentic photographic documentation from our symposia, laboratory facilities, faculty programs, and national hackathons. Click any image for full-screen inspection.
            </p>
          </div>

          {/* Flutter Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: `All Photos (${galleryItems.length})` },
              { id: 'symposium', label: 'Symposium 2024' },
              { id: 'lab', label: 'Blockchain Lab' },
              { id: 'events', label: 'FDPs & Hackathons' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`filter-chip ${selectedCategory === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Curated Gallery Cards Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                onSelectPhoto({
                  src: item.src,
                  title: item.title,
                  meta: item.meta,
                  source: item.source,
                })
              }
              className="gallery-card"
            >
              <img src={item.src} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <span className={`chip ${item.badgeClass || ''} mb-1.5 w-fit`}>
                  {item.badge}
                </span>
                <h4 className="font-heading text-xs font-bold text-white line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-300">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
