import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-ieee-navy py-10 text-white/70">
      <div className="section-container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-white">IEEE Pune Blockchain Group</p>
          <p className="mt-1 text-xs">
            Affiliated with the{' '}
            <a
              href="https://blockchain.ieee.org/communities/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              IEEE Blockchain Technical Community
            </a>{' '}
            &amp;{' '}
            <a
              href="https://ieeepune.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              IEEE Pune Section
            </a>
          </p>
        </div>
        <p className="text-xs">© 2026 IEEE Pune Blockchain Group. All rights reserved.</p>
      </div>
    </footer>
  )
}
