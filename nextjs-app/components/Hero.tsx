import React from 'react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-ieee-navy via-ieee-blue to-chain-purple text-white">
      <div className="bg-hero-grid absolute inset-0 opacity-40 [background-size:22px_22px]"></div>
      <div className="section-container relative flex flex-col items-start gap-6 py-20 sm:py-28">
        <span className="chip">
          IEEE Blockchain Technical Community · Region 10, APAC · Pune Section
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          IEEE Pune Blockchain Group
        </h1>
        <p className="max-w-2xl text-lg text-white/85 sm:text-xl">
          A local network of students, researchers, academicians, and industry professionals in Pune advancing blockchain and distributed ledger technologies through education, research, and outreach — part of the global IEEE Blockchain Technical Community.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#join"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ieee-navy shadow-lg shadow-black/10 transition hover:bg-ieee-gold hover:text-ieee-navy"
          >
            Join the Community
          </a>
          <a
            href="#events"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            See Past Events
          </a>
        </div>
        <dl className="mt-8 grid w-full max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-6">
          <div>
            <dt className="text-2xl font-bold sm:text-3xl">3+</dt>
            <dd className="text-xs text-white/70 sm:text-sm">Flagship events supported</dd>
          </div>
          <div>
            <dt className="text-2xl font-bold sm:text-3xl">4</dt>
            <dd className="text-xs text-white/70 sm:text-sm">Communities served</dd>
          </div>
          <div>
            <dt className="text-2xl font-bold sm:text-3xl">100%</dt>
            <dd className="text-xs text-white/70 sm:text-sm">Open community access</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
