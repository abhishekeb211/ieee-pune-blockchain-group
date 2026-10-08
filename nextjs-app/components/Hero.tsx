import Image from 'next/image'
import Link from 'next/link'
import activities from '../data/activities.json'
import { Activity, byLatest } from './activity'

interface Proof {
  href: string
  src: string
  alt: string
  kicker: string
  title: string
  meta: string
  dateLabel: string
}

const archiveProofs: Proof[] = [
  {
    href: '/activities',
    src: '/images/events/2026/decai-fdp/decai-fdp-2026.jpg',
    alt: 'National-Level Faculty Development Program on Decentralized AI',
    kicker: 'FDP',
    title: 'Decentralized AI FDP',
    meta: '02–07 February 2026 · PCCOE Pune',
    dateLabel: '02 - 07 February 2026',
  },
  {
    href: '/activities',
    src: '/images/events/2026/decentrahack/decentrahack-2026.jpg',
    alt: 'DecentraHACK 2026 national hackathon',
    kicker: 'Hackathon',
    title: 'DecentraHACK 2026',
    meta: '17–23 January 2026',
    dateLabel: '17 - 23 January 2026',
  },
]

const programProofs: Proof[] = (activities.groupPrograms as Activity[])
  .filter((event) => event.images[0])
  .map((event) => ({
    href: '/activities',
    src: event.images[0].src,
    alt: event.images[0].alt,
    kicker: event.category,
    title: event.title.split(':')[0].trim(),
    meta: `${event.dateLabel} · ${event.venue.split('·')[0].trim()}`,
    dateLabel: event.dateLabel,
  }))

const proofs = [...archiveProofs, ...programProofs].sort(byLatest((item) => item.dateLabel))
const newest = proofs[0]
const highlights = proofs.slice(1, 3)

export default function Hero() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#E7F7F6] to-[#F7FCFC] text-[#007175]">
        <div className="section-container grid items-center gap-8 py-10 md:py-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,22rem)]">
          <div className="rise-in">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#008B8B]">
              APAC · Region 10 · South Asia and Pacific
            </p>
            <h1 className="mt-4">
              <Image
                src="/images/brand/ieee-pune-blockchain-group.png"
                alt="IEEE Pune Blockchain Group"
                width={1174}
                height={648}
                priority
                className="h-auto w-full max-w-xl"
              />
            </h1>
            <p className="measure mt-4 text-base leading-relaxed text-[#333333] sm:text-lg">
              A local group of the IEEE Blockchain Technical Community for researchers, faculty, students, and industry practitioners in Pune.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/join" className="inline-flex min-h-11 items-center bg-[#007175] px-4 text-sm font-semibold uppercase tracking-wide text-white">
                Join
              </Link>
              <Link href="/activities" className="inline-flex min-h-11 items-center border border-[#007175] px-4 text-sm font-semibold uppercase tracking-wide text-[#007175]">
                Events
              </Link>
            </div>
          </div>

          <div className="rise-in rise-delay-2">
            <article className="lift-card flex flex-col items-start p-5 sm:p-6">
              <Image
                src="/images/guests/sonali-patil.jpg"
                alt="Prof. Dr. Sonali D. Patil, Chair of the IEEE Pune Blockchain Group"
                width={200}
                height={200}
                className="h-[200px] w-[200px] rounded-full object-cover ring-4 ring-[#007175]"
              />
              <h2 className="font-heading mt-4 text-2xl font-normal text-[#007175]">
                Prof. Dr. Sonali D. Patil
              </h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#008B8B]">
                Chair, IEEE Pune Blockchain Group
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#333333]">
                Professor and Head of Computer Engineering, PCCOE, and a Region 10 coordinator for IEEE Blockchain local groups.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/dr-sonali-d-patil-9413681b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#007175] hover:underline"
                >
                  LinkedIn
                </a>
                <Link href="/about" className="text-sm font-semibold text-[#007175] hover:underline">
                  About
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="rise-in rise-delay-1">
          <article className="lift-card h-full p-4">
            <h2 className="font-heading text-xl font-normal text-[#008B8B]">What’s New</h2>
            {newest && (
              <Link href={newest.href} className="mt-4 block">
                <div className="relative aspect-[4/3] bg-[#F4F7FB]">
                  <Image src={newest.src} alt={newest.alt} fill priority sizes="(max-width: 768px) 100vw, 25vw" className="object-contain object-center" />
                </div>
                <p className="mt-3 text-sm font-semibold text-[#007175]">{newest.kicker}</p>
                <p className="font-heading text-base text-[#333333]">{newest.title}</p>
                <p className="mt-1 text-sm text-slate-600">{newest.meta}</p>
              </Link>
            )}
          </article>
          </div>

          <div className="rise-in rise-delay-2">
          <article className="lift-card h-full p-4">
            <h2 className="font-heading text-xl font-normal text-[#008B8B]">Community</h2>
            <p className="mt-4 text-base leading-relaxed text-[#333333]">
              IEEE Pune Blockchain Group is listed with the IEEE Blockchain Technical Community under APAC, Region 10, South Asia and Pacific.
            </p>
            <Link href="/about" className="mt-3 inline-block text-sm font-semibold text-[#007175] hover:underline">
              About the group
            </Link>
          </article>
          </div>

          <div className="rise-in rise-delay-3">
          <article className="lift-card h-full p-4">
            <h2 className="font-heading text-xl font-normal text-[#008B8B]">Event Highlights</h2>
            <ul className="mt-4 space-y-4">
              {highlights.map((item) => (
                <li key={item.src}>
                  <Link href={item.href} className="block">
                    <p className="text-sm font-semibold text-[#007175]">{item.meta}</p>
                    <p className="font-heading text-base text-[#333333]">{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/activities" className="mt-4 inline-block text-sm font-semibold text-[#007175] hover:underline">
              All events
            </Link>
          </article>
          </div>

          <div className="rise-in rise-delay-4">
          <article className="lift-card h-full p-4">
            <h2 className="font-heading text-xl font-normal text-[#008B8B]">Feature</h2>
            <Link href="/lab" className="mt-4 block">
              <div className="relative aspect-[4/3] bg-[#F4F7FB]">
                <Image src="/images/lab/mmcoe-hpc-rig.png" alt="Blockchain laboratory GPU compute rig at MMCOE" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-contain object-center" />
              </div>
              <p className="mt-3 text-sm font-semibold text-[#007175]">Lab</p>
              <p className="font-heading text-base text-[#333333]">Blockchain laboratory at MMCOE</p>
              <p className="mt-1 text-sm text-slate-600">GPU compute, server rack, and student workstations used with the group.</p>
            </Link>
          </article>
          </div>
        </div>
      </section>
    </>
  )
}
