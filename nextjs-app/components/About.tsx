import React from 'react'

const objectives = [
  {
    icon: '🎓',
    title: 'Students',
    description:
      'University blockchain clubs and student branches across Pune get access to hackathons, mentorship, and entrepreneurship programs run in partnership with the global IEEE Blockchain Technical Community.',
  },
  {
    icon: '🔬',
    title: 'Researchers',
    description:
      'A forum to present work, exchange ideas, and collaborate on distributed ledger technology, cryptography, consensus mechanisms, and Web3 research with peers across Region 10 (APAC) and beyond.',
  },
  {
    icon: '🏛️',
    title: 'Academicians',
    description:
      'Channels for curriculum development, joint publications, faculty development programs, and outreach activities that bring blockchain education into classrooms and premier institutions across Pune.',
  },
  {
    icon: '💼',
    title: 'Industry Professionals',
    description:
      "Networking with practitioners building real-world enterprise blockchain, FinTech, and DLT applications in Pune's IT and tech corridors, plus discounted access to IEEE educational content and conferences.",
  },
]

export default function About() {
  return (
    <section id="about" className="section-container py-20">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-ieee-blue">
          About the Group
        </span>
        <h2 className="mt-3 text-3xl font-bold text-ieee-navy sm:text-4xl">
          Advancing blockchain in Pune, together
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          The IEEE Pune Blockchain Group is a local chapter aligned with the mission of the{' '}
          <a
            href="https://blockchain.ieee.org/communities/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ieee-blue underline decoration-ieee-blue/30 underline-offset-2 hover:decoration-ieee-blue"
          >
            IEEE Blockchain Technical Community
          </a>{' '}
          and{' '}
          <a
            href="https://ieeepune.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ieee-blue underline decoration-ieee-blue/30 underline-offset-2 hover:decoration-ieee-blue"
          >
            IEEE Pune Section
          </a>
          : to promote educational and outreach activities and collaborate with organizations working in the blockchain space — forming a vibrant network of professionals, researchers, and students interested in networking, collaborating, learning, sharing, and advancing technology across Maharashtra, India, and the broader Region 10 (APAC).
        </p>
      </div>

      <div id="objectives" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {objectives.map((obj) => (
          <div
            key={obj.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ieee-blue/10 text-xl">
              {obj.icon}
            </div>
            <h3 className="mt-4 text-base font-semibold text-ieee-navy">{obj.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {obj.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
