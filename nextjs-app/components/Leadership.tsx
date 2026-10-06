import React from 'react'

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-white">
      <div className="section-container">
        <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">
          Governance &amp; Officers
        </span>
        <h2 className="font-heading mt-1.5 text-2xl font-bold text-ieee-navy sm:text-3xl">
          Leadership &amp; Institutional Governance
        </h2>
        <p className="mt-2 max-w-2xl text-xs text-slate-600 sm:text-sm">
          The IEEE Pune Blockchain Group is guided by academic researchers, technical chairs, and IEEE Section officers dedicated to serving the region.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Officer 1: Dr. Sonali D. Patil (Chair) */}
          <div className="institutional-card top-accent-card p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ieee-navy to-ieee-primary text-lg font-bold text-white font-heading">
                  SP
                </div>
                <div className="min-w-0 flex-1">
                  <span className="chip">Chair, IEEE Pune Blockchain Group</span>
                  <h3 className="font-heading mt-1 text-lg font-bold text-ieee-navy">
                    Dr. Sonali D. Patil
                  </h3>
                  <p className="text-xs font-semibold text-ieee-primary mt-0.5">
                    Coordinator, IEEE Region 10 Blockchain Groups
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Professor &amp; Head, Department of Computer Engineering<br />
                    Pimpri Chinchwad College of Engineering (PCCOE), Pune
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                Dr. Sonali D. Patil has played a foundational leadership role in spearheading blockchain, distributed trust, and decentralized AI technical activities across Pune and in connecting the regional academic ecosystem with IEEE Region 10 and the global IEEE Blockchain Technical Community.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <a href="mailto:sonalimpatil@gmail.com" className="font-semibold text-ieee-primary hover:underline">
                  sonalimpatil@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://vtools.vtools.ieee.org/home/local_groups/view/62"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-ieee-primary"
                >
                  vTools Record ↗
                </a>
                <span className="text-slate-300">|</span>
                <a
                  href="https://www.pccoepune.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-ieee-primary"
                >
                  PCCOE ↗
                </a>
              </div>
            </div>
          </div>

          {/* Institutional Governance Card */}
          <div className="institutional-card top-accent-card p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ieee-dark text-lg font-bold text-white font-heading">
                  IEEE
                </div>
                <div className="min-w-0 flex-1">
                  <span className="chip">Institutional Governance</span>
                  <h3 className="font-heading mt-1 text-lg font-bold text-ieee-navy">
                    Executive Steering &amp; Partner Institutions
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    IEEE Pune Section &amp; Academic Alliance Network
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-xs text-slate-600 leading-relaxed">
                <p>
                  <strong>IEEE Pune Section:</strong> Provides section-level governance, conference sponsorship, and institutional liaison with IEEE Region 10 APAC.
                </p>
                <p>
                  <strong>Institutional Hosts:</strong> PCCOE Pune (Department of Computer Engineering &amp; IT) and MMCOE Pune (Department of IT &amp; Centre of Excellence).
                </p>
                <p>
                  <strong>Global Community:</strong> Affiliated with the IEEE Blockchain Technical Community (BCTC) Local Group network.
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
              <a
                href="https://ieeepunesection.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ieee-primary hover:underline"
              >
                IEEE Pune Section Portal ↗
              </a>
              <a
                href="https://ieee-collabratec.ieee.org/app/workspaces/9028/activities"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-ieee-primary"
              >
                Collabratec Workspace ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
