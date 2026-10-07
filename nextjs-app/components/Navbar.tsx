'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/activities', label: 'Activities' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/lab', label: 'Lab' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <div className="hidden border-b border-white/10 bg-ieee-navy text-sm text-slate-200 sm:block">
        <div className="section-container flex items-center justify-between py-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="hover:text-white">IEEE.org</a>
            <a href="https://ieeepunesection.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white">IEEE Pune Section</a>
            <a href="https://www.ieeer10.org" target="_blank" rel="noopener noreferrer" className="hover:text-white">Region 10</a>
          </div>
          <span>Spoid LGR00120BC</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="section-container flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ieee-navy font-heading text-sm font-bold text-white">
              IEEE
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-heading text-base font-bold text-ieee-navy">
                Pune Blockchain Group
              </span>
              <span className="hidden text-sm text-slate-500 sm:block">
                IEEE Blockchain Technical Community
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium ${active ? 'text-ieee-primary' : 'text-slate-600 hover:text-ieee-primary'}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link href="/join" className="btn-primary nav-hit text-sm">
              Join
            </Link>
          </nav>

          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="nav-hit flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="section-container flex flex-col gap-1 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/join"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Join
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
