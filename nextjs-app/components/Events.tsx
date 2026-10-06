import React from 'react'

const events = [
  {
    badge: 'IIBF 2023',
    year: '2023',
    title: '1st IEEE India Blockchain Forum',
    date: 'September 8–9, 2023',
    venue: 'Satish Dhawan Auditorium, IISc Bangalore',
    description:
      'The inaugural IEEE India Blockchain Forum brought together blockchain researchers, industry experts, and the startup ecosystem to explore advancements and opportunities in blockchain technology.',
    url: 'https://blockchain.ieee.org/conferences/2023-ieee-india-blockchain-forum',
  },
  {
    badge: 'IIBF 2024',
    year: '2024',
    title: '2nd IEEE India Blockchain Forum',
    date: 'September 20, 2024',
    venue: 'CHRIST (Deemed to be University), Bengaluru',
    description:
      'The second edition expanded the forum to cover Blockchain, AI, Metaverse, and Web3, connecting academic researchers and industry innovators to accelerate adoption of blockchain and immersive technologies in India.',
    url: 'https://blockchain.ieee.org/conferences/iibf-2024',
  },
  {
    badge: 'ICDLT 2025',
    year: '2025',
    title: 'IEEE International Conference on Distributed Ledger Technologies',
    date: 'November 5–7, 2025',
    venue: 'Organized with IEEE Pune Section & IEEE Blockchain Technical Community',
    description:
      'The flagship research conference of the IEEE Blockchain Technical Community, featuring tracks on core DLT, security & privacy, scalability, FinTech, healthcare, and AI & blockchain — co-organized with active leadership from the IEEE Pune Section.',
    url: 'https://www.ieeeicdlt.org/',
  },
]

export default function Events() {
  return (
    <section id="events" className="bg-slate-900 py-20 text-white">
      <div className="section-container">
        <span className="text-xs font-semibold uppercase tracking-wider text-chain-teal">
          Past Events
        </span>
        <h2 className="mt-3 max-w-xl text-3xl font-bold sm:text-4xl">
          From Pune to the flagship global stage
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          Since 2023, the community has helped organize and support marquee IEEE blockchain gatherings — from the India Blockchain Forum editions to the flagship international conference co-hosted in Pune.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {events.map((ev) => (
            <a
              key={ev.badge}
              href={ev.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-chain-teal/50 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-chain-teal/15 px-3 py-1 text-xs font-semibold text-chain-teal">
                  {ev.badge}
                </span>
                <span className="text-xs text-slate-400">{ev.year}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-white group-hover:text-chain-teal">
                {ev.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-300">{ev.date}</p>
              <p className="text-sm text-slate-400">{ev.venue}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                {ev.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-chain-teal">
                Learn more{' '}
                <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
