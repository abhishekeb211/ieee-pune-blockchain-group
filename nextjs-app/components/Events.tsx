'use client'

import React, { useState } from 'react'
import { LightboxData } from './Lightbox'

interface EventItem {
  id: string
  year: '2024' | '2025' | '2026'
  badge: string
  badgeClass: string
  date: string
  title: string
  venue: string
  organizer: string
  attendance?: string
  speakers?: string
  description?: string
  source: string
  isFlagship?: boolean
  link?: string
  thumb?: string
}

const verifiedEvents: EventItem[] = [
  {
    id: 'symposium-2024',
    year: '2024',
    badge: 'Symposium',
    badgeClass: 'badge-symposium',
    date: 'Feb 2, 2024',
    title: 'IEEE Pune Blockchain Symposium',
    venue: 'Seminar Hall, Mechanical Dept, PCCOE, Pune',
    organizer: 'IEEE Pune Blockchain Group & Dept of IT, PCCOE',
    attendance: '110+ Attendees (68 External, 15 Industry, 32 PCCOE)',
    speakers:
      'Dr. Ramesh Ramadoss (Chair, IEEE BCTC), Dr. Surekha Deshmukh (TCS), Dr. Rajesh Ingle (IEEE R10), Dr. B. K. Murthy (MeitY/C-DAC), Dr. Padmaja Joshi (C-DAC)',
    source: 'PCCOE Samvaad Jan 2024',
    thumb: '/images/events/symposium-2024-stage.jpg',
  },
  {
    id: 'smart-cities-2024',
    year: '2024',
    badge: 'Workshop',
    badgeClass: 'badge-sttp',
    date: 'Mar 18–22, 2024',
    title: 'SecureChainCityCoin: Convergence of Blockchain in Smart Cities',
    venue: 'MMCOE, Pune',
    organizer: 'Dept. of IT, MMCOE in association with IEEE Pune Blockchain Group',
    description:
      'Digital trust frameworks in smart cities, decentralized identity management, and IoT public infrastructure security.',
    source: 'MMCOE Workshop Records',
    thumb: '/images/lab/mmcoe-lab-workstation.png',
  },
  {
    id: 'ebct-2024',
    year: '2024',
    badge: 'ISTE STTP',
    badgeClass: 'badge-sttp',
    date: 'Jul 15–20, 2024',
    title: 'Emerging Trends in Blockchain Technology (EBCT-24)',
    venue: 'PCCOE, Nigdi, Pune',
    organizer: 'Coordinators: Dr. Rachana Y. Patil & Prof. Dr. Sonali D. Patil',
    attendance: '156 Pan-India Participants (J&K, AP, TN, UP, MH)',
    speakers:
      'Dr. Ramesh Ramadoss, Ms. Nirmala Salam (CDAC), Kamlesh Nagware (FSV Capital), Gaurav Somvanshi (EmerTech), Garima Singh (Bitviraj), SurendraSingh S. (Dhiway)',
    source: 'PCCOE EBCT-24 Flyer',
    thumb: '/images/events/ebct-2024-poster.png',
  },
  {
    id: 'cybersecurity-2024',
    year: '2024',
    badge: 'FDP',
    badgeClass: 'badge-fdp',
    date: 'Aug 20–24, 2024',
    title: 'Blockchain: Frontier in Cybersecurity and Privacy',
    venue: 'MMCOE, Pune',
    organizer: 'Dept. of IT, MMCOE in association with IEEE Pune Blockchain Group',
    description:
      'Cryptographic security, privacy-preservation primitives, smart contract vulnerabilities, and decentralized key management.',
    source: 'MMCOE Co-Curricular',
  },
  {
    id: 'fdp-decai-2025',
    year: '2025',
    badge: 'FDP',
    badgeClass: 'badge-fdp',
    date: 'Aug 18–25, 2025',
    title: 'Faculty Development Program on Decentralized AI',
    venue: 'Dept. of Computer Engineering, PCCOE, Pune',
    organizer: 'Coordinators: Mrs. Swati Chandurkar & Dr. Asmita Manna',
    attendance: '90 Verified Participants',
    description:
      'AI + Blockchain Convergence, Agentic Web, Federated Learning, Verifiable AI, and Zero-Knowledge Proofs.',
    source: 'PCCOE FDP Archive',
  },
  {
    id: 'hyperledger-2025',
    year: '2025',
    badge: 'Expert Session',
    badgeClass: 'badge-expert',
    date: 'Aug 26, 2025',
    title: 'Expert Session on Hyperledger and Applications',
    venue: 'PCCOE, Pune (Hybrid Mode)',
    organizer: 'LFDT Student Chapter, PCCOE with IEEE Pune Blockchain Group',
    speakers:
      'Dr. Anasuya Threse Innocent (BiniWorld Innovations Pvt. Ltd.) on Linux Foundation Decentralized Trust projects (Fabric, Firefly, Indy).',
    source: 'PCCOE CESA Magazine',
    thumb: '/images/events/hyperledger-session-2025.jpg',
  },
  {
    id: 'icdlt-2025',
    year: '2025',
    badge: 'Global Conference',
    badgeClass: 'chip-gold',
    date: 'Nov 5–7, 2025',
    title: "IEEE Int'l Conference on Distributed Ledger Technologies (ICDLT 2025)",
    venue: 'Pune, India · Hosted by IEEE Pune Section & IEEE BCTC',
    organizer: 'IEEE Blockchain Technical Community & IEEE Pune Section',
    description:
      'The premier global research convention of the IEEE Blockchain Technical Community covering cryptographic proofs, Layer-2 scalability, and FinTech tokenization.',
    source: 'IEEE ICDLT Portal',
    isFlagship: true,
    link: 'https://www.ieeeicdlt.org/',
  },
  {
    id: 'sustainable-dev-2025',
    year: '2025',
    badge: 'FDP',
    badgeClass: 'badge-fdp',
    date: 'Dec 1–5, 2025',
    title: 'Blockchain for Sustainable Development',
    venue: 'MMCOE, Pune',
    organizer: 'Department of IT, MMCOE',
    description:
      'Peer-to-peer energy trading, private chaincode, IPFS, sustainable finance, and UN Sustainable Development Goals (SDGs).',
    source: 'MMCOE IT Workshops',
  },
  {
    id: 'decentrahack-2026',
    year: '2026',
    badge: 'Hackathon',
    badgeClass: 'badge-hackathon',
    date: 'Jan 17–23, 2026',
    title: 'DecentraHACK 2026',
    venue: 'National / Hybrid Challenge',
    organizer: 'LFDT Student Chapter & PCCOE with IEEE Pune Blockchain Group',
    description:
      'Web3, Agentic AI, Zero-Knowledge Identity, and Cybersecurity systems evaluated by industry judges.',
    source: 'PCCOE CESA Records',
    thumb: '/images/events/decentrahack-2026.jpg',
  },
  {
    id: 'fdp-decai-2026',
    year: '2026',
    badge: 'National FDP',
    badgeClass: 'badge-fdp',
    date: 'Feb 2–7, 2026',
    title: 'National-Level FDP on Decentralized AI',
    venue: 'PCCOE, Pune',
    organizer:
      'Coordinators: Dr. Sonali Patil (Chair, IEEE Pune Blockchain Group), Dr. Meghana Lokhande, Prof. Deepali Jawale, Prof. Trupti Deshmukh, Prof. Sonika Gill, Mr. Pratik Jagdale',
    attendance: '86 Verified Faculty Participants',
    description:
      'AI + Blockchain Convergence, Decentralized Trust Models, On-Chain AI Agent Registries, and Privacy-Preserving Machine Learning.',
    source: 'PCCOE FDP Official',
    thumb: '/images/events/decai-fdp-2026.jpg',
  },
]

