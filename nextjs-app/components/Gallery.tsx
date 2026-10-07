'use client'

import React, { useState } from 'react'
import Image from 'next/image'
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
    id: 'symposium-recap',
    category: 'symposium',
    badge: 'Symposium 2024',
    title: 'Blockchain Symposium recap',
    subtitle: 'PCCOE Pune · 2 February 2024',
    meta: '2 February 2024 · Pimpri Chinchwad College of Engineering · organized by IEEE Pune Blockchain Group',
    src: '/images/posts/post-15-1.png',
    source: 'https://lnkd.in/d2cdQX7v',
  },
  {
    id: 'symposium-exchange',
    category: 'symposium',
    badge: 'Symposium 2024',
    title: 'Sessions, panels, and demonstrations',
    subtitle: 'Flagship group event',
    meta: '2 February 2024 · Sessions, panel discussions, demonstrations, proofs of concept, and use cases',
    src: '/images/posts/post-15-2.png',
    source: 'https://lnkd.in/d2cdQX7v',
  },
  {
    id: 'symposium-poster',
    category: 'symposium',
    badge: 'Symposium 2024',
    title: 'Symposium announcement',
    subtitle: 'Promotional visual',
    meta: '2 February 2024 · IEEE Pune Blockchain Group in collaboration with IEEE Pune Section',
    src: '/images/posts/post-16-1.png',
    source: 'https://lnkd.in/d2cdQX7v',
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
    id: 'sttp-2024',
    category: 'events',
    badge: 'ISTE STTP',
    badgeClass: 'chip-gold',
    title: 'Emerging Trends in Blockchain STTP',
    subtitle: '153 participants across India',
    meta: '15–20 July 2024 · PCCOE Computer Engineering in association with IEEE Pune Blockchain Group',
    src: '/images/posts/post-12-1.png',
    source: '',
  },
  {
    id: 'decai-fdp-2025',
    category: 'events',
    badge: 'Official FDP',
    badgeClass: 'chip-gold',
    title: 'Decentralized AI FDP',
    subtitle: 'Online · 18–25 August 2025',
    meta: 'Organized by IEEE Pune Blockchain Group and PCCOE, with IEEE Pune Section, IEEE Computer Society Pune Chapter, and IEEE Blockchain Technical Community',
    src: '/images/posts/post-05-1.png',
    source: '',
  },
  {
    id: 'sustainable-fdp',
    category: 'events',
    badge: 'Group collaboration',
    title: 'Sustainable Development FDP',
    subtitle: 'Guest of Honour · MMCOE',
    meta: '1–5 December 2025 · Department of Information Technology, MMCOE, in association with IEEE Pune Blockchain Group',
    src: '/images/posts/post-03-1.png',
    source: '',
  },
  {
    id: 'cyber-fdp',
    category: 'events',
    badge: 'Group collaboration',
    title: 'Cybersecurity and Privacy FDP',
    subtitle: 'Session by the Chair',
    meta: '20–24 August 2024 · Organized by MMCOE in collaboration with IEEE Pune Blockchain Group',
    src: '/images/posts/post-11-1.png',
    source: '',
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
            <h2 className="font-heading mt-1.5 font-bold text-ieee-navy">
              Photo Showcase Gallery
            </h2>
            <p className="measure mt-2 text-base text-slate-600">
              Authentic photographic documentation from our symposia, laboratory facilities, faculty programs, and national hackathons. Click any image for full-screen inspection.
            </p>
          </div>

          {/* Flutter Filter Chips */}
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
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`filter-chip ${selectedCategory === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Curated Gallery Cards Grid */}
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
                alt={item.title}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
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
