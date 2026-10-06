import React from 'react'

const events = [
  {
    badge: 'IIBF 2023',
    date: 'Sep 8–9, 2023',
    title: '1st IEEE India Blockchain Forum',
    venue: 'Satish Dhawan Auditorium, IISc Bangalore',
    description:
      'Inaugural national symposium connecting researchers, enterprise leaders, and policymakers on distributed ledger technology opportunities across India.',
    link: 'https://blockchain.ieee.org/conferences/2023-ieee-india-blockchain-forum',
    isFlagship: false,
  },
  {
    badge: 'IIBF 2024',
    date: 'Sep 20, 2024',
    title: '2nd IEEE India Blockchain Forum',
    venue: 'CHRIST University, Bengaluru',
    description:
      'Expanded edition featuring convergence of Blockchain, AI, Metaverse, and Web3 with technical research tracks and cross-disciplinary keynotes.',
    link: 'https://blockchain.ieee.org/conferences/iibf-2024',
    isFlagship: false,
  },
  {
    badge: 'ICDLT 2025',
    date: 'Nov 5–7, 2025',
    title: "IEEE Int'l Conference on Distributed Ledger Technologies",
    venue: 'Co-Organized with IEEE Pune Section & IEEE BCTC',
    description:
      'The flagship global research conference of the IEEE Blockchain Technical Community featuring peer-reviewed research on cryptography, scalability, and FinTech.',
    link: 'https://www.ieeeicdlt.org/',
    isFlagship: true,
  },
]

export default function Events() {
  return (
    <section id="events" className="bg-ieee-nearblack py-12 text-white border-t border-slate-800">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-ieee-brightcyan">
              Conference &amp; Forum Milestones
            </span>
            <h2 className="font-heading mt-1.5 text-2xl font-bold sm:text-3xl">
              From Pune to the Flagship Global Stage
            </h2>
          </div>
          <p className="text-xs text-slate-300 max-w-md">
            The community actively co-hosts and organizes major IEEE blockchain conventions, linking local engineering hubs with global standards committees.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {events.map((ev) => (
            <a
              key={ev.badge}
              href={ev.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-xl border bg-white/5 p-4.5 transition hover:bg-white/10 ${
                ev.isFlagship
                  ? 'border-ieee-gold/30 hover:border-ieee-gold'
                  : 'border-white/10 hover:border-ieee-brightcyan/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={ev.isFlagship ? 'chip chip-gold' : 'chip'}>
                  {ev.badge}
                </span>
                <span className={`text-xs ${ev.isFlagship ? 'text-ieee-gold' : 'text-slate-400'}`}>
                  {ev.date}
                </span>
              </div>
              <h3
                className={`font-heading mt-3 text-base font-semibold leading-snug text-white ${
                  ev.isFlagship ? 'group-hover:text-ieee-gold' : 'group-hover:text-ieee-brightcyan'
                }`}
              >
                {ev.title}
              </h3>
              <p className={`mt-1 text-xs ${ev.isFlagship ? 'text-ieee-gold font-medium' : 'text-slate-300'}`}>
                {ev.venue}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 flex-1">
                {ev.description}
              </p>
              <span
                className={`mt-3 inline-flex items-center gap-1 text-xs font-semibold ${
                  ev.isFlagship ? 'text-ieee-gold' : 'text-ieee-brightcyan'
                }`}
              >
                {ev.isFlagship ? 'Official Conference Portal ↗' : 'View Details ↗'}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
