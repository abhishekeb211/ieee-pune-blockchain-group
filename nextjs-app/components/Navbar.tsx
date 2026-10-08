'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const utilityLinks = [
  { href: 'https://www.ieee.org', label: 'IEEE.org' },
  { href: 'https://ieeexplore.ieee.org', label: 'IEEE Xplore' },
  { href: 'https://standards.ieee.org', label: 'IEEE Standards' },
  { href: 'https://spectrum.ieee.org', label: 'IEEE Spectrum' },
  { href: 'https://blockchain.ieee.org/', label: 'IEEE Blockchain' },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/activities', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/lab', label: 'Lab' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname === href)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="bg-[#E7F4F4] text-sm text-[#007175]">
        <div className="section-container flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2">
          {utilityLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <Link href="/" className="flex flex-col items-center px-4 py-4 text-center">
        <span className="font-heading text-2xl font-bold tracking-[0.12em] text-[#007175] sm:text-3xl">
          IEEE BLOCKCHAIN
        </span>
        <span className="mt-1 text-sm font-medium tracking-[0.28em] text-[#008B8B]">PUNE</span>
      </Link>

      <div className="bg-[#007175] text-white">
        <div className="section-container flex items-center justify-between gap-3">
          <nav className="hidden flex-wrap items-center gap-1 md:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className="nav-link px-3 py-3 text-sm font-medium uppercase tracking-wide hover:bg-white/10"
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
          <Link href="/join" className="my-2 hidden min-h-11 items-center bg-white px-4 text-sm font-semibold uppercase tracking-wide text-[#007175] md:inline-flex">
            Join
          </Link>
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {isOpen && (
          <div className="drawer-in border-t border-white/20 md:hidden">
            <div className="section-container flex flex-col py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="min-h-11 py-3 text-base font-medium uppercase tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/join" onClick={() => setIsOpen(false)} className="mb-2 mt-1 inline-flex min-h-11 items-center justify-center bg-white px-4 font-semibold uppercase tracking-wide text-[#007175]">
                Join
              </Link>
            </div>
          </div>
        )}
      </div>

      <p className="section-container flex flex-wrap items-center gap-x-2 gap-y-1 py-2 text-sm text-[#333333]">
        <a href="https://blockchain.ieee.org/communities/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007175] hover:underline">
          Communities
        </a>
        <span aria-hidden="true">/</span>
        <span>APAC</span>
        <span aria-hidden="true">/</span>
        <span>Region 10</span>
        <span aria-hidden="true">/</span>
        <span>South Asia and Pacific</span>
        <span aria-hidden="true">/</span>
        <span className="font-semibold text-[#007175]">IEEE Pune Blockchain Group</span>
      </p>
    </header>
  )
}
