'use client'

import React, { useState } from 'react'
import { LightboxData } from './Lightbox'

const subsystems = [
  {
    id: 'gpu-rig',
    label: '1. 19 GPU Accelerator Rig',
    stat: 'Up to 19 GPUs',
    title: '19 GPU Accelerator Array',
    desc: 'Equipped with up to 19 discrete GPU compute sets (8GB memory each) mounted on dedicated riser cards, optimized for cryptographic proof-of-work simulation, consensus latency benchmarking, and verifiable AI acceleration.',
    img: '/images/lab/mmcoe-hpc-rig.png',
    caption: '19 GPU HPC Server Rig (Multi-GPU Compute & Consensus Benchmark Testbed)',
  },
  {
    id: 'server-rack',
    label: '2. 42U Rack & 50KVA Power Unit',
    stat: '42U Enclosure',
    title: '42U Enterprise Server Rack',
    desc: 'Standard 42U rack enclosure engineered with multi-point ventilation, dedicated thermal monitoring, and a KR-PDU-50KVA power management system operating at 100-240VAC 50/60Hz for continuous enterprise load testing.',
    img: '/images/lab/mmcoe-server-rack.png',
    caption: '42U High-Density Server Rack with KR-PDU-50KVA Power Unit',
  },
  {
    id: 'workstations',
    label: '3. Developer Workstations & Terminals',
    stat: 'Full Dev Stack',
    title: 'Student Workstations & Smart Contract Terminals',
    desc: 'Multi-seat developer lab equipped with Truffle, Hardhat, Ganache, and Docker for compiling, debugging, and formal verification of Solidity and Rust smart contracts connected to local testnets.',
    img: '/images/lab/mmcoe-lab-workstation.png',
    caption: 'Research Workstations & Student Developer Terminals at MMCOE',
  },
  {
    id: 'coe-facility',
    label: '4. Centre of Excellence (CoE) Facility',
    stat: 'MMCOE IT Dept',
    title: 'Centre of Excellence Facility',
    desc: 'Officially recognized Centre of Excellence within MMCOE Information Technology department, operating in direct partnership with the IEEE Blockchain Pune Local Group to facilitate academic research, FDPs, and prototypes.',
    img: '/images/lab/mmcoe-coe-facility.png',
    caption: 'Centre of Excellence in Blockchain Technology Facility Entrance',
  },
]

interface LabProps {
  onSelectPhoto?: (data: LightboxData) => void
}

export default function Lab({ onSelectPhoto }: LabProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const currentSubsystem = subsystems[activeIdx]

  return (
    <section id="lab" className="section-padding border-t border-[#C9EBE8]">
      <div className="section-container">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">
            Research Facilities &amp; CoE
          </span>
          <h2 className="page-title mt-3">
            Blockchain Laboratory &amp; Research Infrastructure
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Dedicated high-performance compute and testbed environments established in direct association with the IEEE Blockchain Pune Local Group.
          </p>
        </div>

        {/* Interactive Hardware Rig Inspector Widget */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Left: High-Definition Image Display & Lightbox Trigger (7 cols) */}
          <div className="lg:col-span-7 flutter-card overflow-hidden flex flex-col justify-between">
            <div className="relative bg-slate-900 group">
              <img
                src={currentSubsystem.img}
                alt={currentSubsystem.title}
                className="w-full h-80 sm:h-96 object-contain bg-slate-950 transition-opacity duration-200"
              />
              {onSelectPhoto && (
                <button
                  type="button"
                  onClick={() =>
                    onSelectPhoto({
                      src: currentSubsystem.img,
                      title: currentSubsystem.title,
                      meta: 'Department of IT, MMCOE Pune · Centre of Excellence in Blockchain Technology',
                      source:
                        'https://mmcoe.edu.in/departments/information-technology/learning-infrastructure/blockchain/',
                    })
                  }
                  className="absolute bottom-3 right-3 bg-white/90 backdrop-blur hover:bg-white text-ieee-navy px-3 py-1.5 rounded-full text-xs font-bold shadow flex items-center gap-1.5 transition"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                  Expand Photo
                </button>
              )}
            </div>

            <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="chip">Live Hardware Visualizer</span>
                <p className="font-heading mt-1 text-sm font-bold text-ieee-navy">
                  {currentSubsystem.caption}
                </p>
              </div>
              <a
                href="https://mmcoe.edu.in/departments/information-technology/learning-infrastructure/blockchain/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-ieee-primary hover:underline"
              >
                Portal ↗
              </a>
            </div>
          </div>

          {/* Right: Interactive Subsystem Hotspots (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">
                Subsystem Inspector
              </span>
              <h3 className="font-heading mt-1 text-lg font-bold text-ieee-navy">
                {currentSubsystem.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentSubsystem.desc}
              </p>
            </div>

            {/* Hotspot Buttons */}
            <div className="space-y-2">
              {subsystems.map((sub, idx) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`inspector-hotspot w-full ${activeIdx === idx ? 'active' : ''}`}
                >
                  <span>{sub.label}</span>
                  <span className="text-xs font-bold text-ieee-primary">{sub.stat}</span>
                </button>
              ))}
            </div>

            {/* Software Stack Summary Chips */}
            <div className="pt-3 border-t border-slate-200">
              <span className="block text-xs font-semibold text-slate-700">
                Supported Protocols &amp; Environments:
              </span>
              <div className="mt-2 flex flex-wrap gap-1.5 text-xs">
                <span className="chip">Ethereum</span>
                <span className="chip">Hyperledger Fabric</span>
                <span className="chip">Solana</span>
                <span className="chip">Solidity</span>
                <span className="chip">Rust</span>
                <span className="chip">Hardhat</span>
                <span className="chip">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
