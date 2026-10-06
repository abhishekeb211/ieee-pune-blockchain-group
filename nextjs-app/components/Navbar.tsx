'use client'

import React, { useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#objectives', label: 'Who We Serve' },
  { href: '#events', label: 'Past Events' },
  { href: '#leadership', label: 'Leadership' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* 1. Top Utility Bar */}
      <div className="bg-ieee-nearblack text-slate-300 text-xs py-1.5 border-b border-white/10 hidden sm:block">
        <div className="section-container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">IEEE.org</a>
            <span className="text-slate-600">|</span>
            <a href="https://ieeexplore.ieee.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">IEEE Xplore</a>
            <span className="text-slate-600">|</span>
            <a href="https://www.ieeer10.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">IEEE Region 10 (APAC)</a>
            <span className="text-slate-600">|</span>
            <a href="https://ieeepune.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">IEEE Pune Section</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Technical Community</span>
            <a href="#join" className="text-ieee-brightcyan hover:underline font-medium">Join Community</a>
          </div>
        </div>
      </div>

      {/* 2. Main Brand Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="section-container flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/ieee-blockchain-logo.png"
              alt="IEEE Blockchain"
              className="h-10 w-auto sm:h-11"
              style={{ width: 'auto' }}
            />
            <div className="leading-tight border-l border-slate-200 pl-3">
              <span className="block font-heading text-base font-bold text-ieee-navy tracking-tight">
                Pune Blockchain Group
              </span>
              <span className="block text-[11px] font-medium text-slate-500">
                IEEE Blockchain Technical Community
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-ieee-primary transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              className="btn-primary text-xs py-2 px-4 shadow-sm"
            >
              Join the Community
            </a>
          </nav>

          {/* Mobile Menu Button */}
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

        {/* Mobile Dropdown Nav */}
        {isOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="section-container flex flex-col gap-1 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#join"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-full bg-ieee-primary py-2.5 text-center text-xs font-semibold text-white"
              >
                Join the Community
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
