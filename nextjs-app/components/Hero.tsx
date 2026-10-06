import React from 'react'

export default function Hero() {
  return (
    <>
      <section id="top" className="relative overflow-hidden bg-gradient-to-br from-ieee-navy via-[#003b75] to-ieee-primary text-white py-12 sm:py-16">
        <div className="section-container relative flex flex-col items-start gap-4">
          <span class="chip">
            <svg className="w-3.5 h-3.5 text-ieee-brightcyan" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            IEEE Blockchain Technical Community · Region 10 APAC · Pune Section
          </span>

          <h1 className="font-heading max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            IEEE Pune Blockchain Group
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            A dedicated engineering network connecting researchers, academicians, students, and technology practitioners in Pune to advance distributed ledger systems, smart contract architectures, and decentralized innovations.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#join" className="btn-primary">
              Join the Community
            </a>
            <a href="#events" className="btn-secondary">
              Explore Past Events
            </a>
          </div>
        </div>
      </section>

      {/* Dark Milestone Stat Ribbon */}
      <section className="bg-gradient-to-r from-ieee-nearblack via-ieee-navy to-ieee-nearblack border-y border-white/10 py-5 text-white">
        <div className="section-container">
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="border-l-2 border-ieee-brightcyan/60 pl-3">
              <dt className="font-heading text-2xl font-bold text-ieee-brightcyan sm:text-3xl">3+</dt>
              <dd className="text-xs text-slate-300 font-medium">Flagship Forums &amp; Events</dd>
            </div>
            <div className="border-l-2 border-ieee-brightcyan/60 pl-3">
              <dt className="font-heading text-2xl font-bold text-ieee-brightcyan sm:text-3xl">4</dt>
              <dd className="text-xs text-slate-300 font-medium">Core Stakeholder Groups</dd>
            </div>
            <div className="border-l-2 border-ieee-brightcyan/60 pl-3">
              <dt className="font-heading text-2xl font-bold text-ieee-brightcyan sm:text-3xl">ICDLT '25</dt>
              <dd className="text-xs text-slate-300 font-medium">Pune Section Co-Host</dd>
            </div>
            <div className="border-l-2 border-ieee-brightcyan/60 pl-3">
              <dt className="font-heading text-2xl font-bold text-ieee-brightcyan sm:text-3xl">100%</dt>
              <dd className="text-xs text-slate-300 font-medium">Open Technical Network</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  )
}
