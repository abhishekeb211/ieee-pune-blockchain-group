import React from 'react'

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">
            About the Chapter
          </span>
          <h2 className="font-heading mt-1.5 text-2xl font-bold text-ieee-navy sm:text-3xl">
            Advancing blockchain in Pune, together
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            The <strong>IEEE Pune Blockchain Group</strong> is a professional community chapter operating under the{' '}
            <a
              href="https://blockchain.ieee.org/communities/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ieee-primary hover:underline"
            >
              IEEE Blockchain Technical Community
            </a>{' '}
            and aligned with the{' '}
            <a
              href="https://ieeepune.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ieee-primary hover:underline"
            >
              IEEE Pune Section
            </a>. 
            Our mission is to foster rigorous educational activities, advance foundational research, and establish industry collaboration across distributed computing, consensus engineering, cryptography, and Web3 technologies across Maharashtra.
          </p>
        </div>

        {/* 4 Cards with Clean SVG Icons */}
        <div id="objectives" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Students */}
          <div className="institutional-card top-accent-card">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ieee-primary/10 text-ieee-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="font-heading mt-3 text-base font-bold text-ieee-navy">Students</h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              University student branches and blockchain clubs receive access to technical hackathons, project mentorship, and skill accelerators backed by IEEE global resources.
            </p>
          </div>

          {/* Researchers */}
          <div className="institutional-card top-accent-card">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ieee-primary/10 text-ieee-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="font-heading mt-3 text-base font-bold text-ieee-navy">Researchers</h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Peer-reviewed technical forums, symposiums, and collaborative investigation into consensus algorithms, zero-knowledge proofs, and distributed systems security.
            </p>
          </div>

          {/* Academicians */}
          <div className="institutional-card top-accent-card">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ieee-primary/10 text-ieee-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-heading mt-3 text-base font-bold text-ieee-navy">Academicians</h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Curriculum modernization frameworks, Faculty Development Programs (FDPs), and joint publication support across Pune engineering colleges and institutes.
            </p>
          </div>

          {/* Industry Professionals */}
          <div className="institutional-card top-accent-card">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ieee-primary/10 text-ieee-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-heading mt-3 text-base font-bold text-ieee-navy">Industry Professionals</h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Connecting IT, automotive, and FinTech practitioners in Hinjawadi, Magarpatta, and Baner with enterprise DLT standards, case studies, and networking sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
