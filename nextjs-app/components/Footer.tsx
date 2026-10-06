import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-footer-main text-slate-400 text-xs border-t border-slate-800">
      {/* Upper Footer */}
      <div className="section-container py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="font-heading text-sm font-bold text-white">IEEE Pune Blockchain Group</h4>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            A specialized technical chapter under the IEEE Blockchain Technical Community, fostering academic excellence and industry leadership across Maharashtra.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold text-white">Institutional Affiliations</h4>
          <ul className="mt-2 space-y-1.5 text-xs">
            <li>
              <a href="https://blockchain.ieee.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                IEEE Blockchain Community
              </a>
            </li>
            <li>
              <a href="https://ieeepune.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                IEEE Pune Section
              </a>
            </li>
            <li>
              <a href="https://www.ieeer10.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                IEEE Region 10 (Asia-Pacific)
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
              <a href="#about" className="hover:text-white transition">About Chapter</a>
            </li>
            <li>
              <a href="#objectives" className="hover:text-white transition">Who We Serve</a>
            </li>
            <li>
              <a href="#events" className="hover:text-white transition">Past Conferences</a>
            </li>
            <li>
              <a href="#leadership" className="hover:text-white transition">Executive Committee</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold text-white">Contact &amp; Support</h4>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            Inquiries regarding workshops, partnerships, or conference tracks:
          </p>
          <a href="mailto:chair@ieeepune.org" className="mt-2 inline-block font-semibold text-ieee-brightcyan hover:underline">
            chair@ieeepune.org
          </a>
        </div>
      </div>

      {/* Lower Baseline Footer */}
      <div className="bg-footer-deep py-4 border-t border-white/5">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <p>© 2026 IEEE Pune Blockchain Group. All rights reserved.</p>
          <p className="flex items-center gap-3 text-[11px]">
            <span>Designed for IEEE Engineering Societies</span>
            <span>·</span>
            <a href="#top" class="hover:text-slate-300">Back to Top ↑</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
