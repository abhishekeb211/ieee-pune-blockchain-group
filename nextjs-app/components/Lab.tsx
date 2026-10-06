import React from 'react'

export default function Lab() {
  return (
    <section id="lab" className="section-padding bg-slate-50 border-t border-slate-200">
      <div className="section-container">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">
            Research Facilities &amp; CoE
          </span>
          <h2 className="font-heading mt-1.5 text-2xl font-bold text-ieee-navy sm:text-3xl">
            Blockchain Laboratory &amp; Research Infrastructure
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Dedicated high-performance compute and testbed environments established in direct association with the IEEE Pune Blockchain Group.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Main Lab Profile Card */}
          <div className="institutional-card lg:col-span-2 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <span className="chip">Centre of Excellence</span>
                <h3 className="font-heading mt-2 text-lg font-bold text-ieee-navy">
                  Blockchain Server Room-Lab
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  In association with IEEE Pune Blockchain Group · Marathwada Mitra Mandal's College of Engineering (MMCOE), Pune
                </p>
              </div>
              <a
                href="https://mmcoe.edu.in/departments/information-technology/learning-infrastructure/blockchain/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-ieee-primary hover:underline"
              >
                Facility Portal ↗
              </a>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Established within the Department of Information Technology at MMCOE, this Centre of Excellence operates an advanced hardware and software facility designed for hands-on blockchain research, smart contract execution, enterprise testing, and distributed consensus benchmarking.
            </p>

            {/* Hardware Specs Grid */}
            <div className="mt-5">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-700">
                Hardware Rig Specifications
              </h4>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                <div className="spec-badge">
                  <span>Server Rig:</span>
                  <span>19 GPU HPC Server</span>
                </div>
                <div className="spec-badge">
                  <span>Processor:</span>
                  <span>3U 64 Cores</span>
                </div>
                <div className="spec-badge">
                  <span>GPU Compute Support:</span>
                  <span>Up to 19 GPUs (8 GB each)</span>
                </div>
                <div className="spec-badge">
                  <span>System Memory:</span>
                  <span>32GB DDR4 (2x16GB)</span>
                </div>
                <div className="spec-badge">
                  <span>Fast Storage:</span>
                  <span>1TB High-Speed SSD</span>
                </div>
                <div className="spec-badge">
                  <span>Motherboard:</span>
                  <span>Asus B250ME</span>
                </div>
                <div className="spec-badge">
                  <span>Rack &amp; PDU:</span>
                  <span>42U Rack / 50KVA Unit</span>
                </div>
                <div className="spec-badge">
                  <span>Mining / Accelerator:</span>
                  <span>BTC/ETH GPU Rig &amp; Accelerators</span>
                </div>
              </div>
            </div>
          </div>

          {/* Software & Tooling Ecosystem Card */}
          <div className="institutional-card p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">Software Stack</span>
              <h3 className="font-heading mt-1 text-base font-bold text-ieee-navy">
                Supported Frameworks &amp; Tooling
              </h3>

              <div className="mt-4 space-y-3 text-xs">
                <div>
                  <strong className="block text-slate-700">Protocols:</strong>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    <span className="chip">Ethereum</span>
                    <span className="chip">Hyperledger Fabric</span>
                    <span className="chip">Solana</span>
                  </div>
                </div>

                <div>
                  <strong className="block text-slate-700">Languages:</strong>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    <span className="chip">Solidity</span>
                    <span className="chip">Rust</span>
                    <span className="chip">Go</span>
                  </div>
                </div>

                <div>
                  <strong className="block text-slate-700">Developer Tools:</strong>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    <span className="chip">Hardhat</span>
                    <span className="chip">Truffle Suite</span>
                    <span className="chip">Ganache</span>
                    <span className="chip">Web3.js</span>
                    <span className="chip">Docker</span>
                    <span className="chip">Kubernetes</span>
                  </div>
                </div>

                <div>
                  <strong className="block text-slate-700">Consensus &amp; DeFi:</strong>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    <span className="chip">SHA-256</span>
                    <span className="chip">ECC</span>
                    <span className="chip">PoW / PoS</span>
                    <span className="chip">Uniswap</span>
                    <span className="chip">Aave</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <a
                href="https://mmcoe.edu.in/departments/information-technology/learning-infrastructure/blockchain/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center text-xs py-2"
              >
                Explore Lab Infrastructure ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
