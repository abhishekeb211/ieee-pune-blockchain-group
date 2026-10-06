import React from 'react'

const objectives = [
  { id: '#01', label: 'Technical Education & DLT Awareness' },
  { id: '#02', label: 'Academia-Industry Collaboration Hub' },
  { id: '#03', label: 'Decentralized AI & Privacy Research' },
  { id: '#04', label: 'National Symposia, FDPs & Hackathons' },
  { id: '#05', label: 'Hands-on Enterprise & Public Platforms' },
  { id: '#06', label: 'Student Research & Open-Source Mentorship' },
  { id: '#07', label: 'IEEE Region 10 & Global BCTC Alignment' },
  { id: '#08', label: 'IEEE Blockchain Standards Awareness' },
  { id: '#09', label: 'Real-World Sectoral Implementations' },
  { id: '#10', label: 'ZKP, SSI, DePIN & Verifiable AI Frontiers' },
  { id: '#11', label: 'International Conference Publications, Prototyping & ICDLT Support' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">
            About the Chapter
          </span>
          <h2 className="font-heading mt-1.5 text-2xl font-bold text-ieee-navy sm:text-3xl">
            Building Trusted Decentralized Ecosystems in Pune
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            The <strong>IEEE Pune Blockchain Group</strong> emerged in <strong>2023</strong> as part of the growing global network of the{' '}
            <a
              href="https://blockchain.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ieee-primary hover:underline"
            >
              IEEE Blockchain Technical Community (BCTC)
            </a>, 
            operating directly within the{' '}
            <a
              href="https://ieeepunesection.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ieee-primary hover:underline"
            >
              IEEE Pune Section
            </a>{' '}
            and the <strong>IEEE Region 10 (Asia-Pacific)</strong> ecosystem. IEEE BCTC reported that its global Local Group network reached approximately <strong>66 groups worldwide in early 2024</strong>, with 30 onboarded onto IEEE vTools at that time.
          </p>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Our purpose is to bring together researchers, professionals, academicians, students, and industry experts for collaborative learning, applied research, and advancement of blockchain, distributed ledgers, and decentralized artificial intelligence.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {/* Mission */}
          <div className="institutional-card top-accent-card p-5">
            <div className="flex items-center gap-2 text-ieee-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="font-heading text-lg font-bold text-ieee-navy">Our Mission</h3>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              To create a collaborative technical ecosystem that enables professionals, researchers, faculty members, students, and industry experts to <strong>learn, research, experiment with, and advance blockchain, distributed ledger, and trusted decentralized technologies</strong> through technical events, lectures, workshops, symposia, research discussions, and training programmes.
            </p>
          </div>

          {/* Vision */}
          <div className="institutional-card top-accent-card p-5">
            <div className="flex items-center gap-2 text-ieee-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <h3 className="font-heading text-lg font-bold text-ieee-navy">Our Vision</h3>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              To establish Pune as a premier regional hub for <strong>Blockchain, Distributed Trust, Decentralized AI, Digital Identity, Applied Cryptography, and Secure Distributed Systems</strong>, directly bridging local talent with the global IEEE Blockchain Technical Community and IEEE Region 10 ecosystem.
            </p>
          </div>
        </div>

        {/* Key Objectives */}
        <div id="objectives" className="mt-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">Strategic Framework</span>
            <h3 className="font-heading mt-1 text-xl font-bold text-ieee-navy sm:text-2xl">
              Key Objectives of the Group
            </h3>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {objectives.map((item, idx) => (
              <div
                key={item.id}
                className={`spec-badge ${idx === objectives.length - 1 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
              >
                <span>{item.label}</span>
                <span className="text-ieee-primary">{item.id}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
