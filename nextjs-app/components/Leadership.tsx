import React from 'react'

const leaders = [
  {
    initials: 'PG',
    name: 'Pune Blockchain Group Chair',
    title: 'Chair, IEEE Pune Blockchain Group',
    primaryLink: { text: 'IEEE Pune Section ↗', href: 'https://ieeepune.org/' },
    email: 'chair@ieeepune.org',
  },
  {
    initials: 'TC',
    name: 'Technical Community Lead',
    title: 'Co-Chair & Outreach Lead, IEEE Pune Blockchain Group',
    primaryLink: { text: 'IEEE BCTC ↗', href: 'https://blockchain.ieee.org/communities/' },
    email: 'contact@ieeepune.org',
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="section-container py-20">
      <span className="text-xs font-semibold uppercase tracking-wider text-ieee-blue">
        Leadership
      </span>
      <h2 className="mt-3 text-3xl font-bold text-ieee-navy sm:text-4xl">
        Group Leads &amp; Chairs
      </h2>
      <p className="mt-4 max-w-2xl text-slate-600">
        The IEEE Pune Blockchain Group is driven by dedicated IEEE chairs, academics, and industry advisors who welcome connections from students, researchers, academicians, and practitioners alike.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {leaders.map((lead) => (
          <div
            key={lead.name}
            className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ieee-blue to-chain-purple text-lg font-bold text-white">
              {lead.initials}
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-ieee-navy">{lead.name}</h3>
              <p className="text-sm text-slate-500">{lead.title}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                <a
                  href={lead.primaryLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-ieee-blue hover:underline"
                >
                  {lead.primaryLink.text}
                </a>
                <span className="text-slate-300">|</span>
                <a
                  href={`mailto:${lead.email}`}
                  className="inline-flex items-center gap-1 font-medium text-slate-600 hover:text-ieee-blue hover:underline"
                >
                  {lead.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
