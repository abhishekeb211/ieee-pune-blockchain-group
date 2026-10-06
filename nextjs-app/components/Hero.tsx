interface HeroProps {
  onOpenLightbox?: (item: { src: string; title: string; meta?: string; source?: string }) => void
}

export default function Hero({ onOpenLightbox }: HeroProps) {
  return (
    <>
      <section id="top" className="relative overflow-hidden bg-gradient-to-br from-ieee-navy via-[#003b75] to-ieee-primary text-white py-12 sm:py-16">
        <div className="section-container relative flex flex-col items-start gap-4">
          <span className="chip">
            <svg className="w-3.5 h-3.5 text-ieee-brightcyan" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            IEEE Blockchain Technical Community · IEEE Pune Section · Spoid: LGR00120BC
          </span>

          <h1 className="font-heading max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            IEEE Pune Blockchain Group
          </h1>

          <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-slate-100 font-medium">
            Advancing Blockchain, Distributed Trust, Decentralized AI, and Emerging Decentralized Technologies across Pune and IEEE Region 10.
          </p>

          <p className="text-xs uppercase tracking-widest text-ieee-brightcyan font-bold">
            Connect. Learn. Research. Innovate. Build Trust.
          </p>

          <p className="max-w-2xl text-xs sm:text-sm text-slate-200 leading-relaxed">
            A local technical group uniting researchers, academicians, students, entrepreneurs, and industry leaders to foster technical talks, faculty development programs, hands-on workshops, conferences, and high-performance laboratory research.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#join" className="btn-primary">
              Join the Community
            </a>
            <a href="#events" className="btn-secondary">
              Explore Events
            </a>
            <a href="#gallery" className="btn-secondary">
              Photo Gallery
            </a>
            <a href="#lab" className="btn-secondary">
              Lab Infrastructure
            </a>
            <a href="https://www.linkedin.com/company/ieee-pune-blockchain-group" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Follow on LinkedIn ↗
            </a>
            <a href="https://ieee-collabratec.ieee.org/app/workspaces/9028/activities" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              IEEE Collabratec ↗
            </a>
            <a href="https://ieeepunesection.org/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              IEEE Pune Section ↗
            </a>
          </div>

          {/* Event Photo Highlights Gallery (Hero Lower Half) */}
          <div className="mt-8 w-full border-t border-white/15 pt-6">
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-ieee-gold animate-pulse"></span>
                <h3 className="font-heading text-xs uppercase tracking-wider font-bold text-slate-200">
                  Event Photo Highlights
                </h3>
              </div>
              <a href="#gallery" className="text-xs font-semibold text-ieee-brightcyan hover:underline flex items-center gap-1">
                Explore All Photos &rarr;
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div 
                className="hero-highlight-card group cursor-pointer"
                onClick={() => onOpenLightbox?.({
                  src: '/images/events/symposium-2024-stage.jpg',
                  title: 'IEEE Pune Blockchain Symposium 2024 Stage',
                  meta: 'Feb 2, 2024 · PCCOE Seminar Hall · Keynote by Dr. Ramesh Ramadoss (Chair, IEEE BCTC)',
                  source: 'https://www.pccoepune.com/pdf/samvaad/Samvaad-3(4)-Jan-2024.pdf'
                })}
              >
                <img src="/images/events/symposium-2024-stage.jpg" alt="Symposium Stage" className="w-full h-[110px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-2.5">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-ieee-gold">2024 Symposium</span>
                  <p className="font-heading text-xs font-bold text-white line-clamp-1">Inaugural Keynote Address</p>
                </div>
              </div>

              <div 
                className="hero-highlight-card group cursor-pointer"
                onClick={() => onOpenLightbox?.({
                  src: '/images/events/decai-fdp-2026.jpg',
                  title: 'National FDP on Decentralized AI 2026',
                  meta: 'Feb 2-7, 2026 · PCCOE · 86 Verified Faculty Participants',
                  source: 'https://computer.pccoepune.com/assets/images/CESA/magazine/2025-2026_compressed.pdf'
                })}
              >
                <img src="/images/events/decai-fdp-2026.jpg" alt="Decentralized AI FDP 2026" className="w-full h-[110px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-2.5">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-cyan-300">2026 National FDP</span>
                  <p className="font-heading text-xs font-bold text-white line-clamp-1">Decentralized AI Cohort</p>
                </div>
              </div>

              <div 
                className="hero-highlight-card group cursor-pointer"
                onClick={() => onOpenLightbox?.({
                  src: '/images/events/hyperledger-session-2025.jpg',
                  title: 'Hyperledger & Enterprise Applications 2025',
                  meta: 'Aug 26, 2025 · Linux Foundation Decentralized Trust Chapter',
                  source: 'https://computer.pccoepune.com/assets/images/CESA/magazine/2025-2026_compressed.pdf'
                })}
              >
                <img src="/images/events/hyperledger-session-2025.jpg" alt="Hyperledger Enterprise Session" className="w-full h-[110px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-2.5">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-emerald-300">2025 Hyperledger</span>
                  <p className="font-heading text-xs font-bold text-white line-clamp-1">Enterprise DLT Architecture</p>
                </div>
              </div>

              <div 
                className="hero-highlight-card group cursor-pointer"
                onClick={() => onOpenLightbox?.({
                  src: '/images/events/decentrahack-2026.jpg',
                  title: 'DecentraHACK 2026 National Web3 Hackathon',
                  meta: 'Jan 17-23, 2026 · Web3, Agentic AI & Blockchain',
                  source: 'https://computer.pccoepune.com/assets/images/CESA/magazine/2025-2026_compressed.pdf'
                })}
              >
                <img src="/images/events/decentrahack-2026.jpg" alt="DecentraHACK Hackathon" className="w-full h-[110px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-2.5">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-amber-300">2026 Hackathon</span>
                  <p className="font-heading text-xs font-bold text-white line-clamp-1">National Web3 Builders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Milestone Stat Ribbon */}
      <section className="bg-gradient-to-r from-ieee-nearblack via-ieee-navy to-ieee-nearblack border-y border-white/10 py-5 text-white">
        <div className="section-container">
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            <div className="border-l-2 border-ieee-brightcyan/60 pl-3">
              <dt className="font-heading text-2xl font-bold text-ieee-brightcyan sm:text-3xl">2023</dt>
              <dd className="text-xs text-slate-300 font-medium">Established in Pune</dd>
            </div>
            <div className="border-l-2 border-ieee-brightcyan/60 pl-3">
              <dt className="font-heading text-2xl font-bold text-ieee-brightcyan sm:text-3xl">110+</dt>
              <dd className="text-xs text-slate-300 font-medium">Symposium Attendees</dd>
            </div>
            <div className="border-l-2 border-ieee-brightcyan/60 pl-3">
              <dt className="font-heading text-2xl font-bold text-ieee-brightcyan sm:text-3xl">156</dt>
              <dd className="text-xs text-slate-300 font-medium">EBCT Pan-India Delegates</dd>
            </div>
            <div className="border-l-2 border-ieee-brightcyan/60 pl-3">
              <dt className="font-heading text-2xl font-bold text-ieee-brightcyan sm:text-3xl">19 GPU</dt>
              <dd className="text-xs text-slate-300 font-medium">HPC Rig at MMCOE CoE</dd>
            </div>
            <div className="border-l-2 border-ieee-brightcyan/60 pl-3">
              <dt className="font-heading text-2xl font-bold text-ieee-brightcyan sm:text-3xl">66</dt>
              <dd className="text-xs text-slate-300 font-medium">Global BCTC Groups</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  )
}
