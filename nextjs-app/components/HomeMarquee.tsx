'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Slide {
  href: string
  src: string
  alt: string
  width: number
  height: number
  kicker: string
  title: string
  date: string
  detail: string
}

const slides: Slide[] = [
  {
    href: '/activities#college-archive',
    src: '/images/events/2026/decai-fdp/decai-fdp-2026.jpg',
    alt: 'Faculty members and coordinators during Decentralized AI FDP inaugural session',
    width: 1280,
    height: 720,
    kicker: 'FDP',
    title: 'Decentralized AI FDP',
    date: '02 - 07 February 2026',
    detail: 'Inaugural session of the National FDP on Decentralized AI at PCCOE Computer Engineering Dept.',
  },
  {
    href: '/activities#college-archive',
    src: '/images/events/2026/decentrahack/decentrahack-2026.jpg',
    alt: 'DecentraHACK hackathon participant showcase and project demo',
    width: 1280,
    height: 720,
    kicker: 'Hackathon',
    title: 'DecentraHACK 2026',
    date: '17 - 23 January 2026',
    detail: 'DecentraHACK 2026 keynote demonstration and project judging ceremony.',
  },
  {
    href: '/activities#college-archive',
    src: '/images/events/2025/hyperledger/hyperledger-session-2025.jpg',
    alt: 'Speaker delivering Hyperledger enterprise architecture lecture',
    width: 1280,
    height: 720,
    kicker: 'Expert session',
    title: 'Hyperledger and Enterprise Applications',
    date: '26 August 2025',
    detail: 'Expert speaker Dr. Anasuya Threse Innocent addressing students on enterprise blockchain architectures.',
  },
  {
    href: '/activities/blockchain-symposium-2024',
    src: '/images/events/2024/symposium/symposium-2024-stage.jpg',
    alt: 'Dignitaries on stage during IEEE Pune Blockchain Symposium 2024 inaugural address',
    width: 1600,
    height: 1131,
    kicker: 'Symposium',
    title: 'Blockchain Symposium 2024',
    date: '02 February 2024',
    detail: 'Keynote address by Dr. Ramesh Ramadoss and distinguished guests on stage at PCCOE Seminar Hall.',
  },
]

export default function HomeMarquee() {
  const [index, setIndex] = useState(0)
  const [held, setHeld] = useState(false)
  const [stopped, setStopped] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(media.matches)
    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (held || stopped || reduced) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 2000)
    return () => window.clearInterval(timer)
  }, [held, stopped, reduced])

  const slide = slides[index]
  const motionOff = stopped || reduced

  return (
    <div
      className="lift-card overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Event photographs"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={(event) => {
        const target = event.target
        if (target instanceof HTMLElement && target.dataset.marqueeControl === 'toggle') return
        setHeld(true)
      }}
      onBlur={(event) => {
        const next = event.relatedTarget
        if (!(next instanceof Node) || !event.currentTarget.contains(next)) setHeld(false)
      }}
    >
      <div key={index} className="marquee-slide grid md:grid-cols-[minmax(0,1.15fr)_minmax(16rem,1fr)]">
        <Link href={slide.href} className="relative block aspect-[16/9] bg-[#F4F7FB]">
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover object-center"
          />
        </Link>
        <div className="flex flex-col justify-center p-5 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#007175]">{slide.kicker}</p>
          <h2 className="font-heading mt-2 text-2xl font-normal text-[#0C8F8A]">{slide.title}</h2>
          <p className="mt-3 text-sm font-semibold text-[#007175]">{slide.date}</p>
          <p className="mt-2 max-w-prose text-base leading-relaxed text-[#333333]">{slide.detail}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href={slide.href} className="text-sm font-semibold text-[#007175] hover:underline">
              Open this record
            </Link>
            <button
              type="button"
              className="min-h-11 px-3 text-sm font-semibold text-[#007175] disabled:opacity-60"
              data-marquee-control="toggle"
              aria-pressed={motionOff}
              disabled={reduced}
              onClick={() => setStopped((current) => !current)}
            >
              {stopped && !reduced ? 'Play' : 'Pause'}
            </button>
          </div>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {slide.title}. {slide.date}. {slide.detail}
      </p>
    </div>
  )
}
