import React from 'react'

const focusAreas = [
  {
    title: 'Blockchain & DLT',
    desc: 'Consensus protocols, Byzantine Fault Tolerance, Layer-1/Layer-2 ledger architectures, and scalability optimizations.',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Applied Cryptography',
    desc: 'Elliptic Curve Cryptography, hash algorithms, threshold signatures, and post-quantum cryptographic primitives.',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Smart Contracts & DApps',
    desc: 'Deterministic state machines, Solidity, Rust-based contract development, EVM mechanics, and formal verification.',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Blockchain',
    desc: 'Permissioned consortia, Hyperledger Fabric, Firefly, private chaincode governance, and B2B auditability.',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Decentralized AI',
    desc: 'Autonomous AI agent registries, decentralized multi-agent coordination, and verifiable on-chain AI inference.',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Federated Learning',
    desc: 'Privacy-preserving collaborative model training without data centralisation, backed by ledger audit trails.',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Digital Identity & SSI',
    desc: 'Self-Sovereign Identity, Decentralized Identifiers (DIDs), Verifiable Credentials, and selective attribute disclosure.',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
  },
  {
    title: 'Zero-Knowledge Proofs',
    desc: 'zk-SNARKs, zk-STARKs, succinct verification, and cryptographic computational validity without revealing inputs.',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'DePIN',
    desc: 'Decentralized Physical Infrastructure Networks, token-incentivized sensor networks, compute grids, and telecom mesh.',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Blockchain Security',
    desc: 'Smart contract security audits, re-entrancy defenses, static bytecode analysis, and formal logic verification.',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Sustainability & Green DLT',
    desc: 'Energy-efficient consensus, P2P microgrid energy trading, carbon credit tracking, and UN SDGs alignment.',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Interoperability',
    desc: 'Cross-chain atomic swaps, heterogeneous bridge protocols, relayed consensus, and standardized interoperability schemas.',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
]

export default function FocusAreas({ limit }: { limit?: number }) {
  return (
    <section id="focus" className="section-padding bg-white border-t border-slate-200">
      <div className="section-container">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">
            Research &amp; Engineering Scope
          </span>
          <h2 className="font-heading mt-1.5 font-bold text-ieee-navy">
            {limit ? 'Technical focus' : '12 Core Technical Focus Areas'}
          </h2>
          <p className="measure mt-2 text-base text-slate-600">
            Our initiatives span fundamental cryptographic infrastructure, enterprise distributed ledgers, and cutting-edge decentralized intelligence.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {(limit ? focusAreas.slice(0, limit) : focusAreas).map((area) => (
            <div key={area.title} className="institutional-card top-accent-card">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ieee-primary/10 text-ieee-primary">
                {area.icon}
              </div>
              <h3 className="font-heading mt-2.5 text-sm font-bold text-ieee-navy">
                {area.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