interface EventsProps {
  onSelectPhoto?: (data: LightboxData) => void
}

export default function Events({ onSelectPhoto }: EventsProps) {
  const [selectedYear, setSelectedYear] = useState<'all' | '2024' | '2025' | '2026'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredEvents = verifiedEvents.filter((ev) => {
    const matchesYear = selectedYear === 'all' || ev.year === selectedYear
    const textCorpus = `${ev.title} ${ev.venue} ${ev.organizer} ${ev.speakers || ''} ${ev.description || ''}`.toLowerCase()
    const matchesSearch = !searchQuery || textCorpus.includes(searchQuery.toLowerCase().trim())
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

          {/* Interactive Year Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {(['all', '2024', '2025', '2026'] as const).map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                className={`timeline-tab ${selectedYear === year ? 'active' : ''}`}
              >
                {year === 'all'
                  ? 'All Events (10)'
                  : `${year} (${verifiedEvents.filter((e) => e.year === year).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Live Search Bar */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events by speaker, topic, keyword (e.g. Ramesh Ramadoss, AI, Hyperledger, Smart Cities)..."
              className="w-full bg-slate-900/80 border border-white/15 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-ieee-brightcyan"
            />
          </div>
          <span className="text-xs text-slate-300 font-medium px-2">
            Showing {filteredEvents.length} of {verifiedEvents.length} events
          </span>
        </div>

        {/* 10 Verified Events Grid */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((ev) => (
            <div
              key={ev.id}
              className={`flex flex-col rounded-xl border bg-white/5 p-4.5 transition hover:bg-white/10 ${
                ev.isFlagship
                  ? 'border-ieee-gold/40 hover:border-ieee-gold'
                  : 'border-white/10 hover:border-ieee-brightcyan/60'
              }`}
            >
              {ev.thumb && (
                <div
                  className="cursor-pointer group relative overflow-hidden rounded-lg mb-3"
                  onClick={() =>
                    onSelectPhoto &&
                    onSelectPhoto({
                      src: ev.thumb!,
                      title: ev.title,
                      meta: `${ev.date} · ${ev.venue}`,
                      source: ev.link || undefined,
                    })
                  }
                >
                  <img src={ev.thumb} alt={ev.title} className="event-thumb" />
                  <span className="absolute bottom-2 right-2 bg-black/70 backdrop-blur text-[10px] text-white px-2 py-0.5 rounded font-medium">
                    Zoom Photo
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className={`event-badge ${ev.badgeClass}`}>
                  {ev.badge}
                </span>
                <span className={`text-xs ${ev.isFlagship ? 'text-ieee-gold' : 'text-slate-400'}`}>
                  {ev.date}
                </span>
              </div>

              <h3 className="font-heading mt-2.5 text-base font-semibold leading-snug text-white">
                {ev.title}
              </h3>
              <p
                className={`mt-1 text-xs ${
                  ev.isFlagship ? 'text-ieee-gold font-medium' : 'text-ieee-brightcyan font-medium'
                }`}
              >
                {ev.venue}
              </p>

              <div className="mt-2 text-xs text-slate-300 flex-1 space-y-1.5">
                <p>
                  <strong>Organizers:</strong> {ev.organizer}
                </p>
                {ev.attendance && (
                  <div className="inline-block rounded bg-ieee-primary/30 px-2 py-0.5 text-[11px] text-cyan-200">
                    {ev.attendance}
                  </div>
                )}
                {ev.speakers && (
                  <p className="text-slate-400 text-[11px]">
                    <strong>Speakers:</strong> {ev.speakers}
                  </p>
                )}
                {ev.description && (
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {ev.description}
                  </p>
                )}
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span>Source: {ev.source}</span>
                {ev.link ? (
                  <a
                    href={ev.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ieee-gold hover:underline font-semibold"
                  >
                    Portal ↗
                  </a>
                ) : (
                  <span className="text-ieee-brightcyan">Verified ✓</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
