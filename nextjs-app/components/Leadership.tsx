import React from 'react'

const leaders = [
  {
    initials: 'PG',
    name: 'Pune Blockchain Group Chair',
    title: 'Chair, IEEE Pune Blockchain Group',
    primaryLink: { text: 'IEEE Pune Section ↗', href: 'https://ieeepune.org/' },
    email: 'chair@ieeepune.org',
    bg: 'bg-ieee-navy',
  },
  {
    initials: 'TC',
    name: 'Technical Outreach Lead',
    title: 'Vice-Chair & Outreach, IEEE Pune Blockchain Group',
    primaryLink: { text: 'IEEE BCTC Global ↗', href: 'https://blockchain.ieee.org/communities/' },
    email: 'contact@ieeepune.org',
    bg: 'bg-ieee-dark',
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-white">
      <div className="section-container">
        <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">
          Governance &amp; Officers
        </span>
        <h2 className="font-heading mt-1.5 text-2xl font-bold text-ieee-navy sm:text-3xl">
          Group Leads &amp; Executive Committee
        </h2>
        <p className="mt-2 max-w-2xl text-xs text-slate-600 sm:text-sm">
          The IEEE Pune Blockchain Group is guided by academic researchers, technical chairs, and IEEE Section officers dedicated to serving the region.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {leaders.map((lead) => (
            <div key={lead.name} className="institutional-card flex items-start gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${lead.bg} text-base font-bold text-white font-heading`}
              >
                {lead.initials}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-heading text-base font-bold text-ieee-navy">{lead.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{lead.title}</p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2.5 text-xs">
                  <a
                    href={lead.primaryLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-ieee-primary hover:underline"
                  >
                    {lead.primaryLink.text}
                  </a>
                  <span className="text-slate-300">|</span>
                  <a href={`mailto:${lead.email}`} className="text-slate-600 hover:text-ieee-primary">
                    {lead.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
