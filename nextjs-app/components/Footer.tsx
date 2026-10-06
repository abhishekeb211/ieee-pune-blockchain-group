import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-footer-main text-slate-400 text-xs border-t border-slate-800">
      {/* Upper Footer */}
      <div className="section-container py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="font-heading text-sm font-bold text-white">IEEE Pune Blockchain Group</h4>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            A recognized local technical group under the IEEE Blockchain Technical Community, IEEE Pune Section, and IEEE Region 10 (Asia-Pacific). Spoid: <strong>LGR00120BC</strong>.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold text-white">Institutional Affiliations</h4>
          <ul className="mt-2 space-y-1.5 text-xs">
            <li>
              <a href="https://blockchain.ieee.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                IEEE Blockchain Technical Community
              </a>
            </li>
            <li>
              <a href="https://ieeepunesection.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                IEEE Pune Section
              </a>
            </li>
            <li>
              <a href="https://www.ieeer10.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                IEEE Region 10 (Asia-Pacific)
              </a>
            </li>
            <li>
              <a href="https://ieee-collabratec.ieee.org/app/workspaces/9028/activities" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                IEEE Collabratec Workspace
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/ieee-pune-blockchain-group" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-ieee-brightcyan">
                LinkedIn Official Group ↗
              </a>
            </li>
            <li>
              <a href="https://vtools.vtools.ieee.org/home/local_groups/view/62" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                IEEE vTools Local Group (62) ↗
              </a>
            </li>
            <li>
              <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                IEEE Worldwide
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold text-white">Quick Navigation</h4>
          <ul className="mt-2 space-y-1.5 text-xs">
            <li>
              <a href="#about" className="hover:text-white transition">About &amp; Mission</a>
            </li>
            <li>
              <a href="#focus" className="hover:text-white transition">12 Technical Focus Areas</a>
            </li>
            <li>
              <a href="#lab" className="hover:text-white transition">Blockchain Lab Infrastructure</a>
            </li>
            <li>
              <a href="#events" className="hover:text-white transition">Chronological Timeline</a>
            </li>
            <li>
              <a href="#leadership" className="hover:text-white transition">Leadership &amp; Governance</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold text-white">Contact &amp; Support</h4>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            For academic inquiries, event partnerships, or laboratory research:
          </p>
          <a href="mailto:sonalimpatil@gmail.com" className="mt-2 inline-block font-semibold text-ieee-brightcyan hover:underline">
            sonalimpatil@gmail.com
          </a>
          <p className="mt-2 text-[11px] text-slate-500">
            Pimpri Chinchwad College of Engineering (PCCOE) / MMCOE, Pune
          </p>
        </div>
      </div>

      {/* Lower Baseline Footer */}
      <div className="bg-footer-deep py-4 border-t border-white/5">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <p>© 2026 IEEE Pune Blockchain Group. All rights reserved.</p>
          <p className="flex items-center gap-3 text-[11px]">
            <span>Designed for IEEE Technical Communities</span>
            <span>·</span>
            <a href="#top" className="hover:text-slate-300">Back to Top ↑</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
