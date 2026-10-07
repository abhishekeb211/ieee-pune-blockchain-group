import Link from 'next/link'

const pages = [
  { href: '/about', label: 'About' },
  { href: '/activities', label: 'Activities' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/lab', label: 'Lab' },
  { href: '/join', label: 'Join' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-footer-main text-sm text-slate-300">
      <div className="section-container grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="font-heading text-base font-bold text-white">IEEE Pune Blockchain Group</h2>
          <p className="mt-2 max-w-prose leading-relaxed">
            A local technical group of the IEEE Blockchain Technical Community, IEEE Pune Section, and IEEE Region 10. Spoid LGR00120BC.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-base font-bold text-white">On this site</h2>
          <ul className="mt-2 space-y-2">
            {pages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="hover:text-white">{page.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-base font-bold text-white">Contact</h2>
          <a href="mailto:sonalimpatil@gmail.com" className="mt-2 inline-block font-semibold text-ieee-brightcyan hover:underline">
            sonalimpatil@gmail.com
          </a>
          <p className="mt-2">PCCOE and MMCOE, Pune</p>
        </div>
      </div>
      <div className="border-t border-white/10 bg-footer-deep py-4">
        <p className="section-container text-sm text-slate-400">© 2026 IEEE Pune Blockchain Group.</p>
      </div>
    </footer>
  )
}
