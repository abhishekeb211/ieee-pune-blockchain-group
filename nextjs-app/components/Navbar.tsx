'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#objectives', label: 'Who We Serve' },
  { href: '#events', label: 'Past Events' },
  { href: '#leadership', label: 'Leadership' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="section-container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src="/ieee-blockchain-logo.png"
            alt="IEEE Blockchain"
            className="h-11 w-auto sm:h-12"
            style={{ width: 'auto' }}
          />
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-ieee-navy">
              Pune Blockchain Group
            </span>
            <span className="block text-[11px] font-medium text-slate-500">
              IEEE Blockchain Technical Community
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-ieee-blue"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            className="rounded-full bg-ieee-blue px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-ieee-blue/30 transition hover:bg-ieee-navy"
          >
            Join the Community
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-slate-700" />
            <span className="block h-0.5 w-5 bg-slate-700" />
            <span className="block h-0.5 w-5 bg-slate-700" />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="section-container flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setIsOpen(false)}
              className="mt-1 rounded-md bg-ieee-blue px-2 py-2.5 text-center text-sm font-semibold text-white"
            >
              Join the Community
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
