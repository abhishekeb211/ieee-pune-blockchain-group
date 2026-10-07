import Image from 'next/image'
import Link from 'next/link'

const proofs = [
  {
    href: '/activities',
    src: '/images/posts/post-15-1.png',
    alt: 'Blockchain Symposium 2024 recap visual',
    kicker: 'Flagship',
    title: 'Blockchain Symposium 2024',
    meta: '2 February 2024 · PCCOE Pune',
  },
  {
    href: '/activities',
    src: '/images/posts/post-12-1.png',
    alt: 'Emerging Trends in Blockchain STTP visual',
    kicker: 'STTP',
    title: 'Emerging Trends in Blockchain',
    meta: '15–20 July 2024 · 153 participants',
  },
  {
    href: '/activities',
    src: '/images/posts/post-05-1.png',
    alt: 'Decentralized AI Faculty Development Program announcement',
    kicker: 'FDP',
    title: 'Decentralized AI FDP',
    meta: '18–25 August 2025 · Online',
  },
]

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="section-container grid items-center gap-8 py-10 md:py-14 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-ieee-primary">
            IEEE Region 10 · Pune Section
          </p>
          <h1 className="font-heading mt-3 max-w-[18ch] font-extrabold text-ieee-navy">
            IEEE Pune Blockchain Group
          </h1>
          <p className="measure mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            A local technical group for researchers, faculty, students, and industry practitioners working on blockchain and decentralized systems.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/join" className="btn-primary">Join the community</Link>
            <Link href="/activities" className="btn-outline">Explore events</Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {proofs.map((item, index) => (
            <Link key={item.src} href={item.href} className="institutional-card overflow-hidden p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-ieee-primary">{item.kicker}</p>
                <h2 className="font-heading text-base font-bold text-ieee-navy">{item.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{item.meta}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
